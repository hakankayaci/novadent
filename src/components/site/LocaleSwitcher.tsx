"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { UiIcon } from "@/components/site/UiIcon";
import {
  languageByCode,
  languages,
  type Language,
} from "@/lib/i18n";

interface LocaleSwitcherProps {
  language: Language;
  label: string;
}

export function LocaleSwitcher({
  language,
  label,
}: LocaleSwitcherProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const active = languageByCode[language];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const openAndFocus = () => {
    setOpen(true);
    window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${label}: ${active.nativeName}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            openAndFocus();
          }
        }}
        className="flex min-h-[44px] items-center gap-[6px] rounded-xl border border-ink-950/10 bg-white/70 px-[8px] text-[14px] font-semibold text-ink-950 transition-colors hover:border-aqua-500"
      >
        <FlagIcon
          code={active.flagId.toLowerCase() as "tr" | "gb" | "gr" | "bg"}
          className="h-[16px] w-[24px] shrink-0 shadow-sm"
        />
        <span>{active.shortLabel}</span>
        <UiIcon
          name="chevron-down"
          className={`h-[16px] w-[16px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          className="absolute right-0 top-[calc(100%+0.55rem)] z-overlay w-48 overflow-hidden rounded-surface border border-ink-950/10 bg-porcelain-50 p-1.5 shadow-lift"
        >
          {languages.map((option) => {
            const current = option.code === language;
            return (
              <a
                key={option.code}
                href={option.href}
                hrefLang={option.htmlLang}
                lang={option.htmlLang}
                role="menuitem"
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center gap-[10px] rounded-xl px-[12px] py-[8px] text-[14px] transition-colors ${
                  current
                    ? "bg-aqua-100 font-semibold text-ink-950"
                    : "text-copy-soft hover:bg-porcelain-100 hover:text-ink-950"
                }`}
              >
                <FlagIcon
                  code={option.flagId.toLowerCase() as "tr" | "gb" | "gr" | "bg"}
                  className="h-[16px] w-[24px] shrink-0 shadow-sm"
                />
                <span className="font-semibold">{option.shortLabel}</span>
                <span className="text-copy-muted">{option.nativeName}</span>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
