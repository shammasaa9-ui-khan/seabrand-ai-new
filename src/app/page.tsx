// import type { Metadata } from "next";
// import IndustriesWeServe from "../components/home/BUILD-BRAND/industriesWeServe";
// import ExpertiseSection from "../components/home/expertise/ExpertiseSection";
// import FAQ from "../components/home/FAQ/FAQ";
// import FocusSection from "../components/home/focus/FocusSection";
// import Hero from "../components/home/hero/Hero";
// import PortfolioSection from "../components/home/portfolio-preview/PortfolioSection";
// import StrategicRevolution from "../components/home/revolution/StrategicRevolution";
// import ServicesSection from "../components/home/services-preview/ServicesSection";
// import TestimonialsSection from "../components/home/testimonials/TestimonialsSection";

// //  Home Page-yude Specific Metadata (SEO Optimized)
// export const metadata: Metadata = {
//   title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
//   description:
//     "SEABRAND AI empowers startups, businesses, creators, and entertainment brands in Kerala and worldwide through an AI-first strategic branding ecosystem.",
//   keywords: [
//     "SEABRAND AI",
//     "AI Branding Kerala",
//     "Strategic Branding Curator",
//     "Business Branding Kerala",
//     "Personal Branding AI",
//     "Startup Branding",
//   ],
//   alternates: {
//     canonical: "https://seabrand.in",
//   },
//   openGraph: {
//     title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
//     description:
//       "Transform your brand positioning and growth with our AI Strategic Branding Ecosystem.",
//     url: "https://seabrand.in",
//     siteName: "SEABRAND AI",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "https://seabrand.in/images/seabrand-og.png",
//         width: 1200,
//         height: 630,
//         alt: "SEABRAND AI Strategic Branding",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SEABRAND AI | AI Strategic Branding Curator",
//     description: "Kerala's First AI Strategic Branding Curator.",
//     images: ["https://seabrand.in/images/seabrand-og.png"],
//   },
// };

// export default function Home() {
//   return (
//     <main className="w-full">
//       <Hero />
//       <ServicesSection />
//       <FocusSection />
//       <ExpertiseSection />
//       <PortfolioSection />
//       <TestimonialsSection />
//       <StrategicRevolution />
//       <FAQ />
//       <IndustriesWeServe />
//     </main>
//   );
// }

import type { Metadata } from "next";

// Visual Sections
import Hero from "@/src/components/home/hero/Hero";
import ServicesSection from "@/src/components/home/services-preview/ServicesSection";
import FocusSection from "@/src/components/home/focus/FocusSection";
import ExpertiseSection from "@/src/components/home/expertise/ExpertiseSection";
import PortfolioSection from "@/src/components/home/portfolio-preview/PortfolioSection";
import TestimonialsSection from "@/src/components/home/testimonials/TestimonialsSection";
import StrategicRevolution from "@/src/components/home/revolution/StrategicRevolution";
import FAQ from "@/src/components/home/FAQ/FAQ";
import IndustriesWeServe from "@/src/components/home/BUILD-BRAND/industriesWeServe";

const SITE_URL = "https://seabrand.in";

//  1. Complete Home Page SEO Metadata
export const metadata: Metadata = {
  title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
  description:
    "SEABRAND AI is Kerala's First AI Strategic Branding Curator. Transform existing businesses, personal brands, startups, and entertainment brands through an AI-first strategic ecosystem.",
  keywords: [
    "SEABRAND AI",
    "AI Strategic Branding",
    "Branding Agency Kerala",
    "AI Branding Agency",
    "Business Branding Kerala",
    "Personal Branding Kerala",
    "Startup Branding India",
    "Entertainment Branding",
    "AI Strategic Branding Curator",
    "AI"
    
  ],
  authors: [{ name: "SEABRAND AI", url: SITE_URL }],
  creator: "SEABRAND AI",
  publisher: "SEABRAND AI",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
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
    title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
    description:
      "Empowering startups, businesses, creators, and entertainment brands in Kerala and worldwide through an AI-first strategic branding ecosystem.",
    url: SITE_URL,
    siteName: "SEABRAND AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/seabrand-og.png",
        width: 1200,
        height: 630,
        alt: "SEABRAND AI - Strategic Branding Curator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
    description:
      "Transform your brand positioning and growth with our AI Strategic Branding Ecosystem.",
    images: ["/images/seabrand-og.png"],
  },
  category: "Business & Branding Services",
};

