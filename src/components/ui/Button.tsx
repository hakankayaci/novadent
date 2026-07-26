import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "emergency" | "outline" | "ghost" | "lime";
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
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer select-none min-h-[44px]";

  const variantClasses = {
    primary:
      "bg-brand-teal-900 text-white hover:bg-brand-teal-950 focus-visible:ring-brand-teal-900 shadow-md hover:shadow-lg",
    secondary:
      "bg-brand-surface-100 text-brand-teal-950 hover:bg-brand-teal-100 focus-visible:ring-brand-teal-800 border border-brand-teal-800/10",
    emergency:
      "bg-brand-red-600 text-white hover:bg-brand-red-500 focus-visible:ring-brand-red-600 shadow-emergency hover:shadow-lg animate-pulse-soft",
    lime: "bg-brand-lime-500 text-brand-teal-950 hover:bg-brand-lime-400 focus-visible:ring-brand-lime-500 shadow-md font-bold",
    outline:
      "border-2 border-brand-teal-900 text-brand-teal-900 hover:bg-brand-teal-900 hover:text-white focus-visible:ring-brand-teal-900",
    ghost:
      "text-brand-teal-900 hover:bg-brand-teal-50 focus-visible:ring-brand-teal-800",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2 min-w-[100px]",
    md: "px-5 py-3 text-base gap-2.5 min-w-[120px]",
    lg: "px-7 py-4 text-lg gap-3 min-w-[140px]",
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
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
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
