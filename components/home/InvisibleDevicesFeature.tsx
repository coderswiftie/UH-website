import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import { YearlyInvestigationTabs } from "../invisible-devices/YearlyInvestigationTabs";

export function InvisibleDevicesFeature() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white border-b border-navy-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <ScrollReveal className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">
              Project Invisible Devices
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.12]">
              What happens to the device you stop using?
            </h2>

            <p className="text-base text-white/80 leading-relaxed">
              Millions of retired phones, laptops, and chargers sit forgotten in drawers because people aren&apos;t sure how to wipe their personal data or dispose of them safely.
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              When usable electronics stay idle, critical minerals stay locked away and working devices never reach communities that could use them. Our Digital Exit assistant walks you through repair, reuse, donation, or recycling step by step.
            </p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/10 text-xs">
              <div>
                <dt className="font-semibold text-teal-light">Repair</dt>
                <dd className="text-white/70 mt-0.5">Extend usable life</dd>
              </div>
              <div>
                <dt className="font-semibold text-teal-light">Reuse</dt>
                <dd className="text-white/70 mt-0.5">Repurpose or pass on</dd>
              </div>
              <div>
                <dt className="font-semibold text-teal-light">Donate</dt>
                <dd className="text-white/70 mt-0.5">Support learners</dd>
              </div>
              <div>
                <dt className="font-semibold text-teal-light">Recycle</dt>
                <dd className="text-white/70 mt-0.5">Certified e-waste recovery</dd>
              </div>
            </dl>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/digital-exit"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
              >
                <span>Find Your Digital Exit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/invisible-devices"
                className="text-sm font-semibold text-white/85 hover:text-teal-light transition-colors py-2"
              >
                Explore the initiative →
              </Link>
            </div>

            <div className="pt-4 space-y-2 border-t border-white/10 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                <span>Device-specific data wiping steps come before every disposal option.</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                <span>Private and rule-based — no logins, accounts, or serial numbers collected.</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Yearly Investigation Tabs */}
          <ScrollReveal delay={80} className="lg:col-span-7">
            <YearlyInvestigationTabs theme="dark" />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
