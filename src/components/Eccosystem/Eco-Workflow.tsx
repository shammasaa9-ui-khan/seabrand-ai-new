// /* eslint-disable @next/next/no-img-element */

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Compass,
//   Layers3,
//   PlayCircle,
//   TrendingUp,
//   ChevronDown,
// } from "lucide-react";

// export default function EcosystemWorkflowSplitDivs() {
//   const [activeStep, setActiveStep] = useState<number | null>(0);

//   const steps = [
//     {
//       number: "1",
//       icon: Search,
//       title: "Discover",
//       description:
//         "Understand the business, goals, challenges, audience, and opportunities.",
//       color: "blue",
//     },
//     {
//       number: "2",
//       icon: Compass,
//       title: "Strategize",
//       description:
//         "Develop a clear branding roadmap, positioning strategy, and business direction.",
//       color: "indigo",
//     },
//     {
//       number: "3",
//       icon: Layers3,
//       title: "Curate",
//       description:
//         "Transform strategy into visual identity, communication, content, and customer experiences.",
//       color: "purple",
//     },
//     {
//       number: "4",
//       icon: PlayCircle,
//       title: "Execute",
//       description:
//         "Implement branding, design, marketing, and digital assets through a coordinated workflow.",
//       color: "pink",
//     },
//     {
//       number: "5",
//       icon: TrendingUp,
//       title: "Grow",
//       description:
//         "Measure performance, optimize continuously, and scale the brand for sustainable success.",
//       color: "emerald",
//     },
//   ];

//   const colorMap: Record<
//     string,
//     { bg: string; text: string; border: string }
//   > = {
//     blue: {
//       bg: "bg-blue-50",
//       text: "text-blue-600",
//       border: "border-blue-200",
//     },
//     indigo: {
//       bg: "bg-indigo-50",
//       text: "text-indigo-600",
//       border: "border-indigo-200",
//     },
//     purple: {
//       bg: "bg-purple-50",
//       text: "text-purple-600",
//       border: "border-purple-200",
//     },
//     pink: {
//       bg: "bg-pink-50",
//       text: "text-pink-600",
//       border: "border-pink-200",
//     },
//     emerald: {
//       bg: "bg-emerald-50",
//       text: "text-emerald-600",
//       border: "border-emerald-200",
//     },
//   };

//   const handleToggle = (index: number) => {
//     setActiveStep(activeStep === index ? null : index);
//   };

//   return (
//     <section className="relative pt-16 pb-12 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 font-sans">
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* LEFT SIDE */}
//           <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col">
//             <div className="mb-4">
//               <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
//                 Our <span className="text-blue-600">Workflow</span>
//               </h2>

//               <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
//                 Every brand follows a structured journey inside the SEABRAND AI
//                 Ecosystem.
//               </p>
//             </div>

//             {/* IMAGE */}
//             <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-slate-200 shadow-md">
//               <img
//                 src="/images/workflow1.png"
//                 alt="Workflow"
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-black/5" />
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="lg:col-span-7 flex flex-col gap-3">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const colors = colorMap[step.color];
//               const isActive = activeStep === index;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => handleToggle(index)}
//                   className={`rounded-xl border transition-all duration-300 cursor-pointer ${
//                     isActive
//                       ? `${colors.border} bg-white shadow-sm`
//                       : "border-slate-200 bg-white hover:bg-slate-50"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between px-4 py-3.5">
//                     <div className="flex items-center gap-4">
//                       <div
//                         className={`w-11 h-11 rounded-xl flex items-center justify-center border ${colors.bg} ${colors.border}`}
//                       >
//                         <Icon
//                           className={`w-5 h-5 ${colors.text} stroke-[2.2]`}
//                         />
//                       </div>

//                       <div>
//                         <span
//                           className={`text-[10px] uppercase tracking-[0.15em] font-bold ${colors.text}`}
//                         >
//                           STEP 0{step.number}
//                         </span>

//                         <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
//                           {step.title}
//                         </h3>
//                       </div>
//                     </div>

//                     <div
//                       className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
//                         isActive ? "rotate-180" : ""
//                       }`}
//                     >
//                       <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
//                     </div>
//                   </div>

//                   <AnimatePresence initial={false}>
//                     {isActive && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{
//                           duration: 0.3,
//                           ease: [0.04, 0.62, 0.23, 0.98],
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="border-t border-slate-100 px-4 py-3.5">
//                           <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
//                             {step.description}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Compass,
  Layers3,
  PlayCircle,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

export default function EcosystemWorkflowSplitDivs() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Discover",
      description:
        "Understand the business, goals, challenges, audience, and opportunities.",
      color: "blue",
    },
    {
      number: "2",
      icon: Compass,
      title: "Strategize",
      description:
        "Develop a clear branding roadmap, positioning strategy, and business direction.",
      color: "indigo",
    },
    {
      number: "3",
      icon: Layers3,
      title: "Curate",
      description:
        "Transform strategy into visual identity, communication, content, and customer experiences.",
      color: "purple",
    },
    {
      number: "4",
      icon: PlayCircle,
      title: "Execute",
      description:
        "Implement branding, design, marketing, and digital assets through a coordinated workflow.",
      color: "pink",
    },
    {
      number: "5",
      icon: TrendingUp,
      title: "Grow",
      description:
        "Measure performance, optimize continuously, and scale the brand for sustainable success.",
      color: "emerald",
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
  };

  const handleToggle = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="relative pt-16 pb-12 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.08em] sm:tracking-[0.06em] lg:tracking-tight mb-2">
                Our <span className="text-blue-600">Workflow</span>
              </h2>

              <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">
                Every brand follows a structured journey inside the SEABRAND AI
                Ecosystem.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-slate-200 shadow-md">
              <img
                src="/images/workflow1.png"
                alt="Workflow"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onClick={() => handleToggle(index)}
                  className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `${colors.border} bg-white shadow-sm`
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border ${colors.bg} ${colors.border}`}
                      >
                        <Icon
                          className={`w-5 h-5 ${colors.text} stroke-[2.2]`}
                        />
                      </div>

                      <div>
                        <span
                          className={`text-[10px] uppercase tracking-[0.15em] font-bold ${colors.text}`}
                        >
                          STEP 0{step.number}
                        </span>

                        <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5 tracking-[-0.03em] sm:tracking-[-0.01em] lg:tracking-normal">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-4 py-3.5">
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}