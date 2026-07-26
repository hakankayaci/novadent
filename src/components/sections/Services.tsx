"use client";

import React from "react";
import {
  ShieldCheck,
  Stethoscope,
  Activity,
  Microscope,
  Scan,
  Sparkles,
  Scissors,
  PhoneCall,
} from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Stethoscope,
  Activity,
  Microscope,
  Scan,
  Sparkles,
  Scissors,
  PhoneCall,
};

export function Services() {
  const { services, business } = siteData;
  const { t } = useLanguage();

  return (
    <section id="hizmetler" className="py-20 bg-brand-surface-50">
      <Container>
        <SectionHeading
          badge={t("services_badge")}
          title={t("services_title")}
          description={t("services_desc")}
          align="left"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            const isFeatured = service.featured;

            return (
              <div
                key={service.id}
                className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-white border-2 border-brand-teal-900/20 shadow-card hover:shadow-card-hover hover:-translate-y-1"
                    : "bg-white border border-brand-teal-900/10 shadow-sm hover:shadow-card hover:-translate-y-1"
                }`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      isFeatured
                        ? "bg-brand-teal-950 text-brand-lime-500"
                        : "bg-brand-teal-50 text-brand-teal-900"
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-teal-950 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-teal-900/5">
                  <a
                    href={business.phone.telLink}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal-900 hover:text-brand-teal-950 transition-colors"
                  >
                    <span>{t("services_cta")}</span>
                    <span className="text-brand-lime-600 font-extrabold">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-brand-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-2xl font-bold text-white">
              {t("services_banner_title")}
            </h4>
            <p className="text-base text-brand-teal-100/80 mt-2 max-w-2xl">
              {t("services_banner_desc")}
            </p>
          </div>
          <Button
            variant="lime"
            size="lg"
            href={business.phone.telLink}
            icon={<PhoneCall className="w-5 h-5" />}
            className="shrink-0"
          >
            {business.phone.display}
          </Button>
        </div>
      </Container>
    </section>
  );
}
