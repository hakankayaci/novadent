import type { GalleryId, ServiceId } from "@/types/site";

export type Language = "tr" | "en" | "bg" | "el";

export const LANGUAGES: Language[] = ["tr", "en", "bg", "el"];

export interface LanguageOption {
  code: Language;
  /** Endonym, i.e. what speakers of that language call it. */
  nativeName: string;
  /** BCP-47 tag written to <html lang>. */
  htmlLang: string;
  /** OpenGraph locale. */
  ogLocale: string;
}

export const languages: LanguageOption[] = [
  { code: "tr", nativeName: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR" },
  { code: "en", nativeName: "English", htmlLang: "en", ogLocale: "en_GB" },
  { code: "bg", nativeName: "Български", htmlLang: "bg", ogLocale: "bg_BG" },
  { code: "el", nativeName: "Ελληνικά", htmlLang: "el", ogLocale: "el_GR" },
];

/**
 * The full copy contract. Every language must satisfy it, so TypeScript fails the build
 * rather than letting an untranslated string fall back to Turkish at runtime.
 */
export interface Copy {
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
    services: string;
    about: string;
    vet: string;
    clinic: string;
    emergency: string;
    reviews: string;
    faq: string;
    contact: string;
    directions: string;
  };

  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    desc: string;
    ctaCall: string;
    ctaDirections: string;
    ctaReviews: string;
    portraitAlt: string;
    cardRole: string;
    cardEmergencyLabel: string;
    cardEmergencyValue: string;
  };

  trust: { title: string; desc: string }[];

  services: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
    items: Record<ServiceId, { title: string; short: string; full: string }>;
    banner: { title: string; desc: string };
  };

  about: {
    badge: string;
    title: string;
    body: string[];
    highlights: string[];
    instaLabel: string;
    instaCta: string;
    photoAlt: string;
  };

  vet: {
    badge: string;
    role: string;
    summary: string;
    bullets: string[];
    ctaCall: string;
    photoAlt: string;
  };

  gallery: {
    badge: string;
    title: string;
    desc: string;
    items: Record<GalleryId, { title: string; alt: string }>;
  };

  emergency: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    desc: string;
    numberLabel: string;
    callCta: string;
    noticeLabel: string;
    notice: string;
    casesTitle: string;
    cases: string[];
  };

  reviews: {
    badge: string;
    title: string;
    desc: string;
    readCta: string;
    panelTitle: string;
    panelDesc: string;
    commitmentsLabel: string;
    commitments: { title: string; desc: string }[];
  };

  instagram: {
    badge: string;
    title: string;
    desc: string;
    bioVetLabel: string;
    bioHours: string;
    bioEmergency: string;
    followCta: string;
    linkCta: string;
    gridAlt: string;
    note: string;
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
    cardTitle: string;
    addressLabel: string;
    addressFull: string;
    phoneLabel: string;
    phoneNote: string;
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
    navHeading: string;
    hoursHeading: string;
    contactHeading: string;
    emergencyNote: string;
    directionsCta: string;
    rights: string;
    credit: string;
  };

  mobile: { call: string; directions: string; emergency: string };

  /** Day labels are assembled with the opening times from src/data/site.ts. */
  hours: { weekdaysLabel: string; sundayLabel: string; shortLine: string };
}

