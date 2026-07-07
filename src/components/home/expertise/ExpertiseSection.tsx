

"use client";

import ExpertiseBackground from "./ExpertiseBackground";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseGrid from "./ExpertiseGrid";

export default function ExpertiseSection() {
  return (
    <section className="pt-20 pb-0 bg-[#050505] relative overflow-hidden w-full">
      
      {/* 1. Background Elements */}
      <ExpertiseBackground />

      {/* ✅ FIXED: Reduced mobile padding to pb-4 to bring the bottom section area completely up */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-4 md:pb-32">
        
        <ExpertiseHeader />
        
        <ExpertiseGrid />

      </div>
    </section>
  );
}