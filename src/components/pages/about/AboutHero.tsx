/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function AboutUsSection() {
  return (
    <div className="relative text-slate-100 pt-28 md:pt-36 pb-8 md:pb-12 px-6 sm:px-8 lg:px-12 font-sans selection:bg-[#6748FE] selection:text-white">
      
      {/* STATIC LUXURY BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6748FE]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* HEADING OUTSIDE THE BOX */}
        <div className="flex flex-col items-start">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6748FE]/10 border border-[#6748FE]/30 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who we are</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            How we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#6748FE]">started</span>
          </h2>
        </div>

        {/* CONTENT BOX */}
        <div className="group relative bg-[#0b1221]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-black/40 hover:border-[#818cf8]/50 transition-all duration-500">
          
          <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-b from-[#818cf8]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start">
            
            {/* Paragraphs with exact line breaks */}
            <div className="space-y-6 text-slate-300 leading-relaxed font-normal text-base md:text-lg">
              <p className="m-0">
                SEABRAND AI was founded with a simple yet ambitious belief: the future of branding is no longer driven by creativity alone—it is driven by strategy, intelligence, and continuous innovation.
              </p>

              <p className="m-0">
                As businesses embrace digital transformation, traditional branding methods are no longer enough to compete in an AI-driven world. Brands need more than attractive designs or marketing campaigns—they need a structured ecosystem that connects strategy, branding, communication, and growth.
              </p>

              <p className="m-0">
                That&apos;s why SEABRAND AI was created.
              </p>

              <p className="m-0">
                Recognized as Kerala&apos;s First AI Strategic Branding Curator, SEABRAND AI introduces an AI-first strategic branding ecosystem that helps businesses, startups, professionals, and creators build meaningful, scalable, and future-ready brands.
              </p>

              <div className="pt-2">
                <p className="m-0 font-medium text-white mb-2">Our methodology is built on three core pillars:</p>
                <p className="m-0 font-bold text-xl text-[#A78BFA]">AI + Strategy + Curation</p>
              </div>

              <p className="m-0">
                By combining strategic thinking with intelligent workflows and creative execution, we help brands position themselves with clarity, build stronger customer connections, and achieve sustainable growth.
              </p>

              <p className="m-0">
                At SEABRAND AI, we don&apos;t simply deliver branding services—we build strategic ecosystems designed for long-term business success.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}