"use client";

import React from "react";
import { HumanSecurityNetwork } from "../visuals/HumanSecurityNetwork";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <HumanSecurityNetwork className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-offwhite pointer-events-none" />
    </div>
  );
}
