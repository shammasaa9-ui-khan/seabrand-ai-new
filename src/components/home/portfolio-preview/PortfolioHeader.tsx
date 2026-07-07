"use client";

import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <div className="container-custom mx-auto px-4 md:px-12 relative z-10 mb-6 md:mb-10 lg:mb-3 shrink-0 flex flex-col items-center justify-center text-center w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 md:mb-10 lg:mb-15 font-bold text-white tracking-tight"
      >
        What We{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
          Curated.
        </span>
      </motion.h2>
    </div>
  );
}