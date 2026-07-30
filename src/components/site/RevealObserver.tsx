"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      items.forEach((item) => item.setAttribute("data-reveal", "in"));
      return;
    }

    const belowFold = items.filter((item) => {
      const rect = item.getBoundingClientRect();
      return rect.top > window.innerHeight * 0.72;
    });

    belowFold.forEach((item) => item.setAttribute("data-reveal", "pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    belowFold.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
