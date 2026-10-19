import Image from "next/image";
import { CheckCircle2, Eye, Target } from "lucide-react";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { milestones, stats, team, values } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About digi1Xprt – IT & Finance Company, Delhi & Kurukshetra",
  description:
    "Meet digi1Xprt (Digi One Xprt): a technology, financial services and share-market company with offices in Old Rajender Nagar, Delhi and Kurukshetra, Haryana.",
  path: "/about",
  absoluteTitle: true,
  keywords: ["about digi1Xprt", "digi1Xprt Delhi", "digi1Xprt Kurukshetra", "IT and finance company India"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About digi1Xprt"
        title="We help businesses & investors"
        highlight="Do Big."
        text="A new-age company where technology meets finance. We build digital products, plan wealth and decode markets — with one goal: your growth."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative" variant="left">
            <div data-tilt className="relative overflow-hidden rounded-[2rem] bg-navy-50 p-10 sm:p-16">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
              <Image src="/logo.png" alt="digi1Xprt logo" width={854} height={458} className="relative h-auto w-full" />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-900/10 shadow-2xl sm:left-12 sm:right-12">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-navy-900 p-5 text-center text-white">
                  <p className="text-3xl font-extrabold text-brand-500">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="pt-8 lg:pt-0">
            <SectionHeading
              center={false}
              eyebrow="Our Story"
              title="Where technology meets"
              highlight="financial intelligence."
            />
            <Reveal delay={100} className="mt-6 space-y-5 leading-relaxed text-navy-900/65">
              <p>
                digi1Xprt (also searched as Digi One Xprt) was founded with a simple belief: every business deserves world-class technology and every
                individual deserves expert financial guidance. Too often, these live in separate worlds — we bring them together.
              </p>
              <p>
                Our technology team builds websites, mobile apps, cloud platforms and fintech products. Our finance and
                market teams help clients plan wealth, invest with discipline and understand the markets. Because we
                understand both, we build better fintech and give smarter, tech-enabled advice.
              </p>
              <p className="font-semibold text-navy-900">
                Our name says it all — be the <span className="text-brand-600">digital No. 1 expert</span> for every client, and help them{" "}
                <span className="text-brand-600">Do Big.</span>
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Experienced, certified team", "Transparent processes", "Technology + finance expertise", "Long-term partnerships"].map((t) => (
                <p key={t} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" /> {t}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-navy-50/50">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal variant="left">
            <div data-spotlight data-tilt className="h-full rounded-[2rem] bg-navy-900 p-10 text-white">
              <span className="icon-pop flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-navy-900">
                <Target className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-white/70">
                To empower businesses with reliable, scalable technology and help individuals build wealth through
                transparent, research-driven financial and market guidance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <div data-tilt className="card h-full rounded-[2rem] border border-navy-900/10 bg-white p-10">
              <span className="icon-pop flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-brand-500">
                <Eye className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-navy-900/65">
                To become the most trusted growth partner for businesses and investors — known for innovation,
                integrity and results that help every client Do Big.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="The principles that" highlight="guide us." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} variant="flip">
                <div className="card h-full text-center">
                  <span className="icon-pop mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading dark eyebrow="Our Journey" title="Growing step by step," highlight="doing big." />
          <ol className="relative mx-auto mt-16 max-w-3xl border-l-2 border-brand-500/30 pl-8 sm:pl-12">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 100} variant="left" className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-navy-900 bg-brand-500 sm:-left-[3.6rem]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">{m.year}</span>
                <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-white/65">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the"
            highlight="experts."
            text="A multidisciplinary leadership team across technology, finance and market research."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div data-tilt className="group overflow-hidden rounded-3xl border border-navy-900/10 bg-white text-center transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-600">
                    <div className="grid-bg absolute inset-0" />
                    <span className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-brand-500 bg-navy-950 text-2xl font-bold text-brand-500 transition group-hover:scale-105">
                      {t.initials}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{t.name}</h3>
                    <p className="mt-1 text-sm text-brand-600">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
