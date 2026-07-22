import Image from "next/image";
import {
  Search,
  MonitorSmartphone,
  Megaphone,
  Workflow,
  Globe,
  Share2,
  Target,
  Filter,
  Camera,
  Users,
} from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const avroSteps = [
  {
    number: "01",
    icon: Search,
    title: "Analiz",
    subtitle: "Kusursuz Stratejinin Temeli",
    description:
      "Her işletmenin dinamiği farklıdır. İşe, markanızı ve mevcut yapınızı derinlemesine inceleyerek başlıyoruz. Hedeflerinize en kısa ve en kârlı yoldan ulaşmanızı sağlayacak, tamamen size özel bir büyüme stratejisi haritası çıkarıyoruz.",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Vitrin",
    subtitle: "Amaca Uygun Dijital Kimlik",
    description:
      "Belirlediğimiz stratejiyi sahaya yansıtıyoruz. Markanızın yapısı ağırbaşlı bir kurumsallık gerektiriyorsa otoriter, sıcak bir bağ kurmanız gerekiyorsa samimi bir dijital vitrin inşa ediyoruz. Ziyaretçinin ilk saniyede markanıza güvenmesini sağlıyoruz.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Reklam",
    subtitle: "Doğru Kitle, Kusursuz Zamanlama",
    description:
      "Rastgele kitlelere bütçe yakma devrini kapatıyoruz. Geliştirdiğimiz hedefleme yöntemleriyle; hizmetinize tam o anda ihtiyaç duyan kitleyi buluyoruz. Mesajınızı doğru kişiye ulaştırarak bütçenizi verimli bir yatırıma dönüştürüyoruz.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Otomasyon",
    subtitle: "Trafiği Satışa Çeviren Güç",
    description:
      "Önemli olan tıklamalar değil, cirodur. Özel satış otomasyonlarımız tam bu noktada devreye giriyor. Reklamdan gelen müşterileri anında karşılıyor, süreci profesyonelce yöneterek satış ihtimalini zirveye taşıyoruz. Size sadece hazır müşterilerle masaya oturmak kalıyor.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Web Sitesi ve Google Haritalar Kurulumu",
    description:
      "Doğrudan satışa odaklı bir web sitesi inşa ediyoruz. Eş zamanlı olarak Google İşletme ve Haritalar kayıtlarınızı eksiksiz yaparak, sizi arayan yerel müşterilerin size anında ulaşmasını sağlıyoruz.",
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description:
      "Hesaplarınızı profesyonel bir vitrine dönüştürüyoruz. Sektörünüze uygun, güven veren içerik ve tasarımlarla marka imajınızı oluşturuyor, hedef kitlenizle doğru iletişimi kuruyoruz.",
  },
  {
    icon: Target,
    title: "Meta (Facebook & Instagram) Reklam Yönetimi",
    description:
      "Bütçenizi boş kampanyalara harcamıyoruz. Hizmetinize gerçekten ihtiyacı olan kitleyi tespit edip, onlara yönelik stratejik reklamlar çıkararak kesintisiz müşteri trafiği sağlıyoruz.",
  },
  {
    icon: Filter,
    title: "Satış Otomasyonları ve Funnel Sistemleri",
    description:
      "Yoğun mesaj trafiğini özel yazılım ve otomasyonlarla karşılıyoruz. Sadece “fiyat soran” kitleyi eliyor, masanıza yalnızca satın almaya hazır hale gelmiş müşterileri getiriyoruz.",
  },
  {
    icon: Camera,
    title: "Profesyonel Kamera ve Drone Çekimleri",
    description:
      "Markanızın kalitesini dijitalde en üst seviyede yansıtmak için; yüksek çözünürlüklü kameralar ve drone ile profesyonel fotoğraf/video prodüksiyon hizmeti sunuyoruz.",
  },
  {
    icon: Users,
    title: "Dijital Büyüme Danışmanlığı",
    description:
      "İşletme sahipleriyle omuz omuza çalışarak; dijital yatırımlarınızı, bütçe yönetiminizi ve uzun vadeli ölçeklenme stratejilerinizi birlikte planlıyoruz.",
  },
];

const lightCard =
  "group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10";

export default function Solutions() {
  return (
    <section
      id="cozumlerimiz"
      className="relative scroll-mt-24 overflow-hidden bg-offwhite py-24 sm:py-32"
    >
      <BrandWatermark
        tone="navy"
        className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.04] sm:h-96 sm:w-96"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-syne text-3xl font-bold leading-tight tracking-tighter text-navy sm:text-4xl">
              Çözümlerimiz
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-navy/70 sm:text-lg">
              Stratejiden somut hizmetlere, işletmenizi büyüten her şey tek
              çatı altında: markanızı sarsılmaz bir yapıya kavuşturan{" "}
              <span className="font-semibold text-accent">AVRO Sistemi</span>{" "}
              ve bu sistemi hayata geçiren şeffaf hizmetlerimiz.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy/15">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Ofiste büyüme stratejisi planlayan ekip"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* AVRO Sistemi */}
        <div className="mt-20">
          <h3 className="font-montserrat text-xl font-bold text-navy sm:text-2xl">
            AVRO Sistemi
          </h3>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-navy/60 sm:text-base">
            Markanızı dijitalde sarsılmaz bir yapıya kavuşturacak 4 aşamalı
            büyüme altyapımız.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {avroSteps.map((step) => (
              <div key={step.number} className={lightCard}>
                <div className="flex items-center justify-between">
                  <span className="font-syne text-3xl font-bold text-navy/10">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-offwhite">
                    <step.icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </div>
                <h4 className="mt-5 font-montserrat text-lg font-bold text-navy">
                  {step.title}
                </h4>
                <p className="mt-1 font-montserrat text-xs font-semibold uppercase tracking-wide text-accent">
                  {step.subtitle}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hizmetlerimiz */}
        <div className="mt-20">
          <h3 className="font-montserrat text-xl font-bold text-navy sm:text-2xl">
            Hizmetlerimiz
          </h3>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-navy/60 sm:text-base">
            AVRO sistemini hayata geçiren, işletmenize doğrudan otorite,
            zaman ve nakit akışı kazandıran somut hizmetler.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className={lightCard}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-offwhite">
                  <service.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h4 className="mt-5 font-montserrat text-base font-bold leading-snug text-navy">
                  {service.title}
                </h4>
                <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
