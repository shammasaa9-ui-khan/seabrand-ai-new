// // import type { Metadata } from "next";
// // import IndustriesWeServe from "../components/home/BUILD-BRAND/industriesWeServe";
// // import ExpertiseSection from "../components/home/expertise/ExpertiseSection";
// // import FAQ from "../components/home/FAQ/FAQ";
// // import FocusSection from "../components/home/focus/FocusSection";
// // import Hero from "../components/home/hero/Hero";
// // import PortfolioSection from "../components/home/portfolio-preview/PortfolioSection";
// // import StrategicRevolution from "../components/home/revolution/StrategicRevolution";
// // import ServicesSection from "../components/home/services-preview/ServicesSection";
// // import TestimonialsSection from "../components/home/testimonials/TestimonialsSection";

// // //  Home Page-yude Specific Metadata (SEO Optimized)
// // export const metadata: Metadata = {
// //   title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
// //   description:
// //     "SEABRAND AI empowers startups, businesses, creators, and entertainment brands in Kerala and worldwide through an AI-first strategic branding ecosystem.",
// //   keywords: [
// //     "SEABRAND AI",
// //     "AI Branding Kerala",
// //     "Strategic Branding Curator",
// //     "Business Branding Kerala",
// //     "Personal Branding AI",
// //     "Startup Branding",
// //   ],
// //   alternates: {
// //     canonical: "https://seabrand.in",
// //   },
// //   openGraph: {
// //     title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
// //     description:
// //       "Transform your brand positioning and growth with our AI Strategic Branding Ecosystem.",
// //     url: "https://seabrand.in",
// //     siteName: "SEABRAND AI",
// //     locale: "en_IN",
// //     type: "website",
// //     images: [
// //       {
// //         url: "https://seabrand.in/images/seabrand-og.png",
// //         width: 1200,
// //         height: 630,
// //         alt: "SEABRAND AI Strategic Branding",
// //       },
// //     ],
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "SEABRAND AI | AI Strategic Branding Curator",
// //     description: "Kerala's First AI Strategic Branding Curator.",
// //     images: ["https://seabrand.in/images/seabrand-og.png"],
// //   },
// // };

// // export default function Home() {
// //   return (
// //     <main className="w-full">
// //       <Hero />
// //       <ServicesSection />
// //       <FocusSection />
// //       <ExpertiseSection />
// //       <PortfolioSection />
// //       <TestimonialsSection />
// //       <StrategicRevolution />
// //       <FAQ />
// //       <IndustriesWeServe />
// //     </main>
// //   );
// // }

// import type { Metadata } from "next";

// // Visual Sections
// import Hero from "@/src/components/home/hero/Hero";
// import ServicesSection from "@/src/components/home/services-preview/ServicesSection";
// import FocusSection from "@/src/components/home/focus/FocusSection";
// import ExpertiseSection from "@/src/components/home/expertise/ExpertiseSection";
// import PortfolioSection from "@/src/components/home/portfolio-preview/PortfolioSection";
// import TestimonialsSection from "@/src/components/home/testimonials/TestimonialsSection";
// import StrategicRevolution from "@/src/components/home/revolution/StrategicRevolution";
// import FAQ from "@/src/components/home/FAQ/FAQ";
// import IndustriesWeServe from "@/src/components/home/BUILD-BRAND/industriesWeServe";

// const SITE_URL = "https://seabrand.in";

// //  1. Complete Home Page SEO Metadata
// export const metadata: Metadata = {
//   title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
//   description:
//     "SEABRAND AI is Kerala's First AI Strategic Branding Curator. Transform existing businesses, personal brands, startups, and entertainment brands through an AI-first strategic ecosystem.",
//   keywords: [
//     "SEABRAND AI",
//     "AI Strategic Branding",
//     "Branding Agency Kerala",
//     "AI Branding Agency",
//     "Business Branding Kerala",
//     "Personal Branding Kerala",
//     "Startup Branding India",
//     "Entertainment Branding",
//     "AI Strategic Branding Curator",
//     "AI",
//     "Digital Marketing That Drives Growth",
//     "digital marketing agency",
//     "branding agency",
//     "brand strategy",
//     "AI digital marketing kottakal", 
//     "performance marketing", 
//     "SEO services",
//     "social media marketing",
//     "Best digital marketing ", 
//     "web development", 
//     "digital transformation",
//     "business growth",
//     "marketing strategy", 
//     "AI Business"
    
