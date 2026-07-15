// 


"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  number: string | number;
  rightTitle: string;
  rightDesc: string;
}

export default function ServicesDisplay({ service }: { service: ServiceItem }) {
  return (
    <div className="relative flex flex-col overflow-hidden border-y border-zinc-800 py-12 lg:min-h-[520px] justify-center">
      
      {/* AI Badge */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-[#0a0a0a]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:text-xs md:text-sm lg:top-8 lg:right-8">
        ✨ AI Integrated
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.number}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative flex h-full w-full flex-col lg:flex-row items-center pt-16 lg:pt-0"
        >
          {/* Number: Mobile-il absolute top-left, Desktop-il normal */}
          <div
            className="absolute top-[-10px] left-4 select-none font-bold text-white leading-none
              text-[6rem] sm:text-[8rem] 
              lg:static lg:text-[14rem] lg:ml-12"
          >
            {service.number}
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-1/2 pl-6 lg:pl-20 mt-12 lg:mt-0">
            <h4 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-white">
              {service.rightTitle}
            </h4>

            <p className="max-w-md text-base leading-relaxed text-zinc-400">
              {service.rightDesc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}