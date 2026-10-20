import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, Sparkles, Tag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getAllScams, getLatestScam } from "@/lib/content";
import { ScamLibraryBrowser } from "@/components/scam-library/ScamLibraryBrowser";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Breaking Down the Scam | Scam Library | Unhackable Humans",
  description:
    "Searchable investigative library deconstructing manipulation techniques, emotional triggers, and critical exit points across real-world scams.",
};

export default function ScamLibraryLandingPage() {
  const allScams = getAllScams();
  const featuredScam = getLatestScam();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header (§5.3) */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <ScrollReveal className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-teal">
                Investigative Archive • Scam Intelligence
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Breaking Down the Scam.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                An open investigative archive deconstructing how real scams operate. Rather than focusing on technical minutiae, we analyse the psychological triggers—urgency, authority, fear, and greed—and pinpoint the exact exit points where manipulation can be halted.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Featured Breakdown Card */}
        <Section variant="white" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="p-6 md:p-8 rounded-card border-2 border-mint-border bg-mint/30 shadow-card">
              <div className="flex items-center gap-2 text-teal-deep text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-teal" />
                <span>Featured Investigation</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                    {featuredScam.title}
                  </h2>
                  <p className="text-sm text-slate leading-relaxed">
                    {featuredScam.story}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal text-white">
                      {featuredScam.category}
                    </span>
                    {featuredScam.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded bg-white border border-mint-border text-navy"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Link
                    href={`/scam-library/${featuredScam.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm hover:-translate-y-0.5"
                  >
                    <span>Read Full Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Interactive Search, Filters, and Grid */}
        <Section variant="offwhite" spacing="default">
          <Container>
            <ScamLibraryBrowser initialScams={allScams} />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
