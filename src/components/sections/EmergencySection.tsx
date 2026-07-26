"use client";

import { AlertCircle, PhoneCall } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function EmergencySection() {
  const { c } = useLanguage();
  const { phone } = business;

  return (
    <section
      id="acil-hat"
      className="relative isolate scroll-mt-24 overflow-hidden bg-pine-950 py-section text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-alert-600/14 blur-3xl"
      />

      <Container size="prose" className="relative">
        <Reveal className="text-center">
          <StatusPill pulse>{c.emergency.badge}</StatusPill>
          <h2 className="mt-6 text-display-lg font-bold text-white">
            {c.emergency.titleLead}{" "}
            <span className="text-leaf-300">{c.emergency.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-body-lg text-pine-100/85">
            {c.emergency.desc}
          </p>
        </Reveal>

        <Reveal delay={110} className="mt-10">
          <div className="rounded-panel border border-alert-500/35 bg-pine-900/70 p-7 shadow-panel sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-leaf-300">
                  {c.emergency.numberLabel}
                </p>
                <a
                  href={phone.telLink}
                  onClick={() => trackEvent("emergency_phone_click", { location: "section" })}
                  className="mt-2 block text-[clamp(2rem,1.2rem+4vw,3.25rem)] font-bold leading-none tracking-tight tabular-nums text-white transition-colors duration-200 hover:text-leaf-300"
                >
                  {phone.display}
                </a>
              </div>

              <Button
                variant="emergency"
                size="lg"
                href={phone.telLink}
                onClick={() => trackEvent("emergency_phone_click", { location: "section_cta" })}
                icon={<PhoneCall className="h-5 w-5" aria-hidden />}
                className="w-full sm:w-auto"
              >
                {c.emergency.callCta}
              </Button>

              <p className="flex items-start gap-2.5 rounded-card border border-white/10 bg-pine-950/70 px-4 py-3 text-left text-body-sm text-leaf-100">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
                <span>
                  <strong className="font-semibold">{c.emergency.noticeLabel}:</strong>{" "}
                  {c.emergency.notice}
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-12">
          <h3 className="text-center text-body font-semibold text-pine-100/70">
            {c.emergency.casesTitle}
          </h3>
          <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {c.emergency.cases.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-white/8 py-3.5 text-body-sm text-pine-100/85"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alert-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
