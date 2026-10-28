import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE_URL } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  return [
    ...Object.entries(SEO_PAGES)
      .filter(([path, page]) =>
        path === "/blog" ? posts.length > 0 : page.index,
      )
      .map(([path]) => ({ url: new URL(path, SITE_URL).href })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
    })),
  ];
}
