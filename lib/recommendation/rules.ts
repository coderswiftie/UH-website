import { Action, Condition, Device } from "./types";

/**
 * DRAFT decision table: requires UH sign-off
 * 
 * Sourced from §4.3 of UH_Website_Build_Plan.md.
 * 
 * Ambiguous cell resolutions documented below:
 * 1. Partial charger:
 *    The blueprint notes "repair_first → else recycle". Chargers with worn insulation
 *    or loose connections can be serious electrical hazards, but repair/re-sleeving
 *    is possible for high-value/modular supplies. We designate 'repair_first' as the primary
 *    action and 'recycle' as the immediate alternative if repair is unsafe or uneconomical.
 * 
 * 2. Old/unused phone, tablet, or laptop:
 *    The blueprint notes "tradein_or_donate if still functional, else recycle".
 *    The top-level user condition selected is 'old_unused' (defined as outdated/stored in drawer,
 *    distinct from 'damaged' or 'not_working'). We set 'tradein_or_donate' as the primary
 *    recommendation to encourage device reuse and circularity, with 'recycle' as the fallback
 *    alternative if the device has expired OS support or non-viable components.
 * 
 * 3. Other electronics:
 *    - Damaged: primary 'repair_first', alternative 'recycle'.
 *    - Not working: primary 'recycle', alternative 'repair_first'.
 *    - Old/unused: primary 'recycle', alternative 'tradein_or_donate'.
 * 
 * 4. Alternatives excluding primary action:
 *    Every rule defines an 'alternatives' array containing only valid actions distinct
 *    from the primary action, ensuring the user always has clear secondary paths.
 */

interface RuleOutcome {
  primary: Action;
  alternatives: Action[];
  headline: string;
  why: string;
}

