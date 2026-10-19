"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Gift,
  Recycle,
  Tag,
} from "lucide-react";
import { Action, Condition, Device, Recommendation } from "@/lib/recommendation/types";
import { ACTION_METADATA } from "@/lib/recommendation/engine";

interface RecommendationCardProps {
  device: Device;
  condition: Condition;
  recommendation: Recommendation;
  onFindNearby: () => void;
  onReset: () => void;
}

export function RecommendationCard({
  device,
  condition,
  recommendation,
  onFindNearby,
  onReset,
}: RecommendationCardProps) {
  const [completedChecklist, setCompletedChecklist] = useState<Record<number, boolean>>({});

  const toggleChecklistItem = (idx: number) => {
    setCompletedChecklist((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getActionIcon = (action: Action) => {
    switch (action) {
      case "reuse_or_donate":
        return <Gift className="w-5 h-5 text-teal" />;
      case "repair_first":
        return <Wrench className="w-5 h-5 text-teal" />;
      case "tradein_or_donate":
        return <Tag className="w-5 h-5 text-teal" />;
      case "recycle":
        return <Recycle className="w-5 h-5 text-teal" />;
    }
  };

  const primaryMeta = ACTION_METADATA[recommendation.action];

  return (
    <div className="w-full bg-white rounded-card border border-mint-border shadow-elevated p-6 md:p-8 space-y-8 animate-fadeIn">
      {/* 0. Header & Category */}
      <div className="border-b border-mint-border/80 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-mint text-teal-deep">
            <ShieldCheck className="w-3.5 h-3.5 text-teal" />
            Your Digital Exit · Recommendation
          </span>
          <span className="text-xs text-slate uppercase tracking-wider font-medium">
            Rule-Based Decision
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mt-2">
          {recommendation.headline}
        </h2>

        <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-mint/50 border border-mint-border text-navy font-semibold text-sm">
          {getActionIcon(recommendation.action)}
          <span>Primary Action: {primaryMeta.badgeLabel}</span>
        </div>
      </div>

      {/* 1. WHY THIS IS RECOMMENDED */}
      <div className="rounded-xl bg-offwhite p-5 border border-slate/10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate mb-2 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-teal" />
          Why This Is Recommended
        </h3>
        <p className="text-ink text-sm md:text-base leading-relaxed">
          {recommendation.why}
        </p>
      </div>

      {/* 2. CRITICAL: DATA-PREP CHECKLIST (Appears BEFORE external actions) */}
      <div className="rounded-xl bg-mint/40 border border-teal/20 p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal" />
            <h3 className="text-base font-bold text-navy">
              Before You Exit It — Preparation Checklist
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal text-white">
            Safety First
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate mb-4 leading-relaxed">
          {device === "charger"
            ? "Inspect your cable and power equipment for safety hazards before recycling or passing it forward:"
            : "Protect your personal privacy and accounts. Complete these device-specific steps before handing over or disposing of your hardware:"}
        </p>

        <ul className="space-y-3" role="list">
          {recommendation.checklist.map((step, idx) => {
            const isDone = !!completedChecklist[idx];
            return (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-white border border-mint-border transition-colors hover:border-teal/40"
              >
                <button
                  type="button"
                  onClick={() => toggleChecklistItem(idx)}
                  className={`mt-0.5 shrink-0 w-5 h-5 rounded flex items-center justify-center border transition-all ${
                    isDone
                      ? "bg-teal border-teal text-white"
                      : "border-slate/40 bg-offwhite hover:border-teal"
                  }`}
                  aria-label={`Mark step as ${isDone ? "incomplete" : "complete"}: ${step}`}
                >
                  {isDone && <CheckCircle2 className="w-4 h-4" />}
                </button>
                <span
                  className={`text-xs md:text-sm leading-relaxed ${
                    isDone ? "text-slate line-through" : "text-ink font-medium"
                  }`}
                >
                  {step}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. OTHER OPTIONS / ALTERNATIVES */}
      {recommendation.alternatives.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate">
            Other Viable Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recommendation.alternatives.map((alt) => {
              const meta = ACTION_METADATA[alt];
              return (
                <div
                  key={alt}
                  className="p-4 rounded-xl border border-mint-border bg-offwhite/50 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    {getActionIcon(alt)}
                    <h4 className="font-semibold text-navy text-sm">
                      {meta.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    {meta.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. ACTIONS & NEXT STEPS */}
      <div className="pt-4 border-t border-mint-border/80 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <button
          type="button"
          onClick={onFindNearby}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-medium hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0"
        >
          <MapPin className="w-4 h-4" />
          <span>Find Nearby Options</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn border border-mint-border text-slate hover:text-navy hover:bg-mint/40 font-medium text-sm transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Test Another Device</span>
        </button>
      </div>
    </div>
  );
}
