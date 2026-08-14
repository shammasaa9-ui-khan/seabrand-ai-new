// import AboutHero from "@/src/components/pages/about/AboutHero";
// import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
// import WhyChoose from "@/src/components/pages/about/Why-Choose";
// // import AboutImageGrid from "@/src/components/pages/about/AboutImageGrid";
// import WhyWeExist from "@/src/components/pages/about/why-we -exist";
// import BlueBackground from "@/src/components/shared/BlueBackground";

// export default function AboutPage() {
//   return (
//     <main
//       className="relative min-h-screen text-slate-100 pt-0 pb-0 md:pb-0 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden"
//       style={{
//         background: `
//           radial-gradient(ellipse 60% 45% at 80% 20%, rgba(14, 116, 244, 0.45) 0%, rgba(8, 50, 160, 0.2) 45%, rgba(1, 3, 10, 0.98) 80%, #01030a 100%),
//           linear-gradient(135deg, #070e18 0%, #041028 50%, #01030a 100%)
//         `
//       }}
//     >
//       <BlueBackground />
//       <div className="relative z-10">
//         <AboutHero />
//         <MissionVisionValues />
//         {/* <AboutImageGrid /> */}
//         <WhyWeExist />
//         {/* <WhyChoose /> */}
//         <WhyChoose />
//       </div>
//     </main>
//   );
// }

import type { Metadata } from "next";

import AboutHero from "@/src/components/pages/about/AboutHero";
import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
import WhyChoose from "@/src/components/pages/about/Why-Choose";
import WhyWeExist from "@/src/components/pages/about/why-we -exist";
import BlueBackground from "@/src/components/shared/BlueBackground";

export const metadata: Metadata = {
  title: "About SEABRAND AI | AI Strategic Branding Agency",

  description:
    "Learn about SEABRAND AI, an AI-first strategic branding ecosystem helping businesses, startups, professionals, and creators build meaningful, scalable, and future-ready brands.",

  keywords: [
    "SEABRAND AI",
    "AI Strategic Branding",
    "AI Branding Agency",
    "Strategic Branding",
    "Brand Strategy",
    "AI Marketing",
    "Branding Agency Kerala",
    "AI Branding Kerala",
  ],

  openGraph: {
    title: "About SEABRAND AI | AI Strategic Branding Agency",
    description:
      "Discover the vision, mission, philosophy, and AI-first strategic branding approach behind SEABRAND AI.",

    url: "https://https://seabrand.in/about",

    siteName: "SEABRAND AI",

    images: [
      {
        url: "https://seabrand.in/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About SEABRAND AI",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About SEABRAND AI | AI Strategic Branding Agency",
    description:
      "Discover the vision, mission, philosophy, and AI-first strategic branding approach behind SEABRAND AI.",
    images: ["https://seabrand.in/images/about-og-image.jpg"],
  },

  alternates: {
    canonical: "https://seabrand.in/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen text-slate-100 pt-0 pb-0 md:pb-0 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden"
      style={{
        background: `
          radial-gradient(
            ellipse 60% 45% at 80% 20%,
            rgba(14, 116, 244, 0.45) 0%,
            rgba(8, 50, 160, 0.2) 45%,
            rgba(1, 3, 10, 0.98) 80%,
            #01030a 100%
          ),
          linear-gradient(
            135deg,
            #070e18 0%,
            #041028 50%,
            #01030a 100%
          )
        `,
      }}
    >
      <BlueBackground />

      <div className="relative z-10">
        <AboutHero />
        <MissionVisionValues />
        <WhyWeExist />
        <WhyChoose />
      </div>
    </main>
  );
}
