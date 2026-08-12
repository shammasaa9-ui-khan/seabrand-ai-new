// /* eslint-disable @next/next/no-img-element */

// import React from "react";

// import ApproachHeader from "@/src/components/Approach/Approchheader";
// import ApproachPillar from "@/src/components/Approach/Three-Pillar";

// import HowWeWork from "@/src/components/Approach/How-we-work";


// export default function approchPage() {
//   return (
//     <main className="min-h-screen bg-[#02040a] text-slate-100 pt-0 pb-24 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
//       <ApproachHeader />
//       <ApproachPillar />
//       <HowWeWork/>
      
//     </main>
//   );
// }

/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";

import ApproachHeader from "@/src/components/Approach/Approchheader";
import ApproachPillar from "@/src/components/Approach/Three-Pillar";
import HowWeWork from "@/src/components/Approach/How-we-work";
import BlueBackground from "@/src/components/shared/BlueBackground";

export default function ApprochPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#02040a] text-slate-100 pt-0 pb-0 selection:bg-[#6748FE] selection:text-white">

      <BlueBackground />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full flex flex-col gap-0">
        <ApproachHeader />
        <HowWeWork />
         
        <ApproachPillar />
        
       
      </div>

    </main>
  );
}