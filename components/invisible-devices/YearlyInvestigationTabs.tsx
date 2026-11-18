"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  BarChart3,
  Quote,
  MessageSquare,
  UserPlus,
  Send,
  CheckCircle2,
  Sparkles,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  Heart,
  Tag,
} from "lucide-react";

export interface WallPost {
  id: string;
  name: string;
  role: string;
  date: string;
  tag: string;
  message: string;
}

const INITIAL_WALL_POSTS: WallPost[] = [
  {
    id: "wall-1",
    name: "Ananya Sharma",
    role: "2026 Cohort Member",
    date: "Nov 2026",
    tag: "Field Investigation",
    message:
      "Being part of the 45-member 2026 investigation cohort showed me how deep data sanitization paranoia runs. Guiding families through the Digital Exit protocol unlocked dozens of dormant devices for local students.",
  },
  {
    id: "wall-2",
    name: "Devendra Patel",
    role: "Campus Research Lead",
    date: "Oct 2026",
    tag: "Hardware Recovery",
    message:
      "Our student team audited 80+ retired smartphones and tablets. With zero personal data left behind, we diverted critical mineral e-waste straight into verified circular pipelines.",
  },
  {
    id: "wall-3",
    name: "Meera K.",
    role: "Community Participant",
    date: "Oct 2026",
    tag: "Digital Exit Experience",
    message:
      "I had 3 old smartphones sitting in drawers since 2019 out of fear of photo recovery. The step-by-step guidance resolved my anxiety completely. Unhackable Humans is doing essential work.",
  },
  {
    id: "wall-4",
    name: "Siddharth Rao",
    role: "2026 Cohort Member",
    date: "Sep 2026",
    tag: "Circular Security",
    message:
      "Human security isn't just about phishing links—it's also about physical hardware lifecycle. Proud to have contributed to the first 45-member cohort investigation!",
  },
];

interface YearlyInvestigationTabsProps {
  theme?: "dark" | "light";
  className?: string;
}

