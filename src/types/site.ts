/**
 * Language-neutral shapes only. Anything a human reads lives in src/data/translations.ts
 * and is keyed by the ids declared here, so a new language can never leave a
 * half-translated page behind.
 */

export interface BusinessInfo {
  name: string;
  shortName: string;
  veterinarian: {
    name: string;
    handle: string;
    instagramUrl: string;
  };
  phone: {
    display: string;
    international: string;
    telLink: string;
    whatsAppLink: string;
  };
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    postalCode: string;
    country: string;
  };
  coordinates: { latitude: number; longitude: number };
  maps: { directionsUrl: string; searchUrl: string; embedUrl: string; reviewsUrl: string };
  hours: {
    weekdays: { opens: string; closes: string };
    sunday: { opens: string; closes: string };
  };
  social: { instagram: string; linktree: string };
}

/** Service ids double as translation keys. */
export type ServiceId =
  | "koruyucu-hekimlik"
  | "dahiliye"
  | "cerrahi"
  | "laboratuvar"
  | "goruntuleme"
  | "dis-sagligi"
  | "pet-bakim"
  | "acil";

export interface ServiceItem {
  id: ServiceId;
  iconName: string;
  featured?: boolean;
}

/** Gallery ids double as translation keys. */
export type GalleryId =
  | "dis-cephe"
  | "bekleme"
  | "reyon"
  | "muayene"
  | "muayene-dikey"
  | "muayene-masasi"
  | "ameliyathane"
  | "operasyon-detay"
  | "yatakli";

export interface GalleryImage {
  id: GalleryId;
  src: string;
  width: number;
  height: number;
  /** Wide tiles take two columns on large screens; tall tiles take two rows. */
  shape: "wide" | "tall" | "square";
}

export interface SocialImage {
  id: string;
  src: string;
}
