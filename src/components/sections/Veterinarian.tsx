"use client";

import Image from "next/image";
import { Check, Instagram, Phone } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function Veterinarian() {
  const { c } = useLanguage();
  const { veterinarian, phone } = business;

  return (
    <section
      id="veteriner-hekim"
      className="relative isolate scroll-mt-24 overflow-hidden bg-pine-950 py-section text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[12%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-pine-700/22 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <Reveal from="scale" className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-panel ring-1 ring-white/12">
              <Image
                src="/images/team/berk-canbaz-avatar.webp"
                alt={c.vet.photoAlt}
                fill
                sizes="(max-width: 1024px) 20rem, 28vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-leaf-300/60" />
                <span className="text-label font-semibold text-leaf-300">
                  {c.vet.badge}
                </span>
              </div>

              <h2 className="text-display-lg font-bold text-white">
                {veterinarian.name}
              </h2>
              <p className="mt-2 text-body-lg text-pine-100/70">{c.vet.role}</p>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-6 max-w-prose text-body-lg text-pine-100/85">
                {c.vet.summary}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-8 space-y-3 border-t border-white/12 pt-7">
                {c.vet.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf-300/15"
                    >
                      <Check className="h-3.5 w-3.5 text-leaf-300" />
                    </span>
                    <span className="text-body text-pine-100/85">{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  variant="leaf"
                  href={phone.telLink}
                  onClick={() => trackEvent("phone_click", { location: "vet" })}
                  icon={<Phone className="h-5 w-5" aria-hidden />}
                >
                  {c.vet.ctaCall}
                  <span className="ml-1.5 hidden font-normal tabular-nums opacity-80 sm:inline">
                    {phone.display}
                  </span>
                </Button>

                <Button
                  variant="onDark"
                  href={veterinarian.instagramUrl}
                  target="_blank"
                  icon={<Instagram className="h-5 w-5 text-leaf-300" aria-hidden />}
                >
                  {veterinarian.handle}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
