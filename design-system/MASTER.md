# CanbazVet Master Design System & UI/UX Architecture

**Marka:** CanbazVet Veteriner Kliniği (Edirne)  
**Hedef:** Güven, şefkat, hekim erişilebilirliği, yüksek dönüşüm (telefon & yol tarifi), yerel SEO mükemmelliği  
**Estetik Yönelim:** Editorial veterinary healthcare, warm professional, dark teal & lime accent palette, high contrast typography, mobile-first responsive.  

---

## 1. Color Palette (Renk Paleti)

Tabela ve gerçek klinik görsellerinden hassas olarak örneklenmiş renk sistemi:

### Primary Brand Colors
- **Brand Dark Teal 950:** `#00352C` (Hero zeminleri, acil hat alanları, footer)
- **Brand Dark Teal 900:** `#004D40` (Ana marka rengi, kart zeminleri, buton hover)
- **Brand Teal 800:** `#006654` (Başlıklar, ikincil arka planlar)
- **Brand Teal 700:** `#087565` (Vurgu metinleri, simge halkaları)

### Accent & Highlight Colors
- **Brand Lime Green 500:** `#B9D63C` (Tabeladaki "Vet" rengi, aktif durum noktaları, alt çizgiler, birincil badge)
- **Brand Lime Green 400:** `#C7E34B` (Lime hover durumları)
- **Brand Emergency Red 600:** `#E2292E` (Tabeladaki "ACİL" rozeti rengi, acil arama butonu)
- **Brand Emergency Red 500:** `#EF353A` (Red hover durumları)

### Neutral Surface & Text Colors
- **Surface Pure White:** `#FFFFFF` (Kart zeminleri, temiz alanlar)
- **Surface Warm Off-White:** `#F7F9F6` (Ana sayfa arka planı)
- **Surface Warm Light Green:** `#EEF4EC` (İkincil kartlar ve rozet arka planı)
- **Surface Soft Blush:** `#FBF2F4` (Dış cephe pembe dokusundan ilham alan yumuşak vurgu yüzeyi)
- **Text Primary (Dark):** `#0E1F1B` (Gövde metinleri, yüksek okunabilirlik, WCAG AAA)
- **Text Secondary:** `#4A5F57` (Açıklama metinleri, alt yazılar)
- **Text Muted:** `#71867E` (Tarih, meta veriler, pasif ikonlar)

---

## 2. Typography System (Tipografi Sistemi)

**Font Family:** `Plus Jakarta Sans` veya `Outfit` + `Inter` (Google Fonts, Next/Font optimizasyonu ile sıfır layout shift).

### Fluid Typography Scale (`clamp` tabanlı):
- **Hero Title (H1):** `clamp(2.5rem, 5vw + 1rem, 5.25rem)` — Bold (700/800), Tracking tight (-0.03em)
- **Section Heading (H2):** `clamp(2rem, 3.5vw + 0.8rem, 3.5rem)` — SemiBold/Bold (700)
- **Subheading (H3):** `clamp(1.25rem, 2vw + 0.5rem, 2rem)` — Medium/SemiBold (600)
- **Body Large:** `clamp(1.05rem, 1.2vw + 0.5rem, 1.25rem)` — Regular/Medium (400/500)
- **Body Base:** `1rem` (16px standard, 1.6 line height)
- **Caption / Label:** `0.875rem` (14px) — Medium/SemiBold, Tracking wider for badges

---

## 3. Micro-Interactions & Animation Guidelines

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Smooth springless transition)
- **Hover Lift:** `transform: translateY(-3px)` with soft shadow `0 12px 24px -6px rgba(0, 53, 44, 0.08)`
- **Duration:** 200ms – 350ms max.
- **Accessibility:** `prefers-reduced-motion: reduce` uygulandığında tüm transform ve opacity animasyonları anında sonlanacak şekilde ayarlanır.

---

## 4. Component Standards & Impeccable Rules

- **Zero Generic SaaS Cards:** Tüm bölümler birbirinin aynısı kutulardan oluşmayacak; asimetrik layout'lar, büyük gerçek fotoğraflar ve tipografik hiyerarşi kullanılacaktır.
- **No Icon Bloat:** Her başlığın üstüne gereksiz icon koyulmayacak; yalnızca aksiyon yönlendiren sade Lucide SVG simgeleri tercih edilecektir.
- **Touch Target Standard:** Tüm mobilde tıklanabilir öğeler minimum `44px x 44px` yüksekliğinde/genişliğinde olacaktır.
- **Safe Area Insets:** Mobil alt aksiyon barında `env(safe-area-inset-bottom)` kullanılarak iOS Home Indicator çakışması önlenecektir.
