import LegalPage from "@/components/LegalPage";
import { company } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms of Use", description: "Terms and conditions for using the digi1Xprt website.", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Please read these terms carefully before using the digi1Xprt website."
      sections={[
        { heading: "Acceptance of terms", body: "By accessing this website you agree to these terms. If you do not agree, please do not use the website." },
        { heading: "Use of content", body: "All content, logos and designs on this website are the property of digi1Xprt unless stated otherwise and may not be reproduced without written permission." },
        { heading: "Services", body: "Information about our services is provided for general purposes. Specific engagements are governed by separate written agreements." },
        { heading: "No investment advice", body: "Content on this website is for educational and informational purposes only and should not be treated as a recommendation to buy or sell any security." },
        { heading: "Limitation of liability", body: "digi1Xprt is not liable for any loss arising from the use of this website or reliance on its content." },
        { heading: "Contact", body: `Questions about these terms can be sent to ${company.email}.` },
      ]}
    />
  );
}
