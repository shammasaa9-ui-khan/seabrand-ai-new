// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/home/navbar/Navbar";
// import Footer from "../components/home/footer/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Seabrand",
//   description: "Kerala's first AI strategic branding curator",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} font-bahamas-light text-white`}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/home/navbar/Navbar";
import Footer from "../components/home/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://seabrand.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "SEABRAND AI | AI Strategic Branding & Digital Growth",
    template: "%s | SEABRAND AI",
  },

  description:
    "SEABRAND AI is an AI-first strategic branding ecosystem helping businesses, startups, professionals, and creators build meaningful, scalable, and future-ready brands.",

  keywords: [
    "SEABRAND AI",
    "AI strategic branding",
    "AI branding agency",
    "strategic branding",
    "brand strategy",
    "brand identity",
    "AI marketing",
    "digital marketing agency",
    "digital branding",
    "web design",
    "SEO services",
    "branding agency Kerala",
    "AI branding Kerala",
  ],

  authors: [
    {
      name: "SEABRAND AI",
      url: SITE_URL,
    },
  ],

  creator: "SEABRAND AI",
  publisher: "SEABRAND AI",
  applicationName: "SEABRAND AI",

  category: "Business",

  alternates: {
    canonical: "/",
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
    locale: "en_US",
    url: "/",
    siteName: "SEABRAND AI",

    title: "SEABRAND AI | AI Strategic Branding & Digital Growth",

    description:
      "AI-first strategic branding and digital growth solutions for businesses, startups, professionals, and creators.",

    images: [
      {
        url: "/images/seabrand-og.png",
        width: 1200,
        height: 630,
        alt: "SEABRAND AI - AI Strategic Branding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SEABRAND AI | AI Strategic Branding & Digital Growth",

    description:
      "AI-first strategic branding and digital growth solutions for businesses, startups, professionals, and creators.",

    images: ["/images/seabrand-og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    // Add your verification codes after verifying the website.
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // other: {
    //   "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}