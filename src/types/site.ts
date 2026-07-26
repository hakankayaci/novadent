/**
 * Language-neutral shapes only. Anything a human reads lives in src/data/translations.ts
 * and is keyed by the ids declared here, so a new language can never leave a
 * half-translated page behind.
 */

export interface BusinessInfo {
  name: string;
  shortName: string;
  category: string;
  rating: {
    score: number;
    reviewCount: number;
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
    saturday: { opens: string; closes: string };
    sunday: { closed: true };
  };
  social: { instagram: string };
}

/** Treatment ids double as translation keys. */
export type TreatmentId =
  | "implant-tedavisi"
  | "gulus-tasarimi"
  | "estetik-dis-hekimligi"
  | "dis-beyazlatma"
  | "kanal-tedavisi"
  | "dis-eti-tedavileri"
  | "cocuk-dis-hekimligi"
  | "genel-dis-sagligi";

export interface TreatmentItem {
  id: TreatmentId;
  iconName: string;
  featured?: boolean;
}

/** Gallery ids double as translation keys. */
export type GalleryId =
  | "novadent-reception"
  | "novadent-treatment-room"
  | "novadent-clinic-interior"
  | "novadent-dental-equipment";

export interface GalleryImage {
  id: GalleryId;
  src: string;
  width: number;
  height: number;
  shape: "wide" | "tall" | "square";
}

export interface SocialImage {
  id: string;
  src: string;
}
