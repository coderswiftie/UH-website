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
    "group inline-flex items-center justify-center font-medium rounded-btn transition-all duration-200 ease-out select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] active:duration-75 [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-1";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-teal text-white hover:bg-teal-deep shadow-sm hover:shadow-[0_4px_16px_rgba(27,127,121,0.28)] hover:-translate-y-0.5",
    secondary:
      "bg-mint text-navy border border-mint-border hover:bg-mint/80 hover:border-teal/30 hover:shadow-subtle hover:-translate-y-0.5",
    outline:
      "bg-transparent text-navy border border-mint-border hover:border-teal/40 hover:bg-white/80 hover:shadow-subtle hover:-translate-y-0.5",
    white:
      "bg-white text-navy border border-mint-border shadow-subtle hover:border-teal/35 hover:bg-offwhite hover:shadow-card hover:-translate-y-0.5",
    link: "bg-transparent text-teal hover:text-teal-deep hover:underline p-0 h-auto font-medium [&_svg]:inline",
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
