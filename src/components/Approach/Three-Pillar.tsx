
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { approachData } from "@/src/data/approach";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function ApproachPillar() {
  // Explicitly mapping or re-ordering pillars based on: 
  // 1: Strategy, 2: AI Integration, 3: Curation
  const targetOrder = ["Strategy", "AI Integration", "Curation"];
  
  const sortedPillars = [...approachData.pillars].sort((a, b) => {
    const getIndex = (title: string) => {
      const foundIdx = targetOrder.findIndex(t => title.toLowerCase().includes(t.toLowerCase()));
      return foundIdx !== -1 ? foundIdx : 99;
    };
    return getIndex(a.title) - getIndex(b.title);
  });

  return (
    <div 
      className="w-full relative overflow-x-hidden text-slate-100"
      style={{
        background: `
          radial-gradient(ellipse at 25% 40%, rgba(103,72,254,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.06) 0%, transparent 45%),
          radial-gradient(ellipse at 55% 75%, rgba(59,130,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 15% 85%, rgba(139,92,246,0.10) 0%, transparent 40%),
          linear-gradient(160deg, #0a1628 0%, #071A3D 50%, #020617 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">

        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide md:tracking-tight m-0 select-none">
            {approachData.title}
          </h2>
        </header>

        {/* Approach Pillar Section */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortedPillars.map((item, index) => {
              // Enforce "01", "02", "03" sequence numbers corresponding to the new position
              const customNumber = `0${index + 1}`;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    transition-all duration-500
                    px-5 py-6
                    sm:px-6 sm:py-7
                    lg:p-10
                    flex flex-col justify-between
                    h-full
                  "
                  style={{
                    ...GLASS_CARD_STYLE,
                    boxShadow: "none",
                  }}
                >
                  {/* Clean gradient background layers (Marble image texture removed) */}
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

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Number */}
                    <div className="flex items-center justify-start">
                      <span className="text-3xl font-black text-white tracking-tighter transition-colors duration-300">
                        {customNumber}
                      </span>
                    </div>

                    {/* Title & Tagline - Desktop view മാറ്റമില്ലാതെ, മൊബൈൽ വ്യൂവിൽ മാത്രം കാർഡ് ഹെഡിംഗിന്റെ letter spacing കൂട്ടിയിരിക്കുന്നു */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl font-bold text-white tracking-wide md:tracking-tight m-0 transition-colors duration-300 group-hover:text-sky-200">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 italic leading-relaxed m-0">
                        &ldquo;{item.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-400 m-0 pt-4 border-t border-white/10">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}