import {
  TrendingDown,
  Workflow,
  MapPin,
  ThumbsUp,
  Wallet,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const posts = [
  {
    icon: TrendingDown,
    category: "Yerel SEO",
    title: "İskenderun'daki İşletmeler Neden Dijitalde Satış Kaçırıyor?",
    excerpt:
      "Trafik var ama satış yok mu? İskenderun'daki işletmelerin dijitalde en çok yaptığı 3 stratejik hatayı ve çözümünü anlatıyoruz.",
  },
  {
    icon: Workflow,
    category: "Otomasyon",
    title: "Hatay'da Reklam Bütçenizi Çöpe Atmamak İçin Otomasyon Çözümleri",
    excerpt:
      "Reklamdan gelen her mesajı elle cevaplamak zaman kaybı. Bütçenizi ciroya çeviren satış otomasyonlarının mantığını anlatıyoruz.",
  },
  {
    icon: MapPin,
    category: "Google Haritalar",
    title:
      "Antakya ve İskenderun'da Google Haritalar'da Nasıl Öne Çıkarsınız?",
    excerpt:
      "Sizi arayan yerel müşteri Google'da sizi bulamıyorsa yok sayılıyorsunuz. Haritalar'da öne çıkmanın temel kurallarını paylaşıyoruz.",
  },
  {
    icon: ThumbsUp,
    category: "Sosyal Medya",
    title:
      "Sosyal Medyada Beğeni mi, Müşteri mi? Hatay İşletmeleri İçin Doğru Strateji",
    excerpt:
      "Binlerce beğeni alıp tek satış yapamayan hesaplar gördük. Beğeniyi değil, doğrudan müşteriye dönüşümü hedefleyen içerik mantığını anlatıyoruz.",
  },
  {
    icon: Wallet,
    category: "Web Sitesi",
    title: "İskenderun'da Web Sitesi Sahibi Olmanın Gerçek Maliyeti Nedir?",
    excerpt:
      "Ucuz şablon sitelerin gizli maliyetlerini ve satışa odaklı bir web sitesine yatırımın işletmenize neden kâr olarak döndüğünü açıklıyoruz.",
  },
  {
    icon: Megaphone,
    category: "Reklam Yönetimi",
    title: "Antakya'da Reklam Verirken Kaçınılması Gereken 5 Hata",
    excerpt:
      "Hedef kitle seçiminden bütçe dağılımına, bölgedeki işletmelerin reklamlarda en sık düştüğü 5 tuzağı ve doğrusunu paylaşıyoruz.",
  },
];

export default function BlogGrid() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-16 sm:py-20">
      <BrandWatermark
        tone="navy"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.04] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* SEO DEĞİŞİKLİĞİ: Erişilebilirlik ve başlık hiyerarşisi için görünmez H2 */}
        <h2 className="sr-only">Blog Yazıları</h2>

        {/* SEO DEĞİŞİKLİĞİ: Sarmalayıcı yapı ul olarak değiştirildi */}
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title}>
              {/* SEO DEĞİŞİKLİĞİ: İçerik <article> etiketi ile sarmalandı */}
              <article>
                <a
                  href="#"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white/50 shadow-lg shadow-navy/10 backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.035] hover:border-accent/40 hover:bg-white/85 hover:shadow-2xl hover:shadow-accent/20"
                >
                  <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy to-accent">
                    <post.icon
                      className="h-12 w-12 text-offwhite/30"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-montserrat text-[11px] font-semibold uppercase tracking-wide text-accent">
                      {post.category}
                    </span>
                    
                    {/* SEO DEĞİŞİKLİĞİ: Hiyerarşi (H1 > H2 > H3) gereği başlık h3'e çekildi */}
                    <h3 className="mt-4 font-montserrat text-base font-bold leading-snug text-navy">
                      {post.title}
                    </h3>
                    
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-navy/65">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-accent">
                      Devamını Oku
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}