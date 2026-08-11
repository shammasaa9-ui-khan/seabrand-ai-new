"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CareersHeader() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-4xl w-full flex flex-col items-center"
      >
      

        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal lg:tracking-tight text-black leading-[1.1] text-center w-full mb-8"
        >
          Do the best work <br className="hidden md:block" />
          <span className="text-[#A899FF]">of your life.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}