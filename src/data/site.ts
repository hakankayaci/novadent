import type {
  BusinessInfo,
  GalleryImage,
  SocialImage,
  TreatmentItem,
} from "@/types/site";

// Query-based location search URL for Novadent Ağız ve Diş Sağlığı Polikliniği Edirne
const MAPS_QUERY = "NOVADENT+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi+Edirne+Fatih+Mahallesi+Tahsin+%C5%9Eipka+Caddesi+No+14+1";
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAPS_SEARCH = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&hl=tr&z=17&output=embed`;

export const business: BusinessInfo = {
  name: "NOVADENT Ağız ve Diş Sağlığı Polikliniği",
  shortName: "Novadent",
  category: "Diş Kliniği / Ağız ve Diş Sağlığı Polikliniği",
  rating: {
    score: 5.0,
    reviewCount: 140,
  },
  phone: {
    display: "0501 130 15 22",
    international: "+90 501 130 15 22",
    telLink: "tel:+905011301522",
    whatsAppLink: "https://wa.me/905011301522",
  },
  address: {
    street: "Tahsin Şipka Caddesi No:14/1, İç Kapı No:10",
    neighborhood: "Fatih Mahallesi",
    district: "Edirne Merkez",
    city: "Edirne",
    postalCode: "22100",
    country: "TR",
  },
  coordinates: { latitude: 41.6658, longitude: 26.5842 },
  maps: {
    directionsUrl: "https://goo.gl/maps/nBrrpDStQkA4wGX16",
    searchUrl: MAPS_SEARCH,
    embedUrl: MAPS_EMBED,
    reviewsUrl: "https://goo.gl/maps/nBrrpDStQkA4wGX16",
  },
  hours: {
    weekdays: { opens: "09:00", closes: "18:30" },
    saturday: { opens: "09:00", closes: "17:00" },
    sunday: { closed: true },
  },
  social: {
    instagram: "https://www.instagram.com/novadentclinicsedirne/",
    facebook: "https://www.facebook.com/novadentclinics",
    linktree: "https://linktr.ee/novadentclinics",
  },
  branches: [
    {
      id: "edirne",
      name: "Novadent Edirne Şubesi",
      city: "Edirne",
      address: "Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1, İç Kapı No:10, Edirne Merkez",
      mapsUrl: "https://goo.gl/maps/nBrrpDStQkA4wGX16",
      phone: "0501 130 15 22",
    },
    {
      id: "tekirdag",
      name: "Novadent Tekirdağ Şubesi",
      city: "Tekirdağ",
      address: "Tekirdağ Şubemiz",
      mapsUrl: "https://goo.gl/maps/h2UH14UTeyYzG1pv9",
      phone: "0501 130 15 22",
    },
  ],
};

export const treatments: TreatmentItem[] = [
  { id: "implant-tedavisi", iconName: "Sparkles", featured: true },
  { id: "gulus-tasarimi", iconName: "Smile", featured: true },
  { id: "estetik-dis-hekimligi", iconName: "HeartPulse", featured: true },
  { id: "dis-beyazlatma", iconName: "Sun", featured: true },
  { id: "kanal-tedavisi", iconName: "ShieldCheck", featured: true },
  { id: "dis-eti-tedavileri", iconName: "Activity", featured: true },
  { id: "cocuk-dis-hekimligi", iconName: "UserCheck", featured: true },
  { id: "genel-dis-sagligi", iconName: "Stethoscope", featured: true },
];

export const gallery: GalleryImage[] = [
  { id: "novadent-reception", src: "/images/clinic/novadent-reception.webp", width: 866, height: 1020, shape: "wide" },
  { id: "novadent-treatment-room", src: "/images/clinic/novadent-treatment.webp", width: 1020, height: 1020, shape: "square" },
  { id: "novadent-clinic-interior", src: "/images/clinic/novadent-clinic.webp", width: 866, height: 1020, shape: "wide" },
  { id: "novadent-dental-equipment", src: "/images/clinic/novadent-equipment.webp", width: 1020, height: 1020, shape: "square" },
];

export const socialImages: SocialImage[] = [
  { id: "novadent-hero-social", src: "/images/social/novadent-clinic.webp" },
  { id: "novadent-reception-social", src: "/images/social/novadent-reception.webp" },
  { id: "novadent-treatment-social", src: "/images/social/novadent-treatment.webp" },
  { id: "novadent-equipment-social", src: "/images/social/novadent-equipment.webp" },
];

export const NAV_SECTIONS = [
  "anasayfa",
  "tedaviler",
  "neden-novadent",
  "uluslararasi",
  "galeri",
  "degerlendirmeler",
  "randevu-sureci",
  "sss",
  "iletisim",
] as const;

export const siteData = { business, treatments, gallery, socialImages };
