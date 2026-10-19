import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "link" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-btn transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-teal text-white hover:bg-teal-deep shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-mint text-navy border border-mint-border hover:bg-mint/80 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent text-navy border border-mint-border hover:border-slate/40 hover:bg-white/60 hover:-translate-y-0.5 active:translate-y-0",
    white:
      "bg-white text-navy border border-mint-border shadow-subtle hover:bg-offwhite hover:-translate-y-0.5 active:translate-y-0",
    link: "bg-transparent text-teal hover:text-teal-deep hover:underline p-0 h-auto font-medium",
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
