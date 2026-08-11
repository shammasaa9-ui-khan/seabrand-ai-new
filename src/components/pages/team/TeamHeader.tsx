"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function TeamHeader() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="mb-20 md:mb-32 max-w-4xl"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-8"
      >
        Curators
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="
          /* Heading size kurakkaan ivide change cheythu (e.g., text-3xl md:text-5xl lg:text-6xl) */
          text-3xl
          md:text-5xl
          lg:text-6xl
          font-bold
          
          tracking-wider
          md:tracking-[0.08em]
          lg:tracking-tight
          
          text-black
          leading-[1.1]
          mb-8
        "
      >
        The minds behind <br className="hidden md:block" />
        <span className="text-[#A899FF]">the magic.</span>
      </motion.h1>
    </motion.div>
  );
}