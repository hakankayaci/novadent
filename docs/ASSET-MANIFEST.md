# CanbazVet — Görsel Varlık Manifestosu

**Kaynak klasör:** `resimler/` (gitignored — orijinaller repoya girmez)
**Hedef klasör:** `public/images/`
**Üretim:** `npm run assets` ve `npm run assets:og`

`public/images/**` altındaki hiçbir dosya elle düzenlenmez. Hepsi
`scripts/build-assets.mjs` tarafından orijinalden **tek geçişte** üretilir. Önceki
sürüm zaten kayıplı WebP kopyalarını yeniden kodluyordu; bu ikinci sıkıştırma klinik
fotoğraflarının yumuşak görünmesinin sebebiydi.

Kodlama ayarı (fotoğraflar): WebP `quality: 90, effort: 6`. Marka işaretleri:
kayıpsız görünen kuantalanmış palet PNG (952x227 lockup ≈ 55 KB).

---

## Marka işaretleri

Kaynak: `resimler/_source-logo.png` — kliniğin gerçek tabela logosu.
Yeniden çizim **yok**; opak sınır kutusu hesaplanıp kırpılır.

| Çıktı | Boyut | Kullanım |
| :--- | :--- | :--- |
| `/images/brand/canbazvet-logo.png` | 952x227 | Tam lockup. Açık zeminli header, footer plakası, OG kapağı. |
| `/images/brand/canbazvet-logo.webp` | 952x227 | Aynı lockup, WebP. |
| `/images/brand/canbazvet-emblem.png` | 227x227 | Yalnız kalp amblemi. Koyu zeminlerde beyaz plaka üstünde. |
| `/images/brand/canbazvet-emblem.webp` | 227x227 | Aynı amblem, WebP. |
| `/favicon.ico`, `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png` | — | Amblem, beyaz zemin üstünde ortalanmış. |

> Amblem **beyaz zemine ihtiyaç duyar**: kedi silüeti ve artı işareti kalbin negatif
> alanından oluşur, koyu zemine doğrudan konursa kaybolur. Bu yüzden koyu bölümlerde
> `LogoOnDark` beyaz bir plaka + canlı tipografi kullanır.

---

## Veteriner Hekim Berk Canbaz

Kaynak: `resimler/_source-berk-canbaz.png` (1122x1402).

| Çıktı | Boyut | Kullanım |
| :--- | :--- | :--- |
| `/images/team/berk-canbaz.webp` | 1122x1402 | Hero portresi (kaynak zaten 4:5, kırpma gerekmez). |
| `/images/team/berk-canbaz-wide.webp` | 1122x748 | Hakkımızda bölümü, 3:2. |
| `/images/team/berk-canbaz-avatar.webp` | 800x800 | Hekim bölümü, yüze ortalanmış kare. |

> Önceki sürümde hero'daki "portre" 477x747 boyutunda, üzerine *"Minik dostumuzu
> sahiplendiriyoruz!"* metni basılmış bir Instagram tanıtım grafiğiydi. Hem bulanıktı
> hem de hero'da pazarlama metni gösteriyordu.

---

## Klinik fotoğrafları

Galeri sırası bir ziyaretin akışını izler: kapı → bekleme → dükkân → muayene →
tanı → cerrahi → yatış. Sıra `src/data/site.ts` içindeki `gallery` dizisidir.

| Orijinal | Çözünürlük | Production yolu |
| :--- | :--- | :--- |
| `unnamed.webp` | 1360x1020 | `/images/clinic/canbazvet-dis-cephe-tabela.webp` |
| `unnamed (7).webp` | 1360x1020 | `/images/clinic/canbazvet-bekleme-alani-ve-resepsiyon.webp` |
| `unnamed (6).webp` | 1360x1020 | `/images/clinic/canbazvet-mama-ve-urun-reyonu.webp` |
| `unnamed (1).webp` | 1360x1020 | `/images/clinic/canbazvet-muayene-odasi.webp` |
| `unnamed (4).webp` | 765x1020 | `/images/clinic/canbazvet-muayene-odasi-dikey.webp` |
| `unnamed (3).webp` | 1360x1020 | `/images/clinic/canbazvet-muayene-masasi-ve-ekipmanlar.webp` |
| `unnamed (5).webp` | 1360x1020 | `/images/clinic/canbazvet-ameliyathane.webp` |
| `unnamed (8).webp` | 1360x1020 | `/images/clinic/canbazvet-operasyon-masasi-detay.webp` |
| `unnamed (2).webp` | 910x1020 | `/images/clinic/canbazvet-yatakli-hasta-unitesi.webp` |

Alt metinler `src/data/translations.ts` → `gallery.items` içinde, dört dilde ayrı ayrı
yazılır (dosya adından türetilmez).

> **Çözünürlük tavanı:** orijinaller 1360x1020. Galeri kareleri bu ölçekte keskin;
> tam genişlikte tek bir hero olarak kullanılsalar yumuşak görünürler. Daha büyük
> gerekiyorsa klinikten yüksek çözünürlüklü orijinaller istenmelidir — upscale
> yapılmaz.

---

## Sosyal kareler (Instagram şeridi)

`900x900` kare kırpımlar. Gerçek klinik fotoğrafları; uydurma etkileşim verisi yok.

`canbazvet-hekim-ve-klinik` · `canbazvet-muayene-odasi` · `canbazvet-ameliyathane` ·
`canbazvet-yatakli-hasta-unitesi` · `canbazvet-bekleme-alani` · `canbazvet-klinik-girisi`

> Önceki sürümdeki `instagram-post-*.webp` dosyaları 256x238 idi ve 25vw genişlikte
> gösteriliyordu; bu yüzden bulanıktı.

---

## OpenGraph kapağı

`/images/og/canbazvet-og.jpg` — 1200x630, `npm run assets:og`.

Sharp ile metin bindirmek yerine gerçek bir headless tarayıcıda render edilir; böylece
Türkçe diyakritikler ve marka webfont'u sitedeki hâliyle çıkar. Şablon kendi kendine
yeten bir data-URI sayfasıdır, dev sunucusuna ihtiyaç duymaz.
