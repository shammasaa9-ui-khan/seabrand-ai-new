"use client";

import { motion } from "framer-motion";
import { steps } from "@/src/data/expertize.data";

export default function ExpertiseGrid() {
  return (
    <section className="relative mx-auto max-w-7xl">
      {/* Animated Connecting Line (Desktop) */}
      <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 lg:block">
        <div className="absolute inset-0 bg-white/5" />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 origin-left bg-gradient-to-r from-[#6748FE] to-blue-500 shadow-[0_0_15px_#6748FE]"
        />
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              shadow-[0_8px_32px_rgba(0,0,0,0.5)]
              px-5 py-6
              sm:px-6 sm:py-7
              lg:p-10
            "
          >
            {/* Watermark */}
            <span className="pointer-events-none absolute -bottom-3 -right-3 text-7xl font-black text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] sm:text-8xl lg:-bottom-4 lg:-right-4 lg:text-9xl">
              {step.number}
            </span>

            <div className="relative z-10">
              {/* Icon */}
              <div className="
                mb-5
                flex h-11 w-11 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/5
                text-[#6748FE]
                backdrop-blur-md
                transition-all duration-500
                group-hover:border-[#6748FE]/50
                group-hover:bg-[#6748FE]/20
                group-hover:text-white
                sm:h-12 sm:w-12
                lg:mb-8 lg:h-14 lg:w-14
              ">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white lg:mb-4 lg:text-3xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-zinc-400 sm:text-[15px] lg:text-lg lg:leading-8">
                {step.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}