//   ],
//   authors: [{ name: "SEABRAND AI", url: SITE_URL }],
//   creator: "SEABRAND AI",
//   publisher: "SEABRAND AI",
//   metadataBase: new URL(SITE_URL),
//   alternates: {
//     canonical: SITE_URL,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   openGraph: {
//     title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
//     description:
//       "Empowering startups, businesses, creators, and entertainment brands in Kerala and worldwide through an AI-first strategic branding ecosystem.",
//     url: SITE_URL,
//     siteName: "SEABRAND AI",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "/images/seabrand-og.png",
//         width: 1200,
//         height: 630,
//         alt: "SEABRAND AI - Strategic Branding Curator",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SEABRAND AI | Kerala's First AI Strategic Branding Curator",
//     description:
//       "Transform your brand positioning and growth with our AI Strategic Branding Ecosystem.",
//     images: ["/images/seabrand-og.png"],
//   },
//   category: "Business & Branding Services",
// };

// export default function Home() {
//   // 🚀 2. FAQ Schema Generator (Direct JSON-LD for Google Rich Snippets)
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "What is SEABRAND AI?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "SEABRAND AI is Kerala's First AI Strategic Branding Curator. We help businesses, startups, professionals, and creators build stronger brands through an AI-first strategic branding ecosystem that combines strategy, curation, and intelligent workflows.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What makes SEABRAND AI different from a traditional branding agency?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Traditional agencies usually focus on design, marketing, or advertising. SEABRAND AI focuses on building a complete branding ecosystem where strategy, branding, design, communication, and marketing work together to achieve long-term business growth.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What services does SEABRAND AI provide?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Our four core services include: AI Strategic Business Branding, AI Strategic Personal Branding, AI Strategic Startup Branding, and AI Strategic Entertainment Branding. Each service is designed to help clients build, position, and grow their brand with a structured strategic approach.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Do you work only with startups?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No. We work with businesses of all sizes, including startups, established companies, entrepreneurs, professionals, creators, and entertainment brands.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Does my business need AI to work with SEABRAND AI?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Not at all. Our clients don't need technical knowledge of AI. We use AI strategically behind the scenes to improve research, planning, branding, and marketing while keeping the process simple and business-focused.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Do you only design logos?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No. A logo is only one part of branding. We focus on complete brand strategy, positioning, identity, communication, marketing, and long-term business growth.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How does your branding process work?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Our ecosystem follows a structured workflow: Discover → Strategize → Curate → Execute → Grow. This ensures every branding decision supports your business objectives and long-term vision.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Who can benefit from SEABRAND AI?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Our services are designed for businesses, startups, entrepreneurs, personal brands, professionals, creators, influencers, entertainment brands, and corporate organizations.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can you help rebrand an existing business?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. We help existing businesses reposition their brand, refresh their identity, strengthen their market presence, and create new growth opportunities.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Do you provide one-time projects or long-term branding support?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes, we offer both depending on your business goals.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Do you work with clients outside Kerala?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. Although SEABRAND AI is based in Kerala, we work with clients across India and internationally through online collaboration.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How can I get started?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Simply contact our team through our website, email, or WhatsApp to schedule an initial consultation.",
//         },
//       },
//     ],
//   };

