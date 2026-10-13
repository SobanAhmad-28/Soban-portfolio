"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  type: "dot" | "dash";
  size: number;
  length: number;
  angle: number;
  angularVelocity: number;
  depth: number; // 0.2 (far) to 1.0 (near)
  opacity: number;
  color: string;
  seed: number;
}

export default function AntigravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let isTabActive = true;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Coordinated theme colors (subtle primary indigos & cobalt blues)
    const particleColors = [
      "rgba(53, 37, 205, ",   // Primary deep indigo (#3525cd)
      "rgba(79, 70, 229, ",   // Primary container indigo (#4f46e5)
      "rgba(37, 99, 235, ",   // Vibrant cobalt blue (#2563eb)
      "rgba(99, 102, 241, ",  // Light violet-indigo (#6366f1)
      "rgba(2, 132, 199, ",   // Azure highlight (#0284c7)
    ];

    let particles: Particle[] = [];

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140, // Interaction radius in pixels
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const initParticles = (w: number, h: number) => {
      // Scale particle count based on screen real estate
      const count = w < 640 ? 35 : w < 1024 ? 65 : 110;
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const depth = 0.25 + Math.random() * 0.75; // Depth factor
        const isDash = Math.random() > 0.65; // ~35% dashes, 65% dots

        newParticles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.3 * depth,
          vy: -0.15 - Math.random() * 0.35 * depth, // Upward floating anti-gravity drift
          type: isDash ? "dash" : "dot",
          size: isDash ? 1.2 : 0.8 + depth * 1.4, // Dot radius: 0.8px - 2.2px
          length: 5 + depth * 6, // Dash length: 5px - 11px
          angle: (Math.random() * Math.PI) / 4 - Math.PI / 8, // Gentle angle
          angularVelocity: (Math.random() - 0.5) * 0.005,
          depth,
          opacity: 0.15 + depth * 0.45, // Opacity: 0.15 to 0.60
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          seed: Math.random() * 1000,
        });
      }

      particles = newParticles;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      if (!isVisible || !isTabActive) {
        return; // Skip rendering when out of viewport or tab is inactive
      }

      const elapsed = Math.min(currentTime - lastTime, 100); // Cap delta to prevent huge jumps
      lastTime = currentTime;
      const timeSec = currentTime * 0.001;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // 1. Natural Organic Floating (Anti-gravity upward drift + harmonic sine wobble)
          const wobble = Math.sin(timeSec * 0.8 + p.seed) * 0.25 * p.depth;
          p.x += (p.vx + wobble) * (elapsed / 16);
          p.y += p.vy * (elapsed / 16);

          // Wrap around viewport edges smoothly
          if (p.y < -20) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 10;
          if (p.x > width + 20) p.x = -10;

          // 2. Interactive Mouse Repulsion & Elastic Return
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0.1) {
              const force = (1 - dist / mouse.radius) * 3.5 * p.depth;
              const angle = Math.atan2(dy, dx);
              p.x += Math.cos(angle) * force;
              p.y += Math.sin(angle) * force;
            }
          }

          p.angle += p.angularVelocity;
        }

        // Draw particle
        ctx.save();
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.strokeStyle = `${p.color}${p.opacity})`;

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Subtle technical dash
          ctx.lineWidth = p.size;
          ctx.lineCap = "round";
          ctx.beginPath();
          const halfLen = p.length / 2;
          const cos = Math.cos(p.angle);
          const sin = Math.sin(p.angle);
          ctx.moveTo(p.x - cos * halfLen, p.y - sin * halfLen);
          ctx.lineTo(p.x + cos * halfLen, p.y + sin * halfLen);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause when tab is hidden to conserve GPU/CPU
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // IntersectionObserver to pause when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive) {
            lastTime = performance.now();
            animationFrameId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    resize();
    observer.observe(canvas);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial kick-off
    lastTime = performance.now();
    animationFrameId = requestAnimationFrame(render);

    // If reduced motion is requested, render one crisp frame and don't loop
    if (prefersReducedMotion) {
      cancelAnimationFrame(animationFrameId);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 h-full w-full opacity-90"
    />
  );
}
