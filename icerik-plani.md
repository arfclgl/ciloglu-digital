# İçerik Planı — Pillar & Cluster Mimarisi

Bu doküman, [anahtar-kelimeler.md](./anahtar-kelimeler.md) dosyasındaki araştırmayı referans alarak 12 hedef konuyu **1 Pillar (Ana Rehber) + 11 Cluster (Alt Yazı)** mimarisine oturtur. Hatay ve ilçelerini (İskenderun, Antakya, Defne, Dörtyol) hedefler.

> **Durum:** Mimari kuruldu, yazım sırası belirlendi. Üretim aşamasında ton için [marka-sesi.md](./marka-sesi.md) kurallarına uyulacaktır.

## Yapı Mantığı

- **Pillar**, tüm hizmetleri özetleyen ve her Cluster'a link veren merkezi rehberdir.
- Her **Cluster**, kendi hizmetini derinlemesine anlatır ve zorunlu olarak Pillar'a geri link verir (hub-and-spoke).
- Tematik olarak ilişkili Cluster'lar ayrıca birbirine link vererek "topic cluster" gücünü artırır.

---

## 0. Pillar — Ana Rehber

| Alan | İçerik |
|---|---|
| **Başlık** | Ana Pillar Büyüme Rehberi |
| **Hedef URL** | `/blog/hatay-dijital-buyume-rehberi` |
| **Ana Anahtar Kelime** | Hatay dijital büyüme ajansı |
| **İkincil Anahtar Kelime** | Hatay ve İskenderun'da işletmeler için dijital büyüme rehberi |
| **H1 Önerisi** | Hatay'da İşletmenizi Büyüten Dijital Sistem: Kapsamlı Rehber |
| **Bağlantı Kuralı** | Aşağıdaki 11 Cluster yazısının tamamına, ilgili bölümde bağlam içi (contextual) link verir. |

---

## 1. Cluster Tablosu (11 Alt Yazı)

| # | Cluster Başlığı | Hedef Anahtar Kelime (Ana / Uzun Kuyruk) | H1 Önerisi | Pillar'a Link |
|---|---|---|---|---|
| 1 | Web Sitesi | İskenderun'da işletmeler için web sitesi tasarımı | Hatay'da Müşteri Kazandıran Web Sitesi Nasıl Kurulur? | ✅ Zorunlu |
| 2 | Google Business | Antakya Google İşletme Profili nasıl optimize edilir | İskenderun'da Google İşletme Profilinizi Müşteriye Çeviren Kılavuz | ✅ Zorunlu |
| 3 | Google Haritalar | İskenderun'da Google Haritalarda ilk sırada çıkma | Hatay'da Google Haritalarda İlk Sırada Çıkmanın Yolu | ✅ Zorunlu |
| 4 | Google Ads | Dörtyol esnaf için Google Ads reklam yönetimi | Dörtyol ve Hatay'da Google Ads ile Doğrudan Satışa Giden Reklam | ✅ Zorunlu |
| 5 | Meta Reklamları | Antakya restoran için Meta reklam yönetimi | Antakya'da Instagram ve Facebook Reklamlarıyla Satış Getiren Sistem | ✅ Zorunlu |
| 6 | Sosyal Medya Yönetimi | İskenderun kuaför salonu sosyal medya yönetimi fiyatları | Hatay İşletmeleri İçin Satışa Dönüşen Sosyal Medya Yönetimi | ✅ Zorunlu |
| 7 | Kamera/Drone Çekimleri | İskenderun işletmeler için tanıtım videosu drone çekimi | İskenderun'da İşletmenizi Öne Çıkaran Drone ve Kamera Çekimi | ✅ Zorunlu |
| 8 | Satış Otomasyonu | Küçük işletmeler için WhatsApp satış otomasyonu Hatay | Hatay'da Satışı Otomatikleştiren WhatsApp ve CRM Sistemi | ✅ Zorunlu |
| 9 | Funnel Sistemleri | İskenderun işletmeler için müşteri kazanma hunisi (funnel) nasıl kurulur | İskenderun İşletmeleri İçin Müşteri Kazanan Satış Hunisi Kurulumu | ✅ Zorunlu |
| 10 | AVRO Sistemi 1 | Hatay işletmeler için AVRO büyüme sistemi nasıl çalışır | AVRO Sistemi Nedir? Hatay İşletmeleri İçin Büyüme Modeli | ✅ Zorunlu |
| 11 | AVRO Sistemi 2 | İskenderun'da AVRO sistemiyle müşteri kazanan işletmeler | AVRO Sistemiyle Büyüyen Hatay İşletmeleri: Sonuçlar ve Uygulama | ✅ Zorunlu |

