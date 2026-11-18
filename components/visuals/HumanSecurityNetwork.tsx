"use client";

import React, { useEffect, useRef, useState } from "react";

export type NetworkStage = "hero" | "problem" | "decode" | "educate" | "intervene";

interface NodeItem {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  type: "human" | "digital" | "trigger" | "action";
  triggerName?: "URGENCY" | "FEAR" | "TRUST" | "AUTHORITY" | "GREED" | "CURIOSITY";
  triggerColor?: string;
  pulsePhase: number;
  // Morph targets for structured stages
  targetX?: number;
  targetY?: number;
}

interface Packet {
  sourceIdx: number;
  targetIdx: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
}

interface HumanSecurityNetworkProps {
  className?: string;
  activeStage?: NetworkStage;
  // If true, automatically detects active stage based on scroll position / section IDs
  autoScrollStage?: boolean;
  interactive?: boolean;
}

const TRIGGER_CONFIGS: { name: NodeItem["triggerName"]; color: string }[] = [
  { name: "URGENCY", color: "rgba(217, 119, 6, 0.85)" },
  { name: "FEAR", color: "rgba(225, 29, 72, 0.85)" },
  { name: "TRUST", color: "rgba(27, 127, 121, 0.85)" },
  { name: "AUTHORITY", color: "rgba(67, 56, 202, 0.85)" },
  { name: "GREED", color: "rgba(197, 155, 69, 0.85)" },
  { name: "CURIOSITY", color: "rgba(13, 148, 136, 0.85)" },
];

