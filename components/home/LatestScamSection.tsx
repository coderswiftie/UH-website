import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              Scam Library
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Latest Case Breakdown
            </h2>
          </div>

          <Link
            href="/scam-library"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
          >
            <span>Browse Full Library</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Featured Story */}
        <ScrollReveal className="group rounded-card border border-mint-border bg-white shadow-subtle p-6 md:p-9 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <Link
                href={`/scam-library/${latestScam.slug}`}
                className="block rounded-xl overflow-hidden bg-navy-dark border border-mint-border/60"
              >
                <div className="relative aspect-[16/10] w-full bg-navy-dark">
                  {latestScam.coverImage && (
                    <Image
                      src={latestScam.coverImage}
                      alt={latestScam.coverImageAlt || latestScam.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium text-slate flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="font-semibold text-teal-deep">
                  Case {latestScam.caseNumber}
                </span>
                <span className="text-slate/40">·</span>
                <span>{latestScam.category}</span>
                <span className="text-slate/40">·</span>
                <span>{latestScam.publicationDate}</span>
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-navy tracking-tight leading-snug">
                <Link
                  href={`/scam-library/${latestScam.slug}`}
                  className="hover:text-teal transition-colors"
                >
                  {latestScam.title}
                </Link>
              </h3>

              <p className="text-sm md:text-base text-slate leading-relaxed">
                {latestScam.story}
              </p>

              <div className="pl-4 border-l-2 border-teal py-0.5 space-y-0.5">
                <span className="text-xs font-semibold text-teal-deep block">
                  The Counter-Move
                </span>
                <p className="text-sm text-navy font-medium leading-snug">
                  {latestScam.exitPoint}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/scam-library/${latestScam.slug}`}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-colors shadow-sm"
                >
                  <span>Read Full Breakdown</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Remaining Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedScams.map((scam, idx) => (
            <ScrollReveal
              key={scam.slug}
              delay={idx * 50}
              className="group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                {scam.coverImage && (
                  <Link
                    href={`/scam-library/${scam.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-navy-dark border border-mint-border/70"
                  >
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                )}

                <p className="text-xs text-slate flex items-center gap-2">
                  <span className="font-semibold text-teal-deep">
                    Case {scam.caseNumber}
                  </span>
                  <span className="text-slate/40">·</span>
                  <span className="truncate">{scam.category}</span>
                </p>

                <h4 className="text-base font-bold text-navy tracking-tight leading-snug">
                  <Link
                    href={`/scam-library/${scam.slug}`}
                    className="hover:text-teal transition-colors"
                  >
                    {scam.title}
                  </Link>
                </h4>

                <p className="text-xs text-slate leading-relaxed line-clamp-2">
                  {scam.psychology}
                </p>
              </div>

              <div className="pt-3 border-t border-mint-border">
                <Link
                  href={`/scam-library/${scam.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
