import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import AboutHero from "@/components/AboutHero";
import AboutDifference from "@/components/AboutDifference";
import AboutContact from "@/components/AboutContact";

export const metadata: Metadata = {
  // SEO DEĞİŞİKLİĞİ: Sadece sayfa adını yazdık. Layout'taki template bunu otomatik tamamlayacak.
  title: "Hakkımızda", 
  description:
    "Ciloglu Digital'in hikayesi İskenderun'da başladı. AVRO sistemiyle Hatay'ın işletmelerini dijitalde büyüten vizyonumuzu ve farkımızı keşfedin.",
  alternates: {
    // SEO DEĞİŞİKLİĞİ: Bu sayfanın orijinal kaynağı olduğunu belirttik
    canonical: `${SITE_URL}/hakkimizda`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutDifference />
      <AboutContact />
    </>
  );
}