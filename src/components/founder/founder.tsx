// // // /* eslint-disable @next/next/no-img-element */
// // // "use client";

// // // import React from "react";
// // // import {
// // //   Rocket,
// // //   Target,
// // //   TrendingUp,
// // // } from "lucide-react";

// // // const FOUNDER_IMAGE = "/images/team/fazal.png";

// // // export default function MeetFounder() {
// // //   return (
// // //     <>
// // //       <section className="relative overflow-hidden bg-[#F5F0E8] px-5 py-8 text-[#111820] sm:px-8 md:py-10 lg:px-12 lg:py-14">
        
// // //         {/* Soft Background Effects */}
// // //         <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D8C1A3]/10 blur-[120px]" />
// // //         <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C69A5B]/10 blur-[120px]" />

// // //         <div className="relative mx-auto max-w-[1300px]">

// // //           {/* Main Layout: On mobile/tablet image comes first (flex-col-reverse), on desktop content is on left & image is on right */}
// // //           <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 xl:gap-16">

// // //             {/* =========================================
// // //                 LEFT - FOUNDER CONTENT
// // //             ========================================== */}
// // //             <div className="relative flex flex-col justify-center pt-0 lg:pt-4 xl:pt-6">

// // //               {/* Small Heading */}
// // //               <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] sm:text-sm">
// // //                 Meet the Founder
// // //               </p>

// // //               {/* Founder Name with responsive tracking */}
// // //               <h1 className="text-[30px] font-black leading-[1.08] tracking-[0.05em] text-[#101820] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[48px] lg:tracking-[-0.03em]">
// // //                 Fazal
// // //               </h1>

// // //               {/* Role */}
// // //               <p className="mt-2 text-sm font-medium leading-relaxed text-[#A47738] sm:text-base">
// // //                 Founder &amp; CMD of PROCODER
// // //                 <span className="mx-2 text-[#A47738]">|</span>
// // //                 Founder of SEABRAND AI
// // //               </p>

// // //               {/* Founder Story */}
// // //               <div className="mt-6 space-y-4 text-[14px] leading-[1.7] text-[#181818] sm:text-base">
// // //                 <p>
// // //                   With over <strong>9 years of experience</strong> across technology, branding, business strategy, and entrepreneurship, Fazal is the Founder &amp; Chairman and Managing Director (CMD) of PROCODER, the parent company behind a growing ecosystem of technology and strategic branding ventures.
// // //                 </p>

// // //                 <p>
// // //                   Driven by a passion for innovation and business transformation, he established <strong>PROCODER</strong> to build solutions that help businesses grow through technology, strategy, and digital innovation.
// // //                 </p>

// // //                 <p>
// // //                   As the company evolved, he identified a significant gap in how businesses approached branding in the age of Artificial Intelligence.
// // //                 </p>

// // //                 <p>
// // //                   This insight led to the creation of{" "}
// // //                   <span className="font-semibold text-[#A47738]">SEABRAND AI</span>, a subsidiary of PROCODER and Kerala&apos;s First AI Strategic Branding Curator.
// // //                 </p>

// // //                 <p>
// // //                   Today, through PROCODER and SEABRAND AI, Fazal leads an <strong>AI-first strategic branding ecosystem</strong> that empowers businesses, startups, professionals, and creators to build stronger brands, make smarter strategic decisions, and achieve sustainable growth.
// // //                 </p>
// // //               </div>

// // //             </div>


// // //             {/* =========================================
// // //                 RIGHT / TOP - LARGER IMAGE WITH DEEPER FADING
// // //             ========================================== */}
// // //             <div className="relative flex w-full justify-center lg:mt-6">
// // //               <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-[20px]">
// // //                 <img
// // //                   src={FOUNDER_IMAGE}
// // //                   alt="Fazal - Founder & AI Strategic Brand Curator"
// // //                   className="h-full w-full object-contain object-center [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
// // //                 />
// // //               </div>
// // //             </div>

// // //           </div>

// // //           {/* =========================================
// // //               FEATURE CARDS - WIDTH REDUCED & CENTERED
// // //           ========================================== */}
// // //           <div className="mt-10 flex justify-center">
// // //             <div className="grid w-full max-w-[950px] grid-cols-1 gap-4 sm:grid-cols-3">

