import type { Metadata } from "next";
import { business } from "@/data/site";
import { copy, languages } from "@/data/translations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://canbazvet.vercel.app";

export function generateSiteMetadata(): Metadata {
  const { title, description, ogAlt } = copy.tr.meta;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${business.shortName}` },
    description,
    applicationName: business.name,
    keywords: [
      "Edirne veteriner",
      "Edirne veteriner kliniği",
      "Şükrüpaşa veteriner",
      "Edirne Merkez veteriner",
      "Edirne acil veteriner",
      "Berk Canbaz veteriner",
      "CanbazVet",
      "Edirne kedi veterineri",
      "Edirne köpek veterineri",
      "Edirne 7/24 veteriner",
    ],
    authors: [{ name: business.veterinarian.name, url: business.veterinarian.instagramUrl }],
    creator: business.name,
    publisher: business.name,
    formatDetection: { telephone: true, address: true, email: false },
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      alternateLocale: languages.filter((l) => l.code !== "tr").map((l) => l.ogLocale),
      url: siteUrl,
      title,
      description,
      siteName: business.name,
      images: [
        {
          url: "/images/og/canbazvet-og.jpg",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/canbazvet-og.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
