import type {
  BusinessInfo,
  GalleryImage,
  ServiceItem,
  SocialImage,
} from "@/types/site";

const LAT = 41.6657747;
const LNG = 26.584173;

export const business: BusinessInfo = {
  name: "CanbazVet Veteriner Kliniği",
  shortName: "CanbazVet",
  veterinarian: {
    name: "Berk Canbaz",
    handle: "@berkcanbaz22",
    instagramUrl: "https://www.instagram.com/berkcanbaz22/",
  },
  phone: {
    display: "0541 325 76 82",
    international: "+90 541 325 76 82",
    telLink: "tel:+905413257682",
    whatsAppLink: "https://wa.me/905413257682",
  },
  address: {
    street: "İlhami Ertem Caddesi, 136. Sokak No:8",
    neighborhood: "Şükrüpaşa Mahallesi",
    district: "Edirne Merkez",
    city: "Edirne",
    postalCode: "22100",
    country: "TR",
  },
  coordinates: { latitude: LAT, longitude: LNG },
  maps: {
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`,
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
    embedUrl: `https://www.google.com/maps?q=${LAT},${LNG}&hl=tr&z=17&output=embed`,
    reviewsUrl:
      process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ||
      `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
  },
  hours: {
    weekdays: { opens: "09:30", closes: "19:30" },
    sunday: { opens: "12:00", closes: "17:00" },
  },
  social: {
    instagram: "https://www.instagram.com/canbazvetedirne/",
    linktree: "https://linktr.ee/canbazvet",
  },
};

export const services: ServiceItem[] = [
  { id: "koruyucu-hekimlik", iconName: "ShieldCheck", featured: true },
  { id: "dahiliye", iconName: "Stethoscope", featured: true },
  { id: "cerrahi", iconName: "Activity", featured: true },
  { id: "acil", iconName: "PhoneCall", featured: true },
  { id: "laboratuvar", iconName: "Microscope" },
  { id: "goruntuleme", iconName: "Scan" },
  { id: "dis-sagligi", iconName: "Sparkles" },
  { id: "pet-bakim", iconName: "Scissors" },
];

/**
 * Ordered as a visit unfolds: the door, the waiting room, the shop, consultation,
 * diagnostics, surgery, then recovery. Sizes are the real intrinsic pixel dimensions
 * so next/image never has to guess an aspect ratio.
 */
export const gallery: GalleryImage[] = [
  { id: "dis-cephe", src: "/images/clinic/canbazvet-dis-cephe-tabela.webp", width: 1360, height: 1020, shape: "wide" },
  { id: "bekleme", src: "/images/clinic/canbazvet-bekleme-alani-ve-resepsiyon.webp", width: 1360, height: 1020, shape: "square" },
  { id: "yatakli", src: "/images/clinic/canbazvet-yatakli-hasta-unitesi.webp", width: 910, height: 1020, shape: "tall" },
  { id: "muayene", src: "/images/clinic/canbazvet-muayene-odasi.webp", width: 1360, height: 1020, shape: "square" },
  { id: "muayene-masasi", src: "/images/clinic/canbazvet-muayene-masasi-ve-ekipmanlar.webp", width: 1360, height: 1020, shape: "square" },
  { id: "ameliyathane", src: "/images/clinic/canbazvet-ameliyathane.webp", width: 1360, height: 1020, shape: "wide" },
  { id: "operasyon-detay", src: "/images/clinic/canbazvet-operasyon-masasi-detay.webp", width: 1360, height: 1020, shape: "square" },
  { id: "reyon", src: "/images/clinic/canbazvet-mama-ve-urun-reyonu.webp", width: 1360, height: 1020, shape: "square" },
  { id: "muayene-dikey", src: "/images/clinic/canbazvet-muayene-odasi-dikey.webp", width: 765, height: 1020, shape: "square" },
];

/** Real clinic photography used for the Instagram strip. No invented engagement data. */
export const socialImages: SocialImage[] = [
  { id: "hekim-ve-klinik", src: "/images/social/canbazvet-hekim-ve-klinik.webp" },
  { id: "muayene-odasi", src: "/images/social/canbazvet-muayene-odasi.webp" },
  { id: "ameliyathane", src: "/images/social/canbazvet-ameliyathane.webp" },
  { id: "yatakli-hasta-unitesi", src: "/images/social/canbazvet-yatakli-hasta-unitesi.webp" },
  { id: "bekleme-alani", src: "/images/social/canbazvet-bekleme-alani.webp" },
  { id: "klinik-girisi", src: "/images/social/canbazvet-klinik-girisi.webp" },
];

export const NAV_SECTIONS = [
  "anasayfa",
  "hizmetler",
  "hakkimizda",
  "veteriner-hekim",
  "klinik",
  "acil-hat",
  "yorumlar",
  "sss",
  "iletisim",
] as const;

/** Kept as a namespace export so existing `siteData.business.…` call sites still read well. */
export const siteData = { business, services, gallery, socialImages };
