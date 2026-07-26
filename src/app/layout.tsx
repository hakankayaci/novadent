import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata } from "@/lib/metadata";
import {
  generateDentistCareSchema,
  serializeSchema,
} from "@/lib/structured-data";
import { LanguageProvider } from "@/lib/LanguageContext";

/**
 * Fira Sans supports latin, latin-ext, cyrillic, and greek for TR, BG, and EL.
 */
const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export const viewport: Viewport = {
  themeColor: "#021D45",
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
        <script type="application/ld+json">
          {serializeSchema(generateDentistCareSchema())}
        </script>
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-cyan-100 selection:text-navy-950">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