const tr: Copy = {
  meta: {
    title: "CanbazVet Veteriner Kliniği | Edirne Veteriner",
    description:
      "Edirne Şükrüpaşa'da CanbazVet Veteriner Kliniği. Veteriner Hekim Berk Canbaz ile kedi ve köpeklerde muayene, aşı, cerrahi ve acil değerlendirme. 7/24 acil hat: 0541 325 76 82",
    ogAlt: "CanbazVet Veteriner Kliniği, Edirne",
  },
  a11y: {
    skipLink: "İçeriğe geç",
    mainNav: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    langPicker: "Dil seç",
    langHeading: "Dil",
    topbar: "Acil iletişim bilgisi",
    mobileBar: "Hızlı iletişim",
    mapTitle: "CanbazVet Veteriner Kliniği'nin Google Haritalar konumu",
    logoAlt: "CanbazVet Veteriner Kliniği",
    newTab: "yeni sekmede açılır",
  },
  topbar: {
    badge: "7/24 acil hat",
    info: "Acil bir durumda kliniğe gelmeden önce lütfen arayın.",
  },
  nav: {
    home: "Ana sayfa",
    services: "Hizmetler",
    about: "Hakkımızda",
    vet: "Veteriner hekim",
    clinic: "Klinik",
    emergency: "Acil hat",
    reviews: "Değerlendirmeler",
    faq: "Sık sorulanlar",
    contact: "İletişim",
    directions: "Yol tarifi",
  },
  hero: {
    badge: "Edirne Şükrüpaşa",
    titleLead: "Dostunuzun sağlığı,",
    titleAccent: "güvenilir ellerde.",
    desc:
      "Veteriner Hekim Berk Canbaz, kedi ve köpeklerin muayene, aşı, cerrahi ve acil değerlendirme süreçlerini kliniğinde bizzat yürütüyor. Randevu ve ilk değerlendirme için doğrudan arayabilirsiniz.",
    ctaCall: "Hemen ara",
    ctaDirections: "Yol tarifi al",
    ctaReviews: "Google'da incele",
    portraitAlt:
      "Veteriner Hekim Berk Canbaz, CanbazVet Veteriner Kliniği'nin muayene odasında beyaz önlüğüyle",
    cardRole: "Veteriner hekim",
    cardEmergencyLabel: "Acil hat",
    cardEmergencyValue: "7/24 açık",
  },
  trust: [
    {
      title: "Edirne Şükrüpaşa'da",
      desc: "İlhami Ertem Caddesi 136. Sokak'ta, sokak üstü otopark imkânıyla.",
    },
    {
      title: "Hekimle doğrudan iletişim",
      desc: "Muayeneyi yapan hekimle konuşur, takibi de onunla sürdürürsünüz.",
    },
    {
      title: "Pazar günü de açık",
      desc: "Hafta sonu dahil kesintisiz klinik hizmeti.",
    },
    {
      title: "7/24 telefon hattı",
      desc: "Beklenmedik durumlarda telefonda ilk değerlendirme ve yönlendirme.",
    },
  ],
  services: {
    badge: "Hizmetler",
    title: "Koruyucu bakımdan cerrahiye, tek klinikte.",
    desc:
      "Aşı ve rutin kontrollerden laboratuvar tetkiklerine, cerrahi girişimlerden acil müdahaleye kadar kedi ve köpeklerin ihtiyaç duyduğu klinik hizmetler.",
    cta: "Bilgi al",
    items: {
      "koruyucu-hekimlik": {
        title: "Koruyucu hekimlik ve aşı",
        short: "Aşı takvimi, parazit uygulamaları, rutin kontrol.",
        full:
          "Kuduz ve karma aşı takvimlerinin düzenli takibi, iç ve dış parazit uygulamaları ile periyodik sağlık kontrolleri. Amaç, hastalık ortaya çıkmadan önce fark etmek.",
      },
      dahiliye: {
        title: "Dahiliye",
        short: "İç hastalıklarda teşhis, tedavi ve takip.",
        full:
          "Sindirim, solunum, dolaşım ve metabolik sistem rahatsızlıklarında ayrıntılı muayene, gerekli tetkiklerle desteklenen teşhis ve tedavi süreci.",
      },
      cerrahi: {
        title: "Cerrahi operasyonlar",
        short: "Kısırlaştırma ve yumuşak doku cerrahisi.",
        full:
          "Kısırlaştırma, yumuşak doku operasyonları ve acil cerrahi girişimler; ayrı bir ameliyathanede, anestezi takibi altında gerçekleştirilir.",
      },
      laboratuvar: {
        title: "Laboratuvar",
        short: "Kan sayımı, biyokimya, hızlı test.",
        full:
          "Klinik içi laboratuvar ile kan sayımı, biyokimya, idrar tetkiki ve hızlı tanı testleri. Sonuçların çoğu muayene sırasında çıkar.",
      },
      goruntuleme: {
        title: "Görüntüleme",
        short: "Röntgen ve ultrason değerlendirmesi.",
        full:
          "İskelet sistemi, karın içi organlar ve yumuşak dokuların değerlendirilmesinde görüntüleme desteği ile daha net bir teşhis.",
      },
      "dis-sagligi": {
        title: "Diş sağlığı",
        short: "Diş taşı temizliği ve diş eti kontrolü.",
        full:
          "Diş taşı ve plak temizliği, diş eti iltihabının tedavisi, ağız kokusu ve çiğneme güçlüğü şikâyetlerinin değerlendirilmesi.",
      },
      "pet-bakim": {
        title: "Bakım ve tıraş",
        short: "Hijyenik tıraş, banyo, tırnak bakımı.",
        full:
          "Tüy ve cilt yapısına uygun hijyenik tıraş, medikal banyo, tırnak kesimi ve kulak temizliği uygulamaları.",
      },
      acil: {
        title: "7/24 acil hat",
        short: "Telefonda ilk değerlendirme, klinikte müdahale.",
        full:
          "Travma, zehirlenme şüphesi veya ani gelişen rahatsızlıklarda gece gündüz telefonla ulaşıp hekimden ilk yönlendirmeyi alabilirsiniz.",
      },
    },
    banner: {
      title: "Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?",
      desc: "Durumu telefonda anlatın; hekimimiz nasıl ilerlemek gerektiğini söyleyecek.",
    },
  },
  about: {
    badge: "Hakkımızda",
    title: "Her dostun kendine özel bir hikâyesi var.",
    body: [
      "CanbazVet Veteriner Kliniği, Edirne Merkez'de kedi ve köpeklerin sağlık ihtiyaçlarını sakin, anlaşılır ve acele etmeyen bir yaklaşımla değerlendirir.",
      "Hasta sahibiyle açık iletişimi işin merkezine koyuyoruz: hangi tetkikin neden yapıldığını, tedavinin nasıl ilerleyeceğini ve evde nelere dikkat edilmesi gerektiğini adım adım anlatıyoruz.",
    ],
    highlights: [
      "Açık ve anlaşılır bilgilendirme",
      "Ayrı muayene ve ameliyathane alanları",
      "Düzenli aşı ve tedavi takibi",
      "7/24 telefonla ulaşılabilirlik",
    ],
    instaLabel: "Hekimin Instagram hesabı",
    instaCta: "Profili gör",
    photoAlt: "Veteriner Hekim Berk Canbaz, klinikteki muayene alanında",
  },
  vet: {
    badge: "Sorumlu veteriner hekim",
    role: "Veteriner Hekim · CanbazVet Veteriner Kliniği",
    summary:
      "Berk Canbaz, kliniğe gelen her hastanın muayenesini, aşısını, tedavisini ve kontrol sürecini kendisi yürütüyor. Böylece dostunuzun geçmişini bilen tek bir hekimle çalışırsınız.",
    bullets: [
      "Muayeneden takibe kadar aynı hekim",
      "Tedavi seçenekleri ve maliyetleri önceden konuşulur",
      "Acil durumlarda telefonda doğrudan hekim",
    ],
    ctaCall: "Kliniği ara",
    photoAlt: "Veteriner Hekim Berk Canbaz portresi",
  },
  gallery: {
    badge: "Klinik",
    title: "Dostunuzu bırakacağınız yeri önceden görün.",
    desc:
      "Kliniğin girişi, bekleme alanı, muayene odaları, ameliyathanesi ve yataklı hasta ünitesinden gerçek kareler.",
    items: {
      "dis-cephe": {
        title: "Klinik girişi",
        alt: "CanbazVet Veteriner Kliniği'nin pembe binadaki dış cephesi ve yeşil tabelası",
      },
      bekleme: {
        title: "Bekleme alanı",
        alt: "Turkuaz duvarlı bekleme alanı, ürün rafları ve resepsiyon bankosu",
      },
      reyon: {
        title: "Mama ve ürün reyonu",
        alt: "Kedi ve köpek mamalarının dizildiği aydınlatmalı beyaz raflar",
      },
      muayene: {
        title: "Muayene odası",
        alt: "Cam bölmeli muayene odası ve pencere önündeki muayene masası",
      },
      "muayene-dikey": {
        title: "Muayene alanı",
        alt: "Muayene odasının cam bölmeden görünen boydan boya hâli",
      },
      "muayene-masasi": {
        title: "Muayene masası ve ekipmanlar",
        alt: "CanbazVet logolu muayene masası, lavabo ve ilaç dolabı",
      },
      ameliyathane: {
        title: "Ameliyathane",
        alt: "Anestezi cihazı ve cerrahi lambayla donatılmış ameliyathane masası",
      },
      "operasyon-detay": {
        title: "Operasyon masası",
        alt: "Paslanmaz çelik operasyon masası, cerrahi lamba ve mikroskop",
      },
      yatakli: {
        title: "Yataklı hasta ünitesi",
        alt: "Gözlem altındaki kediler için ayrı bölmeli yataklı hasta üniteleri",
      },
    },
  },
  emergency: {
    badge: "7/24 acil hat",
    titleLead: "Acil durumda",
    titleAccent: "bir telefon uzağınızdayız.",
    desc:
      "Gerçek acil vakalarda hattımız gece gündüz açık. Arayın, durumu anlatın; yola çıkmadan önce ne yapmanız gerektiğini söyleyelim ve kliniği hazırlayalım.",
    numberLabel: "Acil vaka numarası",
    callCta: "Acil hattı ara",
    noticeLabel: "Önemli",
    notice: "Kliniğe gelmeden önce arayın; hastayı hazırlıklı karşılayabilmemiz için bu önemli.",
    casesTitle: "Vakit kaybetmeden aramanız gereken durumlar",
    cases: [
      "Trafik kazası veya yüksekten düşme",
      "Şiddetli solunum güçlüğü, boğulma riski",
      "Zehirlenme veya yabancı cisim yutma şüphesi",
      "Durmayan kanama, ağır yaralanma",
      "Ani bilinç kaybı, felç, nöbet",
      "Doğum güçlüğü ve idrar yapamama",
    ],
  },
  reviews: {
    badge: "Değerlendirmeler",
    title: "Yorumları doğrudan Google'da okuyun.",
    desc:
      "Klinik hakkındaki hasta sahibi yorumları Google Haritalar'da yayınlanıyor. Puanı ve yorumların tamamını kaynağından, hiçbir seçme yapılmadan görebilirsiniz.",
    readCta: "Google'da yorumları oku",
    panelTitle: "Deneyiminizi paylaşın",
    panelDesc:
      "Kliniği ziyaret ettiyseniz, yazacağınız yorum sizden sonra gelecek hasta sahiplerinin karar vermesine yardımcı olur.",
    commitmentsLabel: "Kliniğin taahhüdü",
    commitments: [
      {
        title: "Muayeneyi yapan hekime ulaşırsınız",
        desc: "Telefonu açan da, dostunuzu muayene eden de, takibi yapan da aynı hekim.",
      },
      {
        title: "Ayrı ve steril cerrahi alan",
        desc: "Operasyonlar muayene odasında değil, kendi ameliyathanesinde yapılır.",
      },
      {
        title: "Önce bilgi, sonra işlem",
        desc: "Hangi tetkikin neden gerektiğini ve ne tutacağını işlemden önce öğrenirsiniz.",
      },
    ],
  },
  instagram: {
    badge: "Instagram",
    title: "Klinikten güncel kareler.",
    desc:
      "Vaka paylaşımları, sahiplendirme duyuruları ve klinik hayatı @canbazvetedirne hesabında.",
    bioVetLabel: "Veteriner hekim",
    bioHours: "Çalışma saatleri",
    bioEmergency: "7/24 acil hat",
    followCta: "Instagram'da takip et",
    linkCta: "Tüm bağlantılar",
    gridAlt: "CanbazVet Veteriner Kliniği'nden kare",
    note: "Kareler kliniğin kendi arşivinden. Güncel paylaşımlar için hesabı ziyaret edin.",
  },
  faq: {
    badge: "Sık sorulanlar",
    title: "Merak edilenler.",
    desc: "Konum, çalışma saatleri, acil hat ve randevu süreci hakkında en çok sorulan sorular.",
    items: [
      {
        q: "Klinik nerede?",
        a: "Edirne Merkez, Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8. Pembe binanın sokak seviyesindeki girişinden ulaşabilirsiniz; sokakta park yeri bulunur.",
      },
      {
        q: "Çalışma saatleriniz nedir? Pazar günü açık mısınız?",
        a: "Pazartesi–Cumartesi 09:30–19:30, Pazar 12:00–17:00 arası açığız. Bunun dışındaki saatlerde acil hattımız telefonla açık.",
      },
      {
        q: "Acil hat gerçekten 7/24 mü?",
        a: "Evet. 0541 325 76 82 numarasından gece gündüz ulaşabilirsiniz. Hekim telefonda ilk değerlendirmeyi yapar ve kliniğe gelmeniz gerekip gerekmediğini söyler.",
      },
      {
        q: "Randevu almam gerekir mi?",
        a: "Zorunlu değil, ama önerilir. Önceden arayıp geleceğinizi söylerseniz bekleme süreniz kısalır ve hekim dostunuza daha fazla zaman ayırabilir.",
      },
      {
        q: "Hangi hayvanlara bakıyorsunuz?",
        a: "Klinik ağırlıklı olarak kedi ve köpeklere hizmet veriyor. Diğer türler için önce telefonla sormanızı rica ediyoruz.",
      },
      {
        q: "Kliniğe nasıl gelirim?",
        a: "Sayfadaki “Yol tarifi al” butonu Google Haritalar navigasyonunu doğrudan başlatır. İletişim bölümündeki harita da tam konumu gösterir.",
      },
    ],
  },
  contact: {
    badge: "İletişim",
    title: "Kliniğe ulaşın.",
    desc: "Telefonla arayabilir, navigasyonu başlatabilir veya haritadan konumu görebilirsiniz.",
    cardTitle: "İletişim bilgileri",
    addressLabel: "Adres",
    addressFull:
      "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Edirne",
    phoneLabel: "Telefon ve acil hat",
    phoneNote: "Klinik saatleri dışında da açık",
    hoursLabel: "Çalışma saatleri",
    callCta: "Hemen ara",
    directionsCta: "Yol tarifi al",
    instagramCta: "Instagram'da takip et",
    mapTitle: "Harita konumu",
    mapDesc:
      "Harita Google'dan yüklenir. Yüklemek için butona dokunun; böylece sayfa gereksiz veri harcamadan açılır.",
    mapLoadCta: "Haritayı yükle",
    coordsLabel: "Koordinatlar",
    openInMaps: "Google Haritalar'da aç",
  },
  footer: {
    tagline:
      "Edirne Şükrüpaşa'da kedi ve köpekler için muayene, aşı, cerrahi ve acil değerlendirme hizmeti veren veteriner kliniği.",
    navHeading: "Sayfa",
    hoursHeading: "Çalışma saatleri",
    contactHeading: "İletişim",
    emergencyNote: "Acil hat bu saatlerin dışında da açıktır.",
    directionsCta: "Google Haritalar'da yol tarifi",
    rights: "Tüm hakları saklıdır.",
    credit: "Veteriner Hekim Berk Canbaz · Edirne",
  },
  mobile: { call: "Ara", directions: "Yol tarifi", emergency: "Acil" },
  hours: {
    weekdaysLabel: "Pazartesi – Cumartesi",
    sundayLabel: "Pazar",
    shortLine: "Pzt–Cmt {weekdays} · Paz {sunday}",
  },
};

