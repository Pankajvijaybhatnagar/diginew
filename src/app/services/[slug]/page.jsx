import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { itServices, process } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return itServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = itServices.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} Company in Delhi & Kurukshetra`,
    description: `${service.short} digi1Xprt — Delhi & Kurukshetra.`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = itServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = itServices.filter((s) => s.slug !== slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({ name: service.title, description: service.intro, path: `/services/${service.slug}` })}
      />
      <PageHero
        eyebrow="IT Services"
        title={service.title}
        text={service.intro}
        crumbs={[{ label: "IT Services", href: "/services" }, { label: service.title }]}
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="#enquire" className="btn-primary px-8 py-4">
            Get a free consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading center={false} eyebrow="What's Included" title="Everything you need," highlight="end to end." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <Reveal key={f} delay={(i % 2) * 80} variant="zoom">
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-brand-500/50 hover:bg-brand-50/40">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-500" />
                    <span className="font-medium">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <h3 className="text-2xl font-bold">Technologies we use</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {service.tech.map((t) => (
                  <span key={t} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h3 className="text-2xl font-bold">How we deliver</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {process.map((p) => (
                  <div key={p.step} className="rounded-2xl bg-navy-50/70 p-6">
                    <span className="text-2xl font-extrabold text-brand-500">{p.step}</span>
                    <h4 className="mt-2 font-bold">{p.title}</h4>
                    <p className="mt-1 text-sm text-navy-900/60">{p.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy-900 p-7 text-white">
              <h3 className="text-lg font-bold">Other services</h3>
              <ul className="mt-5 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-brand-400">
                      <span className="flex items-center gap-3">
                        <Icon name={o.icon} className="h-4 w-4 text-brand-500" /> {o.title}
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-brand-500 p-7 text-navy-900">
              <h3 className="text-xl font-bold">Need a custom quote?</h3>
              <p className="mt-2 text-sm text-navy-900/75">Tell us about your project and get a detailed proposal within 48 hours.</p>
              <Link href="#enquire" className="btn-dark mt-5">Request quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-24 bg-navy-50/50">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Enquire Now" title={`Let's talk about your`} highlight={`${service.title.toLowerCase()} project.`} />
          <Reveal className="mt-12">
            <ContactForm defaultInterest="IT Services" />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
