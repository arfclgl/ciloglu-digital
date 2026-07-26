import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import ScarcityNote from "./ScarcityNote";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_INTL,
  SERVICE_AREA,
  WHATSAPP_LINK,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const details = [
  {
    icon: Phone,
    label: "Telefon",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_INTL.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Hizmet Bölgesi",
    value: SERVICE_AREA,
    href: undefined,
  },
];

// SEO DEĞİŞİKLİĞİ: İletişim bölümü için ContactPoint Şeması
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_INTL,
    contactType: "customer service",
    email: CONTACT_EMAIL,
    areaServed: ["Hatay", "İskenderun", "Antakya"],
    availableLanguage: "Turkish",
  },
};

export default function ContactInfo() {
  return (
    <section
      id="iletisim"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-24 sm:py-32"
    >
      {/* SEO DEĞİŞİKLİĞİ: JSON-LD Scripti Eklendi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <BrandWatermark
        tone="accent"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-offwhite sm:text-4xl">
              İşletmenizi Büyütmeye Hazır Mısınız?
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-offwhite/70 sm:text-lg">
              AVRO sisteminin işletmenizde nasıl çalışacağını görmek,
              dijital büyüme haritanızı çıkarmak ve bizimle tanışmak için
              doğrudan ulaşın. Sizi dinlemek için hazırız.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden bizimle iletişime geçin"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-montserrat text-base font-semibold text-offwhite shadow-lg shadow-accent/25 transition-all hover:bg-blue-600"
              >
                WhatsApp&apos;tan Yazın
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <ScarcityNote className="text-offwhite" />
            </div>
          </div>

          {/* SEO DEĞİŞİKLİĞİ: Adres ve iletişim bilgileri için semantik <address> etiketi */}
          <address className="not-italic flex flex-col gap-5 rounded-2xl border border-offwhite/15 bg-gradient-to-br from-offwhite/[0.14] to-accent/[0.10] p-7 shadow-xl shadow-black/30 backdrop-blur-2xl sm:p-9">
            {details.map((detail) => {
              const content = (
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <detail.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-offwhite/50">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 font-sans text-sm leading-relaxed text-offwhite/85">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </address>
        </div>
      </div>
    </section>
  );
}