// 

"use client";

import { motion } from "framer-motion";

const headlineAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay: 0.3,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  },
};

export default function HeroHeadline() {
  return (
    <motion.h1
      {...headlineAnimation}
      className="
        text-[14vw] 
        sm:text-[11vw] 
        md:text-7xl 
        lg:text-[6.8rem] 
        xl:text-[8rem]

        font-black not-italic
        tracking-tighter
        text-center text-neutral-950
        relative z-10 w-full
        select-none
      "
    >
      {/* Mobile View - Increased text line gap slightly more, pulled layout gaps tighter */}
      <div className="md:hidden flex flex-col leading-[0.98] tracking-tighter my-[-35px]">
        <span>Kerala&apos;s</span>

        <span>
          Fi<span className="tracking-[0.2px]">rs</span>t AI
        </span>

        <span>
          S<span className="tracking-[0.2px]">tr</span>ategic
        </span>

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
          Branding
        </span>

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
          Curator.
        </span>
      </div>

      {/* Desktop View - Unchanged */}
      <div className="hidden md:flex flex-col leading-[1.05]">
        <span>
          Kerala&apos;s Fi
          <span className="tracking-[0.2px]">rs</span>t AI
        </span>

        <span>
          S<span className="tracking-[0.2px]">tr</span>ategic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
            Branding
          </span>
        </span>

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
          Curator.
        </span>
      </div>
    </motion.h1>
  );
}