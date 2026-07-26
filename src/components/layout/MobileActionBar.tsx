"use client";

import React from "react";
import { Phone, Navigation, AlertTriangle } from "lucide-react";
import { siteData } from "@/data/site";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function MobileActionBar() {
  const { phone, maps } = siteData.business;
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Mobil Hızlı İletişim Çubuğu"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-teal-950/95 backdrop-blur-md border-t border-brand-teal-800/40 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call CTA */}
        <a
          href={phone.telLink}
          onClick={() =>
            trackEvent("mobile_action_click", { action: "phone" })
          }
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-brand-teal-900 hover:bg-brand-teal-800 text-white rounded-xl transition-all active:scale-95 min-h-[48px] border border-brand-teal-700/30 btn-shimmer"
        >
          <Phone className="w-5 h-5 text-brand-lime-500 mb-1" />
          <span className="text-xs font-bold tracking-tight whitespace-nowrap">{t("mobile_call")}</span>
        </a>

        {/* Directions CTA */}
        <a
          href={maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("mobile_action_click", { action: "directions" })
          }
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-gradient-to-r from-brand-lime-500 to-brand-lime-400 text-brand-teal-950 rounded-xl transition-all active:scale-95 min-h-[48px] font-bold shadow-md glow-lime btn-shimmer"
        >
          <Navigation className="w-5 h-5 mb-1" />
          <span className="text-xs font-extrabold tracking-tight whitespace-nowrap">{t("mobile_directions")}</span>
        </a>

        {/* Emergency CTA */}
        <a
          href={phone.telLink}
          onClick={() =>
            trackEvent("mobile_action_click", { action: "emergency" })
          }
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-gradient-to-r from-brand-red-600 to-brand-red-500 text-white rounded-xl transition-all active:scale-95 min-h-[48px] shadow-emergency glow-red btn-shimmer"
        >
          <AlertTriangle className="w-5 h-5 mb-1 animate-pulse" />
          <span className="text-xs font-extrabold tracking-tight whitespace-nowrap">{t("mobile_emergency")}</span>
        </a>
      </div>
    </aside>
  );
}
