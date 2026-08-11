/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function WhyWeExist() {
  return (
    <div className="relative bg-transparent text-slate-100 pt-8 md:pt-12 pb-8 md:pb-12 px-6 sm:px-8 lg:px-12 font-sans selection:bg-[#6748FE] selection:text-white">
      
      {/* STATIC LUXURY BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6748FE]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* SECTION: WHY WE EXIST */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Why We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#6748FE]">Exist</span>
            </h2>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-slate-300 leading-relaxed font-normal text-base md:text-lg m-0">
              Technology is changing faster than ever, and so are customer expectations. Many businesses invest in branding, marketing, and content without a clear strategy connecting them together. The result is fragmented communication, inconsistent brand identity, and missed growth opportunities.
            </p>
            <p className="text-slate-300 leading-relaxed font-normal text-base md:text-lg m-0">
              SEABRAND AI exists to bridge that gap. We help businesses understand how strategic branding can transform the way they build, position, communicate, and grow in an AI-driven marketplace.
            </p>
            <p className="text-slate-300 leading-relaxed font-normal text-base md:text-lg m-0">
              Our purpose is not to replace human creativity with artificial intelligence. Our purpose is to combine human expertise with intelligent systems to create brands that are more strategic, more efficient, and more prepared for the future.
            </p>
            <p className="text-slate-300 leading-relaxed font-normal text-base md:text-lg m-0">
              Every business deserves a branding approach that is structured, measurable, and built for sustainable growth. That is why SEABRAND AI exists.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}