// Key format: `${Device}:${Condition}`
export const DECISION_RULES: Record<string, RuleOutcome> = {
  // --- PHONE ---
  "phone:working": {
    primary: "reuse_or_donate",
    alternatives: ["tradein_or_donate", "recycle"],
    headline: "Pass It Forward or Donate",
    why: "Your phone is in working order. Passing it to a family member, student, or community charity extends its useful life and avoids e-waste.",
  },
  "phone:partial": {
    primary: "repair_first",
    alternatives: ["reuse_or_donate", "recycle"],
    headline: "Repair Before Replacing",
    why: "Most partial faults—such as degraded batteries, cracked back glass, or speaker issues—can be economically repaired by a certified technician.",
  },
  "phone:damaged": {
    primary: "repair_first",
    alternatives: ["recycle", "tradein_or_donate"],
    headline: "Assess for Professional Repair",
    why: "Screens and housings can frequently be restored. If repair is cost-prohibitive, certified electronic recyclers can safely recover raw minerals.",
  },
  "phone:not_working": {
    primary: "repair_first",
    alternatives: ["recycle"],
    headline: "Diagnostic Check or Dedicated Recycling",
    why: "A non-responsive phone may only need a battery or charging port replacement. If unrepairable, it must be recycled to divert hazardous lithium.",
  },
  "phone:old_unused": {
    primary: "tradein_or_donate",
    alternatives: ["recycle", "reuse_or_donate"],
    headline: "Trade In or Community Donation",
    why: "Older phones often qualify for trade-in credits or serve as dedicated backup devices, school tools, or donation units.",
  },

  // --- TABLET ---
  "tablet:working": {
    primary: "reuse_or_donate",
    alternatives: ["tradein_or_donate", "recycle"],
    headline: "Donate or Repurpose for Learning",
    why: "Working tablets are invaluable for digital literacy, school students, and community reading programs.",
  },
  "tablet:partial": {
    primary: "repair_first",
    alternatives: ["reuse_or_donate", "recycle"],
    headline: "Fix the Specific Fault",
    why: "Display, battery, and port issues are often modular fixes. Restoring functionality keeps capable hardware in active circulation.",
  },
  "tablet:damaged": {
    primary: "repair_first",
    alternatives: ["recycle", "tradein_or_donate"],
    headline: "Repair Evaluation or Material Recovery",
    why: "A cracked screen or casing can often be serviced. If the display panel or motherboard is irreparable, certified e-waste recycling is recommended.",
  },
  "tablet:not_working": {
    primary: "repair_first",
    alternatives: ["recycle"],
    headline: "Inspect Power Circuit or Recycle Safely",
    why: "Tablets that fail to boot may have deeply discharged batteries or power management faults. If beyond repair, recycle responsibly.",
  },
  "tablet:old_unused": {
    primary: "tradein_or_donate",
    alternatives: ["recycle", "reuse_or_donate"],
    headline: "Trade In or Donate for Basic Tasks",
    why: "Even older tablets perform well as digital photo frames, smart displays, kitchen recipe tablets, or educational donations.",
  },

  // --- LAPTOP ---
  "laptop:working": {
    primary: "reuse_or_donate",
    alternatives: ["tradein_or_donate", "recycle"],
    headline: "Donate or Transition to a New User",
    why: "A fully functional laptop has tremendous utility for education, non-profits, or family members.",
  },
  "laptop:partial": {
    primary: "repair_first",
    alternatives: ["reuse_or_donate", "recycle"],
    headline: "Component Repair or Upgrade",
    why: "Laptops are often upgradeable with new storage, RAM, or fresh battery packs at a fraction of replacement cost.",
  },
  "laptop:damaged": {
    primary: "repair_first",
    alternatives: ["recycle", "tradein_or_donate"],
    headline: "Hardware Diagnostic and Repair",
    why: "Damaged keyboards, hinges, and screens can be replaced. If motherboards have suffered liquid damage, recover recyclable precious metals.",
  },
  "laptop:not_working": {
    primary: "repair_first",
    alternatives: ["recycle"],
    headline: "Technician Assessment or Certified E-Waste",
    why: "A dead laptop may only require a replacement power supply or internal fuse. Otherwise, certified recycling reclaims cobalt, copper, and gold.",
  },
  "laptop:old_unused": {
    primary: "tradein_or_donate",
    alternatives: ["recycle", "reuse_or_donate"],
    headline: "Refurbish, Trade In, or Donate",
    why: "Older laptops can be revitalized with lightweight operating systems (such as ChromeOS Flex or Linux) for educational donations.",
  },

  // --- CHARGER ---
  "charger:working": {
    primary: "reuse_or_donate",
    alternatives: ["recycle"],
    headline: "Keep as Spare or Pass Along",
    why: "Standardized chargers and cables can charge other devices or be donated to libraries, schools, or tech shelters.",
  },
  "charger:partial": {
    primary: "repair_first",
    alternatives: ["recycle"],
    headline: "Inspect Safely; Do Not Risk Fires",
    why: "Intermittent cables or loose bricks can pose short-circuit or fire risks. If modular tips or plugs can be safely repaired, do so; otherwise recycle immediately.",
  },
  "charger:damaged": {
    primary: "recycle",
    alternatives: ["repair_first"],
    headline: "Recycle for Copper and Plastic Recovery",
    why: "Frayed, bent, or cracked charging cables cannot safely carry mains current. Drop them off at an e-waste bin for copper wire extraction.",
  },
  "charger:not_working": {
    primary: "recycle",
    alternatives: ["repair_first"],
    headline: "Responsible E-Waste Recycling",
    why: "Non-functional power bricks and severed cables belong in specialized e-waste collection bins, not municipal landfill.",
  },
  "charger:old_unused": {
    primary: "recycle",
    alternatives: ["reuse_or_donate"],
    headline: "Consolidate and Recycle Obsolete Cables",
    why: "Proprietary, obsolete charging cables take up space and degrade over time. Recycle them to reclaim valuable conductive metals.",
  },

  // --- OTHER ---
  "other:working": {
    primary: "reuse_or_donate",
    alternatives: ["tradein_or_donate", "recycle"],
    headline: "Donate or Repurpose Locally",
    why: "Working peripheral gear, smart accessories, or audio devices can provide great value to community makers, students, or charities.",
  },
  "other:partial": {
    primary: "repair_first",
    alternatives: ["reuse_or_donate", "recycle"],
    headline: "Explore Repair or Maker Repair Cafes",
    why: "Many consumer electronics suffer from simple mechanical switch or contact failures that local repair cafes can remedy easily.",
  },
  "other:damaged": {
    primary: "repair_first",
    alternatives: ["recycle"],
    headline: "Assess for Repair Before Scrapping",
    why: "Check manufacturer warranty or independent repairability. If structural damage makes it unsafe, submit it to certified electronic recycling.",
  },
  "other:not_working": {
    primary: "recycle",
    alternatives: ["repair_first"],
    headline: "Recycle Through Certified E-Waste Channels",
    why: "Non-responsive electronics contain complex circuit boards and plastics that need specialized hazardous material handling.",
  },
  "other:old_unused": {
    primary: "recycle",
    alternatives: ["tradein_or_donate", "repair_first"],
    headline: "Clear Storage and Recycle Responsibly",
    why: "Items lingering forgotten in drawers prevent critical materials from returning to the circular supply chain.",
  },
};
