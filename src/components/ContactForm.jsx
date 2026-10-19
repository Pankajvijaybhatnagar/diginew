"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const interests = ["IT Services", "Financial Services", "Share Market", "Training / Courses", "Careers", "Other"];

export default function ContactForm({ defaultInterest = "IT Services" }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-navy-900/10 bg-white p-12 text-center">
        <span className="icon-pop flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thank you!</h3>
        <p className="mt-2 text-navy-900/65">Our team will get back to you within one business day.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/5 sm:grid-cols-2 sm:p-10">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Full name *</label>
        <input id="name" name="name" required className="input" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required className="input" placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" className="input" placeholder="+91" />
      </div>
      <div>
        <label htmlFor="interest" className="mb-2 block text-sm font-medium">I&apos;m interested in</label>
        <select id="interest" name="interest" defaultValue={defaultInterest} className="input">
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">Message *</label>
        <textarea id="message" name="message" required rows={5} className="input resize-none" placeholder="Tell us about your project or goals..." />
      </div>
      {/* Honeypot field for simple bot protection */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {error && <p className="text-sm text-rose-600 sm:col-span-2">{error}</p>}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-navy-900/50">By submitting, you agree to our privacy policy. We never share your data.</p>
        <button type="submit" disabled={status === "loading"} className="btn-primary px-8 disabled:opacity-60">
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send Message
        </button>
      </div>
    </form>
  );
}
