import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PillarsSection() {
  return (
    <section
      id="pillars-section"
      className="py-20 md:py-28 bg-offwhite"
    >
      <Container>
        <ScrollReveal className="max-w-3xl mb-14 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Our Approach
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy tracking-tight leading-[1.12]">
            How we build human security.
          </h2>

          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Awareness posters and fear-based warnings rarely change what people do in the heat of a real scam. We focus on three connected practices that work where decisions happen.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Decode */}
          <ScrollReveal
            delay={0}
            className="group rounded-card p-8 sm:p-9 bg-navy text-white flex flex-col justify-between border border-navy-dark"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">
                01 · Decode
              </p>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Break down real scams to expose the human leverage behind them.
              </h3>

              <p className="text-sm text-white/80 leading-relaxed">
                We examine real reported cases to show how urgency, authority, and routine familiarity are woven together — and where a single independent check could have interrupted the fraud.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <Link
                href="/scam-library"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-teal-light hover:text-white transition-colors"
              >
                <span>Explore Scam Library</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Educate */}
          <ScrollReveal
            delay={60}
            className="group rounded-card p-8 sm:p-9 bg-teal text-white flex flex-col justify-between"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                02 · Educate
              </p>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Turn real incidents into accessible workshops and learning guides.
              </h3>

              <p className="text-sm text-white/90 leading-relaxed">
                We replace victim-blaming lectures with interactive, scenario-based sessions where students, families, and seniors practise spotting pressure tactics in a supportive space.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/15">
              <Link
                href="/our-work"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-offwhite transition-colors"
              >
                <span>View Our Programs</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Intervene */}
          <ScrollReveal
            delay={120}
            className="group rounded-card p-8 sm:p-9 bg-mint text-navy flex flex-col justify-between border border-mint-border"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                03 · Intervene
              </p>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy leading-snug">
                Build practical tools that make the safer choice the easier one.
              </h3>

              <p className="text-sm text-ink/80 leading-relaxed">
                Knowledge alone isn&apos;t enough when everyday decisions feel complicated. Projects like Invisible Devices and Digital Exit guide people step by step through data wiping and responsible reuse.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-mint-border">
              <Link
                href="/invisible-devices"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
              >
                <span>Explore Invisible Devices</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
