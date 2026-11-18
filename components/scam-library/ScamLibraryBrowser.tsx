"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, Search, X } from "lucide-react";
import { ScamBreakdown } from "@/lib/content/types";

interface ScamLibraryBrowserProps {
  initialScams: ScamBreakdown[];
}

export function ScamLibraryBrowser({ initialScams }: ScamLibraryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [selectedAudience, setSelectedAudience] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Extract unique categories, tags, and audiences
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialScams.forEach((s) => set.add(s.category));
    return ["All", ...Array.from(set)];
  }, [initialScams]);

  const tags = useMemo(() => {
    const set = new Set<string>();
    initialScams.forEach((s) => s.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [initialScams]);

  const audiences = useMemo(() => {
    const set = new Set<string>();
    initialScams.forEach((s) => {
      if (s.targetAudience) set.add(s.targetAudience);
    });
    return ["All", ...Array.from(set)];
  }, [initialScams]);

  // Client-side filtering logic
  const filteredScams = useMemo(() => {
    return initialScams
      .filter((scam) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const searchableText = [
            scam.title,
            scam.category,
            scam.story,
            scam.psychology,
            scam.exitPoint,
            scam.takeaway,
            ...scam.tags,
            ...(scam.snapshotItems?.map((i) => `${i.label} ${i.value}`) || []),
            ...(scam.turningPoint?.paragraphs || []),
            ...(scam.humanHack?.paragraphs || []),
            ...(scam.missedSignal?.paragraphs || []),
            ...(scam.counterMove?.paragraphs || []),
            ...(scam.biggerInsight?.paragraphs || []),
          ]
            .join(" ")
            .toLowerCase();
          if (!searchableText.includes(q)) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== "All" && scam.category !== selectedCategory) {
          return false;
        }

        // Tag / Emotion filter
        if (selectedTag !== "All" && !scam.tags.includes(selectedTag)) {
          return false;
        }

        // Audience filter
        if (selectedAudience !== "All" && scam.targetAudience !== selectedAudience) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publicationDate).getTime();
        const dateB = new Date(b.publicationDate).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [initialScams, searchQuery, selectedCategory, selectedTag, selectedAudience, sortOrder]);

  const totalPages = Math.ceil(filteredScams.length / itemsPerPage);
  const paginatedScams = filteredScams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTag("All");
    setSelectedAudience("All");
    setSortOrder("newest");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedTag !== "All" ||
    selectedAudience !== "All";

  return (
    <div className="space-y-8">
      {/* Search Bar & Primary Controls */}
      <div className="rounded-card border border-mint-border bg-white p-5 md:p-6 shadow-subtle space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search a scam, tactic or emotion…"
            className="w-full pl-11 pr-10 py-3.5 rounded-lg border border-mint-border bg-offwhite text-sm text-ink placeholder:text-slate/60 focus:bg-white focus:border-teal transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate hover:text-navy"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Tactic Filter Chips */}
        <div className="pt-2 border-t border-mint-border/60">
          <label className="block text-[11px] font-mono uppercase tracking-wider text-slate font-bold mb-2">
            Filter by Psychological Vector:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSelectedTag(tag);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-teal text-white shadow-sm font-semibold"
                      : "bg-offwhite border border-mint-border text-slate hover:text-navy hover:bg-mint/50"
                  }`}
                >
                  {tag === "All" ? "All Vectors" : `#${tag}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-mint-border/40">
          {/* Category */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-md border border-mint-border bg-offwhite text-xs text-ink focus:border-teal"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Tactic / Emotion */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5">
              Tactic / Emotion
            </label>
            <select
              value={selectedTag}
              onChange={(e) => {
                setSelectedTag(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-md border border-mint-border bg-offwhite text-xs text-ink focus:border-teal"
            >
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5">
              Audience
            </label>
            <select
              value={selectedAudience}
              onChange={(e) => {
                setSelectedAudience(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-md border border-mint-border bg-offwhite text-xs text-ink focus:border-teal"
            >
              {audiences.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Date Sort Order */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5">
              Sort Date
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
              className="w-full px-3 py-2 rounded-md border border-mint-border bg-offwhite text-xs text-ink focus:border-teal"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-mint-border/60 text-xs">
          <div className="text-slate">
            Showing <strong className="text-navy">{filteredScams.length}</strong> case{" "}
            {filteredScams.length === 1 ? "study" : "studies"}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Results / Empty State */}
      {filteredScams.length === 0 ? (
        <div
          role="status"
          className="rounded-card border border-mint-border bg-white p-12 text-center space-y-4"
        >
          <Filter className="w-10 h-10 text-slate/40 mx-auto" />
          <h3 className="text-xl font-bold text-navy">No scam breakdowns found</h3>
          <p className="text-sm text-slate max-w-md mx-auto">
            No documented cases matched your search query or active filter combination.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-btn bg-teal text-white font-medium text-xs hover:bg-teal-deep transition-all"
          >
            Clear Filters &amp; View All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {paginatedScams.map((scam) => (
            <div
              key={scam.slug}
              className="rounded-card border border-mint-border bg-white flex flex-col justify-between shadow-subtle hover:border-teal/40 hover:shadow-card transition-all group relative overflow-hidden"
            >
              <div>
                {/* Case Visual Banner */}
                {scam.coverImage ? (
                  <Link
                    href={`/scam-library/${scam.slug}`}
                    className="block relative aspect-[16/10] w-full bg-navy-dark border-b border-mint-border/70 overflow-hidden"
                  >
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 font-mono text-[10px] font-bold text-teal-light uppercase tracking-wider px-2.5 py-1 rounded bg-navy/85 border border-white/15 backdrop-blur-sm">
                      CASE FILE // #{scam.caseNumber}
                    </span>
                  </Link>
                ) : (
                  <div className="bg-navy text-white p-4 space-y-2 border-b border-navy-dark select-none">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-teal-light uppercase tracking-wider">
                        CASE FILE // #{scam.caseNumber}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                        INVESTIGATION
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-white/70 line-clamp-1">
                      TARGET: {scam.targetAudience || "General Public"}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate">
                    <span className="font-semibold text-teal-deep bg-mint px-2.5 py-0.5 rounded text-[11px]">
                      {scam.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate/70">{scam.publicationDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy tracking-tight leading-snug group-hover:text-teal transition-colors">
                    <Link href={`/scam-library/${scam.slug}`}>{scam.title}</Link>
                  </h3>

                  <p className="text-xs text-slate leading-relaxed line-clamp-3">
                    {scam.story}
                  </p>

                  {/* Counter-Move preview highlight */}
                  <div className="p-3 rounded-lg bg-offwhite border border-mint-border/80 text-[11px] space-y-0.5">
                    <span className="font-mono text-[9px] uppercase font-bold text-teal block">
                      The Counter-Move:
                    </span>
                    <p className="text-navy/90 font-medium line-clamp-2 leading-snug">
                      {scam.exitPoint}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {scam.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-offwhite border border-mint-border font-medium text-slate"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-mint-border/60 flex items-center justify-between bg-offwhite/40">
                <Link
                  href={`/scam-library/${scam.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>Deconstruct Case</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-[10px] font-mono text-slate/60">WEEKLY CASE #{scam.caseNumber}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 rounded-md border border-mint-border text-xs font-medium text-navy disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs text-slate px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1.5 rounded-md border border-mint-border text-xs font-medium text-navy disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
