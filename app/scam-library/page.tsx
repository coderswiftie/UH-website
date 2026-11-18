import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
                An open investigative archive deconstructing how real scams operate. Rather than focusing on technical minutiae, we analyse the psychological triggers—urgency, authority, fear, and familiarity—and pinpoint the exact counter-moves where manipulation can be halted.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Featured Breakdown Card */}
        <Section variant="white" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="p-6 md:p-8 rounded-card border border-mint-border bg-gradient-to-br from-mint/40 via-white to-offwhite shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2 text-teal-deep text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span>FEATURED INVESTIGATION // CASE #{featuredScam.caseNumber}</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-deep px-2.5 py-0.5 rounded-full bg-mint border border-mint-border">
                  PRIMARY VECTORS: {featuredScam.tags.slice(0, 2).join(" + ")}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {featuredScam.coverImage && (
                  <div className="lg:col-span-5">
                    <Link
                      href={`/scam-library/${featuredScam.slug}`}
                      className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-navy-dark border border-mint-border shadow-sm group"
                    >
                      <Image
                        src={featuredScam.coverImage}
                        alt={featuredScam.coverImageAlt || featuredScam.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 480px"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>
                )}

                <div className="lg:col-span-7 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight leading-snug">
                    <Link
                      href={`/scam-library/${featuredScam.slug}`}
                      className="hover:text-teal transition-colors"
                    >
                      {featuredScam.title}
                    </Link>
                  </h2>
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    {featuredScam.story}
                  </p>

                  <div className="p-3 rounded-lg bg-white border border-mint-border text-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-teal block">
                      The Bigger Insight:
                    </span>
                    <p className="text-navy font-medium italic">
                      {featuredScam.takeaway}
                    </p>
                  </div>

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

                  <div className="pt-2">
                    <Link
                      href={`/scam-library/${featuredScam.slug}`}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm hover:shadow-[0_4px_14px_rgba(27,127,121,0.28)] hover:-translate-y-0.5"
                    >
                      <span>Read Full Breakdown</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
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
