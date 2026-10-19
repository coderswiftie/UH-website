import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getActiveTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Unhackable Humans",
  description:
    "The multidisciplinary researchers, investigators, and designers behind Unhackable Humans.",
};

export default function TeamPage() {
  const teamMembers = getActiveTeamMembers();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                People
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                The people behind UH.
              </h1>
              <p className="text-base text-slate leading-relaxed">
                A multidisciplinary collective spanning behavioral psychology, intelligence analysis, investigative journalism, and human-computer interaction.
              </p>
            </div>
          </Container>
        </Section>

        {/* Team Grid */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  variant="offwhite"
                  className="space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Portrait Placeholder per Hard Rule 1 */}
                    <div className="aspect-square w-full rounded-xl bg-white border border-dashed border-slate/30 flex flex-col items-center justify-center p-4 text-center">
                      <User className="w-12 h-12 text-slate/40 mb-2" />
                      <span className="font-mono text-[11px] uppercase font-semibold text-slate">
                        [PLACEHOLDER: Portrait Photo]
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-navy tracking-tight">
                        {member.name}
                      </h2>
                      <span className="text-xs font-semibold text-teal-deep uppercase tracking-wider block mt-0.5">
                        {member.role}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate leading-relaxed">
                      {member.biography}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-mint-border">
                    <span className="text-xs font-mono text-slate/70 flex items-center gap-1">
                      {member.socialLink}
                      <ArrowUpRight className="w-3 h-3 text-teal" />
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Integrity Notice */}
            <div className="mt-14 p-6 rounded-card bg-mint/50 border border-mint-border max-w-2xl mx-auto text-center text-xs text-slate">
              <p>
                In alignment with UH content integrity rules, team profiles and photos are only published with explicit recorded consent.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
