import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sabit rotalarımız
  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hakkimizda",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/blog",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
  ];

  // Rotaları Next.js sitemap formatına dönüştürüyoruz
  const sitemapUrls = routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return sitemapUrls;
}