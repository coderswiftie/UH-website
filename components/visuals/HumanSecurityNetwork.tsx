"use client";

import React, { useEffect, useRef } from "react";

interface NodeItem {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isAccent: boolean;
}

interface HumanSecurityNetworkProps {
  className?: string;
}

/**
 * Lightweight ambient geometric network for the Hero backdrop.
 * - Zero scroll listeners, zero mousemove reflows, zero shadowBlur.
 * - Throttled to ~30fps and automatically paused when offscreen or hidden.
 */
export function HumanSecurityNetwork({
  className = "",
}: HumanSecurityNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let nodes: NodeItem[] = [];
    let isVisible = true;
    let isTabVisible = !document.hidden;
    let rafId = 0;
    let lastTime = 0;
    const FRAME_INTERVAL = 33; // ~30fps for calm, low-CPU drift

    const initNodes = () => {
      const isMobile = width < 768;
      const count = isMobile ? 12 : 22;
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: i % 4 === 0 ? 2.6 : 1.7,
        isAccent: i % 3 === 0,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const nextWidth = parent?.offsetWidth || window.innerWidth;
      const nextHeight = parent?.offsetHeight || 560;
      if (nextWidth === width && nextHeight === height) return;

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodes.length === 0) {
        initNodes();
      } else {
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].x > width) nodes[i].x = Math.random() * width;
          if (nodes[i].y > height) nodes[i].y = Math.random() * height;
        }
      }

      drawFrame(false);
    };

    const drawFrame = (advance: boolean) => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = width < 768 ? 110 : 155;
      const maxDistSq = maxDist * maxDist;

      if (advance) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 12 || n.x > width - 12) n.vx *= -1;
          if (n.y < 12 || n.y > height - 12) n.vy *= -1;
        }
      }

      // Draw subtle connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.1;
            ctx.strokeStyle = `rgba(27, 127, 121, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.fillStyle = n.isAccent
          ? "rgba(27, 127, 121, 0.34)"
          : "rgba(18, 38, 58, 0.2)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (!isVisible || !isTabVisible) {
        rafId = 0;
        return;
      }

      if (now - lastTime >= FRAME_INTERVAL) {
        lastTime = now;
        drawFrame(true);
      }
      rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      // Keep mobile backdrop static (1 crisp frame) for silky 60fps touch scrolling
      if (
        reducedMotion ||
        width < 768 ||
        rafId !== 0 ||
        !isVisible ||
        !isTabVisible
      ) {
        return;
      }
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    let resizeTimer: number | undefined;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) startLoop();
      else stopLoop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) startLoop();
        else stopLoop();
      },
      { threshold: 0 }
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    if (!reducedMotion) {
      startLoop();
    }

    return () => {
      stopLoop();
      window.clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
