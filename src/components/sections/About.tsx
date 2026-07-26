"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

const PILLAR_ICONS = [HeartHandshake, ShieldCheck, CheckCircle2, MapPin];

export function About() {
  const { c } = useLanguage();

  return (
    <section id="neden-novadent" className="scroll-mt-24 bg-white py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="scale" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-navy-900 shadow-lift ring-1 ring-navy-950/10">
              <Image
                src="/images/clinic/novadent-reception.webp"
                alt="Novadent Clinics Danışma ve Bekleme Alanı"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative -mt-10 ml-5 mr-5 rounded-card border border-navy-950/10 bg-white p-5 shadow-lift sm:-mt-12 sm:ml-8 sm:mr-12">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cyan-600">
                {c.hero.badge}
              </p>
              <p className="mt-1 text-body-lg font-bold text-navy-950">
                NOVADENT Ağız ve Diş Sağlığı Polikliniği
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              kicker={c.whyUs.badge}
              title={c.whyUs.title}
              lede={c.whyUs.desc}
              align="split"
            />

            <div className="mt-8 space-y-5">
              {c.whyUs.items.map((item, index) => {
                const Icon = PILLAR_ICONS[index] ?? CheckCircle2;
                return (
                  <Reveal key={item.title} delay={100 + index * 60}>
                    <div className="flex gap-4 rounded-card border border-slate-100 bg-paper p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-50/30">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-100 text-cyan-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-body-lg font-bold text-navy-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-body-sm text-ink-soft">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
