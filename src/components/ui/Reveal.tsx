"use client";

import React, { useEffect, useRef, useState } from "react";

type Axis = "up" | "scale" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger in ms, applied as a CSS transition delay. */
  delay?: number;
  from?: Axis;
  as?: "div" | "li" | "section" | "article" | "header";
}

const FROM: Record<Axis, React.CSSProperties> = {
  up: { ["--reveal-y" as string]: "1.75rem" },
  scale: { ["--reveal-y" as string]: "1rem", ["--reveal-scale" as string]: "0.975" },
  none: { ["--reveal-y" as string]: "0rem" },
};

/**
 * Scroll reveal that enhances an already-visible element.
 *
 * The server renders no `data-reveal` attribute, so the default state is visible. On
 * mount we only opt an element into the hidden start state when it is still below the
 * fold -- anything already on screen stays put, which avoids the flash you get from
 * hiding above-the-fold content and animating it back in.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "pending" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount: leave it visible rather than flashing it out.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setState("pending");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("in");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      data-reveal={state === "idle" ? undefined : state}
      style={
        state === "idle"
          ? undefined
          : { ...FROM[from], ["--reveal-delay" as string]: `${delay}ms` }
      }
    >
      {children}
    </Tag>
  );
}
