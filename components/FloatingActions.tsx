"use client";

import { MessageCircle, Phone } from "lucide-react";
import { PHONE_INTL, WHATSAPP_LINK } from "@/lib/constants";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${PHONE_INTL.replace(/\s/g, "")}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-offwhite shadow-lg shadow-black/25 ring-1 ring-offwhite/10 transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <Phone className="h-5 w-5" strokeWidth={2.25} />
        {/* SEO DEĞİŞİKLİĞİ: Sadece sr-only kullanılarak ekran okuyucuların çift okuması engellendi */}
        <span className="sr-only">Bizi arayın</span>
      </a>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-110 active:scale-95 animate-whatsapp-pulse"
      >
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
        {/* SEO DEĞİŞİKLİĞİ: Sadece sr-only kullanılarak ekran okuyucuların çift okuması engellendi */}
        <span className="sr-only">WhatsApp&apos;tan yazın</span>
      </a>
    </div>
  );
}