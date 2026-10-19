import {
  ImpactStats,
  Project,
  ScamBreakdown,
  TeamMember,
  Testimonial,
} from "./types";

/**
 * MOCK CONTENT LAYER
 * Hard Rule 1: Never invent statistics, testimonials, names, photos, or facility data.
 * All mock entries are clearly labelled placeholders.
 */

export const MOCK_SCAMS: ScamBreakdown[] = [
  {
    title: "[PLACEHOLDER: Case 01 — Urgent Account Freeze Impersonation]",
    slug: "urgent-account-freeze-impersonation",
    category: "Banking & Financial",
    tags: ["Urgency", "Authority", "Panic"],
    publicationDate: "2026-10-10",
    story:
      "[PLACEHOLDER STORY: Detailed walkthrough of an urgent SMS claiming an immediate bank freeze, prompting the recipient to click a fraudulent verification link while under stress.]",
    psychology:
      "[PLACEHOLDER PSYCHOLOGY: Analysis of urgency and authority biases. The victim's critical reasoning was bypassed through time scarcity and synthetic fear.]",
    redFlags: [
      "[PLACEHOLDER RED FLAG: Artificial deadline forcing action within 15 minutes]",
      "[PLACEHOLDER RED FLAG: Unofficial sender alphanumeric ID and shortened hyperlink]",
      "[PLACEHOLDER RED FLAG: Request to input two-factor SMS OTP directly into a web form]",
    ],
    exitPoint:
      "[PLACEHOLDER EXIT POINT: Pausing at the message interface to contact the bank through their official printed card number rather than the received link.]",
    actionSteps: [
      "[PLACEHOLDER ACTION 1: Disconnect mobile device from cellular network if credentials were typed]",
      "[PLACEHOLDER ACTION 2: Immediately call the bank's fraud desk to freeze affected payment channels]",
      "[PLACEHOLDER ACTION 3: Log a complaint on the national cybercrime reporting portal]",
    ],
    takeaway:
      "[PLACEHOLDER TAKEAWAY: Urgency is a weapon designed to preempt verification. When hurried, pause.]",
    coverImage: "/placeholder-scam-1.svg",
    relatedPosts: ["fake-job-offer-telegram-task", "digital-arrest-video-extortion"],
    status: "published",
    targetAudience: "General Public & Mobile Users",
  },
  {
    title: "[PLACEHOLDER: Case 02 — High-Yield Telegram Task Scam]",
    slug: "fake-job-offer-telegram-task",
    category: "Employment & Investment",
    tags: ["Greed", "Trust", "Gradual Commitment"],
    publicationDate: "2026-10-04",
    story:
      "[PLACEHOLDER STORY: Recipient contacted via WhatsApp offering flexible remote review tasks. Early small payouts established false trust before demanding upfront deposits.]",
    psychology:
      "[PLACEHOLDER PSYCHOLOGY: Escalation of commitment and social proof within staged group chats where other members feign rapid profits.]",
    redFlags: [
      "[PLACEHOLDER RED FLAG: Unsolicited job offer with disproportionately high compensation for trivial tasks]",
      "[PLACEHOLDER RED FLAG: Requirement to deposit personal funds into a private UPI account to unlock 'earnings']",
      "[PLACEHOLDER RED FLAG: Communication conducted solely through encrypted messaging without formal contracts]",
    ],
    exitPoint:
      "[PLACEHOLDER EXIT POINT: The first request to deposit personal funds to unlock withdrawal of earned commission.]",
    actionSteps: [
      "[PLACEHOLDER ACTION 1: Cease all financial transfers immediately; do not attempt to 'pay to recover']",
      "[PLACEHOLDER ACTION 2: Take full screenshots of the chat group, transaction IDs, and recipient UPI handles]",
      "[PLACEHOLDER ACTION 3: Notify your financial institution and register a formal cyber fraud complaint]",
    ],
    takeaway:
      "[PLACEHOLDER TAKEAWAY: Legitimate employers never charge you money to work or release salary.]",
    coverImage: "/placeholder-scam-2.svg",
    relatedPosts: ["urgent-account-freeze-impersonation"],
    status: "published",
    targetAudience: "Students & Job Seekers",
  },
  {
    title: "[PLACEHOLDER: Case 03 — Digital Arrest Video Extortion]",
    slug: "digital-arrest-video-extortion",
    category: "Impersonation & Law Enforcement",
    tags: ["Fear", "Authority", "Isolation"],
    publicationDate: "2026-09-28",
    story:
      "[PLACEHOLDER STORY: Victim received a call alleging illegal parcel shipments in their name, followed by a video call with perpetrators dressed in police uniforms in a staged studio.]",
    psychology:
      "[PLACEHOLDER PSYCHOLOGY: Weaponization of state authority and forced isolation, forbidding the victim from speaking to family or legal counsel.]",
    redFlags: [
      "[PLACEHOLDER RED FLAG: Law enforcement agency demanding a continuous Skype/WhatsApp video interrogation]",
      "[PLACEHOLDER RED FLAG: Threats of immediate imprisonment unless funds are transferred to a 'RBI verification account']",
      "[PLACEHOLDER RED FLAG: Absolute prohibition against discussing the matter with relatives or legal advisors]",
    ],
    exitPoint:
      "[PLACEHOLDER EXIT POINT: The moment the caller demands continuous video surveillance or transfer of money for 'clearance'.]",
    actionSteps: [
      "[PLACEHOLDER ACTION 1: Terminate the video call immediately; no lawful police agency conducts video arrests]",
      "[PLACEHOLDER ACTION 2: Walk into your nearest local police station in person with the phone logs]",
      "[PLACEHOLDER ACTION 3: Report the impersonation to national emergency helplines]",
    ],
    takeaway:
      "[PLACEHOLDER TAKEAWAY: Indian law enforcement never conducts arrests, bail hearings, or money verifications over video call.]",
    coverImage: "/placeholder-scam-3.svg",
    relatedPosts: ["urgent-account-freeze-impersonation"],
    status: "published",
    targetAudience: "Senior Citizens & Working Professionals",
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "scam-intelligence",
    title: "Scam Intelligence",
    summary: "Investigating real scams and the psychological techniques behind them.",
    problem:
      "Most fraud advice focuses on technical indicators (like URLs) while ignoring the emotional triggers—urgency, authority, fear—that cause victims to bypass their own knowledge.",
    intervention:
      "We reverse-engineer scam campaigns to uncover cognitive vulnerabilities and publish open, editorial breakdowns detailing exact exit points.",
    impact:
      "[PLACEHOLDER: Evidence and research reports published for institutional and public awareness]",
    status: "ongoing",
    cta: {
      label: "Explore Scam Library",
      href: "/scam-library",
    },
  },
  {
    id: "workshops",
    title: "Workshops & Community Literacy",
    summary: "Helping communities recognise manipulation and make safer decisions.",
    problem:
      "Digital safety lectures are often dense, fear-based, or incomprehensible to non-technical users and seniors.",
    intervention:
      "Interactive, scenario-based simulation workshops designed around human psychological resistance and verification reflexes.",
    impact:
      "[PLACEHOLDER: Community sessions conducted across academic and community spaces]",
    status: "ongoing",
    cta: {
      label: "Enquire About Workshops",
      href: "/contact",
    },
  },
  {
    id: "invisible-devices",
    title: "Invisible Devices",
    summary: "Navigating repair, reuse, donation, and responsible recycling for retired tech.",
    problem:
      "Millions of retired electronics sit in drawers due to data paranoia and disposal confusion, locking up critical minerals and creating e-waste risks.",
    intervention:
      "The Digital Exit platform guides users through verified, device-specific data sanitization and circular disposition paths.",
    impact:
      "[PLACEHOLDER: Verified circular hand-off paths mapped for pilot regions]",
    status: "ongoing",
    cta: {
      label: "Launch Digital Exit",
      href: "/digital-exit",
    },
  },
  {
    id: "future-interventions",
    title: "Future Interventions",
    summary: "Research and prototypes targeting emerging synthetic media and AI-driven social engineering.",
    problem:
      "Generative voice clones and automated social engineering require new behavioral pauses before trust is granted.",
    intervention:
      "Developing behavioral friction tools and verification protocols for families and organizations.",
    impact:
      "[PLACEHOLDER: Research stage in development]",
    status: "in development",
    cta: {
      label: "Collaborate With Us",
      href: "/contact",
    },
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    nameOrDescriptor: "[PLACEHOLDER: Workshop Attendee, Bengaluru]",
    quote:
      "[PLACEHOLDER QUOTE: 'The session broke down the psychological trigger rather than blaming the victim. I now pause every time a message claims immediate urgency.']",
    context: "Attended Community Human Security Workshop",
    date: "2026-09-15",
    approvalStatus: "approved",
  },
  {
    id: "test-02",
    nameOrDescriptor: "[PLACEHOLDER: College Administrator]",
    quote:
      "[PLACEHOLDER QUOTE: 'UH provided our students with practical, actionable protocols for spotting employment scams before money is lost.']",
    context: "Campus Awareness Initiative",
    date: "2026-08-20",
    approvalStatus: "approved",
  },
  {
    id: "test-03",
    nameOrDescriptor: "[PLACEHOLDER: Pending Reviewer]",
    quote: "[PLACEHOLDER QUOTE: Pending verification review.]",
    context: "Pilot Feedback",
    date: "2026-10-01",
    approvalStatus: "pending", // Must be filtered out in render per M6 rule!
  },
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: "founder",
    name: "[PLACEHOLDER: Founder Name]",
    role: "Founder & Lead Investigator",
    biography:
      "[PLACEHOLDER: Personal, authentic background on founding Unhackable Humans, focusing on the intersection of human psychology, cybersecurity, and societal resilience.]",
    socialLink: "[PLACEHOLDER: LinkedIn or Substack profile]",
    active: true,
    order: 1,
  },
  {
    id: "core-01",
    name: "[PLACEHOLDER: Core Member Name]",
    role: "Research & Scam Intelligence Lead",
    biography:
      "[PLACEHOLDER: Focus on field investigations, deconstructing manipulation mechanics, and open educational resources.]",
    socialLink: "[PLACEHOLDER: Verified profile link]",
    active: true,
    order: 2,
  },
  {
    id: "core-02",
    name: "[PLACEHOLDER: Core Member Name]",
    role: "Circular Technology & Interventions Lead",
    biography:
      "[PLACEHOLDER: Leading the Invisible Devices initiative, electronic waste safety standards, and regional repair networks.]",
    socialLink: "[PLACEHOLDER: Verified profile link]",
    active: true,
    order: 3,
  },
];

/**
 * Hard Rule: Never invent participation numbers or metrics.
 * Since verified statistics are not yet supplied, verified is false
 * and the stats block MUST be omitted per §5.2 Section 07 and M5 prompt.
 */
export const MOCK_IMPACT_STATS: ImpactStats = {
  verified: false,
};

// Content access helpers
export function getLatestScam(): ScamBreakdown {
  return MOCK_SCAMS[0];
}

export function getAllScams(): ScamBreakdown[] {
  return MOCK_SCAMS;
}

export function getScamBySlug(slug: string): ScamBreakdown | undefined {
  return MOCK_SCAMS.find((s) => s.slug === slug);
}

export function getApprovedTestimonials(): Testimonial[] {
  return MOCK_TESTIMONIALS.filter((t) => t.approvalStatus === "approved");
}

export function getAllProjects(): Project[] {
  return MOCK_PROJECTS;
}

export function getActiveTeamMembers(): TeamMember[] {
  return MOCK_TEAM.filter((m) => m.active).sort((a, b) => a.order - b.order);
}
