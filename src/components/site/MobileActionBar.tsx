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
    if (!hero) return;

    let scrollFrame = 0;
    const updateFromGeometry = () => {
      scrollFrame = 0;
      setVisible(hero.getBoundingClientRect().bottom <= 0);
    };
    const updateAfterScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateFromGeometry);
    };
    const initialFrame = window.requestAnimationFrame(updateFromGeometry);
    window.addEventListener("scroll", updateAfterScroll, { passive: true });

    if (!("IntersectionObserver" in window)) {
      return () => {
        window.cancelAnimationFrame(initialFrame);
        if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
        window.removeEventListener("scroll", updateAfterScroll);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.02 },
    );
    observer.observe(hero);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", updateAfterScroll);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <nav
      aria-label={ariaLabel}
      data-testid="mobile-action-bar"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-sticky px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-3 lg:hidden"
    >
      <div className="mobile-liquid-glass pointer-events-auto mx-auto grid max-w-lg grid-cols-2 gap-2 p-2">
        <a
          href={phoneHref}
          className="mobile-liquid-action mobile-liquid-action--call inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-bold text-ink-950"
        >
          <UiIcon name="phone" className="h-4 w-4" />
          {callLabel}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mobile-liquid-action mobile-liquid-action--whatsapp inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-bold text-[#062813]"
        >
          <WhatsAppIcon variant="glyph" aria-hidden className="h-5 w-5" />
          {whatsappLabel}
        </a>
      </div>
    </nav>
  );
}
