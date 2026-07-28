import {
  Globe,
  Building2,
  MapPin,
  Megaphone,
  ThumbsUp,
  Share2,
  Video,
  Workflow,
  Filter,
  Rocket,
  TrendingUp,
  Compass,
  FileText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import type { PostMeta } from "@/lib/markdown";

const CLUSTER_ICONS: Record<string, LucideIcon> = {
  "Web Sitesi": Globe,
  "Google Business": Building2,
  "Google Haritalar": MapPin,
  "Google Ads": Megaphone,
  "Meta Reklamları": ThumbsUp,
  "Sosyal Medya Yönetimi": Share2,
  "Kamera/Drone Çekimleri": Video,
  "Satış Otomasyonu": Workflow,
  "Funnel Sistemleri": Filter,
  "AVRO Sistemi 1": Rocket,
  "AVRO Sistemi 2": TrendingUp,
  "Ana Pillar Büyüme Rehberi": Compass,
};

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
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
          {posts.map((post) => {
            const Icon = CLUSTER_ICONS[post.cluster] ?? FileText;
            return (
              <li key={post.slug}>
                {/* SEO DEĞİŞİKLİĞİ: İçerik <article> etiketi ile sarmalandı */}
                <article>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white/50 shadow-lg shadow-navy/10 backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.035] hover:border-accent/40 hover:bg-white/85 hover:shadow-2xl hover:shadow-accent/20"
                  >
                    <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy to-accent">
                      <Icon
                        className="h-12 w-12 text-offwhite/30"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-montserrat text-[11px] font-semibold uppercase tracking-wide text-accent">
                        {post.cluster}
                      </span>

                      {/* SEO DEĞİŞİKLİĞİ: Hiyerarşi (H1 > H2 > H3) gereği başlık h3'e çekildi */}
                      <h3 className="mt-4 font-montserrat text-base font-bold leading-snug text-navy">
                        {post.title}
                      </h3>

                      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-navy/65">
                        {post.meta_description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-accent">
                        Devamını Oku
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}