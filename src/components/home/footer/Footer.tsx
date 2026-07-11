// 

"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import FooterWatermark from "./FooterWatermark";

export default function Footer() {
  return (
  
    <footer className="bg-[#050505] text-white relative overflow-hidden pt-12 pb-4 md:pt-20 md:min-h-[480px] flex flex-col justify-between font-bahamas-light">
      
      {/* Background Gradient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6748FE] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl flex flex-col gap-8 md:gap-10">
        
        {/* Grid Container layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          <div className="lg:col-span-3 flex flex-col justify-start w-full">
            <div className="w-full h-[1px] bg-zinc-800 mb-8 lg:hidden" />
            <FooterBrand />
          </div>

          <div className="lg:col-span-9">
            <FooterLinks />
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <FooterBottom />
      </div>

      {/* Huge SEABRAND Watermark Text */}
      <FooterWatermark />
    </footer>
  );
}