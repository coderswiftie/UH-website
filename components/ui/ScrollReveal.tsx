"use client";

import React, { useEffect, useRef } from "react";

type AllowedElements =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "span"
  | "p"
  | "li"
  | "ul";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // millisecond delay (capped for responsiveness)
  as?: AllowedElements;
  style?: React.CSSProperties;
}

// Single shared IntersectionObserver for the entire document
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries, observer) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -16px 0px",
      }
    );
  }
  return sharedObserver;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = getSharedObserver();
    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  const cappedDelay = Math.min(delay, 160);
  const combinedStyle: React.CSSProperties | undefined =
    style || cappedDelay > 0
      ? {
          ...style,
          ...(cappedDelay > 0 ? { transitionDelay: `${cappedDelay}ms` } : {}),
        }
      : undefined;

  return (
    <Component
      ref={ref as React.RefObject<never>}
      style={combinedStyle}
      className={`uh-reveal ${className}`}
    >
      {children}
    </Component>
  );
}
