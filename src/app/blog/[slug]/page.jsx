import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock } from "lucide-react";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { disclaimer, posts } from "@/data/site";
import { postContent } from "@/data/postContent";
import { articleSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: postContent[slug]?.keywords,
    type: "article",
    publishedTime: post.date,
  });
}

const formatDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const content = postContent[slug];
  if (!post || !content) notFound();

  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).concat(posts.filter((p) => p.category !== post.category)).slice(0, 3);
  const isMarket = post.category !== "Technology";

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.title }]}
      >
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-brand-500" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-500" /> {post.read}
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_320px]">
          <article className="max-w-3xl">
            <Reveal>
              <p className="text-xl leading-relaxed text-navy-900/80">{post.excerpt}</p>
            </Reveal>
            {content.sections.map((sec, i) => (
              <Reveal key={i} className="mt-10">
                {sec.heading && <h2 className="text-2xl font-bold sm:text-3xl">{sec.heading}</h2>}
                {sec.paragraphs?.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-navy-900/70">{para}</p>
                ))}
                {sec.list && (
                  <ul className="mt-5 space-y-3">
                    {sec.list.map((li) => (
                      <li key={li} className="flex gap-3 text-lg leading-relaxed text-navy-900/75">
                        <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-brand-500" /> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {isMarket && (
              <p className="mt-12 rounded-2xl border border-brand-500/30 bg-brand-50 p-5 text-sm leading-relaxed text-navy-900/70">
                <strong className="text-navy-900">Disclaimer:</strong> This article is for educational purposes only and is not
                investment advice. {disclaimer}
              </p>
            )}

            <Link href="/blog" className="btn-outline mt-12">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy-900 p-7 text-white">
              <h2 className="text-lg font-bold">Talk to an expert</h2>
              <p className="mt-2 text-sm text-white/65">
                {isMarket
                  ? "Get personalised guidance from our financial and market team in Delhi and Kurukshetra."
                  : "Discuss your website, app or software project with our engineers."}
              </p>
              <Link href={isMarket ? (post.category === "Finance" ? "/financial-services" : "/share-market") : "/services"} className="btn-primary mt-5 w-full">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-navy-900/10 bg-white p-7">
              <h2 className="text-lg font-bold">Related articles</h2>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="group block">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">{r.category}</span>
                      <span className="mt-1 block font-semibold leading-snug group-hover:text-brand-600">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
