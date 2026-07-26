"use client";

import { ExternalLink, Star, MapPin } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { trackEvent } from "@/lib/analytics";

/**
 * VERIFIED PATIENT REVIEWS PLACEHOLDER NOTE:
 * =========================================================================
 * Real Google patient review quotations can be inserted here when verified.
 * Per medical advertising guidelines, do not fabricate individual patient names,
 * quotes or treatment outcomes. The overall rating score (5.0) and review count (140)
 * are populated directly from the business info configuration in src/data/site.ts.
 * =========================================================================
 */
export function Reviews() {
  const { c } = useLanguage();
  const { rating } = business;

  return (
    <section id="degerlendirmeler" className="scroll-mt-24 bg-white py-section">
      <Container>
        <SectionHeading
          kicker={c.reviews.badge}
          title={c.reviews.title}
          lede={c.reviews.desc}
          className="mb-12"
        />

        <Reveal>
          <div className="grid gap-8 rounded-panel bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white shadow-panel lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex flex-col items-center justify-center rounded-card bg-white/10 p-6 backdrop-blur-md text-center shrink-0 border border-white/15">
                <span className="text-display-xl font-extrabold text-cyan-400 leading-none">
                  {rating.score.toFixed(1)}
                </span>
                <div className="mt-2 flex gap-1 text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cyan-400" />
                  ))}
                </div>
                <span className="mt-2 text-xs font-semibold text-navy-100/80">
                  {rating.reviewCount} {c.reviews.ratingCount.replace(/[\d,.\s]+/, "")}
                </span>
              </div>

              <div>
                <h3 className="text-display-md font-bold text-white">
                  NOVADENT Ağız ve Diş Sağlığı Polikliniği
                </h3>
                <p className="mt-2 max-w-prose text-body text-navy-100/80">
                  {c.reviews.googleDisclaimer}
                </p>
              </div>
            </div>

            <Button
              variant="cyan"
              size="lg"
              href={business.maps.reviewsUrl}
              target="_blank"
              onClick={() => trackEvent("google_reviews_click", { location: "reviews_section" })}
              icon={<MapPin className="h-5 w-5" aria-hidden />}
              iconAfter={<ExternalLink className="h-4 w-4" aria-hidden />}
              className="shrink-0"
            >
              {c.reviews.ctaReview}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
