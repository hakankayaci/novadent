# NOVADENT Edirne

NOVADENT Ağız ve Diş Sağlığı Polikliniği için geliştirilmiş, dört dilli ve production-ready Next.js tanıtım sitesi.

- Production: [novadent-psi.vercel.app](https://novadent-psi.vercel.app)
- GitHub: [hakankayaci/novadent](https://github.com/hakankayaci/novadent)
- Diller: Türkçe `/`, İngilizce `/en`, Yunanca `/el`, Bulgarca `/bg`

## Özellikler

- “Luminous Shade Guide” görsel sistemi: porselen, koyu lacivert ve camgöbeği
- Mobilde fotoğraf ve metni ayıran, masaüstünde 43/57 oranlı hero
- Resmî NOVADENT logo/favicon seti ve yerel Google, Instagram, WhatsApp SVG işaretleri
- 5,0 / 141 Google değerlendirmesi, kaynaklı üç alıntı ve otomatik kalan yorum hesabı
- Gerçek klinik görsellerinden optimize AVIF/WebP galeri ve statik Instagram paneli
- Locale bazlı `lang`, canonical, hreflang, OG locale, sitemap ve JSON-LD
- Klavye erişimi, reduced-motion, 200% metin büyütme ve 320–1920 px taşma kontrolleri
- 1200×630 OG/Twitter/WhatsApp bağlantı önizlemesi

## Geliştirme

```bash
npm install
npm run dev
```

Kalite kapıları:

```bash
npm run assets
npm run assets:og
npm run lint
npm run typecheck
npm run build
npm run verify
npm test
git diff --check
```

## Yapı

- `src/app/[[...locale]]`: statik locale rotaları ve metadata
- `src/components/site`: server-rendered sayfa ile küçük client island'ları
- `src/data/content.ts`: dört dilde eksiksiz içerik sözleşmesi
- `src/data/site.ts`: doğrulanmış işletme ve bağlantı bilgileri
- `assets/source/novadent`: yeniden üretilebilir yüksek çözünürlüklü kaynaklar
- `public/images/novadent`: optimize yayın varlıkları

Google yorum sayısı `src/data/content.ts` içindeki `checkedAt` tarihiyle birlikte yayından önce yeniden kontrol edilmelidir. Tanı ve tedavi planı yalnız hekim muayenesiyle belirlenir.
