"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Navigation, Instagram, ExternalLink } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const { business } = siteData;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="iletisim" className="py-20 bg-brand-surface-100">
      <Container>
        <SectionHeading
          badge="İletişim & Konum"
          title="CanbazVet'e ulaşın."
          description="Edirne Merkez Şükrüpaşa Mahallesi'ndeki kliniğimize telefonla ulaşabilir veya navigasyon başlatabilirsiniz."
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card Column */}
          <div className="lg:col-span-5 bg-brand-teal-950 text-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-2xl border border-brand-teal-800/40">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-brand-lime-400 uppercase tracking-widest">
                  CanbazVet Veteriner Kliniği
                </p>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  İletişim Bilgileri
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="p-2.5 rounded-xl bg-brand-teal-900 text-brand-lime-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-teal-100/70">Açık Adres</p>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5 leading-relaxed">
                    {business.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-teal-900 text-brand-lime-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-teal-100/70">
                    Telefon & Acil Hat
                  </p>
                  <a
                    href={business.phone.telLink}
                    onClick={() => trackEvent("phone_click", { location: "contact" })}
                    className="text-lg font-extrabold text-brand-lime-400 hover:underline mt-0.5 block"
                  >
                    {business.phone.display}
                  </a>
                  <p className="text-xs text-brand-teal-100/70 mt-0.5">
                    (7/24 Aktif Acil Danışma Hattı)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-teal-900 text-brand-lime-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-teal-100/70">
                    Çalışma Saatleri
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {business.openingHours.weekdays}
                  </p>
                  <p className="text-sm font-semibold text-brand-lime-400 mt-0.5">
                    {business.openingHours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons inside Card */}
            <div className="pt-8 border-t border-brand-teal-800/40 space-y-3">
              <Button
                variant="lime"
                size="lg"
                fullWidth
                href={business.phone.telLink}
                icon={<Phone className="w-5 h-5" />}
              >
                Hemen Ara ({business.phone.display})
              </Button>

              <Button
                variant="secondary"
                size="md"
                fullWidth
                href={business.maps.directionsUrl}
                target="_blank"
                icon={<Navigation className="w-5 h-5" />}
              >
                Google Maps Navigasyon
              </Button>

              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-brand-teal-100/80 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-lime-500" />
                <span>Instagram: @canbazvetedirne</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 bg-white p-4 rounded-3xl shadow-card border border-brand-teal-900/10 flex flex-col justify-between min-h-[420px]">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-brand-surface-100">
              {!mapLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-brand-surface-100">
                  <MapPin className="w-12 h-12 text-brand-teal-900 animate-bounce mb-3" />
                  <p className="text-base font-bold text-brand-teal-950">
                    CanbazVet Harita Konumu
                  </p>
                  <p className="text-xs text-text-secondary mt-1 mb-4">
                    Haritayı yüklemek için tıklayın veya görünüm alanına getirin.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMapLoaded(true);
                      trackEvent("map_open", {});
                    }}
                    className="px-5 py-2.5 rounded-xl bg-brand-teal-900 text-white text-xs font-bold hover:bg-brand-teal-950 transition-colors"
                  >
                    Haritayı Yükle
                  </button>
                </div>
              )}

              <iframe
                title="CanbazVet Veteriner Kliniği Edirne Google Maps Haritası"
                src={business.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                className="w-full h-full min-h-[380px] rounded-2xl"
              />
            </div>

            <div className="pt-4 px-2 flex items-center justify-between text-xs font-semibold text-text-secondary">
              <span>Koordinatlar: 41.6657747, 26.584173</span>
              <a
                href={business.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-teal-900 hover:underline font-bold"
              >
                <span>Google Maps'te Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
