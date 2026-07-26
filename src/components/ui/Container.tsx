import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "prose" | "default" | "wide";
}

const SIZES = {
  narrow: "max-w-3xl",
  prose: "max-w-4xl",
  default: "max-w-[78rem]",
  wide: "max-w-[88rem]",
} as const;

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-7 lg:px-10 ${SIZES[size]} ${className}`}>
      {children}
    </div>
  );
}
