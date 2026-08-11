

// "use client";


// import BlueBackground from "../../shared/BlueBackground";
// import ExpertiseHeader from "./ExpertiseHeader";
// import ExpertiseGrid from "./ExpertiseGrid";

// export default function ExpertiseSection() {
//   return (
//     <section className="pt-20 pb-0 relative overflow-hidden w-full bg-[#02040a]">
//       {/* <LuxuryMarbleBackground scoped /> */}
//       <BlueBackground />

//       {/* ✅ FIXED: Reduced mobile padding to pb-4 to bring the bottom section area completely up */}
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-4 md:pb-32">
        
//         <ExpertiseHeader />
        
//         <ExpertiseGrid />

//       </div>
//     </section>
//   );
// }
"use client";

import BlueBackground from "../../shared/BlueBackground";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseGrid from "./ExpertiseGrid";

export default function ExpertiseSection() {
  return (
    <section 
      className="pt-20 pb-0 relative overflow-hidden w-full"
      style={{
        background: 'linear-gradient(160deg, #0a1628 0%, #071A3D 50%, #020617 100%)'
      }}
    >
      {/* Background Gradient & Glow Effects */}
      <BlueBackground />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-4 md:pb-32">
        
        <ExpertiseHeader />
        
        <ExpertiseGrid />

      </div>
    </section>
  );
}