"""Check that every prerendered page's original-font glyphs fit its route subset.

Requires fontTools, the same optional dependency as subset-fonts.py.
Run after a production build: python3 scripts/check-fonts.py
"""
from html.parser import HTMLParser
from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]


class PageText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.hidden = 0
        self.text = []

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style"}:
            self.hidden += 1

    def handle_endtag(self, tag):
        if tag in {"script", "style"}:
            self.hidden -= 1

    def handle_data(self, data):
        if not self.hidden:
            self.text.append(data)


html_dir = ROOT / ".next/server/app"
pages = sorted(p for p in html_dir.rglob("*.html") if not p.stem.startswith("_"))
assert pages, "Run npm run build before checking fonts"
checked = 0
original = set(TTFont(ROOT / "public/fonts/PretendardVariable.woff2").getBestCmap())
for page in pages:
    route = page.relative_to(html_dir).with_suffix("").as_posix()
    # Blog content uses system fonts, so there is no per-article subset.
    if route == "blog" or route.startswith("blog/"):
        continue
    name = page.relative_to(html_dir).with_suffix("").as_posix().replace("/", "-")
    name = "home" if name == "index" else name
    parser = PageText()
    parser.feed(page.read_text())
    wanted = set(map(ord, "".join(parser.text))) & original
    subset = TTFont(ROOT / f"src/assets/fonts/Pretendard-{name}.woff2")
    missing = wanted - set(subset.getBestCmap())
    assert not missing, (
        f"{name}: missing {''.join(chr(cp) for cp in sorted(missing))!r}; "
        "run python3 scripts/subset-fonts.py, then rebuild"
    )
    checked += 1
    print(f"PASS {name}: {len(wanted)} used glyphs")
print(f"PASS {checked} route fonts")
