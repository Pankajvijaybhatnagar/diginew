import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import JsonLd from "./JsonLd";
import ParticleField from "./ParticleField";
import SplitText, { SwooshUnderline, wordCount } from "./SplitText";

export default function PageHero({ eyebrow, title, highlight, text, crumbs = [], children }) {
  const titleWords = wordCount(title);
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {crumbs.length > 0 && <JsonLd data={breadcrumbSchema(crumbs)} />}
      <div className="grid-bg grid-pan absolute inset-0" aria-hidden="true" />
      <div className="animate-drift absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
      <div className="animate-drift-slow absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-navy-500/40 blur-3xl" aria-hidden="true" />
      <ParticleField />
      <Swoosh />

      <div className="split-auto container-x relative py-20 sm:py-24 lg:py-28">
        <nav aria-label="Breadcrumb" className="page-enter mb-6 flex flex-wrap items-center gap-1 text-sm text-white/55">
          <Link href="/" className="hover:text-brand-400">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {c.href ? (
                <Link href={c.href} className="hover:text-brand-400">{c.label}</Link>
              ) : (
                <span className="text-brand-400">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="eyebrow-dark page-enter" style={{ animationDelay: "100ms" }}>
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          <SplitText text={title} baseDelay={150} />
          {highlight && (
            <span className="relative inline-block">
              <SplitText text={highlight} start={titleWords} baseDelay={150} className="text-gradient" />
              <SwooshUnderline />
            </span>
          )}
        </h1>
        {text && (
          <p className="page-enter mt-6 max-w-2xl text-lg leading-relaxed text-white/70" style={{ animationDelay: "500ms" }}>
            {text}
          </p>
        )}
        {children && (
          <div className="page-enter" style={{ animationDelay: "700ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

// Decorative curve inspired by the swoosh in the digi1Xprt logo — draws itself in
export function Swoosh({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute -bottom-10 right-0 h-64 w-[640px] max-w-full opacity-40 ${className}`}
      viewBox="0 0 640 260"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 40 C 60 220, 200 250, 330 190 S 560 60, 630 10"
        stroke="url(#swoosh)"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength="1"
        className="draw-path"
      />
      <defs>
        <linearGradient id="swoosh" x1="0" x2="640" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9908" stopOpacity="0" />
          <stop offset="0.4" stopColor="#FF9908" />
          <stop offset="1" stopColor="#FFBB57" />
        </linearGradient>
      </defs>
    </svg>
  );
}
