import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Search, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import { HumanSecurityNetwork } from "../visuals/HumanSecurityNetwork";

export function PillarsSection() {
  return (
    <section id="pillars-section" className="relative py-20 md:py-28 bg-offwhite overflow-hidden">
      {/* Background Human Security Network (Stage: evolving across Decode / Educate / Intervene) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-15"
      >
        <HumanSecurityNetwork
          autoScrollStage={true}
          interactive={false}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite/90 via-offwhite/40 to-offwhite/95" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal">
              OUR OPERATIONAL MODEL
            </span>
            <span className="text-slate/30">•</span>
            <span className="text-xs text-slate font-medium">From Awareness to Resilient Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            How we build human security.
          </h2>

          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Conventional security education relies on fear-based warning posters, dense compliance policies, and victim-blaming. We design an ecosystem of practical interventions that intervene precisely where decisions are made.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Decode (Navy treatment) */}
          <ScrollReveal
            delay={0}
            className="group rounded-card p-8 bg-navy text-white flex flex-col justify-between border border-navy-dark shadow-card transition-all duration-300 hover:shadow-elevated relative overflow-hidden"
          >
            {/* Background subtle geometric cluster motif */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-light border border-white/10 transition-transform duration-300 group-hover:scale-105">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-teal-light px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  PILLAR // 01
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-light font-bold">
                  DECODE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                  We break down real-world scams and examine the psychological tactics used to manipulate people.
                </h3>
              </div>

              <p className="text-sm text-white/80 leading-relaxed">
                Rather than treating deception as technical mystery, we reverse-engineer live social engineering transcripts and identify the cognitive levers—urgency, authority, and isolation—used to bypass skepticism.
              </p>

              <div className="pt-2 border-t border-white/10 text-xs text-white/70 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light" />
                  <span>Real campaign forensics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light" />
                  <span>Red flag anatomy mapping</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/scam-library"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-teal-light hover:text-white transition-colors"
              >
                <span>Explore Scam Library</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Educate (Teal treatment) */}
          <ScrollReveal
            delay={80}
            className="group rounded-card p-8 bg-teal text-white flex flex-col justify-between shadow-card transition-all duration-300 hover:shadow-elevated relative overflow-hidden"
          >
            {/* Background subtle harmonic wave motif */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white border border-white/15 transition-transform duration-300 group-hover:scale-105">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white px-2.5 py-1 rounded bg-white/10 border border-white/20">
                  PILLAR // 02
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
                  EDUCATE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                  We turn real incidents into accessible learning resources and community workshops.
                </h3>
              </div>

              <p className="text-sm text-white/90 leading-relaxed">
                We replace victim-shaming lectures with interactive, scenario-based simulation workshops. Participants practice recognizing emotional manipulation in safe environments, building instinctive verification reflexes.
              </p>

              <div className="pt-2 border-t border-white/15 text-xs text-white/80 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Interactive simulation sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Cognitive pause training</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/our-work"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-offwhite underline underline-offset-4 transition-colors"
              >
                <span>View Educational Programs</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Intervene (Soft mint treatment) */}
          <ScrollReveal
            delay={160}
            className="group rounded-card p-8 bg-mint text-navy flex flex-col justify-between border border-mint-border shadow-card transition-all duration-300 hover:shadow-elevated relative overflow-hidden"
          >
            {/* Background subtle lattice motif */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal border border-mint-border transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-teal-deep px-2.5 py-1 rounded bg-white border border-mint-border">
                  PILLAR // 03
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-teal font-bold">
                  INTERVENE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy leading-snug">
                  We develop initiatives and practical tools that help people make safer, more informed decisions.
                </h3>
              </div>

              <p className="text-sm text-ink/80 leading-relaxed">
                Abstract awareness is insufficient without concrete intervention pathways. Projects like Invisible Devices translate human security into structured, rule-based decision support that protects privacy and community resources.
              </p>

              <div className="pt-2 border-t border-mint-border text-xs text-slate space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Rule-based digital exit tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Physical verification protocols</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/invisible-devices"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
              >
                <span>Discover Interventions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
