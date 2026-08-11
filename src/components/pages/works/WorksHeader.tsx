"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WorksHeader() {
  return (
    <section className="mb-12 md:mb-16 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-5xl w-full flex flex-col items-center text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal md:tracking-tighter text-black leading-[1.1] mb-4 md:mb-8 text-center w-full"
        >
          Our strategic <br className="hidden md:block" />
          <span className="text-[#A899FF]">curation.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}