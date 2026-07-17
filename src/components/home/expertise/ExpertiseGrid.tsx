"use client";

import { motion } from "framer-motion";
import { steps } from "@/src/data/expertize.data";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

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
              rounded-[2rem]
              transition-all duration-500
              px-5 py-6
              sm:px-6 sm:py-7
              lg:p-10
            "
            style={GLASS_CARD_STYLE}
          >
            {/* Marble texture and background layers */}
            <div
              className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse at 25% 40%, rgba(103,72,254,0.18) 0%, transparent 55%),
                  radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.10) 0%, transparent 45%),
                  radial-gradient(ellipse at 55% 75%, rgba(59,130,246,0.12) 0%, transparent 50%),
                  radial-gradient(ellipse at 15% 85%, rgba(139,92,246,0.10) 0%, transparent 40%),
                  linear-gradient(160deg, #0a1628 0%, #071A3D 40%, #020617 100%)
                `,
              }}
            />
            <img
              src="/bg-luxury.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen pointer-events-none"
            />

            <div
              className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

            <span className="pointer-events-none absolute -bottom-3 -right-3 text-7xl font-black text-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] sm:text-8xl lg:-bottom-4 lg:-right-4 lg:text-9xl">
              {step.number}
            </span>

            <div className="relative z-10">
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

              {/* Title with responsive letter spacing */}
              {/* Title */}
<h3 className="mb-4 text-xl font-bold tracking-tight max-md:tracking-[0.06em] text-white lg:mb-4 lg:text-3xl">
  {step.title}
</h3>

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