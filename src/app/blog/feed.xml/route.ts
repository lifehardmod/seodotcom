import { getPublishedPosts } from "@/lib/blog";
import { SEO_PAGES, SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function xml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[character]!,
  );
}

export function GET() {
  const items = getPublishedPosts()
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return `<item><title>${xml(post.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><description>${xml(post.description)}</description><pubDate>${new Date(`${post.publishedAt}T00:00:00+09:00`).toUTCString()}</pubDate>${post.tags.map((tag) => `<category>${xml(tag)}</category>`).join("")}</item>`;
    })
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${xml(SITE_NAME)}의 블로그</title><link>${SITE_URL}/blog</link><description>${xml(SEO_PAGES["/blog"].description)}</description><language>ko-kr</language><atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
