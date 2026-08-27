/* eslint-disable @next/next/no-img-element */


"use client";

import { motion, Variants } from "framer-motion";
import { Compass, Eye, ShieldCheck } from "lucide-react";
import { aboutData } from "@/src/data/about.data";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function MissionVisionValues() {
  return (
    <section className="w-full text-slate-100 pt-10 md:pt-16 pb-10 md:pb-16 px-6 sm:px-8 lg:px-12 relative selection:bg-[#6748FE] selection:text-white bg-transparent">
      
      {/* BACKGROUND GLOWS REMOVED */}

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* HORIZONTAL GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Mission Box */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 h-full"
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

            <div
              className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-[#6748FE]/10 border border-[#6748FE]/30 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-7 h-7 text-[#A78BFA]" />
                </div>

                <div className="text-xs font-semibold tracking-widest text-[#A78BFA] uppercase mb-1">Our Mission</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[0.04em] sm:tracking-tight leading-tight">
                  {aboutData.mission.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mt-6">
                {aboutData.mission.text}
              </p>
            </div>
          </motion.div>

          {/* Vision Box */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 h-full"
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

            <div
              className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-[#6748FE]/10 border border-[#6748FE]/30 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-[#A78BFA]" />
                </div>

                <div className="text-xs font-semibold tracking-widest text-[#A78BFA] uppercase mb-1">Our Vision</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[0.04em] sm:tracking-tight leading-tight">
                  {aboutData.vision.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mt-6">
                {aboutData.vision.text}
              </p>
            </div>
          </motion.div>

          {/* Philosophy Box */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 h-full"
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

            <div
              className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="p-3.5 rounded-2xl bg-[#6748FE]/10 border border-[#6748FE]/30 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7 text-[#A78BFA]" />
                </div>

                <div className="text-xs font-semibold tracking-widest text-[#A78BFA] uppercase mb-1">Philosophy</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[0.04em] sm:tracking-tight leading-tight">
                  {aboutData.values.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal whitespace-pre-line mt-6">
                {aboutData.values.text}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}