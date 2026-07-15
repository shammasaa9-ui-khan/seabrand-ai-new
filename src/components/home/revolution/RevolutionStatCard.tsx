/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.25, 1, 0.5, 1],
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = Math.round(val) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView, duration, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

interface StatProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    description: string;
  };
  index: number;
}

export default function RevolutionStatCard({ stat, index }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="group relative overflow-hidden rounded-[2rem] p-8 md:p-10 transition-all duration-500"
      style={GLASS_CARD_STYLE}
    >
      {/* Marble texture inside card */}
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

      {/* Purple ambient glow on hover */}
      <div
        className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
      />

      {/* Glass shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter flex items-baseline drop-shadow-md">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
        </div>

        <h3
          className="text-xl font-bold mb-3 tracking-tight"
          style={{ color: "#6748FE" }}
        >
          {stat.label}
        </h3>

        <p className="text-slate-300 text-base leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}
