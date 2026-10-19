"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Branded intro shown once per browser session.
export default function Preloader() {
  const [state, setState] = useState("show"); // show -> hide -> gone

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("d1x-intro") === "1";
      sessionStorage.setItem("d1x-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("gone");
      return;
    }
    const t1 = setTimeout(() => setState("hide"), 1400);
    const t2 = setTimeout(() => setState("gone"), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        state === "hide" ? "pointer-events-none -translate-y-full" : ""
      }`}
      aria-hidden="true"
    >
      <div className="page-enter">
        <Image src="/logo.png" alt="" width={854} height={458} priority className="h-28 w-auto sm:h-36" />
      </div>
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full origin-left rounded-full bg-brand-500"
          style={{ animation: "loader-bar 1.2s cubic-bezier(0.65,0,0.35,1) forwards" }}
        />
      </div>
    </div>
  );
}
