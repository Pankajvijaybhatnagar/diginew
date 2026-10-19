import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { company, faqs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact digi1Xprt – Offices in Delhi & Kurukshetra",
  description:
    "Visit digi1Xprt at 21/44 Old Rajender Nagar, Delhi 110060 or Ekta Complex, Pipli Road, Kurukshetra 136118. Call +91 98929 29551.",
  path: "/contact",
  absoluteTitle: true,
  keywords: ["digi1Xprt contact number", "digi1Xprt address", "IT company Old Rajender Nagar", "IT company Pipli Road Kurukshetra"],
});

const mapSrc = (q) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const directions = (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

const channels = [
  { icon: Phone, label: "Call us", lines: [company.phone], href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email us", lines: [company.email], href: `mailto:${company.email}` },
  { icon: MessageCircle, label: "WhatsApp", lines: ["Chat with our team"], href: `https://wa.me/${company.whatsapp}` },
  { icon: Clock, label: "Opening hours", lines: company.hours.map((h) => `${h.days}: ${h.time}`) },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start something"
        highlight="big together."
        text="Tell us about your project, financial goals or market questions. Our experts usually respond within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {channels.map(({ icon: Cmp, label, lines, href }, i) => {
              const inner = (
                <>
                  <span className="icon-pop flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-navy-900">
                    <Cmp className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-navy-900/55">{label}</span>
                    {lines.map((l) => (
                      <span key={l} className="block break-words font-semibold">{l}</span>
                    ))}
                  </span>
                </>
              );
              const cls = "group flex items-center gap-5 rounded-2xl border border-navy-900/10 bg-white p-5 transition hover:border-brand-500/50";
              return (
                <Reveal key={label} delay={i * 70} variant="left">
                  {href ? (
                    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
          <Reveal className="lg:col-span-3" variant="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section className="section bg-navy-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Our Offices" title="Visit us" highlight="in person." />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {company.offices.map((o, i) => (
              <Reveal key={o.label} delay={i * 120} variant={i ? "right" : "left"}>
                <article data-tilt className="group h-full overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white shadow-xl shadow-navy-900/5">
                  <div className="relative h-64 bg-navy-100">
                    <iframe
                      title={`${o.label} map`}
                      src={mapSrc(o.map)}
                      className="absolute inset-0 h-full w-full border-0 grayscale-[30%] transition group-hover:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                    <div className="flex gap-4">
                      <span className="icon-pop flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-navy-900">
                        <MapPin className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{o.label}</h3>
                        <address className="mt-1 not-italic leading-relaxed text-navy-900/65">
                          {o.lines.map((l) => (
                            <span key={l} className="block">{l}</span>
                          ))}
                        </address>
                      </div>
                    </div>
                    <a href={directions(o.map)} target="_blank" rel="noopener noreferrer" className="btn-dark shrink-0">
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked" highlight="questions." />
          <Reveal className="mt-12">
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
