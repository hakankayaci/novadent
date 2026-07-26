"use client";

import React from "react";
import { MapPin, UserCheck, CalendarCheck, PhoneCall, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/LanguageContext";

export function TrustHighlights() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: MapPin,
      title: t("trust_location_title"),
      desc: t("trust_location_desc"),
    },
    {
      icon: UserCheck,
      title: t("trust_vet_title"),
      desc: t("trust_vet_desc"),
    },
    {
      icon: CalendarCheck,
      title: t("trust_sunday_title"),
      desc: t("trust_sunday_desc"),
    },
    {
      icon: PhoneCall,
      title: t("trust_emergency_title"),
      desc: t("trust_emergency_desc"),
    },
  ];

  return (
    <section className="bg-brand-surface-100 py-12 border-b border-brand-teal-900/10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-card border border-brand-teal-900/5 hover:border-brand-teal-800/20 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-brand-teal-950 text-brand-lime-500 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-teal-950">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Reviews CTA Strip */}
        <div className="mt-8 pt-6 border-t border-brand-teal-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 text-brand-teal-950">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold">
              {t("trust_reviews_title")}
            </span>
          </div>

          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "https://www.google.com/search?q=CanbazVet+Veteriner+Klini%C4%9Fi+Yorumlar"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-teal-900 hover:text-brand-teal-950 bg-brand-teal-50 hover:bg-brand-teal-100 px-4 py-2 rounded-xl transition-colors shrink-0"
          >
            <span>{t("trust_reviews_cta")}</span>
            <span className="text-brand-lime-600 font-extrabold">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
