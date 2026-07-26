import React from "react";
import { Instagram, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Veterinarian() {
  const { veterinarian, phone } = siteData.business;

  return (
    <section id="veteriner-hekim" className="py-20 bg-brand-teal-950 text-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal-900/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto bg-brand-teal-900/60 rounded-3xl p-8 sm:p-12 border border-brand-teal-800/40 shadow-2xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar / Icon Badge */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-brand-teal-950 to-brand-teal-800 p-1.5 shadow-2xl flex items-center justify-center border-2 border-brand-lime-500/50">
                <div className="w-full h-full rounded-full bg-brand-teal-950 flex flex-col items-center justify-center text-center p-4">
                  <Stethoscope className="w-12 h-12 text-brand-lime-500 mb-1" />
                  <span className="text-xs font-bold text-brand-teal-100 uppercase tracking-wider">
                    Vet. Hekim
                  </span>
                </div>
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
                  Sorumlu Veteriner Hekim
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {veterinarian.name}
                </h2>
                <p className="text-sm font-semibold text-brand-teal-100/80">
                  {veterinarian.title} · CanbazVet Veteriner Kliniği
                </p>
              </div>

              <p className="text-base text-brand-teal-100/90 leading-relaxed">
                Veteriner Hekim Berk Canbaz, CanbazVet Veteriner Kliniği'nde evcil dostların muayene, aşı, tedavi ve takip süreçlerini bizzat yürütmekte ve hasta sahipleriyle doğrudan açık iletişim kurmaktadır.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <Button
                  variant="lime"
                  size="md"
                  href={phone.telLink}
                  icon={<Phone className="w-4 h-4" />}
                >
                  Kliniği Ara ({phone.display})
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
