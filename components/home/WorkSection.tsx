import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { getAllProjects } from "@/lib/content";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ProjectSchematic } from "../visuals/ProjectSchematic";

export function WorkSection() {
  const projects = getAllProjects();

  return (
    <section className="py-20 md:py-28 bg-white border-y border-mint-border">
      <Container>
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Where human security becomes action.
            </h2>
            <p className="text-base text-slate leading-relaxed">
              Practical initiatives built around how people actually respond to digital pressure, risk, and everyday technology decisions.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              delay={(idx % 2) * 60}
              className="group flex flex-col justify-between space-y-5"
            >
              <div className="space-y-5">
                <ProjectSchematic
                  projectId={proj.id}
                  media={proj.media}
                  title={proj.title}
                />

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold text-navy tracking-tight group-hover:text-teal transition-colors">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-medium capitalize text-slate shrink-0">
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-sm text-ink/90 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* Clean editorial definition list — no nested boxes */}
                <dl className="space-y-3 pt-4 border-t border-mint-border text-xs leading-relaxed">
                  <div>
                    <dt className="font-semibold text-navy inline">Problem: </dt>
                    <dd className="text-slate inline">{proj.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-teal-deep inline">
                      What we do:{" "}
                    </dt>
                    <dd className="text-slate inline">{proj.intervention}</dd>
                  </div>
                  {proj.beneficiary && (
                    <div>
                      <dt className="font-semibold text-navy inline">
                        Who it helps:{" "}
                      </dt>
                      <dd className="text-slate inline">{proj.beneficiary}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="pt-4 border-t border-mint-border">
                <Link
                  href={proj.cta?.href || "/our-work"}
                  className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>{proj.cta?.label || "Explore Initiative"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
