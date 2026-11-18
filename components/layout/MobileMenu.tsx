"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
      className="fixed inset-0 z-50 flex flex-col justify-between bg-navy text-white lg:hidden animate-fadeIn"
    >
      <div className="flex items-center justify-between px-5 sm:px-8 h-16 sm:h-[70px] border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 select-none"
        >
          <Image
            src="/images/uh-emblem.png"
            alt="Unhackable Humans"
            width={34}
            height={36}
            className="w-8 h-8 object-contain shrink-0"
          />
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">
            Unhackable Humans
          </span>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-5 sm:px-8 py-6 overflow-y-auto space-y-1.5">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(`${link.href}/`));
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center min-h-[52px] px-4 py-3 rounded-lg text-lg font-semibold transition-colors ${
                isActive
                  ? "text-white bg-teal/20 border-l-2 border-teal pl-3.5"
                  : "text-white/85 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={onClose}
          className={`flex items-center min-h-[52px] px-4 py-3 rounded-lg text-lg font-semibold transition-colors ${
            pathname === "/contact"
              ? "text-white bg-teal/20 border-l-2 border-teal pl-3.5"
              : "text-white/85 hover:text-white hover:bg-white/5 active:bg-white/10"
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="p-5 sm:px-8 border-t border-white/10 bg-navy-dark/60">
        <Link
          href="/digital-exit"
          onClick={onClose}
          className="w-full min-h-[48px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-colors"
        >
          <span>Launch Digital Exit</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
