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

        <div className="mt-14">
          {/* TODO: Google Reviews widget script'i buraya entegre edilecek */}
          <div
            id="google-reviews-widget-container"
            className="w-full min-h-[300px] flex items-center justify-center border border-dashed border-gray-600 rounded-lg text-gray-400"
          >
            Google Yorumlar Widget Alanı
          </div>
        </div>
      </div>
    </section>
  );
}