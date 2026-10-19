import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { DigitalExitFlow } from "@/components/digital-exit/DigitalExitFlow";

export const metadata: Metadata = {
  title: "Digital Exit Flow | Unhackable Humans",
  description: "Step-by-step assistant for retired electronics. Data security and circularity recommendations.",
};

export default function DigitalExitFlowPage() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col justify-between px-4 sm:px-6 py-6 md:py-8">
      {/* Top minimal brand bar */}
      <header className="max-w-2xl mx-auto w-full flex items-center justify-between pb-4 border-b border-mint-border">
        <Link
          href="/digital-exit"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate hover:text-navy transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Assistant</span>
        </Link>

        <span className="text-xs uppercase tracking-wider font-semibold text-teal">
          Invisible Devices
        </span>
      </header>

      {/* Main Flow */}
      <div className="flex-1 flex flex-col justify-center">
        <DigitalExitFlow />
      </div>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto w-full text-center text-xs text-slate pt-6 border-t border-mint-border/60">
        <p>Private &amp; client-side. No device data or serial numbers are collected.</p>
      </footer>
    </main>
  );
}
