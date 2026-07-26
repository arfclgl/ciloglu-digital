import BrandWatermark from "./BrandWatermark";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="animate-gradient-drift pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[110px]"
      />
      <BrandWatermark
        tone="accent"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-montserrat text-xs font-semibold uppercase tracking-widest text-accent">
          Güncel &amp; Blog
        </span>

        {/* Ana başlık H1 olarak kalıyor, hiyerarşinin zirvesi */}
        <h1 className="mt-6 font-syne text-4xl font-bold leading-[1.1] tracking-tighter text-offwhite sm:text-5xl">
          Dijital Büyüme Rehberi
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-offwhite/75 sm:text-lg">
          Hatay&apos;ın işletmelerine özel stratejiler, yerel SEO ipuçları ve
          sahada edindiğimiz tecrübeyle hazırladığımız içerikler.
        </p>
      </div>
    </section>
  );
}