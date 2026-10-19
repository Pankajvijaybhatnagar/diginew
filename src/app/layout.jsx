import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Effects from "@/components/Effects";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { company } from "@/data/site";
import { coreKeywords, localBusinessSchemas, organizationSchema, siteUrl, websiteSchema } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "digi1Xprt | IT, Finance & Share Market Company in Delhi",
    template: "%s | digi1Xprt",
  },
  description:
    "digi1Xprt: IT, finance & share-market company in Delhi and Kurukshetra — websites, apps, cloud, AI, wealth planning and stock market courses.",
  keywords: coreKeywords,
  applicationName: company.name,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  category: "Technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: company.name,
    title: "digi1Xprt — IT, Financial & Share Market Solutions | Do Big...",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "digi1Xprt — IT, Financial & Share Market Solutions",
    description: company.description,
  },
  verification: {
    // Paste the codes from Google Search Console / Bing Webmaster Tools into .env.local
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport = {
  themeColor: "#0B0039",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${poppins.variable} font-sans`}>
        <JsonLd data={[organizationSchema(), websiteSchema(), ...localBusinessSchemas()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2 focus:text-navy-900">
          Skip to content
        </a>
        <Preloader />
        <ScrollProgress />
        <Effects />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
