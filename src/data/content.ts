import type { Language } from "@/lib/i18n";
import type {
  ClinicRating,
  FeaturedReview,
} from "@/types/site";

export type TreatmentId =
  | "implant-tedavisi"
  | "gulus-tasarimi"
  | "estetik-dis-hekimligi"
  | "dis-beyazlatma"
  | "kanal-tedavisi"
  | "dis-eti-tedavileri"
  | "cocuk-dis-hekimligi"
  | "genel-dis-sagligi";

export type GalleryImageId =
  | "treatment-room"
  | "brand-wall"
  | "panoramic-imaging"
  | "clinic-room-wide"
  | "treatment-suite"
  | "waiting-lounge"
  | "dental-unit";

export interface Copy {
  metadata: {
    title: string;
    description: string;
    ogAlt: string;
  };
  a11y: {
    skipToContent: string;
    primaryNavigation: string;
    openMenu: string;
    closeMenu: string;
    languageMenu: string;
    selectLanguage: string;
    logoAlt: string;
    externalLink: string;
    socialLinks: string;
    mobileActions: string;
    gallery: string;
    previousImage: string;
    nextImage: string;
    closeGallery: string;
    imageCountTemplate: string;
    starRatingTemplate: string;
    mapTitle: string;
  };
  nav: {
    treatments: string;
    clinic: string;
    international: string;
    reviews: string;
    instagram: string;
    faq: string;
    contact: string;
    appointment: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    ratingLabel: string;
    appointmentCta: string;
    callCta: string;
    directionsCta: string;
    trustLine: string;
    imageAlt: string;
  };
  treatments: {
    eyebrow: string;
    title: string;
    body: string;
    disclaimer: string;
    itemCta: string;
    items: Record<TreatmentId, { title: string; summary: string }>;
  };
  clinic: {
    eyebrow: string;
    title: string;
    body: string;
    features: { title: string; body: string }[];
    galleryLabel: string;
    items: Record<GalleryImageId, { title: string; alt: string }>;
  };
  international: {
    eyebrow: string;
    title: string;
    body: string;
    languageSupport: string;
    planningNote: string;
    whatsappCta: string;
    directionsCta: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    body: string;
    ratingTemplate: string;
    countTemplate: string;
    originalLabel: string;
    translatedLabel: string;
    ctaTemplate: string;
    sourceLabel: string;
    verificationLabel: string;
  };
  instagram: {
    eyebrow: string;
    title: string;
    body: string;
    handle: string;
    followCta: string;
    profileLabel: string;
    gridLabel: string;
    viewPostLabel: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    hoursLabel: string;
    hours: string;
    sundayClosed: string;
    callCta: string;
    whatsappCta: string;
    directionsCta: string;
    instagramCta: string;
    mapCta: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      languageLabel: string;
      treatmentLabel: string;
      noteLabel: string;
      notePlaceholder: string;
      consentLabel: string;
      submit: string;
      nameError: string;
      phoneError: string;
      consentError: string;
      successMessage: string;
    };
  };
  otherBranch: {
    eyebrow: string;
    mapsCta: string;
    websiteCta: string;
  };
  footer: {
    tagline: string;
    medicalDisclaimer: string;
    privacy: string;
    rights: string;
  };
  whatsapp: {
    defaultMessage: string;
    appointmentMessage: string;
    treatmentMessageTemplate: string;
    formIntro: string;
    nameField: string;
    phoneField: string;
    languageField: string;
    treatmentField: string;
    noteField: string;
  };
}

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sa=X&sca_esv=38d28d298ce520d7&rlz=1C1FHFK_trTR977TR977&sxsrf=APpeQnsJmWnN9qgL59prTW0nyp0_w_yTsA:1785425735338&q=Novadent+Clinics+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIyNjC0sDAztDAxsDA0NTC1MDTewMj4ilHSL78sMSU1r0TBOSczLzO5WCEyv6g0NyexaBErbjkA5eAVxVEAAAA&rldimm=301886184081505813&tbm=lcl&hl=tr-TR&ved=2ahUKEwi43uiV3fqVAxXeSfEDHXioOqsQ9fQKegQISRAG&biw=1707&bih=811&dpr=1.13#lkt=LocalPoiReviews";

export const clinicRating: ClinicRating = {
  value: 5,
  count: 141,
  checkedAt: "2026-07-30",
  sourceUrl: GOOGLE_REVIEWS_URL,
};

export const featuredReviews = [
  {
    id: "ozay-ozfidan",
    author: "özay özfidan",
    rating: 5,
    originalLanguage: "tr",
    originalText:
      "Tüm doktorlar ve personel son derece şeffaf, son derece bilgili; gönül rahatlığıyla uğrayabilirsiniz.",
    translations: {
      tr: "Tüm doktorlar ve personel son derece şeffaf, son derece bilgili; gönül rahatlığıyla uğrayabilirsiniz.",
      en: "All the dentists and staff are very transparent and knowledgeable; you can visit with peace of mind.",
      el: "Όλοι οι οδοντίατροι και το προσωπικό είναι πολύ ειλικρινείς και καταρτισμένοι· μπορείτε να τους επισκεφθείτε με σιγουριά.",
      bg: "Всички лекари и служители са много открити и добре информирани; можете да ги посетите със спокойствие.",
    },
  },
  {
    id: "gul-ersoy",
    author: "gül ersoy",
    rating: 5,
    originalLanguage: "tr",
    originalText:
      "Oldukça temiz, içerisi çok şık, çalışanlar güler yüzlü, doktorlar işlerini çok iyi yapıyor.",
    translations: {
      tr: "Oldukça temiz, içerisi çok şık, çalışanlar güler yüzlü, doktorlar işlerini çok iyi yapıyor.",
      en: "Very clean, with a stylish interior and friendly staff. The dentists do their work very well.",
      el: "Πολύ καθαρός και κομψός χώρος, με φιλικό προσωπικό. Οι οδοντίατροι κάνουν πολύ καλά τη δουλειά τους.",
      bg: "Много чисто и стилно място с усмихнат екип. Лекарите си вършат работата много добре.",
    },
  },
  {
    id: "jonathan-semmence",
    author: "Jonathan Semmence",
    rating: 5,
    originalLanguage: "en",
    originalText:
      "Friendly and helpful staff. Excellent work. Clear pricing. Easy contact via WhatsApp. Very flexible.",
    translations: {
      tr: "Güler yüzlü ve yardımsever ekip. Çok iyi çalışma. Net fiyatlandırma. WhatsApp üzerinden kolay iletişim. Oldukça esnek.",
      en: "Friendly and helpful staff. Excellent work. Clear pricing. Easy contact via WhatsApp. Very flexible.",
      el: "Φιλικό και εξυπηρετικό προσωπικό. Εξαιρετική δουλειά. Σαφής τιμολόγηση. Εύκολη επικοινωνία μέσω WhatsApp. Μεγάλη ευελιξία.",
      bg: "Любезен и отзивчив екип. Отлична работа. Ясни цени. Лесна връзка чрез WhatsApp. Много гъвкави.",
    },
  },
] as const satisfies readonly FeaturedReview[];

