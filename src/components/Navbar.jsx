"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { company, navigation } from "@/data/site";

function isActive(pathname, item) {
  if (item.href === "/") return pathname === "/";
  if (pathname.startsWith(item.href)) return true;
  return item.children?.some((c) => pathname.startsWith(c.href)) ?? false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden bg-navy-950 text-xs text-white/75 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-brand-400">
              <Mail className="h-3.5 w-3.5 text-brand-500" /> {company.email}
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-brand-400">
              <Phone className="h-3.5 w-3.5 text-brand-500" /> {company.phone}
            </a>
          </div>
          <p>
            IT • Financial Services • Share Market —{" "}
            <span className="font-semibold text-brand-500">{company.tagline}</span>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-navy-900/10 bg-white/90 shadow-lg shadow-navy-900/5 backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <nav className="container-x flex h-20 items-center justify-between gap-6 sm:h-24" aria-label="Main">
          <Logo className="h-14 w-auto sm:h-16" />

          {/* Desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item);
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`nav-link relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        active ? "text-brand-600" : "text-navy-900/80 hover:text-navy-900"
                      }`}
                    >
                      {item.label}
                      {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />}
                    </Link>
                  </li>
                );
              }
              const wide = item.children.length > 4;
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`nav-link relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-brand-600" : "text-navy-900/80 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div
                      className={`grid gap-1 rounded-2xl border border-navy-900/10 bg-white p-3 shadow-2xl shadow-navy-900/15 ${
                        wide ? "w-[560px] grid-cols-2" : "w-72"
                      }`}
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="group/item rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                        >
                          <span className="block text-sm font-semibold text-navy-900 group-hover/item:text-brand-600">
                            {c.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-navy-900/55">{c.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-primary">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto sm:h-[calc(100dvh-6rem)] bg-white transition-all duration-300 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-6">
            {navigation.map((item) => (
              <li key={item.label} className="border-b border-navy-900/5">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-navy-900"
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${expanded === item.label ? "rotate-180 text-brand-500" : ""}`} />
                    </button>
                    {expanded === item.label && (
                      <ul className="mb-4 grid gap-1 rounded-2xl bg-navy-50/60 p-2">
                        <li>
                          <Link href={item.href} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-brand-600">
                            View all {item.label}
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block rounded-xl px-4 py-2.5 text-sm text-navy-900/80 hover:bg-white">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 text-base font-semibold ${isActive(pathname, item) ? "text-brand-600" : "text-navy-900"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-6">
              <Link href="/contact" className="btn-primary w-full">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
            <li className="pt-6 text-sm text-navy-900/70">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block py-1">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="block py-1">{company.email}</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
