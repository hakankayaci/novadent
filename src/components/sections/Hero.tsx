"use client";

import React from "react";
import Image from "next/image";
import { Phone, Navigation, ShieldCheck, MapPin, Star } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const { business } = siteData;
  const { t } = useLanguage();

  return (
    <section
      id="anasayfa"
      className="relative bg-brand-teal-950 text-white overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-teal-800/30"
    >
      {/* Decorative background arcs matching brand logo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[16px] border-brand-lime-500/10 pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full border-[24px] border-brand-teal-800/20 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal-900/90 border border-brand-lime-500/30 text-xs sm:text-sm font-semibold text-brand-lime-400 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-lime-500 shrink-0" />
              <span>{t("hero_badge")}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {t("hero_title_1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime-400 via-brand-lime-300 to-brand-lime-500">
                {t("hero_title_2")}
              </span>
            </h1>

            {/* Subdescription */}
            <p className="text-lg sm:text-xl text-brand-teal-100/90 leading-relaxed max-w-2xl">
              {t("hero_desc")}
            </p>

            {/* Key Micro Info Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-brand-teal-100/80 pt-2 border-t border-brand-teal-800/40">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-lime-500 shrink-0" />
                <span>{t("hero_address")}</span>
              </div>
              <span className="hidden sm:inline text-brand-teal-800">•</span>
              <div className="flex items-center gap-1.5 font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-brand-lime-500" />
                <span>{t("hero_hours")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Button
                variant="emergency"
                size="lg"
                href={business.phone.telLink}
                onClick={() => trackEvent("phone_click", { location: "hero" })}
                icon={<Phone className="w-5 h-5" />}
              >
                {t("hero_cta_call")} ({business.phone.display})
              </Button>

              <Button
                variant="lime"
                size="lg"
                href={business.maps.directionsUrl}
                target="_blank"
                onClick={() =>
                  trackEvent("directions_click", { location: "hero" })
                }
                icon={<Navigation className="w-5 h-5" />}
              >
                {t("hero_cta_directions")}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "https://www.google.com/search?q=CanbazVet+Veteriner+Klini%C4%9Fi+Yorumlar"}
                target="_blank"
                onClick={() =>
                  trackEvent("google_reviews_click", { location: "hero" })
                }
                icon={<Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
              >
                {t("hero_cta_reviews")}
              </Button>
            </div>
          </div>

          {/* Real Vet Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-lime-500/30">
              <Image
                src="/images/team/berk-canbaz.webp"
                alt="Veteriner Hekim Berk Canbaz - CanbazVet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-950/90 via-transparent to-transparent" />

              {/* Floating Pill on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-teal-950/90 backdrop-blur-md border border-brand-teal-800/50 text-white flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-xs text-brand-lime-400 font-bold uppercase tracking-wider">
                    Veteriner Hekim
                  </p>
                  <p className="text-base font-extrabold text-white">
                    Berk Canbaz
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brand-teal-100/70">Acil Hat</p>
                  <p className="text-sm font-extrabold text-brand-lime-400">
                    7/24 Aktif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
