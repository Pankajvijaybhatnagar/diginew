"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl transition-all hover:bg-brand-500 hover:text-navy-900 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="icon-pop flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
