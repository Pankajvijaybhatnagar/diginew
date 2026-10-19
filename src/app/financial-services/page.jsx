import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SipCalculator from "@/components/SipCalculator";
import { disclaimer, financialServices } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Financial Advisor in Delhi & Kurukshetra",
  description:
    "Goal-based wealth management, mutual funds & SIP planning, tax planning, insurance, retirement and loan advisory by digi1Xprt in Delhi and Kurukshetra.",
  path: "/financial-services",
  keywords: ["financial advisor in Delhi", "financial planner Kurukshetra", "mutual fund advisor Delhi", "SIP investment planning", "tax planning services Delhi", "wealth management Haryana"],
});

const plans = [
  {
    name: "Starter",
    for: "Young professionals",
    points: ["Goal & risk profiling", "SIP & mutual fund plan", "Basic tax-saving guidance", "Half-yearly review"],
  },
  {
    name: "Growth",
    for: "Families & HNIs",
    points: ["Complete financial plan", "Portfolio construction", "Insurance & tax optimisation", "Quarterly reviews", "Dedicated relationship manager"],
    featured: true,
  },
  {
    name: "Business",
    for: "Owners & companies",
    points: ["Business & personal wealth plan", "Working-capital & loan advisory", "Employee benefit planning", "Treasury guidance"],
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title="Plan today. Prosper tomorrow."
        highlight="Do Big with your money."
        text="Goal-based, transparent financial planning — from your first SIP to a complete family wealth strategy."
        crumbs={[{ label: "Financial Services" }]}
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="#consult" className="btn-primary px-8 py-4">
            Book free financial review <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="#calculator" className="btn-ghost px-8 py-4">SIP calculator</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete financial solutions"
            highlight="under one roof."
            text="Whether you are starting out, growing a family or running a business, we help you make confident money decisions."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {financialServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} variant="zoom">
                <div className="card group h-full">
                  <span className="icon-pop flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-navy-900">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy-900/60">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="section scroll-mt-24 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="container-x">
          <SectionHeading eyebrow="SIP Calculator" title="Small steps," highlight="big future." text="Estimate the future value of your monthly SIP investments." />
          <Reveal className="mt-14">
            <SipCalculator />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Advisory Plans" title="Choose the plan that" highlight="fits your goals." />
          <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  data-tilt
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${
                    p.featured ? "glow-border bg-navy-900 text-white shadow-2xl shadow-navy-900/30 lg:-my-4" : "border border-navy-900/10 bg-white"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-1 text-sm ${p.featured ? "text-white/60" : "text-navy-900/55"}`}>For {p.for}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href="#consult" className={`mt-10 w-full ${p.featured ? "btn-primary" : "btn-outline"}`}>
                    Get started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="consult" className="section scroll-mt-24 bg-navy-50/50">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              center={false}
              eyebrow="Free Consultation"
              title="Get your free"
              highlight="financial health check."
              text="Share a few details and our advisor will call you to understand your goals and suggest a clear next step — no obligation."
            />
            <Reveal className="mt-8 rounded-2xl border border-brand-500/30 bg-brand-50 p-5 text-xs leading-relaxed text-navy-900/70">
              <strong className="text-navy-900">Disclaimer:</strong> {disclaimer}
            </Reveal>
          </div>
          <Reveal className="lg:col-span-3" variant="right">
            <ContactForm defaultInterest="Financial Services" />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
