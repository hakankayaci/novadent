"use client";

import { ExternalLink, Instagram, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site";
import { navItems } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { LogoOnDark } from "@/components/ui/Logo";
import { useLanguage } from "@/lib/LanguageContext";
import { sundayRange, weekdayRange } from "@/lib/hours";

export function Footer() {
  const { c } = useLanguage();
  const { address, maps, phone, social } = business;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-950 pt-section-sm text-white">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div>
            <LogoOnDark alt={c.a11y.logoAlt} />
            <p className="mt-5 max-w-prose text-body-sm text-pine-100/70">
              {c.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram (${c.a11y.newTab})`}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/8 text-leaf-300 transition-colors duration-200 hover:bg-leaf-300 hover:text-pine-950"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Linktree (${c.a11y.newTab})`}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/8 text-leaf-300 transition-colors duration-200 hover:bg-leaf-300 hover:text-pine-950"
              >
                <ExternalLink className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label={c.footer.navHeading}>
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-leaf-300">
              {c.footer.navHeading}
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[32px] items-center text-body-sm text-pine-100/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label(c)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-leaf-300">
              {c.footer.hoursHeading}
            </h2>
            <dl className="mt-4 space-y-3 text-body-sm">
              <div>
                <dt className="text-pine-100/60">{c.hours.weekdaysLabel}</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-white">
                  {weekdayRange}
                </dd>
              </div>
              <div>
                <dt className="text-pine-100/60">{c.hours.sundayLabel}</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-white">
                  {sundayRange}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-body-sm text-leaf-300/85">{c.footer.emergencyNote}</p>
          </div>

          <div>
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-leaf-300">
              {c.footer.contactHeading}
            </h2>
            <address className="mt-4 space-y-3 text-body-sm not-italic">
              <p className="flex gap-2.5 text-pine-100/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
                <span>
                  {address.neighborhood}, {address.street}, {address.postalCode}{" "}
                  {address.district}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
                <a
                  href={phone.telLink}
                  className="inline-flex min-h-[40px] items-center font-semibold tabular-nums text-white transition-colors duration-200 hover:text-leaf-300"
                >
                  {phone.display}
                </a>
              </p>
            </address>
            <a
              href={maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[36px] items-center gap-1.5 text-body-sm font-semibold text-leaf-300 transition-colors duration-200 hover:text-leaf-400"
            >
              {c.footer.directionsCta}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-7 text-body-sm text-pine-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. {c.footer.rights}
          </p>
          <p>{c.footer.credit}</p>
        </div>
      </Container>
    </footer>
  );
}
