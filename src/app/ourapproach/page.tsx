

import { Metadata } from "next";
import React from "react";

import ApproachHeader from "@/src/components/Approach/Approchheader";
import ApproachPillar from "@/src/components/Approach/Three-Pillar";
import HowWeWork from "@/src/components/Approach/How-we-work";
import BlueBackground from "@/src/components/shared/BlueBackground";

// 1. Dynamic Metadata Export for Next.js SEO
export const metadata: Metadata = {
  title: "Our Approach | SEABRAND AI - Strategic Branding & AI Integration",
  description:
    "Discover how SEABRAND AI combines artificial intelligence, strategic thinking, and human curation to build sustainable, high-growth brand ecosystems.",
  keywords: [
    "AI branding strategy",
    "brand curation",
    "branding ecosystem",
    "AI integration",
    "business strategy",
    "SEABRAND AI approach",
  ],
  openGraph: {
    title: "Our Approach | SEABRAND AI - Strategic Branding & AI Integration",
    description:
      "Where Strategy Meets Intelligence. Learn about our 6-step workflow and core pillars for building modern brand ecosystems.",
    url: "https://yourdomain.com/ourapproach", // Replace with your actual domain
    siteName: "SEABRAND AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | SEABRAND AI",
    description:
      "Combining AI, Strategic Thinking, and Human Curation for growth-focused branding.",
  },
  alternates: {
    canonical: "https://yourdomain.com/ourapproach", // Replace with your actual domain
  },
};

export default function ApproachPage() {
  // 2. Structured Data (JSON-LD Schema) for Google Search Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "SEABRAND AI Brand Ecosystem Process",
    description:
      "A 6-step strategic workflow combining AI, strategic planning, and human curation for brand growth.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discover",
        text: "Understanding your business, audience, challenges, and opportunities.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Strategize",
        text: "Developing a comprehensive branding and growth roadmap tailored to your objectives.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Curate",
        text: "Transforming strategic insights into brand identity and content assets.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Execute",
        text: "Delivering synchronized execution across branding, design, and digital platforms.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Optimize",
        text: "Measuring and refining performance using data-driven insights and AI analysis.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Scale",
        text: "Evolving and adapting strategy to support ongoing business success.",
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen overflow-x-hidden bg-[#02040a] text-slate-100 pt-0 pb-0 selection:bg-[#6748FE] selection:text-white">
        <BlueBackground />

        {/* PAGE CONTENT */}
        <div className="relative z-10 w-full flex flex-col gap-0">
          <ApproachHeader />
          <HowWeWork />
          <ApproachPillar />
        </div>
      </main>
    </>
  );
}