const en: Copy = {
  meta: {
    title: "CanbazVet Veterinary Clinic | Vet in Edirne",
    description:
      "CanbazVet Veterinary Clinic in Şükrüpaşa, Edirne. Examinations, vaccinations, surgery and emergency assessment for cats and dogs with veterinarian Berk Canbaz. 24/7 line: +90 541 325 76 82",
    ogAlt: "CanbazVet Veterinary Clinic, Edirne",
  },
  a11y: {
    skipLink: "Skip to content",
    mainNav: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langPicker: "Choose language",
    langHeading: "Language",
    topbar: "Emergency contact information",
    mobileBar: "Quick contact",
    mapTitle: "Google Maps location of CanbazVet Veterinary Clinic",
    logoAlt: "CanbazVet Veterinary Clinic",
    newTab: "opens in a new tab",
  },
  topbar: {
    badge: "24/7 emergency line",
    info: "In an emergency, please call before coming to the clinic.",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    vet: "Veterinarian",
    clinic: "Clinic",
    emergency: "Emergency",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    directions: "Directions",
  },
  hero: {
    badge: "Şükrüpaşa, Edirne",
    titleLead: "Your companion's health,",
    titleAccent: "in trusted hands.",
    desc:
      "Veterinarian Berk Canbaz personally handles examinations, vaccinations, surgery and emergency assessment for cats and dogs at his clinic. Call directly for an appointment or a first opinion.",
    ctaCall: "Call now",
    ctaDirections: "Get directions",
    ctaReviews: "See on Google",
    portraitAlt:
      "Veterinarian Berk Canbaz in a white coat in the consultation room at CanbazVet Veterinary Clinic",
    cardRole: "Veterinarian",
    cardEmergencyLabel: "Emergency line",
    cardEmergencyValue: "Open 24/7",
  },
  trust: [
    {
      title: "In Şükrüpaşa, Edirne",
      desc: "On 136th Street off İlhami Ertem Avenue, with on-street parking.",
    },
    {
      title: "Talk to the vet directly",
      desc: "The vet who examines your pet is the one you speak to and follow up with.",
    },
    {
      title: "Open on Sundays",
      desc: "Clinic hours right through the weekend.",
    },
    {
      title: "Phone line around the clock",
      desc: "A first assessment and guidance by phone whenever something happens.",
    },
  ],
  services: {
    badge: "Services",
    title: "From preventive care to surgery, under one roof.",
    desc:
      "Vaccinations and routine checks, laboratory work, imaging, surgery and emergency care — the clinical services cats and dogs actually need.",
    cta: "Ask about this",
    items: {
      "koruyucu-hekimlik": {
        title: "Preventive care and vaccination",
        short: "Vaccination schedule, parasite control, routine checks.",
        full:
          "Rabies and combination vaccination schedules kept on track, internal and external parasite treatment, and periodic health checks. The point is to catch things before they become illness.",
      },
      dahiliye: {
        title: "Internal medicine",
        short: "Diagnosis, treatment and follow-up of internal disease.",
        full:
          "Thorough examination of digestive, respiratory, circulatory and metabolic complaints, with diagnosis supported by whatever tests the case calls for.",
      },
      cerrahi: {
        title: "Surgery",
        short: "Neutering and soft tissue procedures.",
        full:
          "Neutering, soft tissue procedures and emergency surgery, carried out in a dedicated operating room under anaesthetic monitoring.",
      },
      laboratuvar: {
        title: "Laboratory",
        short: "Blood counts, biochemistry, rapid tests.",
        full:
          "In-house laboratory for blood counts, biochemistry, urinalysis and rapid diagnostic tests. Most results come back during the same visit.",
      },
      goruntuleme: {
        title: "Imaging",
        short: "X-ray and ultrasound assessment.",
        full:
          "Imaging support for the skeleton, abdominal organs and soft tissue, so the diagnosis rests on more than palpation.",
      },
      "dis-sagligi": {
        title: "Dental care",
        short: "Scaling and gum health checks.",
        full:
          "Removal of tartar and plaque, treatment of gum inflammation, and assessment of bad breath or difficulty chewing.",
      },
      "pet-bakim": {
        title: "Grooming and care",
        short: "Hygienic clipping, bathing, nail care.",
        full:
          "Clipping suited to the coat and skin, medicated baths, nail trimming and ear cleaning.",
      },
      acil: {
        title: "24/7 emergency line",
        short: "First assessment by phone, treatment at the clinic.",
        full:
          "For trauma, suspected poisoning or a sudden turn for the worse, you can reach the vet by phone at any hour and get guidance before you set off.",
      },
    },
    banner: {
      title: "Not sure which service you need?",
      desc: "Describe what's happening on the phone and our vet will tell you how to proceed.",
    },
  },
  about: {
    badge: "About",
    title: "Every animal arrives with its own story.",
    body: [
      "CanbazVet Veterinary Clinic looks after the health of cats and dogs in central Edirne with a calm, plain-spoken approach and no rush.",
      "Open communication with the owner sits at the centre of how we work: which test is being run and why, how treatment will progress, and what to watch for at home.",
    ],
    highlights: [
      "Plain explanations, no jargon",
      "Separate consultation and surgical areas",
      "Vaccination and treatment kept on schedule",
      "Reachable by phone around the clock",
    ],
    instaLabel: "The vet's Instagram account",
    instaCta: "View profile",
    photoAlt: "Veterinarian Berk Canbaz in the clinic's consultation area",
  },
  vet: {
    badge: "Lead veterinarian",
    role: "Veterinarian · CanbazVet Veterinary Clinic",
    summary:
      "Berk Canbaz carries out the examination, vaccination, treatment and follow-up of every patient himself. That means one vet who already knows your animal's history.",
    bullets: [
      "The same vet from examination through follow-up",
      "Treatment options and costs discussed up front",
      "In an emergency, the vet answers the phone",
    ],
    ctaCall: "Call the clinic",
    photoAlt: "Portrait of veterinarian Berk Canbaz",
  },
  gallery: {
    badge: "The clinic",
    title: "See where you'll be leaving your companion.",
    desc:
      "Real photographs of the entrance, waiting area, consultation rooms, operating room and inpatient unit.",
    items: {
      "dis-cephe": {
        title: "Clinic entrance",
        alt: "The street frontage of CanbazVet Veterinary Clinic, with its green sign on a pink building",
      },
      bekleme: {
        title: "Waiting area",
        alt: "Waiting area with a turquoise wall, product shelving and the reception desk",
      },
      reyon: {
        title: "Food and supplies",
        alt: "Lit white shelving stocked with cat and dog food",
      },
      muayene: {
        title: "Consultation room",
        alt: "Glass-partitioned consultation room with the examination table by the window",
      },
      "muayene-dikey": {
        title: "Consultation area",
        alt: "Full-height view of the consultation room through the glass partition",
      },
      "muayene-masasi": {
        title: "Examination table and equipment",
        alt: "Examination table branded CanbazVet, alongside the sink and medicine cabinet",
      },
      ameliyathane: {
        title: "Operating room",
        alt: "Operating table equipped with an anaesthetic machine and surgical light",
      },
      "operasyon-detay": {
        title: "Operating table",
        alt: "Stainless steel operating table with surgical light and microscope",
      },
      yatakli: {
        title: "Inpatient unit",
        alt: "Individually partitioned inpatient units housing cats under observation",
      },
    },
  },
  emergency: {
    badge: "24/7 emergency line",
    titleLead: "In an emergency,",
    titleAccent: "we're one phone call away.",
    desc:
      "For genuine emergencies the line is open day and night. Call, describe what's happened, and we'll tell you what to do before you leave and have the clinic ready.",
    numberLabel: "Emergency number",
    callCta: "Call the emergency line",
    noticeLabel: "Important",
    notice: "Please call before coming in — it lets us be ready for your animal on arrival.",
    casesTitle: "Call without waiting if you see",
    cases: [
      "A road accident or a fall from height",
      "Severe breathing difficulty or choking",
      "Suspected poisoning or a swallowed object",
      "Bleeding that won't stop, or serious injury",
      "Sudden collapse, paralysis or a seizure",
      "Difficulty giving birth, or inability to urinate",
    ],
  },
  reviews: {
    badge: "Reviews",
    title: "Read the reviews straight from Google.",
    desc:
      "Owner reviews of the clinic are published on Google Maps. You can see the rating and every review at the source, with nothing filtered out.",
    readCta: "Read reviews on Google",
    panelTitle: "Share your experience",
    panelDesc:
      "If you've visited the clinic, a review helps the next owner decide where to take their animal.",
    commitmentsLabel: "What the clinic commits to",
    commitments: [
      {
        title: "You reach the vet who treated your pet",
        desc: "The person who answers, examines and follows up is the same vet.",
      },
      {
        title: "A separate, sterile surgical area",
        desc: "Procedures happen in a dedicated operating room, not on the consultation table.",
      },
      {
        title: "Information before intervention",
        desc: "You learn which test is needed, why, and what it costs before it happens.",
      },
    ],
  },
  instagram: {
    badge: "Instagram",
    title: "Recent frames from the clinic.",
    desc: "Case notes, adoption posts and day-to-day clinic life at @canbazvetedirne.",
    bioVetLabel: "Veterinarian",
    bioHours: "Opening hours",
    bioEmergency: "24/7 emergency line",
    followCta: "Follow on Instagram",
    linkCta: "All links",
    gridAlt: "A frame from CanbazVet Veterinary Clinic",
    note: "These frames come from the clinic's own archive. Visit the account for current posts.",
  },
  faq: {
    badge: "FAQ",
    title: "Common questions.",
    desc: "What people most often ask about location, hours, the emergency line and appointments.",
    items: [
      {
        q: "Where is the clinic?",
        a: "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, central Edirne. The entrance is at street level in the pink building, and there is parking on the street.",
      },
      {
        q: "What are your hours? Are you open on Sunday?",
        a: "Monday to Saturday 09:30–19:30, and Sunday 12:00–17:00. Outside those hours the emergency line is still answered.",
      },
      {
        q: "Is the emergency line really 24/7?",
        a: "Yes. You can reach us on +90 541 325 76 82 at any hour. The vet makes a first assessment on the phone and tells you whether you need to come in.",
      },
      {
        q: "Do I need an appointment?",
        a: "It isn't required, but it helps. Calling ahead shortens your wait and lets the vet give your animal more time.",
      },
      {
        q: "Which animals do you treat?",
        a: "The clinic mainly treats cats and dogs. For other species, please call first so we can tell you whether we can help.",
      },
      {
        q: "How do I get there?",
        a: "The “Get directions” button starts Google Maps navigation straight away, and the map in the contact section shows the exact location.",
      },
    ],
  },
  contact: {
    badge: "Contact",
    title: "Get in touch.",
    desc: "Call the clinic, start navigation, or find the exact location on the map.",
    cardTitle: "Contact details",
    addressLabel: "Address",
    addressFull:
      "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Edirne, Turkey",
    phoneLabel: "Phone and emergency line",
    phoneNote: "Answered outside clinic hours too",
    hoursLabel: "Opening hours",
    callCta: "Call now",
    directionsCta: "Get directions",
    instagramCta: "Follow on Instagram",
    mapTitle: "Map location",
    mapDesc:
      "The map loads from Google. Tap to load it, so the page opens without spending data you didn't ask for.",
    mapLoadCta: "Load the map",
    coordsLabel: "Coordinates",
    openInMaps: "Open in Google Maps",
  },
  footer: {
    tagline:
      "A veterinary clinic in Şükrüpaşa, Edirne, offering examinations, vaccinations, surgery and emergency assessment for cats and dogs.",
    navHeading: "Page",
    hoursHeading: "Opening hours",
    contactHeading: "Contact",
    emergencyNote: "The emergency line is answered outside these hours as well.",
    directionsCta: "Directions on Google Maps",
    rights: "All rights reserved.",
    credit: "Veterinarian Berk Canbaz · Edirne",
  },
  mobile: { call: "Call", directions: "Directions", emergency: "Emergency" },
  hours: {
    weekdaysLabel: "Monday – Saturday",
    sundayLabel: "Sunday",
    shortLine: "Mon–Sat {weekdays} · Sun {sunday}",
  },
};

