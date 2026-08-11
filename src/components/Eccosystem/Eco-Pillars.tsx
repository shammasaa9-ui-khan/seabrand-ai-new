// // // // // /* eslint-disable @next/next/no-img-element */

// // // // // 'use client';

// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { Compass, Brain, Layers3 } from "lucide-react";

// // // // // export default function EcosystemPillarsClean() {
// // // // //   const pillars = [
// // // // //     {
// // // // //       icon: Compass,
// // // // //       number: "01",
// // // // //       title: "Strategy",
// // // // //       description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
// // // // //       iconColor: "text-blue-400",
// // // // //     },
// // // // //     {
// // // // //       icon: Brain,
// // // // //       number: "02",
// // // // //       title: "Artificial Intelligence",
// // // // //       description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
// // // // //       iconColor: "text-indigo-400",
// // // // //     },
// // // // //     {
// // // // //       icon: Layers3,
// // // // //       number: "03",
// // // // //       title: "Curation",
// // // // //       description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
// // // // //       iconColor: "text-purple-400",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <section className="tech-background relative py-24 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden">
      
// // // // //       {/* Background subtle glow */}
// // // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-950/40 blur-[120px] rounded-full pointer-events-none z-0" />

// // // // //       <div className="relative z-10 max-w-7xl mx-auto">
        
// // // // //         {/* Section Header */}
// // // // //         <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
// // // // //           <motion.h2 
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             viewport={{ once: true }}
// // // // //             transition={{ duration: 0.6 }}
// // // // //             className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
// // // // //           >
// // // // //             Strategy <span className="text-slate-500 font-light">+</span> Artificial Intelligence <span className="text-slate-500 font-light">+</span> Curation
// // // // //           </motion.h2>
// // // // //           <div className="w-16 h-1 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] mx-auto rounded-full mt-2" />
// // // // //         </div>

// // // // //         {/* Single Row Horizontal Cards Grid */}
// // // // //         <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-6">
// // // // //           {pillars.map((pillar, index) => {
// // // // //             const IconComponent = pillar.icon;
// // // // //             return (
// // // // //               <motion.div
// // // // //                 key={index}
// // // // //                 initial={{ opacity: 0, y: 30 }}
// // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // //                 viewport={{ once: true }}
// // // // //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// // // // //                 className="pillar-card group relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between"
// // // // //               >
// // // // //                 {/* Subtle top/inner gradient highlight for a polished depth effect */}
// // // // //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-100 pointer-events-none" />

// // // // //                 {/* Content Layer */}
// // // // //                 <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
// // // // //                   {/* Top Bar: Icon & Number Badge */}
// // // // //                   <div className="flex items-center justify-between">
// // // // //                     <div className={`w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 ${pillar.iconColor}`}>
// // // // //                       <IconComponent className="w-7 h-7" />
// // // // //                     </div>
// // // // //                     <span className="card-number text-2xl font-black text-white/40 group-hover:text-white transition-colors duration-300">
// // // // //                       {pillar.number}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   {/* Title */}
// // // // //                   <div className="card-titles flex flex-col">
// // // // //                     <h3 className="card-title text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300 m-0">
// // // // //                       {pillar.title}
// // // // //                     </h3>
// // // // //                   </div>
                  
// // // // //                   {/* Description */}
// // // // //                   <p className="card-description text-slate-300 text-sm md:text-base leading-relaxed flex-grow font-light m-0 pt-2">
// // // // //                     {pillar.description}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             );
// // // // //           })}
// // // // //         </div>

// // // // //         {/* Bottom Summary Statement */}
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // //           viewport={{ once: true }}
// // // // //           transition={{ duration: 0.6, delay: 0.6 }}
// // // // //           className="mt-16 text-center max-w-3xl mx-auto px-4"
// // // // //         >
// // // // //           <p className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
// // // // //             Together, these three pillars create a strategic branding approach that is intelligent, structured, and built for long-term business growth.
// // // // //           </p>
// // // // //         </motion.div>

// // // // //       </div>

// // // // //       {/* CSS Styles with Border and Box-Shadow Completely Removed */}
// // // // //       <style jsx global>{`
// // // // //         body, html {
// // // // //           margin: 0;
// // // // //           padding: 0;
// // // // //           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // // //           background-color: #01030d;
// // // // //           color: #e0e0e0;
// // // // //         }

