// /* eslint-disable @next/next/no-img-element */

// 'use client';

// import React, { useState } from 'react';
// import { faqData } from '@/src/data/FAQ-Data';

// export default function FAQ() {
//   const [openId, setOpenId] = useState<string | null>("2");

//   const toggleFAQ = (id: string) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <section className="w-full bg-white py-16 px-4 font-sans text-neutral-800">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-10">
//           <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
//             010 • FAQS
//           </span>
//           <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
//               Frequently Asked Questions
//           </h2>
//         </div>

//         <div className="max-h-[480px] overflow-y-auto space-y-3.5 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//           {faqData.map((item) => {
//             const isOpen = openId === item.id;
//             return (
//               <div
//                 key={item.id}
//                 onClick={() => toggleFAQ(item.id)}
//                 className={`transition-all duration-300 rounded-2xl border cursor-pointer select-none ${
//                   isOpen
//                     ? "bg-white border-blue-400 shadow-sm ring-1 ring-blue-400/20 p-5"
//                     : "bg-neutral-100/80 border-transparent hover:bg-neutral-100 px-5 py-4"
//                 }`}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <span className="text-sm font-medium text-neutral-400 w-5">
//                       {item.id}
//                     </span>
//                     <h3 className="text-base md:text-lg font-medium text-neutral-900">
//                       {item.question}
//                     </h3>
//                   </div>
                  
//                   {/* Plus & Minus Button */}
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
//                       isOpen
//                         ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
//                         : "bg-neutral-900 text-white hover:bg-neutral-800"
//                     }`}
//                   >
//                     <span className="text-lg font-medium leading-none select-none">
//                       {isOpen ? "−" : "+"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Smooth Animated Accordion Content */}
//                 <div
//                   className={`grid transition-all duration-300 ease-in-out ${
//                     isOpen
//                       ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-neutral-100"
//                       : "grid-rows-[0fr] opacity-0 overflow-hidden"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
//                       {item.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-10 text-sm text-neutral-500">
//           Have any other questions?{" "}
//           <a
//             href="#contact"
//             className="inline-flex items-center font-medium text-neutral-900 underline underline-offset-4 hover:text-blue-600 transition-colors ml-1"
//           >
//             Contact Us
//             <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';
import { faqData } from '@/src/data/FAQ-Data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("2");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 px-4 font-sans text-neutral-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
            010 • FAQS
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
              Frequently Asked Questions
          </h2>
        </div>

        <div className="max-h-[480px] overflow-y-auto space-y-3.5 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleFAQ(item.id)}
                className={`transition-all duration-300 rounded-2xl border cursor-pointer select-none ${
                  isOpen
                    ? "bg-white border-blue-400 shadow-sm ring-1 ring-blue-400/20 p-5"
                    : "bg-neutral-100/80 border-transparent hover:bg-neutral-100 px-5 py-4"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-normal text-neutral-400 w-5">
                      {item.id}
                    </span>
                    <h3 className="text-base md:text-lg font-normal text-neutral-900">
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Plus & Minus Button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isOpen
                        ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                        : "bg-neutral-900 text-white hover:bg-neutral-800"
                    }`}
                  >
                    <span className="text-lg font-medium leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {/* Smooth Animated Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-neutral-100"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 text-sm text-neutral-500">
          Have any other questions?{" "}
          <a
            href="#contact"
            className="inline-flex items-center font-medium text-neutral-900 underline underline-offset-4 hover:text-blue-600 transition-colors ml-1"
          >
            Contact Us
            <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}