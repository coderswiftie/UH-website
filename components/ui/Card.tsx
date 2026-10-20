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
  const baseStyles =
    "group rounded-card border relative overflow-hidden transition-all duration-200 [&_.card-arrow]:transition-transform [&_.card-arrow]:duration-200 group-hover:[&_.card-arrow]:translate-x-1 [&_.card-image]:transition-transform [&_.card-image]:duration-300 group-hover:[&_.card-image]:scale-[1.02]";

  const variantStyles = {
    white: "bg-white border-mint-border text-ink",
    mint: "bg-mint border-mint-border text-navy",
    offwhite: "bg-offwhite border-mint-border text-ink",
    navy: "bg-navy border-navy-dark text-white",
  }[variant];

  const hoverStyles = hoverEffect ? "uh-card-hover" : "shadow-subtle";

  const paddingStyles = padded ? "p-6 md:p-8" : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {/* Subtle top teal accent line on hover */}
      {hoverEffect && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      )}
      {children}
    </div>
  );
}
