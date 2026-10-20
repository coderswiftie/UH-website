import React from "react";
import { AlertCircle, Clock, Eye, Lock, ShieldAlert, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { SignalBadge } from "../ui/SignalBadge";
import { ScrollReveal } from "../ui/ScrollReveal";

interface ProblemVector {
  title: string;
  oneLiner: string;
  icon: React.ReactNode;
}

const PROBLEM_VECTORS: ProblemVector[] = [
  {
    title: "Urgency",
    oneLiner: "When someone pressures you to act before you have time to verify.",
    icon: <Clock className="w-5 h-5 text-teal" />,
  },
  {
    title: "Fear",
    oneLiner: "When anxiety about arrests, frozen assets, or harm overrides healthy skepticism.",
    icon: <ShieldAlert className="w-5 h-5 text-teal" />,
  },
  {
    title: "Trust",
    oneLiner: "When attackers piggyback on reputable institutions, colleagues, or social circles.",
    icon: <Lock className="w-5 h-5 text-teal" />,
  },
  {
    title: "Authority",
    oneLiner: "When fraudulent badges, official seals, or executive titles demand uncritical obedience.",
    icon: <AlertCircle className="w-5 h-5 text-teal" />,
  },
  {
    title: "Greed",
    oneLiner: "When promises of effortless wealth or zero-risk windfalls crowd out reason.",
    icon: <TrendingUp className="w-5 h-5 text-teal" />,
  },
  {
    title: "Curiosity",
    oneLiner: "When provocative notifications or enigmatic previews tempt you to click.",
    icon: <Eye className="w-5 h-5 text-teal" />,
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white border-y border-mint-border overflow-hidden">
      {/* Faint architectural background watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-12 -translate-y-1/2 watermark-text opacity-40"
      >
        MANIPULATION
      </div>

      <Container className="relative z-10">
        <ScrollReveal className="max-w-2xl mb-14 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <SignalBadge number="01" label="TRUST & URGENCY" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate/70">
              SCAM INTELLIGENCE // 01
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Technology can be secure. People can still be manipulated.
          </h2>

          <p className="text-base text-slate leading-relaxed">
            Modern scams rarely exploit software bugs; they exploit cognitive shortcuts. By understanding the emotional triggers attackers weaponize, we can create practical pauses before action is taken.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEM_VECTORS.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              delay={idx * 60}
              className="p-6 rounded-card border border-mint-border bg-offwhite hover:border-teal/50 hover:bg-white uh-card-hover group relative overflow-hidden"
            >
              {/* Subtle top teal line reveal */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 group-hover:bg-mint/80">
                {item.icon}
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-navy uppercase tracking-wide group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-slate/40 group-hover:text-teal transition-colors">
                  VEC-0{idx + 1}
                </span>
              </div>

              <p className="text-sm text-slate leading-relaxed">
                {item.oneLiner}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
