/* eslint-disable @next/next/no-img-element */

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
    },
    {
      icon: Brain,
      number: "02",
      title: "Artificial Intelligence",
      description: "Artificial Intelligence enhances the way we research, analyze, plan, and optimize branding decisions. It enables faster insights, smarter execution, and data-informed decision-making throughout the branding journey.",
      iconColor: "text-indigo-400",
    },
    {
      icon: Layers3,
      number: "03",
      title: "Curation",
      description: "Curation transforms strategy into meaningful brand experiences. It connects branding, design, communication, content, and marketing into one consistent ecosystem that reflects your brand's identity and business goals.",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section className="tech-background relative py-24 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-950/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Strategy <span className="text-slate-500 font-light">+</span> Artificial Intelligence <span className="text-slate-500 font-light">+</span> Curation
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] mx-auto rounded-full mt-2" />
        </div>

        {/* Single Row Horizontal Cards Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="pillar-card group relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 flex-1 flex flex-col justify-between"
              >
                {/* Subtle top/inner gradient highlight for a polished depth effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-100 pointer-events-none" />

                {/* Content Layer */}
                <div className="card-inner relative z-10 flex flex-col h-full gap-6">
                  
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 ${pillar.iconColor}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="card-number text-2xl font-black text-white/40 group-hover:text-white transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="card-titles flex flex-col">
                    <h3 className="card-title text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300 m-0">
                      {pillar.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="card-description text-slate-300 text-sm md:text-base leading-relaxed flex-grow font-light m-0 pt-2">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed">
            Together, these three pillars create a strategic branding approach that is intelligent, structured, and built for long-term business growth.
          </p>
        </motion.div>

      </div>

      {/* CSS Styles with Border and Box-Shadow Completely Removed */}
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #01030d;
          color: #e0e0e0;
        }

        .tech-background {
          background-color: #01030d;
          background-image: 
            radial-gradient(circle at 75% 20%, rgba(0, 130, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(0, 90, 220, 0.35) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(1, 3, 13, 0.85) 0%, #01030d 100%);
          background-attachment: fixed;
          position: relative;
          overflow-x: hidden;
        }

        .tech-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg, 
            rgba(1, 3, 13, 0.6) 0%, 
            rgba(1, 3, 13, 0.35) 50%, 
            rgba(1, 3, 13, 0.75) 100%
          );
          pointer-events: none;
          z-index: 0;
        }

        .pillar-card {
          background: linear-gradient(135deg, rgba(10, 25, 55, 0.95) 0%, rgba(3, 8, 22, 0.98) 100%);
          border: none;
          backdrop-filter: blur(16px);
          box-shadow: none;
        }

        .pillar-card:hover {
          background: linear-gradient(135deg, rgba(15, 35, 75, 0.95) 0%, rgba(5, 12, 30, 0.98) 100%);
          border: none;
          box-shadow: none;
        }
      `}</style>
    </section>
  );
}