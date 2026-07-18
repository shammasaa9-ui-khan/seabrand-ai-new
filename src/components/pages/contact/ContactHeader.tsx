// 


/* eslint-disable react/no-unescaped-entities */
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ContactHeader() {
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
        Contact Us
      </motion.div>
              <motion.h1
                variants={fadeUp}
                /* 
                  - tracking-[0.02em]: Sets a slightly wider letter spacing for mobile.
                  - md:tracking-tight: Resets to your desired tighter spacing on tablets and above.
                  - lg:tracking-tighter: Maintains your original extra-tight spacing on large desktops.
                */
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.02em] md:tracking-tight lg:tracking-tighter text-black leading-[0.95] mb-8"
              >
                Our Curator is Ready <br className="hidden md:block" />
                <span className="text-[#A899FF]">Let's talk.</span>
              </motion.h1>
    </motion.div>
  );
}