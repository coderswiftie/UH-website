"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-navy/95 backdrop-blur-md text-white md:hidden animate-fadeIn"
    >
      {/* Top bar with logo and close button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg font-bold tracking-tight text-white hover:text-teal transition-colors"
        >
          Unhackable Humans
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto space-y-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block text-xl font-semibold py-2.5 transition-colors border-b border-white/5 ${
                isActive
                  ? "text-teal pl-2 border-l-2 border-teal"
                  : "text-white/85 hover:text-white hover:pl-1"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Persistent CTA at bottom */}
      <div className="p-6 border-t border-white/10 space-y-3">
        <Link
          href="/digital-exit"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-all shadow-md active:translate-y-0"
        >
          <span>Take Action</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-xs text-white/60">
          Minds over Manipulation · Digital Exit Assistant
        </p>
      </div>
    </div>
  );
}
