import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-md transition-all ${
            isDark
              ? "bg-brand-teal-900/90 text-brand-lime-400 border border-brand-lime-500/30"
              : "bg-white text-brand-teal-950 border border-brand-teal-900/15 shadow-sm"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-lime-500 shrink-0" />
          <span>{badge}</span>
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-brand-teal-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-brand-teal-100/90" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
