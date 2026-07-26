"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccessibleAccordion } from "@/components/ui/AccessibleAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export function FAQ() {
  const { c } = useLanguage();

  return (
    <section id="sss" className="scroll-mt-24 bg-white py-section">
      <Container size="prose">
        <SectionHeading
          kicker={c.faq.badge}
          title={c.faq.title}
          lede={c.faq.desc}
          align="center"
          className="mb-12"
        />

        <Reveal>
          <AccessibleAccordion items={c.faq.items} />
        </Reveal>
      </Container>
    </section>
  );
}
