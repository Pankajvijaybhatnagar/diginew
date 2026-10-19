// Renders one or more schema.org objects as JSON-LD for search engines.
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
    />
  ));
}
