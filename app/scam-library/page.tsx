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
        {/* Header */}
        <Section
          variant="offwhite"
          spacing="compact"
          className="border-b border-mint-border"
        >
          <Container>
            <ScrollReveal className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Scam Library
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Breaking down real scams.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                An open archive examining how real incidents unfold. Rather than listing technical jargon, each case looks at the human pressure points — authority, fear, urgency, and familiarity — and the practical step that interrupts the fraud.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Featured Breakdown */}
        <Section
          variant="white"
          spacing="compact"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {featuredScam.coverImage && (
                <div className="lg:col-span-5">
                  <Link
                    href={`/scam-library/${featuredScam.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-navy-dark border border-mint-border group"
                  >
                    <Image
                      src={featuredScam.coverImage}
                      alt={featuredScam.coverImageAlt || featuredScam.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>
              )}

              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-medium text-slate flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="font-semibold text-teal-deep">
                    Featured · Case {featuredScam.caseNumber}
                  </span>
                  <span className="text-slate/40">·</span>
                  <span>{featuredScam.category}</span>
                  <span className="text-slate/40">·</span>
                  <span>{featuredScam.publicationDate}</span>
                </p>

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

                <blockquote className="pl-4 border-l-2 border-teal text-sm text-navy font-medium italic">
                  {featuredScam.takeaway}
                </blockquote>

                <div className="pt-2">
                  <Link
                    href={`/scam-library/${featuredScam.slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
                  >
                    <span>Read Full Breakdown</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Search, Filters & Case Grid */}
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
