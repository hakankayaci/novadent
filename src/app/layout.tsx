import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@/lib/metadata";
import {
  generateVeterinaryCareSchema,
  serializeSchema,
} from "@/lib/structured-data";
import { LanguageProvider } from "@/lib/LanguageContext";

/**
 * Fira Sans, not a Latin-only face: the site ships Turkish, Bulgarian and Greek, so the
 * body font has to carry latin-ext (ı İ ğ ş), Cyrillic and Greek. The previous font had
 * neither Cyrillic nor Greek, which silently dropped the BG and EL copy onto whatever
 * system fallback the visitor happened to have.
 */
const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export const viewport: Viewport = {
  themeColor: "#04231A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={firaSans.variable}>
      <head>
        {/*
          Rendered as a plain text child, not injected at runtime, so the structured data
          is present in the prerendered HTML that crawlers read. serializeSchema escapes
          <, > and & to \u form, which both keeps the JSON intact through React's text
          escaping and makes a `</script>` breakout impossible.
        */}
        <script type="application/ld+json">
          {serializeSchema(generateVeterinaryCareSchema())}
        </script>
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-leaf-300 selection:text-pine-950">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
