import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Invisible Devices: Digital Exit | Unhackable Humans",
  description:
    "Find the right next step for your old device. Transparent, rule-based circularity and safety recommendations.",
};

export default function DigitalExitEntryPage() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col justify-between px-6 py-8 md:py-12">
      {/* Top bar */}
      <header className="max-w-content mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-navy hover:text-teal transition-colors"
        >
          Unhackable Humans
        </Link>

        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
          Invisible Devices
        </span>
      </header>

      {/* Main Entry */}
      <div className="max-w-xl mx-auto w-full text-center py-12 md:py-16 space-y-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Digital Exit Assistant
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-[1.12]">
            Find the right next step for your old device.
          </h1>
          <p className="text-base sm:text-lg text-slate max-w-md mx-auto leading-relaxed">
            Answer two quick questions to get a device-specific data wiping checklist and a safe path to repair, reuse, donate, or recycle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/digital-exit/flow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-colors shadow-sm"
          >
            <span>Start Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/invisible-devices"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-btn text-slate hover:text-navy font-medium text-sm transition-colors"
          >
            Learn Why This Matters
          </Link>
        </div>

        {/* Guarantees — clean typographic columns, no nested boxes */}
        <div className="pt-10 border-t border-mint-border grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-navy font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span>No login or app</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              Works directly in your browser without accounts or tracking.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-navy font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span>Rule-based advice</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              Clear, consistent recommendations written and checked by people.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-navy font-semibold text-xs">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span>Data safety first</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              Wiping steps always appear before donation or disposal options.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-content mx-auto w-full text-center text-xs text-slate pt-6">
        <p>&copy; {new Date().getFullYear()} Unhackable Humans · Minds over Manipulation</p>
      </footer>
    </main>
  );
}
