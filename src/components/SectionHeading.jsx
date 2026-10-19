import Reveal from "./Reveal";
import SplitText, { SwooshUnderline, wordCount } from "./SplitText";

export default function SectionHeading({ eyebrow, title, highlight, text, center = true, dark = false }) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <span className={`${dark ? "eyebrow-dark" : "eyebrow"} stagger-item`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-brand-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        <SplitText text={title} baseDelay={150} />
        {highlight && (
          <span className="relative inline-block text-brand-500">
            <SplitText text={highlight} start={wordCount(title)} baseDelay={150} />
            <SwooshUnderline />
          </span>
        )}
      </h2>
      {text && (
        <p
          className={`stagger-item mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-navy-900/65"}`}
          style={{ "--i": 4 }}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
