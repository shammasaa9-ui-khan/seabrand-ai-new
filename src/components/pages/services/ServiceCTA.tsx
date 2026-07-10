"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  onOpenModal: () => void;
}

export default function ServiceCTA({ onOpenModal }: ServiceCTAProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        
        // Changed background to black
        className="relative bg-black backdrop-blur-3xl rounded-[1.8rem] md:rounded-[2.5rem] p-6 sm:p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
      >
      
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl text-center md:text-left">
          {/* Label Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs md:text-sm font-semibold text-purple-300 mb-6 md:mb-8 uppercase tracking-widest shadow-sm">
            Let&apos;s Collaborate
          </div>

          {/* Heading Text */}
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-4 md:mb-6">
            Ready to evolve <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">your brand?</span>
          </h2>
          
          {/* Paragraph Text */}
          <p className="text-base md:text-lg text-slate-400">
            Let’s discuss your vision and see how our AI-powered curation can scale your business.
          </p>
        </div>

        {/* Start Project Button */}
        <button
          onClick={onOpenModal}
          className="relative z-10 group bg-purple-600 text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-purple-500 transition-all active:scale-98 w-full md:w-auto text-sm md:text-lg px-5 py-3.5 md:px-10 md:py-6 shadow-[0_10px_30px_rgba(108,47,238,0.3)] border border-white/10"
        >
          Start Project
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
}