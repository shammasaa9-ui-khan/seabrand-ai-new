/* eslint-disable @next/next/no-img-element */


"use client";

import React from "react";
import { aboutData } from "@/src/data/about.data";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

export default function WhyChoose() {
  const { whyChoose } = aboutData;

  return (
    <section className="relative text-white pt-6 md:pt-10 pb-10 md:pb-16 px-6 sm:px-8 lg:px-12 selection:bg-[#6748FE] selection:text-white">
      
      {/* Background Glow / Fog effect removed */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-6">
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

        {/* Intro Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-3 mb-10 text-left">
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
              className="group relative overflow-hidden rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
              style={GLASS_CARD_STYLE}
            >
              {/* Marble texture and background layers */}
              <div
                className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
                style={{
                  background: `
                    radial-gradient(ellipse at 25% 40%, rgba(103,72,254,0.18) 0%, transparent 55%),
                    radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.10) 0%, transparent 45%),
                    radial-gradient(ellipse at 55% 75%, rgba(59,130,246,0.12) 0%, transparent 50%),
                    radial-gradient(ellipse at 15% 85%, rgba(139,92,246,0.10) 0%, transparent 40%),
                    linear-gradient(160deg, #0a1628 0%, #071A3D 40%, #020617 100%)
                  `,
                }}
              />
              <img
                src="/bg-luxury.png"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

              {/* Background Large Number Watermark */}
              <div className="absolute right-4 bottom-0 text-[140px] font-black text-white/[0.03] select-none pointer-events-none leading-none z-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 flex flex-col h-full text-left">
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors tracking-[0.04em] sm:tracking-normal group-hover:text-[#A78BFA]">
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