"use client";

import React from "react";
import {
  Activity,
  Microscope,
  PhoneCall,
  Scan,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { business, services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Stethoscope,
  Activity,
  Microscope,
  Scan,
  Sparkles,
  Scissors,
  PhoneCall,
};

/**
 * Capability list, not an eight-up card grid. A sticky editorial column carries the
 * heading and the call to action; the services themselves are hairline-separated rows so
 * eight of them can sit together without turning into wallpaper.
 */
export function Services() {
  const { c } = useLanguage();

  return (
    <section id="hizmetler" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-pine-700/30" />
                <span className="text-label font-semibold text-pine-700">
                  {c.services.badge}
                </span>
              </div>
              <h2 className="text-display-lg font-bold text-pine-950">
                {c.services.title}
              </h2>
              <p className="mt-5 max-w-prose text-body-lg text-ink-soft">
                {c.services.desc}
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <div className="rounded-panel bg-pine-950 p-7 text-white shadow-panel">
                <h3 className="text-display-sm font-semibold">
                  {c.services.banner.title}
                </h3>
                <p className="mt-3 text-body-sm text-pine-100/80">
                  {c.services.banner.desc}
                </p>
                <Button
                  variant="leaf"
                  href={business.phone.telLink}
                  icon={<PhoneCall className="h-5 w-5" aria-hidden />}
                  className="mt-6 w-full sm:w-auto"
                >
                  <span className="tabular-nums">{business.phone.display}</span>
                </Button>
              </div>
            </Reveal>
          </div>

          <ul className="divide-y divide-pine-950/10 border-y border-pine-950/10">
            {services.map((service, index) => {
              const Icon = ICONS[service.iconName] ?? Stethoscope;
              const copy = c.services.items[service.id];

              return (
                <Reveal as="li" key={service.id} delay={index * 45}>
                  <div className="group flex gap-5 py-7 transition-colors duration-300 sm:gap-6">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                        service.featured
                          ? "bg-pine-700 text-leaf-300"
                          : "bg-pine-50 text-pine-700 group-hover:bg-pine-100"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-display-sm font-semibold text-pine-950">
                        {copy.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-body-sm text-ink-soft">
                        {copy.full}
                      </p>
                      <a
                        href={business.phone.telLink}
                        className="mt-3 inline-flex min-h-[36px] items-center gap-1.5 text-body-sm font-semibold text-leaf-700 transition-colors duration-200 hover:text-leaf-800"
                      >
                        {c.services.cta}
                        <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
