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

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ClientsHeader() {
  return (
    <section className="mb-10 md:mb-14 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-4xl w-full flex flex-col items-center"
      >
       
        
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide lg:tracking-tight text-black leading-[1.1] text-center w-full"
        >
          Brands we <br className="hidden md:block" />
          <span className="text-[#A899FF]">partner with.</span>
        </motion.h1>

        {/* <motion.p variants={fadeUp} className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
          From ambitious startups to global enterprises, we collaborate with visionary teams to build digital experiences that matter.
        </motion.p> */}
      </motion.div>
    </section>
  );
}