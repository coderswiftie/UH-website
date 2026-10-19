import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getApprovedTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials | Unhackable Humans",
  description:
    "Verified experiences, community feedback, and reflections from participants in Unhackable Humans programs.",
};

export default function TestimonialsPage() {
  // CRITICAL RULE: Render ONLY entries with approvalStatus === "approved"
  const approvedTestimonials = getApprovedTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                Community Feedback
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Verified Testimonials.
              </h1>
              <p className="text-base text-slate leading-relaxed">
                We believe in ethical proof. Testimonials and feedback are published solely from consented participants in our community workshops and awareness programs.
              </p>
            </div>
          </Container>
        </Section>

        {/* Testimonials Grid */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approvedTestimonials.map((t) => (
                <Card
                  key={t.id}
                  variant="offwhite"
                  className="space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-teal/40" />
                    <blockquote className="text-base sm:text-lg text-ink font-medium leading-relaxed italic">
                      {t.quote}
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-mint-border flex items-center justify-between">
                    <div>
                      <h2 className="font-bold text-navy text-sm">
                        {t.nameOrDescriptor}
                      </h2>
                      <span className="text-xs text-slate block">{t.context}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-teal text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Consent Policy Callout */}
            <div className="mt-14 max-w-2xl mx-auto p-6 rounded-card bg-mint/50 border border-mint-border text-center text-xs text-slate space-y-1">
              <strong className="text-navy block font-semibold">
                Testimonial Governance &amp; Ethics:
              </strong>
              <p>
                We never fabricate endorsements or publish quotes without recorded participant consent. Pending submissions remain strictly quarantined in our review pipeline until explicit permission is signed.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
