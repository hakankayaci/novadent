import type { GalleryId, TreatmentId } from "@/types/site";

export type Language = "tr" | "el" | "bg";

export const LANGUAGES: Language[] = ["tr", "el", "bg"];

export function isLanguage(candidate: string | null): candidate is Language {
  return candidate === "tr" || candidate === "el" || candidate === "bg";
}

export interface LanguageOption {
  code: Language;
  nativeName: string;
  htmlLang: string;
  ogLocale: string;
}

export const languages: LanguageOption[] = [
  { code: "tr", nativeName: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR" },
  { code: "el", nativeName: "Ελληνικά", htmlLang: "el", ogLocale: "el_GR" },
  { code: "bg", nativeName: "Български", htmlLang: "bg", ogLocale: "bg_BG" },
];

export interface Copy {
  whatsAppDefaultMessage: string;

  meta: { title: string; description: string; ogAlt: string };

  a11y: {
    skipLink: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    langPicker: string;
    langHeading: string;
    topbar: string;
    mobileBar: string;
    mapTitle: string;
    logoAlt: string;
    newTab: string;
  };

  topbar: { badge: string; info: string };

  nav: {
    home: string;
    treatments: string;
    whyUs: string;
    international: string;
    gallery: string;
    reviews: string;
    steps: string;
    faq: string;
    contact: string;
    directions: string;
    bookAppointment: string;
  };

  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    desc: string;
    ctaAppointment: string;
    ctaCall: string;
    ctaDirections: string;
    socialProof: string;
    trustLine: string;
    visualAlt: string;
  };

  quickActions: {
    callTitle: string;
    callDesc: string;
    whatsAppTitle: string;
    whatsAppDesc: string;
    directionsTitle: string;
    directionsDesc: string;
    hoursTitle: string;
    hoursDesc: string;
  };

  treatments: {
    badge: string;
    title: string;
    desc: string;
    disclaimer: string;
    items: Record<TreatmentId, { title: string; short: string; full: string }>;
  };

  whyUs: {
    badge: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };

  international: {
    badge: string;
    title: string;
    desc: string;
    subtext: string;
    badge1: string;
    badge2: string;
    badge3: string;
    directionsCta: string;
    whatsAppCta: string;
  };

  gallery: {
    badge: string;
    title: string;
    desc: string;
    items: Record<GalleryId, { title: string; alt: string }>;
  };

  reviews: {
    badge: string;
    title: string;
    desc: string;
    ratingScore: string;
    ratingCount: string;
    ctaReview: string;
    googleDisclaimer: string;
  };

  steps: {
    badge: string;
    title: string;
    desc: string;
    disclaimer: string;
    items: { number: string; title: string; desc: string }[];
  };

  faq: {
    badge: string;
    title: string;
    desc: string;
    items: { q: string; a: string }[];
  };

  contact: {
    badge: string;
    title: string;
    desc: string;
    addressLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    langLabel: string;
    treatmentLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentLabel: string;
    submitButton: string;
    successMessage: string;
    hoursLabel: string;
    callCta: string;
    directionsCta: string;
    instagramCta: string;
    mapTitle: string;
    mapDesc: string;
    mapLoadCta: string;
    coordsLabel: string;
    openInMaps: string;
  };

  footer: {
    tagline: string;
    copyright: string;
    medicalDisclaimer: string;
    privacyPolicy: string;
  };

  mobile: { call: string; directions: string; whatsApp: string };

  hours: { weekdaysLabel: string; saturdayLabel: string; closed: string; shortLine: string };
}

