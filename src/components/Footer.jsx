import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Clock } from "lucide-react";
import Logo from "./Logo";
import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";
import { company, disclaimer, itServices } from "@/data/site";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "Share Market", href: "/share-market" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: company.socials.linkedin, Icon: Linkedin },
  { label: "X (Twitter)", href: company.socials.twitter, Icon: Twitter },
  { label: "Facebook", href: company.socials.facebook, Icon: Facebook },
  { label: "Instagram", href: company.socials.instagram, Icon: Instagram },
  { label: "YouTube", href: company.socials.youtube, Icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="grid-bg grid-pan absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="animate-drift absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        {/* Newsletter */}
        <Reveal className="flex flex-col gap-6 border-b border-white/10 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Get weekly tech &amp; market <span className="text-brand-500">insights</span>
            </h3>
            <p className="mt-2 text-white/60">Practical articles on technology, personal finance and investing. No spam.</p>
          </div>
          <NewsletterForm />
        </Reveal>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Logo light className="h-16 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{company.description}</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:-translate-y-1 hover:rotate-12 hover:border-brand-500 hover:bg-brand-500 hover:text-navy-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-500">IT Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {itServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/65 transition hover:text-brand-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-500">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 transition hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300} className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-500">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              {company.offices.map((o) => (
                <li key={o.label} className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    <span className="block font-semibold text-white/85">{o.label}</span>
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </li>
              ))}
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-brand-400">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-brand-400">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  {company.hours.map((h) => (
                    <span key={h.days} className="block">
                      <span className="font-semibold text-white/85">{h.days}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Disclaimer: </span>
            {disclaimer}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved. <span className="text-brand-500">{company.tagline}</span>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-400">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-brand-400">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
