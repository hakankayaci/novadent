"use client";

import { CalendarCheck, MapPin, PhoneCall, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [MapPin, UserRound, CalendarCheck, PhoneCall];

/**
 * A specification strip rather than four identical cards: hairline dividers, no boxes,
 * so it reads as one continuous band of facts under the hero.
 */
export function TrustHighlights() {
  const { c } = useLanguage();

  return (
    <section className="border-b border-pine-950/8 bg-white">
      <Container>
        <ul className="grid divide-y divide-pine-950/8 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {c.trust.map((item, index) => {
            const Icon = ICONS[index] ?? MapPin;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 70}
                className={`py-7 sm:px-6 lg:px-7 ${
                  index > 0 ? "sm:border-l sm:border-pine-950/8" : ""
                } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""} ${
                  index >= 2 ? "sm:border-t sm:border-pine-950/8 lg:border-t-0" : ""
                } ${index === 0 ? "sm:pl-0" : ""} ${index === 3 ? "sm:pr-0" : ""}`}
              >
                <Icon className="h-6 w-6 text-leaf-700" aria-hidden />
                <h3 className="mt-4 text-display-sm font-semibold text-pine-950">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-prose text-body-sm text-ink-soft">{item.desc}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