const tr: Copy = {
  whatsAppDefaultMessage: "Merhaba Novadent Clinics, diş tedavisi hakkında bilgi almak ve randevu oluşturmak istiyorum.",
  meta: {
    title: "NOVADENT Ağız ve Diş Sağlığı Polikliniği Edirne | Diş Kliniği",
    description:
      "Edirne Merkez'de NOVADENT Ağız ve Diş Sağlığı Polikliniği. İmplant, estetik diş hekimliği, gülüş tasarımı, diş beyazlatma ve diş eti tedavileri. İletişim: 0501 130 15 22",
    ogAlt: "NOVADENT Ağız ve Diş Sağlığı Polikliniği Edirne",
  },
  a11y: {
    skipLink: "İçeriğe geç",
    mainNav: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    langPicker: "Dil seçimi",
    langHeading: "Dil Seçenekleri",
    topbar: "Üst bilgi çubuğu",
    mobileBar: "Mobil hızlı aksiyon barı",
    mapTitle: "NOVADENT Clinics Edirne Google Haritası",
    logoAlt: "NOVADENT Ağız ve Diş Sağlığı Polikliniği",
    newTab: "yeni sekmede açılır",
  },
  topbar: {
    badge: "Çalışma Saatleri",
    info: "Pazartesi – Cuma: 09:00 – 18:30 | Cumartesi: 09:00 – 17:00",
  },
  nav: {
    home: "Ana Sayfa",
    treatments: "Tedaviler",
    whyUs: "Neden Novadent?",
    international: "Uluslararası Misafirler",
    gallery: "Klinik Galeri",
    reviews: "Değerlendirmeler",
    steps: "Randevu Süreci",
    faq: "SSS",
    contact: "İletişim",
    directions: "Yol Tarifi Al",
    bookAppointment: "Randevu Al",
  },
  hero: {
    badge: "Edirne Merkez Diş Kliniği",
    titleLead: "Sağlıklı ve Özgüvenli Bir Gülüş İçin",
    titleAccent: "Modern Diş Hekimliği",
    desc: "Edirne’de ağız ve diş sağlığınız için modern yaklaşımlar, kişiye özel değerlendirme ve güven veren bir klinik deneyimi sunuyoruz.",
    ctaAppointment: "Randevu Oluştur",
    ctaCall: "Kliniği Ara",
    ctaDirections: "Yol Tarifi Al",
    socialProof: "5,0 ★ · 140 değerlendirme",
    trustLine: "Edirne Merkez’de kolay ulaşılabilir konum",
    visualAlt: "NOVADENT Ağız ve Diş Sağlığı Polikliniği Tedavi Odası",
  },
  quickActions: {
    callTitle: "Hemen Arayın",
    callDesc: "0501 130 15 22",
    whatsAppTitle: "WhatsApp Danışma",
    whatsAppDesc: "Mesaj ile bilgi ve randevu alın",
    directionsTitle: "Yol Tarifi Alın",
    directionsDesc: "Fatih Mah. Tahsin Şipka Cad. Edirne",
    hoursTitle: "Çalışma Saatleri",
    hoursDesc: "Hafta içi 09:00-18:30 / Cmt 09:00-17:00",
  },
  treatments: {
    badge: "Kapsamlı Ağız ve Diş Sağlığı Hizmetleri",
    title: "Diş Sağlığınız İçin Modern Çözümler",
    desc: "Polikliniğimizde sunulan başlıca ağız ve diş sağlığı değerlendirme ve tedavi alanları.",
    disclaimer: "Uygulanacak tedavi, hekim muayenesi ve kişisel ihtiyaçlar doğrultusunda belirlenir.",
    items: {
      "implant-tedavisi": {
        title: "İmplant Tedavisi",
        short: "Eksik dişlerin yerine doğal diş işlevini ve estetiğini kazandıran modern implant uygulamaları.",
        full: "Eksik dişlerin yerine çene kemiğine yerleştirilen titanyum implantlar ile doğal görünüm ve çiğneme fonksiyonu kazandırılır.",
      },
      "gulus-tasarimi": {
        title: "Gülüş Tasarımı",
        short: "Yüz tipinize ve estetik beklentilerinize özel planlanan dijital gülüş tasarımı uygulamaları.",
        full: "Dudak yapısı, yüz hatları ve estetik beklentileriniz dikkate alınarak kişiye özel estetik gülüş planlaması yapılır.",
      },
      "estetik-dis-hekimligi": {
        title: "Estetik Diş Hekimliği",
        short: "Lamine, zirkonyum ve porselen kaplamalar ile estetik ve doğal diş görünümü.",
        full: "Diş formunu, rengini ve dizilimini iyileştiren zirkonyum ve porselen kaplama estetik çözümleri.",
      },
      "dis-beyazlatma": {
        title: "Diş Beyazlatma",
        short: "Klinik ortamında güvenli ve etkili yöntemlerle diş renginin ton olarak açılması.",
        full: "Hekim kontrolünde uygulanan profesyonel diş beyazlatma (bleaching) işlemleri.",
      },
      "kanal-tedavisi": {
        title: "Kanal Tedavisi (Endodonti)",
        short: "Hasar görmüş veya enfekte olmuş dişlerin çekilmeden korunmasını sağlayan tedaviler.",
        full: "Diş pulpasındaki iltihabın temizlenerek dişin ağızda sağlıklı bir şekilde tutulmasını sağlayan endodontik tedavi.",
      },
      "dis-eti-tedavileri": {
        title: "Diş Eti Tedavileri (Periodontoloji)",
        short: "Diş eti kanaması, iltihabı ve periodontal hastalıkların teşhis ve tedavisi.",
        full: "Diş eti sağlığını korumaya ve periodontitis gelişimini önlemeye yönelik profesyonel diş eti bakımı ve tedavisi.",
      },
      "cocuk-dis-hekimligi": {
        title: "Çocuk Diş Hekimliği (Pedodonti)",
        short: "Çocuklara özel koruyucu diş hekimliği ve süt dişi tedavileri.",
        full: "Çocuklarda ağız ve diş gelişiminin takibi, koruyucu florür ve koruyucu dolgu uygulamaları.",
      },
      "genel-dis-sagligi": {
        title: "Genel Ağız ve Diş Sağlığı",
        short: "Rutin diş muayenesi, diş taşı temizliği ve koruyucu diş hekimliği uygulamaları.",
        full: "Ağız ve diş sağlığının korunması için periyodik kontrol, tartar temizliği ve ağız bakımı danışmanlığı.",
      },
    },
  },
  whyUs: {
    badge: "Klinik Deneyimi",
    title: "Neden Novadent Clinics?",
    desc: "Edirne'de hasta memnuniyeti ve yüksek hijyen standartlarını odak noktası yapan modern klinik anlayışı.",
    items: [
      {
        title: "Kişiye Özel Tedavi Planlaması",
        desc: "Her hastamızın ağız ve diş yapısı detaylı incelenerek özel tedavi süreci planlanır.",
      },
      {
        title: "Modern Klinik Yaklaşımı",
        desc: "Güncel dijital diş hekimliği ekipmanları ve hijyenik clinic standartları.",
      },
      {
        title: "Şeffaf Bilgilendirme",
        desc: "Tedavi adımları, süreç ve bakım önerileri hakkında detaylı ve anlaşılır bilgilendirme.",
      },
      {
        title: "Merkezi Konum ve Kolay İletişim",
        desc: "Edirne Merkez Fatih Mahallesi’nde kolay ulaşım ve Türkçe, Yunanca, Bulgarca iletişim desteği.",
      },
    ],
  },
  international: {
    badge: "Uluslararası İletişim",
    title: "Yunanistan ve Bulgaristan’dan Gelen Misafirlerimiz İçin Kolay İletişim",
    desc: "Edirne’de bulunan kliniğimize ulaşmadan önce tercih ettiğiniz dilde randevu talebi oluşturabilir, konum ve çalışma saatleri bilgilerine kolayca erişebilirsiniz.",
    subtext: "Yunanistan ve Bulgaristan'dan gelen hastalarımız için Türkçe, Yunanca (Ελληνικά) ve Bulgarca (Български) dil desteği sunulmaktadır.",
    badge1: "Türkçe (TR)",
    badge2: "Ελληνικά (EL)",
    badge3: "Български (BG)",
    directionsCta: "Yol Tarifi Alın",
    whatsAppCta: "WhatsApp ile İletişime Geçin",
  },
  gallery: {
    badge: "Klinik Görselleri",
    title: "Novadent Klinik Ortamı",
    desc: "Modern, ferah ve hijyenik klinik alanlarımızdan görüntüler.",
    items: {
      "novadent-reception": {
        title: "Resepsiyon ve Bekleme Alanı",
        alt: "Novadent Clinics Edirne Resepsiyon ve Hasta Bekleme Salonu",
      },
      "novadent-treatment-room": {
        title: "Modern Tedavi Odası",
        alt: "Novadent Clinics Hijyenik Diş Tedavi Odası ve Üniti",
      },
      "novadent-clinic-interior": {
        title: "Klinik İç Mekan",
        alt: "Novadent Ağız ve Diş Sağlığı Polikliniği Genel İç Görünüm",
      },
      "novadent-dental-equipment": {
        title: "Dijital Diş Hekimliği Ekipmanları",
        alt: "Novadent Clinics İleri Teknoloji Diş Hekimliği Ekipman Suite",
      },
    },
  },
  reviews: {
    badge: "Hasta Deneyimleri",
    title: "Google Üzerinde 5.0 Yıldız İle Doğrulanmış Memnuniyet",
    desc: "Hasta odaklı hizmet anlayışımız ve klinik hijyenimiz ile Edirne'de güven veren sağlık hizmeti.",
    ratingScore: "5.0",
    ratingCount: "140 değerlendirme",
    ctaReview: "Yorumları İncele",
    googleDisclaimer: "Değerlendirmeler Google Maps üzerinde hastalarımız tarafından gerçek deneyimlere dayalı olarak yapılmıştır.",
  },
  steps: {
    badge: "Randevu Süreci",
    title: "Randevu Süreciniz Nasıl İşler?",
    desc: "Kliniğimizden randevu almak ve bilgi edinmek için 3 basit adım.",
    disclaimer: "Teşhis ve tedavi planlaması klinik muayenesi gerektirir.",
    items: [
      {
        number: "01",
        title: "İletişime Geçin",
        desc: "Telefon veya WhatsApp hattımız üzerinden kliniğimize ulaşın.",
      },
      {
        number: "02",
        title: "Ön Bilgilendirme Alın",
        desc: "Şikayetinizi ve talebinizi paylaşarak çalışma saatleri ve muayene süreci hakkında bilgi alın.",
      },
      {
        number: "03",
        title: "Randevunuzu Planlayın",
        desc: "Size en uygun gün ve saat için hekim muayene randevunuzu oluşturun.",
      },
    ],
  },
  faq: {
    badge: "Sıkça Sorulan Sorular",
    title: "Merak Edilen Konular",
    desc: "Ağız ve diş sağlığı tedavileri ve klinik süreçleri hakkında sıkça sorulan sorular.",
    items: [
      {
        q: "Muayene için randevu almak zorunlu mu?",
        a: "Hastalarımıza daha kaliteli ve beklemesiz hizmet verebilmek adına randevu alarak gelmelerini tavsiye ediyoruz. WhatsApp veya telefon hattımız üzerinden kolayca randevu oluşturabilirsiniz.",
      },
      {
        q: "İmplant tedavisi ne kadar sürer?",
        a: "İmplant yerleştirme işlemi tek seans sürebilir. Ancak implantın kemikle kaynaması (osteointegrasyon) için 2 ila 4 ay beklenir. Detaylı süre hekim muayenesi sonrasında netleşir.",
      },
      {
        q: "Diş beyazlatma işlemi dişlere zarar verir mi?",
        a: "Hekim kontrolünde ve profesyonel ürünlerle yapılan diş beyazlatma uygulamaları diş minenize zarar vermez.",
      },
      {
        q: "Yunanistan ve Bulgaristan'dan gelen hastalar için iletişim desteği var mı?",
        a: "Evet, web sitemiz ve iletişim kanallarımız Türkçe, Yunanca ve Bulgarca dillerinde bilgilendirme ve randevu imkanı sunmaktadır.",
      },
      {
        q: "Diş eti kanaması neden olur?",
        a: "Diş eti kanaması çoğunlukla plak birikimi ve diş eti iltihabının (gingivitis) belirtisidir. Profesyonel diş taşı temizliği ve muayene ile tedavisi mümkündür.",
      },
      {
        q: "Klinik çalışma saatleriniz nedir?",
        a: "Polikliniğimiz Hafta içi 09:00 – 18:30, Cumartesi günleri 09:00 – 17:00 saatleri arasında hizmet vermektedir. Pazar günleri kapalıdır.",
      },
    ],
  },
  contact: {
    badge: "İletişim & Konum",
    title: "Bize Ulaşın",
    desc: "Edirne Merkez'de bulunan polikliniğimize telefon, WhatsApp veya harita üzerinden kolayca ulaşabilirsiniz.",
    addressLabel: "Adres",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Örn. Ahmet Yılmaz",
    phoneLabel: "Telefon Numarası",
    phonePlaceholder: "Örn. 05XX XXX XX XX",
    langLabel: "Tercih Edilen Dil",
    treatmentLabel: "İlgilenilen Tedavi",
    messageLabel: "Notunuz / Mesajınız",
    messagePlaceholder: "Randevu talebiniz veya sormak istediğiniz konu...",
    consentLabel: "Kişisel verilerimin randevu ve bilgilendirme amacıyla işlenmesini onaylıyorum.",
    submitButton: "WhatsApp ile Randevu Talebi Gönder",
    successMessage: "Talebiniz WhatsApp üzerinden iletilmek üzere hazırlandı.",
    hoursLabel: "Çalışma Saatleri",
    callCta: "Kliniği Ara",
    directionsCta: "Yol Tarifi Al",
    instagramCta: "Instagram'da Takip Et",
    mapTitle: "Edirne Merkez Konumu",
    mapDesc: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1 Edirne",
    mapLoadCta: "Haritayı Yükle",
    coordsLabel: "Koordinatlar",
    openInMaps: "Google Maps'te Aç",
  },
  footer: {
    tagline: "Edirne'de sağlıklı ve estetik gülüşler için modern ağız ve diş sağlığı polikliniği.",
    copyright: "Tüm hakları saklıdır.",
    medicalDisclaimer: "Bu web sitesinde yer alan bilgiler bilgilendirme amaçlıdır. Hekim muayenesi ve teşhisi yerine geçmez.",
    privacyPolicy: "Gizlilik ve Kişisel Verilerin Korunması Politikası",
  },
  mobile: {
    call: "Ara",
    directions: "Yol Tarifi",
    whatsApp: "WhatsApp",
  },
  hours: {
    weekdaysLabel: "Pazartesi – Cuma",
    saturdayLabel: "Cumartesi",
    closed: "Kapalı",
    shortLine: "Pzt–Cuma {weekdays} · Cmt {saturday} · Pazar {closed}",
  },
};

