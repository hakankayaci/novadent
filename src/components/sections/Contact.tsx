"use client";

import { useState } from "react";
import {
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { sundayRange, weekdayRange } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const { c } = useLanguage();
  const [mapRequested, setMapRequested] = useState(false);
  const { coordinates, maps, phone, social } = business;

  return (
    <section id="iletisim" className="scroll-mt-24 bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.contact.badge}
          title={c.contact.title}
          lede={c.contact.desc}
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <Reveal>
            <div className="flex h-full flex-col rounded-panel bg-pine-950 p-7 text-white shadow-panel sm:p-9">
              <h3 className="text-display-sm font-semibold">{c.contact.cardTitle}</h3>

              <dl className="mt-7 flex-1 space-y-6">
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-body-sm text-pine-100/65">
                      {c.contact.addressLabel}
                    </dt>
                    <dd className="mt-1 text-body font-medium text-white">
                      {c.contact.addressFull}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-body-sm text-pine-100/65">
                      {c.contact.phoneLabel}
                    </dt>
                    <dd>
                      <a
                        href={phone.telLink}
                        onClick={() => trackEvent("phone_click", { location: "contact" })}
                        className="mt-0.5 inline-flex min-h-[44px] items-center text-display-sm font-bold tabular-nums text-leaf-300 transition-colors duration-200 hover:text-leaf-400"
                      >
                        {phone.display}
                      </a>
                      <span className="mt-0.5 block text-body-sm text-pine-100/60">
                        {c.contact.phoneNote}
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-leaf-300">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <dt className="text-body-sm text-pine-100/65">
                      {c.contact.hoursLabel}
                    </dt>
                    <dd className="mt-1.5 space-y-1 text-body">
                      <span className="flex items-baseline justify-between gap-4">
                        <span className="text-pine-100/85">{c.hours.weekdaysLabel}</span>
                        <span className="font-semibold tabular-nums text-white">
                          {weekdayRange}
                        </span>
                      </span>
                      <span className="flex items-baseline justify-between gap-4">
                        <span className="text-pine-100/85">{c.hours.sundayLabel}</span>
                        <span className="font-semibold tabular-nums text-white">
                          {sundayRange}
                        </span>
                      </span>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 space-y-3 border-t border-white/12 pt-7">
                <Button
                  variant="emergency"
                  fullWidth
                  href={phone.telLink}
                  icon={<Phone className="h-5 w-5" aria-hidden />}
                >
                  {c.contact.callCta}
                </Button>
                <Button
                  variant="leaf"
                  fullWidth
                  href={maps.directionsUrl}
                  target="_blank"
                  onClick={() => trackEvent("directions_click", { location: "contact" })}
                  icon={<Navigation className="h-5 w-5" aria-hidden />}
                >
                  {c.contact.directionsCta}
                </Button>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 text-body-sm font-medium text-pine-100/70 transition-colors duration-200 hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
                  {c.contact.instagramCta}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="flex h-full min-h-[26rem] flex-col rounded-panel border border-pine-950/8 bg-white p-4 shadow-card">
              <div className="relative flex-1 overflow-hidden rounded-card bg-pine-50">
                {/*
                  The iframe is only mounted once requested. Previously it rendered
                  unconditionally behind a "load the map" button, so the third-party
                  request fired on every page view and the button did nothing.
                */}
                {mapRequested ? (
                  <iframe
                    title={c.a11y.mapTitle}
                    src={maps.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pine-100 text-pine-700">
                      <MapPin className="h-7 w-7" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-display-sm font-semibold text-pine-950">
                        {c.contact.mapTitle}
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-body-sm text-ink-soft">
                        {c.contact.mapDesc}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setMapRequested(true);
                        trackEvent("map_open", {});
                      }}
                    >
                      {c.contact.mapLoadCta}
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 text-body-sm">
                <span className="text-ink-muted">
                  {c.contact.coordsLabel}:{" "}
                  <span className="tabular-nums">
                    {coordinates.latitude}, {coordinates.longitude}
                  </span>
                </span>
                <a
                  href={maps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-1.5 font-semibold text-pine-700 transition-colors duration-200 hover:text-pine-600"
                >
                  {c.contact.openInMaps}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
