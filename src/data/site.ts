import type {
  BusinessInfo,
  ClinicImage,
} from "@/types/site";
import { clinicRating, GOOGLE_REVIEWS_URL } from "@/data/content";

const MAPS_QUERY =
  "NOVADENT+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi+Edirne+Fatih+Mahallesi+Tahsin+%C5%9Eipka+Caddesi+No+14+1";

export const googleReviewsUrl = GOOGLE_REVIEWS_URL;

export const otherBranch = {
  name: "Tekirdağ Diş Hekimi Ahmet Fatih Ergün",
  mapsUrl:
    "https://www.google.com/maps/place/Tekirda%C4%9F+Di%C5%9F+Hekimi+Ahmet+Fatih+Erg%C3%BCn/@41.0935087,26.4434673,9z/data=!4m6!3m5!1s0x14b4f553ea8584eb:0x8ed21bcfb97ff07b!8m2!3d40.9836546!4d27.5695212!16s%2Fg%2F11h18w4y_c?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  websiteUrl: "https://www.afatihergun.com/",
} as const;

export const business: BusinessInfo = {
  name: "NOVADENT Ağız ve Diş Sağlığı Polikliniği",
  shortName: "NOVADENT",
  phone: {
    display: "0501 130 15 22",
    international: "+90 501 130 15 22",
    tel: "tel:+905011301522",
    whatsapp: "https://wa.me/905011301522",
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
  hours: {
    weekdays: { opens: "09:00", closes: "18:30" },
    saturday: { opens: "09:00", closes: "17:00" },
    sunday: { closed: true },
  },
  maps: {
    directions: `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`,
    search: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    embed: `https://www.google.com/maps?q=${MAPS_QUERY}&hl=tr&z=17&output=embed`,
    reviews: googleReviewsUrl,
  },
  social: {
    instagram: "https://www.instagram.com/novadentclinicsedirne/",
    facebook: "https://www.facebook.com/novadentclinics",
  },
  rating: clinicRating,
};

export const clinicImages: ClinicImage[] = [
  {
    id: "logo-wall",
    src: "/images/novadent/clinic/logo-wall.webp",
    width: 1020,
    height: 1020,
    featured: true,
  },
  {
    id: "lounge",
    src: "/images/novadent/clinic/lounge.webp",
    width: 1020,
    height: 1020,
    featured: true,
  },
  {
    id: "dental-unit",
    src: "/images/novadent/clinic/dental-unit.webp",
    width: 1020,
    height: 1020,
    featured: true,
  },
  {
    id: "chair",
    src: "/images/novadent/clinic/chair.webp",
    width: 1020,
    height: 1020,
  },
  {
    id: "scanner",
    src: "/images/novadent/clinic/scanner.webp",
    width: 1020,
    height: 1020,
  },
  {
    id: "room-a",
    src: "/images/novadent/clinic/room-a.webp",
    width: 512,
    height: 384,
  },
  {
    id: "room-b",
    src: "/images/novadent/clinic/room-b.webp",
    width: 512,
    height: 384,
  },
];

export const instagramImages = clinicImages.slice(0, 6);
