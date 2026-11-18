import React from "react";
import { AlertCircle, Clock, Eye, Lock, ShieldAlert, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

interface ProblemVector {
  id: string;
  title: string;
  oneLiner: string;
  example: string;
  mechanism: string;
  icon: React.ReactNode;
}

const PROBLEM_VECTORS: ProblemVector[] = [
  {
    id: "urgency",
    title: "Urgency",
    oneLiner:
      "Pressuring you to act right away before you have time to stop and check.",
    example:
      "“Act within 15 minutes or your bank account will be permanently frozen.”",
    mechanism:
      "Manufactured deadlines compress thinking time and push people past routine checks.",
    icon: <Clock className="w-4 h-4 text-amber-700" />,
  },
  {
    id: "fear",
    title: "Fear",
    oneLiner:
      "Threatening legal trouble, arrest, or harm to family to override calm judgement.",
    example:
      "“A warrant has been issued in your name over an intercepted parcel.”",
    mechanism:
      "Acute threat shifts attention from verifying the claim to escaping the danger.",
    icon: <ShieldAlert className="w-4 h-4 text-rose-700" />,
  },
  {
    id: "trust",
    title: "Trust",
    oneLiner:
      "Borrowing the voice of familiar brands, family members, or everyday routines.",
    example:
      "“Hi Dad, I dropped my phone and need urgent help with rent from this temporary number.”",
    mechanism:
      "Familiarity and care lower suspicion before an unusual request is scrutinised.",
    icon: <Lock className="w-4 h-4 text-teal" />,
  },
  {
    id: "authority",
    title: "Authority",
    oneLiner:
      "Using official titles, forged court papers, or senior roles to discourage questions.",
    example:
      "“This is Senior Inspector Verma calling from the Cyber Crime Investigation Cell.”",
    mechanism:
      "People defer to institutional credentials, especially in intimidating situations.",
    icon: <AlertCircle className="w-4 h-4 text-indigo-700" />,
  },
  {
    id: "greed",
    title: "Greed",
    oneLiner:
      "Promising guaranteed returns, insider tips, or effortless payouts for simple tasks.",
    example:
      "“Earn ₹8,000 a day reviewing hotels on Telegram. Your first payout is already credited.”",
    mechanism:
      "Small early wins build misplaced confidence before larger deposits are demanded.",
    icon: <TrendingUp className="w-4 h-4 text-amber-700" />,
  },
  {
    id: "curiosity",
    title: "Curiosity",
    oneLiner:
      "Inviting clicks through vague warnings, tagged videos, or withheld information.",
    example:
      "“Someone tagged you in this private video — see what was posted.”",
    mechanism:
      "The urge to close an open question prompts action before checking the source.",
    icon: <Eye className="w-4 h-4 text-teal-deep" />,
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem-section"
      className="py-20 md:py-28 bg-white border-y border-mint-border"
    >
      <Container>
        <ScrollReveal className="max-w-3xl mb-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Why Technical Security Isn&apos;t Enough
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy tracking-tight leading-[1.12]">
            Technology can be secure. People can still be manipulated.
          </h2>

          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Modern scams rarely break encryption or software. They target everyday human instincts. Even when passwords and two-factor authentication work as designed, emotional pressure can persuade someone to bypass their own safeguards.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {PROBLEM_VECTORS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={(idx % 3) * 50}
              className="border-t border-mint-border pt-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <h3 className="text-lg font-bold text-navy tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-ink/90 leading-relaxed">
                  {item.oneLiner}
                </p>

                <blockquote className="pl-3.5 border-l-2 border-mint-border text-xs text-slate italic leading-relaxed">
                  {item.example}
                </blockquote>
              </div>

              <p className="text-xs text-slate leading-relaxed pt-1">
                {item.mechanism}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 pt-8 border-t border-mint-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-navy font-medium max-w-2xl leading-relaxed">
            Under pressure, textbook security advice is easy to forget. Building the habit to pause and verify independently is what protects judgement when stakes feel highest.
          </p>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Pause · Verify · Proceed
          </span>
        </ScrollReveal>
      </Container>
    </section>
  );
}
