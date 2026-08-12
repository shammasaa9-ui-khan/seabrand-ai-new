/* eslint-disable @next/next/no-img-element */

'use client';

import React from "react";
import { frameworkEcosystem } from '@/src/data/Ecosystemdata';

export interface FrameworkCard {
  id: string;
  title: string;
  subtitle: string;
  badgeBg?: string;
  responsibilities: string[];
  footerText: string;
}

export default function Framework() {
  const renderTitle = (title: string) => {
    const parts = title.split(' Curator');
    return (
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-[0.06em] sm:tracking-[0.08em] md:tracking-tight leading-tight m-0">
          {parts[0]}
          {parts.length > 1 && (
            <span className="block mt-1">
              Curator
            </span>
          )}
        </h2>
      </div>
    );
  };

  return (
    <main className="tech-background py-20 px-4 md:px-8 min-h-screen flex flex-col items-center text-slate-100 relative overflow-hidden">
      
      {/* 1. Exact Diagonal Electric Blue Light Glow Beam */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 rotate-[-18deg]"
        style={{
          background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(10, 85, 230, 0.75) 0%, rgba(5, 45, 140, 0.35) 45%, rgba(2, 6, 18, 0.95) 80%, rgba(1, 3, 10, 1) 100%)'
        }}
      />

      {/* 2. Vignette Shadow Edge Fade */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(1, 3, 10, 0.8) 85%, rgba(1, 2, 7, 1) 100%)'
        }}
      />

      {/* Header Section */}
      <div className="text-center max-w-3xl mb-16 mx-auto z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-[0.08em] sm:tracking-[0.1em] lg:tracking-normal flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-white">
          <span>The Brain</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff] font-light">→</span>
          <span>Face</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff] font-light">→</span>
          <span>Engine Framework</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed font-light">
          The SEABRAND AI Ecosystem is built around three connected curation roles
          that work together to deliver a complete branding experience.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full z-10">
        {frameworkEcosystem.cards.map((card: FrameworkCard) => {
          return (
            <div
              key={card.id}
              className="pillar-card rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 text-left relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-100 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div>
                  {renderTitle(card.title)}
                  <p className="text-sm font-medium mt-3 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff] text-center m-0">
                    {card.subtitle}
                  </p>

                  <div className="mb-6 border-t border-white/5 pt-6">
                    <h3 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 p-0">
                      Responsible for:
                    </h3>
                    <ul className="space-y-3 p-0 m-0">
                      {card.responsibilities.map((item: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 text-zinc-300 text-sm font-medium p-0 m-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6748FE] shrink-0" />
                          <span className="p-0 m-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-zinc-300 italic font-light leading-relaxed m-0 border-t border-white/5 pt-4">
                    {card.footerText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Section */}
      <div className="w-full max-w-5xl mt-16 mx-auto z-10">
        <div 
          className="pillar-card rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-100 pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
              {frameworkEcosystem.header.title}
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8 w-full">
              {frameworkEcosystem.header.summaryList.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-zinc-300 font-semibold text-sm md:text-base text-center">
                    {item}
                  </span>
                  {index < frameworkEcosystem.header.summaryList.length - 1 && (
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#6748FE] shrink-0"></span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed">
              {frameworkEcosystem.header.description}
            </p>
          </div>
        </div>
      </div>

      {/* CSS Styles for Background and Cards */}
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          background-color: #01030d;
          color: #e0e0e0;
        }

        .tech-background {
          min-height: 100vh;
          background-color: #020612;
          position: relative;
          overflow-x: hidden;
        }

        .pillar-card {
          background: linear-gradient(135deg, rgba(10, 25, 55, 0.75) 0%, rgba(3, 8, 22, 0.88) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .pillar-card:hover {
          background: linear-gradient(135deg, rgba(15, 35, 75, 0.85) 0%, rgba(5, 12, 30, 0.95) 100%);
          border-color: rgba(103, 72, 254, 0.3);
        }
      `}</style>
    </main>
  );
}