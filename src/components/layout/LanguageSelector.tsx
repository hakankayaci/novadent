"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { languages, type Language } from "@/data/translations";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * No flag emoji, for two reasons.
 *
 * 1. It was a visible bug: Windows ships no glyphs for regional-indicator pairs, so
 *    Chrome fell back to rendering the letters "TR" beside the language code, and the
 *    button read "TR TR".
 * 2. Flags are countries, not languages. The language code plus the endonym is
 *    unambiguous and renders identically everywhere.
 */
export function LanguageSelector({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang, c } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const current = languages.find((l) => l.code === lang) ?? languages[0];
  const dark = tone === "dark";

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Move focus into the menu so the keyboard path works without a mouse.
  useEffect(() => {
    if (open) {
      const index = languages.findIndex((l) => l.code === lang);
      itemRefs.current[Math.max(0, index)]?.focus();
    }
  }, [open, lang]);

  const moveFocus = (from: number, delta: number) => {
    const next = (from + delta + languages.length) % languages.length;
    itemRefs.current[next]?.focus();
  };

  const choose = (code: Language) => {
    setLang(code);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${c.a11y.langPicker} — ${current.nativeName}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className={`flex min-h-[44px] items-center gap-2 rounded-xl px-3 text-body-sm font-semibold transition-colors duration-200 ${
          dark
            ? "border border-white/15 bg-white/10 text-white hover:bg-white/16"
            : "border border-pine-700/15 bg-white text-pine-800 hover:border-pine-700/30 hover:bg-pine-50"
        }`}
      >
        <Languages className={`h-4 w-4 shrink-0 ${dark ? "text-leaf-300" : "text-pine-600"}`} aria-hidden />
        <span className="uppercase tracking-wide">{current.code}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={c.a11y.langHeading}
          className="absolute right-0 z-drawer mt-2 w-52 origin-top-right animate-scale-in overflow-hidden rounded-2xl border border-pine-700/10 bg-white p-1.5 shadow-panel"
        >
          {languages.map((option, index) => {
            const selected = option.code === lang;
            return (
              <button
                key={option.code}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                lang={option.htmlLang}
                onClick={() => choose(option.code)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveFocus(index, 1);
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveFocus(index, -1);
                  }
                }}
                className={`flex w-full min-h-[44px] items-center justify-between gap-3 rounded-xl px-3 text-left text-body-sm transition-colors duration-150 ${
                  selected
                    ? "bg-pine-50 font-semibold text-pine-800"
                    : "text-ink-soft hover:bg-pine-50 hover:text-pine-800"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className={`w-7 shrink-0 text-[0.6875rem] font-bold uppercase tracking-wider ${
                      selected ? "text-pine-700" : "text-ink-muted"
                    }`}
                  >
                    {option.code}
                  </span>
                  <span>{option.nativeName}</span>
                </span>
                {selected && <Check className="h-4 w-4 shrink-0 text-leaf-700" aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
