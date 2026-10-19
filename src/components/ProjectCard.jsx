export default function ProjectCard({ project: p, index = 0 }) {
  const gradients = [
    "from-navy-900 via-navy-700 to-navy-500",
    "from-brand-600 via-brand-500 to-brand-300",
    "from-navy-800 via-navy-600 to-brand-500",
  ];
  return (
    <article data-tilt className="group h-full overflow-hidden rounded-3xl border border-navy-900/10 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className={`relative flex h-48 items-end bg-gradient-to-br p-6 ${gradients[index % 3]}`}>
        <div className="grid-bg absolute inset-0 opacity-70" />
        <span className="relative rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">{p.category}</span>
        <span className="absolute right-6 top-6 rounded-full bg-navy-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {p.result}
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-lg font-bold group-hover:text-brand-600">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{p.text}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-900/70">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
