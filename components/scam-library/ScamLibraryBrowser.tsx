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

  const filteredScams = useMemo(() => {
    return initialScams
      .filter((scam) => {
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

        if (selectedCategory !== "All" && scam.category !== selectedCategory) {
          return false;
        }

        if (selectedTag !== "All" && !scam.tags.includes(selectedTag)) {
          return false;
        }

        if (
          selectedAudience !== "All" &&
          scam.targetAudience !== selectedAudience
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publicationDate).getTime();
        const dateB = new Date(b.publicationDate).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [
    initialScams,
    searchQuery,
    selectedCategory,
    selectedTag,
    selectedAudience,
    sortOrder,
  ]);

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
    <div className="space-y-10">
      {/* Search & Filters */}
      <div className="rounded-card border border-mint-border bg-white p-5 md:p-6 space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by case, tactic, location, or keyword…"
            className="w-full pl-10 pr-10 py-3 rounded-lg border border-mint-border bg-offwhite text-sm text-ink placeholder:text-slate/60 focus:bg-white focus:border-teal transition-colors"
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

        {/* Filter by theme */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate mr-1">Filter:</span>
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
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-teal text-white"
                    : "bg-offwhite text-slate hover:text-navy hover:bg-mint/60"
                }`}
              >
                {tag === "All" ? "All Themes" : tag}
              </button>
            );
          })}
        </div>

        {/* Select controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-mint-border/70">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
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

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Theme
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

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
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

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Sort
            </label>
            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "newest" | "oldest")
              }
              className="w-full px-3 py-2 rounded-md border border-mint-border bg-offwhite text-xs text-ink focus:border-teal"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-mint-border/60 text-xs">
          <div className="text-slate">
            Showing <strong className="text-navy">{filteredScams.length}</strong>{" "}
            {filteredScams.length === 1 ? "case" : "cases"}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filteredScams.length === 0 ? (
        <div
          role="status"
          className="rounded-card border border-mint-border bg-white p-12 text-center space-y-4"
        >
          <Filter className="w-8 h-8 text-slate/40 mx-auto" />
          <h3 className="text-lg font-bold text-navy">
            No matching case breakdowns
          </h3>
          <p className="text-sm text-slate max-w-md mx-auto">
            Try clearing a filter or searching with broader keywords.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-btn bg-teal text-white font-medium text-xs hover:bg-teal-deep transition-colors"
          >
            View All Cases
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedScams.map((scam) => (
            <article
              key={scam.slug}
              className="rounded-card border border-mint-border bg-white flex flex-col justify-between overflow-hidden group hover:border-teal/40 transition-colors"
            >
              <div>
                {scam.coverImage && (
                  <Link
                    href={`/scam-library/${scam.slug}`}
                    className="block relative aspect-[16/10] w-full bg-navy-dark border-b border-mint-border/70 overflow-hidden"
                  >
                    <Image
                      src={scam.coverImage}
                      alt={scam.coverImageAlt || scam.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                )}

                <div className="p-6 space-y-3.5">
                  <p className="text-xs text-slate flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-teal-deep">
                      Case {scam.caseNumber}
                    </span>
                    <span className="text-slate/40">·</span>
                    <span>{scam.category}</span>
                    <span className="text-slate/40">·</span>
                    <span>{scam.publicationDate}</span>
                  </p>

                  <h3 className="text-lg font-bold text-navy tracking-tight leading-snug">
                    <Link
                      href={`/scam-library/${scam.slug}`}
                      className="hover:text-teal transition-colors"
                    >
                      {scam.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate leading-relaxed line-clamp-3">
                    {scam.story}
                  </p>

                  <div className="pl-3.5 border-l-2 border-teal py-0.5">
                    <span className="text-[11px] font-semibold text-teal-deep block">
                      The Counter-Move
                    </span>
                    <p className="text-xs text-navy font-medium leading-snug mt-0.5">
                      {scam.exitPoint}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-mint-border/70 flex items-center justify-between text-xs">
                <Link
                  href={`/scam-library/${scam.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-teal hover:text-teal-deep transition-colors"
                >
                  <span>Read Case Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-slate/70">
                  {scam.tags.slice(0, 2).join(" · ")}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
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
