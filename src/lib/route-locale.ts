import { notFound } from "next/navigation";
import { isLanguage, type Language } from "@/lib/i18n";

export function resolveRouteLanguage(locale?: string[]): Language {
  if (!locale || locale.length === 0) return "tr";
  if (locale.length === 1 && isLanguage(locale[0]) && locale[0] !== "tr") {
    return locale[0];
  }
  notFound();
}
