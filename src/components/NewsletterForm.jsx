"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your email marketing provider (Mailchimp, Brevo, etc.)
    setDone(true);
  };

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-white">
        <CheckCircle2 className="h-5 w-5 text-brand-500" /> Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2 rounded-full border border-white/15 bg-white/5 p-1.5">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
      />
      <button type="submit" className="btn-primary px-5 py-2.5">
        Subscribe <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
