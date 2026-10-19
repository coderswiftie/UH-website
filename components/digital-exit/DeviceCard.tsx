"use client";

import React from "react";
import { Check, Cable, Cpu, Laptop, Smartphone, Tablet } from "lucide-react";
import { Device } from "@/lib/recommendation/types";

interface DeviceCardProps {
  device: Device;
  label: string;
  description: string;
  isSelected: boolean;
  onSelect: (device: Device) => void;
}

export function DeviceCard({
  device,
  label,
  description,
  isSelected,
  onSelect,
}: DeviceCardProps) {
  const getIcon = () => {
    const iconClass = `w-7 h-7 ${isSelected ? "text-teal" : "text-slate"}`;
    switch (device) {
      case "phone":
        return <Smartphone className={iconClass} aria-hidden="true" />;
      case "tablet":
        return <Tablet className={iconClass} aria-hidden="true" />;
      case "laptop":
        return <Laptop className={iconClass} aria-hidden="true" />;
      case "charger":
        return <Cable className={iconClass} aria-hidden="true" />;
      case "other":
        return <Cpu className={iconClass} aria-hidden="true" />;
    }
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(device)}
      aria-pressed={isSelected}
      className={`relative flex flex-col items-start p-5 rounded-card text-left transition-all duration-200 border-2 w-full ${
        isSelected
          ? "border-teal bg-mint/50 shadow-card"
          : "border-mint-border/60 bg-white hover:border-slate/40 hover:bg-offwhite/50"
      }`}
    >
      <div className="flex items-center justify-between w-full mb-3">
        <div
          className={`p-2.5 rounded-lg transition-colors ${
            isSelected ? "bg-white text-teal" : "bg-offwhite text-slate"
          }`}
        >
          {getIcon()}
        </div>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
            isSelected
              ? "bg-teal border-teal text-white shadow-sm"
              : "border-slate/30 bg-white"
          }`}
          aria-hidden="true"
        >
          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </div>
      </div>

      <span className="font-semibold text-navy text-base tracking-tight mb-1">
        {label}
      </span>
      <span className="text-xs text-slate leading-relaxed">
        {description}
      </span>
    </button>
  );
}
