
'use client';

import React from "react";
import { motion } from "framer-motion";
import { Compass, Brain, Layers3 } from "lucide-react";

export default function EcosystemPillarsClean() {
  const pillars = [
    {
      icon: Compass,
      number: "01",
      title: "Strategy",
      description: "Every successful brand starts with a clear strategy. We define positioning, identify opportunities, understand audiences, and create structured roadmaps that guide every branding and marketing decision.",
      iconColor: "text-blue-400",
      accentBorder: "hover:border-blue-500/30",
    },
    {
      icon: Brain,
      number: "02",
      title: "Artificial Intelligence",
      description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
      iconColor: "text-indigo-400",
      accentBorder: "hover:border-indigo-500/30",
    },
    {
      icon: Layers3,
      number: "03",
      title: "Curation",
      description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
      iconColor: "text-purple-400",
      accentBorder: "hover:border-purple-500/30",
    },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden bg-[#02050e]">
      
      {/* 1. Exact Deep Navy Dark Base */}
      <div className="absolute inset-0 bg-[#020612] z-0" />

      {/* 2. Exact Diagonal Electric Blue Light Glow Beam */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 rotate-[-18deg]"
        style={{
          background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(10, 85, 230, 0.75) 0%, rgba(5, 45, 140, 0.35) 45%, rgba(2, 6, 18, 0.95) 80%, rgba(1, 3, 10, 1) 100%)'
        }}
      />

      {/* 3. Vignette Shadow Edge Fade */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(1, 3, 10, 0.8) 85%, rgba(1, 2, 7, 1) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[0.08em] sm:tracking-[0.06em] md:tracking-tight leading-tight"
          >
            Strategy <span className="text-[#6748FE] font-light">+</span> Artificial Intelligence <span className="text-[#6748FE] font-light">+</span> Curation
          </motion.h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] mx-auto rounded-full mt-4 opacity-90 shadow-[0_0_15px_rgba(103,72,254,0.5)]" />
        </div>

        {/* Single Row Horizontal Cards Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`pillar-card group relative overflow-hidden rounded-[28px] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between border border-white/[0.08] ${pillar.accentBorder} shadow-2xl`}
              >
                {/* Internal Light Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30 opacity-100 pointer-events-none" />

                {/* Content Layer */}
                <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 ${pillar.iconColor}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="card-number text-2xl font-black text-white/20 group-hover:text-white/80 transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title (Hover color change removed, text remains static white) */}
                  <div className="card-titles flex flex-col pt-2">
                    <h3 className="card-title text-xl md:text-2xl font-bold text-white tracking-[0.1em] lg:tracking-tight transition-colors duration-300 m-0">
                      {pillar.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="card-description text-slate-300/90 text-sm md:text-[15px] leading-relaxed flex-grow font-light m-0">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-base md:text-lg font-medium text-slate-300/80 leading-relaxed">
            Together, these three pillars create a strategic branding approach that is <span className="text-white font-semibold">intelligent</span>, <span className="text-white font-semibold">structured</span>, and built for long-term business growth.
          </p>
        </motion.div>

      </div>

      {/* Glassmorphism Card Styling */}
      <style jsx global>{`
        .pillar-card {
          background: linear-gradient(145deg, rgba(8, 22, 51, 0.5) 0%, rgba(3, 10, 26, 0.75) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .pillar-card:hover {
          background: linear-gradient(145deg, rgba(14, 33, 71, 0.65) 0%, rgba(5, 15, 38, 0.85) 100%);
        }
      `}</style>
    </section>
  );
}