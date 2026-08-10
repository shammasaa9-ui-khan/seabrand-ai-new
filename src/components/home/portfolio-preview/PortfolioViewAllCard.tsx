"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PortfolioViewAllCardProps {
  delayCount: number;
}

export default function PortfolioViewAllCard({ delayCount }: PortfolioViewAllCardProps) {
  return (
    <Link href="/works" className="block shrink-0 py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          delay: delayCount * 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="group relative overflow-hidden rounded-3xl border border-[#6748FE]/20 bg-[#6748FE]/5 w-[55vw] sm:w-[240px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] cursor-pointer flex flex-col items-center justify-center transition-colors duration-500 hover:bg-[#6748FE]/10 hover:border-[#6748FE]/40 shadow-lg"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-white/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:border-[#6748FE] group-hover:bg-[#6748FE] transition-all duration-500 text-white">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white tracking-tight group-hover:text-[#9b85ff] transition-colors">
          View Full Curation
        </h3>
      </motion.div>
    </Link>
  );
}