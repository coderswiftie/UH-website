import React from "react";
import { Container } from "./Container";

interface SectionDividerProps {
  number?: string;
  label?: string;
  className?: string;
}

export function SectionDivider({
  number = "01",
  label = "SYSTEM TRANSITION",
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`relative py-6 select-none overflow-hidden ${className}`}>
      <Container>
        <div className="flex items-center gap-4 text-slate/40">
          {/* Left subtle line */}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-mint-border to-mint-border" />

          {/* Center editorial pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-mint-border bg-white text-[10px] font-mono uppercase tracking-wider text-slate shadow-subtle shrink-0">
            <span className="text-teal font-bold">{number}</span>
            <span className="text-slate/30">/</span>
            <span className="tracking-widest font-medium text-slate-light">{label}</span>
          </div>

          {/* Right subtle line */}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-mint-border to-mint-border" />
        </div>
      </Container>
    </div>
  );
}
