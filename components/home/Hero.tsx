import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24 bg-offwhite">
      {/* Subtle animated artistic background */}
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
              <span>Human Security</span>
              <span className="text-slate/40">•</span>
              <span className="text-slate font-medium">Minds over Manipulation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]">
              <span className="inline-block">People</span>{" "}
              <span className="inline-block">get</span>
              <span className="inline-block w-4 sm:w-6 lg:w-8" aria-hidden="true" />
              <span className="relative inline-block text-navy">
                hacked
                <span className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-[4px] sm:h-[6px] bg-teal/20 -z-10 rounded-sm" />
              </span>{" "}
              <span className="inline-block">too.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-2xl">
              Unhackable Humans builds human security by decoding manipulation, exposing real-world scams and helping people make safer decisions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Button href="/our-work" variant="primary" size="lg">
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link
                href="/scam-library"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate hover:text-navy transition-colors py-2 group/link"
              >
                <span>Read the Latest Scam</span>
                <ArrowRight className="w-4 h-4 text-teal transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Credibility statement */}
            <div className="pt-6 border-t border-mint-border/80 flex items-center gap-6 text-xs text-slate">
              <span className="font-semibold text-navy">Core Philosophy:</span>
              <span>Decode</span>
              <span className="text-slate/40">•</span>
              <span>Educate</span>
              <span className="text-slate/40">•</span>
              <span>Intervene</span>
            </div>
          </div>

          {/* Right Column: Editorial Human Insight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-mint-border bg-white shadow-card p-7 sm:p-9 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-teal">
                    The Human Layer
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                    Firewalls defend networks. Critical pause points defend judgment.
                  </h2>
                </div>

                <p className="text-sm text-slate leading-relaxed">
                  Traditional cybersecurity protects endpoints and servers. Unhackable Humans operates where technology meets human vulnerability: in the moments of fear, urgency, and misplaced trust where decisions are actually made.
                </p>

                <div className="pt-4 border-t border-mint-border flex items-center justify-between text-xs text-slate">
                  <span className="font-semibold text-navy">Core Practice</span>
                  <span className="font-medium text-slate/80">Decode • Educate • Intervene</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
