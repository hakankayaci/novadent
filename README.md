# CanbazVet Veteriner Kliniği — Premium Landing Page

Edirne Merkez'de faaliyet gösteren **CanbazVet Veteriner Kliniği** (Veteriner Hekim Berk Canbaz) için özel tasarlanmış, yüksek dönüşüm sağlayan, yerel SEO uyumlu, erişilebilir ve production-ready Next.js landing page projesi.

**Canlı Yayın URL:** [https://canbazvet.vercel.app](https://canbazvet.vercel.app)  
**GitHub Repository:** [hakankayaci/canbazvet](https://github.com/hakankayaci/canbazvet)  

---

## 🛠 Teknoloji Stack'i

- **Framework:** Next.js 15 (App Router, React 19)
- **Dil:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3, Vanilla CSS Design System Tokens
- **İkonlar:** Lucide React
- **Görsel İşleme:** Next/Image + Sharp (WebP/AVIF optimizasyonu)
- **SEO & Schema:** Next.js Metadata API, Schema.org `VeterinaryCare` JSON-LD
- **Test:** Playwright (Smoke & Responsive overflow testleri)
- **Deployment:** Vercel

---

## 🚀 Yerel Geliştirme (Local Development)

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/hakankayaci/canbazvet.git
cd canbazvet
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Sayfayı tarayıcınızda açın: `http://localhost:3000`

---

## 🧪 Test Komutları

```bash
# Typecheck ve Strict Tip Kontrolü
npm run typecheck

# ESLint Kontrolü
npm run lint

# Production Build Testi
npm run build

# Playwright Otomatik Smoke & Responsive Testleri
npm run test
```

---

## 📂 Proje Dizin Yapısı

```
canbazvet/
├── design-system/
│   └── MASTER.md            # Marka tasarım sistemi ve renk token'ları
├── docs/
│   ├── RESEARCH.md          # İşletme bilgileri ve SEO araştırma raporu
│   ├── ASSET-MANIFEST.md    # Görsel envanteri ve optimizasyon haritası
│   ├── CONTENT-VERIFICATION.md # Doğrulanmış ve genel kullanılan metinler
│   ├── QA-REPORT.md         # Test ve erişilebilirlik doğrulama raporu
│   ├── DEPLOYMENT.md        # Vercel deployment detayları
│   └── screenshots/         # Responsive test ekran görüntüleri
├── public/
│   ├── images/
│   │   ├── brand/           # SVG logo ve marka ikonları
│   │   ├── clinic/          # Yerel klinik fotoğrafları (WebP)
│   │   └── og/              # 1200x630 OpenGraph kapağı
│   └── manifest.json        # PWA manifest
├── src/
│   ├── app/                 # Next.js App Router (layout, page, robots, sitemap)
│   ├── components/          # Layout, UI & Section bileşenleri
│   ├── data/                # Merkezi veri kaynağı (site.ts)
│   ├── lib/                 # Metadata, JSON-LD schema & analytics
│   └── types/               # TypeScript tip tanımları
└── tests/
    └── smoke.spec.ts        # Playwright test senaryoları
```

---

## 📞 İşletme İletişim Bilgileri (Doğrulanmış)

- **Telefon & 7/24 Acil Hat:** `0541 325 76 82` (`+90 541 325 76 82`)
- **Adres:** Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Edirne
- **Çalışma Saatleri:** Pazartesi–Cumartesi 09:30–19:30, Pazar 12:00–17:00
