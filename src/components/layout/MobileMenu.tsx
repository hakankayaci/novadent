"use client";

import React, { useEffect, useRef } from "react";
import { Instagram, MapPin, PhoneCall, X } from "lucide-react";
import { business } from "@/data/site";
import { navItems } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { LogoOnDark } from "@/components/ui/Logo";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/lib/LanguageContext";
import { weekdayRange, sundayRange } from "@/lib/hours";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const { c } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreTo.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      // Keep Tab inside the drawer while it owns the screen.
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      restoreTo.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Must match the trigger's breakpoint in Header.tsx (xl:hidden). If the drawer hides
    // at a narrower width than the button that opens it, the button silently does nothing.
    <div className="fixed inset-0 z-drawer xl:hidden">
      <button
        type="button"
        tabIndex={-1}
        aria-label={c.a11y.closeMenu}
        onClick={onClose}
        className="absolute inset-0 animate-fade-in cursor-default bg-pine-950/70 backdrop-blur-sm"
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={c.a11y.mainNav}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm animate-scale-in flex-col overflow-y-auto bg-pine-950 text-white shadow-panel"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 p-5">
          <LogoOnDark alt={c.a11y.logoAlt} />
          <div className="flex shrink-0 items-center gap-2">
            <LanguageSelector tone="dark" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={c.a11y.closeMenu}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <nav aria-label={c.a11y.mainNav} className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    style={{ animationDelay: `${40 + index * 28}ms` }}
                    className={`flex min-h-[48px] animate-rise-in items-center gap-3 rounded-xl px-4 text-body-lg font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-white/10 text-leaf-300"
                        : "text-pine-100/85 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                        isActive ? "bg-leaf-400" : "bg-white/20"
                      }`}
                    />
                    {item.label(c)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-white/10 p-5">
          <dl className="mb-1 space-y-1 text-body-sm text-pine-100/70">
            <div className="flex items-baseline justify-between gap-3">
              <dt>{c.hours.weekdaysLabel}</dt>
              <dd className="tabular-nums text-white">{weekdayRange}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt>{c.hours.sundayLabel}</dt>
              <dd className="tabular-nums text-white">{sundayRange}</dd>
            </div>
          </dl>

          <Button
            variant="emergency"
            fullWidth
            href={business.phone.telLink}
            icon={<PhoneCall className="h-5 w-5" aria-hidden />}
          >
            {business.phone.display}
          </Button>

          <Button
            variant="leaf"
            fullWidth
            href={business.maps.directionsUrl}
            target="_blank"
            icon={<MapPin className="h-5 w-5" aria-hidden />}
          >
            {c.nav.directions}
          </Button>

          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-center gap-2 text-body-sm font-medium text-pine-100/70 transition-colors duration-200 hover:text-white"
          >
            <Instagram className="h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
            @canbazvetedirne
          </a>
        </div>
      </div>
    </div>
  );
}
