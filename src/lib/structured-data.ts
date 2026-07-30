import type { Copy } from "@/data/content";
import { business } from "@/data/site";
import type { Language } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-url";

export function serializeSchema(schema: unknown): string {
  return JSON.stringify(schema).replace(
    /[<>&]/g,
    (character) =>
      `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

export function generateDentistSchema(language: Language, copy: Copy) {
  const { address, coordinates, hours, maps, phone, social, rating } = business;

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: business.name,
    alternateName: business.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/novadent/brand/logo-lockup-navy.png`,
    image: [
      `${siteUrl}/images/og/novadent-og.jpg`,
      `${siteUrl}/images/novadent/clinic/lounge.webp`,
      `${siteUrl}/images/novadent/clinic/chair.webp`,
    ],
    description: copy.metadata.description,
    telephone: phone.international,
    inLanguage: ["tr", "en", "el", "bg"],
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.neighborhood}, ${address.street}`,
      addressLocality: address.district,
      addressRegion: address.city,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
    hasMap: maps.search,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(rating.value),
      ratingCount: String(rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: hours.weekdays.opens,
        closes: hours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: hours.saturday.opens,
        closes: hours.saturday.closes,
      },
    ],
    availableService: Object.values(copy.treatments.items).map((treatment) => ({
      "@type": "MedicalProcedure",
      name: treatment.title,
      description: treatment.summary,
    })),
    sameAs: [social.instagram],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Edirne" },
      { "@type": "Country", name: "Türkiye" },
    ],
    identifier: language,
  };
}
