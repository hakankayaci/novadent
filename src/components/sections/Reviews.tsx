"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/**
 * Deliberately asserts no rating and quotes no customer.
 *
 * The previous version showed five filled gold stars and three "review themes" that no
 * visitor had written, which reads as genuine social proof. Reviews live on Google, so
 * this section sends people there and confines the cards to commitments the clinic makes
 * about itself -- clearly labelled as the clinic's own words.
 */
export function Reviews() {
  const { c } = useLanguage();

  return (
    <section id="yorumlar" className="scroll-mt-24 bg-white py-section">
      <Container>
        <SectionHeading
          kicker={c.reviews.badge}
          title={c.reviews.title}
          lede={c.reviews.desc}
          className="mb-12"
        />

        <Reveal>
          <div className="grid gap-6 rounded-panel bg-pine-950 p-7 text-white shadow-panel sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h3 className="text-display-md font-bold">{c.reviews.panelTitle}</h3>
              <p className="mt-3 max-w-prose text-body text-pine-100/80">
                {c.reviews.panelDesc}
              </p>
            </div>
            <Button
              variant="leaf"
              size="lg"
              href={business.maps.reviewsUrl}
              target="_blank"
              onClick={() => trackEvent("google_reviews_click", { location: "reviews" })}
              icon={<MapPin className="h-5 w-5" aria-hidden />}
              iconAfter={<ExternalLink className="h-4 w-4" aria-hidden />}
              className="shrink-0"
            >
              {c.reviews.readCta}
            </Button>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-pine-700/30" />
              <h3 className="text-label font-semibold text-pine-700">
                {c.reviews.commitmentsLabel}
              </h3>
            </div>
          </Reveal>

          <ul className="mt-7 grid gap-x-10 gap-y-2 border-t border-pine-950/10 sm:grid-cols-3">
            {c.reviews.commitments.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80} className="py-7">
                <h4 className="text-display-sm font-semibold text-pine-950">
                  {item.title}
                </h4>
                <p className="mt-2.5 max-w-prose text-body-sm text-ink-soft">{item.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
