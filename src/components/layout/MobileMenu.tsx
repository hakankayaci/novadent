"use client";

import React, { useEffect, useRef } from "react";
import { X, Phone, MapPin, Instagram } from "lucide-react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-brand-teal-950/80 backdrop-blur-md transition-opacity animate-fade-up"
      aria-modal="true"
      role="dialog"
      aria-label="Mobil Navigasyon Menüsü"
    >
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-teal-950 text-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-brand-teal-800/40 pb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-xl text-white">Canbaz</span>
            <span className="font-extrabold text-xl text-brand-lime-500">Vet</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Menüyü kapat"
            className="p-2.5 rounded-xl bg-brand-teal-900/60 hover:bg-brand-teal-900 text-brand-teal-100 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-lime-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-lg font-semibold text-brand-teal-100 hover:text-brand-lime-500 hover:bg-brand-teal-900/40 rounded-xl transition-colors min-h-[44px] flex items-center"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="space-y-3 pt-6 border-t border-brand-teal-800/40">
          <Button
            variant="emergency"
            size="lg"
            fullWidth
            href={siteData.business.phone.telLink}
            icon={<Phone className="w-5 h-5" />}
          >
            7/24 Acil Ara ({siteData.business.phone.display})
          </Button>

          <Button
            variant="lime"
            size="md"
            fullWidth
            href={siteData.business.maps.directionsUrl}
            target="_blank"
            icon={<MapPin className="w-5 h-5" />}
          >
            Yol Tarifi Al
          </Button>

          <a
            href={siteData.business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-teal-100/80 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-brand-lime-500" />
            <span>@canbazvetedirne</span>
          </a>
        </div>
      </div>
    </div>
  );
}
