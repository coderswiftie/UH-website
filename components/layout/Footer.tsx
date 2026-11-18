import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Youtube, Instagram, Linkedin } from "lucide-react";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="w-full bg-navy text-white pt-16 pb-12 border-t border-navy-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group select-none"
            >
              <Image
                src="/images/uh-emblem.png"
                alt="Unhackable Humans"
                width={34}
                height={36}
                className="w-8 h-8 object-contain shrink-0"
              />
              <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-teal-light transition-colors">
                Unhackable Humans
              </span>
            </Link>
            <p className="text-sm font-medium text-teal-light">
              Minds over Manipulation
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Building human security by decoding manipulation, studying real-world scams, and helping people make safer everyday decisions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Explore
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/scam-library"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Scam Library
                </Link>
              </li>
              <li>
                <Link
                  href="/invisible-devices"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Invisible Devices
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-exit"
                  className="text-teal-light font-medium hover:underline inline-flex items-center gap-1"
                >
                  Digital Exit <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiative */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Organisation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/team"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Team &amp; Founder&apos;s Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact &amp; Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Connect
            </span>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:unhackable.humans@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-teal-light transition-colors"
                title="Email Unhackable Humans"
              >
                <Mail className="w-4 h-4 text-teal-light shrink-0" />
                <span className="break-all text-xs">
                  unhackable.humans@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/company/unhackable-humans?trk=public_post_feed-actor-name"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-colors"
                  aria-label="Unhackable Humans on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/unhackable_humans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-colors"
                  aria-label="Unhackable Humans on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@RahiShah_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-teal hover:border-teal transition-colors"
                  aria-label="Unhackable Humans on YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Unhackable Humans. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>[PLACEHOLDER: Privacy Policy]</span>
            <span>[PLACEHOLDER: Terms of Use]</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
