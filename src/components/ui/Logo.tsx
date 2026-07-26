import Image from "next/image";

interface LogoProps {
  /** Rendered width in CSS pixels; the intrinsic asset is 952x227 so it stays sharp. */
  width?: number;
  className?: string;
  priority?: boolean;
  alt: string;
}

/**
 * The clinic's actual signboard logo, not a redraw. `canbazvet-logo.png` is cropped
 * straight from the brand artwork, so the emblem, the CanbazVet lettering and the
 * VETERİNER KLİNİĞİ rule are exactly what is on the building.
 *
 * The wordmark ink is a deep pine green, so the lockup only belongs on a light surface.
 * On dark sections use `LogoMark` with a wordmark set in live type, or place this on a
 * light plate.
 */
export function Logo({ width = 208, className = "", priority = false, alt }: LogoProps) {
  return (
    <Image
      src="/images/brand/canbazvet-logo.png"
      alt={alt}
      width={width}
      height={Math.round((width * 227) / 952)}
      priority={priority}
      className={className}
      sizes={`${width}px`}
    />
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
  alt?: string;
}

/** The heart emblem on its own, for tight spaces and dark surfaces. */
export function LogoMark({ size = 40, className = "", alt = "" }: LogoMarkProps) {
  return (
    <Image
      src="/images/brand/canbazvet-emblem.png"
      alt={alt}
      width={size}
      height={size}
      aria-hidden={alt === "" ? true : undefined}
      className={className}
      sizes={`${size}px`}
    />
  );
}

/**
 * Dark-surface lockup: the emblem sits on a light plate that echoes the white signboard
 * panel, and the wordmark is live type so it stays crisp and recolourable.
 */
export function LogoOnDark({ className = "", alt }: { className?: string; alt: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-card">
        <LogoMark size={30} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[1.375rem] font-bold tracking-tight text-white">
          Canbaz<span className="text-leaf-300">Vet</span>
          <span className="sr-only"> — {alt}</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-pine-100/70">
          Veteriner Kliniği
        </span>
      </span>
    </span>
  );
}
