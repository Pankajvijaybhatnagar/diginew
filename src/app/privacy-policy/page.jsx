import LegalPage from "@/components/LegalPage";
import { company } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "How digi1Xprt collects, uses and protects your personal information.", path: "/privacy-policy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How digi1Xprt collects, uses and protects your personal information."
      sections={[
        { heading: "Information we collect", body: "We collect information you voluntarily provide through forms — such as your name, email, phone number and message — and basic usage data such as pages visited and device type to improve our website." },
        { heading: "How we use your information", body: "We use your information to respond to enquiries, provide requested services, send updates you have subscribed to, and improve our offerings. We do not sell your personal data." },
        { heading: "Data security", body: "We apply reasonable technical and organisational safeguards to protect your data against unauthorised access, alteration or disclosure." },
        { heading: "Cookies", body: "Our website may use cookies and similar technologies for analytics and to remember preferences. You can control cookies through your browser settings." },
        { heading: "Third-party services", body: "We may use trusted third-party tools (such as analytics, email and hosting providers) that process data on our behalf under appropriate confidentiality obligations." },
        { heading: "Your rights", body: `You may request access, correction or deletion of your personal data at any time by writing to ${company.email}.` },
      ]}
    />
  );
}
