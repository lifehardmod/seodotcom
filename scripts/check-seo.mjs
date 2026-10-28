// Run against `npm run build && npm run start`, or pass a preview URL.
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = process.argv[2] ?? "http://127.0.0.1:3000";
const canonicalBase = "https://www.seojuwon.work";
const publicPaths = ["/", "/resume"];
const app = fileURLToPath(new URL("../src/app/", import.meta.url));
const routes = readdirSync(app, { recursive: true })
  .filter((p) => p === "page.tsx" || p.endsWith("/page.tsx"))
  .map((p) => (p === "page.tsx" ? "/" : "/" + p.slice(0, -9)));
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const titles = new Set();
const descriptions = new Set();

for (const path of routes) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  assert.equal(response.status, 200, `${path}: HTTP status`);
  const html = await response.text();
  const metas = [...html.matchAll(/<meta\s[^>]*>/g)].map((m) => m[0]);
  const meta = (name) =>
    metas.find(
      (tag) => attr(tag, "name") === name || attr(tag, "property") === name,
    );
  const content = (name) => attr(meta(name) ?? "", "content");
  const canonical = [...html.matchAll(/<link\s[^>]*>/g)]
    .map((m) => m[0])
    .filter((tag) => attr(tag, "rel") === "canonical");
  assert.equal(canonical.length, 1, `${path}: one canonical`);
  assert.equal(
    new URL(attr(canonical[0], "href")).href,
    new URL(path, canonicalBase).href,
    `${path}: self canonical`,
  );
  assert.equal(
    new URL(content("og:url")).href,
    new URL(path, canonicalBase).href,
    `${path}: OG URL`,
  );
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = content("description");
  assert.ok(title && !titles.has(title), `${path}: unique title`);
  assert.ok(
    description && !descriptions.has(description),
    `${path}: unique description`,
  );
  titles.add(title);
  descriptions.add(description);
  assert.equal(content("og:title"), title);
  assert.equal(content("og:description"), description);
  assert.equal(content("og:image:width"), "400");
  assert.equal(content("og:image:height"), "500");
  assert.equal(
    content("google-site-verification"),
    "mqjx8l72kbaE1-3zoDgN3Cj4mLqywNQ-xmPesIKynLE",
  );
  assert.equal(
    content("robots"),
    publicPaths.includes(path) ? "index, follow" : "noindex, follow",
    `${path}: index policy`,
  );
  assert.ok(
    !content("viewport")?.includes("maximum-scale=1"),
    `${path}: zoom allowed`,
  );
  assert.equal(
    [...html.matchAll(/<h1(?:\s|>)/g)].length,
    1,
    `${path}: one meaningful H1`,
  );
  const structured = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  assert.equal(structured.length, 1, `${path}: structured data`);
  assert.ok(JSON.parse(structured[0][1])["@graph"].length);
  assert.ok(!html.includes('href="https://github.com/lifehardmod/RABBIT"'));
  assert.ok(!html.includes('href="https://github.com/lifehardmod/MIMO"'));
  if (path === "/ux")
    assert.ok(html.includes('href="/ux/a7m3"'), "A7M3 destination");
  if (path === "/ux/rabbit")
    for (const heading of ["디자인 시스템", "UI 설계", "성과"])
      assert.ok(html.includes(heading), `SSR section: ${heading}`);
  console.log(`PASS ${path}`);
}

const sitemap = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(
  urls.sort(),
  publicPaths.map((path) => new URL(path, canonicalBase).href).sort(),
);
assert.ok(
  !/<lastmod>|<changefreq>|<priority>/.test(xml),
  "No synthetic modification dates",
);
const robots = await (await fetch(new URL("/robots.txt", base))).text();
assert.ok(robots.includes(`Sitemap: ${canonicalBase}/sitemap.xml`));
const missing = await fetch(new URL("/seo-check-missing-page", base));
assert.equal(missing.status, 404);
assert.match(await missing.text(), /name="robots" content="noindex"/);
console.log(
  `PASS ${routes.length} pages, sitemap (${urls.length} URLs), robots and 404`,
);
