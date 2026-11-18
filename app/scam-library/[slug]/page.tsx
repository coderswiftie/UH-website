import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle,
  Lightbulb,
  PhoneCall,
  ShieldCheck,
  Tag,
  User,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllScams, getScamBySlug } from "@/lib/content";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllScams().map((scam) => ({
    slug: scam.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const scam = getScamBySlug(params.slug);
  if (!scam) return { title: "Case Not Found | Scam Library" };

  return {
    title: `${scam.title} | Scam Library | Unhackable Humans`,
    description: scam.story.slice(0, 160),
  };
}

export default function ScamArticlePage({ params }: Props) {
  const scam = getScamBySlug(params.slug);

  if (!scam) {
    notFound();
  }

  // Related breakdowns
  const related = (scam.relatedPosts || [])
    .map((slug) => getScamBySlug(slug))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-offwhite py-10 md:py-16">
        <Container>
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link
              href="/scam-library"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-teal hover:text-teal-deep transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Scam Library</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column (Readable measure) */}
            <article className="lg:col-span-8 space-y-8">
              {/* HEADER + CASE VISUAL */}
              <header className="rounded-card bg-white border border-mint-border overflow-hidden shadow-subtle">
                {scam.coverImage && (
                  <div className="w-full bg-navy-dark border-b border-mint-border">
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      width={1600}
                      height={1000}
                      priority
                      sizes="(max-width: 1024px) 100vw, 820px"
                      className="w-full h-auto block"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate">
                    <span className="font-mono font-bold text-white bg-navy px-2.5 py-1 rounded">
                      CASE #{scam.caseNumber}
                    </span>
                    <span className="font-semibold text-teal-deep bg-mint px-2.5 py-1 rounded">
                      {scam.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {scam.publicationDate}
                    </span>
                    {scam.targetAudience && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {scam.targetAudience}
                        </span>
                      </>
                    )}
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                    {scam.title}
                  </h1>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {scam.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-offwhite border border-mint-border font-medium text-navy"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </header>

              {/* 01. CASE SNAPSHOT */}
              <section
                aria-labelledby="case-snapshot-heading"
                className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4 shadow-subtle"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-teal bg-mint px-2 py-0.5 rounded">
                    01
                  </span>
                  <h2
                    id="case-snapshot-heading"
                    className="text-xl font-bold text-navy tracking-tight"
                  >
                    Case Snapshot
                  </h2>
                </div>

                {scam.snapshotItems && scam.snapshotItems.length > 0 ? (
                  <dl className="space-y-3">
                    {scam.snapshotItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-offwhite border border-mint-border/80 text-sm md:text-base leading-relaxed"
                      >
                        <dt className="font-bold text-navy inline">
                          {item.label}:{" "}
                        </dt>
                        <dd className="text-ink inline">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-ink text-sm md:text-base leading-relaxed">
                    {scam.story}
                  </p>
                )}

                {scam.snapshotNote && (
                  <p className="text-xs md:text-sm text-slate italic border-l-2 border-mint-border pl-3.5">
                    {scam.snapshotNote}
                  </p>
                )}
              </section>

              {/* 02. THE TURNING POINT */}
              {scam.turningPoint && (
                <section
                  aria-labelledby="turning-point-heading"
                  className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4 shadow-subtle"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-teal bg-mint px-2 py-0.5 rounded">
                      02
                    </span>
                    <h2
                      id="turning-point-heading"
                      className="text-xl font-bold text-navy tracking-tight"
                    >
                      The Turning Point
                    </h2>
                  </div>

                  <p className="text-base md:text-lg font-bold text-navy leading-snug">
                    {scam.turningPoint.headline}
                  </p>

                  <div className="space-y-3 text-sm md:text-base text-ink leading-relaxed">
                    {scam.turningPoint.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 03. THE HUMAN HACK */}
              <section
                aria-labelledby="human-hack-heading"
                className="rounded-card bg-mint/35 border border-mint-border p-6 md:p-8 space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-white bg-teal px-2 py-0.5 rounded">
                    03
                  </span>
                  <Brain className="w-5 h-5 text-teal" />
                  <h2
                    id="human-hack-heading"
                    className="text-xl font-bold text-navy tracking-tight"
                  >
                    The Human Hack
                  </h2>
                </div>

                {scam.humanHack ? (
                  <>
                    <p className="text-base md:text-lg font-bold text-navy leading-snug">
                      {scam.humanHack.headline}
                    </p>
                    <div className="space-y-3 text-sm md:text-base text-ink leading-relaxed">
                      {scam.humanHack.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                    {scam.humanHack.closingNote && (
                      <p className="text-xs md:text-sm text-slate italic border-l-2 border-teal/40 pl-3.5 pt-1">
                        {scam.humanHack.closingNote}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-ink text-sm md:text-base leading-relaxed">
                    {scam.psychology}
                  </p>
                )}
              </section>

              {/* 04. THE MISSED SIGNAL */}
              <section
                aria-labelledby="missed-signal-heading"
                className="rounded-card bg-white border border-red-200 p-6 md:p-8 space-y-4 shadow-subtle"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    04
                  </span>
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h2
                    id="missed-signal-heading"
                    className="text-xl font-bold text-navy tracking-tight"
                  >
                    The Missed Signal
                  </h2>
                </div>

                {scam.missedSignal ? (
                  <>
                    <p className="text-base md:text-lg font-bold text-navy leading-snug">
                      {scam.missedSignal.headline}
                    </p>
                    <div className="space-y-3 text-sm md:text-base text-ink leading-relaxed">
                      {scam.missedSignal.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <ul className="space-y-2.5" role="list">
                    {scam.redFlags.map((flag, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-ink leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* 05. THE COUNTER-MOVE */}
              <section
                aria-labelledby="counter-move-heading"
                className="rounded-card bg-gradient-to-br from-navy via-navy to-[#183652] text-white p-6 md:p-8 space-y-5 shadow-card border-l-4 border-l-teal relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-teal/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-navy bg-teal-light px-2 py-0.5 rounded">
                      05
                    </span>
                    <ShieldCheck className="w-5 h-5 text-teal-light" />
                    <h2
                      id="counter-move-heading"
                      className="text-2xl font-bold tracking-tight text-white"
                    >
                      The Counter-Move
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-teal-light border border-teal/40 px-2.5 py-0.5 rounded uppercase">
                    Defense Protocol
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-teal/30">
                  <p className="text-base md:text-lg font-bold text-white leading-snug">
                    {scam.counterMove?.headline || scam.exitPoint}
                  </p>
                </div>

                {scam.counterMove ? (
                  <div className="space-y-3 text-sm md:text-base text-white/90 leading-relaxed">
                    {scam.counterMove.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}

                    {scam.counterMove.bullets && scam.counterMove.bullets.length > 0 && (
                      <ol className="space-y-2.5 pt-2" role="list">
                        {scam.counterMove.bullets.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white/95 leading-relaxed"
                          >
                            <span className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5">{item}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {scam.counterMove.closingNote && (
                      <p className="text-sm text-teal-light font-medium pt-2 border-t border-white/10">
                        {scam.counterMove.closingNote}
                      </p>
                    )}
                  </div>
                ) : (
                  <ol className="space-y-3" role="list">
                    {scam.actionSteps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-white/95 font-medium leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-light mt-0.5 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </section>

              {/* 06. THE BIGGER INSIGHT */}
              <section
                aria-labelledby="bigger-insight-heading"
                className="rounded-card bg-mint border border-teal/30 p-6 md:p-8 space-y-4"
              >
                <div className="flex items-center gap-2.5 text-teal-deep text-xs font-bold uppercase tracking-wider">
                  <span className="font-mono text-xs font-bold text-white bg-teal px-2 py-0.5 rounded">
                    06
                  </span>
                  <Lightbulb className="w-4 h-4 text-teal" />
                  <span>The Bigger Insight</span>
                </div>

                <blockquote
                  id="bigger-insight-heading"
                  className="text-xl sm:text-2xl font-extrabold text-navy leading-snug"
                >
                  {scam.biggerInsight?.headline || scam.takeaway}
                </blockquote>

                {scam.biggerInsight && (
                  <div className="space-y-3 text-sm md:text-base text-ink leading-relaxed">
                    {scam.biggerInsight.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                <div className="pt-4 mt-4 border-t border-teal/20 space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-navy">
                    Unhackable Humans
                  </p>
                  <p className="text-xs italic text-teal-deep font-medium">
                    Minds over Manipulation.
                  </p>
                  <p className="text-xs text-slate">
                    One case. One human vulnerability. One step towards becoming harder to manipulate.
                  </p>
                </div>
              </section>
            </article>

            {/* Supporting / Related Side Column on Desktop (Linear on Mobile) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Case Brief / Dossier Metadata */}
              <div className="rounded-card bg-white border border-mint-border p-6 space-y-4 shadow-subtle">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                    Case Brief
                  </span>
                  <span className="text-[10px] font-mono font-bold text-teal bg-mint px-2 py-0.5 rounded">
                    CASE #{scam.caseNumber}
                  </span>
                </div>

                <div className="w-full rounded-lg bg-navy text-white p-4 font-mono text-[11px] space-y-3 shadow-inner border border-navy-dark">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-teal-light font-bold">
                      WEEKLY CASE #{scam.caseNumber}
                    </span>
                    <span className="text-white/60">{scam.publicationDate}</span>
                  </div>

                  <div className="space-y-2 text-white/80">
                    <div>
                      <span className="text-white/50 block text-[10px]">CATEGORY</span>
                      <span className="text-teal-light uppercase font-bold">
                        {scam.category}
                      </span>
                    </div>
                    {scam.targetAudience && (
                      <div>
                        <span className="text-white/50 block text-[10px]">
                          PRIMARY AUDIENCE
                        </span>
                        <span className="text-white/95">{scam.targetAudience}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-white/50 block text-[10px]">
                        KEY VECTORS
                      </span>
                      <span className="text-white/95">
                        {scam.tags.join(" • ")}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate/80 leading-relaxed">
                  Published as part of Unhackable Humans&apos; Weekly Case Breakdown series—analysing reported incidents with care to separate established facts from unverified assumptions.
                </p>
              </div>

              {/* Reporting Helpline Card (for Indian fraud cases) */}
              {scam.reportHelpline && (
                <div className="rounded-card bg-offwhite border border-teal/30 p-6 space-y-3 shadow-subtle">
                  <div className="flex items-center gap-2 text-teal-deep">
                    <PhoneCall className="w-4 h-4 text-teal" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                      Suspect Cyber Fraud?
                    </h3>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    Contact your bank immediately, call India&apos;s national cybercrime helpline at{" "}
                    <strong className="text-navy font-mono">1930</strong>, and file a formal report at{" "}
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal font-semibold hover:underline"
                    >
                      cybercrime.gov.in
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* RELATED BREAKDOWNS */}
              <div className="rounded-card bg-white border border-mint-border p-6 space-y-4 shadow-subtle">
                <h3 className="text-base font-bold text-navy flex items-center gap-2 border-b border-mint-border pb-3">
                  <Tag className="w-4 h-4 text-teal" />
                  Related Investigations
                </h3>

                {related.length > 0 ? (
                  <div className="space-y-4">
                    {related.map((rel) => {
                      if (!rel) return null;
                      return (
                        <div
                          key={rel.slug}
                          className="space-y-1.5 pb-3 border-b border-mint-border/60 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-semibold text-teal-deep bg-mint px-2 py-0.5 rounded">
                              {rel.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate">
                              #{rel.caseNumber}
                            </span>
                          </div>
                          <h4 className="font-bold text-navy text-sm hover:text-teal transition-colors">
                            <Link href={`/scam-library/${rel.slug}`}>{rel.title}</Link>
                          </h4>
                          <p className="text-xs text-slate line-clamp-2">
                            {rel.takeaway}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-slate">No related breakdowns linked.</p>
                )}
              </div>

              {/* Digital Exit CTA Widget */}
              <div className="rounded-card bg-navy text-white p-6 space-y-4 shadow-subtle">
                <span className="text-xs uppercase tracking-widest font-bold text-teal-light">
                  Actionable Defense
                </span>
                <h4 className="text-lg font-bold text-white">
                  Retiring your phone or laptop?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Avoid data leakage before passing forward hardware. Complete our rule-based data prep checklist.
                </p>
                <Link
                  href="/digital-exit"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-light hover:underline"
                >
                  <span>Launch Digital Exit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
