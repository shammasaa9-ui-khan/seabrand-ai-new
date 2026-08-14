

// import WhyThisApproach from "@/src/components/Eccosystem/Approach-Works";
// import Framework from "@/src/components/Eccosystem/Eco-Framework";
// import EcosystemHero from "@/src/components/Eccosystem/Eco-Hero";
// import EcosystemPillars from "@/src/components/Eccosystem/Eco-Pillars";
// import EccoWorkflow from "@/src/components/Eccosystem/Eco-Workflow";


// import React from "react";


// export default function eccosystemPage() {
//   return (
//     <main className="min-h-screen bg-white text-slate-900 pt-0 pb-0 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
//         <EcosystemHero/>
//         <EcosystemPillars/>
//         <EccoWorkflow/>
//         <Framework/>
//         <WhyThisApproach/>
        
//     </main>
//   );
// }


import type { Metadata } from "next";

import EcosystemHero from "@/src/components/Eccosystem/Eco-Hero";
import EcosystemPillars from "@/src/components/Eccosystem/Eco-Pillars";
import EccoWorkflow from "@/src/components/Eccosystem/Eco-Workflow";
import Framework from "@/src/components/Eccosystem/Eco-Framework";
import WhyThisApproach from "@/src/components/Eccosystem/Approach-Works";

const SITE_URL = "https://seabrand.in";

export const metadata: Metadata = {
  title:
    "AI Branding Ecosystem | Strategy, AI & Curation for Business Growth | Seabrand AI",

  description:
    "Discover the Seabrand AI Ecosystem — an integrated branding framework combining strategy, artificial intelligence, creative curation and marketing to build stronger brands and drive sustainable business growth.",

  keywords: [
    "AI branding ecosystem",
    "branding ecosystem",
    "AI branding",
    "AI branding agency",
    "brand strategy",
    "brand strategy agency",
    "strategic branding",
    "business branding",
    "brand identity",
    "creative branding",
    "AI marketing",
    "marketing strategy",
    "brand growth strategy",
    "digital branding",
    "branding workflow",
    "business growth",
    "AI business strategy",
    "branding agency India",
    "branding agency Kerala",
    "Seabrand AI",
  ],

  authors: [
    {
      name: "Seabrand AI",
      url: SITE_URL,
    },
  ],

  creator: "Seabrand AI",
  publisher: "Seabrand AI",

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: `${SITE_URL}/ecosystem`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/ecosystem`,
    siteName: "Seabrand AI",

    title:
      "AI Branding Ecosystem | Strategy, AI & Curation | Seabrand AI",

    description:
      "A connected branding ecosystem combining strategy, artificial intelligence, creative curation and marketing to help businesses build stronger brands and achieve sustainable growth.",

    images: [
      {
        url: "/images/seabrand-og.png",
        width: 1200,
        height: 630,
        alt: "Seabrand AI Branding Ecosystem",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Branding Ecosystem | Strategy, AI & Curation | Seabrand AI",

    description:
      "Explore the Seabrand AI Ecosystem — where strategy, artificial intelligence, curation and marketing work together to build stronger brands.",

    images: ["/images/seabrand-og.png"],
  },

  category: "Business Services",
};

const ecosystemSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Seabrand AI",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/seabrand_logo.png`,
      },
    },

    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/ecosystem#webpage`,
      url: `${SITE_URL}/ecosystem`,
      name:
        "AI Branding Ecosystem | Strategy, AI & Curation | Seabrand AI",

      description:
        "The Seabrand AI Ecosystem connects strategy, artificial intelligence, creative curation and marketing into one structured branding framework.",

      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },

      about: {
        "@id": `${SITE_URL}/ecosystem#service`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "Service",
      "@id": `${SITE_URL}/ecosystem#service`,
      name: "Seabrand AI Branding Ecosystem",

      description:
        "An integrated branding ecosystem combining strategy, artificial intelligence, creative curation and marketing to help businesses build stronger brands and achieve sustainable growth.",

      provider: {
        "@id": `${SITE_URL}/#organization`,
      },

      serviceType: [
        "Brand Strategy",
        "AI Branding",
        "Brand Identity",
        "Creative Curation",
        "Marketing Strategy",
        "Business Growth Strategy",
      ],

      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/ecosystem#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ecosystem",
          item: `${SITE_URL}/ecosystem`,
        },
      ],
    },
  ],
};

export default function EcosystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecosystemSchema),
        }}
      />

      <main className="min-h-screen bg-white text-slate-900 pt-0 pb-0 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
        <EcosystemHero />

        <EcosystemPillars />

        <EccoWorkflow />

        <Framework />

        <WhyThisApproach />
      </main>
    </>
  );
}