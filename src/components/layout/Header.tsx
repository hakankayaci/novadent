"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, MapPin } from "lucide-react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { labelKey: "nav_home", href: "#anasayfa" },
  { labelKey: "nav_services", href: "#hizmetler" },
  { labelKey: "nav_about", href: "#hakkimizda" },
  { labelKey: "nav_vet", href: "#veteriner-hekim" },
  { labelKey: "nav_clinic", href: "#klinik" },
  { labelKey: "nav_emergency", href: "#acil-hat" },
  { labelKey: "nav_reviews", href: "#yorumlar" },
  { labelKey: "nav_faq", href: "#sss" },
  { labelKey: "nav_contact", href: "#iletisim" },
];

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content - Strictly hidden unless focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-lime-500 focus:text-brand-teal-950 font-extrabold rounded-xl shadow-2xl"
      >
        {t("skip_content")}
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-teal-950/95 backdrop-blur-md shadow-xl border-b border-brand-teal-800/40 py-3"
            : "bg-brand-teal-950 py-4 border-b border-brand-teal-800/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo (Matching signboard exactly) */}
          <a
            href="#anasayfa"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 rounded-lg p-1 shrink-0"
          >
            <div className="relative w-44 sm:w-52 h-10 sm:h-12">
              <Image
                src="/images/brand/canbazvet-logo-light.svg"
                alt="CanbazVet Veteriner Kliniği Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Ana Navigasyon"
            className="hidden xl:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-brand-teal-100 hover:text-brand-lime-400 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 whitespace-nowrap"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Phone Number */}
            <a
              href={siteData.business.phone.telLink}
              onClick={() => trackEvent("phone_click", { location: "header" })}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-brand-lime-400 px-3 py-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-brand-lime-500 shrink-0" />
              <span className="whitespace-nowrap">{siteData.business.phone.display}</span>
            </a>

            {/* Glowing 3D Animated Yol Tarifi Button */}
            <Button
              variant="headerLime"
              size="sm"
              href={siteData.business.maps.directionsUrl}
              target="_blank"
              icon={<MapPin className="w-4 h-4 text-brand-teal-950 shrink-0 animate-bounce" />}
              className="whitespace-nowrap shadow-xl"
            >
              {t("nav_directions")}
            </Button>

            {/* Language Selector Dropdown */}
            <LanguageSelector />
          </div>

          {/* Mobile Menu & Language Wrapper */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />

            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menüyü aç"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-brand-teal-900 text-brand-teal-100 hover:text-white hover:bg-brand-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-lime-500 min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
