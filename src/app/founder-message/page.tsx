

// // import MeetFounder from "@/src/components/founder/founder";
// import MeetFounder from "@/src/components/founder/founder";
// import FoundersJourney from "@/src/components/founder/foundermessage";


// export default function FounderMessagePage() {
//   return (
//     <main className="min-h-screen bg-[#EFECE6] text-slate-900 pt-10  selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
//       <MeetFounder/> 
//       <FoundersJourney/>

//     </main>
//   );
// }

import type { Metadata } from "next";

import MeetFounder from "@/src/components/founder/founder";
import FoundersJourney from "@/src/components/founder/foundermessage";

export const metadata: Metadata = {
  title: "Fazal | Founder & AI Strategic Brand Curator | SEABRAND AI",

  description:
    "Meet Fazal, Founder of SEABRAND AI and PROCODER. Discover his entrepreneurial journey, experience in technology and branding, and his vision for AI-first strategic branding.",

  keywords: [
    "Fazal",
    "Fazal SEABRAND AI",
    "SEABRAND AI Founder",
    "Founder of SEABRAND AI",
    "AI Strategic Brand Curator",
    "Fazal PROCODER",
    "SEABRAND AI",
    "AI branding",
    "strategic branding",
    "AI-first branding",
    "brand strategy",
    "business branding",
    "PROCODER",
  ],

  authors: [
    {
      name: "Fazal",
    },
  ],

  creator: "SEABRAND AI",

  openGraph: {
    title: "Fazal | Founder & AI Strategic Brand Curator",
    description:
      "Discover the journey, vision, and entrepreneurial story of Fazal, Founder of SEABRAND AI and PROCODER.",

    type: "profile",

    url: "https://seabrand.in/founder-message",

    siteName: "SEABRAND AI",

    images: [
      {
        url: "https://seabrand.in/images/team/fazal.png",
        width: 1200,
        height: 1500,
        alt: "Fazal - Founder of SEABRAND AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fazal | Founder & AI Strategic Brand Curator",
    description:
      "Meet Fazal, Founder of SEABRAND AI and PROCODER, and discover his journey in technology, branding, strategy, and entrepreneurship.",
    images: ["https://seabrand.in/images/team/fazal.png"],
  },

  alternates: {
    canonical: "https://seabrand.in/founder-message",
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
};

export default function FounderMessagePage() {
  return (
    <main className="min-h-screen bg-[#EFECE6] text-slate-900 pt-10 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
      <MeetFounder />
      <FoundersJourney />
    </main>
  );
}