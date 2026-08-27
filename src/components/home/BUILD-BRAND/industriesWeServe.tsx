

"use client";

import React from "react";
import { industriesWeServeData } from "@/src/data/industriesWeServe.data";

export default function IndustriesWeServe() {
  return (
    <section className="relative py-6 md:py-20 overflow-hidden bg-[#01030d] text-[#e0e0e0]">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-950/45 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-6 text-white tracking-[0.08em] md:tracking-normal">
          {industriesWeServeData.heading}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-4 md:mb-12 text-base md:text-lg leading-relaxed font-light">
          {industriesWeServeData.description}
        </p>

        {/* Outer Box Container */}
        <div className="bg-black rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 relative overflow-hidden border border-gray-800/60 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-8 text-indigo-400">
              {industriesWeServeData.subheading}
            </h3>

            {/* 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-4 gap-x-8">
              {industriesWeServeData.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  
                  {/* Smaller Outlined Triangle Icon */}
                  <svg
                    className="shrink-0 w-2.5 h-3 text-indigo-400"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 8L1 15V1Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Industry Name */}
                  <span className="text-slate-200 font-medium text-sm md:text-base">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}