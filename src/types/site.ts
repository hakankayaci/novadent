import type { Language } from "@/lib/i18n";

export type { Language };

export interface ClinicRating {
  value: number;
  count: number;
  checkedAt: `${number}-${number}-${number}`;
  sourceUrl: string;
}

export interface FeaturedReview {
  id: string;
  author: string;
  rating: 5;
  originalLanguage: "tr" | "en";
  originalText: string;
  translations: Record<Language, string>;
}

export interface ClinicImage {
  id:
    | "logo-wall"
    | "lounge"
    | "dental-unit"
    | "chair"
    | "scanner"
    | "room-a"
    | "room-b";
  src: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  phone: {
    display: string;
    international: string;
    tel: string;
    whatsapp: string;
  };
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    postalCode: string;
    country: "TR";
  };
  coordinates: { latitude: number; longitude: number };
  hours: {
    weekdays: { opens: string; closes: string };
    saturday: { opens: string; closes: string };
    sunday: { closed: true };
  };
  maps: {
    directions: string;
    search: string;
    embed: string;
    reviews: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  rating: ClinicRating;
}
