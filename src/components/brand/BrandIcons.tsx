import { useId, type SVGProps } from "react";

export type BrandIconProps = Omit<SVGProps<SVGSVGElement>, "children">;

type IconAccessibilityProps = Pick<
  BrandIconProps,
  "aria-hidden" | "aria-label" | "aria-labelledby" | "role"
>;

function getAccessibilityProps({
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
}: IconAccessibilityProps) {
  const hasAccessibleName = Boolean(ariaLabel || ariaLabelledBy);

  return {
    "aria-hidden": ariaHidden ?? (hasAccessibleName ? undefined : true),
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    role: role ?? (hasAccessibleName ? "img" : undefined),
  };
}

/**
 * The four-colour Google G. Decorative by default so adjacent link/button
 * copy remains the single accessible name.
 */
export function GoogleIcon({
  className,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
  ...props
}: BrandIconProps) {
  const accessibility = getAccessibilityProps({
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    role,
  });

  return (
    <svg
      {...props}
      {...accessibility}
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      focusable="false"
      data-brand-icon="google"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.275c0-.79-.07-1.55-.204-2.275H12v4.51h6.45a5.51 5.51 0 0 1-2.393 3.514v2.927h3.877c2.27-2.09 3.556-5.174 3.556-8.676Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.957-1.073 7.934-2.91l-3.877-3.066c-1.073.72-2.443 1.146-4.057 1.146-3.126 0-5.774-2.112-6.72-4.95H1.274v3.16A11.996 11.996 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.22A7.216 7.216 0 0 1 4.904 12c0-.77.132-1.519.376-2.22V6.62H1.274A12.004 12.004 0 0 0 0 12c0 1.935.463 3.768 1.274 5.38l4.006-3.16Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.83c1.763 0 3.344.605 4.588 1.79l3.43-3.43C17.95 1.26 15.235 0 12 0 7.31 0 3.252 2.69 1.274 6.62L5.28 9.78C6.226 6.942 8.874 4.83 12 4.83Z"
      />
    </svg>
  );
}

export interface InstagramIconProps extends BrandIconProps {
  /**
   * `roundel` renders the full-colour app mark; `glyph` inherits currentColor
   * for compact controls that already provide their own surface.
   */
  variant?: "roundel" | "glyph";
}

/**
 * Instagram's camera mark with its recognisable local gradient.
 */
export function InstagramIcon({
  variant = "roundel",
  className,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
  ...props
}: InstagramIconProps) {
  const gradientId = `instagram-gradient-${useId().replace(/:/g, "")}`;
  const accessibility = getAccessibilityProps({
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    role,
  });

  return (
    <svg
      {...props}
      {...accessibility}
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      focusable="false"
      data-brand-icon="instagram"
      data-variant={variant}
    >
      {variant === "roundel" && (
        <>
          <defs>
            <linearGradient id={gradientId} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFDC80" />
              <stop offset=".22" stopColor="#F77737" />
              <stop offset=".46" stopColor="#E1306C" />
              <stop offset=".72" stopColor="#C13584" />
              <stop offset="1" stopColor="#405DE6" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
        </>
      )}

      <rect
        x="5.15"
        y="5.15"
        width="13.7"
        height="13.7"
        rx="4.15"
        stroke={variant === "roundel" ? "#fff" : "currentColor"}
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.35"
        stroke={variant === "roundel" ? "#fff" : "currentColor"}
        strokeWidth="1.8"
      />
      <circle cx="16.95" cy="7.15" r="1.05" fill={variant === "roundel" ? "#fff" : "currentColor"} />
    </svg>
  );
}

export interface WhatsAppIconProps extends BrandIconProps {
  /**
   * `roundel` renders the green official-style surface; `glyph` inherits
   * currentColor for buttons that already use WhatsApp green.
   */
  variant?: "roundel" | "glyph";
}

/**
 * WhatsApp speech-bubble and handset mark.
 */
export function WhatsAppIcon({
  variant = "roundel",
  className,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
  ...props
}: WhatsAppIconProps) {
  const accessibility = getAccessibilityProps({
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    role,
  });

  return (
    <svg
      {...props}
      {...accessibility}
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      focusable="false"
      data-brand-icon="whatsapp"
      data-variant={variant}
    >
      {variant === "roundel" && <circle cx="12" cy="12" r="12" fill="#25D366" />}
      <path
        fill={variant === "roundel" ? "#fff" : "currentColor"}
        transform="translate(3 3) scale(1.125)"
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 15.764l3.965-1.04A7.9 7.9 0 0 0 7.991 15.75h.003c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.323-5.494ZM7.994 14.416c-1.218 0-2.412-.328-3.456-.949l-.197-.117-2.35.616.627-2.291-.128-.235a6.565 6.565 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.668 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.099-.133.197-.514.646-.627.775-.115.133-.23.148-.427.05-.197-.1-.836-.308-1.59-.984-.59-.525-.986-1.173-1.1-1.371-.115-.198-.012-.304.086-.403.09-.088.198-.23.296-.345.1-.115.133-.198.198-.33.066-.133.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.473-.16-.389-.323-.336-.445-.342-.115-.006-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.474.205.842.327 1.129.418.475.151.907.13 1.249.079.38-.058 1.17-.48 1.336-.943.164-.462.164-.858.115-.943-.05-.084-.182-.132-.38-.23Z"
      />
    </svg>
  );
}

export {
  GoogleIcon as GoogleBrandIcon,
  InstagramIcon as InstagramBrandIcon,
  WhatsAppIcon as WhatsAppBrandIcon,
};
