import CTA from "@/components/CTA";
import Counter from "@/components/Counter";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, stats } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio – Web, App, Cloud & FinTech Projects",
  description: "Case studies of fintech platforms, cloud migrations, mobile apps, websites and AI projects delivered by digi1Xprt.",
  path: "/portfolio",
  keywords: ["digi1Xprt projects", "software development portfolio", "fintech case studies"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that helps our clients"
        highlight="Do Big."
        text="A selection of products and platforms we've designed, built and scaled across fintech, healthcare, retail and education."
        crumbs={[{ label: "Portfolio" }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Case Studies" title="Featured" highlight="projects." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-white">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-brand-500 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Your project could be" highlight="next." />
    </>
  );
}
