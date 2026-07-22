import { TrendingUp, Layers, Compass, Cpu } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const points = [
  {
    icon: TrendingUp,
    dismiss: "Görünürlük Değil",
    keep: "Satış",
    description:
      "Klasik ajanslar kaç kişinin gördüğüne odaklanır. Biz, AVRO sistemi sayesinde o görenlerin kaçının müşteriye dönüştüğüne odaklanırız.",
  },
  {
    icon: Layers,
    dismiss: "Parça Parça Değil",
    keep: "Bütünsel Ekosistem",
    description:
      "Sadece kopuk bir web sitesi veya tekil bir reklam kampanyası yapıp kenara çekilmeyiz. Tüm varlıklarınızı birbirine bağlayan sarsılmaz bir satış makinesi kurarız.",
  },
  {
    icon: Compass,
    dismiss: "Talimat Bekleyen Değil",
    keep: "Yönlendiren Vizyon",
    description:
      "Sizden ne yapacağımızı söylemenizi beklemeyiz. Masanın aynı tarafına geçer ve dijital büyüme ortağınız olarak stratejiyi biz belirleriz.",
  },
  {
    icon: Cpu,
    dismiss: "Manuel Karmaşa Değil",
    keep: "Akıllı Otomasyon",
    description:
      "Müşteri yazışmalarında boğulmanıza izin vermeyiz. Kurduğumuz akıllı filtreleme ve satış hunileri ile zamanınızı size geri veririz.",
  },
];

export default function AboutDifference() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-20 sm:py-28">
      <BrandWatermark
        tone="navy"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.04] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-navy sm:text-4xl">
            Klasik Ajansları Unutun. Biz Bir &quot;Dijital Büyüme
            Ajansı&quot;yız.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-navy/70 sm:text-lg">
            Çoğu ajans size sadece aylık gönderi kotaları, anlamsız beğeniler
            ve karmaşık istatistikler satar. Ciloglu Digital olarak biz ise
            size &quot;ölçülebilir büyüme&quot; ve tıkır tıkır işleyen bir
            &quot;sistem&quot; kurarız. Amacımız göz boyamak değil; kasanıza
            giren nakit akışını ve sektördeki yerel otoritenizi artırmaktır.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.keep}
              className="flex gap-5 rounded-2xl border border-navy/10 bg-white/50 p-7 shadow-lg shadow-navy/10 backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/40 hover:bg-white/85 hover:shadow-2xl hover:shadow-accent/20"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
                <point.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-montserrat text-lg font-bold leading-snug">
                  <span className="text-navy/35 line-through decoration-2">
                    {point.dismiss}
                  </span>{" "}
                  <span className="text-accent">{point.keep}</span>
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