// // // // //         .tech-background {
// // // // //           background-color: #01030d;
// // // // //           background-image: 
// // // // //             radial-gradient(circle at 75% 20%, rgba(0, 130, 255, 0.4) 0%, transparent 50%),
// // // // //             radial-gradient(circle at 20% 80%, rgba(0, 90, 220, 0.35) 0%, transparent 55%),
// // // // //             radial-gradient(circle at 50% 50%, rgba(1, 3, 13, 0.85) 0%, #01030d 100%);
// // // // //           background-attachment: fixed;
// // // // //           position: relative;
// // // // //           overflow-x: hidden;
// // // // //         }

// // // // //         .tech-background::before {
// // // // //           content: '';
// // // // //           position: absolute;
// // // // //           top: 0;
// // // // //           left: 0;
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           background: linear-gradient(
// // // // //             180deg, 
// // // // //             rgba(1, 3, 13, 0.6) 0%, 
// // // // //             rgba(1, 3, 13, 0.35) 50%, 
// // // // //             rgba(1, 3, 13, 0.75) 100%
// // // // //           );
// // // // //           pointer-events: none;
// // // // //           z-index: 0;
// // // // //         }

// // // // //         .pillar-card {
// // // // //           background: linear-gradient(135deg, rgba(10, 25, 55, 0.95) 0%, rgba(3, 8, 22, 0.98) 100%);
// // // // //           border: none;
// // // // //           backdrop-filter: blur(16px);
// // // // //           box-shadow: none;
// // // // //         }

// // // // //         .pillar-card:hover {
// // // // //           background: linear-gradient(135deg, rgba(15, 35, 75, 0.95) 0%, rgba(5, 12, 30, 0.98) 100%);
// // // // //           border: none;
// // // // //           box-shadow: none;
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // /* eslint-disable @next/next/no-img-element */

// // // // 'use client';

// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { Compass, Brain, Layers3 } from "lucide-react";

// // // // export default function EcosystemPillarsClean() {
// // // //   const pillars = [
// // // //     {
// // // //       icon: Compass,
// // // //       number: "01",
// // // //       title: "Strategy",
// // // //       description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
// // // //       iconColor: "text-blue-400",
// // // //     },
// // // //     {
// // // //       icon: Brain,
// // // //       number: "02",
// // // //       title: "Artificial Intelligence",
// // // //       description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
// // // //       iconColor: "text-indigo-400",
// // // //     },
// // // //     {
// // // //       icon: Layers3,
// // // //       number: "03",
// // // //       title: "Curation",
// // // //       description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
// // // //       iconColor: "text-purple-400",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="tech-background relative py-24 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden">
      
// // // //       {/* Background subtle glow */}
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-950/40 blur-[120px] rounded-full pointer-events-none z-0" />

// // // //       <div className="relative z-10 max-w-7xl mx-auto">
        
// // // //         {/* Section Header */}
// // // //         <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
// // // //           <motion.h2 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             transition={{ duration: 0.6 }}
// // // //             className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
// // // //           >
// // // //             Strategy <span className="text-slate-500 font-light">+</span> Artificial Intelligence <span className="text-slate-500 font-light">+</span> Curation
// // // //           </motion.h2>
// // // //           <div className="w-16 h-1 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] mx-auto rounded-full mt-2" />
// // // //         </div>

// // // //         {/* Single Row Horizontal Cards Grid */}
// // // //         <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-6">
// // // //           {pillars.map((pillar, index) => {
// // // //             const IconComponent = pillar.icon;
// // // //             return (
// // // //               <motion.div
// // // //                 key={index}
// // // //                 initial={{ opacity: 0, y: 30 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// // // //                 className="pillar-card group relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between"
// // // //               >
// // // //                 {/* Subtle top/inner gradient highlight for a polished depth effect */}
// // // //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-100 pointer-events-none" />

// // // //                 {/* Content Layer */}
// // // //                 <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
// // // //                   {/* Top Bar: Icon & Number Badge */}
// // // //                   <div className="flex items-center justify-between">
// // // //                     <div className={`w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 ${pillar.iconColor}`}>
// // // //                       <IconComponent className="w-7 h-7" />
// // // //                     </div>
// // // //                     <span className="card-number text-2xl font-black text-white/40 group-hover:text-white transition-colors duration-300">
// // // //                       {pillar.number}
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* Title */}
// // // //                   <div className="card-titles flex flex-col">
// // // //                     <h3 className="card-title text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300 m-0">
// // // //                       {pillar.title}
// // // //                     </h3>
// // // //                   </div>
                  
// // // //                   {/* Description */}
// // // //                   <p className="card-description text-slate-300 text-sm md:text-base leading-relaxed flex-grow font-light m-0 pt-2">
// // // //                     {pillar.description}
// // // //                   </p>
// // // //                 </div>
// // // //               </motion.div>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Bottom Summary Statement */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.6, delay: 0.6 }}
// // // //           className="mt-16 text-center max-w-3xl mx-auto px-4"
// // // //         >
// // // //           <p className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
// // // //             Together, these three pillars create a strategic branding approach that is intelligent, structured, and built for long-term business growth.
// // // //           </p>
// // // //         </motion.div>

