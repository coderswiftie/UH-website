import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-mint border-b border-mint-border">
      <Container>
        <ScrollReveal className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-navy tracking-tight leading-[1.12]">
            Stay informed. Stay harder to manipulate.
          </h2>

          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Human security isn&apos;t a one-time fix — it&apos;s an everyday habit. Read our open case studies or get in touch to bring a workshop to your school, workplace, or community.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scam-library"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
            >
              <span>Explore Scam Library</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-btn bg-white text-navy border border-mint-border font-semibold text-sm hover:border-teal/40 hover:bg-offwhite transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
