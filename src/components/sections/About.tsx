"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Heart, Instagram, Sparkles } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

export function About() {
  const { business } = siteData;
  const { t } = useLanguage();

  const highlights = [
    "Açık ve anlaşılır hasta sahibi iletişimi",
    "Steril muayene ve ameliyathane ortamı",
    "Düzenli koruyucu aşı ve tedavi takibi",
    "7/24 aktif acil iletişim desteği",
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-teal-900/10">
              <Image
                src="/images/team/berk-canbaz.webp"
                alt="Veteriner Hekim Berk Canbaz"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 p-5 rounded-2xl bg-brand-teal-950 text-white shadow-xl max-w-xs border border-brand-teal-800/40">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-lime-500 text-brand-teal-950 font-bold shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-lime-400 font-bold uppercase tracking-wider">
                    Vet. Hekim Berk Canbaz
                  </p>
                  <a
                    href={business.veterinarian.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-brand-lime-400 mt-1"
                  >
                    <Instagram className="w-3.5 h-3.5 text-brand-lime-500" />
                    <span>{business.veterinarian.handle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge={t("about_badge")}
              title={`${t("about_title_1")} ${t("about_title_2")}`}
              align="left"
            />

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t("about_p1")}
            </p>

            <p className="text-base text-text-secondary leading-relaxed">
              {t("about_p2")}
            </p>

            {/* Vet Instagram Banner */}
            <div className="p-4 rounded-2xl bg-brand-surface-100 border border-brand-teal-900/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-brand-teal-900 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-brand-teal-950">
                    {t("about_insta_label")}
                  </p>
                  <a
                    href={business.veterinarian.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-brand-teal-900 hover:text-brand-teal-950 hover:underline"
                  >
                    {business.veterinarian.handle}
                  </a>
                </div>
              </div>

              <a
                href={business.veterinarian.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-brand-teal-900 text-white text-xs font-bold hover:bg-brand-teal-950 transition-colors"
              >
                Takip Et
              </a>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime-600 shrink-0" />
                  <span className="text-sm font-semibold text-brand-teal-950">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
