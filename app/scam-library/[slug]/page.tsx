import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, PhoneCall } from "lucide-react";
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

  const related = (scam.relatedPosts || [])
    .map((slug) => getScamBySlug(slug))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white py-10 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/scam-library"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-deep transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Scam Library</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Editorial Long-Form Column */}
            <article className="lg:col-span-8 space-y-10">
              {/* Article Header */}
              <header className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-slate flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-semibold text-teal-deep">
                      Weekly Case Breakdown {scam.caseNumber}
                    </span>
                    <span className="text-slate/40">·</span>
                    <span>{scam.category}</span>
                    <span className="text-slate/40">·</span>
                    <span>{scam.publicationDate}</span>
                  </p>

                  <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-navy tracking-tight leading-[1.15]">
                    {scam.title}
                  </h1>

                  <p className="text-xs text-slate">
                    Themes: {scam.tags.join(", ")}
                    {scam.targetAudience ? ` · Audience: ${scam.targetAudience}` : ""}
                  </p>
                </div>

                {scam.coverImage && (
                  <figure className="rounded-xl overflow-hidden bg-navy-dark border border-mint-border">
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      width={1600}
                      height={1000}
                      priority
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="w-full h-auto block"
                    />
                  </figure>
                )}
              </header>

              {/* 01. CASE SNAPSHOT */}
              <section
                aria-labelledby="case-snapshot-heading"
                className="pt-8 border-t border-mint-border space-y-4"
              >
                <h2
                  id="case-snapshot-heading"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-teal"
                >
                  01. Case Snapshot
                </h2>

                {scam.snapshotItems && scam.snapshotItems.length > 0 ? (
                  <dl className="space-y-3.5 text-sm sm:text-base leading-relaxed">
                    {scam.snapshotItems.map((item, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-mint-border">
                        <dt className="font-bold text-navy inline">
                          {item.label}:{" "}
                        </dt>
                        <dd className="text-ink inline">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-ink text-base leading-relaxed">{scam.story}</p>
                )}

                {scam.snapshotNote && (
                  <p className="text-sm text-slate italic pt-1">
                    {scam.snapshotNote}
                  </p>
                )}
              </section>

              {/* 02. THE TURNING POINT */}
              {scam.turningPoint && (
                <section
                  aria-labelledby="turning-point-heading"
                  className="pt-8 border-t border-mint-border space-y-4"
                >
                  <h2
                    id="turning-point-heading"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-teal"
                  >
                    02. The Turning Point
                  </h2>

                  <p className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                    {scam.turningPoint.headline}
                  </p>

                  <div className="space-y-3.5 text-base text-ink/90 leading-relaxed">
                    {scam.turningPoint.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 03. THE HUMAN HACK */}
              <section
                aria-labelledby="human-hack-heading"
                className="pt-8 border-t border-mint-border space-y-4"
              >
                <h2
                  id="human-hack-heading"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-teal"
                >
                  03. The Human Hack
                </h2>

                {scam.humanHack ? (
                  <>
                    <p className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                      {scam.humanHack.headline}
                    </p>
                    <div className="space-y-3.5 text-base text-ink/90 leading-relaxed">
                      {scam.humanHack.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                    {scam.humanHack.closingNote && (
                      <p className="text-sm text-slate italic border-l-2 border-mint-border pl-4 pt-1">
                        {scam.humanHack.closingNote}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-base text-ink/90 leading-relaxed">
                    {scam.psychology}
                  </p>
                )}
              </section>

              {/* 04. THE MISSED SIGNAL */}
              <section
                aria-labelledby="missed-signal-heading"
                className="pt-8 border-t border-mint-border space-y-4"
              >
                <h2
                  id="missed-signal-heading"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-700"
                >
                  04. The Missed Signal
                </h2>

                {scam.missedSignal ? (
                  <>
                    <p className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
                      {scam.missedSignal.headline}
                    </p>
                    <div className="space-y-3.5 text-base text-ink/90 leading-relaxed">
                      {scam.missedSignal.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <ul className="space-y-2.5 text-base text-ink/90 list-disc pl-5">
                    {scam.redFlags.map((flag, idx) => (
                      <li key={idx}>{flag}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* 05. THE COUNTER-MOVE */}
              <section
                aria-labelledby="counter-move-heading"
                className="rounded-card bg-navy text-white p-7 md:p-9 space-y-5"
              >
                <h2
                  id="counter-move-heading"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light"
                >
                  05. The Counter-Move
                </h2>

                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {scam.counterMove?.headline || scam.exitPoint}
                </p>

                {scam.counterMove ? (
                  <div className="space-y-3.5 text-sm sm:text-base text-white/85 leading-relaxed">
                    {scam.counterMove.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}

                    {scam.counterMove.bullets &&
                      scam.counterMove.bullets.length > 0 && (
                        <ol className="space-y-2.5 pt-2 list-decimal pl-5 text-white/90">
                          {scam.counterMove.bullets.map((item, idx) => (
                            <li key={idx} className="pl-1">
                              {item}
                            </li>
                          ))}
                        </ol>
                      )}

                    {scam.counterMove.closingNote && (
                      <p className="text-sm text-teal-light font-medium pt-3 border-t border-white/10">
                        {scam.counterMove.closingNote}
                      </p>
                    )}
                  </div>
                ) : (
                  <ol className="space-y-2.5 list-decimal pl-5 text-sm sm:text-base text-white/90">
                    {scam.actionSteps.map((step, idx) => (
                      <li key={idx} className="pl-1">
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </section>

              {/* 06. THE BIGGER INSIGHT */}
              <section
                aria-labelledby="bigger-insight-heading"
                className="rounded-card bg-mint/60 border border-mint-border p-7 md:p-9 space-y-4"
              >
                <h2
                  id="bigger-insight-heading"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep"
                >
                  06. The Bigger Insight
                </h2>

                <blockquote className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight leading-snug">
                  {scam.biggerInsight?.headline || scam.takeaway}
                </blockquote>

                {scam.biggerInsight && (
                  <div className="space-y-3.5 text-sm sm:text-base text-ink/90 leading-relaxed">
                    {scam.biggerInsight.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                <div className="pt-5 mt-5 border-t border-teal/20 space-y-1 text-xs">
                  <p className="font-bold text-navy">
                    Unhackable Humans ·{" "}
                    <span className="italic font-medium text-teal-deep">
                      Minds over Manipulation.
                    </span>
                  </p>
                  <p className="text-slate">
                    One case. One human vulnerability. One step towards becoming harder to manipulate.
                  </p>
                </div>
              </section>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              {/* Case Summary Metadata */}
              <div className="border-t-2 border-navy pt-5 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                  Case Summary
                </h3>

                <dl className="space-y-3 text-xs">
                  <div>
                    <dt className="text-slate">Case Number</dt>
                    <dd className="font-semibold text-navy mt-0.5">
                      Weekly Case Breakdown {scam.caseNumber}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate">Category</dt>
                    <dd className="font-semibold text-teal-deep mt-0.5">
                      {scam.category}
                    </dd>
                  </div>
                  {scam.targetAudience && (
                    <div>
                      <dt className="text-slate">Audience</dt>
                      <dd className="font-medium text-navy mt-0.5">
                        {scam.targetAudience}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-slate">Themes</dt>
                    <dd className="font-medium text-navy mt-0.5">
                      {scam.tags.join(", ")}
                    </dd>
                  </div>
                </dl>

                <p className="text-xs text-slate leading-relaxed pt-3 border-t border-mint-border">
                  Written with care to distinguish reported facts from unverified assumptions.
                </p>
              </div>

              {/* Reporting Helpline */}
              {scam.reportHelpline && (
                <div className="p-5 rounded-card bg-offwhite border border-mint-border space-y-2.5">
                  <div className="flex items-center gap-2 text-navy font-bold text-sm">
                    <PhoneCall className="w-4 h-4 text-teal" />
                    <span>Suspect cyber fraud?</span>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    Contact your bank right away, call India&apos;s national cybercrime helpline at{" "}
                    <strong className="text-navy">1930</strong>, and file a complaint at{" "}
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

              {/* Related Cases */}
              {related.length > 0 && (
                <div className="border-t border-mint-border pt-6 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    Related Cases
                  </h3>
                  <div className="space-y-5">
                    {related.map((rel) => {
                      if (!rel) return null;
                      return (
                        <div
                          key={rel.slug}
                          className="space-y-1 pb-4 border-b border-mint-border/70 last:border-0 last:pb-0"
                        >
                          <p className="text-[11px] font-medium text-teal-deep">
                            Case {rel.caseNumber} · {rel.category}
                          </p>
                          <h4 className="font-bold text-navy text-sm leading-snug">
                            <Link
                              href={`/scam-library/${rel.slug}`}
                              className="hover:text-teal transition-colors"
                            >
                              {rel.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-slate line-clamp-2">
                            {rel.takeaway}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Digital Exit Link */}
              <div className="p-5 rounded-card bg-navy text-white space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-light">
                  Digital Exit
                </p>
                <h4 className="text-base font-bold text-white leading-snug">
                  Retiring a phone or laptop?
                </h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  Follow our private, step-by-step data wiping checklist before passing on or recycling old electronics.
                </p>
                <Link
                  href="/digital-exit"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-light hover:text-white transition-colors"
                >
                  <span>Open Digital Exit</span>
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
