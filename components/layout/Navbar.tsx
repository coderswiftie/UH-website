"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Container } from "../ui/Container";

import Image from "next/image";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setIsScrolled(currentScroll > 15);
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-[background-color,border-color,box-shadow] duration-300 ease-out py-3 sm:py-3.5 ${
          isScrolled
            ? "bg-offwhite/95 backdrop-blur-md border-b border-mint-border shadow-[0_4px_20px_rgba(18,38,58,0.05)]"
            : "bg-offwhite/85 backdrop-blur-sm border-b border-mint-border/40"
        }`}
      >
        {/* Subtle reading progress indicator line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal to-teal-light transition-[width] duration-150 ease-out opacity-80"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        <Container className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            aria-label="Unhackable Humans Homepage"
            className="flex items-center gap-3 group select-none py-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/uh-logo.svg"
                alt="Unhackable Humans Emblem"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-navy group-hover:text-teal transition-colors leading-tight">
                Unhackable Humans
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold text-slate/75">
                Human Security Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 group/nav ${
                    isActive
                      ? "text-teal font-semibold bg-mint shadow-subtle"
                      : "text-slate hover:text-navy hover:bg-mint/40"
                  }`}
                >
                  <span>{link.label}</span>
                  {!isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-teal scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/digital-exit"
              className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-btn bg-teal text-white font-semibold text-xs sm:text-sm hover:bg-teal-deep transition-all duration-200 shadow-sm hover:shadow-[0_4px_14px_rgba(27,127,121,0.28)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Take Action</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2.5 rounded-lg text-navy md:hidden hover:bg-mint transition-colors active:scale-95"
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
