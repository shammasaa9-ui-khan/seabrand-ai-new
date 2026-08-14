
"use client";

import React from "react";
import { 
  Compass, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Quote 
} from "lucide-react";

export default function FoundersJourney() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E8] px-5 py-12 text-[#111820] sm:px-8 md:py-16 lg:px-12 lg:py-20">
      
      {/* Soft Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[600px] w-[600px] rounded-full bg-[#D8C1A3]/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-[#C69A5B]/15 blur-[150px]" />

      <div className="relative mx-auto max-w-[900px]">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEE7DE] border border-[#DED5C9] px-4 py-2 text-sm font-medium tracking-wide text-[#1B1B1B]">
            <Compass size={16} strokeWidth={2} />
            <span>THE FOUNDER&apos;S JOURNEY</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#101820] sm:text-5xl md:text-6xl sm:tracking-normal lg:tracking-tight">
            <span className="tracking-[0.03em] sm:tracking-normal">Every Brand Has a Story.</span> <br />
            <span className="text-[#A47738] tracking-[0.03em] sm:tracking-normal">This Is Mine.</span>
          </h1>

          <p className="mt-4 text-lg text-[#555555]">
            My entrepreneurial journey did not begin with a perfect roadmap. It began with a decision.
          </p>
        </div>

        {/* Main Content Flow */}
        <div className="mt-8 sm:mt-12 space-y-12 md:space-y-16 text-[#181818]">

          {/* Chapter 1: The Turning Point */}
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-[#EEE7DE] border border-[#DED5C9] px-4 py-3 text-[#A47738]">
              <Lightbulb size={24} strokeWidth={1.8} />
              <span className="font-bold uppercase tracking-wider text-sm text-[#111820]">2020: The Pivot</span>
            </div>
            <div className="space-y-3 text-base leading-[1.7] sm:text-lg text-[#333333] w-full">
              <p>
                In 2020, during the global COVID-19 pandemic, I was working as a Software Developer at an e-commerce company in HiLite Business Park, Kozhikode. Like many professionals during that time, remote work gave me an opportunity to pause and reflect on a simple but life-changing question:
              </p>
              <blockquote className="border-l-4 border-[#A47738] pl-4 italic font-semibold text-[#111820]">
                &ldquo;What do I truly want to build?&rdquo;
              </blockquote>
              <p>
                That question changed everything. I chose to leave my job and pursue entrepreneurship, believing that creating meaningful solutions would have a greater impact than simply building software.
              </p>
            </div>
          </div>

          {/* Chapter 2: The Beginning & Realization */}
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-[#EEE7DE] border border-[#DED5C9] px-4 py-3 text-[#A47738]">
              <TrendingUp size={24} strokeWidth={1.8} />
              <span className="font-bold uppercase tracking-wider text-sm text-[#111820]">PROCODER Era</span>
            </div>
            <div className="space-y-3 text-base leading-[1.7] sm:text-lg text-[#333333] w-full">
              <p>
                My first venture was <strong>PROCODER – Technology & Admedia</strong>. Like many first-time founders, I believed that offering more services meant creating more opportunities—websites, software development, branding, digital marketing, business consulting, IT solutions, and creative services.
              </p>
              <p>
                The experience was exciting, but over time I discovered an important lesson:
              </p>
              <p className="font-medium text-[#111820]">
                Being able to do many things is not the same as being known for one thing. I wasn&apos;t lacking passion or effort. I was lacking focus.
              </p>
            </div>
          </div>

          {/* Chapter 3: UAE Experience & The Difficult Chapter */}
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-[#EEE7DE] border border-[#DED5C9] px-4 py-3 text-[#A47738]">
              <ShieldCheck size={24} strokeWidth={1.8} />
              <span className="font-bold uppercase tracking-wider text-sm text-[#111820]">Resilience & Clarity</span>
            </div>
            <div className="space-y-3 text-base leading-[1.7] sm:text-lg text-[#333333] w-full">
              <p>
                In 2023, I travelled to the UAE to explore new career and business opportunities. Eventually, I realized something vital: instead of helping build someone else&apos;s vision, I wanted to continue building my own, bringing me back to India with renewed clarity.
              </p>
              <p>
                Like many startups, entrepreneurship came with harsh challenges. Despite our dedication, financial pressures eventually forced us to stop operations. For many, that might have been the end. For me, it became the turning point.
              </p>
              <p>
                I spent nearly a year researching branding, studying successful companies, analysing failed businesses, understanding customer behaviour, and exploring how Artificial Intelligence was transforming industries.
              </p>
            </div>
          </div>

          {/* Chapter 4: The Birth of SEABRAND AI */}
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-[#EEE7DE] border border-[#DED5C9] px-4 py-3 text-[#A47738]">
              <Cpu size={24} strokeWidth={1.8} />
              <span className="font-bold uppercase tracking-wider text-sm text-[#111820]">SEABRAND AI</span>
            </div>
            <div className="space-y-3 text-base leading-[1.7] sm:text-lg text-[#333333] w-full">
              <p>
                The answer to my deep research became <span className="font-semibold text-[#A47738]">SEABRAND AI</span>—not another digital marketing agency or AI software company, but an entirely new approach to branding combining strategic thinking, human expertise, and Artificial Intelligence into one integrated ecosystem.
              </p>
              <p className="font-semibold text-[#111820]">
                Businesses should never start with marketing. They should start with strategy.
              </p>
              <p>
                Today, SEABRAND AI helps businesses, startups, professionals, and creators build brands with clarity, confidence, and long-term direction through an AI-first strategic branding approach.
              </p>
            </div>
          </div>

        </div>

        {/* Professional Highlights Grid */}
        <div className="mt-14 md:mt-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl font-bold tracking-[0.1em] sm:tracking-tight text-[#101820] mt-3">Professional Highlights</h2>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "9+ Years", desc: "Experience in Technology, Branding & Strategy" },
              { title: "250+", desc: "Branding & Digital Projects Delivered" },
              { title: "125+", desc: "Businesses & Brands Supported Worldwide" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-[#DED5C9] bg-[#F9F5EF] p-5 md:p-6 text-center shadow-[0_4px_20px_rgba(80,60,40,0.02)] transition-all hover:-translate-y-1">
                <p className="text-2xl font-black text-[#A47738]">{item.title}</p>
                <p className="mt-2 text-sm text-[#444444] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Message Quote Box */}
        <div className="mt-14 md:mt-20 overflow-hidden rounded-3xl border border-[#DED5C9] bg-[#EEE5DB] p-6 md:p-8 lg:p-12 relative shadow-lg">
          {/* Quote icon position adjusted for responsiveness */}
          <div className="absolute right-4 top-4 md:right-6 md:top-6 text-[#A47738]/15 md:text-[#A47738]/20 pointer-events-none scale-75 md:scale-100 origin-top-right">
            <Quote size={120} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A47738] mb-3">Founder&apos;s Message</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.1em] sm:tracking-tight text-[#101820] mb-4">
              Fazal
            </h3>
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-[#111820] sm:text-2xl italic">
              &ldquo;I believe every business deserves a strategy before marketing. When strategy leads, branding becomes meaningful, marketing becomes purposeful, and growth becomes sustainable.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="text-xs sm:text-sm text-[#A47738] font-medium">Founder at SEABRAND AI & PROCODER</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}