import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeroBackground } from "./HeroBackground";
import { SignalBadge } from "../ui/SignalBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24 bg-offwhite">
      {/* Subtle animated artistic background */}
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <SignalBadge number="00" label="HUMAN SECURITY" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-teal-deep text-xs font-semibold uppercase tracking-wider border border-mint-border shadow-subtle">
                <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                <span>Minds over Manipulation</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]">
              <span className="inline-block transition-transform duration-500 hover:translate-x-0.5">
                People get{" "}
              </span>
              <span className="relative inline-block text-navy">
                hacked
                <span className="absolute bottom-1.5 left-0 right-0 h-[6px] bg-teal/20 -z-10 rounded-sm" />
              </span>{" "}
              <span className="inline-block">too.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-2xl">
              Unhackable Humans builds human security by decoding manipulation, exposing real-world scams and helping people make safer decisions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button href="/our-work" variant="primary" size="lg">
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button href="/scam-library" variant="outline" size="lg">
                <span>Read the Latest Scam</span>
              </Button>
            </div>

            {/* Credibility statement */}
            <div className="pt-6 border-t border-mint-border/80 flex items-center gap-6 text-xs text-slate">
              <span className="font-medium text-navy">Core Philosophy:</span>
              <span>Decode</span>
              <span className="text-slate/40">•</span>
              <span>Educate</span>
              <span className="text-slate/40">•</span>
              <span>Intervene</span>
            </div>
          </div>

          {/* Right Column: Restrained Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border-2 border-mint-border bg-white shadow-elevated p-6 sm:p-8 space-y-6 uh-card-hover group">
                <div className="flex items-center justify-between pb-4 border-b border-mint-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-navy">
                      Human Security Blueprint
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate">UH-SYS-01</span>
                </div>

                {/* Visible Photography Placeholder per Hard Rule 1 */}
                <div className="aspect-[4/3] rounded-xl bg-offwhite border border-dashed border-slate/30 flex flex-col items-center justify-center p-6 text-center space-y-2 transition-transform duration-300 group-hover:scale-[1.01]">
                  <span className="text-xs font-mono font-semibold text-slate uppercase tracking-wider">
                    [PLACEHOLDER: Photography]
                  </span>
                  <p className="text-xs text-slate/80 leading-relaxed max-w-xs">
                    Editorial documentary-style photograph of a human interacting thoughtfully with personal technology. Free of hooded hackers, matrix code, or neon glow.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-mint/50 border border-mint-border text-xs text-navy space-y-1 transition-colors duration-200 group-hover:bg-mint/80">
                  <span className="font-bold block">The Human Layer:</span>
                  <p className="text-slate text-[11px] leading-relaxed">
                    Firewalls defend networks. Critical pause points defend judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
