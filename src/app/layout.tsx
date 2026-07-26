import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@/lib/metadata";
import { generateVeterinaryCareSchema } from "@/lib/structured-data";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export const viewport: Viewport = {
  themeColor: "#00352C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateVeterinaryCareSchema();

  return (
    <html lang="tr" className={`${jakartaSans.variable} scroll-smooth`}>
      <head>

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-text-primary bg-brand-surface-50 min-h-screen flex flex-col selection:bg-brand-lime-500 selection:text-brand-teal-950">
        {children}
      </body>
    </html>
  );
}
