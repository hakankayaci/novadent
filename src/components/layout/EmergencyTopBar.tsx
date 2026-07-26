"use client";

import { PhoneCall } from "lucide-react";
import { business } from "@/data/site";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function EmergencyTopBar() {
  const { c } = useLanguage();

  return (
    <aside
      aria-label={c.a11y.topbar}
      className="bg-pine-950 text-white"
    >
      <div className="mx-auto flex max-w-[78rem] items-center gap-3 px-4 py-2 sm:gap-4 sm:px-7 lg:px-10">
        <p className="flex min-w-0 flex-1 items-center gap-2.5 text-body-sm">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-leaf-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
          </span>
          <span className="shrink-0 font-semibold text-leaf-300">{c.topbar.badge}</span>
          <span aria-hidden className="hidden shrink-0 text-pine-100/30 md:inline">
            /
          </span>
          <span className="hidden truncate text-pine-100/75 md:inline">{c.topbar.info}</span>
        </p>

        <a
          href={business.phone.telLink}
          onClick={() => trackEvent("emergency_phone_click", { location: "topbar" })}
          className="sheen -mr-1 flex min-h-[36px] shrink-0 items-center gap-2 rounded-lg bg-alert-600 px-3 text-body-sm font-semibold text-white transition-colors duration-200 hover:bg-alert-500"
        >
          <PhoneCall className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="tabular-nums">{business.phone.display}</span>
        </a>
      </div>
    </aside>
  );
}
