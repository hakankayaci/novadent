"use client";

import Image from "next/image";
import { Clock, MapPin, Navigation, Phone, Star, MessageCircle } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";
import { shortHours } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const { c } = useLanguage();
  const { address, rating } = business;

  const whatsAppUrl = `${business.phone.whatsAppLink}?text=${encodeURIComponent(c.whatsAppDefaultMessage)}`;

  return (
    <section
      id="anasayfa"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] -top-[35%] h-[42rem] w-[42rem] rounded-full bg-navy-800/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[45%] -left-[10%] h-[34rem] w-[34rem] rounded-full bg-cyan-600/20 blur-3xl"
      />

      <Container className="relative pb-section-sm pt-8 lg:pb-section lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="order-1 max-w-2xl">
            <div className="animate-rise-in flex flex-wrap items-center gap-3">
              <StatusPill>
                <MapPin className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
                {c.hero.badge}
              </StatusPill>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-navy-900/80 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" aria-hidden />
                <span>{rating.score.toFixed(1)} ★ · {rating.reviewCount} {c.reviews.ratingCount.replace(/[\d,.\s]+/, "")}</span>
              </div>
            </div>

            <h1
              className="mt-5 animate-rise-in text-display-xl font-extrabold tracking-tight"
              style={{ animationDelay: "80ms" }}
            >
              {c.hero.titleLead}{" "}
              <span className="text-cyan-400">{c.hero.titleAccent}</span>
            </h1>

            <p
              className="mt-5 max-w-prose animate-rise-in text-body-lg text-navy-100/85 font-normal"
              style={{ animationDelay: "160ms" }}
            >
              {c.hero.desc}
            </p>

            <dl
              className="mt-6 animate-rise-in space-y-2 border-t border-white/12 pt-5 text-body-sm text-navy-100/80"
              style={{ animationDelay: "220ms" }}
            >
              <div className="flex items-start gap-2.5">
                <dt className="shrink-0 pt-0.5">
                  <MapPin className="h-4 w-4 text-cyan-400" aria-hidden />
                  <span className="sr-only">{c.contact.addressLabel}</span>
                </dt>
                <dd className="font-medium text-white/95">
                  {address.neighborhood}, {address.street} · {address.district} / {address.city}
                </dd>
              </div>
              <div className="flex items-start gap-2.5">
                <dt className="shrink-0 pt-0.5">
                  <Clock className="h-4 w-4 text-cyan-400" aria-hidden />
                  <span className="sr-only">{c.contact.hoursLabel}</span>
                </dt>
                <dd className="font-medium text-white">{shortHours(c)}</dd>
              </div>
            </dl>

            <div
              className="mt-7 flex animate-rise-in flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "280ms" }}
            >
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsAppUrl}
                target="_blank"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
                icon={<MessageCircle className="h-5 w-5" aria-hidden />}
              >
                {c.hero.ctaAppointment}
              </Button>

              <Button
                variant="cyan"
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
                variant="onDark"
                size="lg"
                href={business.maps.directionsUrl}
                target="_blank"
                onClick={() => trackEvent("directions_click", { location: "hero" })}
                icon={<Navigation className="h-5 w-5 text-cyan-400" aria-hidden />}
              >
                {c.hero.ctaDirections}
              </Button>
            </div>
          </div>

          <div className="order-2 animate-scale-in" style={{ animationDelay: "120ms" }}>
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] sm:aspect-[14/10] overflow-hidden rounded-panel bg-navy-900 shadow-panel ring-1 ring-white/15">
                <Image
                  src="/images/clinic/novadent-clinic.webp"
                  alt={c.hero.visualAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 45vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"
                />

                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-card border border-white/15 bg-navy-950/85 p-4 backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cyan-400">
                      {business.shortName}
                    </p>
                    <p className="mt-0.5 truncate text-body-lg font-bold text-white">
                      {business.name}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="flex items-center gap-1 text-cyan-400 font-bold text-body-sm">
                      <Star className="h-4 w-4 fill-cyan-400" aria-hidden />
                      <span>{rating.score.toFixed(1)}</span>
                    </div>
                    <p className="mt-0.5 text-[0.6875rem] text-navy-100/70">
                      {rating.reviewCount} {c.reviews.ratingCount.replace(/[\d,.\s]+/, "")}
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
