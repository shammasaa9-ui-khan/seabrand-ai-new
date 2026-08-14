
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { team } from "@/src/data/team.data";

export default function TeamQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeQuote = team[currentQuoteIndex];

  return (
    <div className="w-full bg-transparent text-black py-0 md:py-16 px-6 md:px-12 overflow-hidden relative max-w-3xl mx-auto">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-8">
          Inside SeaBrand
        </p>

        {/* Massive Typography Quote */}
        <div className="min-h-[140px] md:min-h-[160px] flex items-center justify-center w-full mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] tracking-tight text-black">
                {activeQuote.quote || "Proud to shape the future of branding and digital experiences here at SeaBrand. We build with purpose and execute with precision."}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Author Avatar & Info */}
        <div className="flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name + "avatar"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-zinc-200 border-2 border-black/10 shadow-md"
            >
              <Image
                src={activeQuote.image}
                alt={activeQuote.name}
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name + "text"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-lg font-bold tracking-tight mb-0.5 text-black">{activeQuote.name}</h4>
              <p className="text-[#6748FE] text-xs font-bold uppercase tracking-wider">{activeQuote.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Pagination */}
        <div className="flex gap-2.5 mt-10">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteIndex(index)}
              className={`h-1.5 rounded-xl transition-all duration-500 ${
                currentQuoteIndex === index ? "w-8 bg-[#6748FE]" : "w-3 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}