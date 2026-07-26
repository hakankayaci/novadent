"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, Menu, Phone } from "lucide-react";
import { business, NAV_SECTIONS } from "@/data/site";
import { primaryNavItems } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const { c } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("anasayfa");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy so the current section is indicated in the nav.
  useEffect(() => {
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <>
      <header
        className={`font-menu sticky top-0 z-header w-full border-b transition-[background-color,box-shadow,border-color,padding] duration-300 ease-out ${
          scrolled
            ? "border-navy-950/10 bg-white/90 py-2.5 shadow-card backdrop-blur-xl"
            : "border-transparent bg-paper py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[80rem] items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
          <a
            href="#anasayfa"
            aria-label={c.a11y.logoAlt}
            className="-m-1 shrink-0 rounded-lg p-1 transition-transform duration-300 ease-out hover:scale-[1.02]"
          >
            <Logo alt={c.a11y.logoAlt} priority width={192} />
          </a>

          <nav aria-label={c.a11y.mainNav} className="ml-auto hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {primaryNavItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block whitespace-nowrap rounded-lg px-2.5 py-2 text-body-sm font-semibold transition-colors duration-200 xl:px-3 ${
                        isActive ? "text-navy-800" : "text-ink-soft hover:text-navy-800"
                      }`}
                    >
                      {item.label(c)}
                      <span
                        aria-hidden
                        className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-cyan-500 transition-transform duration-300 ease-out xl:inset-x-3 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-4 xl:gap-2.5">
            <a
              href={business.phone.telLink}
              onClick={() => trackEvent("phone_click", { location: "header" })}
              className="hidden min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3 text-body-sm font-bold text-navy-900 transition-colors duration-200 hover:bg-navy-50 md:flex xl:hidden 2xl:flex"
            >
              <Phone className="h-4 w-4 shrink-0 text-cyan-600" aria-hidden />
              <span className="tabular-nums">{business.phone.display}</span>
            </a>

            <Button
              variant="whatsapp"
              size="sm"
              href={whatsAppUrl}
              target="_blank"
              onClick={() => trackEvent("whatsapp_click", { location: "header" })}
              icon={<MessageCircle className="h-4 w-4" aria-hidden />}
              className="hidden shrink-0 whitespace-nowrap sm:inline-flex"
            >
              {c.nav.bookAppointment}
            </Button>

            <LanguageSelector />

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={c.a11y.openMenu}
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy-800/15 bg-white text-navy-900 transition-colors duration-200 hover:bg-navy-50 xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={active} />
    </>
  );
}
