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
    caseNumber: "04",
    title: "Weekly Case Breakdown 04 | The Cost of a Fake Investigation",
    slug: "the-cost-of-a-fake-investigation",
    category: "Impersonation & Law Enforcement",
    tags: ["Authority", "Fear", "Manufactured Legitimacy", "Digital Arrest"],
    publicationDate: "2026-10-23",
    story:
      "A 73-year-old man from Nagpur allegedly lost ₹1.04 crore in a digital arrest scam involving fraudsters impersonating Mumbai Police officers, using forged Supreme Court documents and promising that transferred funds would be returned after verification.",
    snapshotItems: [
      {
        label: "The case",
        value:
          "A 73-year-old man from Nagpur allegedly lost ₹1.04 crore in a digital arrest scam involving fraudsters impersonating Mumbai Police officers.",
      },
      {
        label: "The allegation",
        value:
          "The callers claimed he was connected to a money-laundering investigation and had shared confidential information with terrorists.",
      },
      {
        label: "The method",
        value:
          "The fraudsters allegedly used forged Supreme Court documents, obtained his banking and investment details, and persuaded him to transfer money into multiple beneficiary accounts.",
      },
      {
        label: "The discovery",
        value:
          "He realised he had been defrauded after discussing the incident with a friend and subsequently approached the police.",
      },
    ],
    turningPoint: {
      headline: "The promise that the money would be returned after verification.",
      paragraphs: [
        "The fraudsters allegedly told the victim that the money transferred to different accounts would be returned once his bank transactions had been verified.",
        "This promise gave the transfers an apparent purpose: instead of simply losing money, the victim could believe he was temporarily complying with an official process.",
        "The alleged scam therefore combined threats of criminal accusations with a promise of financial recovery.",
      ],
    },
    psychology:
      "A false process can make an unreasonable demand appear legitimate. Through manufactured legitimacy, an invented procedure is made to appear credible by surrounding it with details associated with real institutions.",
    humanHack: {
      headline: "A false process can make an unreasonable demand appear legitimate.",
      paragraphs: [
        "The fraudsters allegedly constructed an entire investigation around the victim: a criminal allegation, a supposed bank account linked to illegal activity, fake legal documents and a promise that the money would be returned after verification.",
        "Each element could reinforce the appearance that a formal process was underway.",
        "This is a form of manufactured legitimacy: making an invented procedure appear credible by surrounding it with details associated with real institutions.",
        "The danger is that a person may begin evaluating whether they are complying with the supposed procedure instead of first questioning whether the procedure itself is genuine.",
      ],
    },
    redFlags: [
      "The demand to transfer money was the critical warning sign.",
      "The callers' claimed identities and fake legal documents did not establish the legitimacy of their instructions.",
      "A claim of financial verification does not make a requested money transfer legitimate.",
    ],
    missedSignal: {
      headline: "The demand to transfer money was the critical warning sign.",
      paragraphs: [
        "The callers' claimed identities and fake legal documents did not establish the legitimacy of their instructions.",
        "The victim was allegedly induced to transfer ₹1.04 crore across multiple accounts under the promise of subsequent repayment.",
        "The key distinction: a claim of financial verification does not make a requested money transfer legitimate.",
      ],
    },
    exitPoint: "Never transfer money to prove your innocence.",
    actionSteps: [
      "If someone claiming to be a police officer or investigator asks you to move funds as part of an investigation, stop and independently verify the claim through official channels.",
      "Do not share banking credentials, account information or investment details with an unverified caller.",
      "If a transfer has already taken place, contact your bank immediately, report the suspected fraud through India's cybercrime helpline at 1930, and file a complaint at cybercrime.gov.in.",
    ],
    counterMove: {
      headline: "Never transfer money to prove your innocence.",
      paragraphs: [
        "If someone claiming to be a police officer or investigator asks you to move funds as part of an investigation, stop and independently verify the claim through official channels.",
        "Do not share banking credentials, account information or investment details with an unverified caller.",
        "If a transfer has already taken place, contact your bank immediately, report the suspected fraud through India's cybercrime helpline at 1930, and file a complaint at cybercrime.gov.in.",
      ],
    },
    takeaway: "A convincing story can turn compliance into a financial risk.",
    biggerInsight: {
      headline: "A convincing story can turn compliance into a financial risk.",
      paragraphs: [
        "Fraud does not always depend on a victim believing they will earn money. Sometimes, it depends on making them believe that following instructions is the safest way to resolve a frightening situation.",
        "This case illustrates why the legitimacy of a process must be verified before acting on its instructions, regardless of how official it appears.",
        "The question is not merely, “Does this sound like a real investigation?”",
        "It is, “Have I independently established that this investigation and these instructions are genuine?”",
      ],
    },
    coverImage: "/images/cases/case-4-visual.png",
    coverImageAlt:
      "Case 04 visual showing an incoming call claiming to be Mumbai Police, a forged Supreme Court document, a note reading ₹1,04,00,000 transferred to multiple accounts, and a news clipping of the Nagpur digital arrest scam.",
    relatedPosts: ["nashik-digital-arrest-case", "the-fraud-behind-the-fraud"],
    status: "published",
    targetAudience: "Individuals & Senior Citizens",
    reportHelpline: true,
  },
  {
    caseNumber: "03",
    title: "Weekly Case Breakdown 03 | The Fraud Behind the Fraud",
    slug: "the-fraud-behind-the-fraud",
    category: "Utility & Payment Fraud",
    tags: ["Familiarity", "Trust", "Routine Tasks"],
    publicationDate: "2026-10-16",
    story:
      "Police arrested two men from Bihar for allegedly supplying SIM cards to cybercriminals involved in a ₹1.64 lakh fraud targeting a Gurugram resident through a fake HCG gas bill payment link sent on WhatsApp.",
    snapshotItems: [
      {
        label: "The case",
        value:
          "Police arrested two men from Bihar for allegedly supplying SIM cards to cybercriminals involved in a ₹1.64 lakh fraud targeting a Gurugram resident.",
      },
      {
        label: "The method",
        value:
          "The victim reportedly received a WhatsApp contact on October 9 involving a fake HCG gas bill payment link. The complaint was filed on October 12.",
      },
      {
        label: "The wider network",
        value:
          "The two men allegedly supplied SIM cards that helped the fraudsters communicate with victims and carry out fraudulent transactions.",
      },
    ],
    turningPoint: {
      headline: "The scam did not begin and end with the person contacting the victim.",
      paragraphs: [
        "The fake gas bill link was the visible part of the fraud. Behind that interaction, the alleged supply of SIM cards points to another layer: people providing the communication resources used by cybercriminals.",
        "This shifts the focus from a single fraudulent message to the wider chain of people and resources that can enable a scam.",
      ],
    },
    psychology:
      "A familiar task can lower our guard. Placing a deceptive payment request inside an ordinary household responsibility makes it appear relevant to everyday life rather than immediately suspicious.",
    humanHack: {
      headline: "A familiar task can lower our guard.",
      paragraphs: [
        "A gas bill is an ordinary household responsibility. A message presented as a payment link can therefore appear relevant to everyday life rather than immediately suspicious.",
        "Fraudsters can exploit that familiarity by placing a deceptive request inside a routine activity.",
        "However, the available report does not establish exactly what the WhatsApp message said or whether the victim clicked the link. The precise psychological mechanism in this case cannot be confirmed from the reported details alone.",
      ],
    },
    redFlags: [
      "A payment request is not proof that a bill is genuine.",
      "A message arriving through WhatsApp does not establish that it came from the actual service provider.",
      "SIM cards can become part of the infrastructure used to facilitate cybercrime when allegedly supplied for fraudulent purposes.",
    ],
    missedSignal: {
      headline: "A payment request is not proof that a bill is genuine.",
      paragraphs: [
        "A message arriving through WhatsApp does not establish that it came from the actual service provider.",
        "The important distinction is between a payment request that looks relevant and one verified through an independent, official channel.",
        "The investigation also highlights a separate concern: SIM cards can become part of the infrastructure used to facilitate cybercrime when they are allegedly supplied for fraudulent purposes.",
      ],
    },
    exitPoint: "Verify the bill at its source, not through the message.",
    actionSteps: [
      "If you receive a gas bill payment link through WhatsApp, open the provider's official website or app independently, or use a verified customer-service channel to confirm the outstanding amount.",
      "Do not rely on the message's appearance or the sender's claims to establish its legitimacy.",
      "If you suspect that you have been defrauded, contact your bank promptly and report the incident through India's cybercrime helpline, 1930, or the National Cyber Crime Reporting Portal at cybercrime.gov.in.",
    ],
    counterMove: {
      headline: "Verify the bill at its source, not through the message.",
      paragraphs: [
        "If you receive a gas bill payment link through WhatsApp, open the provider's official website or app independently, or use a verified customer-service channel to confirm the outstanding amount.",
        "Do not rely on the message's appearance or the sender's claims to establish its legitimacy.",
        "If you suspect that you have been defrauded, contact your bank promptly and report the incident through India's cybercrime helpline, 1930, or the National Cyber Crime Reporting Portal at cybercrime.gov.in.",
      ],
    },
    takeaway: "Cybercrime is often a network, not a single interaction.",
    biggerInsight: {
      headline: "Cybercrime is often a network, not a single interaction.",
      paragraphs: [
        "The person sending a fraudulent message may be only one part of a larger operation. Communication resources and other forms of support can also help a scam function.",
        "This case reminds us to look beyond the immediate message and understand the infrastructure that enables fraud.",
        "For individuals, verification can interrupt a fraudulent transaction. For investigators, tracing the wider network can help identify other people allegedly involved in enabling it.",
      ],
    },
    coverImage: "/images/cases/case-3-visual.png",
    coverImageAlt:
      "Case 03 visual illustrating a fake HCG gas bill payment link on WhatsApp alongside a customer bill, SIM cards, a note reading 'Routine tasks can hide real scams', and a news clipping about the arrest of two men supplying SIM cards.",
    relatedPosts: ["the-cost-of-a-fake-investigation", "nashik-digital-arrest-case"],
    status: "published",
    targetAudience: "Households & Utility Bill Payers",
    reportHelpline: true,
  },
  {
    caseNumber: "02",
    title: "Weekly Case Breakdown 02 | When a Cyberattack Reaches the Hospital Bed",
    slug: "when-a-cyberattack-reaches-the-hospital-bed",
    category: "Critical Infrastructure & Healthcare",
    tags: ["Dependence", "Systemic Risk", "Resilience"],
    publicationDate: "2026-10-09",
    story:
      "German police detained a Russian man suspected of involvement in a cybercrime gang linked to the 2024 attack on Synnovis, a London blood-testing provider whose disruption severely affected pathology services across several hospitals and reportedly contributed to a patient's death.",
    snapshotItems: [
      {
        label: "The case",
        value:
          "German police detained a Russian man suspected of involvement in a cybercrime gang linked to the 2024 attack on Synnovis, a blood-testing services provider in London.",
      },
      {
        label: "The disruption",
        value:
          "The attack severely affected pathology services across several London hospitals, disrupting blood tests and medical procedures.",
      },
      {
        label: "The human consequence",
        value:
          "The BBC reports that the attack contributed to a patient's death. German investigators are reportedly examining the incident as part of their investigation into the detained suspect and his associates.",
      },
    ],
    snapshotNote:
      "The suspect's alleged involvement does not, by itself, establish individual guilt.",
    turningPoint: {
      headline:
        "The attack crossed the boundary between digital infrastructure and patient care.",
      paragraphs: [
        "Synnovis provided pathology services that hospitals depended on for essential medical work. When the cyberattack disrupted those services, the consequences extended beyond the affected company's computer systems.",
        "A disruption in one part of the healthcare network became a problem for multiple hospitals, demonstrating how a digital incident can interfere with real-world medical decisions and services.",
      ],
    },
    psychology:
      "Exploiting dependence, not just devices. Essential services rely on interconnected digital infrastructure, meaning disruptions can ripple to patients and staff far removed from the original target.",
    humanHack: {
      headline: "Exploiting dependence, not just devices.",
      paragraphs: [
        "In the Nashik case, the alleged manipulation centred on a person's trust in authority. Here, the defining issue is different: the dependence of essential services on interconnected digital infrastructure.",
        "Healthcare organisations rely on systems and external providers to support time-sensitive work. When a critical service becomes unavailable, the effects can spread to patients and staff who have no direct connection to the original attack.",
        "This case demonstrates the potential reach of cybercrime, even when the people experiencing its consequences are not the direct targets.",
      ],
      closingNote:
        "The available report does not establish the attackers' specific motives beyond the alleged cybercrime activity, so the disruption should not be taken as proof that patient harm was their intended objective.",
    },
    redFlags: [
      "A service can be critical even when it operates outside a hospital's own systems.",
      "Protecting individual networks is not enough if organisations have no effective way to maintain essential operations during a major disruption.",
      "This is a resilience lesson from the incident rather than a claim that a particular warning was ignored.",
    ],
    missedSignal: {
      headline:
        "A service can be critical even when it operates outside a hospital's own systems.",
      paragraphs: [
        "The Synnovis incident highlights a fundamental question for healthcare security: what happens when an essential external provider becomes unavailable?",
        "Protecting individual networks is not enough if organisations have no effective way to maintain essential operations during a major disruption.",
        "The available information does not establish which specific safeguards failed, so this is a resilience lesson from the incident, not a claim that a particular warning was ignored.",
      ],
    },
    exitPoint: "Plan for the loss of a critical service before it happens.",
    actionSteps: [
      "Clear procedures for maintaining critical work when digital services become unavailable.",
      "Reliable communication channels between providers, hospitals and clinical teams.",
      "Tested recovery arrangements and appropriate backup systems.",
      "Regular exercises that prepare staff to respond when normal processes fail.",
    ],
    counterMove: {
      headline: "Plan for the loss of a critical service before it happens.",
      paragraphs: [
        "Healthcare providers and essential-service organisations need tested continuity plans for cyber incidents, including:",
      ],
      bullets: [
        "Clear procedures for maintaining critical work when digital services become unavailable.",
        "Reliable communication channels between providers, hospitals and clinical teams.",
        "Tested recovery arrangements and appropriate backup systems.",
        "Regular exercises that prepare staff to respond when normal processes fail.",
      ],
      closingNote:
        "The objective is not merely to restore computers. It is to keep essential services functioning as safely as possible while recovery takes place.",
    },
    takeaway:
      "A digital system can be compromised in one place, but its consequences can travel much further.",
    biggerInsight: {
      headline:
        "A digital system can be compromised in one place, but its consequences can travel much further.",
      paragraphs: [
        "Cybersecurity is often measured in compromised accounts, encrypted files or stolen data. In essential services, the consequences can extend beyond those technical measures.",
        "The Synnovis incident illustrates why cybersecurity must also be understood as a matter of operational resilience and public safety.",
        "When critical services depend on digital infrastructure, protecting that infrastructure is part of protecting the people who depend on those services.",
      ],
    },
    coverImage: "/images/cases/case-2-visual.png",
    coverImageAlt:
      "Case Breakdown 02 visual titled 'When a Cyberattack Reaches the Hospital Bed', showing a dark hospital room with a disrupted digital vitals monitor.",
    relatedPosts: ["nashik-digital-arrest-case", "the-fraud-behind-the-fraud"],
    status: "published",
    targetAudience: "Healthcare Organisations & Essential Services",
    reportHelpline: false,
  },
  {
    caseNumber: "01",
    title: "Weekly Case Breakdown 01 | The Nashik Digital Arrest Case",
    slug: "nashik-digital-arrest-case",
    category: "Impersonation & Law Enforcement",
    tags: ["Authority", "Fear", "Impersonation", "Digital Arrest"],
    publicationDate: "2026-10-02",
    story:
      "A 68-year-old retired policeman from Nashik, Maharashtra, allegedly lost ₹71 lakh after nearly 20 days under alleged “digital arrest” by cyber fraudsters impersonating ATS and NIA officials.",
    snapshotItems: [
      {
        label: "The case",
        value:
          "A 68-year-old retired policeman from Nashik, Maharashtra, allegedly lost ₹71 lakh to cyber fraudsters impersonating officials of the Anti-Terrorism Squad (ATS) and the National Investigation Agency (NIA).",
      },
      {
        label: "The threat",
        value:
          "The fraudsters reportedly linked him to a terrorism-related case and a ₹70-crore money-laundering investigation.",
      },
      {
        label: "The duration",
        value: "Nearly 20 days under alleged “digital arrest.”",
      },
    ],
    turningPoint: {
      headline:
        "The defining feature of this case was the alleged impersonation of investigative agencies.",
      paragraphs: [
        "Rather than approaching the victim with an obviously suspicious opportunity, the fraudsters reportedly presented a situation involving criminal allegations and official authority.",
        "This changed the nature of the interaction: instead of evaluating a financial offer, the victim was allegedly placed in a position where he had to respond to a perceived legal threat.",
      ],
    },
    psychology:
      "When authority replaces independent judgement. Claimed institutional authority combined with serious criminal allegations makes questioning the caller feel risky.",
    humanHack: {
      headline: "When authority replaces independent judgement.",
      paragraphs: [
        "People often rely on authority figures to establish what is legitimate, particularly in unfamiliar or intimidating situations.",
        "By allegedly impersonating national investigative agencies, the fraudsters exploited the credibility associated with those institutions. The threat of serious criminal allegations could further make questioning the caller feel risky.",
        "The manipulation lies in making a person's claimed authority seem more trustworthy than the person's own need to verify the situation.",
      ],
    },
    redFlags: [
      "The caller's identity was being presented as proof of the accusation.",
      "An official-sounding title and a serious allegation do not establish that a caller is genuine.",
      "There is a critical distinction between someone claiming to represent an investigative agency and someone whose identity and claims have been independently verified.",
    ],
    missedSignal: {
      headline: "The caller's identity was being presented as proof of the accusation.",
      paragraphs: [
        "An official-sounding title and a serious allegation do not establish that a caller is genuine.",
        "The critical distinction is between someone claiming to represent an investigative agency and someone whose identity and claims have been independently verified.",
        "The available case summary does not establish exactly which verification opportunities the victim had, so we should not assume what he did or did not attempt.",
      ],
    },
    exitPoint: "Separate the allegation from the identity of the person making it.",
    actionSteps: [
      "If someone contacts you claiming to be an investigative officer, do not treat the call itself as proof of an investigation.",
      "Pause the interaction and independently contact the relevant agency using verified official contact details.",
      "Never transfer money merely because a caller claims it is necessary to clear your name, verify your identity or resolve an investigation.",
      "Verification must happen outside the channel controlled by the person making the allegation.",
    ],
    counterMove: {
      headline: "Separate the allegation from the identity of the person making it.",
      paragraphs: [
        "If someone contacts you claiming to be an investigative officer, do not treat the call itself as proof of an investigation.",
        "Pause the interaction and independently contact the relevant agency using verified official contact details. Never transfer money merely because a caller claims it is necessary to clear your name, verify your identity or resolve an investigation.",
        "Verification must happen outside the channel controlled by the person making the allegation.",
      ],
    },
    takeaway: "Trust can be manipulated when authority goes unquestioned.",
    biggerInsight: {
      headline: "Trust can be manipulated when authority goes unquestioned.",
      paragraphs: [
        "We often imagine fraud as someone offering something attractive in exchange for money. But this case illustrates another route: making someone believe they have something serious to lose.",
        "The fraudster's alleged strategy was not simply to create fear. It was to attach that fear to the appearance of institutional authority.",
        "That is why digital safety is not only about recognising suspicious links or protecting passwords. It is also about knowing when to question a convincing claim.",
      ],
    },
    coverImage: "/images/cases/case-1-visual.png",
    coverImageAlt:
      "Case 01 visual titled 'The Nashik Digital Arrest', depicting a senior citizen seated before a laptop displaying a fake police interrogation video call.",
    relatedPosts: [
      "the-cost-of-a-fake-investigation",
      "when-a-cyberattack-reaches-the-hospital-bed",
    ],
    status: "published",
    targetAudience: "Individuals & Senior Citizens",
    reportHelpline: true,
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
    beneficiary:
      "Everyday digital citizens, mobile banking users, families, and organizations seeking scam resistance.",
    status: "ongoing",
    media: "/images/work/scam-intelligence.jpg",
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
    beneficiary:
      "Senior citizens, students, frontline staff, and local community groups vulnerable to high-pressure scams.",
    status: "ongoing",
    media: "/images/work/workshops-community-literacy.jpg",
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
      "The Digital Exit platform guides users through verified, device-specific data sanitization and circular disposition paths (repair, reuse, donation, and recycling).",
    impact:
      "[PLACEHOLDER: Verified circular hand-off paths mapped for pilot regions]",
    beneficiary:
      "Households with idle electronics, students lacking digital access, and certified recycling ecosystems.",
    status: "ongoing",
    media: "/images/work/invisible-devices.jpg",
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
    beneficiary:
      "Families, civic institutions, and vulnerable individuals preparing against synthetic media exploitation.",
    status: "in development",
    media: "/images/work/future-interventions.jpg",
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
