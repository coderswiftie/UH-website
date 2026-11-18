import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Wrench } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Badge variant="teal">Ongoing</Badge>;
      case "completed":
        return <Badge variant="mint">Completed</Badge>;
      case "in development":
        return <Badge variant="slate">In Development</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <ScrollReveal className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-teal">
                Civic Initiatives • Actionable Interventions
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Where human security becomes action.
              </h1>
              <p className="text-base sm:text-lg text-slate leading-relaxed">
                We believe awareness without usable interventions is futile. Each initiative below is designed to alter the outcome of a high-risk human interaction.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Project Cards Archive */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="space-y-12">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="rounded-card border border-mint-border bg-white shadow-card overflow-hidden uh-card-hover group relative p-6 md:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Media Column */}
                    <div className="lg:col-span-5">
                      <ProjectSchematic
                        projectId={proj.id}
                        media={proj.media}
                        title={proj.title}
                      />
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mint-border/80 pb-4">
                        <h2 className="text-2xl font-bold text-navy tracking-tight">
                          {proj.title}
                        </h2>
                        {getStatusBadge(proj.status)}
                      </div>

                      <p className="text-base text-navy font-medium leading-relaxed">
                        {proj.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-3.5 rounded-lg bg-offwhite border border-mint-border space-y-1">
                          <strong className="text-navy uppercase tracking-wide block font-mono text-[10px]">
                            The Problem:
                          </strong>
                          <p className="text-slate leading-relaxed">{proj.problem}</p>
                        </div>

                        <div className="p-3.5 rounded-lg bg-offwhite border border-mint-border space-y-1">
                          <strong className="text-teal-deep uppercase tracking-wide block font-mono text-[10px]">
                            The Intervention:
                          </strong>
                          <p className="text-slate leading-relaxed">{proj.intervention}</p>
                        </div>
                      </div>

                      {proj.beneficiary && (
                        <div className="p-3 rounded-lg bg-mint/50 border border-teal/20 text-xs space-y-0.5">
                          <strong className="text-teal uppercase tracking-wide block font-mono text-[10px]">
                            Who Benefits:
                          </strong>
                          <p className="text-slate/90 leading-relaxed font-medium">{proj.beneficiary}</p>
                        </div>
                      )}

                      <div className="p-3.5 rounded-lg bg-offwhite border border-mint-border text-xs space-y-1">
                        <strong className="text-navy uppercase tracking-wide block font-mono text-[10px]">
                          Evidence / Verification Status:
                        </strong>
                        <p className="font-mono text-[11px] text-slate leading-relaxed">
                          {proj.impact}
                        </p>
                      </div>

                      {proj.cta && (
                        <div className="pt-2">
                          <Link
                            href={proj.cta.href}
                            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all shadow-sm hover:shadow-[0_4px_14px_rgba(27,127,121,0.28)] hover:-translate-y-0.5 active:scale-[0.98]"
                          >
                            <span>{proj.cta.label}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