const el: Copy = {
  whatsAppDefaultMessage: "Γεια σας Novadent Clinics, θα ήθελα να ενημερωθώ για οδοντιατρικές θεραπείες και να κλείσω ραντεβού.",
  meta: {
    title: "NOVADENT Οδοντιατρική Κλινική Αδριανούπολη (Edirne) | Diş Kliniği",
    description:
      "Οδοντιατρική κλινική NOVADENT στην Αδριανούπολη (Edirne). Εμφυτεύματα, αισθητική οδοντιατρική, λεύκανση δοντιών και θεραπείες ούλων. Τηλέφωνο: +90 501 130 15 22",
    ogAlt: "NOVADENT Οδοντιατρική Κλινική Edirne",
  },
  a11y: {
    skipLink: "Μετάβαση στο περιεχόμενο",
    mainNav: "Κύριο μενού",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    langPicker: "Επιλογή γλώσσας",
    langHeading: "Γλώσσες",
    topbar: "Πληροφορίες επικοινωνίας",
    mobileBar: "Γρήγορες ενέργειες",
    mapTitle: "Χάρτης Google για NOVADENT Clinics",
    logoAlt: "NOVADENT Οδοντιατρική Κλινική",
    newTab: "ανοίγει σε νέα καρτέλα",
  },
  topbar: {
    badge: "Ώρες Λειτουργίας",
    info: "Δευτέρα – Παρασκευή: 09:00 – 18:30 | Σάββατο: 09:00 – 17:00",
  },
  nav: {
    home: "Αρχική",
    treatments: "Θεραπείες",
    whyUs: "Γιατί Novadent;",
    international: "Διεθνείς Επισκέπτες",
    gallery: "Γκαλερί",
    reviews: "Αξιολογήσεις",
    steps: "Διαδικασία Ραντεβού",
    faq: "Συχνές Ερωτήσεις",
    contact: "Επικοινωνία",
    directions: "Οδηγίες Χάρτη",
    bookAppointment: "Κλείστε Ραντεβού",
  },
  hero: {
    badge: "Οδοντιατρική Κλινική Αδριανούπολη",
    titleLead: "Για ένα Υγιές και Λαμπερό Χαμόγελο",
    titleAccent: "Σύγχρονη Οδοντιατρική",
    desc: "Προσφέρουμε σύγχρονες οδοντιατρικές θεραπείες, εξατομικευμένη φροντίδα και υψηλής ποιότητας υπηρεσίες στην Αδριανούπολη (Edirne).",
    ctaAppointment: "Κλείστε Ραντεβού",
    ctaCall: "Καλέστε την Κλινική",
    ctaDirections: "Οδηγίες Χάρτη",
    socialProof: "5,0 ★ · 140 αξιολογήσεις",
    trustLine: "Εύκολη πρόσβαση στο κέντρο της Αδριανούπολης",
    visualAlt: "NOVADENT Οδοντιατρική Κλινική Χώρος Θεραπείας",
  },
  quickActions: {
    callTitle: "Καλέστε Απευθείας",
    callDesc: "+90 501 130 15 22",
    whatsAppTitle: "WhatsApp Επικοινωνία",
    whatsAppDesc: "Πληροφορίες & ραντεβού μέσω μηνύματος",
    directionsTitle: "Οδηγίες Πρόσβασης",
    directionsDesc: "Fatih Mah. Tahsin Şipka Cad. Edirne",
    hoursTitle: "Ώρες Λειτουργίας",
    hoursDesc: "Δευτ-Παρ 09:00-18:30 / Σάβ 09:00-17:00",
  },
  treatments: {
    badge: "Ολοκληρωμένες Οδοντιατρικές Υπηρεσίες",
    title: "Σύγχρονες Λύσεις για την Υγεία των Δοντιών σας",
    desc: "Οι κύριες οδοντιατρικές θεραπείες που παρέχονται στην κλινική μας.",
    disclaimer: "Η θεραπεία καθορίζεται μετά από κλινική εξέταση και αξιολόγηση από τον οδοντίατρο.",
    items: {
      "implant-tedavisi": {
        title: "Οδοντικά Εμφυτεύματα",
        short: "Σύγχρονα εμφυτεύματα για αποκατάσταση ελλειπόντων δοντιών με φυσικό αποτέλεσμα.",
        full: "Τοποθέτηση εμφυτευμάτων τιτανίου για πλήρη αποκατάσταση της μασήσεως και της αισθητικής.",
      },
      "gulus-tasarimi": {
        title: "Σχεδιασμός Χαμόγελου (Smile Design)",
        short: "Ψηφιακός σχεδιασμός χαμόγελου προσαρμοσμένος στα χαρακτηριστικά του προσώπου σας.",
        full: "Εξατομικευμένη σχεδίαση για ένα αισθητικό και αρμονικό χαμόγελο.",
      },
      "estetik-dis-hekimligi": {
        title: "Αισθητική Οδοντιατρική",
        short: "Όψεις πορσελάνης, ζιρκόνιο και αισθητικές αποκαταστάσεις.",
        full: "Υψηλής ποιότητας όψεις ζιρκονίου και πορσελάνης για φυσική εμφάνιση δοντιών.",
      },
      "dis-beyazlatma": {
        title: "Λεύκανση Δοντιών",
        short: "Επαγγελματική και ασφαλής λεύκανση δοντιών στην κλινική.",
        full: "Ασφαλής βελτίωση του χρώματος των δοντιών υπό την επίβλεψη οδοντιάτρου.",
      },
      "kanal-tedavisi": {
        title: "Ενδοδοντική Θεραπεία (Απονεύρωση)",
        short: "Θεραπεία και διάσωση δοντιών με φλεγμονή ή ζημιά.",
        full: "Καθαρισμός και σφράγιση ριζικών σωλήνων για τη διατήρηση του φυσικού δοντιού.",
      },
      "dis-eti-tedavileri": {
        title: "Θεραπεία Ούλων (Περιοδοντολογία)",
        short: "Διάγνωση και θεραπεία ουλίτιδας και περιοδοντίτιδας.",
        full: "Επαγγελματικός καθαρισμός και θεραπεία για υγιή ούλα.",
      },
      "cocuk-dis-hekimligi": {
        title: "Παιδοδοντιατρική",
        short: "Προληπτική φροντίδα και θεραπείες για παιδιά.",
        full: "Εξειδικευμένη φροντίδα για την υγεία των παιδικών δοντιών.",
      },
      "genel-dis-sagligi": {
        title: "Γενική Οδοντιατρική Φροντίδα",
        short: "Τακτικός έλεγχος, καθαρισμός και προληπτική οδοντιατρική.",
        full: "Περιοδικοί έλεγχοι και αφαιρέσεις τρυγίας για διατήρηση της στοματικής υγείας.",
      },
    },
  },
  whyUs: {
    badge: "Εμπειρία Κλινικής",
    title: "Γιατί να Επιλέξετε τη Novadent Clinics;",
    desc: "Σύγχρονη κλινική με έμφαση στην ικανοποίηση των ασθενών και τα υψηλά πρότυπα υγιεινής στην Αδριανούπολη.",
    items: [
      {
        title: "Εξατομικευμένο Σχέδιο Θεραπείας",
        desc: "Λεπτομερής εξέταση της στοματικής υγείας για κάθε ασθενή ξεχωριστά.",
      },
      {
        title: "Σύγχρονη Κλινική Υποδομή",
        desc: "Ψηφιακός εξοπλισμός οδοντιατρικής και αυστηρά πρότυπα αποστείρωσης.",
      },
      {
        title: "Διαφανής Ενημέρωση",
        desc: "Πλήρης ενημέρωση για τα στάδια της θεραπείας και τη φροντίδα.",
      },
      {
        title: "Κεντρική Τοποθεσία & Γλωσσική Υποστήριξη",
        desc: "Εύκολη πρόσβαση στην Αδριανούπολη και εξυπηρέτηση στα Ελληνικά.",
      },
    ],
  },
  international: {
    badge: "Διεθνής Επικοινωνία",
    title: "Εύκολη Επικοινωνία για Επισκέπτες από την Ελλάδα και τη Βουλγαρία",
    desc: "Μπορείτε να επικοινωνήσετε μαζί μας στη γλώσσα σας, να ζητήσετε πληροφορίες για ραντεβού και να βρείτε οδηγίες πρόσβασης.",
    subtext: "Παρέχουμε γλωσσική υποστήριξη στα Ελληνικά (Ελληνικά), Τουρκικά (Türkçe) και Βουλγαρικά (Български).",
    badge1: "Türkçe (TR)",
    badge2: "Ελληνικά (EL)",
    badge3: "Български (BG)",
    directionsCta: "Οδηγίες Πρόσβασης",
    whatsAppCta: "Επικοινωνία μέσω WhatsApp",
  },
  gallery: {
    badge: "Φωτογραφίες Κλινικής",
    title: "Οι Χώροι της Novadent Clinics",
    desc: "Εικόνες από τους σύγχρονους και υγιεινούς χώρους της κλινικής μας.",
    items: {
      "novadent-reception": {
        title: "Υποδοχή & Χώρος Αναμονής",
        alt: "Χώρος Υποδοχής Novadent Clinics Αδριανούπολη",
      },
      "novadent-treatment-room": {
        title: "Σύγχρονη Αίθουσα Θεραπείας",
        alt: "Αίθουσα Οδοντιατρικής Θεραπείας Novadent Clinics",
      },
      "novadent-clinic-interior": {
        title: "Εσωτερικό Κλινικής",
        alt: "Γενική Άποψη Κλινικής Novadent Clinics",
      },
      "novadent-dental-equipment": {
        title: "Ψηφιακός Οδοντιατρικός Εξοπλισμός",
        alt: "Εξοπλισμός Τελευταίας Τεχνολογίας Novadent Clinics",
      },
    },
  },
  reviews: {
    badge: "Εμπειρίες Ασθενών",
    title: "Επιβεβαιωμένη Ικανοποίηση με 5.0 Αστέρια στο Google",
    desc: "Αξιόπιστες υπηρεσίες οδοντιατρικής φροντίδας στην Αδριανούπολη με έμφαση στον ασθενή.",
    ratingScore: "5.0",
    ratingCount: "140 αξιολογήσεις",
    ctaReview: "Δείτε τις Αξιολογήσεις",
    googleDisclaimer: "Οι αξιολογήσεις προέρχονται από πραγματικές κριτικές ασθενών στο Google Maps.",
  },
  steps: {
    badge: "Διαδικασία Ραντεβού",
    title: "Πώς Λειτουργεί η Διαδικασία Ραντεβού;",
    desc: "3 απλά βήματα για να προγραμματίσετε την επίσκεψή σας.",
    disclaimer: "Η διάγνωση και το σχέδιο θεραπείας απαιτούν κλινική εξέταση.",
    items: [
      {
        number: "01",
        title: "Επικοινωνήστε Μαζί Μας",
        desc: "Επικοινωνήστε μέσω τηλεφώνου ή WhatsApp.",
      },
      {
        number: "02",
        title: "Λάβετε Αρχική Ενημέρωση",
        desc: "Μοιραστείτε τις ανάγκες σας και ενημερωθείτε για τις διαθέσιμες ώρες.",
      },
      {
        number: "03",
        title: "Προγραμματίστε το Ραντεβού",
        desc: "Επιλέξτε την ημερομηνία και ώρα που σας εξυπηρετεί.",
      },
    ],
  },
  faq: {
    badge: "Συχνές Ερωτήσεις",
    title: "Χρήσιμες Πληροφορίες",
    desc: "Απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τις οδοντιατρικές θεραπείες.",
    items: [
      {
        q: "Είναι απαραίτητο το ραντεβού για την εξέταση;",
        a: "Συνιστούμε να κλείνετε ραντεβού εκ των προτέρων για την καλύτερη εξυπηρέτησή σας χωρίς αναμονή. Μπορείτε εύκολα να κλείσετε ραντεβού μέσω WhatsApp.",
      },
      {
        q: "Πόσο διαρκεί η θεραπεία εμφυτευμάτων;",
        a: "Η τοποθέτηση του εμφυτεύματος μπορεί να γίνει σε μία συνεδρία. Η περίοδος ενσωμάτωσης στο οστό διαρκεί συνήθως 2 έως 4 μήνες.",
      },
      {
        q: "Η λεύκανση δοντιών προκαλεί φθορά στα δόντια;",
        a: "Η επαγγελματική λεύκανση που πραγματοποιείται από οδοντίατρο είναι ασφαλής και δεν βλάπτει την αδαμαντίνη.",
      },
      {
        q: "Υπάρχει υποστήριξη στα Ελληνικά για επισκέπτες από την Ελλάδα;",
        a: "Ναι, παρέχουμε πληροφορίες και υποστήριξη στα Ελληνικά μέσω της ιστοσελίδας μας και του WhatsApp.",
      },
      {
        q: "Ποιες είναι οι ώρες λειτουργίας της κλινικής;",
        a: "Η κλινική λειτουργεί Δευτέρα έως Παρασκευή 09:00 – 18:30 και Σάββατο 09:00 – 17:00. Τις Κυριακές είναι κλειστά.",
      },
    ],
  },
  contact: {
    badge: "Επικοινωνία & Τοποθεσία",
    title: "Επικοινωνήστε Μαζί Μας",
    desc: "Μπορείτε να επικοινωνήσετε τηλεφωνικά, μέσω WhatsApp ή να βρείτε οδηγίες χάρτη για την κλινική μας στην Αδριανούπολη.",
    addressLabel: "Διεύθυνση",
    nameLabel: "Ονοματεπώνυμο",
    namePlaceholder: "π.χ. Γιώργος Παπαδόπουλος",
    phoneLabel: "Αριθμός Τηλεφώνου",
    phonePlaceholder: "π.χ. +30 69X XXX XXXX",
    langLabel: "Προτιμώμενη Γλώσσα",
    treatmentLabel: "Θεραπεία που σας Ενδιαφέρει",
    messageLabel: "Μήνυμα / Σημείωση",
    messagePlaceholder: "Γράψτε το μήνυμά σας ή την ερώτησή σας...",
    consentLabel: "Συμφωνώ με την επεξεργασία των στοιχείων μου για τον προγραμματισμό ραντεβού.",
    submitButton: "Αποστολή Αιτήματος μέσω WhatsApp",
    successMessage: "Το αίτημά σας ετοιμάστηκε για αποστολή μέσω WhatsApp.",
    hoursLabel: "Ώρες Λειτουργίας",
    callCta: "Καλέστε την Κλινική",
    directionsCta: "Οδηγίες Χάρτη",
    instagramCta: "Ακολουθήστε στο Instagram",
    mapTitle: "Τοποθεσία στην Αδριανούπολη",
    mapDesc: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1 Edirne",
    mapLoadCta: "Φόρτωση Χάρτη",
    coordsLabel: "Συντεταγμένες",
    openInMaps: "Άνοιγμα στο Google Maps",
  },
  footer: {
    tagline: "Σύγχρονη οδοντιατρική κλινική στην Αδριανούπολη για ένα υγιές και όμορφο χαμόγελο.",
    copyright: "Με την επιφύλαξη παντός δικαιώματος.",
    medicalDisclaimer: "Οι πληροφορίες στον ιστότοπο είναι ενημερωτικού χαρακτήρα και δεν αντικαθιστούν την ιατρική εξέταση.",
    privacyPolicy: "Πολιτική Απορρήτου & Προστασίας Δεδομένων",
  },
  mobile: {
    call: "Κλήση",
    directions: "Οδηγίες",
    whatsApp: "WhatsApp",
  },
  hours: {
    weekdaysLabel: "Δευτέρα – Παρασκευή",
    saturdayLabel: "Σάββατο",
    closed: "Κλειστά",
    shortLine: "Δευτ-Παρ {weekdays} · Σάβ {saturday} · Κυριακή {closed}",
  },
};

