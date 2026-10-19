import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  LogOut,
  ShieldAlert,
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
            <article className="lg:col-span-8 space-y-10">
              {/* 1. HEADER */}
              <header className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4 shadow-subtle">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate">
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
                        Target: {scam.targetAudience}
                      </span>
                    </>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                  {scam.title}
                </h1>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {scam.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-offwhite border border-mint-border font-medium text-navy"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </header>

              {/* 2. THE STORY */}
              <section aria-labelledby="the-story-heading" className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4">
                <h2 id="the-story-heading" className="text-xl font-bold text-navy flex items-center gap-2">
                  <span className="w-2 h-5 rounded-full bg-teal" />
                  The Incident
                </h2>
                <div className="prose prose-slate max-w-none text-ink text-sm md:text-base leading-relaxed">
                  <p>{scam.story}</p>
                </div>
              </section>

              {/* 3. HOW IT WORKED */}
              <section aria-labelledby="how-it-worked-heading" className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4">
                <h2 id="how-it-worked-heading" className="text-xl font-bold text-navy flex items-center gap-2">
                  <span className="w-2 h-5 rounded-full bg-teal" />
                  How It Worked (Deconstructed)
                </h2>
                <p className="text-sm md:text-base text-slate leading-relaxed">
                  The operation follows a choreographed psychological sequence: establishing initial pretext, accelerating cognitive overload, and suppressing second opinions.
                </p>
                <div className="p-4 rounded-xl bg-offwhite border border-mint-border font-mono text-xs text-slate space-y-2">
                  <p className="font-semibold text-navy">[CHOREOGRAPHY BREAKDOWN]</p>
                  <p>Stage 1: Pretext establishing urgency or high reward.</p>
                  <p>Stage 2: Manufactured isolation forbidding consultation with family or banks.</p>
                  <p>Stage 3: Irreversible financial transaction before adrenaline subsides.</p>
                </div>
              </section>

              {/* 4. THE PSYCHOLOGY */}
              <section aria-labelledby="psychology-heading" className="rounded-card bg-mint/30 border border-mint-border p-6 md:p-8 space-y-4">
                <h2 id="psychology-heading" className="text-xl font-bold text-navy flex items-center gap-2">
                  <Brain className="w-5 h-5 text-teal" />
                  The Psychological Mechanism
                </h2>
                <div className="text-ink text-sm md:text-base leading-relaxed">
                  <p>{scam.psychology}</p>
                </div>
              </section>

              {/* 5. RED FLAGS */}
              <section aria-labelledby="red-flags-heading" className="rounded-card bg-white border border-red-200 p-6 md:p-8 space-y-4">
                <h2 id="red-flags-heading" className="text-xl font-bold text-navy flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Critical Red Flags
                </h2>
                <ul className="space-y-2.5" role="list">
                  {scam.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-ink leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6. THE EXIT POINT */}
              <section aria-labelledby="exit-point-heading" className="rounded-card bg-navy text-white p-6 md:p-8 space-y-4 shadow-card">
                <div className="flex items-center gap-2 text-teal-light text-xs font-bold uppercase tracking-wider">
                  <LogOut className="w-4 h-4" />
                  <span>The Pause Point</span>
                </div>
                <h2 id="exit-point-heading" className="text-2xl font-bold tracking-tight text-white">
                  The Exit Point
                </h2>
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                  {scam.exitPoint}
                </p>
                <p className="text-xs text-white/70">
                  Hit the mental brakes here. Remember: legitimate authorities and institutions never prevent you from calling back via verified public numbers.
                </p>
              </section>

              {/* 7. WHAT TO DO (PRACTICAL NEXT STEPS) */}
              <section aria-labelledby="what-to-do-heading" className="rounded-card bg-white border border-mint-border p-6 md:p-8 space-y-4">
                <h2 id="what-to-do-heading" className="text-xl font-bold text-navy flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal" />
                  What To Do If Encountered
                </h2>
                <ol className="space-y-3" role="list">
                  {scam.actionSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-offwhite border border-mint-border text-xs md:text-sm text-ink font-medium leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 8. UH TAKEAWAY */}
              <section aria-labelledby="takeaway-heading" className="rounded-card bg-mint border border-teal/30 p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-2 text-teal-deep text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-teal" />
                  <span>UH Core Takeaway</span>
                </div>
                <blockquote id="takeaway-heading" className="text-lg sm:text-xl font-extrabold text-navy leading-snug">
                  {scam.takeaway}
                </blockquote>
              </section>
            </article>

            {/* Supporting / Related Side Column on Desktop (Linear on Mobile) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Deconstruction Visual Placeholder */}
              <div className="rounded-card bg-white border border-mint-border p-6 space-y-3 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                  Investigation Media
                </span>
                <div className="aspect-square w-full rounded-lg bg-offwhite border border-dashed border-slate/30 flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-mono text-xs uppercase font-semibold text-slate">
                    [PLACEHOLDER: Redacted Evidence &amp; Call Logs]
                  </span>
                </div>
                <p className="text-[11px] text-slate/70">
                  All identifying victim credentials and phone numbers have been rigorously redacted per privacy standards.
                </p>
              </div>

              {/* 9. RELATED BREAKDOWNS */}
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
                        <div key={rel.slug} className="space-y-1.5 pb-3 border-b border-mint-border/60 last:border-0 last:pb-0">
                          <span className="text-[11px] font-semibold text-teal-deep bg-mint px-2 py-0.5 rounded">
                            {rel.category}
                          </span>
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
