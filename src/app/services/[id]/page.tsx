// import { notFound } from "next/navigation";
// import { servicesData } from "@/src/data/services.data";
// import ServiceDetailClient from "@/src/components/pages/services/ServiceDetailClient";

// // 1. Change to an async function and define params as a Promise
// export default async function ServiceDetailPage({ 
//   params 
// }: { 
//   params: Promise<{ id: string }> 
// }) {
//   // 2. Await the params to extract the ID
//   const resolvedParams = await params;
//   const currentId = resolvedParams.id;

//   // Debugging: This will print the ID in your VS Code terminal
//   console.log("The URL is asking for ID:", currentId);

//   // 3. Match the ID
//   const service = servicesData.services.find((s) => s.id === currentId);

//   // 4. Trigger 404 ONLY if it truly doesn't match
//   if (!service) {
//     console.log("Could not find a match in servicesData for:", currentId);
//     notFound();
//   }

//   return (
//     <main className="min-h-screen">
//       <ServiceDetailClient serviceId={service.id} />
//     </main>
//   );
// }

// export function generateStaticParams() {
//   return servicesData.services.map((service) => ({
//     id: service.id, 
//   }));
// }

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/src/data/services.data";
import ServiceDetailClient from "@/src/components/pages/services/ServiceDetailClient";

const SITE_URL = "https://seabrand.in";

const seoData: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  "business-branding": {
    title:
      "AI Strategic Business Branding Services | Rebranding & Growth | Seabrand AI",
    description:
      "Transform your existing business with AI strategic branding, rebranding, social media branding, marketing strategy and scalable business growth systems with Seabrand AI.",
    keywords: [
      "business branding",
      "business branding agency",
      "AI branding agency",
      "AI strategic branding",
      "rebranding services",
      "brand strategy",
      "social media branding",
      "brand marketing",
      "business growth strategy",
      "AI marketing automation",
      "branding agency Kerala",
      "branding agency India",
    ],
  },

  "personal-branding": {
    title:
      "AI Strategic Personal Branding Services | Founder & Personal Brand Strategy | Seabrand AI",
    description:
      "Build a powerful personal brand with AI strategic personal branding for founders, entrepreneurs, professionals, creators and public figures. Grow authority, visibility and influence with Seabrand AI.",
    keywords: [
      "personal branding",
      "personal branding agency",
      "AI personal branding",
      "personal brand strategy",
      "founder branding",
      "entrepreneur personal branding",
      "creator branding",
      "thought leadership",
      "personal brand growth",
      "social media personal branding",
      "personal branding India",
      "personal branding Kerala",
    ],
  },

  "startup-branding": {
    title:
      "AI Strategic Startup Branding Services | Startup Strategy & Growth | Seabrand AI",
    description:
      "Turn startup ideas into market-ready brands with AI strategic startup branding, idea validation, business strategy, brand identity, digital branding and growth planning.",
    keywords: [
      "startup branding",
      "startup branding agency",
      "startup strategy",
      "AI startup branding",
      "startup brand identity",
      "startup consulting",
      "startup idea validation",
      "go to market strategy",
      "startup growth strategy",
      "startup marketing",
      "startup branding India",
      "startup branding Kerala",
    ],
  },

  "entertainment-branding": {
    title:
      "AI Strategic Entertainment Branding Services | Creator & Artist Branding | Seabrand AI",
    description:
      "Build and grow entertainment brands with AI strategic content strategy, creator branding, audience engagement, social media marketing, monetization and growth systems.",
    keywords: [
      "entertainment branding",
      "entertainment branding agency",
      "creator branding",
      "artist branding",
      "influencer branding",
      "celebrity branding",
      "content branding",
      "creator growth strategy",
      "audience growth",
      "entertainment marketing",
      "creator monetization",
      "entertainment branding India",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const service = servicesData.services.find(
    (service) => service.id === id
  );

  if (!service) {
    return {
      title: "Service Not Found | Seabrand AI",
      description: "The requested Seabrand AI service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = seoData[id];

  const title =
    seo?.title ||
    `${service.title} | Seabrand AI`;

  const description =
    seo?.description ||
    service.description ||
    service.purpose?.text ||
    `Explore ${service.title} by Seabrand AI.`;

  const keywords =
    seo?.keywords || [
      service.title,
      "Seabrand AI",
      "AI branding",
      "strategic branding",
    ];

  const canonicalUrl = `${SITE_URL}/services/${id}`;

  return {
    title,

    description,

    keywords,

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
      canonical: canonicalUrl,
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
      url: canonicalUrl,
      siteName: "Seabrand AI",
      title,
      description,
      images: [
        {
          url: "/images/seabrand-og.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - Seabrand AI`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/seabrand-og.png"],
    },

    category: "Business Services",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service = servicesData.services.find(
    (service) => service.id === id
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceDetailClient serviceId={service.id} />
    </main>
  );
}

export function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id,
  }));
}