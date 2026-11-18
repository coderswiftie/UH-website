import React from "react";
import { Container } from "../ui/Container";
import { getApprovedTestimonials, MOCK_IMPACT_STATS } from "@/lib/content";
import { ScrollReveal } from "../ui/ScrollReveal";

export function TestimonialsSection() {
  const testimonials = getApprovedTestimonials();

  return (
    <section className="py-20 md:py-28 bg-white border-y border-mint-border">
      <Container>
        {/* Render impact stats ONLY if verified data is supplied */}
        {MOCK_IMPACT_STATS.verified && MOCK_IMPACT_STATS.items && (
          <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-12 border-b border-mint-border">
            {MOCK_IMPACT_STATS.items.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <span className="text-3xl font-extrabold text-navy">{stat.value}</span>
                <span className="text-xs text-slate block">{stat.label}</span>
              </div>
            ))}
          </ScrollReveal>
        )}

        <ScrollReveal className="max-w-2xl mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Community Voices
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            What workshop participants say.
          </h2>
          <p className="text-sm sm:text-base text-slate leading-relaxed">
            We publish participant feedback only with explicit, recorded consent.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              delay={idx * 60}
              className="border-t border-mint-border pt-7 flex flex-col justify-between space-y-6"
            >
              <blockquote className="text-base sm:text-lg text-ink leading-relaxed">
                {t.quote}
              </blockquote>

              <div className="flex items-baseline justify-between gap-4 text-xs">
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {t.nameOrDescriptor}
                  </p>
                  <p className="text-slate mt-0.5">{t.context}</p>
                </div>
                <span className="text-slate/70 shrink-0">{t.date}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
