import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  size = "default",
  className = "",
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-3xl",
    default: "max-w-content",
    wide: "max-w-7xl",
  }[size];

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12 ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
