import { business } from "@/data/site";
import { copy } from "@/data/translations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://canbazvet.vercel.app";

/**
 * Serialises the schema for embedding directly in a <script> element's text child.
 *
 * `<`, `>` and `&` are rewritten as JSON \u escapes. The result is still valid JSON, and
 * it buys two things:
 *
 *  - the payload can never terminate the script element, so there is no `</script>`
 *    breakout and no raw-HTML injection path at all;
 *  - React's text escaping has nothing left to rewrite. Without this, the `&` in the
 *    Google Maps query strings would be emitted as `&amp;` and the JSON-LD would be
 *    invalid.
 *
 * A next/script inline payload is not a substitute: it is only attached once client JS
 * runs, so it never appears in the prerendered HTML that crawlers read.
 */
export function serializeSchema(schema: unknown): string {
  return JSON.stringify(schema).replace(
    /[<>&]/g,
    (ch) => "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0"),
  );
}

/**
 * Schema.org VeterinaryCare.
 *
 * Deliberately publishes no `aggregateRating` or `review`: the clinic's ratings live on
 * Google and are not verifiable from this codebase, and self-serving review markup is
 * both a Google structured-data violation and misleading in search results.
 */
export function generateVeterinaryCareSchema() {
  const { address, coordinates, hours, maps, phone, social, veterinarian } = business;

  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${siteUrl}/#clinic`,
    name: business.name,
    alternateName: business.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/brand/canbazvet-logo.png`,
    image: [
      `${siteUrl}/images/og/canbazvet-og.jpg`,
      `${siteUrl}/images/clinic/canbazvet-dis-cephe-tabela.webp`,
    ],
    description: copy.tr.footer.tagline,
    telephone: phone.international,
    inLanguage: ["tr", "en", "bg", "el"],
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
    employee: {
      "@type": "Person",
      name: veterinarian.name,
      jobTitle: copy.tr.hero.cardRole,
      sameAs: veterinarian.instagramUrl,
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
          "Saturday",
        ],
        opens: hours.weekdays.opens,
        closes: hours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: hours.sunday.opens,
        closes: hours.sunday.closes,
      },
    ],
    availableService: Object.values(copy.tr.services.items).map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      description: service.short,
    })),
    sameAs: [social.instagram, social.linktree, veterinarian.instagramUrl],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Edirne" },
      { "@type": "AdministrativeArea", name: "Edirne Merkez" },
      { "@type": "AdministrativeArea", name: "Şükrüpaşa" },
    ],
  };
}
