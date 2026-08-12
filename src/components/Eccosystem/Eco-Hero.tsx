// /* eslint-disable @next/next/no-img-element */

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function EcosystemHero() {
//   return (
//     <section className="relative pt-36 md:pt-44 pb-20 px-6 sm:px-8 lg:px-12 border-b border-slate-200 bg-white text-slate-900 font-sans selection:bg-[#6748FE] selection:text-white overflow-x-hidden">
      
//       {/* Background Soft Glow */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6748FE]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
//         {/* Main Heading */}
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
//         >
//           Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#5032d8]">Ecosystem</span>
//         </motion.h1>

//         {/* Paragraphs */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed pt-2 text-left"
//         >
//           <p className="m-0 text-lg sm:text-xl font-medium text-slate-900">
//             A Strategic Branding Ecosystem Built for the AI Era
//           </p>
//           <p className="m-0 pt-2">
//             At SEABRAND AI, we don&apos;t believe branding should be a collection of disconnected services. We believe every successful brand is built through a connected ecosystem where strategy, creativity, and marketing work together with one common purpose.
//           </p>
//           <p className="m-0">
//             That&apos;s why we created the SEABRAND AI Ecosystem a structured framework that integrates AI, Strategy, and Curation into one seamless workflow, enabling businesses to build stronger brands, communicate more effectively, and achieve sustainable growth.
//           </p>
//         </motion.div>

//       </div>

//     </section>
//   );
// }

/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EcosystemHero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 px-6 sm:px-8 lg:px-12 border-b border-slate-200 bg-white text-slate-900 font-sans selection:bg-[#6748FE] selection:text-white overflow-x-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6748FE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-[0.06em] sm:tracking-[0.08em] md:tracking-tight leading-[1.15]"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#5032d8]">Ecosystem</span>
        </motion.h1>

        {/* Paragraphs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed pt-2 text-left"
        >
          <p className="m-0 text-lg sm:text-xl font-medium text-slate-900">
            A Strategic Branding Ecosystem Built for the AI Era
          </p>
          <p className="m-0 pt-2">
            At SEABRAND AI, we don&apos;t believe branding should be a collection of disconnected services. We believe every successful brand is built through a connected ecosystem where strategy, creativity, and marketing work together with one common purpose.
          </p>
          <p className="m-0">
            That&apos;s why we created the SEABRAND AI Ecosystem a structured framework that integrates AI, Strategy, and Curation into one seamless workflow, enabling businesses to build stronger brands, communicate more effectively, and achieve sustainable growth.
          </p>
        </motion.div>

      </div>

    </section>
  );
}