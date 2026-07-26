"use client";

import { ExternalLink, Instagram, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site";
import { navItems } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { LogoOnDark } from "@/components/ui/Logo";
import { useLanguage } from "@/lib/LanguageContext";
import { saturdayRange, weekdayRange } from "@/lib/hours";

export function Footer() {
  const { c } = useLanguage();
  const { address, maps, phone, social } = business;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pt-section-sm text-white border-t border-white/10">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div>
            <LogoOnDark alt={c.a11y.logoAlt} />
            <p className="mt-5 max-w-prose text-body-sm text-navy-100/70">
              {c.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram (${c.a11y.newTab})`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/8 text-cyan-400 transition-colors duration-200 hover:bg-cyan-400 hover:text-navy-950"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook (${c.a11y.newTab})`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/8 text-cyan-400 transition-colors duration-200 hover:bg-cyan-400 hover:text-navy-950"
              >
                <span className="font-extrabold text-sm">f</span>
              </a>
              <a
                href={social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Linktree (${c.a11y.newTab})`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/8 text-cyan-400 transition-colors duration-200 hover:bg-cyan-400 hover:text-navy-950"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label={c.a11y.mainNav}>
            <h2 className="text-label font-bold uppercase tracking-[0.14em] text-cyan-400">
              {c.nav.home} & Navigasyon
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[32px] items-center text-body-sm text-navy-100/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label(c)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-label font-bold uppercase tracking-[0.14em] text-cyan-400">
              {c.contact.hoursLabel}
            </h2>
            <dl className="mt-4 space-y-3 text-body-sm">
              <div>
                <dt className="text-navy-100/60">Pazartesi – Cuma</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-white">
                  {weekdayRange}
                </dd>
              </div>
              <div>
                <dt className="text-navy-100/60">Cumartesi</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-white">
                  {saturdayRange}
                </dd>
              </div>
              <div>
                <dt className="text-navy-100/60">Pazar</dt>
                <dd className="mt-0.5 font-semibold text-cyan-400">
                  {c.hours.closed}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-label font-bold uppercase tracking-[0.14em] text-cyan-400">
              Şubelerimiz
            </h2>
            <div className="mt-4 space-y-3 text-body-sm">
              {business.branches.map((b) => (
                <div key={b.id}>
                  <p className="font-bold text-white">{b.name}</p>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:underline"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>Harita Konumu</span>
                  </a>
                </div>
              ))}
            </div>
            <a
              href={phone.telLink}
              className="mt-4 inline-flex min-h-[36px] items-center gap-1.5 text-body-sm font-bold text-white transition-colors duration-200 hover:text-cyan-400"
            >
              <Phone className="h-4 w-4 text-cyan-400" />
              <span>{phone.display}</span>
            </a>
          </div>
        </div>

        <div className="border-b border-white/10 py-6 text-center text-xs text-navy-100/60 max-w-4xl mx-auto">
          <p>{c.footer.medicalDisclaimer}</p>
        </div>

        <div className="flex flex-col gap-2 py-6 text-body-sm text-navy-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. {c.footer.copyright}
          </p>
          <p className="text-xs text-navy-100/50">{c.footer.privacyPolicy}</p>
        </div>
      </Container>
    </footer>
  );
}
