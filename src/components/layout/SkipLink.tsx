"use client";

import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Must stay the first focusable element in the document, which is why it is rendered
 * above the emergency strip in src/app/page.tsx rather than inside the header.
 *
 * Styling lives in the `.skip-link` class in globals.css, not in `focus:` utilities: the
 * utility-variant version depended on Tailwind's emit order between the accessibility,
 * position and padding plugins, and reveals on plain `:focus` -- so a mouse click left it
 * stuck on screen.
 */
export function SkipLink() {
  const { c } = useLanguage();

  return (
    <a href="#main-content" className="skip-link">
      <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
      {c.a11y.skipLink}
    </a>
  );
}
