
"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  number: string | number;
  rightTitle: string;
  rightDesc: string;
  dynamicTitle?: string;
}

export default function ServicesDisplay({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <div className="relative flex flex-col overflow-hidden border-y border-zinc-800 py-8 sm:py-10 lg:py-0 min-h-[280px] sm:min-h-[340px] lg:min-h-[520px]">
      {/* AI Badge */}
      <div className="absolute top-4 right-0 z-20 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-[#0a0a0a]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:text-xs md:text-sm lg:top-5">
        ✨ AI Integrated
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.number}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="relative flex h-full w-full flex-col justify-between lg:flex-row lg:items-end lg:pb-12"
        >
          {/* Number */}
          <div
            className="
              absolute
              left-0
              top-0
              z-0
              select-none
              whitespace-nowrap
              font-light
              leading-none
              text-white
              opacity-90

              text-[4.5rem]
              sm:text-[6rem]
              md:text-[7.5rem]

              lg:left-auto
              lg:right-0
              lg:top-1/2
              lg:-translate-y-1/2
              lg:text-[20rem]
            "
          >
            {String(service.number)
              .split("")
              .map((digit, index) => (
                <span
                  key={index}
                  className={
                    index !== String(service.number).length - 1
                      ? "inline-block mr-2 sm:mr-3 md:mr-5"
                      : "inline-block"
                  }
                >
                  {digit}
                </span>
              ))}
          </div>

          {/* Content */}
          <div className="relative z-10 mt-24 sm:mt-28 md:mt-32 lg:mt-0 w-full lg:w-1/2">
            <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white">
              {service.rightTitle}
            </h4>

            <p className="max-w-sm text-sm sm:text-base leading-relaxed text-zinc-400">
              {service.rightDesc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}