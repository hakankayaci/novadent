import type { Metadata, Viewport } from "next";
import { Commissioner } from "next/font/google";
import "@/app/globals.css";
import { getCopy } from "@/data/content";
import { business } from "@/data/site";
import {
  languageByCode,
  languages,
  localeRoots,
} from "@/lib/i18n";
import { siteUrl } from "@/lib/site-url";
import { resolveRouteLanguage } from "@/lib/route-locale";
import {
  generateDentistSchema,
  serializeSchema,
} from "@/lib/structured-data";

const commissioner = Commissioner({
  subsets: ["latin", "latin-ext", "greek", "cyrillic"],
  display: "swap",
  variable: "--font-commissioner",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F6F1",
  colorScheme: "light",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale?: string[] }>;
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  const language = resolveRouteLanguage(locale);
  const copy = getCopy(language);
  const languageOption = languageByCode[language];
  const route = localeRoots[language];
  const canonical = `${siteUrl}${route === "/" ? "" : route}`;
  const languageAlternates = Object.fromEntries(
    languages.map((option) => [
      option.htmlLang,
      `${siteUrl}${option.href === "/" ? "" : option.href}`,
    ]),
  );

  return {
    metadataBase: new URL(siteUrl),
    title: copy.metadata.title,
    description: copy.metadata.description,
    applicationName: business.name,
    authors: [{ name: business.name, url: siteUrl }],
    creator: business.name,
    publisher: business.name,
    formatDetection: { telephone: true, address: true, email: false },
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": siteUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: languageOption.ogLocale,
      alternateLocale: languages
        .filter((option) => option.code !== language)
        .map((option) => option.ogLocale),
      url: canonical,
      title: copy.metadata.title,
      description: copy.metadata.description,
      siteName: business.name,
      images: [
        {
          url: "/images/og/novadent-og.jpg",
          width: 1200,
          height: 630,
          alt: copy.metadata.ogAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: ["/images/og/novadent-og.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
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

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const language = resolveRouteLanguage(locale);
  const copy = getCopy(language);
  const schema = generateDentistSchema(language, copy);

  return (
    <html lang={language} className={commissioner.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
