import type { SVGProps } from "react";

type UiIconName =
  | "chevron-down"
  | "map-pin"
  | "menu"
  | "phone"
  | "x";

interface UiIconProps extends SVGProps<SVGSVGElement> {
  name: UiIconName;
}

export function UiIcon({ name, ...props }: UiIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {name === "chevron-down" ? <path d="m6 9 6 6 6-6" /> : null}
      {name === "map-pin" ? (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ) : null}
      {name === "menu" ? <path d="M4 6h16M4 12h16M4 18h16" /> : null}
      {name === "phone" ? (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      ) : null}
      {name === "x" ? <path d="M18 6 6 18M6 6l12 12" /> : null}
    </svg>
  );
}
