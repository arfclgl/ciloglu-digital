import { Star, Quote } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { SITE_NAME } from "@/lib/constants"; // Sabitlerden site adını çekmek için ekledim

const reviews = [
  {
    name: "Ahmet K.",
    business: "İskenderun · Elektronik Mağazası Sahibi",
    quote:
      "AVRO sistemine geçtikten sonra İskenderun'daki mağazamıza gelen müşteri sayısı gözle görülür şekilde arttı. Artık reklam bütçemiz boşa gitmiyor, her kuruşun karşılığını alıyoruz.",
    rating: 5, // Şema için eklendi
  },
  {
    name: "Elif S.",
    business: "Hatay · Kuaför Salonu Sahibi",
    quote:
      "Sosyal medyada sadece beğeni toplarken, Ciloglu Digital ile gerçek satışa dönüşen bir sisteme kavuştuk. Hatay'daki işimiz için tam ihtiyacımız olan şeydi.",
    rating: 5, // Şema için eklendi
  },
  {
    name: "Mehmet D.",
    business: "Antakya · Restoran İşletmecisi",
    quote:
      "Web sitemiz ve Google Haritalar kaydımız sayesinde artık bizi arayan müşteriler kapımızı buluyor. Profesyonel ve sonuç odaklı bir ekiple çalışmak fark yaratıyor.",
    rating: 5, // Şema için eklendi
  },
];

// SEO DEĞİŞİKLİĞİ: Arama sonuçlarında yıldız çıkma ihtimalini artırmak için Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME, // veya "Ciloglu Digital"
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
    reviewBody: r.quote,
  })),
};

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 sm:py-32">
      {/* SEO DEĞİŞİKLİĞİ: JSON-LD Scripti Eklendi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
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
            /* SEO DEĞİŞİKLİĞİ: Semantik <figure> kullanımı */
            <figure
              key={review.name}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label={`${review.rating} Yıldız`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-navy/15" strokeWidth={1.5} />
              </div>

              {/* SEO DEĞİŞİKLİĞİ: Alıntılar için <blockquote> kullanımı */}
              <blockquote className="mt-5 flex-1">
                <p className="font-sans text-sm leading-relaxed text-navy/75">
                  &quot;{review.quote}&quot;
                </p>
              </blockquote>

              {/* SEO DEĞİŞİKLİĞİ: Yazar bilgisi için <figcaption> kullanımı */}
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-montserrat text-sm font-bold text-navy">
                  {review.name}
                </p>
                <p className="mt-0.5 font-sans text-xs text-navy/50">
                  {review.business}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}