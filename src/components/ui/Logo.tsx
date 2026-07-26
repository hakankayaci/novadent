import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  className?: string;
  priority?: boolean;
  alt: string;
}

/**
 * Unclipped Official Novadent logo lockup from logo.jpg for light surfaces.
 */
export function Logo({ className = "", alt }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label={alt}
      role="img"
    >
      <Image
        src="/images/brand/full-logo.png"
        alt={alt}
        width={180}
        height={57}
        priority
        className="h-10 sm:h-12 w-auto object-contain object-left"
      />
    </div>
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
export function LogoOnDark({ className = "", alt }: { className?: string; alt: string }) {
  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label={alt}
      role="img"
    >
      <div className="rounded-xl bg-white/95 px-3 py-1.5 backdrop-blur-md shadow-sm">
        <Image
          src="/images/brand/full-logo.png"
          alt={alt}
          width={180}
          height={57}
          priority
          className="h-9 sm:h-10 w-auto object-contain object-center"
        />
      </div>
    </div>
  );
}
