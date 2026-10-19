import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Cpu,
  HelpCircle,
  Laptop,
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
import { Card } from "@/components/ui/Card";

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
        {/* Hero Section */}
        <Section variant="offwhite" spacing="spacious" className="border-b border-mint-border">
          <Container>
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-mint text-teal-deep border border-mint-border">
                Project Invisible Devices
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight">
                What happens to the device you stop using?
              </h1>

              <p className="text-lg sm:text-xl text-slate leading-relaxed">
                When people upgrade their technology, old phones, tablets, and laptops rarely get recycled or donated immediately. Instead, they become &ldquo;invisible&rdquo;—banished to desk drawers for years due to data security anxiety and lack of clear guidance.
              </p>

              <div className="pt-2">
                <Link
                  href="/digital-exit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-teal text-white font-semibold text-base hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0"
                >
                  <span>Launch Digital Exit Assistant</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* The Three Hidden Problems */}
        <Section variant="white" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                The Cost of Stagnation
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Why unused electronics matter.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="offwhite" className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center text-teal">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">1. The Security Trap</h3>
                <p className="text-sm text-slate leading-relaxed">
                  People hesitate to recycle or give away electronics because they don&apos;t know how to wipe their personal files, photo albums, or passwords safely.
                </p>
              </Card>

              <Card variant="offwhite" className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center text-teal">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">2. Trapped Minerals</h3>
                <p className="text-sm text-slate leading-relaxed">
                  Billions of devices hoard cobalt, lithium, copper, and gold. When left in storage, these non-renewable elements never return to the circular supply chain.
                </p>
              </Card>

              <Card variant="offwhite" className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center text-teal">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">3. Lost Utility</h3>
                <p className="text-sm text-slate leading-relaxed">
                  A laptop or tablet considered outdated by a power user can still empower a student, rural learner, or community center for years of digital literacy.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* The Decision Pathway */}
        <Section variant="offwhite" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                Circularity Hierarchy
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Our rule of thumb for hardware exit.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-card bg-white border border-mint-border space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <Wrench className="w-5 h-5" />
                  <span className="font-bold text-navy text-base">1. Repair First</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  If minor faults exist (such as battery degradation or cracked glass), fix them before replacing. Extending a device&apos;s active life by two years drastically reduces its carbon footprint.
                </p>
              </div>

              <div className="p-6 rounded-card bg-white border border-mint-border space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <Smartphone className="w-5 h-5" />
                  <span className="font-bold text-navy text-base">2. Reuse &amp; Donate</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  Functional tech should be passed down, traded in, or donated to verified educational and grassroots programs after thorough personal data wiping.
                </p>
              </div>

              <div className="p-6 rounded-card bg-white border border-mint-border space-y-3">
                <div className="flex items-center gap-2 text-teal">
                  <Recycle className="w-5 h-5" />
                  <span className="font-bold text-navy text-base">3. Responsible Recycling</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  When hardware has reached terminal non-operation, certified electronic recyclers safely dismantle batteries and salvage raw components without toxic landfill dumping.
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-14 p-8 rounded-card bg-mint border border-mint-border flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy">
                  Ready to retire or repurpose an old device?
                </h3>
                <p className="text-sm text-slate">
                  Use our step-by-step Digital Exit assistant for personalized data-sanitization checklists and circular recommendations.
                </p>
              </div>
              <Link
                href="/digital-exit"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm"
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
