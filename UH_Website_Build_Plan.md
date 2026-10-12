# Unhackable Humans (UH) — Website + Digital Exit Build Plan

> **For Antigravity agents:** This is the single source of truth for the build. Work phase by phase. Ship Phase 1 (Digital Exit) completely before starting Phase 2. Do not invent content, statistics, testimonials, or facility data. Use clearly marked placeholders instead.

**Brand:** Unhackable Humans (UH)
**Tagline:** Minds over Manipulation
**Design direction:** Human security × Technology × Trust × Action
**Source:** Unhackable Humans — Website Design + UX + Content Blueprint (PDF)

---

## 0. Timeline Note (read first)

The blueprint sets these deadlines:

| Deliverable | Deadline |
|---|---|
| Digital Exit QR experience | **12 October 2026** |
| Full website | **30 October 2026** |

The original plan was written on 10 Oct. **The QR deadline is now due.** Build the *minimum usable* Digital Exit flow first (entry → device → condition → recommendation → deploy → QR). Nearby-options can ship as a "coming soon / manual lookup" stub. No animations, CMS, or AI in Phase 1.

---

## 1. Product Concept

UH is a **product ecosystem with a website at its centre**: part digital-safety resource, part investigative knowledge platform, part social-impact initiative.

The site must communicate, immediately:

1. **We understand manipulation.** UH investigates how people are influenced via emotion, trust, urgency, and psychological pressure.
2. **We turn knowledge into action.** Visitors learn from real scams and know how to respond.
3. **We build practical interventions.** Projects like Invisible Devices help people make better decisions beyond awareness.

These map to the three pillars: **Decode → Educate → Intervene.**

### The three most important experiences
1. **Homepage** — establishes trust and the UH philosophy.
2. **Scam Library** — a continually updated knowledge platform.
3. **Digital Exit** — turns awareness into practical action via Invisible Devices.

### Aesthetic rules
- Minimal, editorial, intelligent, human-centred.
- Strong typography, structured information, real UH photography.
- Subtle, restrained interactions.
- **Do NOT use:** hooded-hacker imagery, glowing code backgrounds, neon-green cyber aesthetics, heavy gradients, generic stock cybersecurity graphics.
- Credible to institutional partners, approachable to students and the public.

---

## 2. Design System

Build this first (Phase 2 start), but in Phase 1 define the tokens in Tailwind config so Digital Exit already uses them.

### 2.1 Colour tokens

| Token | HEX | Usage |
|---|---|---|
| `navy` | `#12263A` | Navigation, headings, footer |
| `teal` | `#1B7F79` | Buttons, links, highlights |
| `teal-deep` | `#145C58` | Hover states, emphasis |
| `offwhite` | `#F7F8F6` | Primary background |
| `mint` | `#E8F4F1` | Cards, info panels |
| `ink` | `#17202A` | Body text |
| `slate` | `#52616B` | Supporting text |
| `gold` | `#C59B45` | Select impact indicators only |

### 2.2 Typography
- **Inter** throughout (via `next/font`).
- Headings: Bold/Semibold. Body: Regular. Nav, stats, metadata: Medium.
- Hierarchy via size, weight, spacing — no extra font families.

### 2.3 Layout specs (proposed targets)

| Element | Value |
|---|---|
| Max content width | 1200–1280 px |
| Desktop side margins | 5–8% |
| Mobile side margins | 20–24 px |
| Section spacing | 88–112 px desktop |
| Card radius | 12–16 px |
| Button radius | 10–12 px |
| Primary button | Teal bg, white text |
| Cards | White or mint bg |
| Shadows | Minimal, subtle |
| Animation | Purposeful, restrained |

### 2.4 Motion
| Element | Interaction |
|---|---|
| Navbar | Subtle background transition on scroll |
| Buttons | Colour transition + slight movement |
| Cards | Small elevation/border change on hover |
| Section entry | Gentle fade + upward movement |
| Scam filters | Immediate result updates |
| Search | Clear loading, empty, and result states |
| Digital Exit cards | Strong selected state |
| Progress indicator | Updates between steps |
| Recommendation card | Simple reveal after submission |
| Mobile nav | Smooth open/close |

**Never:** scroll-jacking, heavy parallax, animations that delay access to information. **Always** honour `prefers-reduced-motion`.

---

## 3. Tech Stack (proposed, not mandated)

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + React + TypeScript |
| Styling | Tailwind CSS |
| UI | Reusable custom components |
| CMS | Sanity (or equivalent headless CMS) |
| Recommendation logic | Pure TypeScript rule module (UI-independent, unit-tested) |
| Forms | Validated contact form + spam protection (e.g. honeypot/Turnstile) |
| Analytics | Privacy-conscious, optional |
| Future AI | Server-side only, behind a controlled API route |

