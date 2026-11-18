import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
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
        <Section
          variant="offwhite"
          spacing="compact"
          className="border-b border-mint-border"
        >
          <Container>
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Get In Touch
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Contact &amp; Partnerships.
              </h1>
              <p className="text-base text-slate leading-relaxed">
                Reach out to book a workshop, collaborate on research, or share a scam pattern worth investigating.
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Grid */}
        <Section variant="white" spacing="default">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="rounded-card border border-mint-border bg-offwhite p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-navy tracking-tight mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-sm text-slate mb-8">
                    Share a few details about your enquiry or collaboration idea. We typically reply within two business days.
                  </p>
                  <ContactForm />
                </div>
              </div>

              {/* Information Column — clean hairline sections, no nested boxes */}
              <div className="lg:col-span-5 space-y-8">
                <div className="border-t-2 border-navy pt-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-navy font-bold text-sm">
                    <Mail className="w-4 h-4 text-teal" />
                    <span>Email</span>
                  </div>
                  <a
                    href="mailto:unhackable.humans@gmail.com"
                    className="block text-base font-semibold text-teal hover:text-teal-deep transition-colors break-all"
                  >
                    unhackable.humans@gmail.com
                  </a>
                  <p className="text-xs text-slate leading-relaxed">
                    For workshops, press, research collaboration, and institutional partnerships.
                  </p>
                </div>

                <div className="border-t border-mint-border pt-6 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    Official Channels
                  </h3>
                  <ul className="divide-y divide-mint-border/70 text-sm">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/unhackable-humans?trk=public_post_feed-actor-name"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 text-navy hover:text-teal transition-colors"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Linkedin className="w-4 h-4 text-teal" />
                          <span>LinkedIn</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/unhackable_humans/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 text-navy hover:text-teal transition-colors"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Instagram className="w-4 h-4 text-teal" />
                          <span>Instagram (@unhackable_humans)</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@RahiShah_02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 text-navy hover:text-teal transition-colors"
                      >
                        <span className="flex items-center gap-2.5 font-medium">
                          <Youtube className="w-4 h-4 text-teal" />
                          <span>YouTube (@RahiShah_02)</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-mint-border pt-6 space-y-2">
                  <div className="flex items-center gap-2 text-navy font-bold text-sm">
                    <MapPin className="w-4 h-4 text-teal" />
                    <span>Locations &amp; Chapters</span>
                  </div>
                  <p className="text-xs text-slate">
                    [PLACEHOLDER: Official Registered Office &amp; Operational Nodes]
                  </p>
                  <p className="text-xs text-slate leading-relaxed">
                    Workshops and annual field investigations run across partner academic campuses and local communities.
                  </p>
                </div>

                <div className="border-t border-mint-border pt-6 space-y-1.5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep">
                    Privacy commitment
                  </h3>
                  <p className="text-xs text-slate leading-relaxed">
                    We never sell, rent, or share your contact details with third parties.
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