const bg: Copy = {
  meta: {
    title: "Ветеринарна клиника CanbazVet | Ветеринар в Одрин",
    description:
      "Ветеринарна клиника CanbazVet в кв. Шюкрюпаша, Одрин. Прегледи, ваксинации, операции и спешна оценка за котки и кучета с ветеринарен лекар Берк Джанбаз. Линия 24/7: +90 541 325 76 82",
    ogAlt: "Ветеринарна клиника CanbazVet, Одрин",
  },
  a11y: {
    skipLink: "Към съдържанието",
    mainNav: "Главно меню",
    openMenu: "Отвори менюто",
    closeMenu: "Затвори менюто",
    langPicker: "Избор на език",
    langHeading: "Език",
    topbar: "Информация за спешен контакт",
    mobileBar: "Бърз контакт",
    mapTitle: "Локация на ветеринарна клиника CanbazVet в Google Карти",
    logoAlt: "Ветеринарна клиника CanbazVet",
    newTab: "отваря се в нов раздел",
  },
  topbar: {
    badge: "Спешна линия 24/7",
    info: "При спешен случай, моля, обадете се преди да дойдете в клиниката.",
  },
  nav: {
    home: "Начало",
    services: "Услуги",
    about: "За нас",
    vet: "Ветеринарен лекар",
    clinic: "Клиниката",
    emergency: "Спешна линия",
    reviews: "Отзиви",
    faq: "Въпроси",
    contact: "Контакти",
    directions: "Упътване",
  },
  hero: {
    badge: "кв. Шюкрюпаша, Одрин",
    titleLead: "Здравето на любимеца ви,",
    titleAccent: "в сигурни ръце.",
    desc:
      "Ветеринарният лекар Берк Джанбаз лично извършва прегледите, ваксинациите, операциите и спешната оценка на котки и кучета в клиниката си. Обадете се директно за час или първо мнение.",
    ctaCall: "Обадете се",
    ctaDirections: "Вземете упътване",
    ctaReviews: "Вижте в Google",
    portraitAlt:
      "Ветеринарният лекар Берк Джанбаз с бяла престилка в кабинета на ветеринарна клиника CanbazVet",
    cardRole: "Ветеринарен лекар",
    cardEmergencyLabel: "Спешна линия",
    cardEmergencyValue: "Отворена 24/7",
  },
  trust: [
    {
      title: "В кв. Шюкрюпаша, Одрин",
      desc: "На ул. 136, отклонение от бул. İlhami Ertem, с паркиране на улицата.",
    },
    {
      title: "Директен контакт с лекаря",
      desc: "Лекарят, който преглежда вашия любимец, е същият, с когото говорите и проследявате случая.",
    },
    {
      title: "Отворено и в неделя",
      desc: "Работно време без прекъсване през целия уикенд.",
    },
    {
      title: "Телефон денонощно",
      desc: "Първа оценка и насоки по телефона, когато се случи нещо.",
    },
  ],
  services: {
    badge: "Услуги",
    title: "От профилактика до хирургия, на едно място.",
    desc:
      "Ваксинации и рутинни прегледи, лабораторни изследвания, образна диагностика, операции и спешна помощ — клиничните услуги, от които котките и кучетата наистина имат нужда.",
    cta: "Попитайте за това",
    items: {
      "koruyucu-hekimlik": {
        title: "Профилактика и ваксинации",
        short: "Ваксинационен календар, обезпаразитяване, рутинни прегледи.",
        full:
          "Проследяване на календара за бяс и комбинирани ваксини, вътрешно и външно обезпаразитяване и периодични профилактични прегледи. Целта е проблемът да се открие, преди да стане заболяване.",
      },
      dahiliye: {
        title: "Вътрешни болести",
        short: "Диагностика, лечение и проследяване.",
        full:
          "Подробен преглед при храносмилателни, дихателни, сърдечно-съдови и метаболитни проблеми, с диагноза, подкрепена от необходимите изследвания.",
      },
      cerrahi: {
        title: "Хирургия",
        short: "Кастрация и операции на меки тъкани.",
        full:
          "Кастрация, операции на меки тъкани и спешна хирургия, извършвани в отделна операционна зала под анестезиологичен контрол.",
      },
      laboratuvar: {
        title: "Лаборатория",
        short: "Кръвна картина, биохимия, бързи тестове.",
        full:
          "Собствена лаборатория за кръвна картина, биохимия, изследване на урина и бързи тестове. Повечето резултати излизат още по време на прегледа.",
      },
      goruntuleme: {
        title: "Образна диагностика",
        short: "Рентген и ехография.",
        full:
          "Образна диагностика на скелета, коремните органи и меките тъкани, за да не се разчита само на палпация.",
      },
      "dis-sagligi": {
        title: "Дентално здраве",
        short: "Почистване на зъбен камък и контрол на гингивите.",
        full:
          "Отстраняване на зъбен камък и плака, лечение на възпаление на гингивите и оценка на лош дъх или затруднено дъвчене.",
      },
      "pet-bakim": {
        title: "Грижа и подстригване",
        short: "Хигиенно подстригване, къпане, грижа за нокти.",
        full:
          "Подстригване според типа козина и кожа, лечебни бани, изрязване на нокти и почистване на уши.",
      },
      acil: {
        title: "Спешна линия 24/7",
        short: "Първа оценка по телефона, лечение в клиниката.",
        full:
          "При травма, съмнение за отравяне или внезапно влошаване можете да се свържете с лекаря по всяко време и да получите насоки, преди да тръгнете.",
      },
    },
    banner: {
      title: "Не сте сигурни от каква услуга имате нужда?",
      desc: "Опишете какво се случва по телефона и нашият лекар ще ви каже как да продължите.",
    },
  },
  about: {
    badge: "За нас",
    title: "Всяко животно идва със своя собствена история.",
    body: [
      "Ветеринарна клиника CanbazVet се грижи за здравето на котките и кучетата в центъра на Одрин спокойно, разбираемо и без бързане.",
      "Откритата комуникация със стопанина е в центъра на работата ни: кое изследване се прави и защо, как ще протече лечението и на какво да се внимава вкъщи.",
    ],
    highlights: [
      "Ясни обяснения, без сложни термини",
      "Отделни зони за преглед и за операции",
      "Ваксинации и лечение по график",
      "Достъпност по телефон денонощно",
    ],
    instaLabel: "Instagram на лекаря",
    instaCta: "Вижте профила",
    photoAlt: "Ветеринарният лекар Берк Джанбаз в кабинета на клиниката",
  },
  vet: {
    badge: "Водещ ветеринарен лекар",
    role: "Ветеринарен лекар · CanbazVet",
    summary:
      "Берк Джанбаз лично извършва прегледа, ваксинацията, лечението и проследяването на всеки пациент. Така работите с един лекар, който вече познава историята на вашия любимец.",
    bullets: [
      "Един и същ лекар от прегледа до проследяването",
      "Възможностите за лечение и цените се обсъждат предварително",
      "При спешен случай лекарят вдига телефона",
    ],
    ctaCall: "Обадете се в клиниката",
    photoAlt: "Портрет на ветеринарния лекар Берк Джанбаз",
  },
  gallery: {
    badge: "Клиниката",
    title: "Вижте къде ще оставите вашия любимец.",
    desc:
      "Истински снимки на входа, чакалнята, кабинетите, операционната зала и стационара.",
    items: {
      "dis-cephe": {
        title: "Вход на клиниката",
        alt: "Уличната фасада на ветеринарна клиника CanbazVet със зелената табела върху розова сграда",
      },
      bekleme: {
        title: "Чакалня",
        alt: "Чакалня с тюркоазена стена, рафтове с продукти и рецепция",
      },
      reyon: {
        title: "Храни и продукти",
        alt: "Осветени бели рафтове с храна за котки и кучета",
      },
      muayene: {
        title: "Кабинет за прегледи",
        alt: "Кабинет със стъклена преграда и маса за преглед до прозореца",
      },
      "muayene-dikey": {
        title: "Зона за прегледи",
        alt: "Изглед на кабинета през стъклената преграда",
      },
      "muayene-masasi": {
        title: "Маса за преглед и оборудване",
        alt: "Маса за преглед с логото на CanbazVet, мивка и шкаф за медикаменти",
      },
      ameliyathane: {
        title: "Операционна зала",
        alt: "Операционна маса с апарат за анестезия и хирургична лампа",
      },
      "operasyon-detay": {
        title: "Операционна маса",
        alt: "Операционна маса от неръждаема стомана с хирургична лампа и микроскоп",
      },
      yatakli: {
        title: "Стационар",
        alt: "Отделни клетки в стационара с котки под наблюдение",
      },
    },
  },
  emergency: {
    badge: "Спешна линия 24/7",
    titleLead: "При спешен случай",
    titleAccent: "сме на едно обаждане разстояние.",
    desc:
      "При истински спешни случаи линията е отворена ден и нощ. Обадете се, опишете какво се е случило, а ние ще ви кажем какво да направите преди да тръгнете и ще подготвим клиниката.",
    numberLabel: "Номер за спешни случаи",
    callCta: "Обадете се на спешната линия",
    noticeLabel: "Важно",
    notice:
      "Моля, обадете се преди да дойдете — така можем да посрещнем вашето животно подготвени.",
    casesTitle: "Обадете се веднага, ако забележите",
    cases: [
      "Пътен инцидент или падане от височина",
      "Тежко затруднено дишане или задавяне",
      "Съмнение за отравяне или погълнат предмет",
      "Кръвотечение, което не спира, или сериозна травма",
      "Внезапна загуба на съзнание, парализа или гърч",
      "Затруднено раждане или невъзможност за уриниране",
    ],
  },
  reviews: {
    badge: "Отзиви",
    title: "Прочетете отзивите директно в Google.",
    desc:
      "Отзивите на стопаните за клиниката се публикуват в Google Карти. Можете да видите оценката и всички отзиви от източника, без нищо да е подбрано.",
    readCta: "Прочетете отзивите в Google",
    panelTitle: "Споделете своя опит",
    panelDesc:
      "Ако сте посетили клиниката, вашият отзив помага на следващия стопанин да реши къде да заведе животното си.",
    commitmentsLabel: "Какво обещава клиниката",
    commitments: [
      {
        title: "Свързвате се с лекаря, който е лекувал любимеца ви",
        desc: "Този, който вдига телефона, преглежда и проследява, е един и същ лекар.",
      },
      {
        title: "Отделна, стерилна операционна зона",
        desc: "Процедурите се извършват в отделна операционна, не на масата за преглед.",
      },
      {
        title: "Първо информация, после действие",
        desc: "Научавате кое изследване е нужно, защо и колко струва, преди да се направи.",
      },
    ],
  },
  instagram: {
    badge: "Instagram",
    title: "Актуални кадри от клиниката.",
    desc: "Случаи, обяви за осиновяване и ежедневието в клиниката в @canbazvetedirne.",
    bioVetLabel: "Ветеринарен лекар",
    bioHours: "Работно време",
    bioEmergency: "Спешна линия 24/7",
    followCta: "Последвайте в Instagram",
    linkCta: "Всички връзки",
    gridAlt: "Кадър от ветеринарна клиника CanbazVet",
    note: "Кадрите са от архива на клиниката. За актуални публикации посетете профила.",
  },
  faq: {
    badge: "Често задавани въпроси",
    title: "Най-често питаното.",
    desc: "Какво питат хората най-често за локацията, работното време, спешната линия и часовете.",
    items: [
      {
        q: "Къде се намира клиниката?",
        a: "кв. Шюкрюпаша, бул. İlhami Ertem, ул. 136 №8, центъра на Одрин. Входът е на улично ниво в розовата сграда, а на улицата има паркиране.",
      },
      {
        q: "Какво е работното време? Отворено ли е в неделя?",
        a: "Понеделник–събота 09:30–19:30 и неделя 12:00–17:00. Извън това време спешната линия остава активна.",
      },
      {
        q: "Наистина ли спешната линия работи 24/7?",
        a: "Да. Можете да се свържете на +90 541 325 76 82 по всяко време. Лекарят прави първа оценка по телефона и ви казва дали трябва да дойдете.",
      },
      {
        q: "Нужен ли е предварителен час?",
        a: "Не е задължителен, но помага. Обаждането предварително намалява чакането и позволява на лекаря да отдели повече време.",
      },
      {
        q: "Какви животни лекувате?",
        a: "Клиниката работи основно с котки и кучета. За други видове, моля, обадете се предварително.",
      },
      {
        q: "Как да стигна до вас?",
        a: "Бутонът „Вземете упътване“ стартира навигация в Google Карти, а картата в раздел Контакти показва точната локация.",
      },
    ],
  },
  contact: {
    badge: "Контакти",
    title: "Свържете се с нас.",
    desc: "Обадете се, стартирайте навигация или намерете точната локация на картата.",
    cardTitle: "Данни за контакт",
    addressLabel: "Адрес",
    addressFull:
      "кв. Шюкрюпаша, бул. İlhami Ertem, ул. 136 №8, 22100 Одрин (Edirne), Турция",
    phoneLabel: "Телефон и спешна линия",
    phoneNote: "Отговаряме и извън работно време",
    hoursLabel: "Работно време",
    callCta: "Обадете се",
    directionsCta: "Вземете упътване",
    instagramCta: "Последвайте в Instagram",
    mapTitle: "Локация на картата",
    mapDesc:
      "Картата се зарежда от Google. Докоснете, за да я заредите, така страницата се отваря без излишни данни.",
    mapLoadCta: "Заредете картата",
    coordsLabel: "Координати",
    openInMaps: "Отворете в Google Карти",
  },
  footer: {
    tagline:
      "Ветеринарна клиника в кв. Шюкрюпаша, Одрин, която предлага прегледи, ваксинации, операции и спешна оценка за котки и кучета.",
    navHeading: "Страница",
    hoursHeading: "Работно време",
    contactHeading: "Контакти",
    emergencyNote: "Спешната линия работи и извън това време.",
    directionsCta: "Упътване в Google Карти",
    rights: "Всички права запазени.",
    credit: "Ветеринарен лекар Берк Джанбаз · Одрин",
  },
  mobile: { call: "Обади се", directions: "Упътване", emergency: "Спешно" },
  hours: {
    weekdaysLabel: "Понеделник – Събота",
    sundayLabel: "Неделя",
    shortLine: "Пон–Съб {weekdays} · Нед {sunday}",
  },
};

