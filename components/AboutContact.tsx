import { MapPin, Phone, Mail } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_INTL,
  SERVICE_AREA,
  WHATSAPP_LINK,
} from "@/lib/constants";

const details = [
  {
    icon: MapPin,
    label: "Adres",
    value: "İskenderun, Hatay, Türkiye",
    href: undefined,
  },
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
];

export default function AboutContact() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <BrandWatermark
        tone="accent"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-offwhite sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-offwhite/70 sm:text-lg">
            İskenderun ve Hatay&apos;ın her yerindeki işletme sahipleriyle
            tanışmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* SEO DEĞİŞİKLİĞİ: Semantik <address> etiketi kullanıldı */}
          <address className="not-italic flex flex-col justify-center gap-5 rounded-2xl border border-offwhite/15 bg-gradient-to-br from-offwhite/[0.14] to-accent/[0.10] p-7 shadow-xl shadow-black/30 backdrop-blur-2xl sm:p-9">
            {details.map((detail) => {
              const content = (
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <detail.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-offwhite/50">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 font-sans text-sm text-offwhite/85">
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

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden bizimle iletişime geçin"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 font-montserrat text-sm font-semibold text-offwhite transition-colors hover:bg-blue-600"
            >
              WhatsApp&apos;tan Yazın
            </a>
          </address>

          {/* Google Haritalar yer tutucu — gerçek adres/embed linki netleştiğinde
              buraya <iframe src="..."> ile canlı harita eklenecek. */}
          {/* SEO DEĞİŞİKLİĞİ: aria-label eklendi */}
          <div
            className="relative flex min-h-[280px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-offwhite/15 bg-offwhite/[0.04] p-7"
            aria-label="İşletme konumumuz: İskenderun, Hatay"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f8fafc 1px, transparent 1px), linear-gradient(to bottom, #f8fafc 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-offwhite shadow-lg shadow-accent/40">
              <MapPin className="h-7 w-7" strokeWidth={2} />
            </span>
            <p className="relative font-montserrat text-sm font-semibold text-offwhite">
              İskenderun, Hatay
            </p>
            <p className="relative max-w-[220px] text-center font-sans text-xs text-offwhite/45">
              {SERVICE_AREA}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}