// // // //       </div>

// // // //       {/* CSS Styles with Background Color Updated to #020617 */}
// // // //       <style jsx global>{`
// // // //         body, html {
// // // //           margin: 0;
// // // //           padding: 0;
// // // //           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // // //           background-color: #020617;
// // // //           color: #e0e0e0;
// // // //         }

// // // //         .tech-background {
// // // //           background-color: #020617;
// // // //           background-image: 
// // // //             radial-gradient(circle at 75% 20%, rgba(0, 130, 255, 0.4) 0%, transparent 50%),
// // // //             radial-gradient(circle at 20% 80%, rgba(0, 90, 220, 0.35) 0%, transparent 55%),
// // // //             radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.85) 0%, #020617 100%);
// // // //           background-attachment: fixed;
// // // //           position: relative;
// // // //           overflow-x: hidden;
// // // //         }

// // // //         .tech-background::before {
// // // //           content: '';
// // // //           position: absolute;
// // // //           top: 0;
// // // //           left: 0;
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           background: linear-gradient(
// // // //             180deg, 
// // // //             rgba(2, 6, 23, 0.6) 0%, 
// // // //             rgba(2, 6, 23, 0.35) 50%, 
// // // //             rgba(2, 6, 23, 0.75) 100%
// // // //           );
// // // //           pointer-events: none;
// // // //           z-index: 0;
// // // //         }

// // // //         .pillar-card {
// // // //           background: linear-gradient(135deg, rgba(10, 25, 55, 0.95) 0%, rgba(3, 8, 22, 0.98) 100%);
// // // //           border: none;
// // // //           backdrop-filter: blur(16px);
// // // //           box-shadow: none;
// // // //         }

// // // //         .pillar-card:hover {
// // // //           background: linear-gradient(135deg, rgba(15, 35, 75, 0.95) 0%, rgba(5, 12, 30, 0.98) 100%);
// // // //           border: none;
// // // //           box-shadow: none;
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // }


// // // /* eslint-disable @next/next/no-img-element */

// // // 'use client';

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { Compass, Brain, Layers3, Sparkles } from "lucide-react";

// // // export default function EcosystemPillarsClean() {
// // //   const pillars = [
// // //     {
// // //       icon: Compass,
// // //       number: "01",
// // //       title: "Strategy",
// // //       description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
// // //       iconColor: "text-blue-400",
// // //       accentBorder: "hover:border-blue-500/30",
// // //     },
// // //     {
// // //       icon: Brain,
// // //       number: "02",
// // //       title: "Artificial Intelligence",
// // //       description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
// // //       iconColor: "text-indigo-400",
// // //       accentBorder: "hover:border-indigo-500/30",
// // //     },
// // //     {
// // //       icon: Layers3,
// // //       number: "03",
// // //       title: "Curation",
// // //       description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
// // //       iconColor: "text-purple-400",
// // //       accentBorder: "hover:border-purple-500/30",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="relative py-28 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden bg-[#030712]">
      
// // //       {/* 1. Exact Center Blue Radial Glow (ഇമേജിലെ സെന്ററിലെ ബ്ലൂ വെളിച്ചം) */}
// // //       <div 
// // //         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none z-0 opacity-80"
// // //         style={{
// // //           background: 'radial-gradient(ellipse at center, rgba(14, 82, 219, 0.45) 0%, rgba(6, 40, 120, 0.2) 45%, transparent 70%)'
// // //         }}
// // //       />

// // //       {/* 2. Exact Marble Wave Smoke Lines Overlay (ഇമേജിലെ അതേ ഡയഗണൽ വേവ് ലൈനുകൾ) */}
// // //       <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden mix-blend-screen">
// // //         <svg 
// // //           className="w-full h-full min-w-[1400px] min-h-[800px]" 
// // //           viewBox="0 0 1400 900" 
// // //           fill="none" 
// // //           xmlns="http://www.w3.org/2000/svg"
// // //         >
// // //           <defs>
// // //             <linearGradient id="seabrand-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
// // //               <stop offset="0%" stopColor="#2563eb" stopOpacity="0.05" />
// // //               <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.35" />
// // //               <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.2" />
// // //               <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
// // //             </linearGradient>

// // //             <linearGradient id="seabrand-wave-2" x1="100%" y1="0%" x2="0%" y2="100%">
// // //               <stop offset="0%" stopColor="#1e40af" stopOpacity="0" />
// // //               <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.3" />
// // //               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
// // //             </linearGradient>
// // //           </defs>

// // //           {/* Diagonal Fluid Marble Waves */}
// // //           {/* Top Left to Bottom Right Wave Flow */}
// // //           <path d="M-200 400 Q 150 200, 450 450 T 1100 300 T 1600 500" stroke="url(#seabrand-wave-1)" strokeWidth="3" className="blur-[2px]" />
// // //           <path d="M-180 420 Q 170 220, 470 470 T 1120 320 T 1620 520" stroke="url(#seabrand-wave-1)" strokeWidth="1.5" className="blur-[1px]" opacity="0.7" />
// // //           <path d="M-160 440 Q 190 240, 490 490 T 1140 340 T 1640 540" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" className="blur-[0.5px]" />

// // //           {/* Secondary Intersecting Organic Wave Lines */}
// // //           <path d="M -100 150 C 300 350, 400 100, 850 400 C 1150 600, 1300 200, 1550 450" stroke="url(#seabrand-wave-2)" strokeWidth="2.5" className="blur-[2px]" />
// // //           <path d="M -80 170 C 320 370, 420 120, 870 420 C 1170 620, 1320 220, 1570 470" stroke="url(#seabrand-wave-2)" strokeWidth="1.2" className="blur-[1px]" opacity="0.6" />

// // //           {/* Outer Flow Waves */}
// // //           <path d="M 0 750 C 350 500, 650 850, 1000 550 C 1250 350, 1400 700, 1650 500" stroke="url(#seabrand-wave-1)" strokeWidth="4" className="blur-[4px]" />
// // //           <path d="M 50 770 C 400 520, 670 870, 1020 570 T 1670 520" stroke="white" strokeWidth="1" strokeOpacity="0.25" className="blur-[1px]" />
// // //         </svg>
// // //       </div>

// // //       {/* Content Container */}
// // //       <div className="relative z-10 max-w-7xl mx-auto">
        
// // //         {/* Section Header */}
// // //         <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
          
// // //           {/* <motion.div
// // //             initial={{ opacity: 0, y: 15 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
// // //           >
// // //             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
// // //             {/* <span>Our Core Framework</span> */}
// // //           {/* </motion.div> */} 

// // //           <motion.h2 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6, delay: 0.1 }}
// // //             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
// // //           >
// // //             Strategy <span className="text-blue-400/60 font-light">+</span> Artificial Intelligence <span className="text-blue-400/60 font-light">+</span> Curation
// // //           </motion.h2>

        

// // //           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 mx-auto rounded-full mt-4 opacity-80" />
// // //         </div>

// // //         {/* Single Row Horizontal Cards Grid */}
// // //         <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
// // //           {pillars.map((pillar, index) => {
// // //             const IconComponent = pillar.icon;
// // //             return (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.5, delay: index * 0.15 }}
// // //                 className={`pillar-card group relative overflow-hidden rounded-[28px] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between border border-white/[0.08] ${pillar.accentBorder} shadow-2xl`}
// // //               >
// // //                 {/* Internal Light Gradient Effect */}
// // //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-100 pointer-events-none" />

// // //                 {/* Content Layer */}
// // //                 <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
// // //                   {/* Top Bar: Icon & Number Badge */}
// // //                   <div className="flex items-center justify-between">
// // //                     <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 ${pillar.iconColor}`}>
// // //                       <IconComponent className="w-7 h-7" />
// // //                     </div>
// // //                     <span className="card-number text-2xl font-black text-white/20 group-hover:text-white/80 transition-colors duration-300">
// // //                       {pillar.number}
// // //                     </span>
// // //                   </div>

// // //                   {/* Title */}
// // //                   <div className="card-titles flex flex-col pt-2">
// // //                     <h3 className="card-title text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300 m-0">
// // //                       {pillar.title}
// // //                     </h3>
// // //                   </div>
                  
// // //                   {/* Description */}
// // //                   <p className="card-description text-slate-300/90 text-sm md:text-[15px] leading-relaxed flex-grow font-light m-0">
// // //                     {pillar.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Bottom Summary Statement */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6, delay: 0.5 }}
// // //           className="mt-20 text-center max-w-3xl mx-auto px-4"
// // //         >
// // //           <p className="text-base md:text-lg font-medium text-slate-300/80 leading-relaxed">
// // //             Together, these three pillars create a strategic branding approach that is <span className="text-white font-semibold">intelligent</span>, <span className="text-white font-semibold">structured</span>, and built for long-term business growth.
// // //           </p>
// // //         </motion.div>

// // //       </div>

// // //       {/* Matching Glassmorphism Card Styling */}
// // //       <style jsx global>{`
// // //         .pillar-card {
// // //           background: linear-gradient(145deg, rgba(8, 18, 41, 0.75) 0%, rgba(4, 9, 22, 0.9) 100%);
// // //           backdrop-filter: blur(20px);
// // //           -webkit-backdrop-filter: blur(20px);
// // //         }

// // //         .pillar-card:hover {
// // //           background: linear-gradient(145deg, rgba(14, 28, 61, 0.8) 0%, rgba(6, 14, 33, 0.95) 100%);
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }

