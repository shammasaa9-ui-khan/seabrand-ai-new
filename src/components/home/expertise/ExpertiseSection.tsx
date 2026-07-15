

"use client";

import LuxuryMarbleBackground from "@/src/components/shared/LuxuryMarbleBackground";
import ExpertiseBackground from "./ExpertiseBackground";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseGrid from "./ExpertiseGrid";

export default function ExpertiseSection() {
  return (
    <section className="pt-20 pb-0 relative overflow-hidden w-full bg-gradient-to-br from-[#020617] via-[#071A3D] to-[#020617]">
      <LuxuryMarbleBackground scoped />
      <ExpertiseBackground />

      {/* ✅ FIXED: Reduced mobile padding to pb-4 to bring the bottom section area completely up */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-4 md:pb-32">
        
        <ExpertiseHeader />
        
        <ExpertiseGrid />

      </div>
    </section>
  );
}