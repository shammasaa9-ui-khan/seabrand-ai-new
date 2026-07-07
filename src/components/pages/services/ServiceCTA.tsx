"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  onOpenModal: () => void;
}

export default function ServiceCTA({ onOpenModal }: ServiceCTAProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#E2E8F0] rounded-[1.8rem] md:rounded-[2.5rem] p-6 sm:p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 border border-slate-300/70 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl text-center md:text-left">
          {/* Label Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/80 border border-slate-300 text-xs md:text-sm font-semibold text-slate-700 mb-6 md:mb-8 uppercase tracking-widest shadow-sm">
            Let&apos;s Collaborate
          </div>

          {/* Heading Text */}
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-4 md:mb-6">
            Ready to evolve <br />
            <span className="text-blue-600">your brand?</span>
          </h2>
          
          {/* Paragraph Text */}
          <p className="text-base md:text-lg text-slate-700">
            Let’s discuss your vision and see how our AI-powered curation can scale your business.
          </p>
        </div>

        {/* Start Project Button */}
        <button
          onClick={onOpenModal}
          className="relative z-10 group bg-black text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-slate-900 transition-all active:scale-98 w-full md:w-auto text-sm md:text-lg px-5 py-3.5 md:px-10 md:py-6 shadow-md"
        >
          Start Project
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
}