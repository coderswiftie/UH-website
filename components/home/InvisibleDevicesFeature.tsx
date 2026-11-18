import React from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import { YearlyInvestigationTabs } from "../invisible-devices/YearlyInvestigationTabs";

export function InvisibleDevicesFeature() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden border-b border-navy-dark">
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Mission & Problem */}
          <ScrollReveal className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-light text-xs font-semibold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Project Invisible Devices</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What happens to the device you stop using?
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Millions of retired smartphones, laptops, and chargers sit forgotten in drawers due to confusion over data wiping and safe disposal.
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              When hardware stays hidden, critical minerals are locked away, functional devices fail to reach underprivileged communities, and personal data remains at risk. The Digital Exit assistant offers a transparent, rule-based path forward.
            </p>

            {/* Circularity Pathways List */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-teal-light font-bold block">01 // REPAIR</span>
                <span className="text-xs text-white font-medium block mt-0.5">Extend Life</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-teal-light font-bold block">02 // REUSE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Pass Forward</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-teal-light font-bold block">03 // DONATE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Empower Students</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-teal-light font-bold block">04 // RECYCLE</span>
                <span className="text-xs text-white font-medium block mt-0.5">Certified E-Waste</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/digital-exit"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-[0_4px_18px_rgba(27,127,121,0.4)] active:scale-[0.98]"
              >
                <span>Find Your Digital Exit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/invisible-devices"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-btn bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/15"
              >
                <span>Full Initiative</span>
              </Link>
            </div>

            <div className="pt-4 space-y-2.5 border-t border-white/10">
              <div className="flex items-start gap-2.5 text-xs text-white/75">
                <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                <span>Prioritizes device-specific data wiping before transfer or disposal.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-white/75">
                <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                <span>100% rule-based and private; zero personal data or serial numbers logged.</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Yearly Investigation Tabs */}
          <ScrollReveal delay={120} className="lg:col-span-7">
            <YearlyInvestigationTabs theme="dark" />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
