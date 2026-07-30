import { HomePage } from "@/components/site/HomePage";
import { getCopy } from "@/data/content";
import { resolveRouteLanguage } from "@/lib/route-locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { locale: [] },
    { locale: ["en"] },
    { locale: ["el"] },
    { locale: ["bg"] },
  ];
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale?: string[] }>;
}) {
  const { locale } = await params;
  const language = resolveRouteLanguage(locale);

  return <HomePage language={language} copy={getCopy(language)} />;
}
