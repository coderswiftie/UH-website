export type Device = 'phone' | 'tablet' | 'laptop' | 'charger' | 'other';
export type Condition = 'working' | 'partial' | 'damaged' | 'not_working' | 'old_unused';
export type Action = 'reuse_or_donate' | 'repair_first' | 'tradein_or_donate' | 'recycle';

export interface Recommendation {
  action: Action;
  headline: string;
  why: string;
  checklist: string[]; // device-specific data-prep steps
  alternatives: Action[];
}

export interface ActionMetadata {
  title: string;
  badgeLabel: string;
  description: string;
}