### Three-layer architecture
1. **Public website** — homepage, info pages, project pages, Scam Library, team, testimonials, contact.
2. **Content management** — scam breakdowns, projects, testimonials (+ consent status), team, images.
3. **Digital Exit** — selection flow, rule-based engine, checklists, optional location lookup, future AI hooks.

### Suggested repo structure

```
/app
  /(site)
    page.tsx                  # Home
    about/page.tsx
    our-work/page.tsx
    scam-library/page.tsx
    scam-library/[slug]/page.tsx
    invisible-devices/page.tsx
    testimonials/page.tsx
    team/page.tsx
    contact/page.tsx
  /digital-exit
    page.tsx                  # Entry
    flow/page.tsx             # Device -> Condition -> Result (client state)
/components
  /ui                         # Button, Card, Badge, Container, Section
  /layout                     # Navbar, Footer, MobileMenu
  /home                       # Hero, ProblemCards, Pillars, WorkGrid, ...
  /digital-exit               # DeviceCard, ConditionOption, ProgressBar, RecommendationCard
/lib
  /recommendation             # engine.ts, rules.ts, checklists.ts, types.ts, engine.test.ts
  /cms                        # sanity client + queries
/sanity                       # schemas
/public
```

---

## 4. PHASE 1 — Digital Exit QR Experience (PRIORITY, due 12 Oct)

### 4.1 Principles
- A lightweight **decision assistant**, not a long form.
- **No login. No app download. No unnecessary questions.**
- Mobile-first (design for ~360–414 px width first).
- **Rule-based and transparent** — do NOT present as AI-generated advice.
- Data-preparation guidance must appear **before** any donate/transfer/recycle recommendation.

### 4.2 Screens

#### Screen 1 — Entry
```
[UH Logo]
Invisible Devices: Digital Exit
Find the right next step for your old device.

[Primary]  Find My Device's Next Step
[Link]     Learn Why This Matters
```
- Warm-white background, navy text, teal CTA, minimal device illustration.
- Keep exceptionally simple.

#### Screen 2 — Device selection (Step 1 of 3)
Question: **What device do you have?**

| Device | Icon |
|---|---|
| Phone | Smartphone |
| Tablet | Tablet |
| Laptop | Laptop |
| Charger | Charging cable |
| Other | Electronics |

- Two-column grid on mobile where space allows.
- Selected state: teal border, subtle tint, check indicator.
- Continue button disabled until a selection is made.

#### Screen 3 — Condition selection (Step 2 of 3)
Question: **What condition is it in?**

| Option | Description |
|---|---|
| Working normally | Everything works as expected. |
| Partially working | The device works, but some features or components do not. |
| Damaged | Physical damage (cracked screen, dents, water exposure) but may power on. |
| Not working | The device does not turn on or function. |
| Very old or unused | Outdated, forgotten in a drawer, or no longer needed. |

- Back and Continue controls; **selection preserved on Back**.

#### Screen 4 — Recommendation (Step 3 of 3 / result)
Layout: `YOUR DIGITAL EXIT · RECOMMENDATION` → headline action.

Recommendation card must contain five elements:
1. **Recommended action** — one prominent action from device + condition.
2. **Why this is recommended** — short explanation.
3. **Before you exit it** — preparation checklist.
4. **Other options** — one or two alternatives.
5. **Find nearby options** — city/pincode entry flow (when data is available).

Rules of thumb:
- Possibly still usable → consider **repair, reuse, or donation before recycling**.
- Damaged / unusable → guide toward **repair or appropriate recycling**.

CTAs: Primary **Find Nearby Options**; Secondary **Explore Other Options**.

#### Screen 5 — Nearby options (basic; may be stubbed)
- Enter city or pincode.
- Choose destination type: **Repair / Reuse or donation / Trade-in / Recycling**.
- Show results with location, service type, and **source of information**.
- Only label a facility "verified" when the underlying data supports it.
- **If live data isn't ready by the deadline:** ship the recommendation flow and render a clear "Nearby options coming soon" state with the UI scaffolded for later integration.

### 4.3 Recommendation engine (draft rules — UH must review)

Implement in `/lib/recommendation` as pure, typed, unit-tested functions. **Mark these as a draft decision table for UH sign-off.**