export function YearlyInvestigationTabs({
  theme = "dark",
  className = "",
}: YearlyInvestigationTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "impact" | "testimonials" | "wall" | "register"
  >("impact");

  // Feedback Wall state
  const [wallPosts, setWallPosts] = useState<WallPost[]>(INITIAL_WALL_POSTS);
  const [wallName, setWallName] = useState("");
  const [wallRole, setWallRole] = useState("Community Participant");
  const [wallTag, setWallTag] = useState("Experience");
  const [wallMessage, setWallMessage] = useState("");
  const [wallSubmitted, setWallSubmitted] = useState(false);

  // Register for Next Batch state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regRole, setRegRole] = useState("Student / Academic");
  const [regNote, setRegNote] = useState("");
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [regError, setRegError] = useState("");

  // Load saved posts from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("uh_investigation_wall_posts");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWallPosts(parsed);
        }
      }
    } catch {
      // Fallback silently if localStorage is not accessible
    }
  }, []);

  const handlePostToWall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallMessage.trim()) return;

    const newPost: WallPost = {
      id: `wall-custom-${Date.now()}`,
      name: wallName.trim() || "Anonymous Participant",
      role: wallRole.trim() || "Participant",
      date: "Just now",
      tag: wallTag,
      message: wallMessage.trim(),
    };

    const updated = [newPost, ...wallPosts];
    setWallPosts(updated);
    try {
      localStorage.setItem(
        "uh_investigation_wall_posts",
        JSON.stringify(updated)
      );
    } catch {
      // Ignore localStorage errors
    }

    setWallMessage("");
    setWallName("");
    setWallSubmitted(true);
    setTimeout(() => setWallSubmitted(false), 4000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");

    if (!regName.trim() || !regEmail.trim()) {
      setRegError("Please provide both your name and email address.");
      return;
    }

    if (!regEmail.includes("@") || !regEmail.includes(".")) {
      setRegError("Please enter a valid email address.");
      return;
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem("uh_investigation_registrations") || "[]"
      );
      existing.push({
        name: regName.trim(),
        email: regEmail.trim(),
        role: regRole,
        note: regNote.trim(),
        date: new Date().toISOString(),
      });
      localStorage.setItem(
        "uh_investigation_registrations",
        JSON.stringify(existing)
      );
    } catch {
      // Ignore localStorage errors
    }

    setRegSubmitted(true);
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-card overflow-hidden ${
        isDark
          ? "bg-navy-dark border border-white/15 text-white shadow-card"
          : "bg-white border border-mint-border text-navy shadow-subtle"
      } ${className}`}
    >
      {/* Header bar */}
      <div
        className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-3 ${
          isDark
            ? "border-white/10 bg-white/[0.02]"
            : "border-mint-border bg-offwhite/70"
        }`}
      >
        <div>
          <h3 className="font-bold text-base tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span>2026 Investigation</span>
            <span
              className={`text-xs font-medium ${
                isDark ? "text-teal-light" : "text-teal-deep"
              }`}
            >
              45-member cohort
            </span>
          </h3>
          <p
            className={`text-xs mt-0.5 ${
              isDark ? "text-white/60" : "text-slate"
            }`}
          >
            Yearly civic hardware &amp; data sanitization investigation
          </p>
        </div>

        <Link
          href="mailto:unhackable.humans@gmail.com"
          className={`text-xs font-medium transition-colors ${
            isDark
              ? "text-teal-light hover:text-white"
              : "text-teal hover:text-teal-deep"
          }`}
        >
          unhackable.humans@gmail.com
        </Link>
      </div>

      {/* Tabs Navigation */}
      <div
        className={`flex border-b overflow-x-auto no-scrollbar text-xs font-semibold ${
          isDark
            ? "border-white/10 bg-white/[0.02]"
            : "border-mint-border bg-white"
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveTab("impact")}
          className={`min-h-[44px] px-4 py-3 shrink-0 flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === "impact"
              ? isDark
                ? "border-teal text-teal-light bg-white/[0.05]"
                : "border-teal text-teal bg-mint/40"
              : isDark
              ? "border-transparent text-white/70 hover:text-white hover:bg-white/[0.02]"
              : "border-transparent text-slate hover:text-navy hover:bg-offwhite"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Impact Created</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("testimonials")}
          className={`min-h-[44px] px-4 py-3 shrink-0 flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === "testimonials"
              ? isDark
                ? "border-teal text-teal-light bg-white/[0.05]"
                : "border-teal text-teal bg-mint/40"
              : isDark
              ? "border-transparent text-white/70 hover:text-white hover:bg-white/[0.02]"
              : "border-transparent text-slate hover:text-navy hover:bg-offwhite"
          }`}
        >
          <Quote className="w-3.5 h-3.5" />
          <span>Testimonials</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("wall")}
          className={`min-h-[44px] px-4 py-3 shrink-0 flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === "wall"
              ? isDark
                ? "border-teal text-teal-light bg-white/[0.05]"
                : "border-teal text-teal bg-mint/40"
              : isDark
              ? "border-transparent text-white/70 hover:text-white hover:bg-white/[0.02]"
              : "border-transparent text-slate hover:text-navy hover:bg-offwhite"
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Experience Wall ({wallPosts.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("register")}
          className={`min-h-[44px] px-4 py-3 shrink-0 flex items-center gap-1.5 border-b-2 transition-colors ${
            activeTab === "register"
              ? isDark
                ? "border-teal text-teal-light bg-white/[0.05]"
                : "border-teal text-teal bg-mint/40"
              : isDark
              ? "border-transparent text-white/70 hover:text-white hover:bg-white/[0.02]"
              : "border-transparent text-slate hover:text-navy hover:bg-offwhite"
          }`}
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>Register for Next Batch</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-5 sm:p-6 min-h-[340px]">
        {/* 1. IMPACT CREATED */}
        {activeTab === "impact" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-light">
                2026 Investigation Outcomes
              </h4>
              <p
                className={`text-xs ${
                  isDark ? "text-white/70" : "text-slate"
                }`}
              >
                45 student, research, and community members audited dormant electronics and mapped safe circular hand-off routes.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-offwhite border-mint-border"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-teal">
                  45
                </div>
                <div
                  className={`text-[11px] font-semibold mt-1 ${
                    isDark ? "text-white/90" : "text-navy"
                  }`}
                >
                  Active Members
                </div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    isDark ? "text-white/50" : "text-slate"
                  }`}
                >
                  Students, researchers &amp; citizens
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-offwhite border-mint-border"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-teal">
                  380+
                </div>
                <div
                  className={`text-[11px] font-semibold mt-1 ${
                    isDark ? "text-white/90" : "text-navy"
                  }`}
                >
                  Devices Audited
                </div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    isDark ? "text-white/50" : "text-slate"
                  }`}
                >
                  Phones, laptops &amp; tablets
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-offwhite border-mint-border"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-teal">
                  68%
                </div>
                <div
                  className={`text-[11px] font-semibold mt-1 ${
                    isDark ? "text-white/90" : "text-navy"
                  }`}
                >
                  Data Anxiety Rate
                </div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    isDark ? "text-white/50" : "text-slate"
                  }`}
                >
                  Hoarded due to wipe uncertainty
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-offwhite border-mint-border"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-teal">
                  100%
                </div>
                <div
                  className={`text-[11px] font-semibold mt-1 ${
                    isDark ? "text-white/90" : "text-navy"
                  }`}
                >
                  Zero Data Logged
                </div>
                <div
                  className={`text-[10px] mt-0.5 ${
                    isDark ? "text-white/50" : "text-slate"
                  }`}
                >
                  Privacy-first audit protocol
                </div>
              </div>
            </div>

            {/* Core Insights */}
            <div
              className={`p-4 rounded-xl border space-y-2 text-xs ${
                isDark
                  ? "bg-white/[0.02] border-white/10 text-white/80"
                  : "bg-mint/30 border-mint-border text-navy"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 text-teal">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Key Discoveries from the 2026 Investigation:</span>
              </div>
              <ul className="space-y-1.5 pl-5 list-disc leading-relaxed text-[11px] sm:text-xs">
                <li>
                  <strong>Psychological Blockers:</strong> Most retired hardware
                  is kept not for monetary value, but because owners fear
                  improper factory resets could expose personal photos or
                  credentials.
                </li>
                <li>
                  <strong>Safe Handoff Pathways:</strong> Validated clear,
                  offline verification steps allowing users to safely donate or
                  recycle devices without paying for expensive wiping tools.
                </li>
                <li>
                  <strong>Next Horizon:</strong> Expanding the investigation in
                  the 2027 batch to regional institutional electronics and
                  community repair clinics.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <span
                className={`text-[11px] ${
                  isDark ? "text-white/60" : "text-slate"
                }`}
              >
                Ready to take action on your own unused electronics?
              </span>
              <Link
                href="/digital-exit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-deep transition-all shadow-sm"
              >
                <span>Launch Digital Exit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* 2. TESTIMONIALS */}
        {activeTab === "testimonials" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-teal">
                  Voices from the 45 Investigators
                </h4>
                <p
                  className={`text-xs ${
                    isDark ? "text-white/70" : "text-slate"
                  }`}
                >
                  Reflections and field experiences from our 2026 cohort members.
                </p>
              </div>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                  isDark
                    ? "bg-white/10 text-white/80"
                    : "bg-mint text-teal-deep"
                }`}
              >
                2026 Batch
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              <div
                className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white/80"
                    : "bg-offwhite border-mint-border text-navy"
                }`}
              >
                <p className="text-xs italic leading-relaxed">
                  &ldquo;Being part of the 45-member cohort completely shifted
                  my perspective. People don&apos;t hoard devices out of laziness;
                  they are anxious about doing the data wipe wrong. Helping them
                  step-by-step released dozens of laptops for underprivileged
                  learners.&rdquo;
                </p>
                <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[11px]">
                  <div>
                    <div className="font-bold text-teal">Aarav M.</div>
                    <div
                      className={`text-[10px] ${
                        isDark ? "text-white/50" : "text-slate"
                      }`}
                    >
                      Field Investigator, 2026
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal/15 text-teal font-semibold">
                    Bengaluru
                  </span>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white/80"
                    : "bg-offwhite border-mint-border text-navy"
                }`}
              >
                <p className="text-xs italic leading-relaxed">
                  &ldquo;Our campus dorm audit uncovered over 150 retired phones.
                  The fear of cached accounts was universal. The 2026
                  investigation proved that clear, empathetic protocols build
                  immediate human trust.&rdquo;
                </p>
                <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[11px]">
                  <div>
                    <div className="font-bold text-teal">Priya K.</div>
                    <div
                      className={`text-[10px] ${
                        isDark ? "text-white/50" : "text-slate"
                      }`}
                    >
                      Campus Research Lead, 2026
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal/15 text-teal font-semibold">
                    Mumbai
                  </span>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white/80"
                    : "bg-offwhite border-mint-border text-navy"
                }`}
              >
                <p className="text-xs italic leading-relaxed">
                  &ldquo;We demonstrated that human security isn&apos;t solely
                  digital defense against attackers—it also safeguards physical
                  hardware transitions and prevents environmental damage.&rdquo;
                </p>
                <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[11px]">
                  <div>
                    <div className="font-bold text-teal">Siddharth R.</div>
                    <div
                      className={`text-[10px] ${
                        isDark ? "text-white/50" : "text-slate"
                      }`}
                    >
                      Security Fellow, 2026
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal/15 text-teal font-semibold">
                    Delhi
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className="text-xs font-semibold text-teal hover:underline inline-flex items-center gap-1"
              >
                <span>Want to join the next investigation cohort?</span>
                <span className="font-bold">&rarr; Register for 2027</span>
              </button>
            </div>
          </div>
        )}

        {/* 3. EXPERIENCE & FEEDBACK WALL */}
        {activeTab === "wall" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-teal flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal" />
                  <span>Experience &amp; Feedback Wall</span>
                </h4>
                <p
                  className={`text-xs ${
                    isDark ? "text-white/70" : "text-slate"
                  }`}
                >
                  Write and share your experience with the investigation or
                  digital exit.
                </p>
              </div>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                  isDark
                    ? "bg-white/10 text-white/80"
                    : "bg-mint text-teal-deep"
                }`}
              >
                Community Board
              </span>
            </div>

            {/* Submission Form */}
            <form
              onSubmit={handlePostToWall}
              className={`p-4 rounded-xl border space-y-3 ${
                isDark
                  ? "bg-white/[0.03] border-white/10"
                  : "bg-offwhite border-mint-border"
              }`}
            >
              <div className="text-xs font-bold flex items-center gap-1 text-teal">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Leave Your Feedback or Investigation Note</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  placeholder="Your Name / Handle"
                  value={wallName}
                  onChange={(e) => setWallName(e.target.value)}
                  className={`text-base sm:text-xs px-3 py-2.5 sm:py-2 rounded-lg border outline-none transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                      : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                  }`}
                />

                <input
                  type="text"
                  placeholder="Role (e.g. 2026 Member, Citizen)"
                  value={wallRole}
                  onChange={(e) => setWallRole(e.target.value)}
                  className={`text-base sm:text-xs px-3 py-2.5 sm:py-2 rounded-lg border outline-none transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                      : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                  }`}
                />

                <select
                  value={wallTag}
                  onChange={(e) => setWallTag(e.target.value)}
                  className={`text-base sm:text-xs px-3 py-2.5 sm:py-2 rounded-lg border outline-none transition-colors ${
                    isDark
                      ? "bg-navy border-white/10 text-white focus:border-teal"
                      : "bg-white border-mint-border text-navy focus:border-teal"
                  }`}
                >
                  <option value="Experience">Experience</option>
                  <option value="Investigation">Field Investigation</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Device Recovery">Device Recovery</option>
                  <option value="Data Sanitization">Data Sanitization</option>
                </select>
              </div>

              <textarea
                rows={2}
                placeholder="Share your experience, thoughts on retired electronics, or feedback for the team..."
                value={wallMessage}
                onChange={(e) => setWallMessage(e.target.value)}
                required
                className={`w-full text-base sm:text-xs p-3 rounded-lg border outline-none transition-colors resize-none ${
                  isDark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                    : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                }`}
              />

              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-teal flex items-center gap-1 font-medium">
                  {wallSubmitted && (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                      <span>Thank you! Your feedback has been posted to the wall.</span>
                    </>
                  )}
                </span>

                <button
                  type="submit"
                  className="min-h-[44px] px-4 py-2.5 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-deep transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post to Wall</span>
                </button>
              </div>
            </form>

            {/* Wall Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
              {wallPosts.map((post) => (
                <div
                  key={post.id}
                  className={`p-3.5 rounded-xl border text-xs flex flex-col justify-between space-y-2.5 transition-all ${
                    isDark
                      ? "bg-white/[0.02] border-white/10 hover:border-teal/40"
                      : "bg-offwhite border-mint-border hover:border-teal/50"
                  }`}
                >
                  <p
                    className={`leading-relaxed text-[11px] sm:text-xs ${
                      isDark ? "text-white/85" : "text-navy"
                    }`}
                  >
                    &ldquo;{post.message}&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-teal">{post.name}</span>
                      <span
                        className={
                          isDark ? "text-white/40" : "text-slate/60"
                        }
                      >
                        &bull;
                      </span>
                      <span
                        className={
                          isDark ? "text-white/60" : "text-slate"
                        }
                      >
                        {post.role}
                      </span>
                    </div>

                    <span
                      className={`font-mono px-1.5 py-0.5 rounded text-[9px] ${
                        isDark
                          ? "bg-white/10 text-teal-light"
                          : "bg-mint text-teal-deep font-semibold"
                      }`}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. REGISTER FOR NEXT BATCH */}
        {activeTab === "register" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-teal flex items-center gap-1.5">
                  <UserPlus className="w-4 h-4 text-teal" />
                  <span>Register for Next Batch (2027 Cohort)</span>
                </h4>
                <p
                  className={`text-xs ${
                    isDark ? "text-white/70" : "text-slate"
                  }`}
                >
                  Following our 45-member 2026 cohort, applications for the 2027
                  Yearly Investigation are now open.
                </p>
              </div>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                  isDark
                    ? "bg-teal/20 text-teal-light border border-teal/30"
                    : "bg-mint text-teal-deep border border-mint-border font-semibold"
                }`}
              >
                Applications Open
              </span>
            </div>

            {regSubmitted ? (
              <div
                className={`p-6 rounded-2xl border text-center space-y-3 ${
                  isDark
                    ? "bg-teal/10 border-teal/30 text-white"
                    : "bg-mint border-teal text-navy"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-teal/20 text-teal mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-bold">
                  Registration Successfully Received!
                </h5>
                <p
                  className={`text-xs max-w-md mx-auto leading-relaxed ${
                    isDark ? "text-white/80" : "text-slate"
                  }`}
                >
                  Thank you for applying to join the next batch of Invisible
                  Device investigators. Our team will review your interest and
                  reach out to{" "}
                  <strong className="text-teal underline font-mono">
                    {regEmail}
                  </strong>{" "}
                  with the cohort briefing and orientation schedule.
                </p>
                <p className="text-[11px] text-teal-light font-medium">
                  Direct contact: unhackable.humans@gmail.com
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setRegSubmitted(false);
                      setRegName("");
                      setRegEmail("");
                      setRegNote("");
                    }}
                    className="text-xs px-4 py-2 rounded-lg bg-teal text-white hover:bg-teal-deep transition-colors"
                  >
                    Register Another Participant
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleRegister}
                className={`p-5 rounded-xl border space-y-3.5 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10"
                    : "bg-offwhite border-mint-border"
                }`}
              >
                {regError && (
                  <div className="p-2.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                    {regError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        isDark ? "text-white/70" : "text-navy"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Patel"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className={`w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                          : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        isDark ? "text-white/70" : "text-navy"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className={`w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                          : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        isDark ? "text-white/70" : "text-navy"
                      }`}
                    >
                      Background / Category
                    </label>
                    <select
                      value={regRole}
                      onChange={(e) => setRegRole(e.target.value)}
                      className={`w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark
                          ? "bg-navy border-white/10 text-white focus:border-teal"
                          : "bg-white border-mint-border text-navy focus:border-teal"
                      }`}
                    >
                      <option value="Student / Academic">
                        Student / Academic Institution
                      </option>
                      <option value="Security / Tech Professional">
                        Security / Tech Professional
                      </option>
                      <option value="E-Waste & Sustainability Advocate">
                        E-Waste &amp; Circularity Advocate
                      </option>
                      <option value="Civic Volunteer">Civic Volunteer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        isDark ? "text-white/70" : "text-navy"
                      }`}
                    >
                      Why do you want to join? (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Help audit campus tech / Learn data sanitization"
                      value={regNote}
                      onChange={(e) => setRegNote(e.target.value)}
                      className={`w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border outline-none transition-colors ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-teal"
                          : "bg-white border-mint-border text-navy placeholder:text-slate/60 focus:border-teal"
                      }`}
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div
                    className={`text-[11px] ${
                      isDark ? "text-white/60" : "text-slate"
                    }`}
                  >
                    Questions? Email{" "}
                    <a
                      href="mailto:unhackable.humans@gmail.com"
                      className="text-teal underline font-semibold"
                    >
                      unhackable.humans@gmail.com
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-deep transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Cohort Registration</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

