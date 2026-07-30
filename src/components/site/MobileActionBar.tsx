"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";
import { UiIcon } from "@/components/site/UiIcon";

interface MobileActionBarProps {
  phoneHref: string;
  whatsappHref: string;
  callLabel: string;
  whatsappLabel: string;
  ariaLabel: string;
}

export function MobileActionBar({
  phoneHref,
  whatsappHref,
  callLabel,
  whatsappLabel,
  ariaLabel,
}: MobileActionBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#anasayfa");
    if (!hero || !("IntersectionObserver" in window)) {
      const updateFromScroll = () =>
        setVisible(window.scrollY > window.innerHeight * 0.8);
      const frame = window.requestAnimationFrame(updateFromScroll);
      window.addEventListener("scroll", updateFromScroll, { passive: true });

      return () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", updateFromScroll);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.02 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label={ariaLabel}
      data-testid="mobile-action-bar"
      className="fixed inset-x-0 bottom-0 z-sticky border-t border-white/10 bg-ink-950/96 px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-12px_30px_-24px_rgba(6,23,46,0.8)] backdrop-blur-lg lg:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/80 bg-porcelain-50 px-3 text-sm font-bold text-ink-950 shadow-sm transition-colors hover:bg-aqua-100"
        >
          <UiIcon name="phone" className="h-4 w-4" />
          {callLabel}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-3 text-sm font-bold text-[#062813] transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon variant="glyph" aria-hidden className="h-5 w-5" />
          {whatsappLabel}
        </a>
      </div>
    </div>
  );
}
