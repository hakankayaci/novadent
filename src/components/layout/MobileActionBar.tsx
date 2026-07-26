"use client";

import { Navigation, Phone, Siren } from "lucide-react";
import { business } from "@/data/site";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/**
 * Fixed bottom bar on small screens. `body` carries matching bottom padding in
 * globals.css so nothing on the page ever ends up underneath it.
 */
export function MobileActionBar() {
  const { c } = useLanguage();

  const tile =
    "sheen flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl px-1 " +
    "text-[0.6875rem] font-semibold leading-tight transition-transform duration-200 ease-out active:scale-95";

  return (
    <nav
      aria-label={c.a11y.mobileBar}
      className="fixed inset-x-0 bottom-0 z-sticky border-t border-white/10 bg-pine-950/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={business.phone.telLink}
          onClick={() => trackEvent("mobile_action_click", { action: "phone" })}
          className={`${tile} border border-white/15 bg-white/10 text-white`}
        >
          <Phone className="h-5 w-5 text-leaf-300" aria-hidden />
          {c.mobile.call}
        </a>

        <a
          href={business.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("mobile_action_click", { action: "directions" })}
          className={`${tile} bg-leaf-300 text-pine-950`}
        >
          <Navigation className="h-5 w-5" aria-hidden />
          {c.mobile.directions}
        </a>

        <a
          href={business.phone.telLink}
          onClick={() => trackEvent("mobile_action_click", { action: "emergency" })}
          className={`${tile} bg-alert-600 text-white`}
        >
          <Siren className="h-5 w-5" aria-hidden />
          {c.mobile.emergency}
        </a>
      </div>
    </nav>
  );
}
