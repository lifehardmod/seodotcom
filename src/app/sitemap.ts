import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seojuwon.com"; // 실제 도메인으로 변경해주세요

  // 정적 라우트
  const routes = ["", "/ux", "/video", "/etc", "/programming"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
