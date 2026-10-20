import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Search } from "lucide-react";
import { Container } from "../ui/Container";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PillarsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-offwhite overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-12 -translate-y-1/2 watermark-text opacity-30"
      >
        METHODOLOGY
      </div>

      <Container className="relative z-10">
        <ScrollReveal className="max-w-2xl mb-14 space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <SignalBadge number="02" label="METHODOLOGY" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate/70">
              CORE METHODOLOGY // 02
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            From awareness to action.
          </h2>

          <p className="text-base text-slate leading-relaxed">
            Conventional security education relies on warning posters and guilt. We design an ecosystem of practical interventions that change how decisions are made.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Decode (Navy treatment) */}
          <ScrollReveal
            delay={0}
            className="group rounded-card p-8 bg-navy text-white flex flex-col justify-between border border-navy-dark shadow-card uh-card-hover relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-light/0 via-teal-light to-teal-light/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-light transition-transform duration-200 group-hover:scale-110">
                <Search className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-teal-light transition-colors">
                  Decode
                </h3>
                <span className="text-[10px] font-mono text-white/40">PIL-01</span>
              </div>
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
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Educate (Teal treatment) */}
          <ScrollReveal
            delay={100}
            className="group rounded-card p-8 bg-teal text-white flex flex-col justify-between shadow-card uh-card-hover relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/0 via-white to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Educate
                </h3>
                <span className="text-[10px] font-mono text-white/50">PIL-02</span>
              </div>
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
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Intervene (Soft mint treatment) */}
          <ScrollReveal
            delay={200}
            className="group rounded-card p-8 bg-mint text-navy flex flex-col justify-between border border-mint-border shadow-card uh-card-hover relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal transition-transform duration-200 group-hover:scale-110">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-navy group-hover:text-teal transition-colors">
                  Intervene
                </h3>
                <span className="text-[10px] font-mono text-slate/50">PIL-03</span>
              </div>
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
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