// // /* eslint-disable @next/next/no-img-element */

// // 'use client';

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Compass, Brain, Layers3, Sparkles } from "lucide-react";

// // export default function EcosystemPillarsClean() {
// //   const pillars = [
// //     {
// //       icon: Compass,
// //       number: "01",
// //       title: "Strategy",
// //       description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
// //       iconColor: "text-blue-400",
// //       accentBorder: "hover:border-blue-500/30",
// //     },
// //     {
// //       icon: Brain,
// //       number: "02",
// //       title: "Artificial Intelligence",
// //       description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
// //       iconColor: "text-indigo-400",
// //       accentBorder: "hover:border-indigo-500/30",
// //     },
// //     {
// //       icon: Layers3,
// //       number: "03",
// //       title: "Curation",
// //       description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
// //       iconColor: "text-purple-400",
// //       accentBorder: "hover:border-purple-500/30",
// //     },
// //   ];

// //   return (
// //     <section className="relative py-28 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden bg-[#02050e]">
      
// //       {/* 1. Base Dark Gradient Layer */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-[#010309] via-[#020816] to-[#010308] z-0" />

// //       {/* 2. Exact Diagonal Center Radial Blue Beam (ചിത്രത്തിലെ അതേ ബ്ലൂ വെളിച്ചം) */}
// //       <div 
// //         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0 rotate-[-15deg]"
// //         style={{
// //           background: 'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(20, 90, 235, 0.5) 0%, rgba(8, 45, 135, 0.25) 45%, transparent 75%)'
// //         }}
// //       />

