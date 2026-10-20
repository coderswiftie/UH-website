import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, RefreshCw, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "../ui/Container";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

export function InvisibleDevicesFeature() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden border-b border-navy-dark">
      {/* Background subtle glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Problem */}
          <ScrollReveal className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <SignalBadge number="06" label="HARDWARE PROTOCOL" theme="dark" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-light text-xs font-semibold uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Project Invisible Devices</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What happens to the device you stop using?
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Millions of retired smartphones, laptops, and chargers sit forgotten in drawers due to confusion over data wiping and safe disposal.
            </p>

            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              When hardware stays hidden, critical minerals are locked away, functional devices fail to reach underprivileged communities, and personal data remains at risk. The Digital Exit assistant offers a transparent, rule-based path forward.
            </p>

            <div className="pt-2">
              <Link
                href="/digital-exit"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-[0_4px_18px_rgba(27,127,121,0.4)] active:scale-[0.98]"
              >
                <span>Find Your Digital Exit</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Split Visual + Highlights */}
          <ScrollReveal delay={120} className="lg:col-span-5">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm space-y-6 transition-all duration-300 hover:border-teal/40 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="aspect-[4/3] rounded-xl bg-navy-dark/60 border border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center space-y-3 transition-transform duration-300 group-hover:scale-[1.01]">
                <div className="flex items-center gap-3 text-teal-light">
                  <Smartphone className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <Laptop className="w-7 h-7 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <Cpu className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-0.5" />
                </div>
                <span className="font-mono text-xs uppercase font-semibold text-white/80">
                  [PLACEHOLDER: Physical Device Ecosystem Diagram]
                </span>
                <p className="text-[11px] text-white/60 max-w-xs">
                  Transparent decision trees: Repair first, pass it forward, or recover rare earth minerals.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                  <span>Prioritizes device-specific data wiping before transfer or disposal.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                  <span>100% rule-based and private; no personal data or serial numbers logged.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
