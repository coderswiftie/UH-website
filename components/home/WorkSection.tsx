import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { getAllProjects } from "@/lib/content";

export function WorkSection() {
  const projects = getAllProjects();

  return (
    <section className="py-20 md:py-28 bg-white border-b border-mint-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-teal">
              Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Where human security becomes action.
            </h2>
            <p className="text-base text-slate leading-relaxed">
              We focus solely on substantiateable interventions where psychological insight produces tangible civic impact.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors shrink-0"
          >
            <span>View All Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-8 rounded-card border border-mint-border bg-offwhite flex flex-col justify-between hover:border-teal/40 hover:bg-white hover:shadow-card transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Visual Placeholder */}
                <div className="aspect-[16/9] w-full rounded-xl bg-white border border-dashed border-slate/20 flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-mono text-xs uppercase font-semibold text-slate">
                    [PLACEHOLDER: {proj.title} Media Graphic]
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <h3 className="text-xl font-bold text-navy tracking-tight">
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
