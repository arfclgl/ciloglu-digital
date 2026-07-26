import type { Metadata } from "next";
import { Syne, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

// Font optimizasyonlarına Türkçe karakter desteği (latin-ext) eklendi
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Hatay & İskenderun Dijital Büyüme Ajansı`,
    template: `%s | ${SITE_NAME}`, // Alt sayfalarda otomatik başlık birleştirme sağlar
  },
  description:
    "Ciloglu Digital, AVRO sistemiyle işletmenizi dijitalde 7/24 çalışan bir satış makinesine dönüştürür. İskenderun, Antakya ve Hatay'ın her yerine web sitesi, reklam yönetimi ve satış otomasyonu hizmeti.",
  keywords: [
    "Hatay dijital ajans",
    "İskenderun reklam ajansı",
    "Antakya dijital pazarlama",
    "Hatay web sitesi",
    "sosyal medya yönetimi Hatay",
    "Meta reklam yönetimi",
    "satış otomasyonu",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${SITE_NAME} | Hatay & İskenderun Dijital Büyüme Ajansı`,
    description:
      "İşletmenizi dijitalde kârlı ve sarsılmaz bir satış makinesine dönüştürüyoruz. Hatay'ın her yerine hizmet veriyoruz.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/brand/logo-wordmark-light.png`, // Sosyal medya paylaşım görseli
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Hatay & İskenderun Dijital Büyüme Ajansı`,
    description:
      "İşletmenizi dijitalde kârlı ve sarsılmaz bir satış makinesine dönüştürüyoruz.",
    images: [`${SITE_URL}/brand/logo-wordmark-light.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Hatay merkezli, AVRO sistemiyle işletmelere ölçülebilir dijital büyüme sunan dijital büyüme ajansı.",
  url: SITE_URL,
  telephone: "+905469098711",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hatay",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İskenderun" },
    { "@type": "City", name: "Antakya" },
    { "@type": "AdministrativeArea", name: "Hatay" },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${syne.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-offwhite text-navy">
        {/* Yerel SEO Yapısal Verisi (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}