import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, FileText, Tag } from "lucide-react";
import { Container } from "../ui/Container";
import { getAllScams, getLatestScam } from "@/lib/content";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

export function LatestScamSection() {
  const latestScam = getLatestScam();
  const relatedScams = getAllScams().slice(1, 3);

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <Container>
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <SignalBadge number="04" label="CASE EVIDENCE" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate/70">
                INVESTIGATIVE ARCHIVE // 04
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Latest Scam Breakdown
            </h2>
          </div>

          <Link
            href="/scam-library"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
          >
            <span>Browse Full Scam Library</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Featured Main Story Card */}
        <ScrollReveal className="group rounded-card border border-mint-border bg-white shadow-card p-6 md:p-10 mb-8 uh-card-hover relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl bg-offwhite border border-dashed border-slate/30 flex flex-col items-center justify-center p-6 text-center space-y-2 transition-transform duration-300 group-hover:scale-[1.01]">
                <FileText className="w-8 h-8 text-teal transition-transform duration-200 group-hover:scale-110" />
                <span className="font-mono text-xs font-semibold text-slate uppercase">
                  [PLACEHOLDER: Case Visual / Redacted Evidence]
                </span>
                <p className="text-[11px] text-slate/70">
                  Documentary representation of deceptive communications.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate">
                <span className="inline-flex items-center gap-1 font-semibold text-teal-deep bg-mint px-2.5 py-1 rounded-md">
                  <Tag className="w-3.5 h-3.5" />
                  {latestScam.category}
                </span>
                <span className="inline-flex items-center gap-1 text-slate">
                  <Calendar className="w-3.5 h-3.5" />
                  {latestScam.publicationDate}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-navy tracking-tight leading-snug group-hover:text-teal transition-colors">
                {latestScam.title}
              </h3>

              <p className="text-sm md:text-base text-slate leading-relaxed">
                {latestScam.story}
              </p>

              {/* Manipulation tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {latestScam.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-offwhite border border-mint-border font-medium text-navy"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/scam-library/${latestScam.slug}`}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_14px_rgba(27,127,121,0.28)] active:scale-[0.98]"
                >
                  <span>Break It Down</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two smaller related case breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedScams.map((scam, idx) => (
            <ScrollReveal
              key={scam.slug}
              delay={idx * 100}
              className="group p-6 rounded-card border border-mint-border bg-white uh-card-hover flex flex-col justify-between relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="font-semibold text-teal">{scam.category}</span>
                  <span className="font-mono text-[11px]">{scam.publicationDate}</span>
                </div>

                <h4 className="text-lg font-bold text-navy tracking-tight group-hover:text-teal transition-colors">
                  {scam.title}
                </h4>

                <p className="text-xs text-slate leading-relaxed line-clamp-2">
                  {scam.psychology}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-mint-border/60">
                <Link
                  href={`/scam-library/${scam.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