// //       {/* 3. Subtle Organic Liquid Marble Lines SVG Overlay */}
// //       <div className="absolute inset-0 pointer-events-none opacity-45 z-0 overflow-hidden mix-blend-screen">
// //         <svg 
// //           className="w-full h-full min-w-[1400px] min-h-[900px]" 
// //           viewBox="0 0 1400 900" 
// //           fill="none" 
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <defs>
// //             <linearGradient id="seabrand-blue" x1="0%" y1="0%" x2="100%" y2="100%">
// //               <stop offset="0%" stopColor="#1e40af" stopOpacity="0.1" />
// //               <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.6" />
// //               <stop offset="75%" stopColor="#60a5fa" stopOpacity="0.3" />
// //               <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
// //             </linearGradient>

// //             <linearGradient id="seabrand-gold-vein" x1="100%" y1="0%" x2="0%" y2="100%">
// //               <stop offset="0%" stopColor="#854d0e" stopOpacity="0" />
// //               <stop offset="40%" stopColor="#ca8a04" stopOpacity="0.3" />
// //               <stop offset="70%" stopColor="#eab308" stopOpacity="0.15" />
// //               <stop offset="100%" stopColor="#000000" stopOpacity="0" />
// //             </linearGradient>
// //           </defs>

// //           {/* Left Side Subtle Dark Marble Textures */}
// //           <path d="M -150 100 C 150 300, 100 600, -100 850 C -50 600, 200 400, 50 100" fill="url(#seabrand-gold-vein)" className="blur-[8px]" />
// //           <path d="M -80 150 C 180 320, 120 580, -30 800" stroke="url(#seabrand-gold-vein)" strokeWidth="1.5" className="blur-[1px]" />

// //           {/* Center Smooth Diagonal Fluid Waves */}
// //           <path d="M -100 650 Q 300 200, 700 450 T 1500 250" stroke="url(#seabrand-blue)" strokeWidth="3" className="blur-[2px]" />
// //           <path d="M -80 670 Q 320 220, 720 470 T 1520 270" stroke="url(#seabrand-blue)" strokeWidth="1.2" className="blur-[0.8px]" />
// //           <path d="M -60 685 Q 335 235, 735 485 T 1535 285" stroke="white" strokeWidth="0.6" strokeOpacity="0.35" className="blur-[0.4px]" />

