"use client";

import React from "react";
import {
  Activity,
  HeartPulse,
  Info,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  UserCheck,
} from "lucide-react";
import { business, treatments } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smile,
  HeartPulse,
  Sun,
  ShieldCheck,
  Activity,
  UserCheck,
  Stethoscope,
};

export function Services() {
  const { c } = useLanguage();

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <section id="tedaviler" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.treatments.badge}
          title={c.treatments.title}
          lede={c.treatments.desc}
          align="split"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((item, index) => {
            const Icon = ICONS[item.iconName] ?? Stethoscope;
            const itemCopy = c.treatments.items[item.id];

            return (
              <Reveal key={item.id} delay={index * 50}>
                <div className="group flex h-full flex-col justify-between rounded-card border border-navy-950/10 bg-white p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lift">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-500/20 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-navy-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-display-sm font-bold text-navy-950">
                      {itemCopy.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-ink-soft">
                      {itemCopy.short}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("treatment_whatsapp_click", { treatment: item.id })}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-body-sm font-bold text-cyan-600 transition-colors duration-200 group-hover:text-cyan-700"
                    >
                      <span>{c.nav.bookAppointment}</span>
                      <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50/60 p-4 text-center text-body-sm font-medium text-navy-900">
            <Info className="h-5 w-5 shrink-0 text-cyan-600" aria-hidden />
            <span>{c.treatments.disclaimer}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
