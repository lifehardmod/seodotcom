import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://seojuwon.com/sitemap.xml", // 실제 도메인으로 변경해주세요
  };
}