const el: Copy = {
  meta: {
    title: "Κτηνιατρική Κλινική CanbazVet | Κτηνίατρος στην Αδριανούπολη",
    description:
      "Κτηνιατρική Κλινική CanbazVet στη συνοικία Şükrüpaşa της Αδριανούπολης. Εξετάσεις, εμβολιασμοί, χειρουργεία και επείγουσα εκτίμηση για γάτες και σκύλους με τον κτηνίατρο Berk Canbaz. Γραμμή 24/7: +90 541 325 76 82",
    ogAlt: "Κτηνιατρική Κλινική CanbazVet, Αδριανούπολη",
  },
  a11y: {
    skipLink: "Μετάβαση στο περιεχόμενο",
    mainNav: "Κύριο μενού",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    langPicker: "Επιλογή γλώσσας",
    langHeading: "Γλώσσα",
    topbar: "Πληροφορίες επείγουσας επικοινωνίας",
    mobileBar: "Γρήγορη επικοινωνία",
    mapTitle: "Τοποθεσία της Κτηνιατρικής Κλινικής CanbazVet στους Χάρτες Google",
    logoAlt: "Κτηνιατρική Κλινική CanbazVet",
    newTab: "ανοίγει σε νέα καρτέλα",
  },
  topbar: {
    badge: "Γραμμή έκτακτης ανάγκης 24/7",
    info: "Σε επείγον περιστατικό, καλέστε πριν έρθετε στην κλινική.",
  },
  nav: {
    home: "Αρχική",
    services: "Υπηρεσίες",
    about: "Σχετικά",
    vet: "Κτηνίατρος",
    clinic: "Η κλινική",
    emergency: "Έκτακτη ανάγκη",
    reviews: "Αξιολογήσεις",
    faq: "Ερωτήσεις",
    contact: "Επικοινωνία",
    directions: "Οδηγίες",
  },
  hero: {
    badge: "Şükrüpaşa, Αδριανούπολη",
    titleLead: "Η υγεία του φίλου σας,",
    titleAccent: "σε σίγουρα χέρια.",
    desc:
      "Ο κτηνίατρος Berk Canbaz αναλαμβάνει προσωπικά τις εξετάσεις, τους εμβολιασμούς, τα χειρουργεία και την επείγουσα εκτίμηση γατών και σκύλων στην κλινική του. Καλέστε απευθείας για ραντεβού ή πρώτη γνώμη.",
    ctaCall: "Καλέστε τώρα",
    ctaDirections: "Οδηγίες πρόσβασης",
    ctaReviews: "Δείτε στο Google",
    portraitAlt:
      "Ο κτηνίατρος Berk Canbaz με λευκή ρόμπα στο εξεταστήριο της Κτηνιατρικής Κλινικής CanbazVet",
    cardRole: "Κτηνίατρος",
    cardEmergencyLabel: "Γραμμή έκτακτης ανάγκης",
    cardEmergencyValue: "Ανοιχτή 24/7",
  },
  trust: [
    {
      title: "Στη συνοικία Şükrüpaşa",
      desc: "Στην οδό 136, παράδρομο της λεωφόρου İlhami Ertem, με στάθμευση στον δρόμο.",
    },
    {
      title: "Απευθείας επικοινωνία με τον κτηνίατρο",
      desc: "Ο κτηνίατρος που εξετάζει τον φίλο σας είναι αυτός με τον οποίο μιλάτε και συνεχίζετε.",
    },
    {
      title: "Ανοιχτά και την Κυριακή",
      desc: "Λειτουργία της κλινικής όλο το σαββατοκύριακο.",
    },
    {
      title: "Τηλέφωνο όλο το εικοσιτετράωρο",
      desc: "Πρώτη εκτίμηση και οδηγίες στο τηλέφωνο, όποτε συμβεί κάτι.",
    },
  ],
  services: {
    badge: "Υπηρεσίες",
    title: "Από την πρόληψη έως το χειρουργείο, στον ίδιο χώρο.",
    desc:
      "Εμβολιασμοί και τακτικοί έλεγχοι, εργαστηριακές εξετάσεις, απεικόνιση, χειρουργεία και επείγουσα φροντίδα — οι κλινικές υπηρεσίες που πραγματικά χρειάζονται γάτες και σκύλοι.",
    cta: "Ρωτήστε γι' αυτό",
    items: {
      "koruyucu-hekimlik": {
        title: "Πρόληψη και εμβολιασμοί",
        short: "Πρόγραμμα εμβολίων, αντιπαρασιτική αγωγή, τακτικοί έλεγχοι.",
        full:
          "Παρακολούθηση του προγράμματος εμβολίων λύσσας και πολυδύναμων, αντιπαρασιτική αγωγή εντός και εκτός, και περιοδικοί έλεγχοι υγείας. Στόχος να εντοπιστεί το πρόβλημα πριν γίνει νόσος.",
      },
      dahiliye: {
        title: "Παθολογία",
        short: "Διάγνωση, θεραπεία και παρακολούθηση.",
        full:
          "Αναλυτική εξέταση σε πεπτικά, αναπνευστικά, κυκλοφορικά και μεταβολικά προβλήματα, με διάγνωση που στηρίζεται στις απαραίτητες εξετάσεις.",
      },
      cerrahi: {
        title: "Χειρουργική",
        short: "Στειρώσεις και επεμβάσεις μαλακών μορίων.",
        full:
          "Στειρώσεις, επεμβάσεις μαλακών μορίων και επείγοντα χειρουργεία, σε ξεχωριστό χειρουργείο υπό αναισθησιολογική παρακολούθηση.",
      },
      laboratuvar: {
        title: "Εργαστήριο",
        short: "Αιματολογικές, βιοχημικές, ταχείες εξετάσεις.",
        full:
          "Εργαστήριο εντός της κλινικής για αιματολογικές και βιοχημικές εξετάσεις, ανάλυση ούρων και ταχέα τεστ. Τα περισσότερα αποτελέσματα βγαίνουν στην ίδια επίσκεψη.",
      },
      goruntuleme: {
        title: "Απεικόνιση",
        short: "Ακτινογραφία και υπερηχογράφημα.",
        full:
          "Απεικονιστική υποστήριξη για τον σκελετό, τα κοιλιακά όργανα και τα μαλακά μόρια, ώστε η διάγνωση να μη βασίζεται μόνο στην ψηλάφηση.",
      },
      "dis-sagligi": {
        title: "Οδοντιατρική φροντίδα",
        short: "Αφαίρεση πέτρας και έλεγχος ούλων.",
        full:
          "Αφαίρεση πέτρας και πλάκας, αντιμετώπιση ουλίτιδας και εκτίμηση κακοσμίας ή δυσκολίας στη μάσηση.",
      },
      "pet-bakim": {
        title: "Περιποίηση και κούρεμα",
        short: "Υγιεινό κούρεμα, μπάνιο, φροντίδα νυχιών.",
        full:
          "Κούρεμα κατάλληλο για το τρίχωμα και το δέρμα, φαρμακευτικά μπάνια, κοπή νυχιών και καθαρισμός αυτιών.",
      },
      acil: {
        title: "Γραμμή έκτακτης ανάγκης 24/7",
        short: "Πρώτη εκτίμηση στο τηλέφωνο, αντιμετώπιση στην κλινική.",
        full:
          "Σε τραυματισμό, υποψία δηλητηρίασης ή ξαφνική επιδείνωση, μπορείτε να βρείτε τον κτηνίατρο οποιαδήποτε ώρα και να πάρετε οδηγίες πριν ξεκινήσετε.",
      },
    },
    banner: {
      title: "Δεν είστε σίγουροι ποια υπηρεσία χρειάζεστε;",
      desc: "Περιγράψτε στο τηλέφωνο τι συμβαίνει και ο κτηνίατρός μας θα σας πει πώς να προχωρήσετε.",
    },
  },
  about: {
    badge: "Σχετικά",
    title: "Κάθε ζώο έρχεται με τη δική του ιστορία.",
    body: [
      "Η Κτηνιατρική Κλινική CanbazVet φροντίζει την υγεία γατών και σκύλων στο κέντρο της Αδριανούπολης με ηρεμία, καθαρή γλώσσα και χωρίς βιασύνη.",
      "Η ανοιχτή επικοινωνία με τον ιδιοκτήτη βρίσκεται στο κέντρο της δουλειάς μας: ποια εξέταση γίνεται και γιατί, πώς θα εξελιχθεί η θεραπεία και τι πρέπει να προσέξετε στο σπίτι.",
    ],
    highlights: [
      "Καθαρές εξηγήσεις, χωρίς δυσνόητους όρους",
      "Ξεχωριστοί χώροι εξέτασης και χειρουργείου",
      "Εμβολιασμοί και θεραπεία στο πρόγραμμά τους",
      "Τηλεφωνική πρόσβαση όλο το εικοσιτετράωρο",
    ],
    instaLabel: "Το Instagram του κτηνιάτρου",
    instaCta: "Δείτε το προφίλ",
    photoAlt: "Ο κτηνίατρος Berk Canbaz στον χώρο εξέτασης της κλινικής",
  },
  vet: {
    badge: "Υπεύθυνος κτηνίατρος",
    role: "Κτηνίατρος · CanbazVet",
    summary:
      "Ο Berk Canbaz πραγματοποιεί ο ίδιος την εξέταση, τον εμβολιασμό, τη θεραπεία και την παρακολούθηση κάθε περιστατικού. Έτσι συνεργάζεστε με έναν κτηνίατρο που γνωρίζει ήδη το ιστορικό του ζώου σας.",
    bullets: [
      "Ο ίδιος κτηνίατρος από την εξέταση έως την παρακολούθηση",
      "Οι επιλογές θεραπείας και το κόστος συζητούνται εκ των προτέρων",
      "Σε επείγον περιστατικό, ο κτηνίατρος απαντά στο τηλέφωνο",
    ],
    ctaCall: "Καλέστε την κλινική",
    photoAlt: "Πορτρέτο του κτηνιάτρου Berk Canbaz",
  },
  gallery: {
    badge: "Η κλινική",
    title: "Δείτε πού θα αφήσετε τον φίλο σας.",
    desc:
      "Πραγματικές φωτογραφίες από την είσοδο, την αναμονή, τα εξεταστήρια, το χειρουργείο και τη νοσηλεία.",
    items: {
      "dis-cephe": {
        title: "Είσοδος κλινικής",
        alt: "Η πρόσοψη της Κτηνιατρικής Κλινικής CanbazVet με την πράσινη πινακίδα σε ροζ κτίριο",
      },
      bekleme: {
        title: "Χώρος αναμονής",
        alt: "Χώρος αναμονής με τυρκουάζ τοίχο, ράφια προϊόντων και υποδοχή",
      },
      reyon: {
        title: "Τροφές και προϊόντα",
        alt: "Φωτισμένα λευκά ράφια με τροφές για γάτες και σκύλους",
      },
      muayene: {
        title: "Εξεταστήριο",
        alt: "Εξεταστήριο με γυάλινο διαχωριστικό και τραπέζι εξέτασης στο παράθυρο",
      },
      "muayene-dikey": {
        title: "Χώρος εξέτασης",
        alt: "Άποψη του εξεταστηρίου μέσα από το γυάλινο διαχωριστικό",
      },
      "muayene-masasi": {
        title: "Τραπέζι εξέτασης και εξοπλισμός",
        alt: "Τραπέζι εξέτασης με το λογότυπο CanbazVet, νιπτήρας και φαρμακείο",
      },
      ameliyathane: {
        title: "Χειρουργείο",
        alt: "Χειρουργική τράπεζα με μηχάνημα αναισθησίας και χειρουργικό φως",
      },
      "operasyon-detay": {
        title: "Χειρουργική τράπεζα",
        alt: "Ανοξείδωτη χειρουργική τράπεζα με χειρουργικό φως και μικροσκόπιο",
      },
      yatakli: {
        title: "Νοσηλεία",
        alt: "Ξεχωριστά κλουβιά νοσηλείας με γάτες υπό παρακολούθηση",
      },
    },
  },
  emergency: {
    badge: "Γραμμή έκτακτης ανάγκης 24/7",
    titleLead: "Σε επείγον περιστατικό,",
    titleAccent: "είμαστε ένα τηλεφώνημα μακριά.",
    desc:
      "Για πραγματικά επείγοντα περιστατικά η γραμμή είναι ανοιχτή μέρα και νύχτα. Καλέστε, περιγράψτε τι συνέβη, και θα σας πούμε τι να κάνετε πριν ξεκινήσετε, ετοιμάζοντας παράλληλα την κλινική.",
    numberLabel: "Τηλέφωνο επειγόντων",
    callCta: "Καλέστε τη γραμμή επειγόντων",
    noticeLabel: "Σημαντικό",
    notice:
      "Καλέστε πριν έρθετε — μας επιτρέπει να υποδεχτούμε το ζώο σας προετοιμασμένοι.",
    casesTitle: "Καλέστε αμέσως αν δείτε",
    cases: [
      "Τροχαίο ατύχημα ή πτώση από ύψος",
      "Σοβαρή δυσκολία στην αναπνοή ή πνιγμό",
      "Υποψία δηλητηρίασης ή κατάποση ξένου σώματος",
      "Αιμορραγία που δεν σταματά ή σοβαρό τραύμα",
      "Ξαφνική απώλεια συνείδησης, παράλυση ή σπασμούς",
      "Δυστοκία στον τοκετό ή αδυναμία ούρησης",
    ],
  },
  reviews: {
    badge: "Αξιολογήσεις",
    title: "Διαβάστε τις κριτικές απευθείας στο Google.",
    desc:
      "Οι κριτικές των ιδιοκτητών για την κλινική δημοσιεύονται στους Χάρτες Google. Μπορείτε να δείτε τη βαθμολογία και όλες τις κριτικές στην πηγή, χωρίς επιλογή.",
    readCta: "Διαβάστε κριτικές στο Google",
    panelTitle: "Μοιραστείτε την εμπειρία σας",
    panelDesc:
      "Αν επισκεφθήκατε την κλινική, μια κριτική βοηθά τον επόμενο ιδιοκτήτη να αποφασίσει.",
    commitmentsLabel: "Τι δεσμεύεται η κλινική",
    commitments: [
      {
        title: "Βρίσκετε τον κτηνίατρο που ανέλαβε το ζώο σας",
        desc: "Αυτός που απαντά, εξετάζει και παρακολουθεί είναι ο ίδιος κτηνίατρος.",
      },
      {
        title: "Ξεχωριστός, αποστειρωμένος χειρουργικός χώρος",
        desc: "Οι επεμβάσεις γίνονται σε δικό τους χειρουργείο, όχι στο τραπέζι εξέτασης.",
      },
      {
        title: "Πρώτα η ενημέρωση, μετά η πράξη",
        desc: "Μαθαίνετε ποια εξέταση χρειάζεται, γιατί και τι κοστίζει, πριν γίνει.",
      },
    ],
  },
  instagram: {
    badge: "Instagram",
    title: "Πρόσφατα στιγμιότυπα από την κλινική.",
    desc: "Περιστατικά, αναρτήσεις υιοθεσίας και η καθημερινότητα της κλινικής στο @canbazvetedirne.",
    bioVetLabel: "Κτηνίατρος",
    bioHours: "Ώρες λειτουργίας",
    bioEmergency: "Γραμμή επειγόντων 24/7",
    followCta: "Ακολουθήστε στο Instagram",
    linkCta: "Όλοι οι σύνδεσμοι",
    gridAlt: "Στιγμιότυπο από την Κτηνιατρική Κλινική CanbazVet",
    note: "Τα στιγμιότυπα προέρχονται από το αρχείο της κλινικής. Για πρόσφατες αναρτήσεις επισκεφθείτε τον λογαριασμό.",
  },
  faq: {
    badge: "Συχνές ερωτήσεις",
    title: "Τι ρωτούν συχνότερα.",
    desc: "Οι πιο συχνές ερωτήσεις για την τοποθεσία, τις ώρες, τη γραμμή επειγόντων και τα ραντεβού.",
    items: [
      {
        q: "Πού βρίσκεται η κλινική;",
        a: "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, κέντρο Αδριανούπολης. Η είσοδος είναι στο επίπεδο του δρόμου στο ροζ κτίριο και υπάρχει στάθμευση στον δρόμο.",
      },
      {
        q: "Ποιες είναι οι ώρες σας; Ανοίγετε Κυριακή;",
        a: "Δευτέρα έως Σάββατο 09:30–19:30 και Κυριακή 12:00–17:00. Εκτός αυτών των ωρών απαντά η γραμμή επειγόντων.",
      },
      {
        q: "Η γραμμή επειγόντων λειτουργεί πραγματικά 24/7;",
        a: "Ναι. Μπορείτε να καλέσετε στο +90 541 325 76 82 οποιαδήποτε ώρα. Ο κτηνίατρος κάνει μια πρώτη εκτίμηση στο τηλέφωνο και σας λέει αν χρειάζεται να έρθετε.",
      },
      {
        q: "Χρειάζομαι ραντεβού;",
        a: "Δεν είναι υποχρεωτικό, αλλά βοηθά. Ένα τηλεφώνημα πριν μειώνει την αναμονή και δίνει στον κτηνίατρο περισσότερο χρόνο.",
      },
      {
        q: "Ποια ζώα δέχεστε;",
        a: "Η κλινική ασχολείται κυρίως με γάτες και σκύλους. Για άλλα είδη, καλέστε πρώτα.",
      },
      {
        q: "Πώς θα έρθω;",
        a: "Το κουμπί «Οδηγίες πρόσβασης» ξεκινά αμέσως πλοήγηση στους Χάρτες Google, και ο χάρτης στην επικοινωνία δείχνει την ακριβή τοποθεσία.",
      },
    ],
  },
  contact: {
    badge: "Επικοινωνία",
    title: "Επικοινωνήστε μαζί μας.",
    desc: "Καλέστε την κλινική, ξεκινήστε πλοήγηση ή βρείτε την ακριβή τοποθεσία στον χάρτη.",
    cardTitle: "Στοιχεία επικοινωνίας",
    addressLabel: "Διεύθυνση",
    addressFull:
      "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Αδριανούπολη, Τουρκία",
    phoneLabel: "Τηλέφωνο και γραμμή επειγόντων",
    phoneNote: "Απαντά και εκτός ωραρίου",
    hoursLabel: "Ώρες λειτουργίας",
    callCta: "Καλέστε τώρα",
    directionsCta: "Οδηγίες πρόσβασης",
    instagramCta: "Ακολουθήστε στο Instagram",
    mapTitle: "Τοποθεσία στον χάρτη",
    mapDesc:
      "Ο χάρτης φορτώνει από το Google. Πατήστε για φόρτωση, ώστε η σελίδα να ανοίγει χωρίς περιττά δεδομένα.",
    mapLoadCta: "Φόρτωση χάρτη",
    coordsLabel: "Συντεταγμένες",
    openInMaps: "Άνοιγμα στους Χάρτες Google",
  },
  footer: {
    tagline:
      "Κτηνιατρική κλινική στη συνοικία Şükrüpaşa της Αδριανούπολης, με εξετάσεις, εμβολιασμούς, χειρουργεία και επείγουσα εκτίμηση για γάτες και σκύλους.",
    navHeading: "Σελίδα",
    hoursHeading: "Ώρες λειτουργίας",
    contactHeading: "Επικοινωνία",
    emergencyNote: "Η γραμμή επειγόντων απαντά και εκτός αυτών των ωρών.",
    directionsCta: "Οδηγίες στους Χάρτες Google",
    rights: "Με την επιφύλαξη παντός δικαιώματος.",
    credit: "Κτηνίατρος Berk Canbaz · Αδριανούπολη",
  },
  mobile: { call: "Κλήση", directions: "Οδηγίες", emergency: "Επείγον" },
  hours: {
    weekdaysLabel: "Δευτέρα – Σάββατο",
    sundayLabel: "Κυριακή",
    shortLine: "Δευ–Σαβ {weekdays} · Κυρ {sunday}",
  },
};

export const copy: Record<Language, Copy> = { tr, en, bg, el };

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as string[]).includes(value);
}
