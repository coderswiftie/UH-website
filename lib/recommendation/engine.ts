import { getChecklistForDevice } from "./checklists";
import { DECISION_RULES } from "./rules";
import { Action, ActionMetadata, Condition, Device, Recommendation } from "./types";

export const ACTION_METADATA: Record<Action, ActionMetadata> = {
  reuse_or_donate: {
    title: "Pass It Forward or Donate",
    badgeLabel: "Reuse / Donate",
    description: "Keep functional hardware in circulation by gifting or donating to vetted community initiatives.",
  },
  repair_first: {
    title: "Repair Before Replacing",
    badgeLabel: "Repair First",
    description: "Diagnose and repair specific components to extend device longevity and prevent unnecessary e-waste.",
  },
  tradein_or_donate: {
    title: "Trade-In or Refurbish",
    badgeLabel: "Trade-In",
    description: "Exchange the hardware for value credit or pass it to refurbishment programs that revitalize tech.",
  },
  recycle: {
    title: "Certified E-Waste Recycling",
    badgeLabel: "Responsible Recycle",
    description: "Safely process non-functional hardware through certified recyclers to recover raw materials.",
  },
};

/**
 * Pure rule-based recommendation engine (§4.3)
 * Maps device + condition to transparent, deterministic next steps.
 * Does not use AI, heuristics, or external side effects.
 */
export function getRecommendation(device: Device, condition: Condition): Recommendation {
  const ruleKey = `${device}:${condition}`;
  const rule = DECISION_RULES[ruleKey];

  if (!rule) {
    throw new Error(`No recommendation rule defined for device "${device}" with condition "${condition}"`);
  }

  // Ensure alternatives strictly exclude the primary action
  const sanitizedAlternatives = rule.alternatives.filter((alt) => alt !== rule.primary);

  // Retrieve device-specific safety checklist (§4.4)
  const checklist = getChecklistForDevice(device);

  return {
    action: rule.primary,
    headline: rule.headline,
    why: rule.why,
    checklist,
    alternatives: sanitizedAlternatives,
  };
}
