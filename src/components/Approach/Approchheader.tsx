/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ApproachHeader() {
  return (
    <section className="relative text-slate-900 pt-28 md:pt-36 pb-8 md:pb-12 px-6 sm:px-8 lg:px-12 font-sans selection:bg-[#6748FE] selection:text-white bg-white">
      
      {/* BACKGROUND GLOWS REMOVED */}

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* HEADER SECTION (Classic Minimal Look without Badge) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Where Strategy Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#5032d8]">Intelligence</span>
          </h2>

          {/* Subtle Divider Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#6748FE] to-transparent rounded-full opacity-60" />
        </motion.div>

        {/* PARAGRAPHS CONTAINER (Clean typography without card border) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-slate-600 leading-relaxed font-normal text-base md:text-lg text-center max-w-3xl mx-auto"
        >
          <p className="m-0">
            At SEABRAND AI, we believe that successful branding is never the result of creativity alone. It is the outcome of strategic thinking, structured execution, and continuous refinement.
          </p>

          <p className="m-0">
            Our approach combines Artificial Intelligence, Strategic Thinking, and Human Curation to build brands that are not only visually compelling but also positioned for sustainable growth.
          </p>

          <p className="m-0 text-slate-900 font-medium">
            We don&apos;t simply provide branding services we build strategic branding ecosystems designed to help businesses, startups, professionals, and creators grow with clarity, consistency, and purpose.
          </p>
        </motion.div>

      </div>

    </section>
  );
}