export const remainingGoogleReviewCount = Math.max(
  0,
  clinicRating.count - featuredReviews.length,
);

const tr: Copy = {
  metadata: {
    title: "NOVADENT Edirne | Ağız ve Diş Sağlığı Polikliniği",
    description:
      "Edirne Merkez'de ağız ve diş sağlığı muayenesi, kişiye özel tedavi planlaması ve dört dilde randevu desteği.",
    ogAlt: "NOVADENT Edirne kliniği ve NOVA DENT logosu",
  },
  a11y: {
    skipToContent: "İçeriğe geç",
    primaryNavigation: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    languageMenu: "Dil seçenekleri",
    selectLanguage: "Dil seç",
    logoAlt: "NOVADENT Ağız ve Diş Sağlığı Polikliniği",
    externalLink: "Yeni sekmede açılır",
    socialLinks: "Sosyal medya bağlantıları",
    mobileActions: "Mobil hızlı işlemler",
    gallery: "Klinik fotoğraf galerisi",
    previousImage: "Önceki fotoğraf",
    nextImage: "Sonraki fotoğraf",
    closeGallery: "Galeriyi kapat",
    imageCountTemplate: "{current} / {total}. fotoğraf",
    starRatingTemplate: "5 üzerinden {score} yıldız",
    mapTitle: "NOVADENT Edirne konumu",
  },
  nav: {
    treatments: "Tedaviler",
    clinic: "Klinik",
    international: "Uluslararası",
    reviews: "Yorumlar",
    instagram: "Instagram",
    faq: "SSS",
    contact: "İletişim",
    appointment: "Randevu Al",
  },
  hero: {
    eyebrow: "Edirne Merkez · Ağız ve Diş Sağlığı",
    title: "Diş bakımında netlik,",
    accent: "her adımda özen.",
    body: "İhtiyaçlarınızı dinleyen değerlendirme, anlaşılır bilgilendirme ve size özel planlanan bir klinik süreci.",
    ratingLabel: "Google'da 5,0 · 141 değerlendirme",
    appointmentCta: "WhatsApp'tan Randevu İste",
    callCta: "Kliniği Ara",
    directionsCta: "Yol Tarifi Al",
    trustLine: "Tanı ve tedavi planı hekim muayenesiyle belirlenir.",
    imageAlt: "NOVADENT kliniği önünde beyaz NOVA DENT logosu",
  },
  treatments: {
    eyebrow: "Tedaviler",
    title: "İhtiyaca göre planlanan diş hekimliği",
    body: "Her tedavi seçeneği, muayene bulguları ve kişisel ihtiyaçlar birlikte değerlendirilerek ele alınır.",
    disclaimer: "Uygunluk, süre ve tedavi adımları yalnız hekim muayenesi sonrasında netleşir.",
    itemCta: "Bu tedavi hakkında bilgi al",
    items: {
      "implant-tedavisi": {
        title: "İmplant Tedavisi",
        summary: "Eksik dişler için muayene ve görüntüleme sonrasında planlanan implant uygulamaları.",
      },
      "gulus-tasarimi": {
        title: "Gülüş Tasarımı",
        summary: "Yüz, diş ve diş eti ilişkisini birlikte değerlendiren kişiye özel estetik planlama.",
      },
      "estetik-dis-hekimligi": {
        title: "Estetik ve Restoratif Diş Hekimliği",
        summary: "Diş dokusunu, işlevi ve görünümü dikkate alan dolgu, kaplama ve restorasyon seçenekleri.",
      },
      "dis-beyazlatma": {
        title: "Diş Beyazlatma",
        summary: "Diş ve diş eti durumu değerlendirildikten sonra hekim kontrolünde uygulanan beyazlatma.",
      },
      "kanal-tedavisi": {
        title: "Kanal Tedavisi",
        summary: "Dişin iç dokusunu etkileyen durumlarda muayene ve görüntüleme ile planlanan endodontik bakım.",
      },
      "dis-eti-tedavileri": {
        title: "Diş Eti Tedavileri",
        summary: "Diş eti sağlığını değerlendirmeye ve gerekli bakımı planlamaya yönelik periodontal uygulamalar.",
      },
      "cocuk-dis-hekimligi": {
        title: "Çocuk Diş Hekimliği",
        summary: "Çocukların yaşına ve gelişimine uygun muayene, koruyucu bakım ve tedavi yaklaşımı.",
      },
      "genel-dis-sagligi": {
        title: "Genel ve Koruyucu Diş Hekimliği",
        summary: "Düzenli kontrol, profesyonel temizlik ve ağız bakımına yönelik kişisel öneriler.",
      },
    },
  },
  clinic: {
    eyebrow: "Klinik ve Teknoloji",
    title: "Sakin, aydınlık ve düzenli bir klinik ortamı",
    body: "Muayene, görüntüleme ve tedavi alanlarımızı ziyaretiniz öncesinde yakından görün.",
    features: [
      {
        title: "Dijital görüntüleme",
        body: "Muayene bulgularını destekleyen görüntüleme olanakları.",
      },
      {
        title: "Ayrı tedavi alanları",
        body: "Tedavi sürecinde mahremiyet ve düzeni gözeten odalar.",
      },
      {
        title: "Açık bilgilendirme",
        body: "Önerilen işlemler ve sonraki adımlar hakkında anlaşılır iletişim.",
      },
    ],
    galleryLabel: "NOVADENT klinik galerisi",
    items: {
      "treatment-room": {
        title: "Tedavi Odası",
        alt: "NOVADENT kliniğinde pencere önündeki diş üniti ve tedavi ekipmanı",
      },
      "brand-wall": {
        title: "NOVADENT Klinik İmzası",
        alt: "Klinik duvarında lacivert ve turkuaz NOVA DENT logosu",
      },
      "panoramic-imaging": {
        title: "Panoramik Görüntüleme",
        alt: "NOVADENT kliniğindeki panoramik diş görüntüleme cihazı",
      },
      "clinic-room-wide": {
        title: "Aydınlık Klinik Odası",
        alt: "Geniş pencereli NOVADENT tedavi odasının genel görünümü",
      },
      "treatment-suite": {
        title: "Tedavi Alanı",
        alt: "NOVADENT kliniğinde diş üniti, dolaplar ve çalışma alanı",
      },
      "waiting-lounge": {
        title: "Bekleme Salonu",
        alt: "Lacivert duvarlı, sarı ve gri koltuklu NOVADENT bekleme salonu",
      },
      "dental-unit": {
        title: "Diş Üniti",
        alt: "Lacivert klinik odasında ekranlı diş üniti ve hasta koltuğu",
      },
    },
  },
  international: {
    eyebrow: "Uluslararası Misafirler",
    title: "Edirne'deki randevunuzu kendi dilinizde planlayın",
    body: "Türkiye, Yunanistan, Bulgaristan ve diğer ülkelerden gelen misafirler için ulaşım ve randevu bilgilerini tek yerde topluyoruz.",
    languageSupport: "Web sitesi ve randevu talebi Türkçe, İngilizce, Yunanca ve Bulgarca sunulur.",
    planningNote: "Uzaktan paylaşılan bilgiler ön değerlendirme niteliğindedir; kesin plan ve ücret muayene sonrasında belirlenir.",
    whatsappCta: "WhatsApp'tan Yazın",
    directionsCta: "Edirne Kliniğine Yol Tarifi",
  },
  reviews: {
    eyebrow: "Google Yorumları",
    title: "Misafirlerimizin kendi sözleriyle",
    body: "Aşağıdaki kısa alıntılar, herkese açık Google yorumlarından anlamı korunarak seçilmiştir.",
    ratingTemplate: "5 üzerinden {score}",
    countTemplate: "{count} Google değerlendirmesi",
    originalLabel: "Google yorumu",
    translatedLabel: "Google yorumu · çevrildi",
    ctaTemplate: "Google'daki diğer {count} yorumu gör",
    sourceLabel: "Google'da görüntüle",
    verificationLabel: "Google yorumları doğrulanmıştır.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Kliniğin içinden güncel kareler",
    body: "Klinik ortamını, bilgilendirici paylaşımları ve duyuruları Instagram hesabımızdan takip edin.",
    handle: "@novadentclinicsedirne",
    followCta: "Instagram'da Takip Et",
    profileLabel: "NOVADENT Instagram profili",
    gridLabel: "NOVADENT Instagram fotoğrafları",
    viewPostLabel: "Instagram'da görüntüle",
  },
  faq: {
    eyebrow: "Sık Sorulan Sorular",
    title: "Ziyaret öncesi kısa yanıtlar",
    body: "Randevu, muayene ve kliniğe ulaşım hakkında temel bilgiler.",
    items: [
      {
        question: "Muayene için randevu almam gerekir mi?",
        answer: "Bekleme süresini azaltmak için randevu almanızı öneririz. Telefon veya WhatsApp üzerinden uygun saatleri sorabilirsiniz.",
      },
      {
        question: "İlk randevuya gelirken ne getirmeliyim?",
        answer: "Varsa önceki diş görüntülerinizi, kullandığınız ilaçların listesini ve hekimin bilmesi gereken sağlık bilgilerinizi yanınızda bulundurabilirsiniz.",
      },
      {
        question: "Fotoğraf göndererek tedavi planı alabilir miyim?",
        answer: "Fotoğraflar yalnız ön bilgilendirmeye yardımcı olabilir. Tanı, kesin tedavi planı ve ücret için klinik muayene ve gerektiğinde görüntüleme gerekir.",
      },
      {
        question: "Hangi dillerde randevu talebi oluşturabilirim?",
        answer: "Web sitesi üzerinden Türkçe, İngilizce, Yunanca ve Bulgarca randevu talebi oluşturabilirsiniz.",
      },
      {
        question: "Çalışma saatleri nedir?",
        answer: "Pazartesi–Cuma 09.00–18.30, Cumartesi 09.00–17.00 saatleri arasında hizmet veriyoruz. Pazar günü kapalıyız.",
      },
    ],
  },
  contact: {
    eyebrow: "İletişim",
    title: "Randevu ve konum bilgileri",
    body: "Sorunuzu paylaşın, uygun randevu saatini öğrenin veya doğrudan kliniğe yol tarifi alın.",
    addressLabel: "Adres",
    address: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1, İç Kapı No:10, Edirne Merkez",
    phoneLabel: "Telefon",
    hoursLabel: "Çalışma saatleri",
    hours: "Pazartesi–Cuma 09.00–18.30 · Cumartesi 09.00–17.00",
    sundayClosed: "Pazar kapalı",
    callCta: "0501 130 15 22'yi Ara",
    whatsappCta: "WhatsApp'tan Randevu İste",
    directionsCta: "Yol Tarifi Al",
    instagramCta: "Instagram'ı Aç",
    mapCta: "Google Maps'te Gör",
    form: {
      title: "Randevu talebi",
      nameLabel: "Ad soyad",
      namePlaceholder: "Adınız ve soyadınız",
      phoneLabel: "Telefon",
      phonePlaceholder: "05XX XXX XX XX",
      languageLabel: "Tercih edilen dil",
      treatmentLabel: "İlgilenilen tedavi",
      noteLabel: "Not",
      notePlaceholder: "Kısaca nasıl yardımcı olabileceğimizi yazın",
      consentLabel: "Bilgilerimin randevu talebime yanıt vermek amacıyla kullanılmasını kabul ediyorum.",
      submit: "WhatsApp'ta Talep Oluştur",
      nameError: "Lütfen adınızı ve soyadınızı yazın.",
      phoneError: "Lütfen geçerli bir telefon numarası yazın.",
      consentError: "Devam etmek için bilgilendirme onayını işaretleyin.",
      successMessage: "Talebiniz WhatsApp'ta gönderime hazırlandı.",
    },
  },
  otherBranch: {
    eyebrow: "Diğer Şubemiz",
    mapsCta: "Google Maps'te Gör",
    websiteCta: "Web Sitesini Aç",
  },
  footer: {
    tagline: "Edirne'de açık iletişim ve kişiye özel planlamayla ağız ve diş sağlığı hizmeti.",
    medicalDisclaimer: "Bu sitedeki bilgiler genel bilgilendirme amaçlıdır; hekim muayenesi, tanı veya tedavi planının yerine geçmez.",
    privacy: "Gizlilik ve Kişisel Verilerin Korunması",
    rights: "Tüm hakları saklıdır.",
  },
  whatsapp: {
    defaultMessage: "Merhaba NOVADENT, randevu ve muayene süreci hakkında bilgi almak istiyorum.",
    appointmentMessage: "Merhaba NOVADENT, uygun bir muayene randevusu oluşturmak istiyorum.",
    treatmentMessageTemplate: "Merhaba NOVADENT, {treatment} hakkında bilgi almak istiyorum.",
    formIntro: "Merhaba NOVADENT, web sitesi üzerinden randevu talebi oluşturuyorum.",
    nameField: "Ad soyad",
    phoneField: "Telefon",
    languageField: "Tercih edilen dil",
    treatmentField: "İlgilenilen tedavi",
    noteField: "Not",
  },
};

