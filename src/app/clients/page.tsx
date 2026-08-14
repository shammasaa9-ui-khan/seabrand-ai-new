// import ClientsHeader from "@/src/components/pages/clients/ClientsHeader";
// import ClientsGrid from "@/src/components/pages/clients/ClientsGrid";

// export default function ClientsPage() {
//   return (
//     <main className="min-h-screen bg-white pt-32 pb-32 relative overflow-hidden w-full selection:bg-[#6748FE] selection:text-white">
//       {/* Optional: Subtle ambient glow to make the grid pop */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-[#6748FE]/5 rounded-full blur-[150px] pointer-events-none z-0" />

//       {/* Universal Container */}
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
//         <ClientsHeader />
//         <ClientsGrid />
//       </div>
//     </main>
//   );
// }


import { Metadata } from "next";
import ClientsHeader from "@/src/components/pages/clients/ClientsHeader";
import ClientsGrid from "@/src/components/pages/clients/ClientsGrid";
import { clients } from "@/src/data/clients.data";

// 1. Sea Brand SEO Metadata Setup
export const metadata: Metadata = {
  title: "Our Clients & Partners | Sea Brand",
  description:
    "Discover the brands, startups, and businesses Sea Brand collaborates with to deliver high-impact digital solutions, design, and web development.",
  keywords: [
    "Sea Brand",
    "Sea Brand Clients",
    "Digital Agency Kerala",
    "Web Development Partners",
    "Client Portfolio",
  ],
  metadataBase: new URL("https://seabrand.in"),
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Our Clients & Partners | Sea Brand",
    description:
      "Explore the brands and visionary teams Sea Brand partners with to build digital experiences.",
    url: "https://seabrand.in/clients",
    siteName: "Sea Brand",
    images: [
      {
        url: "/og-clients.jpg", // Social media share graphics-nu ulla image
        width: 1200,
        height: 630,
        alt: "Brands Sea Brand partners with",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients & Partners | Sea Brand",
    description: "Discover the amazing brands and partners Sea Brand collaborates with.",
    images: ["/og-clients.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClientsPage() {
  // 2. Schema.org JSON-LD for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Our Clients & Partners",
    description: "Brands and clients Sea Brand collaborates with.",
    url: "https://seabrand.in/clients",
    provider: {
      "@type": "Organization",
      name: "Sea Brand",
      url: "https://seabrand.in",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: clients.map((client, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Organization",
          // name: client.name || `Client ${client.id}`,
          url: client.link || undefined,
          logo: `https://seabrand.in${client.image}`,
        },
      })),
    },
  };

  return (
    <>
      {/* Schema script for Google Bot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white pt-32 pb-32 relative overflow-hidden w-full selection:bg-[#6748FE] selection:text-white">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-[#6748FE]/5 rounded-full blur-[150px] pointer-events-none z-0" />

        {/* Universal Container */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <ClientsHeader />
          <ClientsGrid />
        </div>
      </main>
    </>
  );
}