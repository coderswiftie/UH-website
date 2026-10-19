import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "teal" | "mint" | "navy" | "gold" | "slate" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  variant = "mint",
  size = "sm",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-semibold rounded-full uppercase tracking-wider select-none";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  }[size];

  const variantStyles = {
    teal: "bg-teal/10 text-teal-deep border border-teal/20",
    mint: "bg-mint text-teal-deep border border-mint-border",
    navy: "bg-navy text-white border border-navy-dark",
    gold: "bg-gold/15 text-gold border border-gold/30",
    slate: "bg-slate/10 text-slate border border-slate/20",
    outline: "bg-transparent text-slate border border-slate/30",
  }[variant];

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </span>
  );
}
