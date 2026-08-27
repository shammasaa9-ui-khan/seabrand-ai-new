


"use client";

import { motion } from "framer-motion";

export const GLASS_CARD_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(145deg, rgba(8, 22, 49, 0.75) 0%, rgba(3, 9, 21, 0.92) 60%, rgba(0, 0, 0, 0.98) 100%)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(103,72,254,0.30)",
  boxShadow:
    "0 0 60px rgba(103,72,254,0.30), 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
};

interface LuxuryMarbleBackgroundProps {
  scoped?: boolean;
}

export default function LuxuryMarbleBackground({
  scoped = true, // Defaulting to true keeps it contained within the parent section
}: LuxuryMarbleBackgroundProps) {
  return (
    <div
      className={
        scoped
          ? "absolute inset-0 pointer-events-none overflow-hidden"
          : "fixed inset-0 pointer-events-none overflow-hidden"
      }
    >
      <motion.div
        className="absolute w-[120vw] h-[120vh] opacity-30 mix-blend-screen"
        style={{
          background: `
            radial-gradient(ellipse at 25% 40%, rgba(103,72,254,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.10) 0%, transparent 45%),
            radial-gradient(ellipse at 55% 75%, rgba(59,130,246,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 15% 85%, rgba(139,92,246,0.10) 0%, transparent 40%),
            linear-gradient(160deg, #0a1628 0%, #071A3D 40%, #020617 100%)
          `,
        }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/bg-luxury.png"
        alt=""
        aria-hidden
        className="absolute w-[120vw] h-[120vh] object-cover opacity-30 mix-blend-screen"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#071A3D]/70 to-[#020617]" />

      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
    </div>
  );
}