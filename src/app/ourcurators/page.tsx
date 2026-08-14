// // import TeamHeader from "@/src/components/pages/team/TeamHeader";
// // import TeamGrid from "@/src/components/pages/team/TeamGrid";
// // import TeamQuotes from "@/src/components/pages/team/TeamQuotes";

// // export default function TeamPage() {
// //   return (
// //     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-32 selection:bg-[#6748FE] selection:text-white overflow-hidden w-full">
// //       {/* SECTION 1: THE TEAM (PHOTOS) */}
// //       <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
// //         <TeamHeader />
// //         <TeamGrid />
// //       </section>

// //       {/* SECTION 2: SPLIT-LAYOUT SLIDING QUOTES */}
// //       <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mt-32 md:mt-48 py-20">
// //         <TeamQuotes />
// //       </section>
// //     </main>
// //   );
// // }


// import TeamHeader from "@/src/components/pages/team/TeamHeader";
// import TeamGrid from "@/src/components/pages/team/TeamGrid";
// import TeamQuotes from "@/src/components/pages/team/TeamQuotes";

// export default function TeamPage() {
//   return (
//     <main className="min-h-screen bg-white text-zinc-900 pt-16 pb-16 selection:bg-[#6748FE] selection:text-white overflow-hidden w-full">
      
//       {/* SECTION 1: THE TEAM (PHOTOS) */}
//       <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20">
//         <TeamHeader />
//         <TeamGrid />
//       </section>

//       {/* SECTION 2: HIGH-CONTRAST QUOTES */}
//       {/* Reduced horizontal padding so the dark block spans beautifully on desktop */}
//       <section className="w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10 mt-0 md:mt-0">
//         <TeamQuotes />
//       </section>
      
//     </main>
//   );
// }

import { Metadata } from "next";
import React from "react";

import TeamHeader from "@/src/components/pages/team/TeamHeader";
import TeamGrid from "@/src/components/pages/team/TeamGrid";
import TeamQuotes from "@/src/components/pages/team/TeamQuotes";

// 1. Export standard SEO Metadata
export const metadata: Metadata = {
  title: "Our Curators | Meet the Team Behind SEABRAND AI",
  description:
    "Meet the visionaries, strategists, and creators shaping the future of AI-driven branding and digital experiences at SEABRAND AI.",
  keywords: [
    "SEABRAND AI team",
    "branding curators",
    "Fasalu Rahman KP",
    "AI agency leaders",
    "digital experience creators",
    "our curators",
  ],
  openGraph: {
    title: "Our Curators | Meet the Team Behind SEABRAND AI",
    description:
      "The minds behind the magic. Discover our leadership team and branding curators building purposeful digital experiences.",
    url: "https://yourdomain.com/ourcurators", // Replace with your actual domain
    siteName: "SEABRAND AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Curators | SEABRAND AI",
    description:
      "The minds behind the magic. Discover our leadership team and branding curators.",
  },
  alternates: {
    canonical: "https://yourdomain.com/ourcurators", // Replace with your actual domain
  },
};

export default function TeamPage() {
  // 2. Structured Data (JSON-LD) for Organization & Key Leadership
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Curators - SEABRAND AI",
    description: "Meet the leadership team and curators behind SEABRAND AI.",
    mainEntity: {
      "@type": "Organization",
      name: "SEABRAND AI",
      url: "https://yourdomain.com",
      founder: [
        {
          "@type": "Person",
          name: "Fasalu Rahman KP",
          jobTitle: "CEO & Founder",
        },
        {
          "@type": "Person",
          name: "Sammas Khan",
          jobTitle: "CEO & Founder",
        },
        {
          "@type": "Person",
          name: "Safuwan",
          jobTitle: "CEO & Founder",
        },
      ],
    },
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-zinc-900 pt-16 pb-16 selection:bg-[#6748FE] selection:text-white overflow-hidden w-full">
        {/* SECTION 1: THE TEAM (PHOTOS) */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20">
          <TeamHeader />
          <TeamGrid />
        </section>

        {/* SECTION 2: HIGH-CONTRAST QUOTES */}
        <section className="w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10 mt-0 md:mt-0">
          <TeamQuotes />
        </section>
      </main>
    </>
  );
}