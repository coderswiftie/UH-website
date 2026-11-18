import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Cpu,
  Recycle,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { YearlyInvestigationTabs } from "@/components/invisible-devices/YearlyInvestigationTabs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Invisible Devices | Unhackable Humans",
  description:
    "Navigating repair, reuse, donation, and responsible recycling for retired technology. Keep hardware in active circulation.",
};

export default function InvisibleDevicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Section
          variant="offwhite"
          spacing="spacious"
          className="border-b border-mint-border"
        >
          <Container>
            <ScrollReveal className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Project Invisible Devices
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy tracking-tight leading-[1.1]">
                What happens to the device you stop using?
              </h1>

              <p className="text-base sm:text-lg text-slate leading-relaxed">
                When people upgrade, old phones, tablets, and laptops rarely get recycled or passed on right away. Instead, they stay tucked away in drawers for years because wiping personal data feels risky and next steps aren&apos;t clear. Project Invisible Devices guides people safely through repair, reuse, donation, and certified recycling.
              </p>

              <div className="pt-2">
                <Link
                  href="/digital-exit"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm sm:text-base hover:bg-teal-deep transition-colors shadow-sm"
                >
                  <span>Launch Digital Exit Assistant</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* 2026 Investigation */}
        <Section
          variant="white"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-3xl mb-10 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Yearly Field Investigations
              </p>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                2026 Investigation Cohort
              </h2>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                Each year, we run a community field investigation under Invisible Devices. In 2026, 45 cohort members audited dormant household electronics, addressed data-wiping fears, and mapped safe circular hand-off routes.
              </p>
            </div>

            <YearlyInvestigationTabs theme="light" />
          </Container>
        </Section>

        {/* The Three Hidden Problems */}
        <Section
          variant="offwhite"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                The Cost of Idle Hardware
              </p>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Why unused electronics matter.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t-2 border-navy pt-6 space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <ShieldAlert className="w-4 h-4" />
                  <h3 className="text-lg font-bold text-navy">
                    The Security Trap
                  </h3>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  People hold onto old devices because they aren&apos;t sure how to erase photos, saved accounts, and passwords completely before letting hardware go.
                </p>
              </div>

              <div className="border-t-2 border-teal pt-6 space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <BatteryCharging className="w-4 h-4" />
                  <h3 className="text-lg font-bold text-navy">
                    Trapped Minerals
                  </h3>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  Idle phones and laptops lock away cobalt, lithium, copper, and gold — finite materials that never re-enter the supply chain while sitting in drawers.
                </p>
              </div>

              <div className="border-t-2 border-teal-deep pt-6 space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <Cpu className="w-4 h-4" />
                  <h3 className="text-lg font-bold text-navy">Lost Utility</h3>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  A laptop or tablet that feels slow to a power user can still support a student, rural classroom, or community centre for years of learning.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Four Pathways */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Decision Hierarchy
              </p>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Four responsible paths for retired devices.
              </h2>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                Before letting old hardware gather dust, work down this order of priority — starting with extending life, and ending with certified material recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-t border-mint-border pt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-teal">
                  <Wrench className="w-4 h-4" />
                  <h3 className="font-bold text-navy text-base">1. Repair</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  Fix minor faults like worn batteries or cracked screens before replacing. Adding two years of use sharply lowers a device&apos;s environmental footprint.
                </p>
              </div>

              <div className="border-t border-mint-border pt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-teal">
                  <Smartphone className="w-4 h-4" />
                  <h3 className="font-bold text-navy text-base">2. Reuse</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  Repurpose working devices at home or work as a dedicated reader, backup phone, or secondary study machine.
                </p>
              </div>

              <div className="border-t border-mint-border pt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-teal">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="font-bold text-navy text-base">3. Donate</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  Pass cleanly wiped hardware to verified educational charities, rural classrooms, and community organisations.
                </p>
              </div>

              <div className="border-t border-mint-border pt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-teal">
                  <Recycle className="w-4 h-4" />
                  <h3 className="font-bold text-navy text-base">4. Recycle</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  When a device is truly beyond repair, send it to certified e-waste recyclers so valuable minerals can be recovered safely.
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-16 p-8 rounded-card bg-mint border border-mint-border flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-xl font-bold text-navy">
                  Ready to retire or repurpose an old device?
                </h3>
                <p className="text-sm text-ink/80">
                  Use our step-by-step Digital Exit assistant for a device-specific wiping checklist and practical next step.
                </p>
              </div>
              <Link
                href="/digital-exit"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
              >
                <span>Find Your Digital Exit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
