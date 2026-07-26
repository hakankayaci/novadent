"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { languages, Language } from "@/data/translations";
import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Dil seçimi"
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-teal-900/80 hover:bg-brand-teal-900 border border-brand-teal-700/40 text-white text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-lime-500 min-h-[38px] select-none"
      >
        <span className="text-base leading-none">{currentLangObj.flag}</span>
        <span className="uppercase tracking-wider">{currentLangObj.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-brand-lime-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-brand-teal-950 text-white shadow-2xl border border-brand-teal-800/60 z-50 py-2 animate-fade-up">
          <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-teal-100/60 border-b border-brand-teal-800/40 mb-1 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-brand-lime-500" />
            <span>Select Language</span>
          </div>

          {languages.map((l) => {
            const isSelected = l.code === lang;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-left transition-colors hover:bg-brand-teal-900 ${
                  isSelected ? "bg-brand-teal-900/90 text-brand-lime-400 font-bold" : "text-brand-teal-100/90"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{l.flag}</span>
                  <span>{l.nativeName}</span>
                </div>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-lime-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