export default function Home() {
  // 🚀 2. FAQ Schema Generator (Direct JSON-LD for Google Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SEABRAND AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEABRAND AI is Kerala's First AI Strategic Branding Curator. We help businesses, startups, professionals, and creators build stronger brands through an AI-first strategic branding ecosystem that combines strategy, curation, and intelligent workflows.",
        },
      },
      {
        "@type": "Question",
        name: "What makes SEABRAND AI different from a traditional branding agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional agencies usually focus on design, marketing, or advertising. SEABRAND AI focuses on building a complete branding ecosystem where strategy, branding, design, communication, and marketing work together to achieve long-term business growth.",
        },
      },
      {
        "@type": "Question",
        name: "What services does SEABRAND AI provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our four core services include: AI Strategic Business Branding, AI Strategic Personal Branding, AI Strategic Startup Branding, and AI Strategic Entertainment Branding. Each service is designed to help clients build, position, and grow their brand with a structured strategic approach.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work only with startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We work with businesses of all sizes, including startups, established companies, entrepreneurs, professionals, creators, and entertainment brands.",
        },
      },
      {
        "@type": "Question",
        name: "Does my business need AI to work with SEABRAND AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. Our clients don't need technical knowledge of AI. We use AI strategically behind the scenes to improve research, planning, branding, and marketing while keeping the process simple and business-focused.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only design logos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A logo is only one part of branding. We focus on complete brand strategy, positioning, identity, communication, marketing, and long-term business growth.",
        },
      },
      {
        "@type": "Question",
        name: "How does your branding process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our ecosystem follows a structured workflow: Discover → Strategize → Curate → Execute → Grow. This ensures every branding decision supports your business objectives and long-term vision.",
        },
      },
      {
        "@type": "Question",
        name: "Who can benefit from SEABRAND AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are designed for businesses, startups, entrepreneurs, personal brands, professionals, creators, influencers, entertainment brands, and corporate organizations.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help rebrand an existing business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We help existing businesses reposition their brand, refresh their identity, strengthen their market presence, and create new growth opportunities.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide one-time projects or long-term branding support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer both depending on your business goals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with clients outside Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Although SEABRAND AI is based in Kerala, we work with clients across India and internationally through online collaboration.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply contact our team through our website, email, or WhatsApp to schedule an initial consultation.",
        },
      },
    ],
  };

  //  3. Services ItemList Schema (Direct JSON Data for SEO)
  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SEABRAND AI Core Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "AI Strategic Business Branding",
          description:
            "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems.",
          url: `${SITE_URL}/services/business-branding`,
          provider: { "@type": "Organization", name: "SEABRAND AI" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "AI Strategic Personal Branding",
          description:
            "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem.",
          url: `${SITE_URL}/services/personal-branding`,
          provider: { "@type": "Organization", name: "SEABRAND AI" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "AI Strategic Startup Branding",
          description:
            "Transform ideas into market-ready startups through AI-driven strategy, branding, validation, and growth.",
          url: `${SITE_URL}/services/startup-branding`,
          provider: { "@type": "Organization", name: "SEABRAND AI" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "AI Strategic Entertainment Branding",
          description:
            "Build an entertainment brand with AI-driven strategy, content, audience growth, and monetization.",
          url: `${SITE_URL}/services/entertainment-branding`,
          provider: { "@type": "Organization", name: "SEABRAND AI" },
        },
      },
    ],
  };

  //  4. Footer & Business Info Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEABRAND AI",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Kerala's First AI Strategic Branding Curator helping businesses, startups, professionals, and creators build stronger brands.",
    email: "curator@seabrand.in",
    telephone: "+918113925507",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      postalCode: "676503",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/seabrand.ai/",
      "https://www.facebook.com/",
      "https://www.linkedin.com/company/seabrand-ai/",
    ],
  };

  return (
    <main className="w-full min-h-screen">
      {/*  Direct SEO JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Visual Components */}
      <Hero />
      <ServicesSection />
      <FocusSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <StrategicRevolution />
      <FAQ />
      <IndustriesWeServe />
    </main>
  );
}