// //           {/* Intersecting Right Side Waves & Fine Veins */}
// //           <path d="M 200 -50 C 600 300, 800 100, 1200 500 C 1350 650, 1400 300, 1600 450" stroke="url(#seabrand-blue)" strokeWidth="2.5" className="blur-[1.5px]" />
// //           <path d="M 850 480 C 1100 250, 1250 600, 1550 350" stroke="url(#seabrand-gold-vein)" strokeWidth="2" className="blur-[1px]" />
// //           <path d="M 870 500 C 1120 270, 1270 620, 1570 370" stroke="white" strokeWidth="0.8" strokeOpacity="0.25" />
// //         </svg>
// //       </div>

// //       {/* Content Container */}
// //       <div className="relative z-10 max-w-7xl mx-auto">
        
// //         {/* Section Header */}
// //         <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
          
// //           <motion.div
// //             initial={{ opacity: 0, y: 15 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 }}
// //             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
// //           >
// //             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
// //             <span>Our Core Framework</span>
// //           </motion.div>

// //           <motion.h2 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
// //           >
// //             Strategy <span className="text-blue-400/60 font-light">+</span> Artificial Intelligence <span className="text-blue-400/60 font-light">+</span> Curation
// //           </motion.h2>

// //           <p className="text-slate-300/80 text-base md:text-lg max-w-2xl mx-auto font-normal">
// //             An interconnected system engineered for modern high-growth brands.
// //           </p>

// //           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 mx-auto rounded-full mt-4 opacity-80" />
// //         </div>

// //         {/* Single Row Horizontal Cards Grid */}
// //         <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
// //           {pillars.map((pillar, index) => {
// //             const IconComponent = pillar.icon;
// //             return (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: index * 0.15 }}
// //                 className={`pillar-card group relative overflow-hidden rounded-[28px] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between border border-white/[0.08] ${pillar.accentBorder} shadow-2xl`}
// //               >
// //                 {/* Internal Light Gradient Effect */}
// //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-100 pointer-events-none" />

// //                 {/* Content Layer */}
// //                 <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
// //                   {/* Top Bar: Icon & Number Badge */}
// //                   <div className="flex items-center justify-between">
// //                     <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 ${pillar.iconColor}`}>
// //                       <IconComponent className="w-7 h-7" />
// //                     </div>
// //                     <span className="card-number text-2xl font-black text-white/20 group-hover:text-white/80 transition-colors duration-300">
// //                       {pillar.number}
// //                     </span>
// //                   </div>

// //                   {/* Title */}
// //                   <div className="card-titles flex flex-col pt-2">
// //                     <h3 className="card-title text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300 m-0">
// //                       {pillar.title}
// //                     </h3>
// //                   </div>
                  
// //                   {/* Description */}
// //                   <p className="card-description text-slate-300/90 text-sm md:text-[15px] leading-relaxed flex-grow font-light m-0">
// //                     {pillar.description}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //         {/* Bottom Summary Statement */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //           className="mt-20 text-center max-w-3xl mx-auto px-4"
// //         >
// //           <p className="text-base md:text-lg font-medium text-slate-300/80 leading-relaxed">
// //             Together, these three pillars create a strategic branding approach that is <span className="text-white font-semibold">intelligent</span>, <span className="text-white font-semibold">structured</span>, and built for long-term business growth.
// //           </p>
// //         </motion.div>

// //       </div>

// //       {/* Glassmorphism Card Styling */}
// //       <style jsx global>{`
// //         .pillar-card {
// //           background: linear-gradient(145deg, rgba(8, 18, 41, 0.75) 0%, rgba(4, 9, 22, 0.9) 100%);
// //           backdrop-filter: blur(20px);
// //           -webkit-backdrop-filter: blur(20px);
// //         }

// //         .pillar-card:hover {
// //           background: linear-gradient(145deg, rgba(14, 28, 61, 0.8) 0%, rgba(6, 14, 33, 0.95) 100%);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// /* eslint-disable @next/next/no-img-element */

// 'use client';

// import React from "react";
// import { motion } from "framer-motion";
// import { Compass, Brain, Layers3, Sparkles } from "lucide-react";

// export default function EcosystemPillarsClean() {
//   const pillars = [
//     {
//       icon: Compass,
//       number: "01",
//       title: "Strategy",
//       description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
//       iconColor: "text-blue-400",
//       accentBorder: "hover:border-blue-500/30",
//     },
//     {
//       icon: Brain,
//       number: "02",
//       title: "Artificial Intelligence",
//       description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
//       iconColor: "text-indigo-400",
//       accentBorder: "hover:border-indigo-500/30",
//     },
//     {
//       icon: Layers3,
//       number: "03",
//       title: "Curation",
//       description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
//       iconColor: "text-purple-400",
//       accentBorder: "hover:border-purple-500/30",
//     },
//   ];

//   return (
//     <section className="relative py-28 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden bg-[#02050e]">
      
