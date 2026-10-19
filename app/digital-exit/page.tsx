import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Cpu, Laptop, ShieldCheck, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Invisible Devices: Digital Exit | Unhackable Humans",
  description:
    "Find the right next step for your old device. Transparent, rule-based circularity and safety recommendations.",
};

export default function DigitalExitEntryPage() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col justify-between px-6 py-8 md:py-12">
      {/* Top minimal brand bar */}
      <header className="max-w-content mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-navy hover:text-teal transition-colors"
        >
          Unhackable Humans
        </Link>

        <span className="text-xs uppercase tracking-wider font-semibold text-teal bg-mint px-3 py-1 rounded-full border border-mint-border">
          Invisible Devices
        </span>
      </header>

      {/* Screen 1 — Entry (§4.2) */}
      <div className="max-w-xl mx-auto w-full text-center py-12 md:py-16 space-y-8">
        {/* Minimal device illustration */}
        <div className="flex items-center justify-center gap-4 text-teal/80">
          <div className="p-3.5 rounded-2xl bg-white border border-mint-border shadow-subtle">
            <Smartphone className="w-6 h-6 text-teal" />
          </div>
          <div className="p-4 rounded-2xl bg-white border border-mint-border shadow-card -translate-y-2">
            <Laptop className="w-8 h-8 text-teal-deep" />
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-mint-border shadow-subtle">
            <Cpu className="w-6 h-6 text-teal" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs md:text-sm uppercase tracking-widest font-bold text-teal">
            Invisible Devices: Digital Exit
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Find the right next step for your old device.
          </h1>
          <p className="text-base sm:text-lg text-slate max-w-md mx-auto leading-relaxed pt-1">
            Unused electronics linger in drawers when they could be repaired, reused, or recycled safely.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/digital-exit/flow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0"
          >
            <span>Find My Device&apos;s Next Step</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/invisible-devices"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-btn text-slate hover:text-navy font-medium text-sm transition-colors hover:bg-white"
          >
            Learn Why This Matters
          </Link>
        </div>

        {/* Transparent Guarantees (§4.1) */}
        <div className="pt-8 border-t border-mint-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-mint-border/50">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <p className="text-xs text-slate">
              <strong className="text-navy block">No login or app</strong>
              Direct access without accounts or data storage.
            </p>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-mint-border/50">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <p className="text-xs text-slate">
              <strong className="text-navy block">Rule-based</strong>
              Deterministic advice verified by human experts, not AI.
            </p>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-mint-border/50">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <p className="text-xs text-slate">
              <strong className="text-navy block">Data safety first</strong>
              Device wiping steps appear before disposal options.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-content mx-auto w-full text-center text-xs text-slate pt-6">
        <p>&copy; {new Date().getFullYear()} Unhackable Humans. Minds over Manipulation.</p>
      </footer>
    </main>
  );
}
