import PageHero from "./PageHero";

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <PageHero title={title} text={intro} crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-navy-900/50">Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-navy-900/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