```ts
type Device = 'phone' | 'tablet' | 'laptop' | 'charger' | 'other';
type Condition = 'working' | 'partial' | 'damaged' | 'not_working' | 'old_unused';
type Action = 'reuse_or_donate' | 'repair_first' | 'tradein_or_donate' | 'recycle';

interface Recommendation {
  action: Action;
  headline: string;
  why: string;
  checklist: string[];        // device-specific data-prep steps
  alternatives: Action[];
}
```

Draft decision table:

| Condition | Phone / Tablet / Laptop | Charger | Other |
|---|---|---|---|
| Working normally | `reuse_or_donate` (alt: `tradein_or_donate`) | `reuse_or_donate` | `reuse_or_donate` |
| Partially working | `repair_first` (alt: `reuse_or_donate`, `recycle`) | `repair_first` → else `recycle` | `repair_first` |
| Damaged | `repair_first` (alt: `recycle`) | `recycle` | `repair_first` (alt: `recycle`) |
| Not working | `repair_first` (alt: `recycle`) | `recycle` | `recycle` (alt: `repair_first`) |
| Very old or unused | `tradein_or_donate` if still functional, else `recycle` | `recycle` | `recycle` |

> Open question for UH: confirm the exact rules, wording, and any device-specific exceptions before public launch.

### 4.4 Data-preparation checklists (safety-critical)
- Must appear **before** donate/transfer/recycle guidance.
- **Not one generic reset instruction** — tailor by device type.
- Baseline items (adapt per device; have UH verify wording):
  - Back up important files.
  - Sign out of personal accounts.
  - Remove sensitive data using the appropriate device-reset procedure for that device.
  - Remove SIM/memory cards, accessories, and personal items.
- Chargers/cables: no data steps; include a "remove from packaging/check for damage" note instead.

### 4.5 QR code
- Point to a **stable short URL** opening Digital Exit directly (e.g. `/digital-exit`).
- Generate as SVG/PNG at print resolution.
- Do not change the URL after printing; use redirects if the structure changes.

### 4.6 Phase 1 test checklist
- [ ] QR scans on Android **and** iPhone.
- [ ] Loads acceptably on mobile data.
- [ ] Device and condition selection work.
- [ ] Back navigation preserves selections.
- [ ] Every device × condition combination returns a valid recommendation (unit tests).
- [ ] Data-prep guidance always visible.
- [ ] Small-screen layouts (≈320–360 px) don't break.
- [ ] No broken links; graceful loading/error states.
- [ ] Nearby-options stub clearly states limitations.

### 4.7 Phase 1 scope restrictions
**Do not** spend time on: advanced animation, the full CMS, AI integration, the full website. The goal is a usable first version.

---

## 5. PHASE 2 — Full Website (13–30 Oct)

### 5.1 Information architecture

| Page | Purpose | Priority |
|---|---|---|
| Home | Communicate mission, direct visitors | P0 |
| Invisible Devices | Explain project, introduce Digital Exit | P0 |
| About UH | Philosophy, origin, approach | P1 |
| Our Work | Projects, workshops, interventions | P1 |
| Breaking Down the Scam | Searchable scam-education library | P1 |
| Contact | Partnerships, collaborations, enquiries | P1 |
| Testimonials | Real experiences and impact | P2 |
| Team | The people behind UH | P2 |

**Persistent nav:** `UH Logo | About | Our Work | Scam Library | Invisible Devices | Testimonials | Team | [Take Action]`
Mobile: compact menu; keep the primary action accessible.

### 5.2 Homepage (10 sections)

Narrative: **Understand the problem → Discover UH → Explore the work → Learn from evidence → Take action.**

**01 — Navigation**
Navy or warm-white header; wordmark left; links right; teal CTA far right; sticky on scroll; compact.

**02 — Hero** (most important section)
- Two columns. Left: text. Right: visual.
- Headline: **People get hacked too.**
- Copy: *Unhackable Humans builds human security by decoding manipulation, exposing real-world scams and helping people make safer decisions.*
- Buttons: **Explore Our Work**, **Read the Latest Scam**.
- Visual: real UH photo, documentary-style image of someone with technology, or a restrained human/digital visual. No hacker clichés.
- Motion: text fade-up, image mask/opacity reveal, clear button hovers.
- Goal: visitor understands what UH does in 5–10 seconds.

**03 — The problem**
Heading: **Technology can be secure. People can still be manipulated.**
Short paragraph, then 6 compact cards with icon + one-liner: Urgency, Fear, Trust, Authority, Greed, Curiosity.
Example — *URGENCY: When someone pressures you to act before you have time to verify.* Understandable, not sensationalist.

**04 — What is UH?**
Heading: **From awareness to action.** Three cards (stack on mobile):

