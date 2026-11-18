"use client";

import React, { useEffect, useRef } from "react";

type AllowedElements = "div" | "section" | "article" | "header" | "footer" | "span" | "p" | "li" | "ul";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // millisecond delay
  threshold?: number;
  as?: AllowedElements;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.05,
  as: Component = "div",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Strict prefers-reduced-motion check
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-revealed");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Component
      ref={ref as any}
      style={combinedStyle}
      className={`uh-reveal ${className}`}
    >
      {children}
    </Component>
  );
}
