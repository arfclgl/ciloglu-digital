import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME} - Hatay'ın İşletmelerine Özel Dijital Büyüme Rehberi`,
  description:
    "İskenderun ve Hatay'daki işletme sahipleri için yerel SEO, reklam yönetimi, otomasyon ve sosyal medya stratejileri üzerine güncel içerikler.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
