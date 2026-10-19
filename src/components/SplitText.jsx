// Splits text into words that slide up one after another when the parent
// `.reveal` becomes visible (or immediately inside a `.split-auto` wrapper).
export default function SplitText({ text, start = 0, baseDelay = 0, className = "" }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="split-word">
      <span className={className} style={{ "--i": start + i, "--base": `${baseDelay}ms` }}>
        {word}
      </span>
      {"\u00A0"}
    </span>
  ));
}

export function wordCount(text = "") {
  return text ? text.split(" ").length : 0;
}

// Orange hand-drawn line that draws itself under highlighted words
export function SwooshUnderline() {
  return (
    <svg
      className="swoosh-underline pointer-events-none absolute -bottom-2 left-0 h-3 w-full overflow-visible"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M2 9 C 50 2, 120 2, 198 6" pathLength="1" fill="none" stroke="#FF9908" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
