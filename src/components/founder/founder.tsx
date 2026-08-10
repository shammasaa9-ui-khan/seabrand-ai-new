/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Rocket,
  Target,
  TrendingUp,
  Compass,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Quote,
} from "lucide-react";

const FOUNDER_IMAGE = "/images/team/fazal.png";

export default function MeetFounder() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F0E8] px-5 py-8 text-[#111820] sm:px-8 md:py-10 lg:px-12 lg:py-14">
        
        {/* Soft Background Effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D8C1A3]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C69A5B]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1300px]">

          {/* Main Layout */}
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">

            {/* =========================================
                LEFT - FOUNDER IMAGE ONLY
            ========================================== */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/5] overflow-hidden rounded-[20px] bg-[#EEE5DB] shadow-sm">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Fasalu Rahman KP - Founder & AI Strategic Brand Curator"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>


            {/* =========================================
                RIGHT - FOUNDER CONTENT
            ========================================== */}
            <div className="relative flex flex-col justify-center pt-0 lg:pt-4 xl:pt-6">

              {/* Small Heading */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] sm:text-sm">
                Meet the Founder
              </p>

              {/* Founder Name */}
              <h1 className="text-[30px] font-black leading-[1.08] tracking-[-0.03em] text-[#101820] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[48px]">
                Fasalu Rahman KP
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
                  With over <strong>9 years of experience</strong> across technology, branding, business strategy, and entrepreneurship, Fasalu Rahman KP is the Founder &amp; Chairman and Managing Director (CMD) of PROCODER, the parent company behind a growing ecosystem of technology and strategic branding ventures.
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
                  Today, through PROCODER and SEABRAND AI, Fasalu Rahman KP leads an <strong>AI-first strategic branding ecosystem</strong> that empowers businesses, startups, professionals, and creators to build stronger brands, make smarter strategic decisions, and achieve sustainable growth.
                </p>
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