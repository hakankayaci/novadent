"use client";

import { Globe, MapPin, MessageCircle, Navigation } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function EmergencySection() {
  const { c } = useLanguage();

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <section
      id="uluslararasi"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-950 py-section text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-600/15 blur-3xl"
      />

      <Container size="prose" className="relative">
        <Reveal className="text-center">
          <StatusPill pulse>{c.international.badge}</StatusPill>
          <h2 className="mt-6 text-display-lg font-extrabold text-white">
            {c.international.title}
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-body-lg text-navy-100/85">
            {c.international.desc}
          </p>
        </Reveal>

        <Reveal delay={110} className="mt-10">
          <div className="rounded-panel border border-cyan-400/25 bg-navy-900/80 p-7 shadow-panel sm:p-10 backdrop-blur-md">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-wrap justify-center gap-3">
                <span className="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-4 py-1.5 text-xs font-bold text-cyan-300">
                  {c.international.badge1}
                </span>
                <span className="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-4 py-1.5 text-xs font-bold text-cyan-300">
                  {c.international.badge2}
                </span>
                <span className="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-4 py-1.5 text-xs font-bold text-cyan-300">
                  {c.international.badge3}
                </span>
              </div>

              <p className="text-body-sm font-medium text-navy-100/90 max-w-md">
                {c.international.subtext}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center w-full">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={whatsAppUrl}
                  target="_blank"
                  onClick={() => trackEvent("whatsapp_click", { location: "international" })}
                  icon={<MessageCircle className="h-5 w-5" aria-hidden />}
                  className="w-full sm:w-auto"
                >
                  {c.international.whatsAppCta}
                </Button>

                <Button
                  variant="onDark"
                  size="lg"
                  href={business.maps.directionsUrl}
                  target="_blank"
                  onClick={() => trackEvent("directions_click", { location: "international" })}
                  icon={<Navigation className="h-5 w-5 text-cyan-400" aria-hidden />}
                  className="w-full sm:w-auto"
                >
                  {c.international.directionsCta}
                </Button>
              </div>

              <p className="flex items-center gap-2 rounded-card border border-white/10 bg-navy-950/70 px-4 py-3 text-center text-xs text-cyan-100/80">
                <Globe className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
                <span>Edirne Merkez — Fatih Mahallesi, Tahsin Şipka Caddesi No:14/1</span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
