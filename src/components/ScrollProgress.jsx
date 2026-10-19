"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
