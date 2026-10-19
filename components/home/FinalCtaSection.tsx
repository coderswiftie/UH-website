import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Handshake } from "lucide-react";
import { Container } from "../ui/Container";

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-mint border-b border-mint-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-deep">
            Join the Movement
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Stay informed. Stay harder to manipulate.
          </h2>

          <p className="text-base sm:text-lg text-ink/80 leading-relaxed max-w-xl mx-auto">
            Human security is not a technical patch; it is an ongoing cultural habit. Explore our open research, train your cognitive instincts, or partner with us to protect your community.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scam-library"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Scam Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-white text-navy border border-mint-border font-semibold text-sm hover:bg-offwhite transition-all shadow-subtle hover:-translate-y-0.5"
            >
              <Handshake className="w-4 h-4 text-teal" />
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
