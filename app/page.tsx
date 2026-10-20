import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { WorkSection } from "@/components/home/WorkSection";
import { LatestScamSection } from "@/components/home/LatestScamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InvisibleDevicesFeature } from "@/components/home/InvisibleDevicesFeature";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01 — Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 02 — Hero */}
        <Hero />

        {/* Transition Divider 01 */}
        <SectionDivider number="01" label="VULNERABILITY MAPPING" />

        {/* 03 — The Problem */}
        <ProblemSection />

        {/* 04 — What is UH? (The Three Pillars) */}
        <PillarsSection />

        {/* 05 — Our Work */}
        <WorkSection />

        {/* Transition Divider 02 */}
        <SectionDivider number="04" label="INVESTIGATIVE ARCHIVE" />

        {/* 06 — Latest Scam Breakdown (Pulled dynamically from mock content) */}
        <LatestScamSection />

        {/* 07 — Impact & Testimonials (Verified entries only) */}
        <TestimonialsSection />

        {/* 08 — Invisible Devices (Split layout linking to /digital-exit) */}
        <InvisibleDevicesFeature />

        {/* 09 — Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 10 — Footer */}
      <Footer />
    </div>
  );
}
