"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { business, socialImages } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { weekdayRange } from "@/lib/hours";
import { trackEvent } from "@/lib/analytics";

export function InstagramFeed() {
  const { c } = useLanguage();
  const { social, phone } = business;

  return (
    <section className="bg-paper py-section">
      <Container>
        <SectionHeading
          kicker="Instagram"
          title="Poliklinik Yaşamı & Paylaşımlar"
          lede="Sosyal medya hesabımızdan poliklinik ortamımız ve güncel duyurularımız."
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
          <Reveal>
            <div className="rounded-panel border border-navy-950/10 bg-white p-7 shadow-card">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-display-sm font-extrabold text-navy-950 transition-colors duration-200 hover:text-cyan-600"
              >
                <Instagram className="h-5 w-5 shrink-0 text-cyan-600" aria-hidden />
                @novadentclinicsedirne
                <span className="sr-only">({c.a11y.newTab})</span>
              </a>

              <dl className="mt-6 space-y-4 border-t border-navy-950/10 pt-6 text-body-sm">
                <div>
                  <dt className="text-ink-muted">Poliklinik Adı</dt>
                  <dd className="font-bold text-navy-950">
                    NOVADENT Ağız ve Diş Sağlığı Polikliniği
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">{c.contact.hoursLabel}</dt>
                  <dd className="mt-0.5 font-semibold tabular-nums text-navy-950">
                    Pzt–Cuma {weekdayRange}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">İletişim Hattı</dt>
                  <dd>
                    <a
                      href={phone.telLink}
                      className="inline-flex min-h-[44px] items-center font-bold tabular-nums text-navy-950 hover:text-cyan-600"
                    >
                      {phone.display}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3">
                <Button
                  variant="navy"
                  href={social.instagram}
                  target="_blank"
                  onClick={() => trackEvent("instagram_click", { location: "social_card" })}
                  icon={<Instagram className="h-5 w-5" aria-hidden />}
                  fullWidth
                >
                  Instagram'da Takip Et
                </Button>
              </div>
            </div>
          </Reveal>

          <div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {socialImages.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.id}
                  from="scale"
                  delay={(index % 2) * 80}
                  className="group relative aspect-square overflow-hidden rounded-card bg-navy-100 shadow-card"
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
                      alt="Novadent Clinics"
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 46vw, 25vw"
                      className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 grid place-items-center bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/50 group-hover:opacity-100"
                    >
                      <Instagram className="h-8 w-8 text-white" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
