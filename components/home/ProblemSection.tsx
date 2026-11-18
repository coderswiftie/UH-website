import React from "react";
import { AlertCircle, Clock, Eye, Lock, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import { HumanSecurityNetwork } from "../visuals/HumanSecurityNetwork";

interface ProblemVector {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  triggerPretext: string;
  cognitiveShortcut: string;
  color: string;
  badgeBg: string;
  icon: React.ReactNode;
}

const PROBLEM_VECTORS: ProblemVector[] = [
  {
    id: "urgency",
    number: "01",
    title: "Urgency",
    oneLiner: "Pressuring you to act immediately before your rational mind has time to verify.",
    triggerPretext: "“Action required within 15 minutes or your account will be permanently frozen.”",
    cognitiveShortcut: "Bypasses deliberative verification by creating synthetic time scarcity and panic.",
    color: "#D97706",
    badgeBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    icon: <Clock className="w-5 h-5 text-amber-600" />,
  },
  {
    id: "fear",
    number: "02",
    title: "Fear",
    oneLiner: "Weaponizing anxiety about legal arrest, ruined credit, or family harm to override skepticism.",
    triggerPretext: "“Digital warrant issued in your name for contraband parcel interception.”",
    cognitiveShortcut: "Hijacks the amygdala to trigger survival compliance over standard analytical thinking.",
    color: "#E11D48",
    badgeBg: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
  },
  {
    id: "trust",
    number: "03",
    title: "Trust",
    oneLiner: "Piggybacking on established brands, family members, or familiar social environments.",
    triggerPretext: "“Hi Dad, I dropped my phone in water and need urgent rent help from this temporary number.”",
    cognitiveShortcut: "Exploits natural human empathy and pre-existing institutional credibility.",
    color: "#1B7F79",
    badgeBg: "bg-teal/10 text-teal-deep border-teal/20",
    icon: <Lock className="w-5 h-5 text-teal" />,
  },
  {
    id: "authority",
    number: "04",
    title: "Authority",
    oneLiner: "Presenting fraudulent badges, official seals, or executive seniority to command uncritical obedience.",
    triggerPretext: "“This is Senior Inspector Verma calling from the Cyber Crime Investigation Cell.”",
    cognitiveShortcut: "Capitalizes on deeply conditioned deference toward institutional power and hierarchy.",
    color: "#4338CA",
    badgeBg: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
    icon: <AlertCircle className="w-5 h-5 text-indigo-600" />,
  },
  {
    id: "greed",
    number: "05",
    title: "Greed",
    oneLiner: "Dangling guaranteed windfalls, insider investment tips, or effortless remote earnings.",
    triggerPretext: "“Earn ₹8,000/day rating hotels on Telegram. Initial small task payout already credited.”",
    cognitiveShortcut: "Triggers dopamine-driven optimism that silences healthy financial skepticism.",
    color: "#C59B45",
    badgeBg: "bg-amber-600/10 text-amber-800 border-amber-600/20",
    icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
  },
  {
    id: "curiosity",
    number: "06",
    title: "Curiosity",
    oneLiner: "Tempting clicks through provocative notifications, cryptic documents, or withheld details.",
    triggerPretext: "“Someone tagged you in this private video... see what they posted about you.”",
    cognitiveShortcut: "Leverages the information-gap effect—the psychological discomfort of not knowing.",
    color: "#0D9488",
    badgeBg: "bg-teal-600/10 text-teal-800 border-teal-600/20",
    icon: <Eye className="w-5 h-5 text-teal-600" />,
  },
];

export function ProblemSection() {
  return (
    <section id="problem-section" className="relative py-20 md:py-28 bg-white border-y border-mint-border overflow-hidden">
      {/* Background Human Security Network (Stage: Problem — trigger highlights) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-20"
      >
        <HumanSecurityNetwork
          activeStage="problem"
          interactive={false}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/95" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal">
              THE COGNITIVE ATTACK SURFACE
            </span>
            <span className="text-slate/30">•</span>
            <span className="text-xs text-slate font-medium">Why Technical Security Isn&apos;t Enough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Technology can be secure. People can still be manipulated.
          </h2>

          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Modern scams rarely exploit software bugs; they exploit human cognitive shortcuts. Even when firewalls, encryption, and two-factor authentication function perfectly, an adversary who manipulates human emotions can persuade the authorized user to voluntarily bypass their own defenses.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_VECTORS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 40}
              className="p-6 sm:p-7 rounded-card border border-mint-border bg-offwhite hover:border-teal/40 hover:bg-white transition-all duration-300 group relative flex flex-col justify-between shadow-subtle hover:shadow-card"
            >
              <div className="space-y-4">
                {/* Header row with icon and trigger number */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-mint-border flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${item.badgeBg} font-semibold`}>
                    TRIGGER // {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate mt-1.5 leading-relaxed">
                    {item.oneLiner}
                  </p>
                </div>

                {/* Pretext Example */}
                <div className="p-3 rounded-lg bg-white border border-mint-border/80 text-[11px] space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate/75 block">
                    Common Pretext:
                  </span>
                  <p className="italic text-ink/80 leading-snug">
                    {item.triggerPretext}
                  </p>
                </div>
              </div>

              {/* Cognitive Mechanic */}
              <div className="pt-4 mt-4 border-t border-mint-border/60 text-[11px] text-slate/80 leading-relaxed">
                <strong className="text-navy font-semibold">How it operates: </strong>
                <span>{item.cognitiveShortcut}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial summary anchor */}
        <ScrollReveal delay={180} className="mt-12 p-6 rounded-card bg-mint/40 border border-teal/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm font-bold text-navy">The Human Security Imperative</h4>
            <p className="text-xs text-slate leading-relaxed">
              When an attacker dials your emotional temperature to boiling point, standard security instructions are forgotten. Unhackable Humans trains the cognitive reflexes that restore judgment in high-stakes moments.
            </p>
          </div>
          <span className="shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-md bg-white text-teal-deep border border-mint-border">
            PAUSE • VERIFY • PROCEED
          </span>
        </ScrollReveal>
      </Container>
    </section>
  );
}
