import { BusinessInfo, ServiceItem, FAQItem, GalleryImage } from "@/types/site";

export const siteData: {
  business: BusinessInfo;
  services: ServiceItem[];
  faqs: FAQItem[];
  gallery: GalleryImage[];
} = {
  business: {
    name: "CanbazVet Veteriner Kliniği",
    shortName: "CanbazVet",
    tagline: "Dostunuzun sağlığı, güvenilir ellerde.",
    description:
      "CanbazVet Veteriner Kliniği, Veteriner Hekim Berk Canbaz'ın özenli ve şefkatli yaklaşımıyla kedi ve köpeklerin sağlık, koruyucu hekimlik ve acil değerlendirme süreçlerinde Edirne'de hizmet vermektedir.",
    veterinarian: {
      name: "Berk Canbaz",
      title: "Veteriner Hekim",
      handle: "@berkcanbaz22",
      instagramUrl: "https://www.instagram.com/berkcanbaz22/",
    },
    phone: {
      display: "0541 325 76 82",
      international: "+90 541 325 76 82",
      raw: "+905413257682",
      telLink: "tel:+905413257682",
      emergencyDisplay: "0541 325 76 82",
    },
    address: {
      street: "İlhami Ertem Caddesi, 136. Sokak No:8",
      neighborhood: "Şükrüpaşa Mahallesi",
      district: "Edirne Merkez",
      city: "Edirne",
      postalCode: "22100",
      fullAddress:
        "Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8, 22100 Edirne Merkez / Edirne",
      country: "TR",
    },
    coordinates: {
      latitude: 41.6657747,
      longitude: 26.584173,
    },
    maps: {
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=41.6657747,26.584173",
      searchUrl:
        "https://www.google.com/maps/search/?api=1&query=41.6657747,26.584173",
      embedUrl: "https://www.google.com/maps?q=41.6657747,26.584173&output=embed",
    },
    openingHours: {
      weekdays: "Pazartesi - Cumartesi: 09:30 – 19:30",
      sunday: "Pazar: 12:00 – 17:00",
      emergencyText: "7/24 Aktif Acil İletişim Hattı (Gelmeden önce arayınız)",
    },
    social: {
      instagram: "https://www.instagram.com/canbazvetedirne/",
      linktree: "https://linktr.ee/canbazvet",
    },
  },
  services: [
    {
      id: "koruyucu-hekimlik",
      title: "Koruyucu Hekimlik & Aşı",
      shortDesc: "Aşı takvimleri, parazit uygulamaları ve genel sağlık taramaları.",
      fullDesc:
        "Dostunuzun hastalıklara karşı koruyucu kalkanını oluşturuyoruz. Düzenli aşı takibi, iç-dış parazit uygulamaları ve periyodik sağlık taramaları ile muhtemel rahatsızlıkların önüne geçiyoruz.",
      iconName: "ShieldCheck",
      featured: true,
    },
    {
      id: "dahiliye",
      title: "Dahiliye Hizmetleri",
      shortDesc: "İç hastalıkları teşhis, takip ve medikal tedavi süreçleri.",
      fullDesc:
        "Sindirim, solunum, dolaşım ve metabolik sistem rahatsızlıklarında detaylı muayene ve bilimsel protokollere uygun dahiliye tedavisi sunulmaktadır.",
      iconName: "Stethoscope",
      featured: true,
    },
    {
      id: "cerrahi-operasyon",
      title: "Cerrahi Operasyonlar",
      shortDesc: "Steril ameliyathane ve anestezi takibinde operasyonel işlemler.",
      fullDesc:
        "Kısırlaştırma, yumuşak doku operasyonları ve acil cerrahi girişimler modern ameliyathane şartlarında ve güvenli anestezi protokolleriyle gerçekleştirilir.",
      iconName: "Activity",
      featured: true,
    },
    {
      id: "laboratuvar",
      title: "Laboratuvar İncelemeleri",
      shortDesc: "Kan sayımı, biyokimya ve mikroskopik tetkik olanakları.",
      fullDesc:
        "Klinik içi laboratuvar ekipmanları ile kan analizleri, idrar tetkikleri ve hızlı tanı kitleri sayesinde muayene esnasında net sonuçlar elde edilir.",
      iconName: "Microscope",
      featured: true,
    },
    {
      id: "goruntuleme",
      title: "Görüntüleme Hizmetleri",
      shortDesc: "Dijital röntgen ve ultrasonik değerlendirmeler.",
      fullDesc:
        "İskelet sistemi, organ yapısı ve iç doku incelemelerinde hızlı görüntüleme ile doğru teşhis desteklenir.",
      iconName: "Scan",
    },
    {
      id: "dis-sagligi",
      title: "Diş Sağlığı & Bakım",
      shortDesc: "Ağız ve diş temizliği, diş eti sağlığı kontrolleri.",
      fullDesc:
        "Plak ve tartar birikimlerinin temizlenmesi, ağız kokusu ve diş eti enfeksiyonlarının tedavisi hassasiyetle yürütülür.",
      iconName: "Sparkles",
    },
    {
      id: "pet-bakim-kuafor",
      title: "Pet Bakım & Tıraş",
      shortDesc: "Hijyenik tıraş, banyo ve tırnak bakımı işlemleri.",
      fullDesc:
        "Dostlarımızın tüy ve cilt yapısına uygun hijyenik bakım, tırnak kesimi ve medikal banyo uygulamaları.",
      iconName: "Scissors",
    },
    {
      id: "acil-yonlendirme",
      title: "7/24 Acil Hat & Yönlendirme",
      shortDesc: "Acil durumlarda telefonla ilk değerlendirme ve klinikte müdahale.",
      fullDesc:
        "Zehirlenme, travma veya ani gelişen rahatsızlıklarda acil telefon hattımız üzerinden hekimimizle iletişime geçebilirsiniz.",
      iconName: "PhoneCall",
      featured: true,
    },
  ],
  faqs: [
    {
      question: "CanbazVet Veteriner Kliniği nerede yer almaktadır?",
      answer:
        "Kliniğimiz Edirne Merkez'de, Şükrüpaşa Mahallesi, İlhami Ertem Caddesi, 136. Sokak No:8 adresindedir (Özel Pembe Bina girişi).",
    },
    {
      question: "Çalışma saatleriniz nedir? Pazar günü açık mısınız?",
      answer:
        "Evet. Kliniğimiz Pazartesi - Cumartesi günleri 09:30 - 19:30 saatleri arasında, Pazar günleri ise 12:00 - 17:00 saatleri arasında hizmet vermektedir.",
    },
    {
      question: "Acil durum hattı 7/24 aktif mi?",
      answer:
        "Evet. 0541 325 76 82 numaralı acil telefon hattımız 7/24 aktif olup acil vakalarda hekimimize ulaşabilirsiniz. Kliniğe gelmeden önce telefonla haber vermeniz tavsiye edilir.",
    },
    {
      question: "Muayene için önceden randevu almam gerekiyor mu?",
      answer:
        "Bekleme sürenizi en aza indirmek ve dostunuza daha fazla zaman ayırabilmemiz için gelmeden önce telefonla arayarak bilgi vermeniz önerilir.",
    },
    {
      question: "Kliniğinizde hangi hayvan türlerine bakılmaktadır?",
      answer:
        "Kliniğimiz ağırlıklı olarak kedi ve köpeklerin muayene, aşı, tedavi ve bakım süreçlerinde hizmet sunmaktadır.",
    },
    {
      question: "Kliniğe yol tarifini nasıl alabilirim?",
      answer:
        "Sayfamızda yer alan 'Yol Tarifi Al' butonuna tıklayarak Google Maps navigasyonunu doğrudan başlatabilirsiniz.",
    },
  ],
  gallery: [
    {
      src: "/images/clinic/canbazvet-dis-cephe-tabela.webp",
      alt: "CanbazVet Veteriner Kliniği Edirne dış cephe ve tabela görünümü",
      title: "Klinik Dış Cephe & Giriş",
      aspectRatio: "horizontal",
      category: "exterior",
    },
    {
      src: "/images/clinic/canbazvet-muayene-odasi.webp",
      alt: "CanbazVet Veteriner Kliniği modern muayene odası",
      title: "Muayene Odası",
      aspectRatio: "horizontal",
      category: "interior",
    },
    {
      src: "/images/clinic/canbazvet-ameliyathane-operasyon-odasi.webp",
      alt: "CanbazVet Veteriner Kliniği steril ameliyathane ve anestezi ünitesi",
      title: "Operasyon & Ameliyathane",
      aspectRatio: "horizontal",
      category: "surgery",
    },
    {
      src: "/images/clinic/canbazvet-bekleme-salonu.webp",
      alt: "CanbazVet Veteriner Kliniği ferah bekleme salonu",
      title: "Bekleme Salonu & Ürünler",
      aspectRatio: "horizontal",
      category: "interior",
    },
    {
      src: "/images/clinic/canbazvet-yatakli-hasta-unitesi.webp",
      alt: "CanbazVet yataklı hasta ve gözlem üniteleri",
      title: "Gözlem & Yataklı Ünite",
      aspectRatio: "vertical",
      category: "hospitalization",
    },
    {
      src: "/images/clinic/canbazvet-muayene-masasi-ve-ekipmanlar.webp",
      alt: "CanbazVet markalı muayene masası ve hijyenik alanlar",
      title: "Steril Muayene Alanı",
      aspectRatio: "horizontal",
      category: "interior",
    },
  ],
};
