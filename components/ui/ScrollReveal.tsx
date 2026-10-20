"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // millisecond delay
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

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
            if (delay > 0) {
              const timer = setTimeout(() => {
                el.classList.add("is-revealed");
              }, delay);
              return () => clearTimeout(timer);
            } else {
              el.classList.add("is-revealed");
            }
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    // @ts-expect-error dynamic component type
    <Component ref={ref} className={`uh-reveal ${className}`}>
      {children}
    </Component>
  );
}
