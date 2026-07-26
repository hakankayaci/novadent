"use client";

import { Calendar, Info, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const STEP_ICONS = [Phone, MessageCircle, Calendar];

export function Veterinarian() {
  const { c } = useLanguage();

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <section
      id="randevu-sureci"
      className="scroll-mt-24 bg-paper py-section"
    >
      <Container>
        <SectionHeading
          kicker={c.steps.badge}
          title={c.steps.title}
          lede={c.steps.desc}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.steps.items.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? Calendar;

            return (
              <Reveal key={step.number} delay={index * 80}>
                <div className="relative flex h-full flex-col justify-between rounded-card border border-navy-950/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-display-md font-extrabold text-cyan-600/30">
                        {step.number}
                      </span>
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-800">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-display-sm font-bold text-navy-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-ink-soft">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={240} className="mt-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-800/10 bg-white p-6 text-center shadow-card">
            <p className="flex items-center justify-center gap-2 text-body-sm font-semibold text-navy-900">
              <Info className="h-5 w-5 shrink-0 text-cyan-600" aria-hidden />
              <span>{c.steps.disclaimer}</span>
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button
                variant="whatsapp"
                href={whatsAppUrl}
                target="_blank"
                onClick={() => trackEvent("whatsapp_click", { location: "steps" })}
                icon={<MessageCircle className="h-4 w-4" aria-hidden />}
              >
                {c.nav.bookAppointment}
              </Button>
              <Button
                variant="outline"
                href={business.phone.telLink}
                onClick={() => trackEvent("phone_click", { location: "steps" })}
                icon={<Phone className="h-4 w-4" aria-hidden />}
              >
                {c.hero.ctaCall} ({business.phone.display})
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
