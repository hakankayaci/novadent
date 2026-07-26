"use client";

import Image from "next/image";
import { ExternalLink, Instagram } from "lucide-react";
import { business, socialImages } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { weekdayRange } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

/**
 * A branded photo strip, not a replica of Instagram's interface.
 *
 * The previous version imitated the Instagram profile UI complete with a blue verified
 * checkmark, follower/post counts and per-post like and comment numbers -- none of which
 * came from Instagram. Everything shown here is either a real clinic photograph or a
 * fact from src/data/site.ts.
 */
export function InstagramFeed() {
  const { c } = useLanguage();
  const { social, phone, veterinarian } = business;

  return (
    <section className="bg-paper py-section">
      <Container>
        <SectionHeading
          kicker={c.instagram.badge}
          title={c.instagram.title}
          lede={c.instagram.desc}
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
          <Reveal>
            <div className="rounded-panel border border-pine-950/8 bg-white p-7 shadow-card">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-display-sm font-bold text-pine-950 transition-colors duration-200 hover:text-pine-700"
              >
                <Instagram className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden />
                @canbazvetedirne
                <span className="sr-only">({c.a11y.newTab})</span>
              </a>

              <dl className="mt-6 space-y-4 border-t border-pine-950/8 pt-6 text-body-sm">
                <div>
                  <dt className="text-ink-muted">{c.instagram.bioVetLabel}</dt>
                  <dd className="font-semibold text-pine-950">
                    {veterinarian.name}
                    <a
                      href={veterinarian.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex min-h-[36px] items-center font-medium text-leaf-700 hover:underline"
                    >
                      {veterinarian.handle}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">{c.instagram.bioHours}</dt>
                  <dd className="mt-0.5 font-semibold tabular-nums text-pine-950">
                    {weekdayRange}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">{c.instagram.bioEmergency}</dt>
                  <dd>
                    <a
                      href={phone.telLink}
                      className="inline-flex min-h-[40px] items-center font-semibold tabular-nums text-pine-950 hover:text-pine-700"
                    >
                      {phone.display}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3">
                <Button
                  variant="pine"
                  href={social.instagram}
                  target="_blank"
                  onClick={() => trackEvent("instagram_click", { location: "social" })}
                  icon={<Instagram className="h-5 w-5" aria-hidden />}
                  fullWidth
                >
                  {c.instagram.followCta}
                </Button>
                <Button
                  variant="outline"
                  href={social.linktree}
                  target="_blank"
                  iconAfter={<ExternalLink className="h-4 w-4" aria-hidden />}
                  fullWidth
                >
                  {c.instagram.linkCta}
                </Button>
              </div>
            </div>
          </Reveal>

          <div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {socialImages.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.id}
                  from="scale"
                  delay={(index % 3) * 80}
                  className="group relative aspect-square overflow-hidden rounded-card bg-pine-100 shadow-card"
                >
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("instagram_click", { location: `grid_${item.id}` })}
                    className="block h-full w-full"
                  >
                    <Image
                      src={item.src}
                      alt={c.instagram.gridAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 20vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 grid place-items-center bg-pine-950/0 opacity-0 transition-all duration-300 group-hover:bg-pine-950/45 group-hover:opacity-100"
                    >
                      <Instagram className="h-7 w-7 text-white" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <p className="mt-5 text-body-sm text-ink-muted">{c.instagram.note}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