const en: Copy = {
  metadata: {
    title: "NOVADENT Edirne | Dental Clinic",
    description:
      "Dental examinations, individual treatment planning and appointment support in four languages at NOVADENT in central Edirne.",
    ogAlt: "NOVADENT clinic in Edirne with the NOVA DENT logo",
  },
  a11y: {
    skipToContent: "Skip to content",
    primaryNavigation: "Primary navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageMenu: "Language options",
    selectLanguage: "Select language",
    logoAlt: "NOVADENT Oral and Dental Health Clinic",
    externalLink: "Opens in a new tab",
    socialLinks: "Social media links",
    mobileActions: "Mobile quick actions",
    gallery: "Clinic photo gallery",
    previousImage: "Previous image",
    nextImage: "Next image",
    closeGallery: "Close gallery",
    imageCountTemplate: "Image {current} of {total}",
    starRatingTemplate: "{score} stars out of 5",
    mapTitle: "NOVADENT Edirne location",
  },
  nav: {
    treatments: "Treatments",
    clinic: "Clinic",
    international: "International",
    reviews: "Reviews",
    instagram: "Instagram",
    faq: "FAQ",
    contact: "Contact",
    appointment: "Book an Appointment",
  },
  hero: {
    eyebrow: "Central Edirne · Dental Care",
    title: "Clarity in dental care,",
    accent: "attention at every step.",
    body: "An attentive assessment, clear information and a clinical process planned around your individual needs.",
    ratingLabel: "5.0 on Google · 141 reviews",
    appointmentCta: "Request an Appointment",
    callCta: "Call the Clinic",
    directionsCta: "Get Directions",
    trustLine: "Diagnosis and treatment planning require an examination by a dentist.",
    imageAlt: "White NOVA DENT logo in front of the NOVADENT clinic",
  },
  treatments: {
    eyebrow: "Treatments",
    title: "Dental care planned around your needs",
    body: "Every option is considered together with your examination findings and individual requirements.",
    disclaimer: "Suitability, timing and treatment steps can only be confirmed after an examination by a dentist.",
    itemCta: "Ask about this treatment",
    items: {
      "implant-tedavisi": {
        title: "Dental Implants",
        summary: "Implant options for missing teeth, planned after an examination and appropriate imaging.",
      },
      "gulus-tasarimi": {
        title: "Smile Design",
        summary: "Individual aesthetic planning that considers the relationship between the face, teeth and gums.",
      },
      "estetik-dis-hekimligi": {
        title: "Aesthetic and Restorative Dentistry",
        summary: "Fillings, crowns and restorations considered in relation to tooth tissue, function and appearance.",
      },
      "dis-beyazlatma": {
        title: "Teeth Whitening",
        summary: "Dentist-supervised whitening after the teeth and gums have been assessed.",
      },
      "kanal-tedavisi": {
        title: "Root Canal Treatment",
        summary: "Endodontic care planned with an examination and imaging when the inner tooth tissue is affected.",
      },
      "dis-eti-tedavileri": {
        title: "Gum Care",
        summary: "Periodontal assessment and care planned to support gum health.",
      },
      "cocuk-dis-hekimligi": {
        title: "Children's Dentistry",
        summary: "Examinations, preventive care and treatment adapted to a child's age and development.",
      },
      "genel-dis-sagligi": {
        title: "General and Preventive Dentistry",
        summary: "Routine checks, professional cleaning and individual guidance for daily oral care.",
      },
    },
  },
  clinic: {
    eyebrow: "Clinic and Technology",
    title: "A calm, bright and well-organised clinic",
    body: "See our examination, imaging and treatment areas before your visit.",
    features: [
      {
        title: "Digital imaging",
        body: "Imaging facilities that support the findings of your examination.",
      },
      {
        title: "Separate treatment rooms",
        body: "Rooms arranged with privacy and an orderly treatment process in mind.",
      },
      {
        title: "Clear information",
        body: "Straightforward communication about proposed procedures and next steps.",
      },
    ],
    galleryLabel: "NOVADENT clinic gallery",
    items: {
      "treatment-room": {
        title: "Treatment Room",
        alt: "Dental chair and treatment equipment beside a window at NOVADENT",
      },
      "brand-wall": {
        title: "NOVADENT Signature Detail",
        alt: "Navy and turquoise NOVA DENT logo mounted on a clinic wall",
      },
      "panoramic-imaging": {
        title: "Panoramic Imaging",
        alt: "Panoramic dental imaging device at the NOVADENT clinic",
      },
      "clinic-room-wide": {
        title: "Bright Clinic Room",
        alt: "Wide view of a NOVADENT treatment room with large windows",
      },
      "treatment-suite": {
        title: "Treatment Area",
        alt: "Dental chair, cabinets and clinical workspace at NOVADENT",
      },
      "waiting-lounge": {
        title: "Waiting Lounge",
        alt: "NOVADENT waiting lounge with a navy wall and mustard and grey seats",
      },
      "dental-unit": {
        title: "Dental Unit",
        alt: "Dental unit with a screen and patient chair in a navy clinic room",
      },
    },
  },
  international: {
    eyebrow: "International Visitors",
    title: "Plan your Edirne appointment in your language",
    body: "Travel and appointment information in one place for visitors from Türkiye, Greece, Bulgaria and further afield.",
    languageSupport: "The website and appointment request are available in Turkish, English, Greek and Bulgarian.",
    planningNote: "Information shared remotely is preliminary. A final plan and fee can only be confirmed after an examination.",
    whatsappCta: "Message on WhatsApp",
    directionsCta: "Directions to the Edirne Clinic",
  },
  reviews: {
    eyebrow: "Google Reviews",
    title: "In our visitors' own words",
    body: "These short excerpts were selected from public Google reviews without changing their meaning.",
    ratingTemplate: "{score} out of 5",
    countTemplate: "{count} Google reviews",
    originalLabel: "Google review",
    translatedLabel: "Google review · translated",
    ctaTemplate: "See the other {count} reviews on Google",
    sourceLabel: "View on Google",
    verificationLabel: "Google reviews have been verified.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Recent moments from inside the clinic",
    body: "Follow our Instagram account for clinic views, informative posts and announcements.",
    handle: "@novadentclinicsedirne",
    followCta: "Follow on Instagram",
    profileLabel: "NOVADENT Instagram profile",
    gridLabel: "NOVADENT Instagram photos",
    viewPostLabel: "View on Instagram",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Short answers before your visit",
    body: "Essential information about appointments, examinations and reaching the clinic.",
    items: [
      {
        question: "Do I need an appointment for an examination?",
        answer: "We recommend booking to reduce waiting time. You can ask about available times by phone or WhatsApp.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer: "If available, bring previous dental images, a list of medicines you take and any health information your dentist should know.",
      },
      {
        question: "Can I receive a treatment plan by sending a photo?",
        answer: "Photos may only support preliminary information. Diagnosis, a final treatment plan and fees require a clinical examination and, when needed, imaging.",
      },
      {
        question: "Which languages can I use for an appointment request?",
        answer: "You can submit an appointment request through the website in Turkish, English, Greek or Bulgarian.",
      },
      {
        question: "What are your opening hours?",
        answer: "We are open Monday–Friday 09:00–18:30 and Saturday 09:00–17:00. The clinic is closed on Sunday.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Appointment and location details",
    body: "Share your question, ask for an available appointment time or get directions straight to the clinic.",
    addressLabel: "Address",
    address: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1, Door No:10, Central Edirne",
    phoneLabel: "Phone",
    hoursLabel: "Opening hours",
    hours: "Monday–Friday 09:00–18:30 · Saturday 09:00–17:00",
    sundayClosed: "Closed on Sunday",
    callCta: "Call +90 501 130 15 22",
    whatsappCta: "Request an Appointment",
    directionsCta: "Get Directions",
    instagramCta: "Open Instagram",
    mapCta: "View on Google Maps",
    form: {
      title: "Appointment request",
      nameLabel: "Full name",
      namePlaceholder: "Your full name",
      phoneLabel: "Phone",
      phonePlaceholder: "+__ ___ ___ __ __",
      languageLabel: "Preferred language",
      treatmentLabel: "Treatment of interest",
      noteLabel: "Note",
      notePlaceholder: "Briefly tell us how we can help",
      consentLabel: "I agree that my details may be used to respond to my appointment request.",
      submit: "Prepare Request in WhatsApp",
      nameError: "Please enter your full name.",
      phoneError: "Please enter a valid phone number.",
      consentError: "Please accept the information notice to continue.",
      successMessage: "Your request is ready to send in WhatsApp.",
    },
  },
  otherBranch: {
    eyebrow: "Our Other Branch",
    mapsCta: "View on Google Maps",
    websiteCta: "Visit Website",
  },
  footer: {
    tagline: "Dental care in Edirne with clear communication and individual planning.",
    medicalDisclaimer: "Information on this website is general and does not replace an examination, diagnosis or treatment plan by a dentist.",
    privacy: "Privacy and Personal Data Protection",
    rights: "All rights reserved.",
  },
  whatsapp: {
    defaultMessage: "Hello NOVADENT, I would like information about appointments and the examination process.",
    appointmentMessage: "Hello NOVADENT, I would like to request an available examination appointment.",
    treatmentMessageTemplate: "Hello NOVADENT, I would like information about {treatment}.",
    formIntro: "Hello NOVADENT, I am making an appointment request through the website.",
    nameField: "Full name",
    phoneField: "Phone",
    languageField: "Preferred language",
    treatmentField: "Treatment of interest",
    noteField: "Note",
  },
};

const el: Copy = {
  metadata: {
    title: "NOVADENT Αδριανούπολη | Οδοντιατρική Κλινική",
    description:
      "Οδοντιατρικός έλεγχος, εξατομικευμένος σχεδιασμός θεραπείας και υποστήριξη ραντεβού σε τέσσερις γλώσσες στο κέντρο της Αδριανούπολης.",
    ogAlt: "Η κλινική NOVADENT στην Αδριανούπολη με το λογότυπο NOVA DENT",
  },
  a11y: {
    skipToContent: "Μετάβαση στο περιεχόμενο",
    primaryNavigation: "Κύριο μενού",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    languageMenu: "Επιλογές γλώσσας",
    selectLanguage: "Επιλογή γλώσσας",
    logoAlt: "Οδοντιατρική Κλινική NOVADENT",
    externalLink: "Ανοίγει σε νέα καρτέλα",
    socialLinks: "Σύνδεσμοι κοινωνικών δικτύων",
    mobileActions: "Γρήγορες ενέργειες για κινητά",
    gallery: "Φωτογραφική συλλογή της κλινικής",
    previousImage: "Προηγούμενη εικόνα",
    nextImage: "Επόμενη εικόνα",
    closeGallery: "Κλείσιμο συλλογής",
    imageCountTemplate: "Εικόνα {current} από {total}",
    starRatingTemplate: "{score} αστέρια στα 5",
    mapTitle: "Τοποθεσία NOVADENT στην Αδριανούπολη",
  },
  nav: {
    treatments: "Θεραπείες",
    clinic: "Κλινική",
    international: "Διεθνείς επισκέπτες",
    reviews: "Κριτικές",
    instagram: "Instagram",
    faq: "Συχνές ερωτήσεις",
    contact: "Επικοινωνία",
    appointment: "Κλείστε Ραντεβού",
  },
  hero: {
    eyebrow: "Κέντρο Αδριανούπολης · Οδοντιατρική Φροντίδα",
    title: "Σαφήνεια στην οδοντιατρική φροντίδα,",
    accent: "προσοχή σε κάθε βήμα.",
    body: "Προσεκτική αξιολόγηση, σαφής ενημέρωση και μια κλινική διαδικασία σχεδιασμένη γύρω από τις δικές σας ανάγκες.",
    ratingLabel: "5,0 στο Google · 141 κριτικές",
    appointmentCta: "Ζητήστε Ραντεβού",
    callCta: "Καλέστε την Κλινική",
    directionsCta: "Οδηγίες Πρόσβασης",
    trustLine: "Η διάγνωση και ο σχεδιασμός θεραπείας απαιτούν εξέταση από οδοντίατρο.",
    imageAlt: "Λευκό λογότυπο NOVA DENT μπροστά από την κλινική NOVADENT",
  },
  treatments: {
    eyebrow: "Θεραπείες",
    title: "Οδοντιατρική φροντίδα σχεδιασμένη για τις ανάγκες σας",
    body: "Κάθε επιλογή εξετάζεται μαζί με τα ευρήματα της εξέτασης και τις ατομικές σας ανάγκες.",
    disclaimer: "Η καταλληλότητα, η διάρκεια και τα στάδια της θεραπείας επιβεβαιώνονται μόνο μετά από εξέταση.",
    itemCta: "Ρωτήστε για αυτή τη θεραπεία",
    items: {
      "implant-tedavisi": {
        title: "Οδοντικά Εμφυτεύματα",
        summary: "Επιλογές εμφυτευμάτων για ελλείποντα δόντια, μετά από εξέταση και την κατάλληλη απεικόνιση.",
      },
      "gulus-tasarimi": {
        title: "Σχεδιασμός Χαμόγελου",
        summary: "Εξατομικευμένος αισθητικός σχεδιασμός με συνεκτίμηση προσώπου, δοντιών και ούλων.",
      },
      "estetik-dis-hekimligi": {
        title: "Αισθητική και Αποκαταστατική Οδοντιατρική",
        summary: "Σφραγίσματα, στεφάνες και αποκαταστάσεις με γνώμονα τον οδοντικό ιστό, τη λειτουργία και την εμφάνιση.",
      },
      "dis-beyazlatma": {
        title: "Λεύκανση Δοντιών",
        summary: "Λεύκανση υπό την επίβλεψη οδοντιάτρου, μετά από αξιολόγηση των δοντιών και των ούλων.",
      },
      "kanal-tedavisi": {
        title: "Ενδοδοντική Θεραπεία",
        summary: "Ενδοδοντική φροντίδα που σχεδιάζεται με εξέταση και απεικόνιση όταν επηρεάζεται το εσωτερικό του δοντιού.",
      },
      "dis-eti-tedavileri": {
        title: "Φροντίδα Ούλων",
        summary: "Περιοδοντική αξιολόγηση και φροντίδα για την υποστήριξη της υγείας των ούλων.",
      },
      "cocuk-dis-hekimligi": {
        title: "Παιδοδοντιατρική",
        summary: "Έλεγχος, πρόληψη και θεραπεία προσαρμοσμένα στην ηλικία και την ανάπτυξη του παιδιού.",
      },
      "genel-dis-sagligi": {
        title: "Γενική και Προληπτική Οδοντιατρική",
        summary: "Τακτικός έλεγχος, επαγγελματικός καθαρισμός και εξατομικευμένες οδηγίες στοματικής φροντίδας.",
      },
    },
  },
  clinic: {
    eyebrow: "Κλινική και Τεχνολογία",
    title: "Ένας ήρεμος, φωτεινός και οργανωμένος χώρος",
    body: "Δείτε τους χώρους εξέτασης, απεικόνισης και θεραπείας πριν από την επίσκεψή σας.",
    features: [
      {
        title: "Ψηφιακή απεικόνιση",
        body: "Δυνατότητες απεικόνισης που υποστηρίζουν τα ευρήματα της εξέτασης.",
      },
      {
        title: "Ξεχωριστές αίθουσες",
        body: "Χώροι οργανωμένοι με γνώμονα την ιδιωτικότητα και την ομαλή διαδικασία.",
      },
      {
        title: "Σαφής ενημέρωση",
        body: "Κατανοητή επικοινωνία για τις προτεινόμενες πράξεις και τα επόμενα βήματα.",
      },
    ],
    galleryLabel: "Συλλογή φωτογραφιών της NOVADENT",
    items: {
      "treatment-room": {
        title: "Αίθουσα Θεραπείας",
        alt: "Οδοντιατρική έδρα και εξοπλισμός δίπλα σε παράθυρο στη NOVADENT",
      },
      "brand-wall": {
        title: "Η Υπογραφή της NOVADENT",
        alt: "Μπλε και τιρκουάζ λογότυπο NOVA DENT σε τοίχο της κλινικής",
      },
      "panoramic-imaging": {
        title: "Πανοραμική Απεικόνιση",
        alt: "Συσκευή πανοραμικής οδοντιατρικής απεικόνισης στη NOVADENT",
      },
      "clinic-room-wide": {
        title: "Φωτεινή Αίθουσα",
        alt: "Γενική άποψη αίθουσας θεραπείας της NOVADENT με μεγάλα παράθυρα",
      },
      "treatment-suite": {
        title: "Χώρος Θεραπείας",
        alt: "Οδοντιατρική έδρα, ντουλάπια και χώρος εργασίας στη NOVADENT",
      },
      "waiting-lounge": {
        title: "Χώρος Αναμονής",
        alt: "Χώρος αναμονής της NOVADENT με μπλε τοίχο και κίτρινα και γκρι καθίσματα",
      },
      "dental-unit": {
        title: "Οδοντιατρική Μονάδα",
        alt: "Οδοντιατρική μονάδα με οθόνη και έδρα σε μπλε αίθουσα",
      },
    },
  },
  international: {
    eyebrow: "Διεθνείς Επισκέπτες",
    title: "Οργανώστε το ραντεβού σας στην Αδριανούπολη στη γλώσσα σας",
    body: "Πληροφορίες μετακίνησης και ραντεβού σε ένα σημείο για επισκέπτες από την Τουρκία, την Ελλάδα, τη Βουλγαρία και άλλες χώρες.",
    languageSupport: "Η ιστοσελίδα και το αίτημα ραντεβού διατίθενται στα τουρκικά, αγγλικά, ελληνικά και βουλγαρικά.",
    planningNote: "Οι πληροφορίες εξ αποστάσεως είναι προκαταρκτικές. Το τελικό σχέδιο και το κόστος καθορίζονται μετά την εξέταση.",
    whatsappCta: "Μήνυμα στο WhatsApp",
    directionsCta: "Οδηγίες για την Κλινική",
  },
  reviews: {
    eyebrow: "Κριτικές Google",
    title: "Με τα λόγια των επισκεπτών μας",
    body: "Τα σύντομα αποσπάσματα επιλέχθηκαν από δημόσιες κριτικές Google χωρίς αλλαγή του νοήματος.",
    ratingTemplate: "{score} στα 5",
    countTemplate: "{count} κριτικές Google",
    originalLabel: "Κριτική Google",
    translatedLabel: "Κριτική Google · μετάφραση",
    ctaTemplate: "Δείτε τις άλλες {count} κριτικές στο Google",
    sourceLabel: "Προβολή στο Google",
    verificationLabel: "Οι κριτικές Google έχουν επαληθευτεί.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Πρόσφατες εικόνες από την κλινική",
    body: "Ακολουθήστε τον λογαριασμό μας για εικόνες της κλινικής, ενημερωτικές δημοσιεύσεις και ανακοινώσεις.",
    handle: "@novadentclinicsedirne",
    followCta: "Ακολουθήστε στο Instagram",
    profileLabel: "Προφίλ Instagram της NOVADENT",
    gridLabel: "Φωτογραφίες Instagram της NOVADENT",
    viewPostLabel: "Προβολή στο Instagram",
  },
  faq: {
    eyebrow: "Συχνές Ερωτήσεις",
    title: "Σύντομες απαντήσεις πριν από την επίσκεψη",
    body: "Βασικές πληροφορίες για ραντεβού, εξέταση και πρόσβαση στην κλινική.",
    items: [
      {
        question: "Χρειάζομαι ραντεβού για εξέταση;",
        answer: "Συνιστούμε να κλείσετε ραντεβού ώστε να περιοριστεί η αναμονή. Ρωτήστε για διαθέσιμες ώρες τηλεφωνικά ή μέσω WhatsApp.",
      },
      {
        question: "Τι να φέρω στο πρώτο ραντεβού;",
        answer: "Αν υπάρχουν, φέρτε προηγούμενες οδοντιατρικές απεικονίσεις, λίστα φαρμάκων και πληροφορίες υγείας που πρέπει να γνωρίζει ο οδοντίατρος.",
      },
      {
        question: "Μπορώ να λάβω σχέδιο θεραπείας στέλνοντας φωτογραφία;",
        answer: "Οι φωτογραφίες βοηθούν μόνο στην προκαταρκτική ενημέρωση. Η διάγνωση, το τελικό σχέδιο και το κόστος απαιτούν κλινική εξέταση και, όταν χρειάζεται, απεικόνιση.",
      },
      {
        question: "Σε ποιες γλώσσες μπορώ να ζητήσω ραντεβού;",
        answer: "Μπορείτε να υποβάλετε αίτημα μέσω της ιστοσελίδας στα τουρκικά, αγγλικά, ελληνικά ή βουλγαρικά.",
      },
      {
        question: "Ποιες είναι οι ώρες λειτουργίας;",
        answer: "Λειτουργούμε Δευτέρα–Παρασκευή 09:00–18:30 και Σάββατο 09:00–17:00. Η κλινική είναι κλειστή την Κυριακή.",
      },
    ],
  },
  contact: {
    eyebrow: "Επικοινωνία",
    title: "Ραντεβού και τοποθεσία",
    body: "Μοιραστείτε την ερώτησή σας, ζητήστε διαθέσιμη ώρα ή λάβετε οδηγίες απευθείας προς την κλινική.",
    addressLabel: "Διεύθυνση",
    address: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1, Εσωτερική Θύρα No:10, Κέντρο Αδριανούπολης",
    phoneLabel: "Τηλέφωνο",
    hoursLabel: "Ώρες λειτουργίας",
    hours: "Δευτέρα–Παρασκευή 09:00–18:30 · Σάββατο 09:00–17:00",
    sundayClosed: "Κλειστά την Κυριακή",
    callCta: "Καλέστε +90 501 130 15 22",
    whatsappCta: "Ζητήστε Ραντεβού",
    directionsCta: "Οδηγίες Πρόσβασης",
    instagramCta: "Άνοιγμα Instagram",
    mapCta: "Προβολή στο Google Maps",
    form: {
      title: "Αίτημα ραντεβού",
      nameLabel: "Ονοματεπώνυμο",
      namePlaceholder: "Το ονοματεπώνυμό σας",
      phoneLabel: "Τηλέφωνο",
      phonePlaceholder: "+__ ___ ___ __ __",
      languageLabel: "Προτιμώμενη γλώσσα",
      treatmentLabel: "Θεραπεία ενδιαφέροντος",
      noteLabel: "Σημείωση",
      notePlaceholder: "Πείτε μας σύντομα πώς μπορούμε να βοηθήσουμε",
      consentLabel: "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για την απάντηση στο αίτημα ραντεβού.",
      submit: "Προετοιμασία στο WhatsApp",
      nameError: "Συμπληρώστε το ονοματεπώνυμό σας.",
      phoneError: "Συμπληρώστε έγκυρο αριθμό τηλεφώνου.",
      consentError: "Αποδεχτείτε την ενημέρωση για να συνεχίσετε.",
      successMessage: "Το αίτημά σας είναι έτοιμο για αποστολή στο WhatsApp.",
    },
  },
  otherBranch: {
    eyebrow: "Το άλλο ιατρείο μας",
    mapsCta: "Προβολή στο Google Maps",
    websiteCta: "Επίσκεψη στην ιστοσελίδα",
  },
  footer: {
    tagline: "Οδοντιατρική φροντίδα στην Αδριανούπολη με σαφή επικοινωνία και εξατομικευμένο σχεδιασμό.",
    medicalDisclaimer: "Οι πληροφορίες της ιστοσελίδας είναι γενικές και δεν αντικαθιστούν εξέταση, διάγνωση ή σχέδιο θεραπείας από οδοντίατρο.",
    privacy: "Απόρρητο και Προστασία Προσωπικών Δεδομένων",
    rights: "Με επιφύλαξη παντός δικαιώματος.",
  },
  whatsapp: {
    defaultMessage: "Γεια σας NOVADENT, θα ήθελα πληροφορίες για τα ραντεβού και τη διαδικασία εξέτασης.",
    appointmentMessage: "Γεια σας NOVADENT, θα ήθελα να ζητήσω διαθέσιμο ραντεβού για εξέταση.",
    treatmentMessageTemplate: "Γεια σας NOVADENT, θα ήθελα πληροφορίες για: {treatment}.",
    formIntro: "Γεια σας NOVADENT, υποβάλλω αίτημα ραντεβού μέσω της ιστοσελίδας.",
    nameField: "Ονοματεπώνυμο",
    phoneField: "Τηλέφωνο",
    languageField: "Προτιμώμενη γλώσσα",
    treatmentField: "Θεραπεία ενδιαφέροντος",
    noteField: "Σημείωση",
  },
};

const bg: Copy = {
  metadata: {
    title: "NOVADENT Одрин | Дентална клиника",
    description:
      "Дентални прегледи, индивидуално планиране и съдействие за записване на четири езика в центъра на Одрин.",
    ogAlt: "Клиника NOVADENT в Одрин с логото NOVA DENT",
  },
  a11y: {
    skipToContent: "Към съдържанието",
    primaryNavigation: "Основна навигация",
    openMenu: "Отваряне на менюто",
    closeMenu: "Затваряне на менюто",
    languageMenu: "Езикови опции",
    selectLanguage: "Избор на език",
    logoAlt: "Дентална клиника NOVADENT",
    externalLink: "Отваря се в нов раздел",
    socialLinks: "Връзки към социални мрежи",
    mobileActions: "Бързи действия за мобилни устройства",
    gallery: "Фотогалерия на клиниката",
    previousImage: "Предишна снимка",
    nextImage: "Следваща снимка",
    closeGallery: "Затваряне на галерията",
    imageCountTemplate: "Снимка {current} от {total}",
    starRatingTemplate: "{score} звезди от 5",
    mapTitle: "Местоположение на NOVADENT в Одрин",
  },
  nav: {
    treatments: "Лечения",
    clinic: "Клиника",
    international: "Чуждестранни пациенти",
    reviews: "Отзиви",
    instagram: "Instagram",
    faq: "Въпроси",
    contact: "Контакти",
    appointment: "Запишете Час",
  },
  hero: {
    eyebrow: "Центърът на Одрин · Дентална грижа",
    title: "Яснота в денталната грижа,",
    accent: "внимание на всяка стъпка.",
    body: "Внимателна оценка, ясна информация и клиничен процес, планиран според индивидуалните ви нужди.",
    ratingLabel: "5,0 в Google · 141 отзива",
    appointmentCta: "Заявете Час",
    callCta: "Обадете се",
    directionsCta: "Упътване",
    trustLine: "Диагнозата и планът за лечение изискват преглед от лекар по дентална медицина.",
    imageAlt: "Бяло лого NOVA DENT пред клиниката NOVADENT",
  },
  treatments: {
    eyebrow: "Лечения",
    title: "Дентална грижа, планирана според нуждите ви",
    body: "Всяка възможност се обсъжда заедно с резултатите от прегледа и индивидуалните ви потребности.",
    disclaimer: "Подходящият метод, срокът и етапите се потвърждават само след преглед.",
    itemCta: "Попитайте за това лечение",
    items: {
      "implant-tedavisi": {
        title: "Дентални Импланти",
        summary: "Възможности за импланти при липсващи зъби, планирани след преглед и подходяща образна диагностика.",
      },
      "gulus-tasarimi": {
        title: "Дизайн на Усмивката",
        summary: "Индивидуално естетично планиране, което отчита връзката между лицето, зъбите и венците.",
      },
      "estetik-dis-hekimligi": {
        title: "Естетична и Възстановителна Дентална Медицина",
        summary: "Пломби, коронки и възстановявания с оглед на зъбните тъкани, функцията и външния вид.",
      },
      "dis-beyazlatma": {
        title: "Избелване на Зъби",
        summary: "Избелване под лекарски контрол след оценка на състоянието на зъбите и венците.",
      },
      "kanal-tedavisi": {
        title: "Кореново Лечение",
        summary: "Ендодонтска грижа, планирана с преглед и образна диагностика при засягане на вътрешните тъкани.",
      },
      "dis-eti-tedavileri": {
        title: "Грижа за Венците",
        summary: "Пародонтална оценка и грижа за поддържане на здравето на венците.",
      },
      "cocuk-dis-hekimligi": {
        title: "Детска Дентална Медицина",
        summary: "Преглед, профилактика и лечение, съобразени с възрастта и развитието на детето.",
      },
      "genel-dis-sagligi": {
        title: "Обща и Профилактична Дентална Медицина",
        summary: "Редовни прегледи, професионално почистване и индивидуални насоки за устна хигиена.",
      },
    },
  },
  clinic: {
    eyebrow: "Клиника и Технологии",
    title: "Спокойна, светла и добре организирана клиника",
    body: "Разгледайте кабинетите за преглед, образна диагностика и лечение преди посещението си.",
    features: [
      {
        title: "Дигитална образна диагностика",
        body: "Възможности за образна диагностика в подкрепа на данните от прегледа.",
      },
      {
        title: "Отделни кабинети",
        body: "Помещения, организирани с внимание към личното пространство и реда.",
      },
      {
        title: "Ясна информация",
        body: "Разбираема комуникация за предложените процедури и следващите стъпки.",
      },
    ],
    galleryLabel: "Галерия на клиника NOVADENT",
    items: {
      "treatment-room": {
        title: "Кабинет за Лечение",
        alt: "Дентален стол и оборудване до прозорец в клиника NOVADENT",
      },
      "brand-wall": {
        title: "Отличителният Знак на NOVADENT",
        alt: "Тъмносиньо и тюркоазено лого NOVA DENT върху стена в клиниката",
      },
      "panoramic-imaging": {
        title: "Панорамна Диагностика",
        alt: "Апарат за панорамна дентална образна диагностика в NOVADENT",
      },
      "clinic-room-wide": {
        title: "Светъл Кабинет",
        alt: "Общ изглед на кабинет в NOVADENT с големи прозорци",
      },
      "treatment-suite": {
        title: "Зона за Лечение",
        alt: "Дентален стол, шкафове и работна зона в клиника NOVADENT",
      },
      "waiting-lounge": {
        title: "Чакалня",
        alt: "Чакалня на NOVADENT с тъмносиня стена и жълти и сиви седалки",
      },
      "dental-unit": {
        title: "Дентална Юнит Система",
        alt: "Дентална юнит система с екран и пациентски стол в тъмносин кабинет",
      },
    },
  },
  international: {
    eyebrow: "Чуждестранни Пациенти",
    title: "Планирайте посещението си в Одрин на своя език",
    body: "Информация за пътуване и записване на едно място за посетители от Турция, Гърция, България и други държави.",
    languageSupport: "Сайтът и заявката за час са достъпни на турски, английски, гръцки и български.",
    planningNote: "Информацията от разстояние е предварителна. Окончателният план и цената се определят след преглед.",
    whatsappCta: "Пишете в WhatsApp",
    directionsCta: "Упътване до Клиниката",
  },
  reviews: {
    eyebrow: "Отзиви в Google",
    title: "С думите на нашите посетители",
    body: "Кратките цитати са подбрани от публични отзиви в Google, без да се променя смисълът им.",
    ratingTemplate: "{score} от 5",
    countTemplate: "{count} отзива в Google",
    originalLabel: "Отзив в Google",
    translatedLabel: "Отзив в Google · превод",
    ctaTemplate: "Вижте останалите {count} отзива в Google",
    sourceLabel: "Вижте в Google",
    verificationLabel: "Отзивите в Google са проверени.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Нови моменти от клиниката",
    body: "Последвайте профила ни за снимки от клиниката, информационни публикации и съобщения.",
    handle: "@novadentclinicsedirne",
    followCta: "Последвайте в Instagram",
    profileLabel: "Instagram профил на NOVADENT",
    gridLabel: "Instagram снимки на NOVADENT",
    viewPostLabel: "Вижте в Instagram",
  },
  faq: {
    eyebrow: "Често Задавани Въпроси",
    title: "Кратки отговори преди посещението",
    body: "Основна информация за записването, прегледа и пътя до клиниката.",
    items: [
      {
        question: "Необходимо ли е да запиша час за преглед?",
        answer: "Препоръчваме да запишете час, за да намалите чакането. Попитайте за свободни часове по телефона или в WhatsApp.",
      },
      {
        question: "Какво да нося при първото си посещение?",
        answer: "Ако разполагате с тях, носете предишни дентални снимки, списък с лекарствата си и здравна информация, която лекарят трябва да знае.",
      },
      {
        question: "Мога ли да получа план за лечение, като изпратя снимка?",
        answer: "Снимките могат да помогнат само за предварителна информация. Диагнозата, окончателният план и цената изискват преглед и при нужда образна диагностика.",
      },
      {
        question: "На кои езици мога да изпратя заявка за час?",
        answer: "Можете да подадете заявка чрез сайта на турски, английски, гръцки или български.",
      },
      {
        question: "Какво е работното време?",
        answer: "Работим понеделник–петък 09:00–18:30 и събота 09:00–17:00. В неделя клиниката е затворена.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакти",
    title: "Часове и местоположение",
    body: "Споделете въпроса си, попитайте за свободен час или получете упътване директно до клиниката.",
    addressLabel: "Адрес",
    address: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1, Вътрешна врата No:10, Център Одрин",
    phoneLabel: "Телефон",
    hoursLabel: "Работно време",
    hours: "Понеделник–петък 09:00–18:30 · Събота 09:00–17:00",
    sundayClosed: "Затворено в неделя",
    callCta: "Обадете се на +90 501 130 15 22",
    whatsappCta: "Заявете Час",
    directionsCta: "Упътване",
    instagramCta: "Отворете Instagram",
    mapCta: "Вижте в Google Maps",
    form: {
      title: "Заявка за час",
      nameLabel: "Име и фамилия",
      namePlaceholder: "Вашите име и фамилия",
      phoneLabel: "Телефон",
      phonePlaceholder: "+__ ___ ___ __ __",
      languageLabel: "Предпочитан език",
      treatmentLabel: "Лечение, което ви интересува",
      noteLabel: "Бележка",
      notePlaceholder: "Напишете накратко как можем да помогнем",
      consentLabel: "Съгласен/съгласна съм данните ми да бъдат използвани за отговор на заявката ми.",
      submit: "Подгответе Заявката в WhatsApp",
      nameError: "Моля, въведете име и фамилия.",
      phoneError: "Моля, въведете валиден телефонен номер.",
      consentError: "Приемете уведомлението, за да продължите.",
      successMessage: "Заявката ви е готова за изпращане в WhatsApp.",
    },
  },
  otherBranch: {
    eyebrow: "Другият ни кабинет",
    mapsCta: "Вижте в Google Maps",
    websiteCta: "Посетете уебсайта",
  },
  footer: {
    tagline: "Дентална грижа в Одрин с ясна комуникация и индивидуално планиране.",
    medicalDisclaimer: "Информацията в сайта е обща и не замества преглед, диагноза или лечебен план от лекар по дентална медицина.",
    privacy: "Поверителност и Защита на Личните Данни",
    rights: "Всички права запазени.",
  },
  whatsapp: {
    defaultMessage: "Здравейте, NOVADENT. Бих искал/а информация за записването и прегледа.",
    appointmentMessage: "Здравейте, NOVADENT. Бих искал/а да заявя свободен час за преглед.",
    treatmentMessageTemplate: "Здравейте, NOVADENT. Бих искал/а информация за {treatment}.",
    formIntro: "Здравейте, NOVADENT. Изпращам заявка за час чрез уебсайта.",
    nameField: "Име и фамилия",
    phoneField: "Телефон",
    languageField: "Предпочитан език",
    treatmentField: "Лечение, което ме интересува",
    noteField: "Бележка",
  },
};

export const content = { tr, en, el, bg } satisfies Record<Language, Copy>;

export function getCopy(language: Language): Copy {
  return content[language];
}
