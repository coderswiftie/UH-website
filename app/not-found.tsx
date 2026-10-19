import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Home, Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 bg-offwhite">
        <Container size="narrow">
          <div className="rounded-card border border-mint-border bg-white p-8 md:p-12 text-center shadow-card space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center mx-auto text-teal">
              <Compass className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
                404 Error · Page Not Found
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                This path does not exist.
              </h1>
              <p className="text-sm sm:text-base text-slate leading-relaxed max-w-md mx-auto">
                The resource or investigation you are looking for has been moved, renamed, or is currently under revision.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <Link
                href="/scam-library"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-offwhite text-navy border border-mint-border font-semibold text-sm hover:bg-mint transition-all"
              >
                <Search className="w-4 h-4 text-teal" />
                <span>Browse Scam Library</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
