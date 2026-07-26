# CanbazVet — Tasarım Sistemi

**Marka:** CanbazVet Veteriner Kliniği (Edirne Şükrüpaşa)
**Hedef:** Güven, hekim erişilebilirliği, yüksek dönüşüm (telefon & yol tarifi), yerel SEO
**Diller:** Türkçe (varsayılan), İngilizce, Bulgarca, Yunanca

Bu dosya kodda **fiilen ne olduğunu** anlatır. Kaynak `tailwind.config.ts` ve
`src/app/globals.css`; burada yazılanla kod çelişirse kod doğrudur.

---

## 1. Renk paleti

Renkler tahmin edilmedi: `public/images/brand/canbazvet-logo.png` dosyasından
**piksel örneklenerek** alındı (bkz. `tailwind.config.ts` başındaki not).

| Token | Hex | Kaynak / kullanım |
| --- | --- | --- |
| `pine.700` | `#016351` | Logodaki **"Canbaz"** mürekkebi. Ana marka rengi, butonlar, bağlantılar. |
| `pine.950` | `#04231A` | Hero, hekim bölümü, acil hat, footer zeminleri. |
| `pine.900` / `pine.800` | `#05372A` / `#044A3A` | Koyu zemin katmanları, kart içi yüzeyler. |
| `pine.100` / `pine.50` | `#DCEFE8` / `#EFF7F3` | Açık yüzeyler, ikon kutuları. |
| `leaf.500` | `#8DCA36` | Logodaki **"Vet"** yeşili. Grafik vurgu. |
| `leaf.300` | `#BCEA30` | Amblem highlight'ı. Koyu zeminde vurgu metni + birincil buton. |
| `leaf.700` | `#4F7D14` | **Açık zeminde yeşil metin için tek geçerli ton.** |
| `alert.600` | `#C10E1F` | Tabeladaki **"ACİL"** rozeti kırmızısı. Acil CTA'lar. |
| `paper` | `#F7FAF7` | Sayfa zemini. |
| `ink` / `ink.soft` / `ink.muted` | `#0B1F19` / `#3D5A50` / `#586F66` | Gövde metni kademeleri. |

### Kontrast kuralları (denetlendi, sRGB)

Bunlar tercih değil, **kural**:

- `leaf.500` **hiçbir zaman açık zeminde metin olamaz** — beyaz üzerinde 1.97:1.
  Açık zeminde yeşil metin gerekiyorsa `leaf.700` (4.91:1) kullanılır.
- `pine.700` üzerinde `leaf.500` yalnızca büyük metin (3.66:1); normal metin için
  `leaf.300` (5.15:1) veya `pine.100` (6.04:1).
- `ink.muted` gövde metni için **izin verilen en açık ton** (`paper` üzerinde 5.15:1).
- Beyaz metin: `pine.700` 7.23:1, `pine.950` 16.66:1, `alert.600` 5.86:1 — hepsi geçer.

---

## 2. Tipografi

**Fira Sans** (`next/font/google`), tek aile, ağırlık kontrastıyla kullanılır.

Seçim gerekçesi teknik: site Türkçe + Bulgarca + Yunanca yayın yapıyor, dolayısıyla
gövde fontunun **latin-ext (ı İ ğ ş) + Kiril + Yunan** alfabelerini taşıması zorunlu.
Önceki font (Plus Jakarta Sans) Kiril ve Yunan alfabelerinin **hiçbirini** içermiyordu;
bu yüzden BG ve EL metinleri sessizce sistem yedek fontuna düşüyordu.

Ölçek `tailwind.config.ts` içinde `clamp()` tabanlı token'lar olarak tanımlı:

| Token | Kullanım |
| --- | --- |
| `text-display-xl` | Yalnızca H1 (hero). Üst sınır 5.25rem. |
| `text-display-lg` | Bölüm başlıkları (H2). |
| `text-display-md` / `-sm` | Panel başlıkları, kart başlıkları (H3/H4). |
| `text-body-lg` / `text-body` / `text-body-sm` | Gövde kademeleri. |
| `text-label` | Bölüm adı çipleri. |

