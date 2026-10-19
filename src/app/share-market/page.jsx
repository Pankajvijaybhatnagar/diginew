import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, TrendingDown, TrendingUp } from "lucide-react";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Ticker from "@/components/Ticker";
import { courses, disclaimer, marketServices, tickerItems } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { courseSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Stock Market Course & Advisory – Delhi, Kurukshetra",
  description:
    "Equity research, demat account support, F&O education, IPO guidance, portfolio review and stock market training courses by digi1Xprt in Delhi and Kurukshetra.",
  path: "/share-market",
  keywords: ["stock market course in Kurukshetra", "share market classes Delhi", "stock market training institute Haryana", "equity research Delhi", "IPO advisory India", "demat account opening"],
});

const principles = [
  { title: "Research first", text: "Every view is backed by fundamental and technical analysis — never tips or rumours." },
  { title: "Risk before reward", text: "Position sizing and stop-losses are part of every strategy we teach and discuss." },
  { title: "Long-term mindset", text: "We encourage wealth creation through discipline and patience, not speculation." },
  { title: "Full transparency", text: "Clear communication about risks, charges and realistic expectations." },
];

export default function ShareMarketPage() {
  const indices = tickerItems.slice(0, 4);
  return (
    <>
      <JsonLd data={courses.map(courseSchema)} />
      <PageHero
        eyebrow="Share Market"
        title="Invest with research."
        highlight="Trade with discipline."
        text="Equity research, demat support, IPO guidance and hands-on market education — everything you need to participate in the markets confidently."
        crumbs={[{ label: "Share Market" }]}
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="#enquire" className="btn-primary px-8 py-4">
            Open demat account <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="#courses" className="btn-ghost px-8 py-4">Explore courses</Link>
        </div>
        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {indices.map((t) => {
            const up = t.change >= 0;
            return (
              <div key={t.symbol} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-white/60">{t.symbol}</p>
                <p className="mt-1 text-lg font-bold">{t.price}</p>
                <p className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${up ? "text-emerald-400" : "text-rose-400"}`}>
                  {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {up ? "+" : ""}{t.change.toFixed(2)}%
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-white/40">Indicative values for illustration only — not live market data.</p>
      </PageHero>
      <Ticker />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Market Services" title="Everything for the" highlight="smart investor." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} variant="zoom">
                <div className="card group h-full">
                  <span className="icon-pop flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-navy-900">
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

      <section className="section relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <SectionHeading
            dark
            center={false}
            eyebrow="Our Approach"
            title="Disciplined investing,"
            highlight="not speculation."
            text="Markets reward patience and process. Our approach is built on research, risk management and education."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 100}>
                <div data-spotlight className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <CheckCircle2 className="h-7 w-7 text-brand-500" />
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section scroll-mt-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Stock Market Academy"
            title="Learn the market from"
            highlight="practitioners."
            text="Structured, practical courses with live chart sessions, assignments and mentor support."
          />
          <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div
                  data-tilt
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${
                    c.featured ? "glow-border bg-navy-900 text-white shadow-2xl shadow-navy-900/30" : "border border-navy-900/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">{c.level}</span>
                    <span className={`inline-flex items-center gap-1.5 text-sm ${c.featured ? "text-white/60" : "text-navy-900/55"}`}>
                      <Clock className="h-4 w-4" /> {c.duration}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{c.title}</h3>
                  <ul className="mt-6 flex-1 space-y-3">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href="#enquire" className={`mt-10 w-full ${c.featured ? "btn-primary" : "btn-outline"}`}>
                    Enrol now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-24 bg-navy-50/50">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              center={false}
              eyebrow="Get Started"
              title="Start your market"
              highlight="journey today."
              text="Open a demat account, book a portfolio review or enrol in a course — our team will guide you."
            />
            <Reveal className="mt-8 flex gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-xs leading-relaxed text-navy-900/75">
              <AlertTriangle className="h-5 w-5 shrink-0 text-rose-500" />
              <p>
                <strong className="text-navy-900">Risk disclosure:</strong> {disclaimer}
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-3" variant="right">
            <ContactForm defaultInterest="Share Market" />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
