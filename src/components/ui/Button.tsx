import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "emergency" | "outline" | "ghost" | "lime" | "headerLime";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] cursor-pointer select-none min-h-[44px] btn-shimmer";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-teal-900 to-brand-teal-950 text-white hover:from-brand-teal-800 hover:to-brand-teal-900 focus-visible:ring-brand-teal-900 shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-brand-teal-700/40",
    secondary:
      "bg-white text-brand-teal-950 hover:bg-brand-teal-50 focus-visible:ring-brand-teal-800 border-2 border-brand-teal-800/20 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    emergency:
      "bg-gradient-to-r from-brand-red-600 to-brand-red-500 text-white hover:from-brand-red-500 hover:to-brand-red-600 focus-visible:ring-brand-red-600 shadow-emergency hover:glow-red hover:-translate-y-0.5 border border-red-400/30",
    lime:
      "bg-gradient-to-r from-brand-lime-500 to-brand-lime-400 text-brand-teal-950 hover:from-brand-lime-400 hover:to-brand-lime-500 focus-visible:ring-brand-lime-500 shadow-md hover:glow-lime hover:-translate-y-0.5 font-extrabold border border-brand-lime-300/40",
    headerLime:
      "bg-gradient-to-r from-brand-lime-500 via-brand-lime-400 to-brand-lime-500 text-brand-teal-950 hover:from-brand-lime-400 hover:to-brand-lime-300 focus-visible:ring-brand-lime-500 shadow-lg hover:glow-lime hover:scale-105 transition-all duration-300 border-2 border-brand-lime-300/60 font-black",
    outline:
      "border-2 border-brand-teal-900 text-brand-teal-900 hover:bg-brand-teal-900 hover:text-white focus-visible:ring-brand-teal-900 shadow-sm hover:-translate-y-0.5",
    ghost:
      "text-brand-teal-900 hover:bg-brand-teal-50 focus-visible:ring-brand-teal-800",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-2 min-w-[100px]",
    md: "px-5 py-3 text-sm sm:text-base gap-2.5 min-w-[120px]",
    lg: "px-7 py-4 text-base sm:text-lg gap-3 min-w-[140px]",
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform group-hover:scale-110">{icon}</span>
      )}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform group-hover:scale-110">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
