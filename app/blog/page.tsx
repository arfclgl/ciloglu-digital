import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  // SEO DEĞİŞİKLİĞİ: Sadece Blog yazıldı, layout bunu tamamlayacak.
  title: "Blog", 
  description:
    "İskenderun ve Hatay'daki işletme sahipleri için yerel SEO, reklam yönetimi, otomasyon ve sosyal medya stratejileri üzerine güncel içerikler.",
  alternates: {
    canonical: `${SITE_URL}/blog`, // Sayfanın orijinal kaynağı
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}