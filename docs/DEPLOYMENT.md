# CanbazVet — Vercel Deployment

**Son deploy:** 26 Temmuz 2026 · commit `df04158`
**Durum:** Production canlıda, doğrulandı

---

## 1. Deployment bilgileri

| Parametre | Değer |
| :--- | :--- |
| Vercel projesi | `canbazvet` (`hakan34/canbazvet`) |
| Production URL | [https://canbazvet.vercel.app](https://canbazvet.vercel.app) |
| GitHub repo | [`hakankayaci/canbazvet`](https://github.com/hakankayaci/canbazvet) |
| Production branch | `main` |
| Framework | Next.js 15 (App Router, React 19) — tamamı statik prerender |
| Build süresi | ~38 sn |
| First Load JS | 144 kB (`/` için) |

---

## 2. Nasıl deploy edilir

**GitHub entegrasyonu bağlı.** `main`'e push production deploy tetikler:

```bash
git push origin main
```

`npx vercel --prod` ayrıca çalışır ama **gerekli değildir** — push zaten deploy
başlatır. İkisini birlikte yapmak aynı commit'ten iki build üretir (26 Temmuz'da
böyle oldu: `709vp8bmm` CLI'dan, `dsdz5d0wn` push'tan). Tercih edilen yol push.

### Deploy öncesi kontrol listesi

```bash
npm run typecheck
npm run build
npm run verify      # minify edilmiş CSS + prerender HTML korumaları
npm run test        # 63 Playwright testi, 3 viewport
```

> **Dikkat:** `next dev` ve `next start` aynı `.next` dizinini paylaşır. Dev
> sunucusu çalışırken `npm run test` çalıştırmak production chunk'larını bozar
> (`Cannot find module './vendor-chunks/lucide-react.js'`) ve Playwright dev
> sunucusunu yeniden kullanıp yanıltıcı sonuç verir. Test öncesi dev sunucusunu
> kapatın ve `rm -rf .next && npm run build` yapın.

---

## 3. Ortam değişkenleri

Hepsi opsiyonel; tanımlı değilse `src/data/site.ts` içindeki varsayılanlar geçerlidir.

| Değişken | Etkisi |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, OG mutlak yolları, JSON-LD `@id`. Varsayılan: `https://canbazvet.vercel.app` |
| `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` | "Google'da yorumları oku" hedefi. Tanımlı değilse koordinat aramasına düşer; gerçek Google Business profil URL'si girilirse doğrudan yorumlara gider. |

`NEXT_PUBLIC_INSTAGRAM_URL`, `..._VETERINARIAN_INSTAGRAM_URL` ve `..._LINKTREE_URL`
artık **kullanılmıyor**; bu değerler `src/data/site.ts` içinde sabit.

---

## 4. Canlı doğrulama sonuçları

`node scratch/verify-live.mjs https://canbazvet.vercel.app` — tümü geçti:

- [x] HTTP 200, HTTPS, 148 KB HTML.
- [x] **`.sr-only` kuralı minify edilmiş canlı CSS'te sağlam**, `}` ile önceleniyor.
      Production'ı bozan hata buydu; artık `npm run verify` her build'de kontrol ediyor.
- [x] `.skip-link` ve `.skip-link:focus-visible` mevcut; parantezler dengeli (603).
- [x] Skip link `y=-56`'da park hâlinde (gizli); ilk Tab ile `y=12`'ye kayıyor —
      desktop ve mobilde ayrı ayrı doğrulandı.
- [x] `VeterinaryCare` JSON-LD **statik HTML'de** parse ediliyor, 8 hizmet listeli,
      `aggregateRating`/`review` yok, Maps sorgu dizesindeki `&` bozulmamış.
- [x] Uydurma sosyal kanıt izi yok (takipçi sayısı, sahte sekmeler).
- [x] Varlıklar CDN'den servis ediliyor: tabela logosu (55 KB), hekim portresi
      (84 KB), yeniden adlandırılmış klinik fotoğrafları, sosyal kareler,
      OG kapağı (66 KB), favicon, `sitemap.xml`, `robots.txt`.
- [x] Kaldırılan varlıklara (`logo-horizontal.svg`, `logo-light.svg`,
      `instagram-post-*.webp`) hiçbir referans kalmadı.

---

## 5. Açık işler

- **ESLint yapılandırması yok.** `npm run lint` etkileşimli kurulum sorusu soruyor ve
  CI'da askıda kalır. `npx @next/codemod@canary next-lint-to-eslint-cli .` ile flat
  config'e geçilmeli.
- **Diller URL'de yok.** Tek route, istemci tarafı geçiş; Google yalnızca Türkçe
  sürümü indeksler. BG/EL aramalardan trafik hedefleniyorsa `/bg`, `/el` route'ları
  ve `hreflang` gerekir.
- **Google Business profil URL'si.** `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` tanımlı değil,
  bu yüzden yorum bağlantısı koordinat aramasına düşüyor.
- **Fotoğraf çözünürlüğü tavanı.** Klinik orijinalleri 1360x1020; galeride keskin
  ama tam genişlikte hero olarak kullanılamaz. Daha büyüğü gerekiyorsa klinikten
  yüksek çözünürlüklü orijinaller istenmeli — upscale yapılmıyor.
