/**
 * Content Models matching §5.5 Sanity schemas exactly.
 * All mock data uses clearly marked placeholders per Hard Rule 1.
 */

export interface CaseSnapshotItem {
  label: string;
  value: string;
}

export interface CaseSection {
  headline: string;
  paragraphs: string[];
  bullets?: string[];
  closingNote?: string;
}

export interface ScamBreakdown {
  caseNumber: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  publicationDate: string; // ISO date YYYY-MM-DD
  story: string;
  snapshotItems?: CaseSnapshotItem[];
  snapshotNote?: string;
  turningPoint?: CaseSection;
  psychology: string;
  humanHack?: CaseSection;
  redFlags: string[];
  missedSignal?: CaseSection;
  exitPoint: string;
  actionSteps: string[];
  counterMove?: CaseSection;
  takeaway: string;
  biggerInsight?: CaseSection;
  coverImage?: string;
  coverImageAlt?: string;
  relatedPosts?: string[]; // slugs
  status: "published" | "draft";
  targetAudience?: string;
  reportHelpline?: boolean;
}

export type ProjectStatus = "ongoing" | "completed" | "in development";

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  intervention: string;
  impact: string;
  beneficiary?: string;
  status: ProjectStatus;
  media?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface Testimonial {
  id: string;
  nameOrDescriptor: string;
  quote: string;
  context: string;
  photo?: string;
  date: string;
  approvalStatus: "approved" | "pending" | "rejected";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  biography: string;
  photo?: string;
  socialLink?: string;
  active: boolean;
  order: number;
}

export interface ImpactStats {
  verified: boolean;
  items?: {
    value: string;
    label: string;
    source: string;
  }[];
}
