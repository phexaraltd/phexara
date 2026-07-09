import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import SiteEffects from "@/components/SiteEffects";

export const metadata = {
  metadataBase: new URL("https://www.phexara.co.uk"),
  icons: {
    icon: "/phexaraicon.png",
    shortcut: "/phexaraicon.png",
    apple: "/phexaraicon.png",
  },
  title: {
    default: "PHEXARA, LTD — Engineering Intelligent Systems",
    template: "%s — PHEXARA, LTD",
  },
  description:
    "PHEXARA develops advanced ethnical AI systems, cybersecurity solutions, digital twins, and intelligent infrastructure for enterprises worldwide.",
  openGraph: {
    title: "PHEXARA, LTD — Engineering Intelligent Systems",
    description:
      "PHEXARA develops advanced AI systems, cybersecurity solutions, digital twins, and intelligent infrastructure for enterprises worldwide.",
    siteName: "PHEXARA, LTD",
    type: "website",
    url: "https://www.phexara.co.uk",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "PHEXARA, LTD — Engineering Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHEXARA, LTD — Engineering Intelligent Systems",
    description:
      "PHEXARA develops advanced AI systems, cybersecurity solutions, digital twins, and intelligent infrastructure for enterprises worldwide.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PHEXARA, LTD",
    alternateName: "PHEXARA",
    url: "https://www.phexara.co.uk",
    logo: "https://www.phexara.co.uk/banner.png",
    description:
      "PHEXARA develops advanced AI systems, cybersecurity solutions, digital twins, and intelligent infrastructure for enterprises worldwide.",
    foundingDate: "2024",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Digital Twins",
      "Cloud Security",
      "Edge Computing",
      "AI Governance",
      "Smart Commerce",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Loader />
        <CustomCursor />
        <PageTransition />
        <Header />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}