export function HumanSecurityNetwork({
  className = "",
  activeStage: controlledStage,
  autoScrollStage = true,
  interactive = true,
}: HumanSecurityNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentStage, setCurrentStage] = useState<NetworkStage>(controlledStage || "hero");

  // Keep state synced if controlled from outside
  useEffect(() => {
    if (controlledStage) {
      setCurrentStage(controlledStage);
    }
  }, [controlledStage]);

  // Scroll stage detection
  useEffect(() => {
    if (!autoScrollStage || controlledStage) return;

    const determineStageFromScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check section element positions
      const heroEl = document.getElementById("hero-section");
      const problemEl = document.getElementById("problem-section");
      const pillarsEl = document.getElementById("pillars-section");

      if (pillarsEl) {
        const pillarsRect = pillarsEl.getBoundingClientRect();
        // If inside pillars section, subdivide into decode, educate, intervene
        if (pillarsRect.top <= windowHeight * 0.5 && pillarsRect.bottom >= windowHeight * 0.2) {
          const progressInPillars = Math.max(
            0,
            Math.min(1, (windowHeight * 0.5 - pillarsRect.top) / pillarsRect.height)
          );
          if (progressInPillars < 0.35) {
            setCurrentStage("decode");
          } else if (progressInPillars < 0.7) {
            setCurrentStage("educate");
          } else {
            setCurrentStage("intervene");
          }
          return;
        }
      }

      if (problemEl) {
        const problemRect = problemEl.getBoundingClientRect();
        if (problemRect.top <= windowHeight * 0.6 && problemRect.bottom >= windowHeight * 0.2) {
          setCurrentStage("problem");
          return;
        }
      }

      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        if (heroRect.bottom >= windowHeight * 0.3) {
          setCurrentStage("hero");
          return;
        }
      }

      // Default fallback based on viewport scroll ratio
      if (scrollY < windowHeight * 0.7) {
        setCurrentStage("hero");
      } else if (scrollY < windowHeight * 1.8) {
        setCurrentStage("problem");
      } else if (scrollY < windowHeight * 2.6) {
        setCurrentStage("decode");
      } else if (scrollY < windowHeight * 3.4) {
        setCurrentStage("educate");
      } else {
        setCurrentStage("intervene");
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineStageFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    determineStageFromScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoScrollStage, controlledStage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.offsetWidth || window.innerWidth;
      height = parent?.offsetHeight || 650;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 18 : 34;
    const nodes: NodeItem[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isTrigger = i < TRIGGER_CONFIGS.length;
      const type: NodeItem["type"] = isTrigger ? "trigger" : i % 3 === 0 ? "digital" : "human";

      nodes.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.28),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.28),
        baseRadius: isTrigger ? 3.5 : Math.random() * 1.5 + 1.8,
        type,
        triggerName: isTrigger ? TRIGGER_CONFIGS[i].name : undefined,
        triggerColor: isTrigger ? TRIGGER_CONFIGS[i].color : undefined,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Active signal packets traveling between nodes
    const packets: Packet[] = [];
    const maxPackets = isMobile ? 3 : 7;

    const spawnPacket = () => {
      if (packets.length >= maxPackets || nodes.length < 2) return;
      const src = Math.floor(Math.random() * nodes.length);
      let dst = Math.floor(Math.random() * nodes.length);
      while (dst === src) {
        dst = Math.floor(Math.random() * nodes.length);
      }
      const dist = Math.hypot(nodes[src].x - nodes[dst].x, nodes[src].y - nodes[dst].y);
      if (dist < 180) {
        packets.push({
          sourceIdx: src,
          targetIdx: dst,
          progress: 0,
          speed: 0.008 + Math.random() * 0.008,
          color: nodes[src].triggerColor || "rgba(27, 127, 121, 0.75)",
        });
      }
    };

    // Mouse influence
    const mouse = { x: -2000, y: -2000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Intersection Observer to pause rendering when canvas is completely offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId && !reducedMotion) {
        render();
      }
    });
    observer.observe(canvas);

    // Compute targets for structured formations based on currentStage
    const updateTargetPositions = (stage: NetworkStage) => {
      const cx = width * 0.5;
      const cy = height * 0.5;

      if (stage === "hero" || stage === "problem") {
        // Organic natural drift; target is unset
        nodes.forEach((n) => {
          n.targetX = undefined;
          n.targetY = undefined;
        });
      } else if (stage === "decode") {
        // Decode: Cluster into 3 analytical clusters (Investigation quadrants)
        const clusterCenters = [
          { x: width * 0.28, y: height * 0.45 },
          { x: width * 0.52, y: height * 0.55 },
          { x: width * 0.75, y: height * 0.42 },
        ];
        nodes.forEach((n, idx) => {
          const c = clusterCenters[idx % clusterCenters.length];
          const angle = (idx / nodes.length) * Math.PI * 2;
          const r = 25 + ((idx * 17) % 70);
          n.targetX = c.x + Math.cos(angle) * r;
          n.targetY = c.y + Math.sin(angle) * r;
        });
      } else if (stage === "educate") {
        // Educate: Harmonious concentric alignment / coherent wave lattice
        nodes.forEach((n, idx) => {
          const row = idx % 5;
          const col = Math.floor(idx / 5);
          const totalCols = Math.ceil(nodes.length / 5);
          const spacingX = Math.min(width * 0.8, 700) / totalCols;
          const spacingY = 55;
          const startX = (width - totalCols * spacingX) * 0.5;
          const startY = (height - 5 * spacingY) * 0.5;
          n.targetX = startX + col * spacingX + Math.sin(row + idx * 0.4) * 15;
          n.targetY = startY + row * spacingY;
        });
      } else if (stage === "intervene") {
        // Intervene: Resilient protective hexagonal lattice / mesh
        const hexRadius = isMobile ? 38 : 55;
        const cols = isMobile ? 4 : 7;
        const startX = (width - cols * hexRadius * 1.5) * 0.5;
        const startY = height * 0.25;

        nodes.forEach((n, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const offsetX = row % 2 === 1 ? (hexRadius * 1.5) / 2 : 0;
          n.targetX = startX + col * (hexRadius * 1.5) + offsetX;
          n.targetY = startY + row * (hexRadius * 0.86);
        });
      }
    };

    let previousStage = currentStage;
    updateTargetPositions(currentStage);

    // Draw background subtle architectural grid marks
    const drawGridMarks = () => {
      const step = isMobile ? 120 : 160;
      ctx.strokeStyle = "rgba(18, 38, 58, 0.035)";
      ctx.lineWidth = 1;

      for (let x = step / 2; x < width; x += step) {
        for (let y = step / 2; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(x - 3, y);
          ctx.lineTo(x + 3, y);
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x, y + 3);
          ctx.stroke();
        }
      }
    };

    const render = () => {
      if (!isVisible) return;

      // Detect stage change
      if (previousStage !== currentStage) {
        previousStage = currentStage;
        updateTargetPositions(currentStage);
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle architectural crosshairs
      drawGridMarks();

      // Occasionally spawn packet
      if (!reducedMotion && Math.random() < 0.05) {
        spawnPacket();
      }

      const maxDistance =
        currentStage === "intervene" ? (isMobile ? 70 : 95) : isMobile ? 95 : 140;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.pulsePhase += 0.02;

        if (!reducedMotion) {
          if (a.targetX !== undefined && a.targetY !== undefined) {
            // Smooth lerp to target structure
            a.x += (a.targetX - a.x) * 0.045;
            a.y += (a.targetY - a.y) * 0.045;
          } else {
            // Free organic motion
            a.x += a.vx;
            a.y += a.vy;

            if (a.x < 15 || a.x > width - 15) a.vx *= -1;
            if (a.y < 15 || a.y > height - 15) a.vy *= -1;
          }

          // Gentle mouse proximity repulsion
          if (mouse.active) {
            const dx = a.x - mouse.x;
            const dy = a.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 110 && dist > 0) {
              const force = (110 - dist) / 110;
              a.x += (dx / dist) * force * 1.5;
              a.y += (dy / dist) * force * 1.5;
            }
          }
        }

        // Draw connections to neighbor nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < maxDistance) {
            let alpha = (1 - dist / maxDistance) * 0.09;
            let strokeColor = `rgba(27, 127, 121, ${alpha})`;

            // Stage-specific connection styling
            if (currentStage === "problem" && (a.type === "trigger" || b.type === "trigger")) {
              alpha = (1 - dist / maxDistance) * 0.18;
              strokeColor = a.triggerColor || b.triggerColor || `rgba(217, 119, 6, ${alpha})`;
            } else if (currentStage === "intervene") {
              alpha = (1 - dist / maxDistance) * 0.14;
              strokeColor = `rgba(20, 92, 88, ${alpha})`;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = currentStage === "intervene" ? 1.2 : 1;
            ctx.stroke();
          }
        }
      }

      // Draw active packets
      if (!reducedMotion) {
        for (let pIdx = packets.length - 1; pIdx >= 0; pIdx--) {
          const p = packets[pIdx];
          p.progress += p.speed;

          if (p.progress >= 1) {
            packets.splice(pIdx, 1);
            continue;
          }

          const src = nodes[p.sourceIdx];
          const dst = nodes[p.targetIdx];
          if (!src || !dst) continue;

          const px = src.x + (dst.x - src.x) * p.progress;
          const py = src.y + (dst.y - src.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isProblemStage = currentStage === "problem";
        const isHighlight = isProblemStage && n.type === "trigger";
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5;

        // Node circle
        ctx.beginPath();
        const r = isHighlight ? n.baseRadius + pulse * 1.5 : n.baseRadius;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);

        if (isHighlight && n.triggerColor) {
          ctx.fillStyle = n.triggerColor;
          ctx.shadowColor = n.triggerColor;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Outer halo for highlighted triggers
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = n.triggerColor.replace("0.85", "0.08");
          ctx.fill();

          // Label
          if (n.triggerName && width > 480) {
            ctx.font = "bold 9px ui-monospace, SFMono-Regular, monospace";
            ctx.fillStyle = n.triggerColor;
            ctx.fillText(n.triggerName, n.x + 8, n.y - 6);

            // Tiny lead line
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n.x + 5, n.y - 5);
            ctx.strokeStyle = n.triggerColor.replace("0.85", "0.35");
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else {
          // Standard node
          ctx.fillStyle =
            n.type === "human"
              ? "rgba(18, 38, 58, 0.28)"
              : "rgba(27, 127, 121, 0.35)";
          ctx.fill();

          // Delicate halo
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(27, 127, 121, 0.04)";
          ctx.fill();
        }

        // Decode stage analytical brackets
        if (currentStage === "decode" && i % 4 === 0) {
          ctx.strokeStyle = "rgba(27, 127, 121, 0.25)";
          ctx.lineWidth = 1;
          const s = 8;
          ctx.strokeRect(n.x - s, n.y - s, s * 2, s * 2);
        }
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentStage]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
