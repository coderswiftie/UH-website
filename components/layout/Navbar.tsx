"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-offwhite/90 backdrop-blur-md border-b border-mint-border shadow-subtle py-3.5"
            : "bg-offwhite border-b border-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-navy transition-colors"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-tight group-hover:text-teal transition-colors">
              Unhackable Humans
            </span>
            <span className="hidden lg:inline-block text-[11px] font-semibold uppercase tracking-widest text-slate/70 border-l border-slate/30 pl-2">
              UH
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-teal font-semibold bg-mint"
                      : "text-slate hover:text-navy hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/digital-exit"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-btn bg-teal text-white font-semibold text-xs sm:text-sm hover:bg-teal-deep transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Take Action</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg text-navy md:hidden hover:bg-mint transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