const bg: Copy = {
  whatsAppDefaultMessage: "Здравейте Novadent Clinics, бих искал/а да получа информация за дентални лечения и да запиша час.",
  meta: {
    title: "NOVADENT Дентална Клиника Одрин (Edirne) | Diş Kliniği",
    description:
      "Дентална клиника NOVADENT в Одрин (Edirne). Импланти, естетична стоматология, избелване на зъби и лечение на венци. Телефон: +90 501 130 15 22",
    ogAlt: "NOVADENT Дентална Клиника Edirne",
  },
  a11y: {
    skipLink: "Преминаване към съдържанието",
    mainNav: "Главно меню",
    openMenu: "Отваряне на менюто",
    closeMenu: "Затваряне на менюто",
    langPicker: "Избор на език",
    langHeading: "Езикови опции",
    topbar: "Информация за контакт",
    mobileBar: "Бързи действия",
    mapTitle: "Google Карта за NOVADENT Clinics",
    logoAlt: "NOVADENT Дентална Клиника",
    newTab: "отваря се в нов раздел",
  },
  topbar: {
    badge: "Работно Време",
    info: "Понеделник – Петък: 09:00 – 18:30 | Събота: 09:00 – 17:00",
  },
  nav: {
    home: "Начало",
    treatments: "Лечения",
    whyUs: "Защо Novadent;",
    international: "Чуждестранни Гости",
    gallery: "Галерия",
    reviews: "Отзиви",
    steps: "Записване на Час",
    faq: "Често Задавани Въпроси",
    contact: "Контакт",
    directions: "Упътване",
    bookAppointment: "Запишете Час",
  },
  hero: {
    badge: "Дентална Клиника в Одрин",
    titleLead: "За Здрава и Уверена Усмивка",
    titleAccent: "Модерна Стоматология",
    desc: "Предлагаме съвременни дентални лечения, индивидуална грижа и висококачествено обслужване в Одрин (Edirne).",
    ctaAppointment: "Запишете Час",
    ctaCall: "Обадете се в Клиниката",
    ctaDirections: "Упътване",
    socialProof: "5,0 ★ · 140 отзива",
    trustLine: "Удобна локация в центъра на Одрин",
    visualAlt: "NOVADENT Дентална Клиника Лечебна Зала",
  },
  quickActions: {
    callTitle: "Обадете се Сега",
    callDesc: "+90 501 130 15 22",
    whatsAppTitle: "WhatsApp Контакт",
    whatsAppDesc: "Информация и записване чрез съобщение",
    directionsTitle: "Вземете Упътване",
    directionsDesc: "Fatih Mah. Tahsin Şipka Cad. Edirne",
    hoursTitle: "Работно Време",
    hoursDesc: "Пон-Пет 09:00-18:30 / Съб 09:00-17:00",
  },
  treatments: {
    badge: "Комплексни Дентални Услуги",
    title: "Модерни Решения за Здравето на Вашите Зъби",
    desc: "Основните дентални лечения, предлагани в нашата клиника.",
    disclaimer: "Лечението се определя след преглед и оценка от дентален лекар.",
    items: {
      "implant-tedavisi": {
        title: "Зъбни Импланти",
        short: "Модерни импланти за възстановяване на липсващи зъби с естествен вид.",
        full: "Поставяне на титанови импланти за пълно възстановяване на дъвкателната функция и естетиката.",
      },
      "gulus-tasarimi": {
        title: "Дизайн на Усмивката (Smile Design)",
        short: "Дигитален дизайн на усмивката, съобразен с чертите на вашето лице.",
        full: "Индивидуален план за естетична и хармонична усмивка.",
      },
      "estetik-dis-hekimligi": {
        title: "Естетична Стоматология",
        short: "Фасети, циркониеви и порцеланови корони за перфектни зъби.",
        full: "Висококачествени циркониеви и порцеланови конструкции за естествен вид.",
      },
      "dis-beyazlatma": {
        title: "Избелване на Зъби",
        short: "Професионално и безопасно избелване на зъби в клинични условия.",
        full: "Безопасно подобряване на цвета на зъбите под контрола на дентален лекар.",
      },
      "kanal-tedavisi": {
        title: "Канално Лечение (Ендодонтия)",
        short: "Спасяване и лечение на увредени или инфектирани зъби.",
        full: "Почистване и запечатване на кореновите канали за запазване на естествения зъб.",
      },
      "dis-eti-tedavileri": {
        title: "Лечение на Венци (Пародонтология)",
        short: "Диагностика и лечение на гингивит и пародонтит.",
        full: "Професионално почистване и грижа за здрави венци.",
      },
      "cocuk-dis-hekimligi": {
        title: "Детска Стоматология",
        short: "Профилактика и лечение на зъби при деца.",
        full: "Специализирана дентална грижа за децата.",
      },
      "genel-dis-sagligi": {
        title: "Обща Дентална Грижа",
        short: "Редовни прегледи, почистване на зъбен камък и профилактика.",
        full: "Периодични прегледи и премахване на зъбен камък за добро орално здраве.",
      },
    },
  },
  whyUs: {
    badge: "Опит и Качество",
    title: "Защо да Изберете Novadent Clinics?",
    desc: "Модерна клиника в Одрин с фокус върху удовлетвореността на пациентите и високите стандарти на хигиена.",
    items: [
      {
        title: "Индивидуален План за Лечение",
        desc: "Подробен преглед и планиране на лечението за всеки пациент.",
      },
      {
        title: "Модерно Оборудване",
        desc: "Дигитална дентална апаратура и стриктни стандарти за стерилизация.",
      },
      {
        title: "Прозрачна Информация",
        desc: "Ясна информация относно етапите на лечение и последващата грижа.",
      },
      {
        title: "Удобна Локация и Езикова Подкрепа",
        desc: "Лесен достъп в Одрин и обслужване на български език.",
      },
    ],
  },
  international: {
    badge: "Международен Контакт",
    title: "Лесна Комуникация за Гости от България и Гърция",
    desc: "Можете да се свържете с нас на вашия език, да поискате информация за час и да получите упътване до клиниката.",
    subtext: "Предлагаме обслужване на български (Български), гръцки (Ελληνικά) и турски (Türkçe) език.",
    badge1: "Türkçe (TR)",
    badge2: "Ελληνικά (EL)",
    badge3: "Български (BG)",
    directionsCta: "Вземете Упътване",
    whatsAppCta: "Свържете се чрез WhatsApp",
  },
  gallery: {
    badge: "Снимки на Клиниката",
    title: "Интериор на Novadent Clinics",
    desc: "Снимки от нашите модерни и хигиенични кабинети.",
    items: {
      "novadent-reception": {
        title: "Рецепция и Зала за Чакащи",
        alt: "Рецепция на Novadent Clinics в Одрин",
      },
      "novadent-treatment-room": {
        title: "Модерен Лечебен Кабинет",
        alt: "Стоматологичен Кабинет в Novadent Clinics",
      },
      "novadent-clinic-interior": {
        title: "Интериор на Клиниката",
        alt: "Общ Изглед на Клиника Novadent Clinics",
      },
      "novadent-dental-equipment": {
        title: "Дигитално Оборудване",
        alt: "Високотехнологично Дентално Оборудване",
      },
    },
  },
  reviews: {
    badge: "Отзиви от Пациенти",
    title: "Потвърдено Удовлетворение с 5.0 Звезди в Google",
    desc: "Надеждна дентална грижа в Одрин с висока оценка от пациентите.",
    ratingScore: "5.0",
    ratingCount: "140 отзива",
    ctaReview: "Вижте Отзивите",
    googleDisclaimer: "Отзивите са от реални пациенти в Google Maps.",
  },
  steps: {
    badge: "Записване на Час",
    title: "Как Протича Процесът на Записване?",
    desc: "3 лесни стъпки за планиране на вашия преглед.",
    disclaimer: "Диагностиката и планът за лечение изискват клиничен преглед.",
    items: [
      {
        number: "01",
        title: "Свържете се с Нас",
        desc: "Обадете се по телефона или пишете в WhatsApp.",
      },
      {
        number: "02",
        title: "Получете Първоначална Информация",
        desc: "Споделете вашите нужди и научете за свободните часове.",
      },
      {
        number: "03",
        title: "Запишете Час за Преглед",
        desc: "Изберете най-удобния за вас ден и час.",
      },
    ],
  },
  faq: {
    badge: "Често Задавани Въпроси",
    title: "Полезна Информация",
    desc: "Отговори на най-често задаваните въпроси за денталните лечения.",
    items: [
      {
        q: "Задължително ли е предварителното записване на час?",
        a: "Препоръчваме предварително записване на час за обслужване без чакане. Можете лесно да запазите час чрез WhatsApp.",
      },
      {
        q: "Колко време отнема поставянето на зъбен имплант?",
        a: "Поставянето на импланта може да се извърши в едно посещение. Периодът на остеоинтеграция обикновено отнема от 2 до 4 месеца.",
      },
      {
        q: "Вредели избелването на зъбите?",
        a: "Професионалното избелване, извършено от дентален лекар, е безопасно и не уврежда зъбния емайл.",
      },
      {
        q: "Има ли обслужване на български език?",
        a: "Да, предлагаме информация и обслужване на български език чрез нашия уебсайт и WhatsApp.",
      },
      {
        q: "Какво е работното време на клиниката?",
        a: "Клиниката работи от понеделник до петък 09:00 – 18:30 и събота 09:00 – 17:00. Неделя е почивен ден.",
      },
    ],
  },
  contact: {
    badge: "Контакт и Локация",
    title: "Свържете се с Нас",
    desc: "Можете да се свържете с нас по телефон, WhatsApp или да намерите упътване до клиниката в Одрин.",
    addressLabel: "Адрес",
    nameLabel: "Име и Фамилия",
    namePlaceholder: "напр. Иван Иванов",
    phoneLabel: "Телефонен Номер",
    phonePlaceholder: "напр. +359 8X XXX XXXX",
    langLabel: "Предпочитан Език",
    treatmentLabel: "Интересуващо ви Лечение",
    messageLabel: "Съобщение / Бележка",
    messagePlaceholder: "Напишете вашето съобщение или въпрос...",
    consentLabel: "Съгласен/а съм с обработката на данните ми за целите на записване на час.",
    submitButton: "Изпращане на Запитване чрез WhatsApp",
    successMessage: "Вашето запитване е подготвено за изпращане чрез WhatsApp.",
    hoursLabel: "Работно Време",
    callCta: "Обадете се в Клиниката",
    directionsCta: "Упътване",
    instagramCta: "Последвайте в Instagram",
    mapTitle: "Локация в Одрин",
    mapDesc: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1 Edirne",
    mapLoadCta: "Зареждане на Картата",
    coordsLabel: "Координати",
    openInMaps: "Отваряне в Google Maps",
  },
  footer: {
    tagline: "Модерна дентална клиника в Одрин за здрава и красива усмивка.",
    copyright: "Всички права запазени.",
    medicalDisclaimer: "Информацията на уебсайта е с информативна цел и не замества медицинския преглед.",
    privacyPolicy: "Политика за поверителност и защита на личните данни",
  },
  mobile: {
    call: "Обаждане",
    directions: "Упътване",
    whatsApp: "WhatsApp",
  },
  hours: {
    weekdaysLabel: "Понеделник – Петък",
    saturdayLabel: "Събота",
    closed: "Почивен ден",
    shortLine: "Пон-Пет {weekdays} · Съб {saturday} · Неделя {closed}",
  },
};

export const copy: Record<Language, Copy> = { tr, el, bg };
