import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  GoogleIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/brand/BrandIcons";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FlossLine } from "@/components/site/FlossLine";
import { MapPanel } from "@/components/site/MapPanel";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { RevealObserver } from "@/components/site/RevealObserver";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  clinicRating,
  featuredReviews,
  remainingGoogleReviewCount,
  type Copy,
  type GalleryImageId,
  type TreatmentId,
} from "@/data/content";
import { business } from "@/data/site";
import {
  languages,
  localeRoots,
  type Language,
} from "@/lib/i18n";

interface HomePageProps {
  language: Language;
  copy: Copy;
}

interface GalleryItem {
  id: GalleryImageId;
  src: string;
  socialSrc?: string;
}

const gallery: GalleryItem[] = [
  {
    id: "waiting-lounge",
    src: "/images/novadent/clinic/lounge.webp",
    socialSrc: "/images/novadent/social/lounge.webp",
  },
  {
    id: "treatment-room",
    src: "/images/novadent/clinic/chair.webp",
    socialSrc: "/images/novadent/social/chair.webp",
  },
  {
    id: "panoramic-imaging",
    src: "/images/novadent/clinic/scanner.webp",
    socialSrc: "/images/novadent/social/scanner.webp",
  },
  {
    id: "dental-unit",
    src: "/images/novadent/clinic/dental-unit.webp",
    socialSrc: "/images/novadent/social/dental-unit.webp",
  },
  {
    id: "brand-wall",
    src: "/images/novadent/clinic/logo-wall.webp",
    socialSrc: "/images/novadent/social/logo-wall.webp",
  },
  {
    id: "clinic-room-wide",
    src: "/images/novadent/clinic/room-a.webp",
    socialSrc: "/images/novadent/social/room-a.webp",
  },
  {
    id: "treatment-suite",
    src: "/images/novadent/clinic/room-b.webp",
  },
];

const treatmentIds: TreatmentId[] = [
  "implant-tedavisi",
  "gulus-tasarimi",
  "estetik-dis-hekimligi",
  "dis-beyazlatma",
  "kanal-tedavisi",
  "dis-eti-tedavileri",
  "cocuk-dis-hekimligi",
  "genel-dis-sagligi",
];

const treatmentImages: Record<TreatmentId, string> = Object.fromEntries(
  treatmentIds.map((id) => [
    id,
    `/images/novadent/treatments/${id}.webp`,
  ]),
) as Record<TreatmentId, string>;

