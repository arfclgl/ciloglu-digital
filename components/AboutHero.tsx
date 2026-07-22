import BrandWatermark from "./BrandWatermark";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-32 sm:pb-28 sm:pt-40">
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

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-montserrat text-xs font-semibold uppercase tracking-widest text-accent">
          Biz Kimiz
        </span>

        <h1 className="mt-6 font-syne text-4xl font-bold leading-[1.1] tracking-tighter text-offwhite sm:text-5xl">
          İskenderun&apos;dan Doğan, Hatay&apos;ı Büyüten Bir Vizyon.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-offwhite/75 sm:text-lg">
          Ciloglu Digital, bölgenin işletme sahiplerinin dijitalde yaşadığı
          gerçek sorunlardan doğdu. Uzaktan yönetilen, şablon kampanyalar
          sunan ajanslardan farklı olarak; İskenderun ve Hatay&apos;ın her
          köşesindeki esnafı, mağaza sahibini ve hizmet sektörünü yakından
          tanıyoruz. Amacımız sadece dijitalde var olmanızı değil, kasanıza
          giren parayı artırmayı sağlayan bütünsel bir sistem kurmaktır.
        </p>
      </div>
    </section>
  );
}
