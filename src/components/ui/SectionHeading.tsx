import React from "react";

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
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isDark
              ? "bg-brand-lime-500/20 text-brand-lime-400 border border-brand-lime-500/30"
              : "bg-brand-teal-900/10 text-brand-teal-900 border border-brand-teal-900/20"
          }`}
        >
          {badge}
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
