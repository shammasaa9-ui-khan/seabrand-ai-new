// "use client";

// import { motion } from "framer-motion";

// export default function ExpertiseBackground() {
//   return (
//     <>
//       {/* Animated Glowing Orbs for Glassmorphism Highlights */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.2, 0.1], // Subtle opacity
//           x: [0, 100, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 -left-[10%] w-[600px] h-[600px] bg-[#6748FE] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"
//       />
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.05, 0.15, 0.05], // Subtle opacity
//           x: [0, -100, 0],
//           y: [0, 100, 0],
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute bottom-20 -right-[10%] w-[700px] h-[700px] bg-blue-600 rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"
//       />

//       {/* Fade Gradients top and bottom */}
//       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function ExpertiseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#01030d] z-0">
      
      {/* 1. Exact Diagonal Electric Blue Light Glow Beam */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rotate-[-18deg]"
        style={{
          background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(10, 85, 230, 0.75) 0%, rgba(5, 45, 140, 0.35) 45%, rgba(2, 6, 18, 0.95) 80%, rgba(1, 3, 10, 1) 100%)'
        }}
      />

      {/* 2. Vignette Shadow Edge Fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(1, 3, 10, 0.8) 85%, rgba(1, 2, 7, 1) 100%)'
        }}
      />

      {/* 3. Animated Glowing Orbs for Glassmorphism Highlights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-[10%] w-[600px] h-[600px] bg-[#6748FE] rounded-full mix-blend-screen filter blur-[150px] opacity-15"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 -right-[10%] w-[700px] h-[700px] bg-blue-600 rounded-full mix-blend-screen filter blur-[180px] opacity-10"
      />

      {/* 4. Fade Gradients top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#01030d] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#01030d] to-transparent z-10" />
    </div>
  );
}