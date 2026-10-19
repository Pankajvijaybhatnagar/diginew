import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { itServices, process, techStack } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IT Services – Web, App, Cloud & AI in Delhi",
  description:
    "Websites, mobile apps, cloud, AI, cyber security, digital marketing, fintech and ERP from digi1Xprt — IT company in Delhi and Kurukshetra.",
  path: "/services",
  keywords: ["IT services Delhi", "IT company Kurukshetra", "software development company Haryana", "IT solutions company India"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="IT Services"
        title="Technology solutions built to"
        highlight="Do Big."
        text="From your first website to enterprise-grade fintech platforms — we design, build, secure and scale digital products that move your business forward."
        crumbs={[{ label: "IT Services" }]}
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary px-8 py-4">
            Get a free quote <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/portfolio" className="btn-ghost px-8 py-4">See our work</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="What We Offer" title="Full-stack IT services," highlight="one expert team." />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {itServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 100} variant={i % 2 ? "right" : "left"}>
                <article data-tilt className="group relative h-full overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white p-8 transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-navy-900/10 sm:p-10">
                  <span className="absolute right-8 top-8 text-6xl font-extrabold text-navy-900/5">0{i + 1}</span>
                  <span className="icon-pop flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-navy-900">
                    <Icon name={s.icon} className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-navy-900/65">{s.short}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-navy-900/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="btn-outline mt-8">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-900 text-white">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our Process" title="From idea to impact in" highlight="4 steps." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100} variant="flip">
                <div data-spotlight className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <span className="text-4xl font-extrabold text-brand-500">{p.step}</span>
                  <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Tech Stack" title="Modern tools," highlight="proven results." />
          <Reveal className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="rounded-full border border-navy-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900/75 transition hover:border-brand-500 hover:text-brand-600">
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA title="Have a project in mind?" highlight="Let's build it." />
    </>
  );
}
