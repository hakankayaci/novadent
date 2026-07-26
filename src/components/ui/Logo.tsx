import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
  alt: string;
}

/**
 * Official Novadent lockup with a measured quiet zone from the supplied artwork.
 */
export function Logo({ className = "", priority = false, alt }: LogoProps) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/brand/novadent-header-lockup-v2.webp"
        alt={alt}
        width={176}
        height={60}
        priority={priority}
        sizes="(max-width: 639px) 132px, 176px"
        className="h-auto w-[8.25rem] rounded-md object-contain sm:w-44"
      />
    </span>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
  alt?: string;
}

/** The emblem mark on its own for tight spaces. */
export function LogoMark({ size = 36, className = "", alt = "" }: LogoMarkProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm overflow-hidden p-1 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label={alt || undefined}
      aria-hidden={!alt ? true : undefined}
    >
      <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 22L16 6L24 22"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 16C13.5 19 18.5 19 21 16"
          stroke="#00B7DF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="22" cy="13" r="1.75" fill="#00B7DF" />
      </svg>
    </div>
  );
}

/** Dark-surface lockup for dark headers and footer. */
export function LogoOnDark({
  className = "",
  alt,
  priority = false,
}: {
  className?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <span className="rounded-xl bg-white/95 p-1.5 shadow-sm">
        <Image
          src="/images/brand/novadent-header-lockup-v2.webp"
          alt={alt}
          width={160}
          height={54}
          priority={priority}
          sizes="(max-width: 639px) 144px, 160px"
          className="h-auto w-36 rounded-md object-contain sm:w-40"
        />
      </span>
    </span>
  );
}
