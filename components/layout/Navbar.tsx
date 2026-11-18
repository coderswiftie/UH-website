"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Container } from "../ui/Container";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/scam-library", label: "Scam Library" },
  { href: "/invisible-devices", label: "Invisible Devices" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/team", label: "Team" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolledRef = useRef(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateOnScroll = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 12;

      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      const bar = progressBarRef.current;
      if (bar) {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const ratio =
          scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0;
        bar.style.transform = `scaleX(${ratio})`;
      }
    };

    const handleScroll = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateOnScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white border-b border-mint-border transition-shadow duration-200 ${
          isScrolled ? "shadow-[0_2px_12px_rgba(18,38,58,0.07)]" : "shadow-none"
        }`}
      >
        {/* Reading progress indicator — composited scaleX, zero React re-renders */}
        <div
          ref={progressBarRef}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left pointer-events-none"
          style={{ transform: "scaleX(0)" }}
          aria-hidden="true"
        />

        <Container className="flex items-center justify-between gap-3 h-16 sm:h-[70px]">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Unhackable Humans Homepage"
            className="flex items-center gap-2 sm:gap-2.5 group select-none min-w-0 py-1"
          >
            <Image
              src="/images/uh-emblem.png"
              alt="Unhackable Humans"
              width={36}
              height={38}
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
              priority
            />
            <span className="font-extrabold text-[15px] sm:text-lg tracking-tight text-navy group-hover:text-teal transition-colors truncate">
              Unhackable Humans
            </span>
          </Link>

          {/* Desktop Navigation (lg+ so tablets never crowd or wrap) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-teal font-semibold"
                      : "text-ink/80 hover:text-navy font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-teal rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action & Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/digital-exit"
              className="group hidden min-[370px]:inline-flex items-center justify-center gap-1.5 min-h-[40px] sm:min-h-[42px] px-3.5 sm:px-5 rounded-btn bg-teal text-white font-semibold text-xs sm:text-sm whitespace-nowrap hover:bg-teal-deep transition-colors shadow-sm"
            >
              <span>Digital Exit</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-navy hover:bg-offwhite active:bg-mint transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
