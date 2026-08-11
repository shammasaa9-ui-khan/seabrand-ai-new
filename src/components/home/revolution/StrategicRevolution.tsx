

import RevolutionBackground from "./RevolutionBackground";
import RevolutionHeader from "./RevolutionHeader";
import RevolutionStatsGrid from "./RevolutionStatsGrid";

export default function StrategicRevolution() {
  return (
    <section
      /* ✅ FIXED: Changed py-24 to pt-16 pb-12 for mobile. md:py-20 (Laptop) remains untouched. */
      className="pt-16 pb-12 md:py-20 relative overflow-hidden w-full bg-gradient-to-br from-[#020617] via-[#071A3D] to-[#020617]"
      id="impact"
    >
      {/* <LuxuryMarbleBackground scoped /> */}
      <RevolutionBackground />

      {/* Universal Container applied */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* ✅ FIXED: Changed mobile gap from gap-16 to gap-8 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          
          <RevolutionHeader />
          
          <RevolutionStatsGrid />
          
        </div>
      </div>
    </section>
  );
}