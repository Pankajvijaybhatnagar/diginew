import { company } from "@/data/site";

// Set NEXT_PUBLIC_SITE_URL in production if the domain differs.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.digi1xprt.com").replace(/\/$/, "");
export const absoluteUrl = (path = "/") => `${siteUrl}${path === "/" ? "" : path}`;

// Common ways people type the brand name — used in schema `alternateName` and keywords.
export const brandNames = ["digi1Xprt", "digi1xprt", "Digi1Xprt", "Digi 1 Xprt", "Digi One Xprt", "Digi1 Expert", "digixprt"];

export const coreKeywords = [
  "digi1Xprt",
  "digi1xprt company",
  "IT company in Delhi",
  "IT company in Kurukshetra",
  "software company in Haryana",
  "website development company Delhi",
  "app development company Kurukshetra",
  "financial services company Delhi",
  "financial advisor Kurukshetra",
  "share market advisory Delhi",
  "stock market course Kurukshetra",
];

/**
 * Builds a complete metadata object for a page: unique title & description,
 * canonical URL, Open Graph and Twitter cards.
 */
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "digi1Xprt — IT, Financial & Share Market Solutions" };

export function pageMetadata({ title, description, path = "/", keywords = [], type = "website", absoluteTitle = false, publishedTime }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${company.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...new Set([...keywords, ...coreKeywords])],
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: company.name,
      locale: "en_IN",
      type,
      images: [shareImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}

/* ───────────── Structured data (schema.org JSON-LD) ───────────── */

const orgId = `${siteUrl}/#organization`;

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "18:30",
  },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: company.name,
    alternateName: brandNames.filter((n) => n !== company.name),
    slogan: company.tagline,
    description: company.description,
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png`, width: 854, height: 458 },
    email: company.email,
    telephone: company.phone,
    address: postalAddress(company.offices[0]),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phone,
        email: company.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: Object.values(company.socials).filter((u) => !/^https:\/\/(www\.)?[a-z]+\.com\/$/.test(u)),
    knowsAbout: ["Software Development", "Web Development", "Mobile App Development", "Cloud Computing", "Artificial Intelligence", "Cyber Security", "Digital Marketing", "Financial Planning", "Mutual Funds", "Stock Market"],
  };
}

function postalAddress(o) {
  return {
    "@type": "PostalAddress",
    streetAddress: o.street,
    addressLocality: o.city,
    addressRegion: o.region,
    postalCode: o.postalCode,
    addressCountry: "IN",
  };
}

// One LocalBusiness entry per office — key for "near me" and city searches.
export function localBusinessSchemas() {
  return company.offices.map((o, i) => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#office-${i + 1}`,
    name: `${company.name} — ${o.label}, ${o.city}`,
    image: `${siteUrl}/logo.png`,
    url: absoluteUrl("/contact"),
    telephone: company.phone,
    email: company.email,
    priceRange: "₹₹",
    address: postalAddress(o),
    openingHoursSpecification: openingHours,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.map)}`,
    areaServed: [o.city, o.region, "India"],
    parentOrganization: { "@id": orgId },
  }));
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: company.name,
    alternateName: brandNames.filter((n) => n !== company.name),
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbSchema(crumbs) {
  const items = [{ name: "Home", href: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label || c.name,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: absoluteUrl(path),
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Kurukshetra" },
      { "@type": "State", name: "Haryana" },
      { "@type": "Country", name: "India" },
    ],
  };
}

export function courseSchema(course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: `${course.level} stock market course: ${course.points.join(", ")}.`,
    provider: { "@type": "Organization", name: company.name, sameAs: siteUrl },
  };
}

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl("/opengraph-image"),
    author: { "@type": "Organization", name: company.name, url: siteUrl },
    publisher: { "@id": orgId },
    articleSection: post.category,
    inLanguage: "en-IN",
  };
}
