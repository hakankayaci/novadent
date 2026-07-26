# CanbazVet Vercel Production Deployment Raporu

**Tarih:** 26 Temmuz 2026  
**Durum:** Production Canlıda (%100 Başarılı)  

---

## 1. Deployment Özet Bilgileri

| Parametre | Değer |
| :--- | :--- |
| **Vercel Proje Adı** | `canbazvet` (`hakan34/canbazvet`) |
| **Production Canlı URL** | [https://canbazvet.vercel.app](https://canbazvet.vercel.app) |
| **İkincil Deployment URL** | `https://canbazvet-3j9q8bff6-hakan34.vercel.app` |
| **GitHub Repository** | [`hakankayaci/canbazvet`](https://github.com/hakankayaci/canbazvet) |
| **Default Branch** | `main` |
| **Feature Branch** | `feat/canbazvet-premium-landing-page` |
| **Framework Preset** | Next.js 15 (App Router, React 19) |
| **Node.js Sürümü** | v24.15.0 |
| **Build Süresi** | ~42 saniye |
| **First Load JS Boyutu** | 118 kB |

---

## 2. Ortam Değişkenleri (`Environment Variables`)

Projede aşağıdaki environment variable'lar `.env.example` içinde belgelenmiş ve Vercel ortamında tanımlanmıştır:

- `NEXT_PUBLIC_SITE_URL=https://canbazvet.vercel.app`
- `NEXT_PUBLIC_GOOGLE_REVIEWS_URL=https://www.google.com/search?q=CanbazVet+Veteriner+Klini%C4%9Fi+Yorumlar`
- `NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/canbazvetedirne/`
- `NEXT_PUBLIC_VETERINARIAN_INSTAGRAM_URL=https://www.instagram.com/berkcanbaz22/`
- `NEXT_PUBLIC_LINKTREE_URL=https://linktr.ee/canbazvet`

---

## 3. Production Canlı Test Sonuçları

- [x] **HTTP 200 & HTTPS:** Canlı site SSL sertifikasıyla HTTPS protokolü üzerinden kesintisiz erişilebilmektedir.
- [x] **Görsel & Tabela Varlığı:** `canbazvet-logo-horizontal.svg`, `canbazvet-dis-cephe-tabela.webp` ve tüm klinik içi fotoğraflar CDN üzerinden optimize olarak yüklenmektedir.
- [x] **Telefon Bağlantıları:** `tel:+905413257682` bağlantıları mobilde ve masaüstünde çalışmaktadır.
- [x] **Google Navigasyon:** Google Maps yol tarifi bağlantıları koordinat parametresiyle (`41.6657747,26.584173`) haritayı açmaktadır.
- [x] **SEO & Sosyal Paylaşım:** OpenGraph görseli (`canbazvet-og.jpg`) ve `VeterinaryCare` JSON-LD schema canlı HTML çıktısında mevcuttur.
