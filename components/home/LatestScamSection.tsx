import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Container } from "../ui/Container";
import { getAllScams, getLatestScam } from "@/lib/content";
import { ScrollReveal } from "../ui/ScrollReveal";

export function LatestScamSection() {
  const latestScam = getLatestScam();
  const relatedScams = getAllScams().slice(1, 4);

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <Container>
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest font-semibold text-teal">
              Investigative Archive • Case Evidence
            </p>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column: Case Breakdown Visual */}
            <div className="lg:col-span-5">
              <Link
                href={`/scam-library/${latestScam.slug}`}
                className="block rounded-xl overflow-hidden bg-navy-dark border border-mint-border/50 shadow-sm relative group/img"
              >
                <div className="relative aspect-[16/10] w-full bg-navy-dark">
                  {latestScam.coverImage && (
                    <Image
                      src={latestScam.coverImage}
                      alt={latestScam.coverImageAlt || latestScam.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between px-4 py-2.5 bg-navy text-white text-[10px] font-mono border-t border-white/10">
                  <span className="flex items-center gap-2 text-teal-light font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
                    CASE FILE // #{latestScam.caseNumber}
                  </span>
                  <span className="text-white/70 uppercase">WEEKLY BREAKDOWN</span>
                </div>
              </Link>
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
                <Link href={`/scam-library/${latestScam.slug}`}>
                  {latestScam.title}
                </Link>
              </h3>

              <p className="text-sm md:text-base text-slate leading-relaxed">
                {latestScam.story}
              </p>

              {/* Counter-Move Preview */}
              <div className="p-3 rounded-lg bg-offwhite border border-mint-border text-xs space-y-0.5">
                <span className="font-mono text-[10px] uppercase font-bold text-teal block">
                  The Counter-Move:
                </span>
                <p className="text-navy font-semibold leading-snug">
                  {latestScam.exitPoint}
                </p>
              </div>

              {/* Manipulation tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {latestScam.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-offwhite border border-mint-border font-medium text-navy"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-3">
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

        {/* Remaining Case Breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedScams.map((scam, idx) => (
            <ScrollReveal
              key={scam.slug}
              delay={idx * 80}
              className="group rounded-card border border-mint-border bg-white uh-card-hover flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {scam.coverImage && (
                  <Link
                    href={`/scam-library/${scam.slug}`}
                    className="block relative aspect-[16/10] w-full bg-navy-dark border-b border-mint-border/60 overflow-hidden"
                  >
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-navy/85 text-teal-light border border-white/15 backdrop-blur-sm">
                      CASE #{scam.caseNumber}
                    </span>
                  </Link>
                )}

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate">
                    <span className="font-semibold text-teal truncate">{scam.category}</span>
                    <span className="font-mono text-[11px] shrink-0">{scam.publicationDate}</span>
                  </div>

                  <h4 className="text-base font-bold text-navy tracking-tight group-hover:text-teal transition-colors leading-snug">
                    <Link href={`/scam-library/${scam.slug}`}>{scam.title}</Link>
                  </h4>

                  <p className="text-xs text-slate leading-relaxed line-clamp-2">
                    {scam.psychology}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-mint-border/60">
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
