/**
 * Content Models matching §5.5 Sanity schemas exactly.
 * All mock data uses clearly marked placeholders per Hard Rule 1.
 */

export interface ScamBreakdown {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  publicationDate: string; // ISO date YYYY-MM-DD
  story: string;
  psychology: string;
  redFlags: string[];
  exitPoint: string;
  actionSteps: string[];
  takeaway: string;
  coverImage?: string;
  relatedPosts?: string[]; // slugs
  status: "published" | "draft";
  targetAudience?: string;
}

export type ProjectStatus = "ongoing" | "completed" | "in development";

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  intervention: string;
  impact: string;
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
