"use client";

import React from "react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccessibleAccordion } from "@/components/ui/AccessibleAccordion";
import { useLanguage } from "@/lib/LanguageContext";

export function FAQ() {
  const { faqs } = siteData;
  const { t } = useLanguage();

  return (
    <section id="sss" className="py-20 bg-white border-t border-brand-teal-900/10">
      <Container size="md">
        <SectionHeading
          badge={t("faq_badge")}
          title={t("faq_title")}
          description="Edirne CanbazVet Veteriner Kliniği konum, çalışma saatleri, acil hat ve randevu süreçleri hakkında sıkça sorulan sorular."
          align="center"
          className="mb-12"
        />

        <AccessibleAccordion items={faqs} />
      </Container>
    </section>
  );
}
