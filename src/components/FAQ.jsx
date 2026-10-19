"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-navy-900/10 rounded-3xl border border-navy-900/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
            >
              <span className={`text-base font-semibold sm:text-lg ${isOpen ? "text-brand-600" : "text-navy-900"}`}>{item.q}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                  isOpen ? "rotate-45 bg-brand-500 text-navy-900" : "bg-navy-50 text-navy-900"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-navy-900/65 sm:px-8">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
