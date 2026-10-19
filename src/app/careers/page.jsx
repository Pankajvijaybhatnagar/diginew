import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { company, jobs, perks, values } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers – IT & Finance Jobs in Delhi and Kurukshetra",
  description: "Join digi1Xprt. Open roles for developers, DevOps engineers, equity research analysts, relationship managers and digital marketers in Delhi and Kurukshetra.",
  path: "/careers",
  keywords: ["IT jobs in Kurukshetra", "developer jobs Delhi", "finance jobs Delhi", "digi1Xprt careers"],
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career."
        highlight="Do Big with us."
        text="Join a fast-growing team where engineers, analysts and advisors work side by side on meaningful problems."
        crumbs={[{ label: "Careers" }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Life at digi1Xprt" title="Why you'll love" highlight="working here." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} variant="zoom">
                <div className="card h-full text-center">
                  <span className="icon-pop mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-bold">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-navy-50/70 p-6">
                  <h3 className="font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-navy-900/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Open Positions" title="Find your" highlight="next role." />
          <div className="mx-auto mt-14 max-w-5xl space-y-4">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 60} variant={i % 2 ? "right" : "left"}>
                <article className="group flex flex-col gap-5 rounded-3xl border border-navy-900/10 bg-white p-6 transition hover:border-brand-500/50 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{j.dept}</span>
                    <h3 className="mt-1 text-lg font-bold sm:text-xl">{j.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-navy-900/55">
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {j.type}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {j.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {j.exp}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${company.careersEmail}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                    className="btn-dark shrink-0 group-hover:bg-brand-500 group-hover:text-navy-900"
                  >
                    Apply now <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl bg-navy-900 p-8 text-center text-white sm:p-10">
            <h3 className="text-2xl font-bold">Don&apos;t see the right role?</h3>
            <p className="mt-3 text-white/65">We&apos;re always looking for talented people. Send your CV and we&apos;ll reach out when there&apos;s a fit.</p>
            <a href={`mailto:${company.careersEmail}`} className="btn-primary mt-6">
              {company.careersEmail}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
