// 

"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import FooterWatermark from "./FooterWatermark";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden pt-12 pb-0 md:pt-32 md:min-h-[650px] flex flex-col justify-between font-bahamas-light">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6748FE] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl flex flex-col gap-10 md:gap-16">
        
        {/* Grid Container layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-0 md:mb-12 items-start">
          
          {/* 1. Brand Logo Section */}
          {/* Added flex-col to stack the mobile line above the logo */}
          <div className="lg:col-span-3 flex flex-col justify-start w-full">
            {/* Horizontal line visible ONLY on mobile screens */}
            <div className="w-full h-[1px] bg-zinc-800 mb-8 lg:hidden" />
            
            <FooterBrand />
          </div>

          {/* 2. Links Grid on the Right (Takes remaining 9 columns) */}
          <div className="lg:col-span-9">
            <FooterLinks />
          </div>

        </div>

        {/* Copyright & Policy Links */}
        <FooterBottom />
      </div>

      {/* Huge SEABRAND Watermark Text at the absolute bottom */}
      <FooterWatermark />
    </footer>
  );
}