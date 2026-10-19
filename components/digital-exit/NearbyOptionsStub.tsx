"use client";

import React, { useState } from "react";
import { ArrowLeft, Clock, Filter, Info, MapPin, Search } from "lucide-react";

interface NearbyOptionsStubProps {
  onBack: () => void;
}

type DestinationType = "repair" | "reuse_donation" | "tradein" | "recycling";

export function NearbyOptionsStub({ onBack }: NearbyOptionsStubProps) {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<DestinationType>("recycling");
  const [searched, setSearched] = useState(false);

  const chips: { id: DestinationType; label: string }[] = [
    { id: "repair", label: "Repair" },
    { id: "reuse_donation", label: "Reuse or donation" },
    { id: "tradein", label: "Trade-in" },
    { id: "recycling", label: "Recycling" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="w-full bg-white rounded-card border border-mint-border shadow-elevated p-6 md:p-8 space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-mint-border/80 pb-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate hover:text-navy transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Recommendation</span>
        </button>

        <span className="text-xs uppercase tracking-wider font-semibold text-teal bg-mint px-2.5 py-1 rounded-full">
          Screen 5 · Facility Directory
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-navy tracking-tight">
          Find Local Hand-off Facilities
        </h2>
        <p className="mt-1 text-sm text-slate">
          Search for verified repair hubs, donation drives, and certified e-waste recyclers in your area.
        </p>
      </div>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="nearby-query" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">
            Enter City or Pincode
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              id="nearby-query"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearched(false);
              }}
              placeholder="e.g. 560001, Bengaluru, Mumbai, Delhi..."
              className="w-full pl-10 pr-24 py-3 rounded-lg border border-mint-border bg-offwhite text-sm text-ink placeholder:text-slate/60 focus:bg-white focus:border-teal transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-teal hover:bg-teal-deep text-white rounded-md text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              Search
            </button>
          </div>
        </div>

        {/* Destination Type Filter Chips */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">
            Select Destination Type
          </span>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Destination types">
            {chips.map((chip) => {
              const active = selectedType === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelectedType(chip.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                    active
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-offwhite text-slate border-mint-border hover:border-slate/40 hover:text-navy"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </form>

      {/* Honest Limitation Stub State (per §4.2 Screen 5 & §7 rule: no fake data) */}
      <div className="rounded-xl border border-mint-border bg-mint/30 p-5 space-y-3">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-teal shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-semibold text-navy text-sm">
              Nearby Facility Directory Coming Soon
            </h3>
            <p className="text-xs text-slate leading-relaxed">
              We are actively vetting and mapping municipal collection points, certified recyclers, and community repair centres across pilot regions. In accordance with UH integrity standards, we do not show simulated or unverified locations.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-3.5 border border-mint-border/80 text-xs text-ink space-y-2">
          <div className="flex items-center gap-2 font-medium text-navy">
            <Info className="w-4 h-4 text-teal shrink-0" />
            <span>Recommended immediate local steps:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate pl-1">
            <li>Search your local municipal corporation or state pollution control board website for authorized e-waste collection bins.</li>
            <li>Consult official manufacturer take-back or trade-in portals (e.g. Apple Trade In, Google Store, or brand service centres).</li>
            <li>Inquire with local non-profits or community schools about tech donation drives.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
