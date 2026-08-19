// // import ContactHeader from "@/src/components/pages/contact/ContactHeader";
// // import ContactForm from "@/src/components/pages/contact/ContactForm";
// // import ContactInfo from "@/src/components/pages/contact/ContactInfo";

// // export default function ContactPage() {
// //   return (
// //     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-32 relative selection:bg-[#6748FE] selection:text-white overflow-hidden">
// //       {/* Background Grid */}
// //       <div className="absolute inset-0 pointer-events-none opacity-[0.4] z-0" 
// //            style={{ backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
// //       <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] z-0" />

// //       <section className="container-custom mx-auto px-6 md:px-12 max-w-7xl relative z-10">
// //         <ContactHeader />
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
// //           <div className="lg:col-span-7">
// //             <ContactForm />
// //           </div>
// //           <div className="lg:col-span-5">
// //             <ContactInfo />
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// import type { Metadata } from "next";
// import ContactHeader from "@/src/components/pages/contact/ContactHeader";
// import ContactForm from "@/src/components/pages/contact/ContactForm";
// import ContactInfo from "@/src/components/pages/contact/ContactInfo";

// export const metadata: Metadata = {
//   title: "Contact SEABRAND AI | Let's Talk",
//   description:
//     "Get in touch with SEABRAND AI for AI solutions, digital transformation, automation, and technology services. Our curator is ready to discuss your project.",

//   keywords: [
//     "SEABRAND AI",
//     "AI company Kerala",
//     "AI solutions Kerala",
//     "AI services India",
//     "AI automation",
//     "AI consulting",
//     "digital transformation",
//     "technology solutions",
//   ],

//   authors: [
//     {
//       name: "SEABRAND AI",
//     },
//   ],

//   creator: "SEABRAND AI",
//   publisher: "SEABRAND AI",

//   metadataBase: new URL("https://seabrand.in"),

//   alternates: {
//     canonical: "/contact",
//   },

//   openGraph: {
//     title: "Contact SEABRAND AI | Let's Talk",
//     description:
//       "Connect with SEABRAND AI to explore AI solutions, automation, digital transformation, and technology services.",
//     url: "https://seabrand.in/contact",
//     siteName: "SEABRAND AI",
//     locale: "en_IN",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Contact SEABRAND AI | Let's Talk",
//     description:
//       "Let's build something intelligent together. Contact SEABRAND AI for AI, automation, and digital solutions.",
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
// };

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-32 relative selection:bg-[#6748FE] selection:text-white overflow-hidden">
//       {/* Background Grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.4] z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//             linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
//           `,
//           backgroundSize: "64px 64px",
//         }}
//       />

//       {/* Background Fade */}
//       <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] z-0" />

//       <section className="container-custom mx-auto px-6 md:px-12 max-w-7xl relative z-10">
//         <ContactHeader />

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
//           {/* Contact Form */}
//           <div className="lg:col-span-7">
//             <ContactForm />
//           </div>

//           {/* Contact Information */}
//           <div className="lg:col-span-5">
//             <ContactInfo />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import type { Metadata } from "next";
import ContactHeader from "@/src/components/pages/contact/ContactHeader";
import ContactForm from "@/src/components/pages/contact/ContactForm";
import ContactInfo from "@/src/components/pages/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact SEABRAND AI | Let's Talk",
  description:
    "Get in touch with SEABRAND AI for AI solutions, digital transformation, automation, and technology services. Our curator is ready to discuss your project.",

  keywords: [
    "SEABRAND AI",
    "AI company Kerala",
    "AI solutions Kerala",
    "AI services India",
    "AI automation",
    "AI consulting",
    "digital transformation",
    "technology solutions",
  ],

  authors: [
    {
      name: "SEABRAND AI",
    },
  ],

  creator: "SEABRAND AI",
  publisher: "SEABRAND AI",

  metadataBase: new URL("https://seabrand.in"),

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact SEABRAND AI | Let's Talk",
    description:
      "Connect with SEABRAND AI to explore AI solutions, automation, digital transformation, and technology services.",
    url: "https://seabrand.in/contact",
    siteName: "SEABRAND AI",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact SEABRAND AI | Let's Talk",
    description:
      "Let's build something intelligent together. Contact SEABRAND AI for AI, automation, and digital solutions.",
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

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#FAFAFA]
        text-zinc-900
        pt-32
        pb-32
        relative
        selection:bg-[#6748FE]
        selection:text-white
        overflow-hidden
      "
    >
      <section className="container-custom mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}