- Satır uzunluğu `max-w-prose` (68ch) ile sınırlı.
- `h1–h3` için `text-wrap: balance`, paragraflar için `text-wrap: pretty`.
- Display letter-spacing tabanı `-0.032em`; bundan daha sıkı **kullanılmaz**.

---

## 3. Hareket (motion)

- Easing yalnızca eksponansiyel ease-out: `cubic-bezier(0.16, 1, 0.3, 1)`. Bounce/elastic yok.
- Hero girişi: `animate-rise-in` / `animate-scale-in`, 80–280 ms kademeli gecikme.
- Scroll reveal: `Reveal` bileşeni.
  **Kritik kural — içerik varsayılan olarak görünürdür.** Sunucu hiçbir `data-reveal`
  niteliği basmaz; bileşen yalnızca **hâlâ ekranın altında olan** öğeleri `pending`
  durumuna alır. JS kapalıysa, tarayıcı bir crawler'sa veya sayfa headless
  render ediliyorsa hiçbir şey gizli kalmaz.
- `prefers-reduced-motion: reduce` altında reveal'lar anında çözülür (boş sayfa değil).
- Doğrulama: `node scratch/motion-check.mjs` (JS kapalı / reduced-motion / normal).

---

## 4. Bileşen standartları

- **Dokunma hedefi:** etkileşimli her öğe ≥ 44px yüksek. Satır içi metin
  bağlantılarında `inline-flex min-h-[36..44px] items-center` ile alan verilir.
  Playwright bunu her viewport'ta doğrular.
- **z-index:** yalnızca semantik ölçek (`z-sticky`, `z-header`, `z-drawer`, `z-skip`).
  Ham sayı (999 vb.) kullanılmaz.
- **Kart enflasyonu yok:** Hizmetler ve güven şeridi kart ızgarası değil, hairline
  ayraçlı liste. Aynı boyutlu ikon+başlık+metin kartlarının tekrarı yasak.
- **Her başlığın üstünde küçük büyük-harf etiket yok.** Bölüm adı, başlıkla aynı
  hizada ince bir çizginin yanında durur. Canlı bilgi taşıyan çip (`StatusPill`)
  yalnızca hero ve acil hat bölümünde kullanılır.
- **Gradient metin yasak** (`background-clip: text`). Vurgu düz renkle yapılır.
- **Safe area:** mobil aksiyon barında `env(safe-area-inset-bottom)`; `body` bunun
  yüksekliği kadar alt dolgu taşır, böylece içerik barın altında kalmaz.

---

## 5. Breakpoint sözleşmesi

Header'da gezinme eşiği **`xl` (1280px)**:

- `< 1280px` → hamburger görünür, `MobileMenu` açılır.
- `≥ 1280px` → satır içi nav görünür, hamburger gizli.

`MobileMenu` ve tetikleyici **aynı** eşiği kullanmak zorundadır (`xl:hidden`). Eşikler
ayrışırsa buton hiçbir şey açmayan ölü bir kontrole dönüşür — bu hata bir kez oluştu
(nav `lg`, buton `md` idi; 768–1279 arası tamamen gezinmesiz kaldı).

Eşik `lg` değil `xl`: altı nav etiketi + logo + telefon + yol tarifi + dil seçici
1024px'e sığmıyor ve Bulgarca/Yunanca etiketler Türkçeden uzun. Eşik en kötü dile göre
seçildi. Doğrulama: `node scratch/matrix.mjs` (14 genişlik × 4 dil).

---

## 6. globals.css'te asla yapılmayacak şey

`@layer` bloğu içine **seçicisiz bildirim yazılmaz.** Bir kez yazıldı
(`-webkit-tap-highlight-color: transparent;`), minifier iki `.sr-only` bloğunu tek
kurala katladı, tarayıcı `-webkit-tap-highlight-color:transparent;.sr-only { … }`
ifadesini tek geçersiz seçici olarak ayrıştırdı ve **`.sr-only` kuralını tamamen
attı** — "İçeriğe geç" bağlantısı production'da header'ın üstünde kalıcı beyaz bir
şerit olarak göründü. Regresyon testi: `node scratch/checkcss.mjs`.
