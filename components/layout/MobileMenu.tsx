"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

import Image from "next/image";

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
      className="fixed inset-0 z-50 flex flex-col justify-between bg-navy/98 backdrop-blur-xl text-white md:hidden animate-fadeIn"
    >
      {/* Top bar with logo and close button */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 group select-none"
        >
          <div className="relative w-8 h-8 shrink-0">
            <Image
              src="/images/uh-shield-mark.png"
              alt="Unhackable Humans Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-teal-light transition-colors">
            Unhackable Humans
          </span>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav links with large, easy-to-tap targets */}
      <nav className="flex-1 px-5 py-6 overflow-y-auto space-y-1">
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-light px-3 mb-2">
          Navigation Index
        </div>
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between min-h-[52px] px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                isActive
                  ? "text-white bg-teal/20 border-l-4 border-teal pl-3 shadow-inner"
                  : "text-white/85 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              <span>{link.label}</span>
              <span className="text-[11px] font-mono text-white/30 font-normal">
                0{idx + 1}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Persistent CTA at bottom */}
      <div className="p-5 border-t border-white/10 space-y-3 bg-navy-dark/40">
        <Link
          href="/digital-exit"
          onClick={onClose}
          className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-teal text-white font-bold text-base hover:bg-teal-deep transition-all shadow-md active:scale-[0.98]"
        >
          <span>Take Action</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <p className="text-center text-[11px] font-mono text-white/50">
          SIGNAL // DIGITAL EXIT ASSISTANT
        </p>
      </div>
    </div>
  );
}
