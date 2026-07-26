import React from "react";
import { PhoneCall, AlertCircle, ShieldAlert, HeartPulse } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const emergencyCases = [
  "Trafik kazası ve yüksekten düşmeler",
  "Şiddetli solunum güçlüğü ve boğulma riski",
  "Zehirlenme veya yabancı cisim yutma şüphesi",
  "Durmayan kanamalar ve ağır yaralanmalar",
  "Ani şuur kaybı, felç ve nöbet geçirme",
  "Doğum güçlüğü veya aniden gelişen hayati riski olan durumlar",
];

export function EmergencySection() {
  const { phone } = siteData.business;

  return (
    <section
      id="acil-hat"
      className="py-20 bg-gradient-to-br from-brand-teal-950 via-brand-teal-900 to-brand-teal-950 text-white relative overflow-hidden"
    >
      {/* Red accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red-600/20 border border-brand-red-500/40 text-brand-lime-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-brand-red-500 animate-pulse" />
            <span>7/24 Aktif İletişim Hattı</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Acil durumlarda bir telefon{" "}
            <span className="text-brand-lime-500">uzağınızdayız.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-teal-100/90 leading-relaxed max-w-2xl mx-auto">
            7/24 aktif acil telefon hattımız gerçek acil vakalarda hızlı hekim yönlendirmesi için hizmet vermektedir.
          </p>

          {/* Emergency Call Action Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-teal-900/90 border-2 border-brand-red-600/50 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="p-4 rounded-2xl bg-brand-red-600 text-white animate-bounce">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-brand-lime-400 uppercase tracking-widest">
                  Acil Vaka Telefon Numarası
                </p>
                <a
                  href={phone.telLink}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-brand-lime-400 transition-colors tracking-tight"
                >
                  {phone.display}
                </a>
              </div>
            </div>

            <div>
              <Button
                variant="emergency"
                size="lg"
                href={phone.telLink}
                icon={<PhoneCall className="w-6 h-6" />}
                className="text-lg py-5 px-10"
              >
                7/24 Acil Hattı Ara ({phone.display})
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-lime-300 font-medium bg-brand-teal-950/80 py-3 px-4 rounded-xl border border-brand-teal-800">
              <AlertCircle className="w-4 h-4 text-brand-lime-400 shrink-0" />
              <span>
                <strong>Önemli:</strong> Hastanın durumunu önceden bildirmek ve kliniği hazırlamak için gelmeden önce arayınız.
              </span>
            </div>
          </div>

          {/* Emergency Cases Grid */}
          <div className="pt-6">
            <h3 className="text-sm font-bold text-brand-teal-100/70 uppercase tracking-widest mb-6">
              Öncelikli Acil Durum Örnekleri
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {emergencyCases.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-brand-teal-900/40 border border-brand-teal-800/40 text-xs sm:text-sm font-medium text-brand-teal-100 flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-red-500 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