| Pillar | Description | Treatment |
|---|---|---|
| Decode | Understand how manipulation works | Navy |
| Educate | Turn real incidents into practical learning | Teal |
| Intervene | Build systems that make safer action easier | Soft mint |

Each: line icon, heading, two-sentence description, nav link.

**05 — Our work**
Heading: **Where human security becomes action.** Four-card grid, each with image/graphic, one-liner, Explore CTA:
1. Scam Intelligence — investigating real scams and the psychological techniques behind them.
2. Workshops — helping communities recognise manipulation and make safer decisions.
3. Invisible Devices — navigating repair, reuse, donation, and responsible recycling.
4. Future Interventions — placeholder for initiatives ready for public presentation.

Only publish projects UH can substantiate.

**06 — Latest scam breakdown**
Investigative-publication feel. Left: large cover image. Right: category, date, headline, summary, CTA (*Break It Down →*). Below: two smaller related cards. **Content pulled from CMS — never hard-coded.**

**07 — Impact & testimonials**
2–3 spacious testimonial cards: verified quote, approved name/descriptor, context, photo (only with consent). Impact stats above **only when verified**.
**Never invent participation numbers, metrics, or endorsements.**

**08 — Invisible Devices** (strongest section)
Full-width navy, split layout. Left: **What happens to the device you stop using?** + explanation that unused electronics sit forgotten instead of being repaired, reused, or responsibly recycled. Right: device visual + prominent teal CTA **Find Your Digital Exit →** linking directly to the Digital Exit flow.

**09 — Final CTA**
Soft-mint background. **Stay informed. Stay harder to manipulate.** Encourage exploring UH, the Scam Library, or collaborating.

**10 — Footer**
Logo + tagline, nav links, official contact details, social links, privacy/terms (where implemented), copyright.

### 5.3 Breaking Down the Scam (Scam Library)

**Landing page (editorial archive)**
- Heading: *Breaking Down the Scam* + one-paragraph intro.
- Search field placeholder: *Search a scam, tactic or emotion…*
- Featured breakdown.
- Filters: scam category, manipulation tactic/emotion, intended audience, publication date.
- Responsive card grid: title, category, tactic tags, date, short description, cover image (if any).
- Pagination or infinite scroll. Handle loading, empty, and result states.

**Article template**

| Section | Purpose |
|---|---|
| Header | Title, category, date, hook |
| The Story | What happened |
| How It Worked | Sequence of manipulation |
| The Psychology | Emotional/behavioural mechanism |
| Red Flags | Warning signs |
| The Exit Point | Where the person could have paused or disengaged |
| What To Do | Practical next steps |
| UH Takeaway | One memorable lesson |
| Related Breakdowns | Similar cases |

Single readable column with comfortable measure; narrower side column on desktop for supporting/related content; linear on mobile.
**Content rule:** every article must help readers recognise a pattern *and* identify a practical action. Exclude sensitive identifying details.

### 5.4 Supporting pages

**About UH** (simple, credibility-focused)
1. Mission and origin
2. Why human security matters
3. What "Minds over Manipulation" means
4. Decode → Educate → Intervene framework
5. Founder's Desk (personal, authentic — not a corporate bio)
6. Current initiatives and future direction

**Our Work** — archive of reusable project cards. Each: Problem, Intervention, Approach, Evidence/Impact, Current status (**ongoing / completed / in development**), Media, CTA.

**Team** — profile cards: photo, name, actual role, short bio/responsibility, optional LinkedIn. Founder first, then core members, then contributors.

**Testimonials** — consistent cards, optional filters (participant type / initiative). Publish names, quotes, and photos only with permission.

**Contact** — validated form with spam protection for partnerships, collaborations, enquiries.

### 5.5 CMS content models (Sanity schemas)

**ScamBreakdown:** title, slug, category, tags, publicationDate, story, psychology, redFlags, exitPoint, actionSteps, takeaway, coverImage, relatedPosts, status

**Project:** title, summary, problem, intervention, impact, status, media, cta

**Testimonial:** nameOrDescriptor, quote, context, photo (if approved), date, approvalStatus

**TeamMember:** name, role, biography, photo, socialLink, active

Requirements: UH team can publish without code changes; role-based permissions; testimonials carry consent/approval status.

### 5.6 Schedule

