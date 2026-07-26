import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Short section name, rendered inline beside a hairline rule -- not as a stacked eyebrow. */
  kicker?: string;
  title: React.ReactNode;
  lede?: string;
  theme?: "light" | "dark";
  align?: "split" | "center";
  className?: string;
  id?: string;
}

/**
 * Section opener.
 *
 * Deliberately not "small uppercase label stacked above every heading" -- that reads as
 * template scaffolding once it appears on eight sections in a row. Instead the section
 * name sits on the same baseline as a hairline rule, and the lede moves into a second
 * column on wide screens so the heading gets to be the only large thing in the row.
 */
export function SectionHeading({
  kicker,
  title,
  lede,
  theme = "light",
  align = "split",
  className = "",
  id,
}: SectionHeadingProps) {
  const dark = theme === "dark";

  return (
    <Reveal
      as="header"
      className={[
        align === "center" ? "mx-auto max-w-3xl text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {kicker && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span
            aria-hidden
            className={`h-px w-8 ${dark ? "bg-leaf-300/60" : "bg-pine-700/30"}`}
          />
          <span
            className={`text-label font-semibold ${dark ? "text-leaf-300" : "text-pine-700"}`}
          >
            {kicker}
          </span>
        </div>
      )}

      <div
        className={
          align === "split" && lede
            ? "grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14"
            : ""
        }
      >
        <h2
          id={id}
          className={`text-display-lg font-bold ${dark ? "text-white" : "text-pine-950"}`}
        >
          {title}
        </h2>

        {lede && (
          <p
            className={`max-w-prose text-body-lg ${
              align === "center" ? "mx-auto mt-4" : ""
            } ${dark ? "text-pine-100/80" : "text-ink-soft"}`}
          >
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/**
 * A pill that carries live information -- a location, an open/closed state. Used
 * sparingly and never as decoration above a heading.
 */
export function StatusPill({
  children,
  theme = "dark",
  pulse = false,
  className = "",
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
  pulse?: boolean;
  className?: string;
}) {
  const dark = theme === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-body-sm font-semibold ${
        dark
          ? "border border-leaf-300/25 bg-pine-900/70 text-leaf-300"
          : "border border-pine-700/15 bg-white text-pine-800 shadow-card"
      } ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-leaf-400" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
        </span>
      )}
      {children}
    </span>
  );
}
