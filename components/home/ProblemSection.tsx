import React from "react";
import { AlertCircle, Clock, Eye, Lock, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";

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
    <section className="py-20 md:py-28 bg-white border-y border-mint-border">
      <Container>
        <div className="max-w-2xl mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-teal">
            The Manipulation Layer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Technology can be secure. People can still be manipulated.
          </h2>
          <p className="text-base text-slate leading-relaxed">
            Modern scams rarely exploit software bugs; they exploit cognitive shortcuts. By understanding the emotional triggers attackers weaponize, we can create practical pauses before action is taken.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEM_VECTORS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-card border border-mint-border bg-offwhite hover:border-teal/40 hover:bg-white hover:shadow-card transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-navy uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                {item.oneLiner}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
