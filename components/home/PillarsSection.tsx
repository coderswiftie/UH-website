import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Search } from "lucide-react";
import { Container } from "../ui/Container";

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <Container>
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-teal">
            The Three Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            From awareness to action.
          </h2>
          <p className="text-base text-slate leading-relaxed">
            Conventional security education relies on warning posters and guilt. We design an ecosystem of practical interventions that change how decisions are made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Decode (Navy treatment) */}
          <div className="rounded-card p-8 bg-navy text-white flex flex-col justify-between border border-navy-dark shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-light">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Decode
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Investigating how psychological manipulation works in real-time campaigns. We deconstruct social engineering into clear behavioural mechanics.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/scam-library"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-light hover:text-white transition-colors"
              >
                <span>Explore Scam Library</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Educate (Teal treatment) */}
          <div className="rounded-card p-8 bg-teal text-white flex flex-col justify-between shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Educate
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Turning real incidents into practical learning experiences. We run interactive workshops that replace victim-blaming with instinctive verification habits.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-offwhite underline underline-offset-4 transition-colors"
              >
                <span>View Educational Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Intervene (Soft mint treatment) */}
          <div className="rounded-card p-8 bg-mint text-navy flex flex-col justify-between border border-mint-border shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-navy">
                Intervene
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Building systems that make safer action effortless. Projects like Invisible Devices translate abstract awareness into concrete, trustworthy physical decisions.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/invisible-devices"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
              >
                <span>Discover Interventions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
