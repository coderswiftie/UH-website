import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  User,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getActiveTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team & Founder's Desk | Unhackable Humans",
  description:
    "Meet Rahi Shah, Founder of Unhackable Humans, and the multidisciplinary researchers, investigators, and designers building human security.",
};

export default function TeamPage() {
  const teamMembers = getActiveTeamMembers();

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
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                People &amp; Purpose
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                The people behind Unhackable Humans.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                Security cannot end with technology alone. We study manipulation tactics, run community workshops, and build practical tools for everyday digital safety.
              </p>
            </div>
          </Container>
        </Section>

        {/* Founder's Desk Section */}
        <Section
          variant="white"
          spacing="default"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Founder Profile Column */}
              <ScrollReveal className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
                <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden border border-mint-border">
                  <Image
                    src="/images/founder.jpg"
                    alt="Rahi Shah - Founder of Unhackable Humans"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy tracking-tight">
                    Rahi Shah
                  </h3>
                  <p className="text-xs font-semibold text-teal-deep">
                    Founder &amp; Lead Investigator
                  </p>
                  <p className="text-xs text-slate leading-relaxed">
                    Aspiring Cybersecurity Specialist leading case investigations, human security workshops, and digital exit initiatives.
                  </p>
                </div>

                <div className="pt-4 border-t border-mint-border flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/unhackable-humans?trk=public_post_feed-actor-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-offwhite border border-mint-border text-navy text-xs font-medium hover:border-teal hover:text-teal transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@RahiShah_02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-offwhite border border-mint-border text-navy text-xs font-medium hover:border-teal hover:text-teal transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href="https://www.instagram.com/unhackable_humans/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-offwhite border border-mint-border text-navy text-xs font-medium hover:border-teal hover:text-teal transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="mailto:unhackable.humans@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-offwhite border border-mint-border text-navy text-xs font-medium hover:border-teal hover:text-teal transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Founder's Desk Essay Column */}
              <ScrollReveal delay={60} className="lg:col-span-8 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                  Founder&apos;s Desk
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                  Why I Built Unhackable Humans.
                </h2>

                <blockquote className="pl-5 border-l-2 border-teal text-navy text-base sm:text-lg font-medium leading-relaxed italic">
                  &ldquo;In a world that is constantly building smarter technology, we must also build more aware human beings. And perhaps that is where being unhackable truly begins.&rdquo;
                </blockquote>

                <div className="space-y-4 text-sm sm:text-base text-ink/90 leading-relaxed">
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

                  <p className="pl-4 border-l-2 border-mint-border text-navy font-medium py-1">
                    I began to wonder: What if we stopped treating every scam as just another headline and started treating it as a lesson we could all learn from?
                  </p>

                  <p>
                    That question became one of the reasons behind{" "}
                    <strong>Unhackable Humans</strong>.
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
                    Not by asking them to fear technology, but by helping them understand it. Not by blaming victims, but by learning from the methods used against them. And not by letting another incident become yesterday&apos;s news, but by turning it into knowledge that could protect someone tomorrow.
                  </p>
                </div>

                <div className="pt-6 border-t border-mint-border">
                  <p className="font-bold text-navy text-base">Rahi Shah</p>
                  <p className="text-xs text-slate">
                    Founder, Unhackable Humans
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* Core Team Grid */}
        <Section variant="offwhite" spacing="default">
          <Container>
            <div className="max-w-2xl mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Core Team
              </p>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Researchers, builders, and coordinators.
              </h2>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                Unhackable Humans brings together students, technologists, communicators, and community coordinators working across scam literacy and circular hardware initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    {member.photo ? (
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-mint-border bg-white">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square w-full rounded-xl bg-white border border-dashed border-slate/30 flex flex-col items-center justify-center p-4 text-center">
                        <User className="w-10 h-10 text-slate/40 mb-2" />
                        <span className="text-xs text-slate">
                          [PLACEHOLDER: Portrait Photo]
                        </span>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-bold text-navy tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-teal-deep mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm text-slate leading-relaxed">
                      {member.biography}
                    </p>
                  </div>

                  {member.socialLink && (
                    <div className="pt-3 border-t border-mint-border">
                      {member.socialLink.startsWith("http") ? (
                        <a
                          href={member.socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-teal hover:text-teal-deep inline-flex items-center gap-1 transition-colors"
                        >
                          <span>LinkedIn</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate">
                          {member.socialLink}
                        </span>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>

            <p className="mt-14 pt-6 border-t border-mint-border text-xs text-slate text-center max-w-xl mx-auto">
              All team profiles and photographs are published with explicit consent.
            </p>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
