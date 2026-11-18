import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24 bg-offwhite/90">
      {/* Subtle animated artistic background */}
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint border border-mint-border text-teal-deep text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                Human Security Initiative
              </span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate">
                Minds over Manipulation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]">
              <span className="inline-block">People</span>{" "}
              <span className="inline-block">get</span>
              <span className="inline-block w-3 sm:w-5 lg:w-6" aria-hidden="true" />
              <span className="relative inline-block text-navy">
                hacked
                <span className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-[4px] sm:h-[6px] bg-teal/25 -z-10 rounded-sm" />
              </span>{" "}
              <span className="inline-block">too.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate leading-relaxed max-w-2xl font-normal">
              Unhackable Humans is a human-security initiative that helps people recognise digital manipulation, understand real-world scams and make safer decisions through education, research and practical interventions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Button href="/our-work" variant="primary" size="lg">
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link
                href="/scam-library"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors py-2 group/link"
              >
                <span>Read the Latest Scam</span>
                <ArrowRight className="w-4 h-4 text-teal transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Credibility statement */}
            <div className="pt-6 border-t border-mint-border flex items-center gap-6 text-xs text-slate">
              <span className="font-semibold text-navy uppercase tracking-wider text-[11px]">Core Philosophy:</span>
              <span className="font-medium text-teal-deep">Decode</span>
              <span className="text-slate/30">•</span>
              <span className="font-medium text-teal-deep">Educate</span>
              <span className="text-slate/30">•</span>
              <span className="font-medium text-teal-deep">Intervene</span>
            </div>
          </div>

          {/* Right Column: Editorial Human Insight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-mint-border bg-white shadow-card p-7 sm:p-8 space-y-5 transition-all duration-300 hover:shadow-elevated">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-teal">
                      THE HUMAN LAYER
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mint text-teal-deep border border-mint-border">
                      DEFENSE PERSPECTIVE
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                    Firewalls defend networks. Critical pause points defend judgment.
                  </h2>
                </div>

                <p className="text-sm text-slate leading-relaxed">
                  Traditional cybersecurity protects endpoints and servers. Unhackable Humans operates where technology meets human vulnerability: in the moments of fear, urgency, and misplaced trust where decisions are actually made.
                </p>

                {/* 3 Pillars Quick Architecture */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-mint-border/80 text-center">
                  <div className="p-2 rounded-lg bg-offwhite border border-mint-border/60">
                    <span className="block font-mono text-[10px] font-bold text-teal">01 // DECODE</span>
                    <span className="text-[11px] text-slate font-medium">Scam Tactics</span>
                  </div>
                  <div className="p-2 rounded-lg bg-offwhite border border-mint-border/60">
                    <span className="block font-mono text-[10px] font-bold text-teal">02 // EDUCATE</span>
                    <span className="text-[11px] text-slate font-medium">Habits &amp; Pause</span>
                  </div>
                  <div className="p-2 rounded-lg bg-offwhite border border-mint-border/60">
                    <span className="block font-mono text-[10px] font-bold text-teal">03 // INTERVENE</span>
                    <span className="text-[11px] text-slate font-medium">Action Tools</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate border-t border-mint-border/60">
                  <span className="font-semibold text-navy">Non-Profit Civic Initiative</span>
                  <Link href="/about" className="font-medium text-teal hover:underline inline-flex items-center gap-1">
                    About Our Origin →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
