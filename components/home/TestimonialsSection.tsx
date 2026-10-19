import React from "react";
import { Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { getApprovedTestimonials, MOCK_IMPACT_STATS } from "@/lib/content";

export function TestimonialsSection() {
  const testimonials = getApprovedTestimonials();

  return (
    <section className="py-20 md:py-28 bg-white border-y border-mint-border">
      <Container>
        {/* Render impact stats ONLY if verified data is supplied per Hard Rule 1 */}
        {MOCK_IMPACT_STATS.verified && MOCK_IMPACT_STATS.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-12 border-b border-mint-border">
            {MOCK_IMPACT_STATS.items.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <span className="text-3xl font-extrabold text-navy">{stat.value}</span>
                <span className="text-xs text-slate block">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-teal">
            Evidence &amp; Community Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Real experiences from community participants.
          </h2>
          <p className="text-sm text-slate leading-relaxed">
            We publish testimonials only with recorded, explicit consent. All descriptors reflect verified workshop and program attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-card border border-mint-border bg-offwhite flex flex-col justify-between shadow-subtle hover:border-teal/30 hover:shadow-card transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-teal/40" />
                <p className="text-base sm:text-lg text-ink font-medium leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-mint-border/80 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-navy text-sm">
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
