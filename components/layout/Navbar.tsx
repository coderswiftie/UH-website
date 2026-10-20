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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-offwhite/95 backdrop-blur-md border-b border-mint-border shadow-[0_4px_24px_rgba(18,38,58,0.06)] py-2.5 sm:py-3"
            : "bg-offwhite/80 backdrop-blur-sm border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            aria-label="Unhackable Humans Homepage"
            className="flex items-center gap-2.5 sm:gap-3 group select-none"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/uh-shield-mark.png"
                alt="Unhackable Humans Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(18,38,58,0.12)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-navy group-hover:text-teal transition-colors leading-tight">
                Unhackable Humans
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-slate/70">
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