// // //               {/* AI Strategy */}
// // //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// // //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// // //                   <Rocket size={22} strokeWidth={1.7} />
// // //                 </div>
// // //                 <div className="min-w-0 flex-1">
// // //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// // //                     AI-First Strategy
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Brand Transformation */}
// // //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// // //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// // //                   <Target size={22} strokeWidth={1.7} />
// // //                 </div>
// // //                 <div className="min-w-0 flex-1">
// // //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// // //                     Brand Transformation
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Business Growth */}
// // //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// // //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// // //                   <TrendingUp size={22} strokeWidth={1.7} />
// // //                 </div>
// // //                 <div className="min-w-0 flex-1">
// // //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// // //                     Business Growth
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //             </div>
// // //           </div>

// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // /* eslint-disable @next/next/no-img-element */
// // "use client";

// // import React from "react";
// // import {
// //   Rocket,
// //   Target,
// //   TrendingUp,
// // } from "lucide-react";

// // const FOUNDER_IMAGE = "/images/team/fazal.png";

// // export default function MeetFounder() {
// //   return (
// //     <>
// //       <section className="relative overflow-hidden bg-[#F5F0E8] px-5 py-8 text-[#111820] sm:px-8 md:py-10 lg:px-12 lg:py-14">
        
// //         {/* Soft Background Effects */}
// //         <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D8C1A3]/10 blur-[120px]" />
// //         <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C69A5B]/10 blur-[120px]" />

// //         <div className="relative mx-auto max-w-[1300px]">

// //           {/* Main Layout: On mobile/tablet image comes first (flex-col-reverse), on desktop content is on left & image is on right */}
// //           <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 xl:gap-16">

// //             {/* =========================================
// //                 LEFT - FOUNDER CONTENT
// //             ========================================== */}
// //             <div className="relative flex flex-col justify-center pt-0 lg:pt-4 xl:pt-6">

// //               {/* Small Heading */}
// //               <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] sm:text-sm">
// //                 Meet the Founder
// //               </p>

// //               {/* Founder Name with responsive tracking */}
// //               <h1 className="text-[30px] font-black leading-[1.08] tracking-[0.05em] text-[#101820] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[48px] lg:tracking-[-0.03em]">
// //                 Fazal
// //               </h1>

// //               {/* Role */}
// //               <p className="mt-2 text-sm font-medium leading-relaxed text-[#A47738] sm:text-base">
// //                 Founder &amp; CMD of PROCODER
// //                 <span className="mx-2 text-[#A47738]">|</span>
// //                 Founder of SEABRAND AI
// //               </p>

// //               {/* Founder Story */}
// //               <div className="mt-6 space-y-4 text-[14px] leading-[1.7] text-[#181818] sm:text-base">
// //                 <p>
// //                   With over <strong>9 years of experience</strong> across technology, branding, business strategy, and entrepreneurship, Fazal is the Founder &amp; Chairman and Managing Director (CMD) of PROCODER, the parent company behind a growing ecosystem of technology and strategic branding ventures.
// //                 </p>

// //                 <p>
// //                   Driven by a passion for innovation and business transformation, he established <strong>PROCODER</strong> to build solutions that help businesses grow through technology, strategy, and digital innovation.
// //                 </p>

// //                 <p>
// //                   As the company evolved, he identified a significant gap in how businesses approached branding in the age of Artificial Intelligence.
// //                 </p>

// //                 <p>
// //                   This insight led to the creation of{" "}
// //                   <span className="font-semibold text-[#A47738]">SEABRAND AI</span>, a subsidiary of PROCODER and Kerala&apos;s First AI Strategic Branding Curator.
// //                 </p>

// //                 <p>
// //                   Today, through PROCODER and SEABRAND AI, Fazal leads an <strong>AI-first strategic branding ecosystem</strong> that empowers businesses, startups, professionals, and creators to build stronger brands, make smarter strategic decisions, and achieve sustainable growth.
// //                 </p>
// //               </div>

// //             </div>


// //             {/* =========================================
// //                 RIGHT / TOP - LARGER IMAGE WITH DEEPER FADING
// //             ========================================== */}
// //             <div className="relative flex w-full justify-center lg:mt-6">
// //               <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] overflow-hidden rounded-[20px] -mb-6 sm:-mb-10 lg:mb-0">
// //                 <img
// //                   src={FOUNDER_IMAGE}
// //                   alt="Fazal - Founder & AI Strategic Brand Curator"
// //                   className="h-full w-full object-cover object-top sm:object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] lg:[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
// //                 />
// //               </div>
// //             </div>

// //           </div>

// //           {/* =========================================
// //               FEATURE CARDS - WIDTH REDUCED & CENTERED
// //           ========================================== */}
// //           <div className="mt-10 flex justify-center">
// //             <div className="grid w-full max-w-[950px] grid-cols-1 gap-4 sm:grid-cols-3">