//   //  3. Services ItemList Schema (Direct JSON Data for SEO)
//   const servicesListSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     name: "SEABRAND AI Core Services",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         item: {
//           "@type": "Service",
//           name: "AI Strategic Business Branding",
//           description:
//             "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems.",
//           url: `${SITE_URL}/services/business-branding`,
//           provider: { "@type": "Organization", name: "SEABRAND AI" },
//         },
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         item: {
//           "@type": "Service",
//           name: "AI Strategic Personal Branding",
//           description:
//             "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem.",
//           url: `${SITE_URL}/services/personal-branding`,
//           provider: { "@type": "Organization", name: "SEABRAND AI" },
//         },
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         item: {
//           "@type": "Service",
//           name: "AI Strategic Startup Branding",
//           description:
//             "Transform ideas into market-ready startups through AI-driven strategy, branding, validation, and growth.",
//           url: `${SITE_URL}/services/startup-branding`,
//           provider: { "@type": "Organization", name: "SEABRAND AI" },
//         },
//       },
//       {
//         "@type": "ListItem",
//         position: 4,
//         item: {
//           "@type": "Service",
//           name: "AI Strategic Entertainment Branding",
//           description:
//             "Build an entertainment brand with AI-driven strategy, content, audience growth, and monetization.",
//           url: `${SITE_URL}/services/entertainment-branding`,
//           provider: { "@type": "Organization", name: "SEABRAND AI" },
//         },
//       },
//     ],
//   };

//   //  4. Footer & Business Info Schema
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "SEABRAND AI",
//     url: SITE_URL,
//     logo: `${SITE_URL}/logo.png`,
//     description:
//       "Kerala's First AI Strategic Branding Curator helping businesses, startups, professionals, and creators build stronger brands.",
//     email: "curator@seabrand.in",
//     telephone: "+918113925507",
//     address: {
//       "@type": "PostalAddress",
//       addressRegion: "Kerala",
//       postalCode: "676503",
//       addressCountry: "IN",
//     },
//     sameAs: [
//       "https://www.instagram.com/seabrand.ai/",
//       "https://www.facebook.com/",
//       "https://www.linkedin.com/company/seabrand-ai/",
//     ],
//   };

//   return (
//     <main className="w-full min-h-screen">
//       {/*  Direct SEO JSON-LD Scripts */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//       />

//       {/* Visual Components */}
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

// Home Page Sections
import Hero from "@/src/components/home/hero/Hero";
import ServicesSection from "@/src/components/home/services-preview/ServicesSection";
import FocusSection from "@/src/components/home/focus/FocusSection";
import ExpertiseSection from "@/src/components/home/expertise/ExpertiseSection";
import PortfolioSection from "@/src/components/home/portfolio-preview/PortfolioSection";
import TestimonialsSection from "@/src/components/home/testimonials/TestimonialsSection";
import StrategicRevolution from "@/src/components/home/revolution/StrategicRevolution";
import FAQ from "@/src/components/home/FAQ/FAQ";
import IndustriesWeServe from "@/src/components/home/BUILD-BRAND/industriesWeServe";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL = "https://seabrand.in";
const SITE_NAME = "SEABRAND AI";

const OG_IMAGE = `${SITE_URL}/images/seabrand_logo.png`;
const LOGO_URL = `${SITE_URL}/images/seabrand_logo.png`;

/* =========================================================
   HOMEPAGE METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "SEABRAND AI | AI Strategic Branding & Growth",
    template: "%s | SEABRAND AI",
  },

  description:
    "SEABRAND AI is an AI strategic branding agency in Kerala helping businesses, startups, personal brands, and entertainment brands build stronger brands through strategy, identity, positioning, and sustainable growth.",

  keywords: [
    "SEABRAND AI",
    "AI strategic branding",
    "AI branding agency",
    "branding agency Kerala",
    "brand strategy Kerala",
    "business branding",
    "personal branding",
    "startup branding",
    "entertainment branding",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "Business & Branding",

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
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: "SEABRAND AI | AI Strategic Branding & Growth",

    description:
      "AI strategic branding for businesses, startups, personal brands, and entertainment brands in Kerala, India, and worldwide.",

    
  },

  twitter: {
    card: "summary_large_image",

    title: "SEABRAND AI | AI Strategic Branding & Growth",

    description:
      "AI-powered strategic branding for businesses, startups, personal brands, and entertainment brands.",

    images: [OG_IMAGE],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* =========================================================
   ORGANIZATION SCHEMA
========================================================= */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: SITE_NAME,
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
  },

  description:
    "SEABRAND AI is an AI strategic branding agency in Kerala helping businesses, startups, personal brands, and entertainment brands build stronger brands through strategy, identity, positioning, and sustainable growth.",

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
    "https://www.linkedin.com/company/seabrand-ai/",
  ],
};

