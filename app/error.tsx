"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled client error captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-6">
      <Container size="narrow">
        <div className="rounded-card border border-red-200 bg-white p-8 md:p-12 text-center shadow-card space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto text-red-600">
            <AlertCircle className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
              Application Error
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Something went wrong.
            </h1>
            <p className="text-sm text-slate leading-relaxed max-w-md mx-auto">
              An unexpected error occurred while rendering this interface. No personal data was exposed.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-btn bg-offwhite text-navy border border-mint-border font-semibold text-sm hover:bg-mint transition-all"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
