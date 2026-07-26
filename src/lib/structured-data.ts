import { business } from "@/data/site";
import { copy } from "@/data/translations";
import { siteUrl } from "@/lib/site-url";

export function serializeSchema(schema: unknown): string {
  return JSON.stringify(schema).replace(
    /[<>&]/g,
    (ch) => "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0"),
  );
}

/**
 * Schema.org Dentist / LocalBusiness Schema for NOVADENT Ağız ve Diş Sağlığı Polikliniği Edirne.
 */
export function generateDentistCareSchema() {
  const { address, coordinates, hours, maps, phone, social, rating } = business;

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: business.name,
    alternateName: business.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/brand/novadent-logo.png`,
    image: [
      `${siteUrl}/images/og/novadent-og.jpg`,
      `${siteUrl}/images/clinic/novadent-clinic.webp`,
    ],
    description: copy.tr.footer.tagline,
    telephone: phone.international,
    inLanguage: ["tr", "el", "bg"],
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
    hasMap: maps.searchUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(rating.score),
      reviewCount: String(rating.reviewCount),
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
    availableService: Object.values(copy.tr.treatments.items).map((treatment) => ({
      "@type": "MedicalProcedure",
      name: treatment.title,
      description: treatment.short,
    })),
    sameAs: [social.instagram],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Edirne" },
      { "@type": "AdministrativeArea", name: "Edirne Merkez" },
      { "@type": "AdministrativeArea", name: "Fatih Mahallesi" },
    ],
  };
}
