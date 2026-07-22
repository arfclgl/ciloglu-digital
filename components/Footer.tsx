import type { ComponentType } from "react";
import Logo from "./Logo";
import HashNavLink from "./HashNavLink";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import {
  NAV_LINKS,
  PHONE_DISPLAY,
  SERVICE_AREA,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-offwhite/10 bg-navy pb-8 pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-offwhite/60">
              Hatay&apos;ın en güçlü dijital büyüme ajansı. AVRO sistemiyle
              işletmenizi dijitalde kârlı ve sarsılmaz bir satış makinesine
              dönüştürüyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat text-sm font-bold uppercase tracking-wide text-offwhite/50">
              Hızlı Bağlantılar
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <HashNavLink
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-offwhite/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </HashNavLink>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-montserrat text-sm font-bold uppercase tracking-wide text-offwhite/50">
              Bizi Takip Edin
            </h4>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/10 text-offwhite/70 transition-colors hover:bg-accent hover:text-offwhite"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-montserrat text-sm font-bold uppercase tracking-wide text-offwhite/50">
              İletişim
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-offwhite/70 transition-colors hover:text-accent"
              >
                {PHONE_DISPLAY} (WhatsApp)
              </a>
              <p className="font-sans text-sm leading-relaxed text-offwhite/70">
                {SERVICE_AREA}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-offwhite/10 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-offwhite/45">
            © {year} Ciloglu Digital. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-xs text-offwhite/45">
            İskenderun · Antakya · Hatay Geneli Hizmet
          </p>
        </div>
      </div>
    </footer>
  );
}
