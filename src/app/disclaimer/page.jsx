import LegalPage from "@/components/LegalPage";
import { disclaimer } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Disclaimer", description: "Investment risk disclosure and disclaimer for digi1Xprt's financial and share-market content.", path: "/disclaimer" });

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Important information regarding investments and market-related content."
      sections={[
        { heading: "Market risk", body: disclaimer },
        { heading: "No guaranteed returns", body: "digi1Xprt does not guarantee or assure any returns. Any projections, calculators or illustrations are indicative only and actual results may vary." },
        { heading: "Educational content", body: "Courses, articles and research shared by digi1Xprt are intended for education and should not be construed as personalised investment advice. Please consult a qualified advisor before investing." },
        { heading: "Market data", body: "Prices, indices and charts shown on this website are illustrative and may not reflect real-time market values." },
        { heading: "Regulatory information", body: "Registration details applicable to our regulated activities will be displayed here." },
      ]}
    />
  );
}
