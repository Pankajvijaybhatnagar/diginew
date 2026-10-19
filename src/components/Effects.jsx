"use client";

import { useEffect } from "react";

// Global pointer effects: cursor spotlight on `.card` / `[data-spotlight]`
// and 3D tilt on `[data-tilt]`. One listener for the whole site.
export default function Effects() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    let tilted = null;

    const reset = (el) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMove = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      const spot = target?.closest(".card, [data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      if (reduced) return;
      const tilt = target?.closest("[data-tilt]");
      if (tilted && tilted !== tilt) reset(tilted);
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--rx", `${(-py * 8).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
      }
    };

    const onLeave = () => {
      if (tilted) reset(tilted);
      tilted = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
