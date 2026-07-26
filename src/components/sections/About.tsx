"use client";

import Image from "next/image";
import { Check, Instagram } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export function About() {
  const { c } = useLanguage();
  const { veterinarian } = business;

  return (
    <section id="hakkimizda" className="scroll-mt-24 bg-white py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="scale" className="relative">
            <div className="relative aspect-[3/2] overflow-hidden rounded-panel bg-pine-50 shadow-lift">
              <Image
                src="/images/team/berk-canbaz-wide.webp"
                alt={c.about.photoAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover object-[center_22%]"
              />
            </div>

            {/* Overlaps the photo corner instead of sitting in a nested card. */}
            <div className="relative -mt-10 ml-5 mr-5 rounded-card border border-pine-950/8 bg-white p-5 shadow-lift sm:-mt-12 sm:ml-8 sm:mr-12">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-leaf-700">
                {c.about.instaLabel}
              </p>
              <a
                href={veterinarian.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-body-lg font-bold text-pine-800 transition-colors duration-200 hover:text-pine-600"
              >
                <Instagram className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden />
                {veterinarian.handle}
                <span className="sr-only">({c.a11y.newTab})</span>
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-pine-700/30" />
                <span className="text-label font-semibold text-pine-700">
                  {c.about.badge}
                </span>
              </div>
              <h2 className="text-display-lg font-bold text-pine-950">{c.about.title}</h2>
            </Reveal>

            {c.about.body.map((paragraph, index) => (
              <Reveal key={index} delay={80 + index * 70}>
                <p className="mt-5 max-w-prose text-body-lg text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <ul className="mt-9 grid gap-x-8 gap-y-4 border-t border-pine-950/10 pt-8 sm:grid-cols-2">
                {c.about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf-100"
                    >
                      <Check className="h-3.5 w-3.5 text-leaf-800" />
                    </span>
                    <span className="text-body-sm font-medium text-pine-950">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
