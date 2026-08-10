

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
    <div className="w-full bg-[#050505] text-white rounded-xl py-24 md:py-32 px-6 md:px-16 overflow-hidden relative border border-white/10">
      {/* Ambient Dark Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6748FE]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-12">
          Inside SeaBrand
        </p>

        {/* Massive Typography Quote */}
        <div className="min-h-[200px] md:min-h-[250px] flex items-center justify-center w-full mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight">
                {activeQuote.quote || "Proud to shape the future of branding and digital experiences here at SeaBrand. We build with purpose and execute with precision."}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Author Avatar & Info */}
        <div className="flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name + "avatar"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative w-20 h-20 rounded-full overflow-hidden bg-zinc-800 border border-white/10"
            >
              <Image
                src={activeQuote.image}
                alt={activeQuote.name}
                fill
                sizes="80px"
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
              <h4 className="text-xl font-bold tracking-tight mb-1">{activeQuote.name}</h4>
              <p className="text-[#6748FE] text-sm font-bold uppercase tracking-wider">{activeQuote.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Pagination */}
        <div className="flex gap-3 mt-16">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteIndex(index)}
              className={`h-1.5 rounded-xl transition-all duration-500 ${
                currentQuoteIndex === index ? "w-12 bg-[#6748FE]" : "w-4 bg-zinc-800 hover:bg-zinc-600"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}