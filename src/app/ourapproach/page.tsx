/* eslint-disable @next/next/no-img-element */

import React from "react";

import ApproachHeader from "@/src/components/Approach/Approchheader";
import ApproachPillar from "@/src/components/Approach/Three-Pillar";

import HowWeWork from "@/src/components/Approach/How-we-work";


export default function approchPage() {
  return (
    <main className="min-h-screen bg-[#02040a] text-slate-100 pt-0 pb-24 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
      <ApproachHeader />
      <ApproachPillar />
      <HowWeWork/>
      
    </main>
  );
}