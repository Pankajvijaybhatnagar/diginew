import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote, Sparkles, Star } from "lucide-react";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import HeroVisual from "@/components/HeroVisual";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SipCalculator from "@/components/SipCalculator";
import Ticker from "@/components/Ticker";
import ProjectCard from "@/components/ProjectCard";
import { Swoosh } from "@/components/PageHero";
import ParticleField from "@/components/ParticleField";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";
import SplitText, { SwooshUnderline } from "@/components/SplitText";
import {
  company, faqs, industries, itServices, pillars, posts, process, projects, stats, techStack, testimonials, whyUs,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-bg grid-pan absolute inset-0" aria-hidden="true" />
        <div className="animate-drift absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
        <div className="animate-drift-slow absolute -right-40 -top-20 h-[30rem] w-[30rem] rounded-full bg-navy-500/50 blur-3xl" aria-hidden="true" />
        <ParticleField />
        <Swoosh className="-bottom-28 left-0 right-auto opacity-20" />

        <div className="container-x relative grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <h1 className="split-auto text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="eyebrow-dark page-enter mb-6 flex! w-fit">
                <Sparkles className="h-3.5 w-3.5" /> digi1Xprt · IT • Finance • Share Market
              </span>
              <SplitText text="Technology & Wealth," baseDelay={200} />
              <br />
              <SplitText text="Engineered to" start={3} baseDelay={200} />
              <span className="relative inline-block">
                <SplitText text="Do Big." start={5} baseDelay={200} className="text-gradient" />
                <SwooshUnderline />
              </span>
            </h1>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                digi1Xprt is an IT, financial services and share-market company in Delhi and Kurukshetra. We build
                powerful software for growing businesses and deliver expert financial and stock-market guidance for
                investors — one trusted partner for your digital and financial growth.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="btn-primary px-8 py-4 text-base">
                Explore IT Services <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/share-market" className="btn-ghost px-8 py-4 text-base">
                Start Investing Smarter
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60">
              {["Certified engineers", "Research-driven advice", "24/7 support"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" /> {t}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal delay={300} variant="zoom" className="lg:pl-8">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* ───────────── STATS ───────────── */}
      <section className="relative -mt-px bg-white">
        <div className="container-x">
          <div className="relative z-10 -mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-900/10 shadow-2xl shadow-navy-900/10 lg:-mt-0 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center sm:py-10">
                <p className="text-3xl font-extrabold text-navy-900 sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-navy-900/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── THREE PILLARS ───────────── */}
      <section className="section bg-navy-50/50 pt-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Three strengths."
            highlight="One growth partner."
            text="We combine deep technology expertise with financial and market know-how — so your business and your wealth grow together."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={i * 120}>
                <Link
                  href={p.href}
                  data-tilt
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1.5 sm:p-10 ${
                    i === 1
                      ? "bg-navy-900 text-white shadow-2xl shadow-navy-900/30"
                      : "border border-navy-900/10 bg-white hover:shadow-2xl hover:shadow-navy-900/10"
                  }`}
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/15 blur-2xl transition-all group-hover:bg-brand-500/30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-navy-900 shadow-lg shadow-brand-500/30">
                    <Icon name={p.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="relative mt-8 text-2xl font-bold">{p.title}</h3>
                  <p className={`relative mt-3 leading-relaxed ${i === 1 ? "text-white/70" : "text-navy-900/65"}`}>{p.text}</p>
                  <ul className="relative mt-6 grid grid-cols-2 gap-3 text-sm">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-500">
                    Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── IT SERVICES ───────────── */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              center={false}
              eyebrow="IT Services"
              title="Digital solutions that"
              highlight="scale with you."
              text="End-to-end engineering — from idea and design to launch, security and growth."
            />
            <Reveal>
              <Link href="/services" className="btn-dark">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {itServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col">
                  <span className="icon-pop flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-navy-900">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{s.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-navy-900 group-hover:text-brand-600">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── WHY US ───────────── */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              dark
              center={false}
              eyebrow="Why digi1Xprt"
              title="Built on trust,"
              highlight="driven by results."
              text="Clients choose us because we think like partners — combining technical depth, financial discipline and honest communication."
            />
            <Reveal delay={200} className="mt-10">
              <Link href="/about" className="btn-primary">
                About our company <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100} variant="zoom">
                <div data-spotlight className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-brand-500/50 hover:bg-white/[0.07]">
                  <span className="icon-pop flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                    <Icon name={w.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="How We Work" title="A simple process," highlight="powerful outcomes." />
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent lg:block" aria-hidden="true" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 120} variant="flip" className="relative text-center">
                <span className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-2xl font-extrabold text-brand-500 shadow-xl shadow-navy-900/20">
                  {p.step}
                </span>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-navy-900/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SIP CALCULATOR ───────────── */}
      <section className="section bg-gradient-to-b from-brand-50/70 to-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Plan Your Wealth"
            title="See what disciplined investing"
            highlight="can build."
            text="Use our SIP calculator to estimate how small monthly investments can compound over time."
          />
          <Reveal className="mt-14" variant="flip">
            <SipCalculator />
          </Reveal>
          <Reveal className="mt-10 text-center">
            <Link href="/financial-services" className="btn-dark">
              Talk to a financial expert <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── INDUSTRIES + TECH ───────────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Industries" title="Trusted across" highlight="industries." />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 70} variant="zoom">
                <div className="group flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-brand-500/50 hover:bg-brand-50/50">
                  <span className="icon-pop flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-900 transition group-hover:bg-brand-500">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold sm:text-base">{ind.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-navy-900/40">Technologies we master</p>
          <div className="relative">
            <div className="flex w-max animate-marquee gap-4">
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={i}
                  aria-hidden={i >= techStack.length}
                  className="rounded-full border border-navy-900/10 bg-white px-6 py-3 text-sm font-semibold text-navy-900/70 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* ───────────── PORTFOLIO ───────────── */}
      <section className="section bg-navy-50/50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading center={false} eyebrow="Our Work" title="Recent projects that" highlight="made an impact." />
            <Reveal>
              <Link href="/portfolio" className="btn-outline">
                View portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Testimonials" title="What our clients" highlight="say about us." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 100} variant={i % 2 ? "right" : "left"}>
                <figure data-tilt className="card relative h-full">
                  <Quote className="absolute right-7 top-7 h-10 w-10 text-brand-500/20" />
                  <div className="flex gap-1 text-brand-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 leading-relaxed text-navy-900/75">&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="icon-pop flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-bold text-brand-500">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-navy-900/55">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── LOCAL PRESENCE (SEO) ───────────── */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Where We Work"
              title="IT, finance & share-market experts in"
              highlight="Delhi & Kurukshetra."
            />
            <Reveal delay={150} className="mt-6 space-y-4 leading-relaxed text-navy-900/65">
              <p>
                <strong className="text-navy-900">digi1Xprt</strong> is a technology and financial services company with its
                registered office in Old Rajender Nagar, New Delhi and a regional office on Pipli Road, Kurukshetra, Haryana.
                Businesses come to us for <Link href="/services/web-development" className="font-semibold text-brand-600 hover:underline">website development</Link>,{" "}
                <Link href="/services/mobile-app-development" className="font-semibold text-brand-600 hover:underline">mobile apps</Link>,{" "}
                <Link href="/services/cloud-devops" className="font-semibold text-brand-600 hover:underline">cloud</Link> and{" "}
                <Link href="/services/digital-marketing" className="font-semibold text-brand-600 hover:underline">digital marketing</Link>,
                while investors trust us for <Link href="/financial-services" className="font-semibold text-brand-600 hover:underline">financial planning</Link> and{" "}
                <Link href="/share-market" className="font-semibold text-brand-600 hover:underline">stock market courses</Link>.
              </p>
              <p>
                From our two offices we serve clients across Delhi NCR, Haryana, Punjab and the rest of India — in person or
                online.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {company.offices.map((o, i) => (
              <Reveal key={o.label} delay={i * 120} variant="zoom">
                <Link href="/contact" data-tilt className="card group block h-full">
                  <span className="icon-pop flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-navy-900">
                    <Icon name="building" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-600">{o.label}</p>
                  <h3 className="mt-1 text-xl font-bold">{o.city}</h3>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-navy-900/60">
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── BLOG + FAQ ───────────── */}
      <section className="section bg-navy-50/50">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Insights" title="Latest from" highlight="our experts." />
            <div className="mt-10 space-y-4">
              {posts.slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link href={`/blog/${p.slug}`} className="group flex gap-5 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-brand-500/50">
                    <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy-900 text-white">
                      <span className="text-lg font-bold leading-none text-brand-500">{new Date(p.date).getDate()}</span>
                      <span className="text-[10px] uppercase">{new Date(p.date).toLocaleString("en", { month: "short" })}</span>
                    </span>
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{p.category}</span>
                      <span className="mt-1 block font-semibold leading-snug group-hover:text-brand-600">{p.title}</span>
                      <span className="mt-1 block text-xs text-navy-900/50">{p.read}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="FAQ" title="Questions?" highlight="Answers." />
            <Reveal className="mt-10">
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
