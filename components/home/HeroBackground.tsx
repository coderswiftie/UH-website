"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
}

const LABELS = ["TRUST", "FEAR", "URGENCY", "AUTHORITY", "CURIOSITY"];

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Responsive sizing
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 12 : 22;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.35),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.35),
        radius: Math.random() * 1.5 + 1.5,
        label: i < LABELS.length ? LABELS[i] : undefined,
      });
    }

    // Mouse influence
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId && !reducedMotion) {
        render();
      }
    });
    observer.observe(canvas);

    // Draw grid ticks
    const drawGridMarks = () => {
      const step = isMobile ? 120 : 160;
      ctx.strokeStyle = "rgba(18, 38, 58, 0.04)";
      ctx.lineWidth = 1;

      for (let x = step / 2; x < width; x += step) {
        for (let y = step / 2; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
          ctx.stroke();
        }
      }
    };

    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw faint architectural crosshairs
      drawGridMarks();

      // Update and draw connections
      const maxDistance = isMobile ? 90 : 130;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (!reducedMotion) {
          a.x += a.vx;
          a.y += a.vy;

          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;

          // Mouse gentle push
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            a.x += (dx / dist) * 0.4;
            a.y += (dy / dist) * 0.4;
          }
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(27, 127, 121, 0.28)";
        ctx.fill();

        // Draw node pulse halo
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(27, 127, 121, 0.05)";
        ctx.fill();

        // Draw floating psychological labels
        if (a.label) {
          ctx.font = "600 10px monospace";
          ctx.fillStyle = "rgba(20, 92, 88, 0.28)";
          ctx.fillText(a.label, a.x + 8, a.y - 6);

          // Tiny pointer line
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(a.x + 6, a.y - 6);
          ctx.strokeStyle = "rgba(27, 127, 121, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw lines to neighbor nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(27, 127, 121, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
