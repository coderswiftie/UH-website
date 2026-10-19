import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Partnerships | Unhackable Humans",
  description:
    "Get in touch with Unhackable Humans for research collaborations, campus workshops, and civic interventions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <Section variant="offwhite" spacing="compact" className="border-b border-mint-border">
          <Container>
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-teal">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Contact &amp; Partnerships.
              </h1>
              <p className="text-base text-slate leading-relaxed">
                Whether you represent an educational institution, community group, or investigative partner, we welcome collaborative initiatives.
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Grid */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <Card variant="offwhite" className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-navy tracking-tight mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-xs text-slate mb-8">
                    Please provide sufficient detail regarding your request. We review submissions within 2 business days.
                  </p>
                  <ContactForm />
                </Card>
              </div>

              {/* Information Column (Placeholders per Rule 1) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-card border border-mint-border bg-offwhite space-y-4">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                    <Mail className="w-5 h-5 text-teal" />
                    <span>Official Email</span>
                  </div>
                  <div className="p-3 rounded bg-white border border-slate/20 font-mono text-xs text-slate">
                    [PLACEHOLDER: contact@unhackablehumans.org]
                  </div>
                  <p className="text-xs text-slate">
                    For press, whistleblowers, and institutional inquiries.
                  </p>
                </div>

                <div className="p-6 rounded-card border border-mint-border bg-offwhite space-y-4">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                    <MapPin className="w-5 h-5 text-teal" />
                    <span>Locations &amp; Chapters</span>
                  </div>
                  <div className="p-3 rounded bg-white border border-slate/20 font-mono text-xs text-slate">
                    [PLACEHOLDER: Official Registered Office &amp; Operational Nodes]
                  </div>
                  <p className="text-xs text-slate">
                    Field workshops currently operating across pilot academic institutions.
                  </p>
                </div>

                <div className="p-6 rounded-card bg-mint/50 border border-mint-border space-y-2">
                  <div className="flex items-center gap-2 text-teal-deep font-semibold text-xs uppercase tracking-wide">
                    <Shield className="w-4 h-4 text-teal" />
                    <span>Data Privacy Guarantee</span>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    Unhackable Humans respects personal privacy. We do not sell, rent, or share contact details with commercial data brokers.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