---

## 2. İç Bağlantı (Internal Link) Haritası

Pillar ↔ Cluster bağlantısına ek olarak, aşağıdaki Cluster'lar tematik yakınlıkları nedeniyle **birbirine de** link verir:

| Yazı | Şuna Link Verir | Gerekçe |
|---|---|---|
| **1. Web Sitesi** | → 2. Google Business, → 3. Google Haritalar | Üçü birlikte "yerel görünürlük" temelini oluşturur |
| **2. Google Business** | → 1. Web Sitesi, → 3. Google Haritalar | Aynı yerel görünürlük grubu |
| **3. Google Haritalar** | → 1. Web Sitesi, → 2. Google Business | Aynı yerel görünürlük grubu |
| **4. Google Ads** | → 5. Meta Reklamları | Reklam kanalları birbirini tamamlar |
| **5. Meta Reklamları** | → 4. Google Ads | Reklam kanalları birbirini tamamlar |
| **6. Sosyal Medya Yönetimi** | → 7. Kamera/Drone Çekimleri | Sosyal medya içeriği görsel üretime bağımlı |
| **7. Kamera/Drone Çekimleri** | → 6. Sosyal Medya Yönetimi | Görsel içerik sosyal medyada kullanılır |
| **8. Satış Otomasyonu** | → 9. Funnel Sistemleri | Otomasyon, huni akışının bir parçası |
| **9. Funnel Sistemleri** | → 8. Satış Otomasyonu | Huni, otomasyonla birlikte çalışır |
| **10. AVRO Sistemi 1** | → 11. AVRO Sistemi 2 | Seri içerik: önce "nedir", sonra "sonuçlar" |
| **11. AVRO Sistemi 2** | → 10. AVRO Sistemi 1, → 8. Satış Otomasyonu, → 9. Funnel Sistemleri | AVRO sistemi bu bileşenleri kapsar; kanıt yazısından bileşenlere yönlendirme |

**Kural:** Pillar, tüm Cluster'lara link verir; hiçbir Cluster Pillar'a link vermeden yayınlanmaz.

---

## 3. Önerilen Yazım Sırası

[anahtar-kelimeler.md](./anahtar-kelimeler.md) içindeki rekabet/öncelik analizine göre, en düşük rekabetli Cluster'lardan başlanması önerilir:

1. Google Ads (Dörtyol esnaf)
2. Google Haritalar (İskenderun)
3. Satış Otomasyonu (WhatsApp)
4. Meta Reklamları (Antakya restoran)
5. Sosyal Medya Yönetimi (İskenderun kuaför)
6. Web Sitesi (İskenderun işletmeler)
7. Google Business (Antakya)
8. Kamera/Drone Çekimleri (İskenderun)
9. Funnel Sistemleri (İskenderun)
10. AVRO Sistemi 1
11. AVRO Sistemi 2
12. **Pillar** — en son yazılır; çünkü tüm Cluster'lara link vermesi için önce onların URL'lerinin var olması gerekir.

---

## 4. Sonraki Aşama

Mimari ve sıralama hazır. Bir sonraki adım: bu sıraya göre, [marka-sesi.md](./marka-sesi.md) kurallarına uyarak (kısa cümle, yasaklı klişe yok, otoriter/çözüm odaklı ton) içeriklerin tek tek üretilmesi.
