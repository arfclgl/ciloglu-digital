import { Check, X } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import NetworkPattern from "./NetworkPattern";

const fitFor = [
  "Dijital dünyaya henüz hiç adım atmamış ama işini geleneksel'in ötesine taşıyarak güçlü bir başlangıç yapmak isteyen işletmeler.",
  'Mevcut dijital çabalarından sonuç alamayan; sadece "beğeni" değil, ölçülebilir ciro ve gerçek müşteri isteyen vizyoner işletme sahipleri.',
  'Dijital pazarlamayı ve reklamları bir "masraf" değil, kârlı bir "yatırım" olarak görenler.',
  "Manuel süreçlerden yorulmuş, satış otomasyonlarıyla işini sistemleştirip zaman kazanmak isteyenler.",
];

const notFitFor = [
  '"Bana sadece sahte takipçi ve beğeni atın yeter" diyenler.',
  "Dijital yatırımlardan bir gecede sihirli ve gerçekdışı sonuçlar bekleyenler.",
  "Kurulan sisteme ve uzmanlığa güvenmeyip sürekli sürece müdahale etmek isteyenler.",
  "İşletmesini büyütmek için gereken minimum reklam bütçesini ayırmaktan çekinenler.",
];

export default function AudienceFilter() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <NetworkPattern className="absolute inset-0 h-full w-full text-accent opacity-[0.07]" />
      <BrandWatermark
        tone="accent"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-offwhite sm:text-4xl">
            Doğru İşletmelerle, Doğru Sistemleri Kuruyoruz.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-offwhite/70 sm:text-lg">
            Ciloglu Digital olarak herkesle çalışmıyoruz. Kurduğumuz AVRO
            sisteminin gücüne inanıyor ve zamanımızı sadece vizyonu geniş,
            büyümeye hazır işletmeler için harcıyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Uygun Olanlar Listesi */}
          <div className="rounded-2xl border border-accent/30 bg-offwhite/[0.06] p-7 sm:p-9">
            <h3 className="font-montserrat text-lg font-bold text-offwhite">
              Bu Sistem Kimler İçin Uygun?
            </h3>
            <ul className="mt-6 space-y-4">
              {fitFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* SEO DEĞİŞİKLİĞİ: aria-label="Uygun" eklendi */}
                  <span
                    aria-label="Uygun"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-offwhite"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-offwhite/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Uygun Olmayanlar Listesi */}
          <div className="rounded-2xl border border-offwhite/10 bg-offwhite/[0.03] p-7 sm:p-9">
            <h3 className="font-montserrat text-lg font-bold text-offwhite/70">
              Bu Sistem Kimler İçin Uygun Değil?
            </h3>
            <ul className="mt-6 space-y-4">
              {notFitFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* SEO DEĞİŞİKLİĞİ: aria-label="Uygun Değil" eklendi */}
                  <span
                    aria-label="Uygun Değil"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-offwhite/10 text-offwhite/50"
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-offwhite/45">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}