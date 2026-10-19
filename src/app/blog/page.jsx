import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights – Tech, Finance & Stock Market Articles",
  description: "Practical articles from digi1Xprt on websites and software, mutual funds and tax planning, IPOs and trading risk management.",
  path: "/blog",
  keywords: ["finance blog India", "stock market tips", "technology blog", "investment guide India"],
});

const categoryIcon = { Technology: "code", Finance: "wallet", "Share Market": "candlestick" };
const categoryStyle = {
  Technology: "from-navy-900 to-navy-600",
  Finance: "from-brand-600 to-brand-400",
  "Share Market": "from-navy-800 to-brand-500",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas on tech, money &"
        highlight="markets."
        text="Practical, jargon-free articles from our engineers, financial planners and market analysts."
        crumbs={[{ label: "Insights" }]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <article id={featured.slug} data-tilt className="grid scroll-mt-28 overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white lg:grid-cols-2">
              <div className={`relative flex min-h-64 items-center justify-center bg-gradient-to-br ${categoryStyle[featured.category]}`}>
                <div className="grid-bg absolute inset-0" />
                <Icon name={categoryIcon[featured.category]} className="relative h-24 w-24 text-white/90" strokeWidth={1.2} />
              </div>
              <div className="p-8 sm:p-12">
                <span className="eyebrow">Featured · {featured.category}</span>
                <h2 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-navy-900/65">{featured.excerpt}</p>
                <PostMeta post={featured} />
                <Link href={`/blog/${featured.slug}`} className="btn-primary mt-8">
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <article id={p.slug} data-tilt className="group relative h-full scroll-mt-28 overflow-hidden rounded-3xl border border-navy-900/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${categoryStyle[p.category]}`}>
                    <div className="grid-bg absolute inset-0" />
                    <Icon name={categoryIcon[p.category]} className="relative h-14 w-14 text-white/90" strokeWidth={1.4} />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{p.category}</span>
                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-brand-600">
                      <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{p.excerpt}</p>
                    <PostMeta post={p} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Want expert advice" highlight="for your goals?" />
    </>
  );
}

function PostMeta({ post }) {
  return (
    <div className="mt-6 flex gap-5 text-xs text-navy-900/50">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-4 w-4" />
        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4" /> {post.read}
      </span>
    </div>
  );
}
