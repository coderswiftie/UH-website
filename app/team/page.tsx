import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  User,
  Quote,
  Shield,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getActiveTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team & Founder's Desk | Unhackable Humans",
  description:
    "Meet Rahi Shah, Founder of Unhackable Humans, and the multidisciplinary researchers, investigators, and designers building human security.",
};

export default function TeamPage() {
  const teamMembers = getActiveTeamMembers();
  const founder = teamMembers.find((m) => m.id === "founder");
  const coreTeam = teamMembers.filter((m) => m.id !== "founder");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="max-w-3xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                People &amp; Purpose
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                The people behind Unhackable Humans.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                Security cannot end with technology alone. We decode manipulation mechanics, explore cognitive vulnerabilities, and build practical tools to empower everyday people.
              </p>
            </div>
          </Container>
        </Section>

        {/* Founder's Desk Section */}
        <Section variant="white" spacing="default" className="border-b border-mint-border">
          <Container>
            <div className="rounded-3xl border border-mint-border bg-gradient-to-b from-offwhite via-white to-offwhite p-6 sm:p-10 lg:p-12 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Founder Profile Column */}
                <ScrollReveal className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                  <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-elevated border-2 border-white ring-1 ring-mint-border">
                    <Image
                      src="/images/founder.jpg"
                      alt="Rahi Shah - Founder of Unhackable Humans"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-teal text-white shadow-sm mb-1">
                        Founder &amp; Lead Investigator
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
                        Rahi Shah
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-mint-border space-y-4 shadow-subtle">
                    <div>
                      <h4 className="font-bold text-navy text-base">Rahi Shah</h4>
                      <p className="text-xs text-teal-deep font-medium">
                        Founder &amp; Aspiring Cybersecurity Specialist
                      </p>
                      <p className="text-xs text-slate mt-2 leading-relaxed">
                        Leading the investigation of cognitive fraud vulnerabilities, human security reflexes, and digital exit interventions.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-mint-border space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate/75 block">
                        Connect with the Founder
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href="https://www.linkedin.com/company/unhackable-humans?trk=public_post_feed-actor-name"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-offwhite border border-mint-border text-navy text-xs font-medium hover:bg-teal hover:text-white hover:border-teal transition-all"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>LinkedIn</span>
                        </a>

                        <a
                          href="https://www.youtube.com/@RahiShah_02"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-offwhite border border-mint-border text-navy text-xs font-medium hover:bg-teal hover:text-white hover:border-teal transition-all"
                          title="YouTube"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          <span>YouTube</span>
                        </a>

                        <a
                          href="https://www.instagram.com/unhackable_humans/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-offwhite border border-mint-border text-navy text-xs font-medium hover:bg-teal hover:text-white hover:border-teal transition-all"
                          title="Instagram"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>Instagram</span>
                        </a>

                        <a
                          href="mailto:unhackable.humans@gmail.com"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-offwhite border border-mint-border text-navy text-xs font-medium hover:bg-teal hover:text-white hover:border-teal transition-all"
                          title="Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Founder's Desk Essay Column */}
                <ScrollReveal delay={100} className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest">
                    <Quote className="w-4 h-4 text-teal" />
                    <span>Founder&apos;s Desk</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                    Why I Built Unhackable Humans.
                  </h2>

                  {/* Highlight Quote */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-mint/50 border border-teal/20 text-teal-deep text-sm sm:text-base font-semibold leading-relaxed italic">
                    &ldquo;In a world that is constantly building smarter technology, we must also build more aware human beings. And perhaps that is where being unhackable truly begins.&rdquo;
                  </div>

                  {/* Essay Prose */}
                  <div className="space-y-4 text-sm sm:text-base text-slate leading-relaxed">
                    <p>
                      For years, I had wanted to build a nonprofit of my own. I kept looking for opportunities, trying to understand where I could make a difference. And somewhere along the way, I started noticing a pattern in the newspapers I read every day.
                    </p>

                    <p className="font-semibold text-navy">
                      Another scam. Another victim. Another life disrupted.
                    </p>

                    <p>
                      What struck me wasn&apos;t just how frequently these incidents occurred, but how quickly the world moved on from them.
                    </p>

                    <p>
                      We read about a scam, feel disturbed for a moment, and turn the page. We rarely stop to ask why it happened, how it worked, what made someone vulnerable, or what we could learn from it. Often, it is only when something similar happens to us or someone we love that we begin to pay attention. Even then, that awareness can fade once the immediate fear passes.
                    </p>

                    <div className="p-4 rounded-xl bg-offwhite border-l-4 border-teal text-navy font-medium my-4">
                      I began to wonder: What if we stopped treating every scam as just another headline and started treating it as a lesson we could all learn from?
                    </div>

                    <p>
                      That question became one of the reasons behind <strong>Unhackable Humans</strong>.
                    </p>

                    <p>
                      As someone aspiring to become a cybersecurity specialist, I deeply believe in the power of technology to make our world safer. Better systems, stronger security, and technical advancements are essential. But I also believe that security cannot end with technology.
                    </p>

                    <p>
                      Because behind every scam is a human being. Human emotions, trust, fear, urgency, and the desire to help can all become points of vulnerability. Understanding these human elements is just as important as understanding the technology involved.
                    </p>

                    <p>
                      And that is what Unhackable Humans stands for: the belief that security is not just about protecting systems; it is about empowering the people who use them.
                    </p>

                    <p>
                      We live in a world that is becoming increasingly technologically equipped. We build smarter systems, develop more sophisticated tools, and find new ways to automate our lives. Yet, amid all this progress, we must not forget the human being at the centre of it all.
                    </p>

                    <p>
                      Technology can be a powerful ally, but we must understand its limitations, recognise its risks, and learn to use it responsibly. Awareness is not the alternative to technological advancement; it is what helps us make the most of it.
                    </p>

                    <p>
                      I believe human potential will remain one of our greatest strengths, regardless of how advanced the world becomes. Our ability to question, understand, empathise, pause, and make informed decisions matters more than we sometimes realise.
                    </p>

                    <p>
                      Unhackable Humans is my attempt to remind people of that power.
                    </p>

                    <p>
                      Not by asking them to fear technology, but by helping them understand it. Not by blaming victims, but by learning from the methods used against them. And not by letting another incident become yesterday’s news, but by turning it into knowledge that could protect someone tomorrow.
                    </p>
                  </div>

                  {/* Signoff */}
                  <div className="pt-6 border-t border-mint-border flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-navy text-base block">
                        Rahi Shah
                      </span>
                      <span className="text-xs text-slate">
                        Founder, Unhackable Humans
                      </span>
                    </div>
                    <span className="text-xs font-mono text-teal font-semibold">
                      Founder&apos;s Desk • Unhackable Humans
                    </span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </Section>

        {/* Core Team & Contributors Grid */}
        <Section variant="offwhite" spacing="default">
          <Container>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                Research &amp; Field Cohort
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Core Initiatives &amp; Investigators.
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                Unhackable Humans brings together student researchers, security analysts, and circularity advocates across multiple investigative initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  variant="white"
                  className="space-y-5 flex flex-col justify-between hover:shadow-card transition-all"
                >
                  <div className="space-y-4">
                    {/* Portrait Photo or Placeholder */}
                    {member.photo ? (
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-subtle border border-mint-border">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square w-full rounded-xl bg-offwhite border border-dashed border-slate/30 flex flex-col items-center justify-center p-4 text-center">
                        <User className="w-12 h-12 text-slate/40 mb-2" />
                        <span className="font-mono text-[11px] uppercase font-semibold text-slate">
                          [PLACEHOLDER: Portrait Photo]
                        </span>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-navy tracking-tight">
                        {member.name}
                      </h3>
                      <span className="text-xs font-semibold text-teal-deep uppercase tracking-wider block mt-0.5">
                        {member.role}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate leading-relaxed">
                      {member.biography}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-mint-border">
                    {member.socialLink?.startsWith("http") ? (
                      <a
                        href={member.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-teal hover:text-teal-deep flex items-center gap-1 transition-colors"
                      >
                        <span>Verified Profile</span>
                        <ArrowUpRight className="w-3 h-3 text-teal" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate/70 flex items-center gap-1">
                        {member.socialLink}
                        <ArrowUpRight className="w-3 h-3 text-teal" />
                      </span>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Integrity Notice */}
            <div className="mt-14 p-6 rounded-card bg-mint/50 border border-mint-border max-w-2xl mx-auto text-center text-xs text-slate">
              <p>
                In alignment with UH content integrity rules, team profiles and photos are published with explicit recorded consent.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
