"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { siteData } from "@/data/site";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function EmergencyTopBar() {
  const { phone } = siteData.business;
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Acil İletişim Bilgilendirme Şeridi"
      className="bg-brand-teal-950 text-white border-b border-brand-teal-800/40 text-xs sm:text-sm py-2.5 px-4 select-none relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left / Main info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-lime-500"></span>
          </span>
          <span className="font-bold text-brand-lime-500 uppercase tracking-wide shrink-0">
            {t("topbar_badge")}
          </span>
          <span className="hidden md:inline text-brand-teal-100/70 shrink-0">•</span>
          <span className="hidden md:inline text-brand-teal-100/90 truncate">
            {t("topbar_info")}
          </span>
        </div>

        {/* Right CTA */}
        <a
          href={phone.telLink}
          onClick={() => trackEvent("emergency_phone_click", { location: "topbar" })}
          className="inline-flex items-center gap-2 font-bold text-white bg-gradient-to-r from-brand-red-600 to-brand-red-500 hover:from-brand-red-500 hover:to-brand-red-600 px-3.5 py-1 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-lime-500 shrink-0 min-h-[36px] shadow-sm whitespace-nowrap btn-shimmer"
        >
          <PhoneCall className="w-3.5 h-3.5 animate-pulse shrink-0" />
          <span className="whitespace-nowrap">{t("topbar_call")}</span>
        </a>
      </div>
    </aside>
  );
}
