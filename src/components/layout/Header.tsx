"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, MapPin } from "lucide-react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Veteriner Hekim", href: "#veteriner-hekim" },
  { label: "Klinik", href: "#klinik" },
  { label: "Acil Hat", href: "#acil-hat" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export function Header() {
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
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-brand-lime-500 focus:text-brand-teal-950 font-bold rounded-lg shadow-lg"
      >
        İçeriğe Atla
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-teal-950/95 backdrop-blur-md shadow-lg border-b border-brand-teal-800/40 py-3"
            : "bg-brand-teal-950 py-4 border-b border-brand-teal-800/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#anasayfa"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 rounded-lg p-1"
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
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-brand-teal-100 hover:text-brand-lime-400 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteData.business.phone.telLink}
              onClick={() => trackEvent("phone_click", { location: "header" })}
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-lime-400 px-3 py-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-lime-500" />
              <span>{siteData.business.phone.display}</span>
            </a>

            <Button
              variant="lime"
              size="sm"
              href={siteData.business.maps.directionsUrl}
              target="_blank"
              icon={<MapPin className="w-4 h-4" />}
            >
              Yol Tarifi
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menüyü aç"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-brand-teal-900 text-brand-teal-100 hover:text-white hover:bg-brand-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-lime-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Menu className="w-6 h-6" />
          </button>
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
