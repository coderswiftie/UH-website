import React from "react";
import { Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { getApprovedTestimonials, MOCK_IMPACT_STATS } from "@/lib/content";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

export function TestimonialsSection() {
  const testimonials = getApprovedTestimonials();

  return (
    <section className="py-20 md:py-28 bg-white border-y border-mint-border">
      <Container>
        {/* Render impact stats ONLY if verified data is supplied per Hard Rule 1 */}
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
          <div className="flex flex-wrap items-center gap-2.5">
            <SignalBadge number="05" label="FIELD EVIDENCE" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate/70">
              COMMUNITY EVIDENCE // 05
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Real experiences from community participants.
          </h2>
          <p className="text-sm text-slate leading-relaxed">
            We publish testimonials only with recorded, explicit consent. All descriptors reflect verified workshop and program attendees.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              delay={idx * 100}
              className="group p-6 sm:p-8 rounded-card border border-mint-border bg-offwhite flex flex-col justify-between shadow-subtle hover:border-teal/50 hover:bg-white uh-card-hover relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="space-y-4">
                <Quote className="w-8 h-8 text-teal/40 transition-transform duration-200 group-hover:scale-110 group-hover:text-teal" />
                <p className="text-base sm:text-lg text-ink font-medium leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-mint-border/80 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-navy text-sm group-hover:text-teal transition-colors">
                    {t.nameOrDescriptor}
                  </h3>
                  <p className="text-xs text-slate">
                    {t.context}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate/70">
                  {t.date}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
