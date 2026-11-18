import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Shield, Sparkles, UserCheck, Quote } from "lucide-react";
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

        {/* 5. Founder's Desk */}
        <Section variant="white" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="max-w-4xl mx-auto rounded-3xl border border-mint-border bg-gradient-to-b from-offwhite via-white to-offwhite p-8 md:p-12 space-y-8 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-mint-border pb-6">
                <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest">
                  <UserCheck className="w-5 h-5 text-teal" />
                  <span>Founder&apos;s Desk</span>
                </div>
                <Link
                  href="/team"
                  className="text-xs font-semibold text-teal hover:text-teal-deep flex items-center gap-1 transition-colors"
                >
                  <span>Meet the Team &amp; Read Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 space-y-3 text-center md:text-left">
                  <div className="relative aspect-[4/5] w-full max-w-[240px] mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-elevated border-2 border-white ring-1 ring-mint-border">
                    <Image
                      src="/images/founder.jpg"
                      alt="Rahi Shah - Founder of Unhackable Humans"
                      fill
                      sizes="240px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-extrabold text-navy text-lg">Rahi Shah</h3>
                    <p className="text-xs text-teal-deep font-semibold">Founder, Unhackable Humans</p>
                    <p className="text-[11px] text-slate mt-1">Aspiring Cybersecurity Specialist</p>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4 text-sm text-slate leading-relaxed">
                  <h2 className="text-2xl font-extrabold text-navy tracking-tight">
                    Why I Built Unhackable Humans
                  </h2>

                  <div className="p-3.5 rounded-xl bg-mint/50 border border-teal/20 text-teal-deep font-medium italic text-xs sm:text-sm">
                    &ldquo;What struck me wasn’t just how frequently these incidents occurred, but how quickly the world moved on from them. What if we stopped treating every scam as just another headline and started treating it as a lesson we could all learn from?&rdquo;
                  </div>

                  <p>
                    For years, I had wanted to build a nonprofit of my own. I kept looking for opportunities, trying to understand where I could make a difference. And somewhere along the way, I started noticing a pattern in the newspapers I read every day: <em>Another scam. Another victim. Another life disrupted.</em>
                  </p>

                  <p>
                    As someone aspiring to become a cybersecurity specialist, I deeply believe in the power of technology to make our world safer. Better systems, stronger security, and technical advancements are essential. But I also believe that security cannot end with technology.
                  </p>

                  <p>
                    Because behind every scam is a human being. Human emotions, trust, fear, urgency, and the desire to help can all become points of vulnerability. Security is not just about protecting systems; it is about empowering the people who use them.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline"
                    >
                      <span>Read the full Founder&apos;s Desk letter on our Team page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-mint-border flex items-center justify-between text-xs text-slate">
                <span className="font-semibold text-navy">Rahi Shah</span>
                <span className="font-mono text-teal">Founder&apos;s Desk • Unhackable Humans</span>
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
