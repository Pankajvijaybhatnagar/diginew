import { itServices, posts } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/financial-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/share-market", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...itServices.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.85 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly", priority: 0.6 })),
  ];
}
