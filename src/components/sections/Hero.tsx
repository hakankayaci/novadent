"use client";

import Image from "next/image";
import { Clock, MapPin, Navigation, Phone, Star } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { shortHours } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const { c } = useLanguage();
  const { address } = business;

  return (
    <section
      id="anasayfa"
      className="relative isolate overflow-hidden bg-pine-950 text-white"
    >
      {/* Soft depth behind the composition. No hard shapes, so long headings never collide. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] -top-[35%] h-[42rem] w-[42rem] rounded-full bg-pine-700/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[45%] -left-[10%] h-[34rem] w-[34rem] rounded-full bg-leaf-700/12 blur-3xl"
      />

      <Container className="relative pb-section-sm pt-10 lg:pb-section lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          {/* Copy column. On mobile the portrait follows the headline, so a visitor sees a
              face before a wall of text -- hence the explicit order classes below. */}
          <div className="order-1 max-w-2xl">
            <div className="animate-rise-in">
              <StatusPill>
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {c.hero.badge}
              </StatusPill>
            </div>

            <h1
              className="mt-6 animate-rise-in text-display-xl font-bold"
              style={{ animationDelay: "80ms" }}
            >
              {c.hero.titleLead}{" "}
              <span className="text-leaf-300">{c.hero.titleAccent}</span>
            </h1>

            <p
              className="mt-6 max-w-prose animate-rise-in text-body-lg text-pine-100/85"
              style={{ animationDelay: "160ms" }}
            >
              {c.hero.desc}
            </p>

            <dl
              className="mt-7 animate-rise-in space-y-2.5 border-t border-white/12 pt-6 text-body-sm text-pine-100/80"
              style={{ animationDelay: "220ms" }}
            >
              <div className="flex items-start gap-2.5">
                <dt className="shrink-0 pt-0.5">
                  <MapPin className="h-4 w-4 text-leaf-300" aria-hidden />
                  <span className="sr-only">{c.contact.addressLabel}</span>
                </dt>
                <dd>
                  {address.neighborhood}, {address.street} · {address.city}
                </dd>
              </div>
              <div className="flex items-start gap-2.5">
                <dt className="shrink-0 pt-0.5">
                  <Clock className="h-4 w-4 text-leaf-300" aria-hidden />
                  <span className="sr-only">{c.contact.hoursLabel}</span>
                </dt>
                <dd className="font-medium text-white">{shortHours(c)}</dd>
              </div>
            </dl>

            <div
              className="mt-8 flex animate-rise-in flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "280ms" }}
            >
              <Button
                variant="emergency"
                size="lg"
                href={business.phone.telLink}
                onClick={() => trackEvent("phone_click", { location: "hero" })}
                icon={<Phone className="h-5 w-5" aria-hidden />}
              >
                {c.hero.ctaCall}
                <span className="ml-1.5 hidden font-normal tabular-nums opacity-90 sm:inline">
                  {business.phone.display}
                </span>
              </Button>

              <Button
                variant="leaf"
                size="lg"
                href={business.maps.directionsUrl}
                target="_blank"
                onClick={() => trackEvent("directions_click", { location: "hero" })}
                icon={<Navigation className="h-5 w-5" aria-hidden />}
              >
                {c.hero.ctaDirections}
              </Button>

              <Button
                variant="onDark"
                size="lg"
                href={business.maps.reviewsUrl}
                target="_blank"
                onClick={() => trackEvent("google_reviews_click", { location: "hero" })}
                icon={<Star className="h-5 w-5 text-leaf-300" aria-hidden />}
              >
                {c.hero.ctaReviews}
              </Button>
            </div>
          </div>

          {/* Portrait column */}
          <div className="order-2 animate-scale-in" style={{ animationDelay: "120ms" }}>
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-pine-900 shadow-panel ring-1 ring-white/12">
                <Image
                  src="/images/team/berk-canbaz.webp"
                  alt={c.hero.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 42vw"
                  className="object-cover object-[center_18%]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-pine-950 via-pine-950/70 to-transparent"
                />

                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-card border border-white/12 bg-pine-950/80 p-4 backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-leaf-300">
                      {c.hero.cardRole}
                    </p>
                    <p className="mt-0.5 truncate text-body-lg font-bold text-white">
                      {business.veterinarian.name}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[0.6875rem] text-pine-100/65">
                      {c.hero.cardEmergencyLabel}
                    </p>
                    <p className="mt-0.5 text-body-sm font-bold text-leaf-300">
                      {c.hero.cardEmergencyValue}
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
