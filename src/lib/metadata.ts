import { Metadata } from "next";
import { siteData } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://canbazvet.vercel.app";

export function generateSiteMetadata(): Metadata {
  const title = "CanbazVet Veteriner Kliniği | Edirne Veteriner";
  const description =
    "CanbazVet Veteriner Kliniği, Veteriner Hekim Berk Canbaz liderliğinde Edirne'de kedi ve köpeklerin muayene, aşı, cerrahi ve acil değerlendirme süreçlerinde hizmet verir. 7/24 Aktif Acil Hat: 0541 325 76 82";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | CanbazVet Veteriner Kliniği",
    },
    description: description,
    keywords: [
      "Edirne veteriner",
      "Edirne veteriner kliniği",
      "Şükrüpaşa veteriner",
      "Edirne Merkez veteriner",
      "Edirne acil veteriner hattı",
      "Berk Canbaz veteriner",
      "CanbazVet",
      "CanbazVet Veteriner Kliniği",
      "Edirne kedi veterineri",
      "Edirne köpek veterineri",
    ],
    authors: [{ name: siteData.business.veterinarian.name }],
    creator: siteData.business.name,
    publisher: siteData.business.name,
    formatDetection: {
      telephone: true,
      address: true,
      email: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: siteUrl,
      title: title,
      description: description,
      siteName: siteData.business.name,
      images: [
        {
          url: `${siteUrl}/images/og/canbazvet-og.jpg`,
          width: 1200,
          height: 630,
          alt: "CanbazVet Veteriner Kliniği Edirne",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`${siteUrl}/images/og/canbazvet-og.jpg`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png" }],
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
