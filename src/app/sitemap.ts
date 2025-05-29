import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seodotcom.vercel.app";

  // 정적 라우트
  const routes = ["", "/ux", "/resume", "/etc", "/programming"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
