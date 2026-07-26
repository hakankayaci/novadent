export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  veterinarian: {
    name: string;
    title: string;
    handle: string;
    instagramUrl: string;
  };
  phone: {
    display: string;
    international: string;
    raw: string;
    telLink: string;
    emergencyDisplay: string;
  };
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    postalCode: string;
    fullAddress: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  maps: {
    directionsUrl: string;
    searchUrl: string;
    embedUrl: string;
  };
  openingHours: {
    weekdays: string;
    sunday: string;
    emergencyText: string;
  };
  social: {
    instagram: string;
    linktree: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  aspectRatio: "horizontal" | "vertical" | "square";
  category: "exterior" | "interior" | "surgery" | "hospitalization";
}