// //               {/* AI Strategy */}
// //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// //                   <Rocket size={22} strokeWidth={1.7} />
// //                 </div>
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// //                     AI-First Strategy
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Brand Transformation */}
// //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// //                   <Target size={22} strokeWidth={1.7} />
// //                 </div>
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// //                     Brand Transformation
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Business Growth */}
// //               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
// //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
// //                   <TrendingUp size={22} strokeWidth={1.7} />
// //                 </div>
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-sm font-semibold leading-snug text-[#151515]">
// //                     Business Growth
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// /* eslint-disable @next/next/no-img-element */
// "use client";

// import React from "react";
// import {
//   Rocket,
//   Target,
//   TrendingUp,
// } from "lucide-react";

// const FOUNDER_IMAGE = "/images/team/fazal.png";

// export default function MeetFounder() {
//   return (
//     <>
//       <section className="relative overflow-hidden bg-[#F5F0E8] px-5 py-8 text-[#111820] sm:px-8 md:py-10 lg:px-12 lg:py-14">
        
//         {/* Soft Background Effects */}
//         <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D8C1A3]/10 blur-[120px]" />
//         <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C69A5B]/10 blur-[120px]" />

//         <div className="relative mx-auto max-w-[1300px]">

//           {/* Main Layout: On mobile/tablet image comes first (flex-col-reverse), on desktop content is on left & image is on right */}
//           <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 xl:gap-16">

//             {/* =========================================
//                 LEFT - FOUNDER CONTENT
//             ========================================== */}
//             <div className="relative flex flex-col justify-center pt-0 lg:pt-4 xl:pt-6">

//               {/* Small Heading */}
//               <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] sm:text-sm">
//                 Meet the Founder
//               </p>

//               {/* Founder Name with responsive tracking */}
//               <h1 className="text-[30px] font-black leading-[1.08] tracking-[0.05em] text-[#101820] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[48px] lg:tracking-[-0.03em]">
//                 Fazal
//               </h1>

//               {/* Role */}
//               <p className="mt-2 text-sm font-medium leading-relaxed text-[#A47738] sm:text-base">
//                 Founder &amp; CMD of PROCODER
//                 <span className="mx-2 text-[#A47738]">|</span>
//                 Founder of SEABRAND AI
//               </p>

//               {/* Founder Story */}
//               <div className="mt-6 space-y-4 text-[14px] leading-[1.7] text-[#181818] sm:text-base">
//                 <p>
//                   With over <strong>9 years of experience</strong> across technology, branding, business strategy, and entrepreneurship, Fazal is the Founder &amp; Chairman and Managing Director (CMD) of PROCODER, the parent company behind a growing ecosystem of technology and strategic branding ventures.
//                 </p>

//                 <p>
//                   Driven by a passion for innovation and business transformation, he established <strong>PROCODER</strong> to build solutions that help businesses grow through technology, strategy, and digital innovation.
//                 </p>

//                 <p>
//                   As the company evolved, he identified a significant gap in how businesses approached branding in the age of Artificial Intelligence.
//                 </p>

//                 <p>
//                   This insight led to the creation of{" "}
//                   <span className="font-semibold text-[#A47738]">SEABRAND AI</span>, a subsidiary of PROCODER and Kerala&apos;s First AI Strategic Branding Curator.
//                 </p>

//                 <p>
//                   Today, through PROCODER and SEABRAND AI, Fazal leads an <strong>AI-first strategic branding ecosystem</strong> that empowers businesses, startups, professionals, and creators to build stronger brands, make smarter strategic decisions, and achieve sustainable growth.
//                 </p>
//               </div>

//             </div>


//             {/* =========================================
//                 RIGHT / TOP - LARGER IMAGE WITH DEEPER FADING
//             ========================================== */}
//             <div className="relative flex w-full justify-center pt-4 lg:pt-6 lg:mt-6">
//               <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] overflow-hidden rounded-[20px] lg:translate-y-8">
//                 <img
//                   src={FOUNDER_IMAGE}
//                   alt="Fazal - Founder & AI Strategic Brand Curator"
//                   className="h-full w-full object-cover object-top sm:object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] lg:[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
//                 />
//               </div>
//             </div>

//           </div>

//           {/* =========================================
//               FEATURE CARDS - WIDTH REDUCED & CENTERED
//           ========================================== */}
//           <div className="mt-10 flex justify-center">
//             <div className="grid w-full max-w-[950px] grid-cols-1 gap-4 sm:grid-cols-3">

//               {/* AI Strategy */}
//               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
//                   <Rocket size={22} strokeWidth={1.7} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <p className="text-sm font-semibold leading-snug text-[#151515]">
//                     AI-First Strategy
//                   </p>
//                 </div>
//               </div>

//               {/* Brand Transformation */}
//               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
//                   <Target size={22} strokeWidth={1.7} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <p className="text-sm font-semibold leading-snug text-[#151515]">
//                     Brand Transformation
//                   </p>
//                 </div>
//               </div>

//               {/* Business Growth */}
//               <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
//                   <TrendingUp size={22} strokeWidth={1.7} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <p className="text-sm font-semibold leading-snug text-[#151515]">
//                     Business Growth
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";

const FOUNDER_IMAGE = "/images/team/fazal.png";

export default function MeetFounder() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F0E8] px-5 pt-20 pb-8 text-[#111820] sm:px-8 sm:pt-24 md:py-10 lg:px-12 lg:py-14">
        
        {/* Soft Background Effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D8C1A3]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C69A5B]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1300px]">

          {/* Main Layout: On mobile/tablet image comes first (flex-col-reverse), on desktop content is on left & image is on right */}
          <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 xl:gap-16">

            {/* =========================================
                LEFT - FOUNDER CONTENT
            ========================================== */}
            <div className="relative flex flex-col justify-center pt-4 sm:pt-6 lg:pt-4 xl:pt-6">

              {/* Small Heading */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] sm:text-sm">
                Meet the Founder
              </p>

              {/* Founder Name with responsive tracking */}
              <h1 className="text-[30px] font-black leading-[1.08] tracking-[0.05em] text-[#101820] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[48px] lg:tracking-[-0.03em]">
                Fazal
              </h1>

              {/* Role */}
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#A47738] sm:text-base">
                Founder &amp; CMD of PROCODER
                <span className="mx-2 text-[#A47738]">|</span>
                Founder of SEABRAND AI
              </p>

              {/* Founder Story */}
              <div className="mt-6 space-y-4 text-[14px] leading-[1.7] text-[#181818] sm:text-base">
                <p>
                  With over <strong>9 years of experience</strong> across technology, branding, business strategy, and entrepreneurship, Fazal is the Founder &amp; Chairman and Managing Director (CMD) of PROCODER, the parent company behind a growing ecosystem of technology and strategic branding ventures.
                </p>

                <p>
                  Driven by a passion for innovation and business transformation, he established <strong>PROCODER</strong> to build solutions that help businesses grow through technology, strategy, and digital innovation.
                </p>

                <p>
                  As the company evolved, he identified a significant gap in how businesses approached branding in the age of Artificial Intelligence.
                </p>

                <p>
                  This insight led to the creation of{" "}
                  <span className="font-semibold text-[#A47738]">SEABRAND AI</span>, a subsidiary of PROCODER and Kerala&apos;s First AI Strategic Branding Curator.
                </p>

                <p>
                  Today, through PROCODER and SEABRAND AI, Fazal leads an <strong>AI-first strategic branding ecosystem</strong> that empowers businesses, startups, professionals, and creators to build stronger brands, make smarter strategic decisions, and achieve sustainable growth.
                </p>
              </div>

            </div>


            {/* =========================================
                RIGHT / TOP - LARGER IMAGE WITH DEEPER FADING
            ========================================== */}
            <div className="relative flex w-full justify-center pt-8 sm:pt-12 lg:pt-6 lg:mt-6">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] overflow-hidden rounded-[20px] lg:translate-y-8">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Fazal - Founder & AI Strategic Brand Curator"
                  className="h-full w-full object-cover object-top sm:object-contain [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] lg:[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
                />
              </div>
            </div>

          </div>

          {/* =========================================
              FEATURE CARDS - WIDTH REDUCED & CENTERED
          ========================================== */}
          <div className="mt-10 flex justify-center">
            <div className="grid w-full max-w-[950px] grid-cols-1 gap-4 sm:grid-cols-3">

              {/* AI Strategy */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
                  <Rocket size={22} strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-[#151515]">
                    AI-First Strategy
                  </p>
                </div>
              </div>

              {/* Brand Transformation */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
                  <Target size={22} strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-[#151515]">
                    Brand Transformation
                  </p>
                </div>
              </div>

              {/* Business Growth */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#DED5C9] bg-[#F9F5EF] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#A47738] bg-[#F0E6D8]">
                  <TrendingUp size={22} strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-[#151515]">
                    Business Growth
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}