import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import ScarcityNote from "./ScarcityNote";
import HashNavLink from "./HashNavLink";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="animate-gradient-drift pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="animate-gradient-drift animation-delay-450 pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-[130px]"
      />
      <BrandWatermark
        tone="accent"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-left">
          {/* SEO DEĞİŞİKLİĞİ: H1 anahtar kelime hedefine taşındı */}
          <h1 className="animate-fade-in-up animation-delay-150 animate-badge-glow inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-blue-500 px-4 py-2 font-montserrat text-[11px] font-bold uppercase tracking-wide text-offwhite ring-1 ring-inset ring-offwhite/25 sm:px-5 sm:text-xs sm:tracking-widest">
            <Sparkles className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
            Hatay&apos;ın Dijital Büyüme Ajansı
          </h1>

          {/* SEO DEĞİŞİKLİĞİ: Destekleyici metin H2 yapıldı */}
          <h2 className="animate-fade-in-up animation-delay-300 mt-6 font-syne text-4xl font-bold leading-[1.1] tracking-tighter text-offwhite sm:text-5xl lg:text-5xl xl:text-6xl">
            Satış yok çünkü sistem yok.
          </h2>

          <p className="animate-fade-in-up animation-delay-450 mt-6 max-w-xl font-sans text-base leading-relaxed text-offwhite/75 sm:text-lg">
            İşletmenizi geleneksel&apos;in dar kalıplarından kurtarıyor;
            dijitalde 7/24 çalışan, kârlı ve sarsılmaz bir satış makinesi
            inşa ediyoruz.
          </p>

          <div className="animate-fade-in-up animation-delay-450 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <HashNavLink
              href="/#iletisim"
              aria-label="İletişim bölümüne git"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-montserrat text-base font-semibold text-offwhite shadow-lg shadow-accent/25 transition-all hover:bg-blue-600 sm:w-auto"
            >
              Bize Ulaşın
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </HashNavLink>
          </div>
          <ScarcityNote className="animate-fade-in-up animation-delay-450 mt-4 text-left text-offwhite" />
        </div>

        <div className="animate-fade-in-up animation-delay-300 relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_25px_70px_-15px_rgba(37,99,235,0.55)] lg:max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Dijital büyüme ve veri analitiği vizyonu"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] border border-offwhite/10 bg-offwhite/5 backdrop-blur-xl"
          />
        </div>
      </div>
    </section>
  );
}