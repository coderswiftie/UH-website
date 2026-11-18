"use client";

import React from "react";
import Image from "next/image";
import { RefreshCw, Shield, Users } from "lucide-react";

interface ProjectSchematicProps {
  projectId: string;
  media?: string;
  title?: string;
  className?: string;
}

export function ProjectSchematic({
  projectId,
  media,
  title,
  className = "",
}: ProjectSchematicProps) {
  if (media) {
    return (
      <div
        className={`relative aspect-square w-full rounded-xl overflow-hidden bg-[#0c0718] border border-mint-border/70 shadow-subtle select-none ${className}`}
      >
        <Image
          src={media}
          alt={title ? `${title} media graphic` : `${projectId} media graphic`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  switch (projectId) {
    case "scam-intelligence":
      return (
        <div className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-navy-dark via-navy to-[#1a3854] p-5 text-white flex flex-col justify-between relative overflow-hidden select-none ${className}`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1B7F79_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal-light font-bold">
                FORENSIC DOSSIER // DECONSTRUCTED
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
              TACTIC MAP
            </span>
          </div>

          {/* Schematic Diagram */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center text-center">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 space-y-1">
              <span className="text-[9px] font-mono text-amber-400 font-bold block">STAGE 01</span>
              <span className="text-[11px] font-semibold text-white/90 block">Emotional Lever</span>
              <span className="text-[9px] text-white/50 block">Urgency / Panic</span>
            </div>
            
            <div className="flex items-center justify-center text-teal-light">
              <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 to-teal-light relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/60">
                  REVEAL
                </span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-teal/20 border border-teal/40 space-y-1">
              <span className="text-[9px] font-mono text-teal-light font-bold block">PAUSE POINT</span>
              <span className="text-[11px] font-semibold text-white block">Exit Verification</span>
              <span className="text-[9px] text-teal-light/80 block">Judgment Restored</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 border-t border-white/10 pt-2">
            <span>METHOD: REVERSE-ENGINEERING</span>
            <span className="text-teal-light">OPEN ARCHIVE</span>
          </div>
        </div>
      );

    case "workshops":
      return (
        <div className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-[#145C58] via-teal to-[#1B7F79] p-5 text-white flex flex-col justify-between relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-white/90" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
                COMMUNITY LAB // INTERACTIVE
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white">
              SCENARIO SIMULATION
            </span>
          </div>

          {/* Workshop Matrix */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto text-center">
            <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
              <span className="text-[10px] font-mono text-white/70 block">SIMULATE</span>
              <span className="text-xs font-bold text-white block mt-0.5">Real Incidents</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/15 border border-white/20 shadow-inner">
              <span className="text-[10px] font-mono text-white/70 block">PRACTICE</span>
              <span className="text-xs font-bold text-white block mt-0.5">Cognitive Pause</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
              <span className="text-[10px] font-mono text-white/70 block">INTERNALIZE</span>
              <span className="text-xs font-bold text-white block mt-0.5">Safe Reflexes</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/70 border-t border-white/15 pt-2">
            <span>SAFE SPACE • ZERO SHAME</span>
            <span>COMMUNITY LITERACY</span>
          </div>
        </div>
      );

    case "invisible-devices":
      return (
        <div className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-[#0c2033] via-navy to-[#142e47] p-5 text-white flex flex-col justify-between relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#229c95_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-teal-light" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal-light font-bold">
                HARDWARE CIRCULARITY // PATHWAY
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
              DIGITAL EXIT
            </span>
          </div>

          {/* 4 Steps circular flow */}
          <div className="relative z-10 grid grid-cols-4 gap-1.5 my-auto text-center">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-teal-light font-bold block">01 WIPE</span>
              <span className="text-[10px] text-white/90 font-medium block">Data Sanitize</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-teal-light font-bold block">02 REPAIR</span>
              <span className="text-[10px] text-white/90 font-medium block">Extend Life</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-teal-light font-bold block">03 REUSE</span>
              <span className="text-[10px] text-white/90 font-medium block">Donate/Share</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-teal-light font-bold block">04 RECYCLE</span>
              <span className="text-[10px] text-white/90 font-medium block">Certified E-waste</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 border-t border-white/10 pt-2">
            <span>RULE-BASED SANITIZATION</span>
            <span className="text-teal-light">ZERO RAW MINERAL WASTE</span>
          </div>
        </div>
      );

    case "future-interventions":
    default:
      return (
        <div className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-[#12263A] via-[#1b344d] to-[#14283b] p-5 text-white flex flex-col justify-between relative overflow-hidden select-none ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#4338CA_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
                SYNTHETIC DEFENSE // RESEARCH
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              IN DEVELOPMENT
            </span>
          </div>

          {/* Future Defense Architecture */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto text-center">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-indigo-300 font-bold block">SYNTHETIC VOICE</span>
              <span className="text-[10px] text-white/90 font-medium block">Cloning Detection</span>
            </div>
            <div className="p-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30">
              <span className="text-[9px] font-mono text-indigo-300 font-bold block">HOUSEHOLD CODE</span>
              <span className="text-[10px] text-white font-semibold block">Family Safe Word</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[9px] font-mono text-indigo-300 font-bold block">BEHAVIORAL PAUSE</span>
              <span className="text-[10px] text-white/90 font-medium block">Friction Protocols</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 border-t border-white/10 pt-2">
            <span>RESEARCH PROTOTYPE</span>
            <span className="text-indigo-300">EMERGING THREATS</span>
          </div>
        </div>
      );
  }
}
