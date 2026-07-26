# CanbazVet Veteriner Kliniği — Premium Landing Page

Edirne Merkez'de faaliyet gösteren **CanbazVet Veteriner Kliniği** (Veteriner Hekim Berk Canbaz) için özel tasarlanmış, yüksek dönüşüm sağlayan, yerel SEO uyumlu, erişilebilir ve production-ready Next.js landing page projesi.

**Canlı Yayın URL:** [https://canbazvet.vercel.app](https://canbazvet.vercel.app)  
**GitHub Repository:** [hakankayaci/canbazvet](https://github.com/hakankayaci/canbazvet)  

---

## 🛠 Teknoloji Stack'i

- **Framework:** Next.js 15 (App Router, React 19)
- **Dil:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3, `tailwind.config.ts` içinde tanımlı tasarım token'ları
- **Font:** Fira Sans — latin-ext + Kiril + Yunan alfabelerini taşır (4 dil için zorunlu)
- **İkonlar:** Lucide React
- **Görsel İşleme:** Sharp ile build-time üretim + Next/Image (WebP/AVIF)
- **SEO & Schema:** Next.js Metadata API, Schema.org `VeterinaryCare` JSON-LD
- **Test:** Playwright (63 test × 3 viewport projesi)
- **Deployment:** Vercel

---

## 🌍 Dil desteği

Türkçe (varsayılan), İngilizce, Bulgarca, Yunanca. Tüm metinler
`src/data/translations.ts` içindeki tek bir `Copy` arayüzünde toplanır; bir dil eksik
alan bırakırsa **derleme başarısız olur**, çalışma anında Türkçeye düşmez.

Varsayılan dil her zaman Türkçe. `navigator.language` sezgisi bilinçli olarak
kullanılmaz: ziyaretçilerin çoğu Edirneli ve pek çoğu telefonunu İngilizce
kullanıyor — tarayıcı diline göre otomatik geçiş, yerel ziyaretçiye istemediği
İngilizce sayfayı gösterirdi. Seçim header'daki dil düğmesiyle yapılır ve saklanır.

---

## 🖼 Görsel varlıkları

`public/images/**` altındaki her türev görsel **üretilmiştir**, elle düzenlenmemiştir.
Kaynaklar `resimler/` klasöründedir (repoya dahil değil) ve tek bir kez, tek geçişte
kodlanır — önceki sürüm zaten kayıplı WebP kopyalarını yeniden kodladığı için klinik
fotoğrafları yumuşak görünüyordu.

```bash
npm run assets      # logo, amblem, favicon, hekim portresi, klinik + sosyal kareler
npm run assets:og   # 1200x630 OpenGraph kapağı (gerçek webfont ile render edilir)
```

Logo bir yeniden çizim değil: `canbazvet-logo.png` kliniğin gerçek tabela
görselinden kırpılmıştır. Marka renkleri de bu dosyadan piksel örneklenmiştir
(bkz. `design-system/MASTER.md`).

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
├── scripts/
│   ├── build-assets.mjs     # resimler/ kaynaklarından tüm public/ görsellerini üretir
│   └── build-og.mjs         # OpenGraph kapağını gerçek webfont ile render eder
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
│   ├── data/                # site.ts (dilden bağımsız veriler), translations.ts (tüm metin), nav.ts
│   ├── lib/                 # LanguageContext, metadata, JSON-LD schema, saatler, analytics
│   └── types/               # TypeScript tip tanımları
└── tests/
    └── smoke.spec.ts        # Playwright: içerik, skip link, i18n, nav, harita, dürüst sosyal kanıt, layout
```

**Ayrım kuralı:** `src/data/site.ts` yalnızca dilden bağımsız gerçekleri tutar (telefon,
adres, koordinat, görsel yolları, ikon adları). İnsanın okuduğu **her** dize
`src/data/translations.ts` içindedir. Böylece yeni bir dil yarı çevrilmiş bir sayfa
bırakamaz.

---

## 📞 İşletme İletişim Bilgileri (Doğrulanmış)

- **Telefon & 7/24 Acil Hat:** `0541 325 76 82` (`+90 541 325 76 82`)
- **Adres:** Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Edirne
- **Çalışma Saatleri:** Pazartesi–Cumartesi 09:30–19:30, Pazar 12:00–17:00
