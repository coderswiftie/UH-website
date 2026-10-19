"use client";

import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

export function ProgressBar({ currentStep, totalSteps, stepLabels }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div className="w-full mb-8" aria-label={`Step ${currentStep} of ${totalSteps}`}>
      <div className="flex items-center justify-between text-xs font-medium text-slate mb-2">
        <span>
          Step <strong className="text-navy">{currentStep}</strong> of {totalSteps}
        </span>
        {stepLabels && stepLabels[currentStep - 1] && (
          <span className="uppercase tracking-wider text-[11px] font-semibold text-teal">
            {stepLabels[currentStep - 1]}
          </span>
        )}
      </div>

      <div
        className="h-2 w-full bg-mint rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-valuetext={`Step ${currentStep} of ${totalSteps}`}
      >
        <div
          className="h-full bg-teal transition-all duration-300 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
