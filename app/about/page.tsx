import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Shield, Sparkles, UserCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About UH | Unhackable Humans",
  description:
    "Philosophy, origin, and approach of Unhackable Humans. Human security through Minds over Manipulation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* 1. Mission and Origin */}
        <Section variant="offwhite" spacing="spacious" className="border-b border-mint-border">
          <Container>
            <ScrollReveal className="max-w-3xl space-y-6">
              <p className="text-xs uppercase tracking-widest font-semibold text-teal">
                Origin &amp; Mission • Human Security
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Minds over Manipulation.
              </h1>
              <p className="text-lg sm:text-xl text-slate leading-relaxed">
                Unhackable Humans was founded on a simple observation: cybersecurity investments have poured billions into patching software vulnerabilities, while the most vulnerable attack surface—human psychology—remains completely neglected.
              </p>
              <p className="text-base text-slate leading-relaxed">
                When social engineers leverage urgency, panic, authority, or affection, technical firewalls are circumvented from the inside. We exist to build human resilience: equipping everyday individuals, families, and organizations with the cognitive reflexes needed to withstand manipulation.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* 2 & 3. Why Human Security Matters & Minds over Manipulation */}
        <Section variant="white" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-teal">
                  The Human Layer
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  Why human security matters.
                </h2>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Cybercrime has transformed from lone malware authors into highly structured psychological industries. Scammers operate structured scripts designed to create adrenaline spikes, cloud judgment, and enforce isolation.
                </p>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Blaming victims for falling for scams ignores how deeply human trust and compliance are hardwired. True security means designing social environments and cognitive habits that make healthy skepticism the default.
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-teal">
                  Our Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  What &ldquo;Minds over Manipulation&rdquo; means.
                </h2>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  &ldquo;Minds over Manipulation&rdquo; is a declaration that human judgment, when supported by the right tools and habits, can prevail over predatory deceit.
                </p>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  It represents a pivot away from fear-based warnings toward empowering individuals to recognize emotional leverage in real time and hit the mental &ldquo;pause button&rdquo; before taking irrevocable action.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Decode -> Educate -> Intervene Framework */}
        <Section variant="offwhite" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                Our Methodology
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                The Decode → Educate → Intervene framework.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="white" className="space-y-3">
                <span className="text-xs font-mono font-bold text-teal">01 · DECODE</span>
                <h3 className="text-xl font-bold text-navy">Investigate Mechanics</h3>
                <p className="text-sm text-slate leading-relaxed">
                  We reverse-engineer real scam transcripts, phishing architectures, and social engineering scripts to uncover the precise cognitive leverage used.
                </p>
              </Card>

              <Card variant="white" className="space-y-3">
                <span className="text-xs font-mono font-bold text-teal">02 · EDUCATE</span>
                <h3 className="text-xl font-bold text-navy">Actionable Literacy</h3>
                <p className="text-sm text-slate leading-relaxed">
                  We translate investigative findings into plain-language case studies, interactive community workshops, and open-source educational resources.
                </p>
              </Card>

              <Card variant="white" className="space-y-3">
                <span className="text-xs font-mono font-bold text-teal">03 · INTERVENE</span>
                <h3 className="text-xl font-bold text-navy">Build Systems</h3>
                <p className="text-sm text-slate leading-relaxed">
                  We create practical tools—such as Digital Exit for retired hardware—that remove friction from safe, secure, and circular decision-making.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 5. Founder's Desk (Placeholder per Hard Rule 1 & §5.4 item 5) */}
        <Section variant="white" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="max-w-3xl mx-auto rounded-card border border-mint-border bg-offwhite p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal" />
                <span className="text-xs uppercase tracking-widest font-bold text-teal">
                  Founder&apos;s Desk
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                A personal note on why we built Unhackable Humans.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate leading-relaxed italic">
                <p className="font-mono text-xs not-italic p-3 rounded bg-white border border-slate/20 text-slate">
                  [PLACEHOLDER: Authentic personal essay from the Founder detailing the personal encounter or insight that catalyzed the creation of UH, emphasizing human security, empathy over shame, and community defense.]
                </p>
                <p>
                  &ldquo;I saw brilliant, thoughtful people get deceived not because they were foolish, but because an adversary skillfully dialed their emotional temperature to boiling point. We cannot solve manipulation with code alone; we must solve it with human clarity.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-mint-border flex items-center justify-between">
                <div>
                  <span className="font-bold text-navy text-sm block">
                    [PLACEHOLDER: Founder Name]
                  </span>
                  <span className="text-xs text-slate">
                    Founder, Unhackable Humans
                  </span>
                </div>
                <span className="text-xs font-mono text-slate/60">[PLACEHOLDER: Signature]</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* 6. Current Initiatives and Future Direction */}
        <Section variant="mint" spacing="default">
          <Container>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Our roadmap &amp; future direction.
              </h2>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                As synthetic voice cloning, real-time deepfakes, and automated social engineering proliferate, our focus is expanding toward developing household verification protocols and institutional behavioral defense frameworks.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm"
                >
                  <span>Collaborate With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
