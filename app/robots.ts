import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Tüm arama motoru botlarına (Google, Bing vb.) izin ver
      allow: "/", // Sitenin tamamını taramaya izin ver
      disallow: [
        "/api/", // API rotalarını taramalarını engelle
        "/_next/", // Next.js derleme dosyalarını engelle (zaten taranmaz ama yazmak iyidir)
        "/admin/", // Eğer ileride bir admin paneli yaparsan, botların girmesini engeller
      ],
    },
    // Botların sitemap'i kolayca bulması için adresini veriyoruz
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}