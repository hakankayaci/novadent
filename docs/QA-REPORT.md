# CanbazVet — QA & Test Raporu

**Tarih:** 26 Temmuz 2026
**Kapsam:** Bildirilen hataların giderilmesi + tasarım/erişilebilirlik geçişi

---

## 1. Otomatik test sonuçları

| Kategori | Komut | Sonuç |
| :--- | :--- | :--- |
| Typecheck | `npm run typecheck` | ✅ Strict modda sıfır hata |
| Production build | `npm run build` | ✅ Statik SSG, `/` için 144 kB First Load JS |
| Playwright | `npm run test` | ✅ **63/63** — Desktop Chrome, Pixel 7, 320px |
| ESLint | `npm run lint` | ⚠️ **Çalışmıyor** — aşağıya bakın |

### ESLint hakkında dürüst not

Projede hiçbir ESLint yapılandırması yok (`.eslintrc*` / `eslint.config.*` mevcut
değil). `next lint` bu durumda etkileşimli kurulum sorusu sorar ve CI'da askıda kalır;
ayrıca Next.js 16'da kaldırılıyor. Bu raporun önceki sürümünde yer alan
"ESLint kurallarına %100 uyum" ifadesi **doğrulanmış bir sonuç değildi**.

Yapılacak: `npx @next/codemod@canary next-lint-to-eslint-cli .` ile flat config'e
geçilmeli ve `lint` script'i güncellenmeli. Bu geçiş bu turda yapılmadı.

---

## 2. Build sonrası koruma betiği (repoda)

```bash
npm run build && npm run verify
```

`scripts/verify-build.mjs`, Playwright'ın **yapısı gereği** yakalayamadığı iki hatayı
kontrol eder — ikisi de yalnızca minify edilmiş production çıktısında görünür:

| Kontrol | Neden var |
| :--- | :--- |
| Minify edilmiş CSS'te seçicisiz bildirim yok; `.sr-only`, `.skip-link`, `.skip-link:focus-visible` sağlam; parantezler dengeli | Skip link hatasının kök nedeni tam olarak buydu ve dev sunucusunda görünmüyordu (dev CSS minify edilmiyor) |
| JSON-LD prerender edilmiş HTML'de **gerçek etiket** olarak var, parse ediliyor, `&` bozulmamış, `aggregateRating`/`review` yok; skip link ilk odaklanabilir öğe; uydurma sosyal kanıt geri gelmemiş | `next/script` satır içi yükü yalnızca istemci JS'i çalışınca ekleniyor; crawler hiç görmüyor |

Sonuç: ✅ tüm kontroller geçti.

### Tek seferlik araştırma betikleri (`scratch/`, gitignored)

Bu turda kullanılan, kalıcı olması gerekmeyen doğrulamalar:

| Betik | Ne doğruladı | Sonuç |
| :--- | :--- | :--- |
| `motion-check.mjs` | JS kapalı / `prefers-reduced-motion` / normal — üç yolda da hiçbir öğe görünmez kalmıyor | ✅ |
| `i18n-check.mjs` | 4 dilde Türkçe sızıntısı ve çevrilmemiş anahtar yok; `<html lang>` doğru | ✅ |
| `matrix.mjs` | **14 genişlik × 4 dil = 56 kombinasyon**: gezinme her zaman erişilebilir, ikisi birden asla görünmez, hamburger gerçekten drawer açıyor, header viewport'u taşmıyor | ✅ |

---

## 3. Giderilen hatalar