/* =========================================================
   WEBSITE SCHEMA
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,
  url: SITE_URL,

  description:
    "AI strategic branding and growth ecosystem for businesses, startups, personal brands, and entertainment brands.",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    name: "AI Strategic Business Branding",
    description:
      "Transform existing businesses through strategic branding, identity, communication, marketing, and AI-powered growth systems.",
    url: `${SITE_URL}/services/business-branding`,
  },

  {
    name: "AI Strategic Personal Branding",
    description:
      "Build a strong personal identity, authority, positioning, and influence through strategic personal branding.",
    url: `${SITE_URL}/services/personal-branding`,
  },

  {
    name: "AI Strategic Startup Branding",
    description:
      "Transform startup ideas into market-ready brands through strategy, positioning, validation, branding, and growth.",
    url: `${SITE_URL}/services/startup-branding`,
  },

  {
    name: "AI Strategic Entertainment Branding",
    description:
      "Build entertainment brands through strategic positioning, content, audience development, branding, and monetization.",
    url: `${SITE_URL}/services/entertainment-branding`,
  },
];

/* =========================================================
   SERVICES SCHEMA
========================================================= */

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  "@id": `${SITE_URL}/#services`,

  name: "SEABRAND AI Services",

  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",

    position: index + 1,

    item: {
      "@type": "Service",

      name: service.name,
      description: service.description,
      url: service.url,

      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  })),
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  "@id": `${SITE_URL}/#faq`,

  mainEntity: [
    {
      "@type": "Question",

      name: "What is SEABRAND AI?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEABRAND AI is an AI strategic branding ecosystem that helps businesses, startups, professionals, creators, and entertainment brands build stronger brands through strategy, branding, intelligent workflows, and growth systems.",
      },
    },

    {
      "@type": "Question",

      name: "What makes SEABRAND AI different from a traditional branding agency?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEABRAND AI combines strategy, branding, design, communication, marketing, and AI-powered workflows into a connected branding ecosystem focused on long-term business growth.",
      },
    },

    {
      "@type": "Question",

      name: "What services does SEABRAND AI provide?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEABRAND AI provides AI Strategic Business Branding, AI Strategic Personal Branding, AI Strategic Startup Branding, and AI Strategic Entertainment Branding.",
      },
    },

    {
      "@type": "Question",

      name: "Do you work only with startups?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No. SEABRAND AI works with startups, established businesses, entrepreneurs, professionals, creators, personal brands, and entertainment brands.",
      },
    },

    {
      "@type": "Question",

      name: "Does my business need AI to work with SEABRAND AI?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No. Clients do not need technical AI knowledge. SEABRAND AI uses AI strategically behind the scenes to improve research, planning, branding, marketing, and business workflows.",
      },
    },

    {
      "@type": "Question",

      name: "Do you only design logos?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No. A logo is only one part of branding. SEABRAND AI focuses on brand strategy, positioning, identity, communication, marketing, and sustainable growth.",
      },
    },

    {
      "@type": "Question",

      name: "How does the SEABRAND AI branding process work?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The SEABRAND AI process follows a structured workflow: Discover, Strategize, Curate, Execute, Optimize, and Scale.",
      },
    },

    {
      "@type": "Question",

      name: "Who can benefit from SEABRAND AI?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEABRAND AI is designed for businesses, startups, entrepreneurs, personal brands, professionals, creators, influencers, entertainment brands, and corporate organizations.",
      },
    },

    {
      "@type": "Question",

      name: "Can SEABRAND AI help rebrand an existing business?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. SEABRAND AI can help existing businesses reposition their brand, refresh their identity, strengthen their market presence, and develop new growth opportunities.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide one-time projects or long-term branding support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEABRAND AI provides both one-time branding projects and longer-term strategic branding support depending on the client's goals.",
      },
    },

    {
      "@type": "Question",

      name: "Do you work with clients outside Kerala?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. SEABRAND AI works with clients across India and internationally through online collaboration.",
      },
    },

    {
      "@type": "Question",

      name: "How can I get started with SEABRAND AI?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "You can get started by contacting SEABRAND AI through the website, email, or WhatsApp to discuss your branding and business goals.",
      },
    },
  ],
};

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <main className="w-full min-h-screen">

      {/* =====================================================
          SEO STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

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