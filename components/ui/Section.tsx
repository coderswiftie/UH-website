import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "offwhite" | "white" | "navy" | "mint";
  spacing?: "default" | "compact" | "spacious";
  id?: string;
}

export function Section({
  variant = "offwhite",
  spacing = "default",
  id,
  className = "",
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    offwhite: "bg-offwhite text-ink",
    white: "bg-white text-ink",
    navy: "bg-navy text-white",
    mint: "bg-mint text-navy",
  }[variant];

  const spacingStyles = {
    compact: "py-10 md:py-14",
    default: "py-16 md:py-24 lg:py-28",
    spacious: "py-20 md:py-28 lg:py-32",
  }[spacing];

  return (
    <section
      id={id}
      className={`relative w-full ${variantStyles} ${spacingStyles} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
