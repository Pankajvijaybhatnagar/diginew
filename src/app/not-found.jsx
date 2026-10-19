import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-8xl font-extrabold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">This page didn&apos;t Do Big.</h1>
        <p className="mt-4 max-w-md text-white/65">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