function whatsappUrl(message: string) {
  return `${business.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

function template(
  value: string,
  replacements: Record<string, string | number>,
) {
  return Object.entries(replacements).reduce(
    (result, [key, replacement]) =>
      result.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl" data-reveal>
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
          dark ? "text-aqua-400" : "text-aqua-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-display font-bold ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-prose text-lead ${
          dark ? "text-ink-100" : "text-copy-soft"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <span aria-label={label} className="inline-flex gap-0.5 text-gold">
      {Array.from({ length: 5 }, (_, index) => (
        <span aria-hidden key={index} className="text-base leading-none">
          ★
        </span>
      ))}
    </span>
  );
}

function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  pictureClassName = "block",
  loading = "lazy",
  fetchPriority = "auto",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  pictureClassName?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "auto" | "high" | "low";
}) {
  return (
    <picture className={pictureClassName}>
      <source srcSet={src.replace(/\.webp$/, ".avif")} type="image/avif" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

export function HomePage({ language, copy }: HomePageProps) {
  const localeRoot = localeRoots[language];
  const nav = [
    { label: copy.nav.treatments, href: "#tedaviler" },
    { label: copy.nav.clinic, href: "#klinik" },
    { label: copy.nav.international, href: "#uluslararasi" },
    { label: copy.nav.reviews, href: "#yorumlar" },
    { label: copy.nav.instagram, href: "#instagram" },
    { label: copy.nav.faq, href: "#sss" },
    { label: copy.nav.contact, href: "#iletisim" },
  ];
  const appointmentHref = whatsappUrl(copy.whatsapp.appointmentMessage);
  const galleryCopy = copy.clinic.items;
  const socialGallery = gallery.filter((item) => item.socialSrc).slice(0, 6);

  return (
    <>
      {/* THESIS: Porcelain calm meets a precise navy clinical core. OWN-WORLD: A single cyan floss line guides the page like a luminous shade reference. STORY: Trust first, care options, the real clinic, international planning, public proof, then direct contact. FIRST VIEWPORT: Mobile shows the branded clinic image before a separate readable navy message; desktop uses a 43/57 split. FORM: Restrained corners, editorial rules, real photography, Commissioner typography, and gold reserved only for Google stars. */}
      <a href="#ana-icerik" className="skip-link">
        {copy.a11y.skipToContent}
      </a>

      <SiteHeader
        language={language}
        homeHref={localeRoot}
        homeLabel={copy.a11y.logoAlt}
        navigation={nav}
        localeLabel={copy.a11y.selectLanguage}
        menuLabel={copy.a11y.primaryNavigation}
        closeMenuLabel={copy.a11y.closeMenu}
      />

      <main id="ana-icerik">
        <section
          id="anasayfa"
          className="relative overflow-hidden bg-ink-950"
          aria-labelledby="hero-title"
        >
          <div className="relative grid min-h-[640px] lg:grid-cols-[0.86fr_1.14fr]">
            <div className="order-2 flex min-w-0 items-center bg-ink-950 px-[var(--page-gutter)] py-14 text-white lg:order-1 lg:py-20">
              <div className="relative z-20 ml-auto min-w-0 w-full max-w-[38rem] lg:max-w-[35rem]">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-aqua-400">
                  {copy.hero.eyebrow}
                </p>
                <h1
                  id="hero-title"
                  className="font-display text-hero font-bold text-white"
                >
                  {copy.hero.title}{" "}
                  <span className="text-aqua-400">{copy.hero.accent}</span>
                </h1>
                <p className="mt-7 max-w-[36rem] text-lead text-ink-100">
                  {copy.hero.body}
                </p>

                <a
                  href={clinicRating.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex min-h-11 max-w-full flex-wrap items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <GoogleIcon className="h-5 w-5 shrink-0 rounded-full bg-white p-0.5" />
                  <Stars
                    label={template(copy.a11y.starRatingTemplate, {
                      score: clinicRating.value,
                    })}
                  />
                  <span>{copy.hero.ratingLabel}</span>
                </a>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={appointmentHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-bold text-[#062813] transition-transform duration-300 ease-out hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon
                      variant="glyph"
                      className="h-5 w-5"
                    />
                    {copy.hero.appointmentCta}
                  </a>
                  <a
                    href="#tedaviler"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {copy.nav.treatments}
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-7 flex max-w-[34rem] items-start gap-2 text-sm leading-6 text-ink-100">
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400"
                  />
                  {copy.hero.trustLine}
                </p>
              </div>
            </div>

            <div className="relative order-1 min-h-[19rem] min-w-0 bg-[#064361] lg:order-2 lg:min-h-[640px]">
              <picture className="block h-full min-w-0 w-full">
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/novadent/hero/hero-mobile.avif"
                  type="image/avif"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/novadent/hero/hero-mobile.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/novadent/hero/hero-desktop.avif"
                  type="image/avif"
                />
                <img
                  src="/images/novadent/hero/hero-desktop.webp"
                  alt={copy.hero.imageAlt}
                  width={1728}
                  height={910}
                  fetchPriority="high"
                  decoding="async"
                  className="hero-brand-image absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              <picture className="hero-smile-reveal absolute inset-0 z-[1] block h-full w-full">
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/novadent/hero/hero-smile-mobile.avif"
                  type="image/avif"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/novadent/hero/hero-smile-mobile.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/novadent/hero/hero-smile-desktop.avif"
                  type="image/avif"
                />
                <img
                  src="/images/novadent/hero/hero-smile-desktop.webp"
                  alt=""
                  width={1920}
                  height={1080}
                  fetchPriority="low"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover [object-position:70%_50%]"
                />
              </picture>
              <div
                aria-hidden
                className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(6,23,46,0.42),transparent_42%)] max-lg:bg-[linear-gradient(180deg,transparent_58%,rgba(6,23,46,0.34))]"
              />
              <div className="hero-smile-logo pointer-events-none absolute left-5 top-5 z-[3] sm:left-7 sm:top-7">
                <BrandLogo
                  alt=""
                  tone="dark"
                  priority
                  className="!w-[138px] sm:!w-[190px]"
                />
              </div>
              <FlossLine />
              <span aria-hidden className="tooth-shimmer">
                <span className="tooth-shimmer__enamel" />
              </span>
            </div>
          </div>
        </section>

        <section
          id="tedaviler"
          className="ambient-surface scroll-mt-24 py-section"
          aria-labelledby="treatments-title"
        >
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
              <div data-reveal className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-aqua-700">
                  {copy.treatments.eyebrow}
                </p>
                <h2
                  id="treatments-title"
                  className="font-display text-display font-bold text-ink-950"
                >
                  {copy.treatments.title}
                </h2>
                <p className="mt-5 text-lead text-copy-soft">
                  {copy.treatments.body}
                </p>
              </div>

              <p
                data-reveal
                className="flex items-start gap-3 border-t border-ink-950/15 pt-5 text-sm leading-6 text-copy-muted"
              >
                <CheckCircle2
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-aqua-700"
                />
                <span>
                  {copy.treatments.disclaimer}
                </span>
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {treatmentIds.map((id, index) => {
                const treatment = copy.treatments.items[id];
                const message = copy.whatsapp.treatmentMessageTemplate.replace(
                  "{treatment}",
                  treatment.title,
                );

                return (
                  <article
                    key={id}
                    data-reveal
                    data-treatment-id={id}
                    style={
                      {
                        "--reveal-delay": `${(index % 4) * 60}ms`,
                      } as CSSProperties
                    }
                    className="group flex min-w-0 flex-col rounded-surface border border-ink-950/10 bg-white p-5 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-aqua-500/55 focus-within:border-aqua-500"
                  >
                    <OptimizedImage
                      src={treatmentImages[id]}
                      alt=""
                      width={480}
                      height={480}
                      pictureClassName="block h-24 w-24 overflow-hidden rounded-[0.875rem] bg-mist"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    />

                    <h3 className="mt-5 text-xl font-bold leading-snug text-ink-950">
                      {treatment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-copy-soft">
                      {treatment.summary}
                    </p>
                    <a
                      href={whatsappUrl(message)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${copy.treatments.itemCta}: ${treatment.title}`}
                      className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-aqua-700 transition-colors hover:text-ink-950"
                    >
                      {copy.treatments.itemCta}
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="klinik"
          className="scroll-mt-24 bg-white py-section"
          aria-labelledby="clinic-title"
        >
          <div className="page-shell">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-aqua-700">
                  {copy.clinic.eyebrow}
                </p>
                <h2
                  id="clinic-title"
                  className="font-display text-display font-bold text-ink-950"
                >
                  {copy.clinic.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lead text-copy-soft">
                  {copy.clinic.body}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {copy.clinic.features.map((feature) => (
                  <div key={feature.title} className="border-l border-aqua-500 pl-4">
                    <p className="font-bold text-ink-950">{feature.title}</p>
                    <p className="mt-1 text-sm leading-6 text-copy-muted">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              aria-label={copy.clinic.galleryLabel}
              className="mt-12 grid auto-rows-[12rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-4"
            >
              {gallery.map((item, index) => {
                const imageCopy = galleryCopy[item.id];
                const layout =
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                      ? "col-span-2 row-span-2"
                      : index === 4
                        ? "col-span-2"
                      : "";

                return (
                  <figure
                    key={item.id}
                    data-reveal
                    className={`group relative min-w-0 overflow-hidden rounded-surface bg-mist ${layout}`}
                  >
                    <OptimizedImage
                      src={item.src}
                      alt={imageCopy.alt}
                      width={index < 5 ? 1020 : 512}
                      height={index < 5 ? 1020 : 384}
                      loading={item.id === "dental-unit" ? "eager" : "lazy"}
                      fetchPriority={item.id === "dental-unit" ? "low" : "auto"}
                      pictureClassName="absolute inset-0 block h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                      {imageCopy.title}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="uluslararasi"
          className="scroll-mt-24 bg-ink-950 py-section text-white"
          aria-labelledby="international-title"
        >
          <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-aqua-400">
                {copy.international.eyebrow}
              </p>
              <h2
                id="international-title"
                className="font-display text-display font-bold"
              >
                {copy.international.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lead text-ink-100">
                {copy.international.body}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {languages.map((option) => (
                  <span
                    key={option.code}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 text-sm font-semibold"
                  >
                    <FlagIcon
                      code={option.flagId.toLowerCase() as "tr" | "gb" | "gr" | "bg"}
                      className="h-4 w-6"
                    />
                    {option.nativeName}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3 text-sm leading-6 text-ink-100 sm:grid-cols-2">
                <p className="flex gap-2">
                  <Languages
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-aqua-400"
                  />
                  {copy.international.languageSupport}
                </p>
                <p className="flex gap-2">
                  <MessageCircle
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-aqua-400"
                  />
                  {copy.international.planningNote}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={appointmentHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-bold text-[#062813]"
                >
                  <WhatsAppIcon variant="glyph" className="h-5 w-5" />
                  {copy.international.whatsappCta}
                </a>
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
                >
                  <MapPin aria-hidden className="h-4 w-4" />
                  {copy.international.directionsCta}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3" data-reveal>
              {gallery.slice(5, 7).map((item, index) => (
                <figure
                  key={item.id}
                  className={`relative overflow-hidden rounded-surface bg-ink-800 ${
                    index === 0 ? "mt-8" : "mb-8"
                  }`}
                >
                  <OptimizedImage
                    src={item.src}
                    alt={galleryCopy[item.id].alt}
                    width={512}
                    height={384}
                    pictureClassName="block h-full w-full"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="yorumlar"
          className="scroll-mt-24 bg-porcelain py-section"
          aria-labelledby="reviews-title"
        >
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <GoogleIcon className="h-8 w-8" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-aqua-700">
                    {copy.reviews.eyebrow}
                  </span>
                </div>
                <h2
                  id="reviews-title"
                  className="font-display text-display font-bold text-ink-950"
                >
                  {copy.reviews.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lead text-copy-soft">
                  {copy.reviews.body}
                </p>
              </div>
              <div className="border-l-2 border-aqua-500 pl-5">
                <div className="flex items-center gap-3">
                  <strong className="font-display text-4xl text-ink-950">
                    {clinicRating.value.toFixed(1).replace(".", ",")}
                  </strong>
                  <Stars
                    label={template(copy.a11y.starRatingTemplate, {
                      score: clinicRating.value,
                    })}
                  />
                </div>
                <p className="mt-1 text-sm font-semibold text-copy-soft">
                  {template(copy.reviews.countTemplate, {
                    count: clinicRating.count,
                  })}
                </p>
              </div>
            </div>

            <div className="mt-10 grid border-y border-ink-950/15 lg:grid-cols-3">
              {featuredReviews.map((review, index) => {
                const translated = review.originalLanguage !== language;
                return (
                  <figure
                    key={review.id}
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${index * 70}ms`,
                      } as CSSProperties
                    }
                    className={`flex min-h-[19rem] flex-col py-7 lg:px-7 ${
                      index > 0 ? "border-t border-ink-950/15 lg:border-l lg:border-t-0" : ""
                    }`}
                  >
                    <Stars
                      label={template(copy.a11y.starRatingTemplate, {
                        score: review.rating,
                      })}
                    />
                    <blockquote className="mt-6 text-xl font-medium leading-8 text-ink-950">
                      “{translated ? review.translations[language] : review.originalText}”
                    </blockquote>
                    <figcaption className="mt-auto pt-7">
                      <span className="block font-bold text-ink-950">
                        {review.author}
                      </span>
                      <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-copy-muted">
                        {translated
                          ? copy.reviews.translatedLabel
                          : copy.reviews.originalLabel}
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p
                data-testid="verified-google-reviews"
                className="inline-flex max-w-2xl items-start gap-2 rounded-xl bg-aqua-100 px-3.5 py-2 text-sm font-semibold leading-6 text-ink-950"
              >
                <CheckCircle2
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-aqua-700"
                />
                {copy.reviews.verificationLabel}
              </p>
              <a
                href={clinicRating.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 max-w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-950 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-ink-800"
              >
                <GoogleIcon className="h-5 w-5 rounded-full bg-white p-0.5" />
                {template(copy.reviews.ctaTemplate, {
                  count: remainingGoogleReviewCount,
                })}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="instagram"
          className="scroll-mt-24 bg-white py-section"
          aria-labelledby="instagram-title"
        >
          <div className="page-shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <InstagramIcon variant="roundel" className="h-12 w-12" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-aqua-700">
                {copy.instagram.eyebrow}
              </p>
              <h2
                id="instagram-title"
                className="mt-4 font-display text-display font-bold text-ink-950"
              >
                {copy.instagram.title}
              </h2>
              <p className="mt-5 text-lead text-copy-soft">
                {copy.instagram.body}
              </p>
              <p className="mt-5 font-bold text-ink-950">
                {copy.instagram.handle}
              </p>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.instagram.profileLabel}
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-ink-950 px-5 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon variant="glyph" className="h-5 w-5" />
                {copy.instagram.followCta}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>

            <div
              aria-label={copy.instagram.gridLabel}
              className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3"
            >
              {socialGallery.map((item, index) => (
                <a
                  key={item.id}
                  href={business.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.instagram.viewPostLabel}: ${galleryCopy[item.id].title}`}
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${(index % 3) * 60}ms`,
                    } as CSSProperties
                  }
                  className="group relative aspect-square min-w-0 overflow-hidden rounded-surface bg-mist"
                >
                  <OptimizedImage
                    src={item.socialSrc!}
                    alt={galleryCopy[item.id].alt}
                    width={720}
                    height={720}
                    pictureClassName="absolute inset-0 block h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-ink-950/78 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <InstagramIcon variant="glyph" className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sss"
          className="scroll-mt-24 bg-porcelain py-section"
          aria-labelledby="faq-title"
        >
          <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-aqua-700">
                {copy.faq.eyebrow}
              </p>
              <h2
                id="faq-title"
                className="font-display text-display font-bold text-ink-950"
              >
                {copy.faq.title}
              </h2>
              <p className="mt-5 text-lead text-copy-soft">{copy.faq.body}</p>
            </div>
            <FaqAccordion items={copy.faq.items} />
          </div>
        </section>

        <section
          id="iletisim"
          className="scroll-mt-24 bg-white py-section"
          aria-labelledby="contact-title"
        >
          <div className="page-shell">
            <SectionIntro
              eyebrow={copy.contact.eyebrow}
              title={copy.contact.title}
              body={copy.contact.body}
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <div className="flex flex-col justify-between rounded-panel bg-ink-950 p-6 text-white shadow-lift sm:p-8">
                <div>
                  <div className="border-b border-white/15 pb-6">
                    <p className="flex items-center gap-2 text-sm font-bold text-aqua-400">
                      <MapPin aria-hidden className="h-4 w-4" />
                      {copy.contact.addressLabel}
                    </p>
                    <p className="mt-3 max-w-lg text-lg leading-8 text-white">
                      {copy.contact.address}
                    </p>
                  </div>
                  <div className="grid gap-6 border-b border-white/15 py-6 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold text-aqua-400">
                        <Phone aria-hidden className="h-4 w-4" />
                        {copy.contact.phoneLabel}
                      </p>
                      <a
                        href={business.phone.tel}
                        className="mt-3 inline-flex min-h-11 items-center text-lg font-semibold text-white hover:text-aqua-400"
                      >
                        {business.phone.international}
                      </a>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold text-aqua-400">
                        <Clock3 aria-hidden className="h-4 w-4" />
                        {copy.contact.hoursLabel}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-ink-100">
                        {copy.contact.hours}
                        <br />
                        {copy.contact.sundayClosed}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={business.phone.tel}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold hover:bg-white/10"
                  >
                    <Phone aria-hidden className="h-4 w-4" />
                    {copy.contact.callCta}
                  </a>
                  <a
                    href={appointmentHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 font-bold text-[#062813]"
                  >
                    <WhatsAppIcon variant="glyph" className="h-5 w-5" />
                    {copy.contact.whatsappCta}
                  </a>
                  <a
                    href={business.maps.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold hover:bg-white/10"
                  >
                    <MapPin aria-hidden className="h-4 w-4" />
                    {copy.contact.directionsCta}
                  </a>
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold hover:bg-white/10"
                  >
                    <InstagramIcon variant="glyph" className="h-5 w-5" />
                    {copy.contact.instagramCta}
                  </a>
                </div>
              </div>

              <MapPanel
                embedUrl={business.maps.embed}
                title={copy.a11y.mapTitle}
                buttonLabel={copy.contact.mapCta}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink-950 py-10 text-white">
        <div className="page-shell grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <BrandLogo alt="" tone="dark" className="w-[184px]" />
            <p className="mt-5 max-w-md text-sm leading-6 text-ink-100">
              {copy.footer.tagline}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-xs leading-5 text-ink-100">
              {copy.footer.medicalDisclaimer}
            </p>
            <p className="mt-4 text-xs text-ink-100">
              © {new Date().getFullYear()} NOVADENT · {copy.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      <MobileActionBar
        phoneHref={business.phone.tel}
        whatsappHref={appointmentHref}
        callLabel={copy.hero.callCta}
        whatsappLabel={copy.nav.appointment}
        ariaLabel={copy.a11y.mobileActions}
      />
      <RevealObserver />
    </>
  );
}
