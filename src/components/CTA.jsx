import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import ParticleField from "./ParticleField";
import Reveal from "./Reveal";
import SplitText, { SwooshUnderline, wordCount } from "./SplitText";
import { company } from "@/data/site";

export default function CTA({
  title = "Ready to",
  highlight = "Do Big?",
  text = "Whether it's a new digital product, a smarter financial plan or a disciplined market strategy — let's build your growth story together.",
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal variant="zoom" className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <div className="grid-bg grid-pan absolute inset-0" aria-hidden="true" />
          <ParticleField density={0.00012} />
          <div className="animate-drift absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <div className="animate-drift-slow absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-navy-400/40 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              <SplitText text={title} baseDelay={300} />
              <span className="relative inline-block">
                <SplitText text={highlight} start={wordCount(title)} baseDelay={300} className="text-gradient" />
                <SwooshUnderline />
              </span>
            </h2>
            <p className="stagger-item mt-5 text-lg text-white/70" style={{ "--i": 5 }}>{text}</p>
            <div className="stagger-item mt-10 flex flex-col justify-center gap-4 sm:flex-row" style={{ "--i": 7 }}>
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Book a Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn-ghost px-8 py-4 text-base">
                <PhoneCall className="h-5 w-5" /> {company.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