| Dates | Workstream | Deliverable |
|---|---|---|
| 13–14 Oct | Design system + reusable components | Shared UI foundation |
| 15–17 Oct | Homepage, nav, footer | Complete homepage |
| 18–19 Oct | About, Our Work, Invisible Devices | Core info pages |
| 20–22 Oct | Scam Library + article templates | Searchable editorial platform |
| 23–24 Oct | CMS setup + content entry | Editable content collections |
| 25–26 Oct | Team, testimonials, contact | Remaining pages |
| 27–28 Oct | Responsive, accessibility, functional QA | Critical issues fixed |
| 29 Oct | Performance, SEO, content review | Release candidate |
| 30 Oct | Final regression testing + deployment | Full release |

Aggressive schedule; assumes content, photos, brand assets, hosting access, and CMS decisions arrive promptly. If capacity is tight, **cut optional features — never the QR flow, mobile usability, or content management.**

---

## 6. Non-Functional Requirements
- Responsive: mobile, tablet, desktop.
- Performance: optimised images (`next/image`), minimal JS on content pages.
- SEO: metadata, Open Graph/social previews, sitemap.
- Accessibility: keyboard navigation, visible focus, accessible contrast, semantic HTML, alt text, reduced-motion support.
- Security: HTTPS, secure CMS admin, spam-protected forms, backups, custom 404/500 pages.
- Maintainability: reusable components, typed content models, logic separated from UI.

---

## 7. Content Integrity Rules (apply everywhere)
1. No invented statistics, participation numbers, or endorsements.
2. No testimonial, name, or photo without recorded consent.
3. Only present projects and capabilities UH can substantiate.
4. Label facilities "verified" only when data supports it.
5. Digital Exit recommendations are rule-based and must not be described as AI.
6. Use obvious placeholders (`[PLACEHOLDER: ...]`) for any missing content.

---

## 8. Final Acceptance Checklist

**Brand & visual**
- [ ] Consistent palette and typography
- [ ] Clear visual hierarchy
- [ ] Real UH photography where available
- [ ] Reusable components across pages
- [ ] Consistent mobile navigation

**Digital Exit**
- [ ] QR opens the correct URL
- [ ] No login or app download
- [ ] Device and condition selections work
- [ ] Recommendations follow documented rules
- [ ] Data-prep guidance visible
- [ ] Back navigation preserves selections
- [ ] Nearby-options clearly states limitations where data is unavailable

**Scam Library**
- [ ] Search and filters work
- [ ] Articles follow the template
- [ ] Related articles display correctly
- [ ] Publishing works via CMS
- [ ] Sensitive identifying details excluded

**Full website**
- [ ] All eight destinations functional
- [ ] Contact form works
- [ ] Testimonials and impact claims are evidence-based
- [ ] CMS permissions configured
- [ ] Mobile/tablet/desktop tested
- [ ] SEO metadata and social previews configured
- [ ] Keyboard navigation and contrast checked
- [ ] HTTPS, backups, and error pages configured

---

## 9. Suggested Antigravity Task Prompts

Run these in order, one agent task each, reviewing output before moving on.

1. **Scaffold:** "Create a Next.js (App Router) + TypeScript + Tailwind project. Configure Inter via `next/font` and the colour tokens from §2.1 in the Tailwind config. Add the repo structure from §3."
2. **Engine:** "Implement `/lib/recommendation` per §4.3–4.4 as pure TypeScript with Vitest tests covering every device × condition combination. Checklists must be device-specific."
3. **Digital Exit UI:** "Build `/digital-exit` and the flow per §4.2 (Screens 1–4), mobile-first, with progress indicator, preserved selections on Back, and a nearby-options stub per Screen 5. Respect reduced motion."
4. **QA + deploy:** "Run the §4.6 checklist, fix issues, generate the QR (SVG + PNG) for the production `/digital-exit` URL, and deploy."
5. **Design system:** "Build reusable `Button`, `Card`, `Badge`, `Container`, `Section`, `Navbar` (sticky, mobile menu), and `Footer` per §2 and §5.1."
6. **Homepage:** "Build the 10-section homepage per §5.2 using placeholders for images and CMS-driven content."
7. **Pages:** "Build About, Our Work, Invisible Devices, Team, Testimonials, and Contact per §5.4."
8. **CMS + Library:** "Set up Sanity with the schemas in §5.5. Build the Scam Library landing (search + filters) and the article template per §5.3."
9. **Hardening:** "Perform accessibility, performance, SEO, and security passes per §6, then run the §8 acceptance checklist."

---

## 10. Open Items Needing UH Input
- Final recommendation rules and checklist wording (§4.3–4.4)
- Source and licensing of nearby-facility data (city/pincode coverage)
- Real photography, logo files, brand assets
- Verified impact figures and consented testimonials
- Founder's Desk content and team bios
- Hosting/domain access and CMS choice confirmation
- Official contact details and social links
- Privacy policy and terms wording
