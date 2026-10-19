"use client";

import { useEffect, useRef } from "react";

// Lightweight "connected network" animation for dark hero sections.
export default function ParticleField({ className = "", density = 0.00009 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const host = canvas.parentElement;
    let w = 0;
    let h = 0;
    let frame;
    let running = true;
    let points = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(90, Math.round(w * h * density)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        orange: Math.random() < 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      const max = 130;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < max) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / max) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 170) {
          ctx.strokeStyle = `rgba(255,153,8,${(1 - md / 170) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = a.orange ? "rgba(255,153,8,0.9)" : "rgba(255,255,255,0.55)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduced) frame = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Only animate while on screen
    const io = new IntersectionObserver(([entry]) => {
      const wasRunning = running;
      running = entry.isIntersecting;
      if (running && !wasRunning && !reduced) frame = requestAnimationFrame(draw);
    });

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    host?.addEventListener("pointermove", onMove);
    host?.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("resize", resize);
      host?.removeEventListener("pointermove", onMove);
      host?.removeEventListener("pointerleave", onLeave);
    };
  }, [density]);

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}
