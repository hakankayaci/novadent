import { siteData } from "@/data/site";

export function generateVeterinaryCareSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://canbazvet.vercel.app";

  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${siteUrl}/#veterinarycare`,
    name: siteData.business.name,
    alternateName: siteData.business.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/brand/canbazvet-logo-horizontal.svg`,
    image: `${siteUrl}/images/og/canbazvet-og.jpg`,
    description: siteData.business.description,
    telephone: siteData.business.phone.international,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.business.address.street,
      addressLocality: siteData.business.address.district,
      addressRegion: siteData.business.address.city,
      postalCode: siteData.business.address.postalCode,
      addressCountry: siteData.business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteData.business.coordinates.latitude,
      longitude: siteData.business.coordinates.longitude,
    },
    hasMap: siteData.business.maps.directionsUrl,
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
        opens: "09:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      siteData.business.social.instagram,
      siteData.business.social.linktree,
      siteData.business.veterinarian.instagramUrl,
      siteData.business.maps.searchUrl,
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Edirne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Edirne Merkez",
      },
      {
        "@type": "AdministrativeArea",
        name: "Şükrüpaşa Mahallesi",
      },
    ],
    priceRange: "$$",
  };
}
