import { NAV_ITEMS } from "@/constant/nav";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seojuwon.work";

  // 정적 라우트
  const routes = NAV_ITEMS.map(
    (item) => ({
      url: `${baseUrl}${item.to}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: item.to === "/" ? 1 : 0.8,
    })
  );

  return routes;
}
