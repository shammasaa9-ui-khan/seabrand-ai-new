/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { aboutData } from "@/src/data/about.data";

export default function WhyChoose() {
  const { whyChoose } = aboutData;

  return (
    <section className="relative text-white pt-8 md:pt-12 pb-16 md:pb-24 px-6 sm:px-8 lg:px-12 selection:bg-[#6748FE] selection:text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#6748FE]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#818CF8] to-[#6748FE] bg-clip-text text-transparent">
              SEABRAND AI
            </span>
          </h2>

          <p className="mt-2 text-lg md:text-xl text-slate-300">
            Build a Brand That Leads, Not Just Competes
          </p>
        </div>

        {/* Intro Paragraphs - Tighter Paragraph Gap & Balanced Line Height */}
        <div className="max-w-4xl mx-auto space-y-3 mb-16 text-left">
          {whyChoose.intro.map((text, index) => (
            <p
              key={index}
              className="text-slate-300 text-base md:text-lg leading-snug"
            >
              {text}
            </p>
          ))}
        </div>

        {/* 3-Column Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8 md:p-10
              transition-all duration-500
              hover:border-[#6748FE]/40
              hover:bg-white/[0.06]
              hover:-translate-y-1
              flex flex-col justify-between"
            >
              {/* Glow */}
              <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-[#6748FE]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background Large Number Watermark */}
              <div className="absolute right-4 bottom-0 text-[140px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 flex flex-col h-full text-left">
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}