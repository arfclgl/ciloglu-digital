import type { Metadata } from "next";
import { Syne, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Hatay & İskenderun Dijital Büyüme Ajansı`,
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
  openGraph: {
    title: `${SITE_NAME} | Hatay & İskenderun Dijital Büyüme Ajansı`,
    description:
      "İşletmenizi dijitalde kârlı ve sarsılmaz bir satış makinesine dönüştürüyoruz. Hatay'ın her yerine hizmet veriyoruz.",
    locale: "tr_TR",
    type: "website",
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Hatay merkezli, AVRO sistemiyle işletmelere ölçülebilir dijital büyüme sunan dijital büyüme ajansı.",
  areaServed: [
    { "@type": "City", name: "İskenderun" },
    { "@type": "City", name: "Antakya" },
    { "@type": "AdministrativeArea", name: "Hatay" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hatay",
    addressCountry: "TR",
  },
  telephone: "+905469098711",
  url: SITE_URL,
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-offwhite text-navy">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
