import React from "react";

interface LogoProps {
  width?: number;
  className?: string;
  priority?: boolean;
  alt: string;
}

/**
 * Novadent Clinics vector logo mark for light surfaces.
 */
export function Logo({ width = 192, className = "", alt }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ width: `${width}px` }}
      aria-label={alt}
      role="img"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-white shadow-sm ring-1 ring-navy-900/10">
        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-navy-950">
          NOV<span className="text-cyan-500">A</span>
        </span>
        <span className="mt-0.5 text-[0.55rem] font-bold uppercase tracking-[0.22em] text-navy-800/80">
          DENTAL CLINIC
        </span>
      </div>
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
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-white shadow-sm ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label={alt || undefined}
      aria-hidden={!alt ? true : undefined}
    >
      <svg className="h-3/4 w-3/4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      className={`inline-flex items-center gap-3 select-none ${className}`}
      aria-label={alt}
      role="img"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-white ring-1 ring-cyan-400/30">
        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-white">
          NOV<span className="text-cyan-400">A</span>
        </span>
        <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-cyan-100/75">
          DENTAL CLINIC
        </span>
      </div>
    </div>
  );
}
