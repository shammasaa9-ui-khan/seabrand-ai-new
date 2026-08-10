/* eslint-disable @next/next/no-img-element */

'use client';

import { industriesWeServeData } from "@/src/data/industriesWeServe.data";
import React from "react";

export default function IndustriesWeServe() {
  return (
    <section className="tech-background relative py-20 px-6 sm:px-8 lg:px-12 text-slate-100 font-sans overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-950/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          {industriesWeServeData.heading}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-light">
          {industriesWeServeData.description}
        </p>

        {/* Outer Box Container with pure black background */}
        <div className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden border border-gray-800/60">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent opacity-100 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-indigo-400">
              {industriesWeServeData.subheading}
            </h3>

            {/* 3-Column Grid Layout with Clean Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {industriesWeServeData.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {/* Trigon (triangle) Icon */}
                  <span className="text-indigo-400 text-xs shrink-0">▲</span>
                  <span className="text-slate-200 font-medium text-sm md:text-base">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* CSS Styles for Background */}
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #01030d;
          color: #e0e0e0;
        }

        .tech-background {
          background-color: #01030d;
          background-image: 
            radial-gradient(circle at 75% 20%, rgba(0, 130, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(0, 90, 220, 0.35) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(1, 3, 13, 0.85) 0%, #01030d 100%);
          background-attachment: fixed;
          position: relative;
          overflow-x: hidden;
        }

        .tech-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg, 
            rgba(1, 3, 13, 0.6) 0%, 
            rgba(1, 3, 13, 0.35) 50%, 
            rgba(1, 3, 13, 0.75) 100%
          );
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </section>
  );
}