/* eslint-disable @next/next/no-img-element */

import WhyThisApproach from "@/src/components/Eccosystem/Approach-Works";
import Framework from "@/src/components/Eccosystem/Eco-Framework";
import EcosystemHero from "@/src/components/Eccosystem/Eco-Hero";
import EcosystemPillars from "@/src/components/Eccosystem/Eco-Pillars";
import EccoWorkflow from "@/src/components/Eccosystem/Eco-Workflow";


import React from "react";


export default function eccosystemPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-0 pb-24 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
        <EcosystemHero/>
        <EcosystemPillars/>
        <EccoWorkflow/>
        <Framework/>
        <WhyThisApproach/>
        
    </main>
  );
}