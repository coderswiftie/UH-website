import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "mint" | "navy" | "offwhite";
  hoverEffect?: boolean;
  padded?: boolean;
}

export function Card({
  variant = "white",
  hoverEffect = true,
  padded = true,
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-card border transition-all duration-200 relative overflow-hidden";

  const variantStyles = {
    white: "bg-white border-mint-border text-ink",
    mint: "bg-mint border-mint-border text-navy",
    offwhite: "bg-offwhite border-mint-border text-ink",
    navy: "bg-navy border-navy-dark text-white",
  }[variant];

  const hoverStyles = hoverEffect
    ? "hover:border-teal/40 hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
    : "shadow-subtle";

  const paddingStyles = padded ? "p-6 md:p-8" : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