//       {/* 1. Exact Deep Navy Dark Base */}
//       <div className="absolute inset-0 bg-[#020612] z-0" />

//       {/* 2. Exact Diagonal Electric Blue Light Glow Beam */}
//       <div 
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 rotate-[-18deg]"
//         style={{
//           background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(10, 85, 230, 0.75) 0%, rgba(5, 45, 140, 0.35) 45%, rgba(2, 6, 18, 0.95) 80%, rgba(1, 3, 10, 1) 100%)'
//         }}
//       />

//       {/* 3. Subtle Marble & Fluid Veins (ചിത്രത്തിലെ അതേ ഓർഗാനിക് മാർബിൾ ഞരമ്പുകൾ) */}
//       <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden mix-blend-screen">
//         <svg 
//           className="w-full h-full min-w-[1400px] min-h-[900px]" 
//           viewBox="0 0 1400 900" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="marble-blue-fade" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#020612" stopOpacity="0" />
//               <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.4" />
//               <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
//               <stop offset="75%" stopColor="#1e40af" stopOpacity="0.3" />
//               <stop offset="100%" stopColor="#020612" stopOpacity="0" />
//             </linearGradient>

//             <linearGradient id="marble-gold-subtle" x1="100%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#020612" stopOpacity="0" />
//               <stop offset="40%" stopColor="#936a28" stopOpacity="0.3" />
//               <stop offset="70%" stopColor="#d97706" stopOpacity="0.15" />
//               <stop offset="100%" stopColor="#020612" stopOpacity="0" />
//             </linearGradient>
//           </defs>

//           {/* Left Dark Corner Marble Textures */}
//           <path d="M -100 150 C 120 320, 80 550, -80 800 C 50 550, 180 350, 20 150" fill="url(#marble-gold-subtle)" className="blur-[10px]" />
//           <path d="M -50 180 C 140 330, 90 530, -50 750" stroke="url(#marble-gold-subtle)" strokeWidth="1.5" className="blur-[1px]" />

//           {/* Diagonal Fluid Wavy Lines */}
//           <path d="M -50 700 C 350 250, 650 600, 1050 250 T 1500 150" stroke="url(#marble-blue-fade)" strokeWidth="3" className="blur-[2px]" />
//           <path d="M -30 715 C 370 265, 670 615, 1070 265 T 1520 165" stroke="url(#marble-blue-fade)" strokeWidth="1" className="blur-[0.5px]" />
//           <path d="M -10 730 C 390 280, 690 630, 1090 280 T 1540 180" stroke="white" strokeWidth="0.5" strokeOpacity="0.35" />

//           {/* Intersecting Right Side Veins */}
//           <path d="M 250 -50 C 650 350, 850 150, 1250 550 C 1400 700, 1450 350, 1650 500" stroke="url(#marble-blue-fade)" strokeWidth="2.5" className="blur-[1.5px]" />
//           <path d="M 900 500 C 1150 270, 1300 620, 1600 370" stroke="url(#marble-gold-subtle)" strokeWidth="2" className="blur-[1px]" />
//           <path d="M 920 520 C 1170 290, 1320 640, 1620 390" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
//         </svg>
//       </div>

//       {/* 4. Vignette Shadow Edge Fade (വശങ്ങളിലെ കറുപ്പിലേക്ക് പോകുന്ന ഗ്രേഡിയന്റ്) */}
//       <div 
//         className="absolute inset-0 pointer-events-none z-0"
//         style={{
//           background: 'radial-gradient(circle at center, transparent 40%, rgba(1, 3, 10, 0.8) 85%, rgba(1, 2, 7, 1) 100%)'
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
          
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-blue-400" />
//             <span>Our Core Framework</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
//           >
//             Strategy <span className="text-blue-400/60 font-light">+</span> Artificial Intelligence <span className="text-blue-400/60 font-light">+</span> Curation
//           </motion.h2>

//           <p className="text-slate-300/80 text-base md:text-lg max-w-2xl mx-auto font-normal">
//             An interconnected system engineered for modern high-growth brands.
//           </p>

//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 mx-auto rounded-full mt-4 opacity-80" />
//         </div>

//         {/* Single Row Horizontal Cards Grid */}
//         <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
//           {pillars.map((pillar, index) => {
//             const IconComponent = pillar.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 className={`pillar-card group relative overflow-hidden rounded-[28px] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between border border-white/[0.08] ${pillar.accentBorder} shadow-2xl`}
//               >
//                 {/* Internal Light Gradient Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-100 pointer-events-none" />

