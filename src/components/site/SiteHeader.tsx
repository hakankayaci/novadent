"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { LocaleSwitcher } from "@/components/site/LocaleSwitcher";
import { UiIcon } from "@/components/site/UiIcon";
import type { Language } from "@/lib/i18n";

interface NavigationItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  language: Language;
  homeHref: string;
  homeLabel: string;
  navigation: NavigationItem[];
  localeLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
}

export function SiteHeader({
  language,
  homeHref,
  homeLabel,
  navigation,
  localeLabel,
  menuLabel,
  closeMenuLabel,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-sticky border-b border-ink-950/10 bg-porcelain/95 shadow-header backdrop-blur-md">
      <div className="header-shell flex min-h-[76px] items-center justify-between gap-[8px] py-2">
        <a
          href={homeHref}
          aria-label={homeLabel}
          className="inline-flex min-h-11 items-center"
          onClick={() => setOpen(false)}
        >
          <BrandLogo alt="" priority />
        </a>

        <nav aria-label={menuLabel} className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-xl px-3.5 text-[0.9rem] font-semibold text-copy-soft transition-colors hover:bg-white/70 hover:text-ink-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 items-center gap-[8px]">
          <LocaleSwitcher language={language} label={localeLabel} />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? closeMenuLabel : menuLabel}
            onClick={() => setOpen((value) => !value)}
            className="grid min-h-[44px] min-w-[44px] place-items-center rounded-xl border border-ink-950/10 bg-white/70 text-ink-950 transition-colors hover:border-aqua-500 xl:hidden"
          >
            {open ? (
              <UiIcon name="x" className="h-[20px] w-[20px]" />
            ) : (
              <UiIcon name="menu" className="h-[20px] w-[20px]" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-ink-950/10 bg-porcelain xl:hidden"
      >
        <nav
          aria-label={menuLabel}
          className="page-shell grid gap-1 py-4"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-semibold text-ink-950 transition-colors hover:bg-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
