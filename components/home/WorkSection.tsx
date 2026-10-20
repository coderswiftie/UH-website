import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { getAllProjects } from "@/lib/content";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

export function WorkSection() {
  const projects = getAllProjects();

  return (
    <section className="py-20 md:py-28 bg-white border-b border-mint-border">
      <Container>
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <SignalBadge number="03" label="CIVIC ACTION" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate/70">
                ACTIVE INITIATIVES // 03
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Where human security becomes action.
            </h2>
            <p className="text-base text-slate leading-relaxed">
              We focus solely on substantiateable interventions where psychological insight produces tangible civic impact.
            </p>
          </div>

          <Link
            href="/our-work"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors shrink-0"
          >
            <span>View All Initiatives</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              delay={idx * 100}
              className="group p-6 sm:p-8 rounded-card border border-mint-border bg-offwhite flex flex-col justify-between hover:border-teal/50 hover:bg-white uh-card-hover relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="space-y-4">
                {/* Visual Placeholder */}
                <div className="aspect-[16/9] w-full rounded-xl bg-white border border-dashed border-slate/20 flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:scale-[1.01]">
                  <span className="font-mono text-xs uppercase font-semibold text-slate">
                    [PLACEHOLDER: {proj.title} Media Graphic]
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <h3 className="text-xl font-bold text-navy tracking-tight group-hover:text-teal transition-colors">
                    {proj.title}
                  </h3>
                  <span
                    className={`text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                      proj.status === "ongoing"
                        ? "bg-teal/10 text-teal-deep border border-teal/20"
                        : "bg-slate/10 text-slate border border-slate/20"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-sm text-slate leading-relaxed">
                  {proj.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-mint-border/60 mt-6">
                <Link
                  href={proj.cta?.href || "/our-work"}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>{proj.cta?.label || "Explore"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
