import React from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, Instagram, ExternalLink } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { business } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal-950 text-white border-t border-brand-teal-800/30 pt-16 pb-24 lg:pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-brand-teal-800/30">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <div className="relative w-48 h-12">
              <Image
                src="/images/brand/canbazvet-logo-light.svg"
                alt="CanbazVet Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-brand-teal-100/80 leading-relaxed">
              {business.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CanbazVet Instagram"
                className="p-2.5 rounded-xl bg-brand-teal-900 hover:bg-brand-lime-500 hover:text-brand-teal-950 text-brand-lime-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={business.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CanbazVet Linktree"
                className="p-2.5 rounded-xl bg-brand-teal-900 hover:bg-brand-lime-500 hover:text-brand-teal-950 text-brand-lime-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-base font-bold text-brand-lime-500 uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#anasayfa" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#hakkimizda" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#veteriner-hekim" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Veteriner Hekim
                </a>
              </li>
              <li>
                <a href="#klinik" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Klinik Galerisi
                </a>
              </li>
              <li>
                <a href="#acil-hat" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  7/24 Acil Hat
                </a>
              </li>
              <li>
                <a href="#sss" className="text-brand-teal-100/80 hover:text-white transition-colors">
                  Sık Sorulan Sorulan
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="text-base font-bold text-brand-lime-500 uppercase tracking-wider mb-4">
              Çalışma Saatleri
            </h3>
            <div className="space-y-3 text-sm text-brand-teal-100/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-lime-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Hafta İçi & Cumartesi</p>
                  <p>09:30 – 19:30</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-brand-lime-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Pazar Günü</p>
                  <p>12:00 – 17:00</p>
                </div>
              </div>
              <div className="pt-2 text-xs text-brand-lime-400 font-medium">
                * 7/24 Telefon ile acil durum yönlendirme hattı aktiftir.
              </div>
            </div>
          </div>

          {/* Contact & Address Column */}
          <div>
            <h3 className="text-base font-bold text-brand-lime-500 uppercase tracking-wider mb-4">
              İletişim & Konum
            </h3>
            <div className="space-y-3 text-sm text-brand-teal-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-lime-500 shrink-0 mt-1" />
                <span>{business.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime-500 shrink-0" />
                <a
                  href={business.phone.telLink}
                  className="font-bold text-white hover:text-brand-lime-400 transition-colors"
                >
                  {business.phone.display}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={business.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-lime-500 hover:underline"
                >
                  <span>Google Maps'te Yol Tarifi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-teal-100/60">
          <p>© {currentYear} CanbazVet Veteriner Kliniği. Tüm hakları saklıdır.</p>
          <p>Veteriner Hekim Berk Canbaz · Edirne</p>
        </div>
      </Container>
    </footer>
  );
}
