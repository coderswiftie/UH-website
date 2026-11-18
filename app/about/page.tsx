import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Unhackable Humans",
  description:
    "Philosophy, origin, and approach of Unhackable Humans. Human security through Minds over Manipulation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Origin & Mission */}
        <Section
          variant="offwhite"
          spacing="spacious"
          className="border-b border-mint-border"
        >
          <Container>
            <ScrollReveal className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                About Unhackable Humans
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.1]">
                Minds over Manipulation.
              </h1>
              <p className="text-lg sm:text-xl text-slate leading-relaxed">
                Unhackable Humans began with a straightforward observation: while billions are spent patching software and securing networks, the human side of security is still treated as an afterthought.
              </p>
              <p className="text-base text-slate leading-relaxed">
                When fraudsters manufacture urgency, fear, authority, or familiarity, strong technical tools get bypassed from the inside. We work to build human resilience — helping individuals, families, and organisations pause, verify, and stay grounded when pressured.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Philosophy Two-Column */}
        <Section
          variant="white"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                  The Human Layer
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  Why human security matters.
                </h2>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Modern scams are no longer lone technical tricks; they are coordinated operations built around repeatable psychological scripts designed to create pressure, cloud judgement, and isolate targets.
                </p>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Blaming victims ignores how deeply trust and cooperation are built into everyday life. Better security means creating practical habits and environments where stopping to check feels natural.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                  Our Philosophy
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  What &ldquo;Minds over Manipulation&rdquo; means.
                </h2>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  It is the belief that human judgement, when backed by clear knowledge and practical habits, can hold steady against deceptive pressure.
                </p>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  Rather than relying on fear-based warnings, we help people recognise emotional leverage in real time and take a deliberate pause before making an irreversible decision.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Framework */}
        <Section
          variant="offwhite"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Methodology
              </p>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Decode, Educate, Intervene.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t-2 border-navy pt-6 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  01 · Decode
                </span>
                <h3 className="text-xl font-bold text-navy">
                  Examine real mechanics
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  We study real reported scams and manipulation scripts to pinpoint the exact turning point where pressure replaced independent verification.
                </p>
              </div>

              <div className="border-t-2 border-teal pt-6 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  02 · Educate
                </span>
                <h3 className="text-xl font-bold text-navy">
                  Share plain-language learning
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  We turn our findings into readable weekly case breakdowns, scenario-based workshops, and open community guides.
                </p>
              </div>

              <div className="border-t-2 border-teal-deep pt-6 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  03 · Intervene
                </span>
                <h3 className="text-xl font-bold text-navy">
                  Build practical tools
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  We build straightforward tools — like Digital Exit for retired devices — that take the guesswork out of staying safe.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Founder's Desk */}
        <Section
          variant="white"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 mb-10 border-b border-mint-border">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                  Founder&apos;s Desk
                </p>
                <Link
                  href="/team"
                  className="text-xs font-semibold text-teal hover:text-teal-deep inline-flex items-center gap-1 transition-colors"
                >
                  <span>Meet the team &amp; read the full letter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="md:col-span-4 space-y-3">
                  <div className="relative aspect-[4/5] w-full max-w-[240px] rounded-xl overflow-hidden border border-mint-border">
                    <Image
                      src="/images/founder.jpg"
                      alt="Rahi Shah - Founder of Unhackable Humans"
                      fill
                      sizes="240px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-navy text-base">Rahi Shah</h3>
                    <p className="text-xs text-teal-deep font-medium">
                      Founder, Unhackable Humans
                    </p>
                    <p className="text-xs text-slate mt-0.5">
                      Aspiring Cybersecurity Specialist
                    </p>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-slate leading-relaxed">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                    Why I Built Unhackable Humans
                  </h2>

                  <blockquote className="pl-4 border-l-2 border-teal text-navy font-medium italic">
                    &ldquo;What struck me wasn&apos;t just how frequently these incidents occurred, but how quickly the world moved on from them. What if we stopped treating every scam as just another headline and started treating it as a lesson we could all learn from?&rdquo;
                  </blockquote>

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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
                    >
                      <span>Read the full letter on our Team page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Future Direction */}
        <Section variant="mint" spacing="default">
          <Container>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Where we&apos;re headed next.
              </h2>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                As voice cloning, synthetic media, and automated social engineering become more common, we are researching simple household verification habits and practical community guides to keep pace.
              </p>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
                >
                  <span>Collaborate With Us</span>
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
