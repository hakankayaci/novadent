export const LANGUAGES = ["tr", "en", "el", "bg"] as const;

export type Language = (typeof LANGUAGES)[number];
export type FlagId = "TR" | "GB" | "GR" | "BG";
export type LocaleRoot = "/" | "/en" | "/el" | "/bg";

export interface LanguageOption {
  code: Language;
  shortLabel: "TR" | "EN" | "EL" | "BG";
  nativeName: string;
  flagId: FlagId;
  htmlLang: Language;
  ogLocale: "tr_TR" | "en_GB" | "el_GR" | "bg_BG";
  href: LocaleRoot;
}

export const DEFAULT_LANGUAGE: Language = "tr";

export const languages = [
  {
    code: "tr",
    shortLabel: "TR",
    nativeName: "Türkçe",
    flagId: "TR",
    htmlLang: "tr",
    ogLocale: "tr_TR",
    href: "/",
  },
  {
    code: "en",
    shortLabel: "EN",
    nativeName: "English",
    flagId: "GB",
    htmlLang: "en",
    ogLocale: "en_GB",
    href: "/en",
  },
  {
    code: "el",
    shortLabel: "EL",
    nativeName: "Ελληνικά",
    flagId: "GR",
    htmlLang: "el",
    ogLocale: "el_GR",
    href: "/el",
  },
  {
    code: "bg",
    shortLabel: "BG",
    nativeName: "Български",
    flagId: "BG",
    htmlLang: "bg",
    ogLocale: "bg_BG",
    href: "/bg",
  },
] as const satisfies readonly LanguageOption[];

export const languageByCode: Readonly<Record<Language, LanguageOption>> =
  Object.fromEntries(languages.map((language) => [language.code, language])) as Record<
    Language,
    LanguageOption
  >;

export const localeRoots: Readonly<Record<Language, LocaleRoot>> = {
  tr: "/",
  en: "/en",
  el: "/el",
  bg: "/bg",
};

export function isLanguage(value: string | null | undefined): value is Language {
  return LANGUAGES.includes(value as Language);
}

/**
 * Resolves the language from the first URL segment.
 * Turkish is always the fallback; browser-language detection is intentionally absent.
 */
export function languageFromPathname(pathname: string): Language {
  const [firstSegment = ""] = pathname.split(/[?#]/, 1)[0].split("/").filter(Boolean);
  return firstSegment === "en" || firstSegment === "el" || firstSegment === "bg"
    ? firstSegment
    : DEFAULT_LANGUAGE;
}

function splitPathSuffix(value: string): { pathname: string; suffix: string } {
  const suffixIndex = value.search(/[?#]/);
  if (suffixIndex === -1) {
    return { pathname: value, suffix: "" };
  }

  return {
    pathname: value.slice(0, suffixIndex),
    suffix: value.slice(suffixIndex),
  };
}

function stripLanguagePrefix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);

  if (segments[0] === "tr" || segments[0] === "en" || segments[0] === "el" || segments[0] === "bg") {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

/**
 * Moves a path between locale roots while preserving any query string and hash.
 * The default Turkish locale intentionally has no `/tr` prefix.
 */
export function localizePath(path: string, language: Language): string {
  const { pathname, suffix } = splitPathSuffix(path || "/");
  const neutralPath = stripLanguagePrefix(pathname || "/");
  const localeRoot = localeRoots[language];

  const localizedPath =
    localeRoot === "/"
      ? neutralPath
      : neutralPath === "/"
        ? localeRoot
        : `${localeRoot}${neutralPath}`;

  return `${localizedPath}${suffix}`;
}

export function localeHref(language: Language, hash?: string): string {
  if (!hash) {
    return localeRoots[language];
  }

  const normalizedHash = hash.startsWith("#") ? hash : `#${hash}`;
  return `${localeRoots[language]}${normalizedHash}`;
}

export function localizedAlternates(path = "/"): Record<Language, string> {
  return {
    tr: localizePath(path, "tr"),
    en: localizePath(path, "en"),
    el: localizePath(path, "el"),
    bg: localizePath(path, "bg"),
  };
}
