import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Youtube, Instagram, Linkedin } from "lucide-react";
import { Container } from "../ui/Container";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-navy text-white pt-16 pb-12 border-t border-navy-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group select-none">
              <div className="relative w-9 h-9 shrink-0 transition-transform duration-200 group-hover:scale-105 opacity-90 group-hover:opacity-100">
                <Image
                  src="/images/uh-logo.svg"
                  alt="Unhackable Humans Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-teal-light transition-colors">
                Unhackable Humans
              </span>
            </Link>
            <p className="text-sm font-medium text-teal-light">
              Minds over Manipulation
            </p>
            <p className="text-sm text-slate-light leading-relaxed max-w-sm text-slate/80">
              Unhackable Humans builds human security by decoding manipulation, exposing real-world scams, and helping people make safer decisions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-light text-slate/70">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About UH
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/80 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/scam-library" className="text-white/80 hover:text-white transition-colors">
                  Scam Library
                </Link>
              </li>
              <li>
                <Link href="/invisible-devices" className="text-white/80 hover:text-white transition-colors">
                  Invisible Devices
                </Link>
              </li>
              <li>
                <Link href="/digital-exit" className="text-teal-light font-medium hover:underline inline-flex items-center gap-1">
                  Digital Exit <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Team */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-light text-slate/70">
              Initiative
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="text-white/80 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/80 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact &amp; Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column: Official Email & Social Channels */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-light text-slate/70">
              Connect
            </span>
            <div className="space-y-3 text-xs">
              <a
                href="mailto:unhackable.humans@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-teal-light transition-colors group"
                title="Send enquiry to Unhackable Humans"
              >
                <Mail className="w-3.5 h-3.5 text-teal-light shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all font-mono text-[11px]">unhackable.humans@gmail.com</span>
              </a>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-medium text-slate/80 block">
                  Official Channels:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/unhackable-humans?trk=public_post_feed-actor-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-all"
                    aria-label="Unhackable Humans on LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/unhackable_humans/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-all"
                    aria-label="Unhackable Humans on Instagram"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.youtube.com/@RahiShah_02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-all"
                    aria-label="Unhackable Humans on YouTube"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate/60">
          <p>&copy; {new Date().getFullYear()} Unhackable Humans. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">[PLACEHOLDER: Privacy Policy]</span>
            <span className="font-mono text-[11px]">[PLACEHOLDER: Terms of Use]</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
