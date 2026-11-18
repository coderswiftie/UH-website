import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export function InvisibleDevicesFeature() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden border-b border-navy-dark">
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Problem */}
          <ScrollReveal className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-teal-light px-2.5 py-1 rounded bg-white/5 border border-white/10">
                PROJECT // INVISIBLE DEVICES
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/70 font-medium">Hardware Circularity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What happens to the device you stop using?
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              Millions of retired smartphones, laptops, and chargers sit forgotten in drawers due to data security anxiety and lack of clear guidance.
            </p>

            <p className="text-sm text-white/75 leading-relaxed max-w-xl">
              Invisible Devices helps people navigate the responsible next steps for unused electronics—including <strong>repair</strong>, <strong>reuse</strong>, <strong>donation</strong>, and <strong>certified recycling</strong>. Our rule-based Digital Exit assistant ensures personal data is completely wiped before hardware moves forward.
            </p>

            {/* Circularity Pathways List */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-xl">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-teal-light font-bold block">01 // REPAIR</span>
                <span className="text-xs text-white font-medium block mt-0.5">Extend Life</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-teal-light font-bold block">02 // REUSE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Pass Forward</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-teal-light font-bold block">03 // DONATE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Empower Students</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-teal-light font-bold block">04 // RECYCLE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Certified E-Waste</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/digital-exit"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-[0_4px_18px_rgba(27,127,121,0.4)] active:scale-[0.98]"
              >
                <span>Launch Digital Exit Assistant</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Split Visual + Highlights */}
          <ScrollReveal delay={120} className="lg:col-span-5">
            <div className="group rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8 backdrop-blur-md space-y-6 transition-all duration-300 hover:border-teal/50 hover:bg-white/[0.07] shadow-card">
              {/* Bespoke Hardware Circularity Diagram */}
              <div className="rounded-xl bg-navy-dark/80 border border-white/15 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-teal-light">
                    <Smartphone className="w-4 h-4" />
                    <Laptop className="w-4 h-4" />
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-light font-bold">
                    DECISION ARCHITECTURE
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span className="text-white/80">Input: Idle / Retired Hardware</span>
                    <span className="font-mono text-[10px] text-teal-light">STEP 01</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-teal/15 border border-teal/30">
                    <span className="text-teal-light font-semibold">Data Sanitization Checklist</span>
                    <span className="font-mono text-[10px] text-teal-light">STEP 02</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                    <span className="text-white/80">Disposition: Repair • Reuse • Donate • Recycle</span>
                    <span className="font-mono text-[10px] text-teal-light">STEP 03</span>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-white/60 text-center">
                  Private, 100% rule-based recommendation without tracking serial numbers.
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                  <span>Interactive step-by-step data prep checklists for phones, laptops, and tablets.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                  <span>Prioritizes device reuse and repair before certified non-landfill e-waste recycling.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
