import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-14 md:pt-24 lg:pt-28 pb-16 md:pb-24 bg-offwhite"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              Human Security Initiative · Minds over Manipulation
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-navy tracking-tight leading-[1.08]">
              People get{" "}
              <span className="relative inline-block">
                hacked
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-[5px] sm:h-[6px] bg-teal/25 -z-10"
                />
              </span>{" "}
              too.
            </h1>

            <p className="text-base sm:text-lg lg:text-[1.15rem] text-slate leading-relaxed max-w-xl">
              Unhackable Humans helps people recognise digital manipulation, understand real-world scams, and make safer decisions through open research, education, and practical tools.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7">
              <Button href="/our-work" variant="primary" size="lg">
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link
                href="/scam-library"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors py-2 group/link"
              >
                <span>Read the Latest Case</span>
                <ArrowRight className="w-4 h-4 text-teal transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Perspective */}
          <div className="lg:col-span-5">
            <div className="border-l-2 border-teal pl-6 sm:pl-8 py-1 space-y-6">
              <div className="space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                  The Human Layer
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                  Firewalls protect networks. Clear judgement protects people.
                </h2>
                <p className="text-sm text-slate leading-relaxed">
                  Most security work focuses on devices and software. We focus on the moments of urgency, fear, authority, and misplaced trust where everyday decisions are actually made.
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-4 pt-5 border-t border-mint-border">
                <div>
                  <dt className="text-sm font-bold text-navy">Decode</dt>
                  <dd className="text-xs text-slate mt-0.5 leading-snug">
                    Real scam mechanics
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-navy">Educate</dt>
                  <dd className="text-xs text-slate mt-0.5 leading-snug">
                    Habits &amp; pause points
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-navy">Intervene</dt>
                  <dd className="text-xs text-slate mt-0.5 leading-snug">
                    Practical tools
                  </dd>
                </div>
              </dl>

              <div className="pt-4 border-t border-mint-border flex items-center justify-between text-xs">
                <span className="text-slate font-medium">
                  Non-profit civic initiative
                </span>
                <Link
                  href="/about"
                  className="font-semibold text-teal hover:text-teal-deep transition-colors inline-flex items-center gap-1"
                >
                  <span>Read our story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
