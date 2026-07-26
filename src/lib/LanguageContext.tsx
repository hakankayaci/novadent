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

const STORAGE_KEY = "novadent_lang";

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
  * Language behaviour:
  * - Detect browser language on the first visit.
  * - Use Greek when the browser language begins with "el".
  * - Use Bulgarian when it begins with "bg".
  * - Otherwise use Turkish.
  * - Save the selected language in localStorage.
  */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored)) {
        setLangState(stored);
        return;
      }
    } catch {
      // Storage unavailable: fall through to browser detection
    }

    // Browser language negotiation
    if (typeof navigator !== "undefined" && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("el")) {
        setLangState("el");
      } else if (browserLang.startsWith("bg")) {
        setLangState("bg");
      } else {
        setLangState("tr");
      }
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
