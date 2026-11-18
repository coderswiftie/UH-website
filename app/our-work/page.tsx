import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getAllProjects } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectSchematic } from "@/components/visuals/ProjectSchematic";

export const metadata: Metadata = {
  title: "Our Work | Unhackable Humans",
  description:
    "Active initiatives, research projects, and community interventions built by Unhackable Humans.",
};

export default function OurWorkPage() {
  const projects = getAllProjects();

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
            <ScrollReveal className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Our Work
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Where human security becomes action.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                Awareness alone rarely changes what happens in a high-pressure moment. Each initiative below is built to make safer decisions clearer and easier in real life.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Initiatives List */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="divide-y divide-mint-border">
              {projects.map((proj, idx) => (
                <article
                  key={proj.id}
                  className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    idx === 0 ? "pb-14" : "py-14"
                  }`}
                >
                  {/* Media Graphic */}
                  <div className="lg:col-span-5">
                    <ProjectSchematic
                      projectId={proj.id}
                      media={proj.media}
                      title={proj.title}
                    />
                  </div>

                  {/* Editorial Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                          {proj.title}
                        </h2>
                        <span className="text-xs font-semibold capitalize text-teal-deep">
                          {proj.status}
                        </span>
                      </div>

                      <p className="text-base text-ink/90 font-medium leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-mint-border text-sm">
                      <div className="space-y-1">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-navy">
                          The Problem
                        </dt>
                        <dd className="text-slate leading-relaxed">
                          {proj.problem}
                        </dd>
                      </div>

                      <div className="space-y-1">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
                          What We Do
                        </dt>
                        <dd className="text-slate leading-relaxed">
                          {proj.intervention}
                        </dd>
                      </div>
                    </dl>

                    <dl className="space-y-3 pt-4 border-t border-mint-border/70 text-sm">
                      {proj.beneficiary && (
                        <div>
                          <dt className="font-semibold text-navy inline">
                            Who it helps:{" "}
                          </dt>
                          <dd className="text-slate inline">
                            {proj.beneficiary}
                          </dd>
                        </div>
                      )}
                      <div>
                        <dt className="font-semibold text-navy inline">
                          Progress:{" "}
                        </dt>
                        <dd className="text-slate inline">{proj.impact}</dd>
                      </div>
                    </dl>

                    {proj.cta && (
                      <div className="pt-2">
                        <Link
                          href={proj.cta.href}
                          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
                        >
                          <span>{proj.cta.label}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
