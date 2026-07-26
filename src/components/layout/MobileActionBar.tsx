"use client";

import { Calendar, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/site";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/**
 * Fixed bottom bar on small screens for quick conversion actions.
 */
export function MobileActionBar() {
  const { c } = useLanguage();

  const tile =
    "sheen flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-1 " +
    "text-[0.7rem] font-bold leading-tight transition-transform duration-200 ease-out active:scale-95";

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <nav
      data-testid="mobile-action-bar"
      aria-label={c.a11y.mobileBar}
      className="fixed inset-x-0 bottom-0 z-sticky border-t border-white/10 bg-navy-950/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={business.phone.telLink}
          onClick={() => trackEvent("mobile_action_click", { action: "phone" })}
          className={`${tile} border border-white/15 bg-white/10 text-white`}
        >
          <Phone className="h-4.5 w-4.5 text-cyan-400" aria-hidden />
          <span>{c.quickActions.callTitle}</span>
        </a>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("mobile_action_click", { action: "whatsapp" })}
          className={`${tile} bg-[#25D366] text-navy-950`}
        >
          <MessageCircle className="h-4.5 w-4.5" aria-hidden />
          <span>WhatsApp</span>
        </a>

        <a
          href="#iletisim"
          onClick={() => trackEvent("mobile_action_click", { action: "appointment" })}
          className={`${tile} bg-cyan-500 text-navy-950`}
        >
          <Calendar className="h-4.5 w-4.5" aria-hidden />
          <span>{c.nav.bookAppointment}</span>
        </a>
      </div>
    </nav>
  );
}
