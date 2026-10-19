"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Filter, Search, Tag, X } from "lucide-react";
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
          const matchesTitle = scam.title.toLowerCase().includes(q);
          const matchesStory = scam.story.toLowerCase().includes(q);
          const matchesPsychology = scam.psychology.toLowerCase().includes(q);
          const matchesTags = scam.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchesTitle && !matchesStory && !matchesPsychology && !matchesTags) {
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

        {/* Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedScams.map((scam) => (
            <div
              key={scam.slug}
              className="p-6 rounded-card border border-mint-border bg-white flex flex-col justify-between shadow-subtle hover:border-teal/40 hover:shadow-card transition-all"
            >
              <div className="space-y-3">
                {/* Visual Placeholder */}
                <div className="aspect-[16/9] rounded-lg bg-offwhite border border-dashed border-slate/20 flex items-center justify-center p-3 text-center">
                  <span className="font-mono text-[10px] uppercase font-semibold text-slate">
                    [PLACEHOLDER: Case Visual]
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate">
                  <span className="font-semibold text-teal-deep bg-mint px-2 py-0.5 rounded text-[11px]">
                    {scam.category}
                  </span>
                  <span className="text-[11px]">{scam.publicationDate}</span>
                </div>

                <h3 className="text-lg font-bold text-navy tracking-tight leading-snug">
                  {scam.title}
                </h3>

                <p className="text-xs text-slate leading-relaxed line-clamp-3">
                  {scam.story}
                </p>

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

              <div className="pt-4 mt-4 border-t border-mint-border/60">
                <Link
                  href={`/scam-library/${scam.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>Deconstruct Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
