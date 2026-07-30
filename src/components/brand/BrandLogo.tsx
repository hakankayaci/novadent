export type BrandLogoTone = "light" | "dark";

export interface BrandLogoProps {
  /** Use an empty string when the surrounding link already names the clinic. */
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  tone?: BrandLogoTone;
}

/** Official NOVADENT lockup extracted from the supplied clinic artwork. */
export function BrandLogo({
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  tone = "light",
}: BrandLogoProps) {
  const src =
    tone === "dark"
      ? "/images/novadent/brand/logo-lockup-white.webp"
      : "/images/novadent/brand/logo-lockup-navy.webp";

  return (
    <span
      className={`inline-flex w-[120px] shrink-0 select-none sm:w-[184px] ${className}`}
      data-brand-logo-tone={tone}
    >
      {/* The pre-compressed local lockup avoids shipping the next/image client runtime in the sticky header. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={838}
        height={284}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
        className={`h-auto w-full object-contain ${imageClassName}`}
      />
    </span>
  );
}