//                 {/* Content Layer */}
//                 <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
//                   {/* Top Bar: Icon & Number Badge */}
//                   <div className="flex items-center justify-between">
//                     <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 ${pillar.iconColor}`}>
//                       <IconComponent className="w-7 h-7" />
//                     </div>
//                     <span className="card-number text-2xl font-black text-white/20 group-hover:text-white/80 transition-colors duration-300">
//                       {pillar.number}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <div className="card-titles flex flex-col pt-2">
//                     <h3 className="card-title text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300 m-0">
//                       {pillar.title}
//                     </h3>
//                   </div>
                  
//                   {/* Description */}
//                   <p className="card-description text-slate-300/90 text-sm md:text-[15px] leading-relaxed flex-grow font-light m-0">
//                     {pillar.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom Summary Statement */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-20 text-center max-w-3xl mx-auto px-4"
//         >
//           <p className="text-base md:text-lg font-medium text-slate-300/80 leading-relaxed">
//             Together, these three pillars create a strategic branding approach that is <span className="text-white font-semibold">intelligent</span>, <span className="text-white font-semibold">structured</span>, and built for long-term business growth.
//           </p>
//         </motion.div>

//       </div>

//       {/* Glassmorphism Card Styling */}
//       <style jsx global>{`
//         .pillar-card {
//           background: linear-gradient(145deg, rgba(8, 22, 51, 0.5) 0%, rgba(3, 10, 26, 0.75) 100%);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//         }

//         .pillar-card:hover {
//           background: linear-gradient(145deg, rgba(14, 33, 71, 0.65) 0%, rgba(5, 15, 38, 0.85) 100%);
//         }
//       `}</style>
//     </section>
//   );
// }

/* eslint-disable @next/next/no-img-element */

'use client';

import React from "react";
import { motion } from "framer-motion";
import { Compass, Brain, Layers3, Sparkles } from "lucide-react";

export default function EcosystemPillarsClean() {
  const pillars = [
    {
      icon: Compass,
      number: "01",
      title: "Strategy",
      description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
      iconColor: "text-blue-400",
      accentBorder: "hover:border-blue-500/30",
    },
    {
      icon: Brain,
      number: "02",
      title: "Artificial Intelligence",
      description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
      iconColor: "text-indigo-400",
      accentBorder: "hover:border-indigo-500/30",
    },
    {
      icon: Layers3,
      number: "03",
      title: "Curation",
      description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
      iconColor: "text-purple-400",
      accentBorder: "hover:border-purple-500/30",
    },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden bg-[#02050e]">
      
      {/* 1. Exact Deep Navy Dark Base */}
      <div className="absolute inset-0 bg-[#020612] z-0" />

      {/* 2. Exact Diagonal Electric Blue Light Glow Beam */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 rotate-[-18deg]"
        style={{
          background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(10, 85, 230, 0.75) 0%, rgba(5, 45, 140, 0.35) 45%, rgba(2, 6, 18, 0.95) 80%, rgba(1, 3, 10, 1) 100%)'
        }}
      />

      {/* 3. Vignette Shadow Edge Fade */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(1, 3, 10, 0.8) 85%, rgba(1, 2, 7, 1) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
          
          

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Strategy <span className="text-blue-400/60 font-light">+</span> Artificial Intelligence <span className="text-blue-400/60 font-light">+</span> Curation
          </motion.h2>

         

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 mx-auto rounded-full mt-4 opacity-80" />
        </div>

        {/* Single Row Horizontal Cards Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`pillar-card group relative overflow-hidden rounded-[28px] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between border border-white/[0.08] ${pillar.accentBorder} shadow-2xl`}
              >
                {/* Internal Light Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-100 pointer-events-none" />

                {/* Content Layer */}
                <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 ${pillar.iconColor}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="card-number text-2xl font-black text-white/20 group-hover:text-white/80 transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="card-titles flex flex-col pt-2">
                    <h3 className="card-title text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors duration-300 m-0">
                      {pillar.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="card-description text-slate-300/90 text-sm md:text-[15px] leading-relaxed flex-grow font-light m-0">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-base md:text-lg font-medium text-slate-300/80 leading-relaxed">
            Together, these three pillars create a strategic branding approach that is <span className="text-white font-semibold">intelligent</span>, <span className="text-white font-semibold">structured</span>, and built for long-term business growth.
          </p>
        </motion.div>

      </div>

      {/* Glassmorphism Card Styling */}
      <style jsx global>{`
        .pillar-card {
          background: linear-gradient(145deg, rgba(8, 22, 51, 0.5) 0%, rgba(3, 10, 26, 0.75) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .pillar-card:hover {
          background: linear-gradient(145deg, rgba(14, 33, 71, 0.65) 0%, rgba(5, 15, 38, 0.85) 100%);
        }
      `}</style>
    </section>
  );
}