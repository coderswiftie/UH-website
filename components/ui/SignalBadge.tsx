import React from "react";

interface SignalBadgeProps {
  number: string;
  label: string;
  sublabel?: string;
  theme?: "teal" | "navy" | "dark";
  className?: string;
}

export function SignalBadge({
  number,
  label,
  sublabel,
  theme = "teal",
  className = "",
}: SignalBadgeProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase select-none transition-colors ${
        isDark
          ? "bg-white/10 text-white/90 border border-white/15"
          : "bg-mint/80 text-teal-deep border border-mint-border"
      } ${className}`}
    >
      <span className="flex items-center gap-1.5 font-bold">
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            isDark ? "bg-teal-light" : "bg-teal"
          }`}
        />
        <span>SIGNAL // {number}</span>
      </span>

      <span className={isDark ? "text-white/30" : "text-slate/30"}>•</span>

      <span className={`font-semibold tracking-widest ${isDark ? "text-teal-light" : "text-teal"}`}>
        {label}
      </span>

      {sublabel && (
        <>
          <span className={isDark ? "text-white/20" : "text-slate/20"}>/</span>
          <span className={isDark ? "text-white/60" : "text-slate/70"}>{sublabel}</span>
        </>
      )}
    </div>
  );
}
