import type { SVGProps } from "react";

export type FlagCode = "tr" | "gb" | "gr" | "bg";

export interface FlagIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  code: FlagCode;
}

function FlagArtwork({ code }: { code: FlagCode }) {
  switch (code) {
    case "tr":
      return (
        <>
          <rect width="24" height="16" fill="#E30A17" />
          <circle cx="8.35" cy="8" r="4.15" fill="#fff" />
          <circle cx="9.55" cy="8" r="3.32" fill="#E30A17" />
          <path
            fill="#fff"
            d="m13.73 5.96.47 1.45h1.52l-1.23.89.47 1.45-1.23-.9-1.23.9.47-1.45-1.23-.89h1.52l.47-1.45Z"
          />
        </>
      );

    case "gb":
      return (
        <>
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="4.15" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.9" />
          <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.3" />
          <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3.15" />
        </>
      );

    case "gr":
      return (
        <>
          <rect width="24" height="16" fill="#0D5EAF" />
          <path d="M0 1.778h24v1.778H0zm0 3.555h24v1.778H0zm0 3.556h24v1.778H0zm0 3.555h24v1.778H0z" fill="#fff" />
          <rect width="8.889" height="8.889" fill="#0D5EAF" />
          <path d="M3.556 0h1.777v8.889H3.556zM0 3.556h8.889v1.777H0z" fill="#fff" />
        </>
      );

    case "bg":
      return (
        <>
          <rect width="24" height="5.334" fill="#fff" />
          <rect y="5.333" width="24" height="5.334" fill="#00966E" />
          <rect y="10.666" width="24" height="5.334" fill="#D62612" />
        </>
      );
  }
}

/**
 * Deterministic SVG flags that render consistently on Windows and every other
 * platform. Decorative by default; pair with a visible language code/name.
 */
export function FlagIcon({
  code,
  className,
  style,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
  ...props
}: FlagIconProps) {
  const hasAccessibleName = Boolean(ariaLabel || ariaLabelledBy);

  return (
    <svg
      {...props}
      className={className}
      style={{ borderRadius: "0.15em", ...style }}
      viewBox="0 0 24 16"
      width="1.5em"
      height="1em"
      focusable="false"
      overflow="hidden"
      aria-hidden={ariaHidden ?? (hasAccessibleName ? undefined : true)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      role={role ?? (hasAccessibleName ? "img" : undefined)}
      data-flag={code}
    >
      <FlagArtwork code={code} />
    </svg>
  );
}