| # | Hata | Kök neden |
| :-- | :--- | :--- |
| 1 | "İçeriğe Atla" bağlantısı production'da header'ın üstünde kalıcı beyaz şerit | `globals.css`'te `@layer base` içinde seçicisiz `-webkit-tap-highlight-color` bildirimi. Minifier iki `.sr-only` bloğunu tek kurala katladı, tarayıcı `-webkit-tap-highlight-color:transparent;.sr-only` ifadesini tek geçersiz seçici sayıp **kuralı tamamen attı**. |
| 2 | Skip link Tab sırasında ilk değildi | `EmergencyTopBar`, skip link'i barındıran `Header`'dan önce render ediliyordu. |
| 3 | Skip link fare tıklamasından sonra ekranda kalıyordu | `:focus` yerine `:focus-visible` kullanılmalıydı. |
| 4 | Dil düğmesi "TR TR" yazıyordu | Windows'ta bayrak emoji glifi yok; Chrome bölge harflerini ("TR") metin olarak basıyor, yanına dil kodu ekleniyordu. Bayraklar tamamen kaldırıldı (bayrak = ülke, dil değil). |
| 5 | Bulgarca/Yunanca metinler yedek fontla çiziliyordu | Plus Jakarta Sans'ta Kiril ve Yunan alfabesi **yok**. Fira Sans'a geçildi (latin-ext + Kiril + Yunan). |
| 6 | Çeviri eksikti | Hizmetler, SSS, galeri başlıkları/alt metinleri, acil durum listesi, footer, saatler hepsi koda gömülü Türkçeydi. Tümü tek bir tipli `Copy` arayüzüne taşındı; eksik alan artık **derlemeyi kırar**. |
| 7 | 768–1279px arası hiç gezinme yoktu | Nav `hidden xl:flex`, hamburger `md:hidden` idi. Eşikler tek noktadan `xl` olarak hizalandı; `MobileMenu` de aynı eşiği kullanıyor. |
| 8 | "Haritayı Yükle" düğmesi hiçbir şey yapmıyordu | `iframe` koşulsuz render ediliyordu; Google isteği her sayfa görüntülemede atılıyordu. Artık gerçekten talep üzerine mount ediliyor. |
| 9 | Hero'daki "portre" bulanık bir Instagram tanıtım grafiğiydi | 477x747 boyutunda, üzerine pazarlama metni basılmış kare kullanılıyordu. |
| 10 | Klinik fotoğrafları yumuşaktı | Türevler, orijinal yerine zaten kayıplı WebP kopyalardan yeniden kodlanıyordu (çift sıkıştırma). |
| 11 | Logo tabelaya benzemiyordu | Elle çizilmiş SVG yaklaşımı yerine gerçek tabela logosu kullanılıyor; marka renkleri de o dosyadan örneklendi. |
| 12 | Uydurma sosyal kanıt | Sahte mavi onay tiki, uydurulmuş takipçi/beğeni/yorum sayıları ve hiçbir müşterinin yazmadığı üç "yorum teması" gerçek gibi sunuluyordu. Kaldırıldı. |
| 13 | 320px'te header taşıyordu | Logo + dil + hamburger sığmıyordu; logo bu genişlikte küçültüldü. |
| 14 | Küçük dokunma hedefleri | Satır içi telefon/Instagram bağlantıları 18–26px yüksekliğindeydi. |

---

## 4. Erişilebilirlik (WCAG 2.2 AA)

- [x] Sayfada tek `h1`; başlık hiyerarşisi atlamasız.
- [x] Skip link **ilk odaklanabilir öğe**, yalnızca klavye odağında görünür, animasyonla girer.
- [x] Dil menüsü: `aria-haspopup`, `role="menu"`, `menuitemradio` + `aria-checked`,
      ok tuşlarıyla gezinme, Escape ile kapanma ve odağın tetikleyiciye dönmesi.
- [x] Mobil drawer: `role="dialog"`, `aria-modal`, odak hapsi (Tab döngüsü),
      kapanışta odak iadesi, `body` scroll kilidi.
- [x] SSS akordeonu: `aria-expanded` + `aria-controls`, ok/Home/End ile gezinme.
      Panel `hidden` değil `grid-template-rows` ile açılır — sayfa içi arama kapalı
      cevaplara da ulaşır, sabit bir max-height uzun Bulgarca cevabı kırpmaz.
- [x] Dokunma hedefleri ≥ 44px; Playwright her viewport'ta doğruluyor.
- [x] `prefers-reduced-motion: reduce` → reveal'lar anında çözülür, boş bölüm kalmaz.
- [x] Kontrast oranları denetlendi; palet kuralları `design-system/MASTER.md`'de.
- [x] `<html lang>` seçilen dili takip eder.
- [x] Dekoratif ikonlar `aria-hidden`; ikon-yalnız düğmelerde `aria-label`.

---

## 5. Yerel SEO & yapılandırılmış veri

- [x] `VeterinaryCare` JSON-LD **statik HTML'de** yer alır. (`next/script` denendi ve
      geri alındı: satır içi yükü yalnızca istemci JS'i çalıştıktan sonra ekliyor,
      dolayısıyla crawler hiç görmüyor.)
- [x] JSON-LD serileştirmesi `<`, `>`, `&` karakterlerini `\u` biçimine çevirir:
      `</script>` ile çıkış imkânsız ve Maps sorgu dizelerindeki `&` bozulmaz.
- [x] `aggregateRating` / `review` **yayınlanmıyor** — puanlar Google'da ve bu kod
      tabanından doğrulanamaz; kendi kendine verilen yorum işaretlemesi hem Google
      yapılandırılmış veri politikasını ihlal eder hem de yanıltıcıdır.
- [x] OpenGraph 1200x630 kapağı gerçek webfont ile render edilir.
- [x] `robots.txt` ve `sitemap.xml` dinamik üretiliyor.
- [x] `openGraph.alternateLocale` dört dili bildirir.

### Bilinen sınır

Diller URL'ye yansımıyor (tek route, istemci tarafı geçiş). Google yalnızca Türkçe
sürümü indeksler. Bulgarca/Yunanca aramalardan trafik hedefleniyorsa `/bg`, `/el`
route'ları + `hreflang` gerekir; bu ayrı bir iş.
