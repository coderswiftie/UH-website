"use client";

import React from "react";
import { Check } from "lucide-react";
import { Condition } from "@/lib/recommendation/types";

interface ConditionOptionProps {
  condition: Condition;
  label: string;
  description: string;
  isSelected: boolean;
  onSelect: (condition: Condition) => void;
}

export function ConditionOption({
  condition,
  label,
  description,
  isSelected,
  onSelect,
}: ConditionOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(condition)}
      aria-pressed={isSelected}
      className={`relative flex items-start gap-4 p-4 md:p-5 rounded-card text-left transition-all duration-200 border-2 w-full ${
        isSelected
          ? "border-teal bg-mint/50 shadow-card"
          : "border-mint-border/60 bg-white hover:border-slate/40 hover:bg-offwhite/50"
      }`}
    >
      <div
        className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
          isSelected
            ? "bg-teal border-teal text-white shadow-sm"
            : "border-slate/30 bg-white"
        }`}
        aria-hidden="true"
      >
        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </div>

      <div className="flex-1 min-w-0">
        <span className="block font-semibold text-navy text-sm md:text-base leading-snug">
          {label}
        </span>
        <p className="mt-1 text-xs md:text-sm text-slate leading-relaxed">
          {description}
        </p>
      </div>
    </button>
  );
}
