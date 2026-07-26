"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Phone, ShieldCheck } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

export function Veterinarian() {
  const { veterinarian, phone } = siteData.business;
  const { t } = useLanguage();

  return (
    <section id="veteriner-hekim" className="py-20 bg-brand-teal-950 text-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal-900/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto bg-brand-teal-900/60 rounded-3xl p-8 sm:p-12 border border-brand-teal-800/40 shadow-2xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Real Photo Avatar */}
            <div className="relative shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-brand-teal-950 to-brand-lime-500 p-1.5 shadow-2xl flex items-center justify-center relative overflow-hidden border-2 border-brand-lime-500">
                <Image
                  src="/images/team/berk-canbaz.webp"
                  alt="Veteriner Hekim Berk Canbaz"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>

              {/* Verified badge */}
              <div className="absolute bottom-1 right-1 bg-brand-lime-500 text-brand-teal-950 p-2 rounded-full shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* Content Info */}
            <div className="space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-extrabold text-brand-lime-400 uppercase tracking-widest">
                  {t("vet_badge")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {veterinarian.name}
                </h2>
                <p className="text-sm font-semibold text-brand-teal-100/80">
                  {t("vet_title")}
                </p>
              </div>

              <p className="text-base text-brand-teal-100/90 leading-relaxed">
                {t("vet_desc")}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <Button
                  variant="lime"
                  size="md"
                  href={phone.telLink}
                  icon={<Phone className="w-4 h-4" />}
                >
                  {t("vet_cta_call")} ({phone.display})
                </Button>

                <a
                  href={veterinarian.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-teal-950 hover:bg-brand-teal-800 text-brand-lime-400 text-sm font-bold transition-colors border border-brand-lime-500/30 min-h-[44px]"
                >
                  <Instagram className="w-4 h-4 text-brand-lime-500" />
                  <span>{veterinarian.handle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
