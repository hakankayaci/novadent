"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  copy,
  isLanguage,
  languages,
  type Copy,
  type Language,
} from "@/data/translations";

const STORAGE_KEY = "canbazvet_lang";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  /** The full, fully-typed copy object for the active language. */
  c: Copy;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  setLang: () => {},
  c: copy.tr,
});

/**
 * Turkish is the default and only an explicit, previously-saved choice overrides it.
 *
 * Deliberately no `navigator.language` negotiation: this is a neighbourhood clinic in
 * Edirne whose visitors are overwhelmingly Turkish, and a great many of them run their
 * phone or browser in English. Auto-switching on browser locale would have served those
 * local visitors an English page they never asked for. The language button in the header
 * is the affordance instead, and the choice sticks.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored) && stored !== "tr") setLangState(stored);
    } catch {
      // Private mode or blocked storage: stay on the Turkish default.
    }
  }, []);

  // Keep <html lang> truthful: it drives screen-reader pronunciation and hyphenation.
  useEffect(() => {
    const option = languages.find((l) => l.code === lang);
    if (option) document.documentElement.lang = option.htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting is a convenience, not a requirement.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, c: copy[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
