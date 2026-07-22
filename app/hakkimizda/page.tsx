import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import AboutHero from "@/components/AboutHero";
import AboutDifference from "@/components/AboutDifference";
import AboutContact from "@/components/AboutContact";

export const metadata: Metadata = {
  title: `Hakkımızda | ${SITE_NAME} - Hatay & İskenderun Dijital Büyüme Ajansı`,
  description:
    "Ciloglu Digital'in hikayesi İskenderun'da başladı. AVRO sistemiyle Hatay'ın işletmelerini dijitalde büyüten vizyonumuzu ve farkımızı keşfedin.",
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
