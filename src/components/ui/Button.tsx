import React from "react";

type Variant = "emergency" | "leaf" | "pine" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

const BASE =
  "sheen group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl " +
  "font-semibold leading-tight transition-[transform,box-shadow,background-color,color] duration-300 " +
  "ease-out will-change-transform focus-visible:outline-offset-4 active:translate-y-0 active:scale-[0.98] " +
  // Long BG/EL labels must wrap instead of bursting out of the button.
  "text-center [text-wrap:balance]";

const VARIANTS: Record<Variant, string> = {
  emergency:
    "bg-alert-600 text-white shadow-alert hover:-translate-y-0.5 hover:bg-alert-500 hover:shadow-lift",
  leaf:
    "bg-leaf-300 text-pine-950 shadow-card hover:-translate-y-0.5 hover:bg-leaf-400 hover:shadow-lift",
  pine:
    "bg-pine-700 text-white shadow-card hover:-translate-y-0.5 hover:bg-pine-600 hover:shadow-lift",
  outline:
    "border-2 border-pine-700/25 bg-white text-pine-800 hover:-translate-y-0.5 hover:border-pine-700/50 hover:bg-pine-50 hover:shadow-card",
  ghost: "text-pine-800 hover:bg-pine-50",
  onDark:
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/16",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2.5 text-body-sm",
  md: "px-5 py-3 text-body",
  lg: "px-6 py-4 text-body-lg",
};

function classes({ variant = "pine", size = "md", fullWidth, className = "" }: CommonProps) {
  return [BASE, VARIANTS[variant], SIZES[size], fullWidth ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");
}

function Content({ icon, iconAfter, children }: Pick<CommonProps, "icon" | "iconAfter" | "children">) {
  return (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconAfter && (
        <span className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {iconAfter}
        </span>
      )}
    </>
  );
}

export function Button(props: ButtonProps | AnchorProps) {
  const { variant, size, children, icon, iconAfter, fullWidth, className, ...rest } = props;
  const cn = classes({ variant, size, fullWidth, className, children });

  if (typeof rest.href === "string") {
    const anchor = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a
        {...anchor}
        className={cn}
        rel={anchor.rel ?? (anchor.target === "_blank" ? "noopener noreferrer" : undefined)}
      >
        <Content icon={icon} iconAfter={iconAfter}>
          {children}
        </Content>
      </a>
    );
  }

  const button = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...button} type={button.type ?? "button"} className={cn}>
      <Content icon={icon} iconAfter={iconAfter}>
        {children}
      </Content>
    </button>
  );
}
