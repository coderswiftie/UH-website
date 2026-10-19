"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Condition, Device, Recommendation } from "@/lib/recommendation/types";
import { getRecommendation } from "@/lib/recommendation/engine";
import { ProgressBar } from "./ProgressBar";
import { DeviceCard } from "./DeviceCard";
import { ConditionOption } from "./ConditionOption";
import { RecommendationCard } from "./RecommendationCard";
import { NearbyOptionsStub } from "./NearbyOptionsStub";

const DEVICES: { id: Device; label: string; description: string }[] = [
  { id: "phone", label: "Smartphone", description: "iOS, Android, or feature phone" },
  { id: "tablet", label: "Tablet", description: "iPad, Android tablet, or e-reader" },
  { id: "laptop", label: "Laptop", description: "MacBook, Windows, or Chromebook" },
  { id: "charger", label: "Charger / Cable", description: "Power bricks, charging cables, adapters" },
  { id: "other", label: "Other Electronics", description: "Audio gear, accessories, smart home" },
];

const CONDITIONS: { id: Condition; label: string; description: string }[] = [
  {
    id: "working",
    label: "Working normally",
    description: "Everything works as expected with normal performance.",
  },
  {
    id: "partial",
    label: "Partially working",
    description: "The device works, but some features, ports, or components do not.",
  },
  {
    id: "damaged",
    label: "Damaged",
    description: "Physical damage (cracked screen, dents, water exposure) but may power on.",
  },
  {
    id: "not_working",
    label: "Not working",
    description: "The device does not turn on or function at all.",
  },
  {
    id: "old_unused",
    label: "Very old or unused",
    description: "Outdated, forgotten in a drawer, or no longer needed.",
  },
];

export function DigitalExitFlow() {
  // Step 1: Device, Step 2: Condition, Step 3: Result, Step 4: Nearby Stub
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("Step 1 of 3: Select your device");

  const handleDeviceSelect = (dev: Device) => {
    setSelectedDevice(dev);
  };

  const handleConditionSelect = (cond: Condition) => {
    setSelectedCondition(cond);
  };

  const handleGoToCondition = () => {
    if (!selectedDevice) return;
    setStep(2);
    setStatusMessage("Step 2 of 3: Select device condition");
  };

  const handleBackToDevice = () => {
    setStep(1);
    setStatusMessage("Step 1 of 3: Select your device. Previous selection preserved.");
  };

  const handleComputeRecommendation = () => {
    if (!selectedDevice || !selectedCondition) return;
    try {
      const rec = getRecommendation(selectedDevice, selectedCondition);
      setRecommendation(rec);
      setStep(3);
      setStatusMessage(`Step 3 of 3: Recommendation generated: ${rec.headline}`);
    } catch (err) {
      console.error("Engine evaluation error:", err);
    }
  };

  const handleBackToCondition = () => {
    setStep(2);
    setStatusMessage("Step 2 of 3: Select device condition. Previous selection preserved.");
  };

  const handleReset = () => {
    setSelectedDevice(null);
    setSelectedCondition(null);
    setRecommendation(null);
    setStep(1);
    setStatusMessage("Flow reset. Step 1 of 3: Select your device.");
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-6 md:py-10">
      {/* Live region for accessibility updates (§6) */}
      <div className="sr-only" aria-live="polite" role="status">
        {statusMessage}
      </div>

      {step <= 3 && (
        <ProgressBar
          currentStep={step}
          totalSteps={3}
          stepLabels={["Select Device", "Select Condition", "Recommendation"]}
        />
      )}

      {/* STEP 1: DEVICE SELECTION */}
      {step === 1 && (
        <section aria-labelledby="step-1-heading" className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Step 1 of 3
            </span>
            <h1 id="step-1-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              What device do you have?
            </h1>
            <p className="text-sm text-slate">
              Select the category that best matches your hardware to receive tailored safety steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {DEVICES.map((d) => (
              <DeviceCard
                key={d.id}
                device={d.id}
                label={d.label}
                description={d.description}
                isSelected={selectedDevice === d.id}
                onSelect={handleDeviceSelect}
              />
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-mint-border">
            <Link
              href="/digital-exit"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Cancel</span>
            </Link>

            <button
              type="button"
              disabled={!selectedDevice}
              onClick={handleGoToCondition}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-btn font-medium text-sm transition-all duration-200 ${
                selectedDevice
                  ? "bg-teal hover:bg-teal-deep text-white shadow-sm hover:-translate-y-0.5"
                  : "bg-slate/10 text-slate/40 cursor-not-allowed"
              }`}
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* STEP 2: CONDITION SELECTION */}
      {step === 2 && (
        <section aria-labelledby="step-2-heading" className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Step 2 of 3
            </span>
            <h1 id="step-2-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              What condition is it in?
            </h1>
            <p className="text-sm text-slate">
              Assess its current state honestly so we can recommend repair, donation, or recycling.
            </p>
          </div>

          <div className="space-y-3">
            {CONDITIONS.map((c) => (
              <ConditionOption
                key={c.id}
                condition={c.id}
                label={c.label}
                description={c.description}
                isSelected={selectedCondition === c.id}
                onSelect={handleConditionSelect}
              />
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-mint-border">
            <button
              type="button"
              onClick={handleBackToDevice}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back (Device)</span>
            </button>

            <button
              type="button"
              disabled={!selectedCondition}
              onClick={handleComputeRecommendation}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-btn font-medium text-sm transition-all duration-200 ${
                selectedCondition
                  ? "bg-teal hover:bg-teal-deep text-white shadow-sm hover:-translate-y-0.5"
                  : "bg-slate/10 text-slate/40 cursor-not-allowed"
              }`}
            >
              <span>View Recommendation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* STEP 3: RECOMMENDATION RESULT */}
      {step === 3 && recommendation && selectedDevice && selectedCondition && (
        <section aria-labelledby="step-3-heading" className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleBackToCondition}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Change Condition</span>
            </button>
            <span className="text-xs text-slate">Step 3 of 3</span>
          </div>

          <RecommendationCard
            device={selectedDevice}
            condition={selectedCondition}
            recommendation={recommendation}
            onFindNearby={() => setStep(4)}
            onReset={handleReset}
          />
        </section>
      )}

      {/* SCREEN 5: NEARBY OPTIONS STUB */}
      {step === 4 && (
        <NearbyOptionsStub onBack={() => setStep(3)} />
      )}
    </div>
  );
}
