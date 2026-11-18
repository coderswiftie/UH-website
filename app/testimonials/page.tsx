import React from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getApprovedTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials | Unhackable Humans",
  description:
    "Verified experiences, community feedback, and reflections from participants in Unhackable Humans programs.",
};

export default function TestimonialsPage() {
  // Render ONLY entries with approvalStatus === "approved"
  const approvedTestimonials = getApprovedTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section
          variant="offwhite"
          spacing="compact"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Community Feedback
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Participant Testimonials.
              </h1>
              <p className="text-base text-slate leading-relaxed">
                Every reflection below comes from participants who attended our workshops or programs and gave explicit consent to be quoted.
              </p>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {approvedTestimonials.map((t) => (
                <article
                  key={t.id}
                  className="border-t-2 border-mint-border pt-7 flex flex-col justify-between space-y-6"
                >
                  <blockquote className="text-base sm:text-lg text-ink leading-relaxed">
                    {t.quote}
                  </blockquote>

                  <div className="flex items-center justify-between gap-4 text-xs">
                    <div>
                      <h2 className="font-bold text-navy text-sm">
                        {t.nameOrDescriptor}
                      </h2>
                      <span className="text-slate block mt-0.5">{t.context}</span>
                    </div>

                    <div className="flex items-center gap-1 text-teal font-medium shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Consented</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-mint-border max-w-2xl text-xs text-slate leading-relaxed space-y-1">
              <strong className="text-navy block font-semibold">
                Our publishing standard
              </strong>
              <p>
                We never fabricate endorsements or publish feedback without recorded permission. Unverified submissions stay unpublished until consent is confirmed.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
