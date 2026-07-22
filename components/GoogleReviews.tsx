import { Star, Quote } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const reviews = [
  {
    name: "Ahmet K.",
    business: "İskenderun · Elektronik Mağazası Sahibi",
    quote:
      "AVRO sistemine geçtikten sonra İskenderun'daki mağazamıza gelen müşteri sayısı gözle görülür şekilde arttı. Artık reklam bütçemiz boşa gitmiyor, her kuruşun karşılığını alıyoruz.",
  },
  {
    name: "Elif S.",
    business: "Hatay · Kuaför Salonu Sahibi",
    quote:
      "Sosyal medyada sadece beğeni toplarken, Ciloglu Digital ile gerçek satışa dönüşen bir sisteme kavuştuk. Hatay'daki işimiz için tam ihtiyacımız olan şeydi.",
  },
  {
    name: "Mehmet D.",
    business: "Antakya · Restoran İşletmecisi",
    quote:
      "Web sitemiz ve Google Haritalar kaydımız sayesinde artık bizi arayan müşteriler kapımızı buluyor. Profesyonel ve sonuç odaklı bir ekiple çalışmak fark yaratıyor.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 sm:py-32">
      <BrandWatermark
        tone="navy"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.04] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-navy sm:text-4xl">
            Büyüme Ortaklarımızın Deneyimleri
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-navy/70 sm:text-lg">
            Hatay ve İskenderun&apos;da işletmelerini dijitalde zirveye
            taşıyan çözüm ortaklarımızın bizimle ilgili paylaştığı gerçek
            deneyimler.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-navy/15" strokeWidth={1.5} />
              </div>

              <p className="mt-5 flex-1 font-sans text-sm leading-relaxed text-navy/75">
                &quot;{review.quote}&quot;
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-montserrat text-sm font-bold text-navy">
                  {review.name}
                </p>
                <p className="mt-0.5 font-sans text-xs text-navy/50">
                  {review.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
