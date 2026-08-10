/* eslint-disable @next/next/no-img-element */

'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { approachData } from "@/src/data/approach";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function ApproachPillar() {
  // Explicitly mapping or re-ordering pillars based on: 
  // 1: Strategy, 2: AI Integration, 3: Curation
  const targetOrder = ["Strategy", "AI Integration", "Curation"];
  
  const sortedPillars = [...approachData.pillars].sort((a, b) => {
    const getIndex = (title: string) => {
      const foundIdx = targetOrder.findIndex(t => title.toLowerCase().includes(t.toLowerCase()));
      return foundIdx !== -1 ? foundIdx : 99;
    };
    return getIndex(a.title) - getIndex(b.title);
  });

  return (
    <div className="tech-background">
      <div className="content-container">

        {/* Section Header */}
        <header className="header">
          <h2 className="main-title">{approachData.title}</h2>
        </header>

        {/* Approach Pillar Section */}
        <section className="approach-section">
          <div className="grid-container">
            {sortedPillars.map((item, index) => {
              // Enforce "01", "02", "03" sequence numbers corresponding to the new position
              const customNumber = `0${index + 1}`;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="pillar-card group"
                >
                  <div className="card-inner">
                    {/* Number */}
                    <div className="card-header">
                      <span className="card-number">
                        {customNumber}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="card-titles">
                      <h3 className="card-title">
                        {item.title}
                      </h3>
                      <p className="card-tagline">
                        &ldquo;{item.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Description */}
                    <p className="card-description">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>

      {/* CSS Styles with card numbers set to white */}
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #01030d;
          color: #e0e0e0;
        }

        .tech-background {
          min-height: 100vh;
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

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .main-title {
          font-size: 3rem;
          margin-bottom: 0;
          color: #ffffff;
          text-shadow: none;
          font-weight: 900;
          letter-spacing: -0.025em;
        }

        .approach-section {
          width: 100%;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(10, 25, 55, 0.95) 0%, rgba(3, 8, 22, 0.98) 100%);
          border: none;
          padding: 2.5rem 2rem;
          border-radius: 24px;
          backdrop-filter: blur(12px);
          box-shadow: none;
          transition: all 0.4s ease;
          height: 100%;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          background: linear-gradient(135deg, rgba(15, 35, 75, 0.95) 0%, rgba(5, 12, 30, 0.98) 100%);
          box-shadow: none;
          border: none;
        }

        .card-inner {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .card-number {
          font-size: 1.85rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.05em;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .card-number {
          color: #ffffff;
        }

        .card-titles {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.025em;
          margin: 0;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .card-title {
          color: #e0f2fe;
        }

        .card-tagline {
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          font-style: italic;
          line-height: 1.5;
          margin: 0;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #94a3b8;
          margin: 0;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 768px) {
          .main-title { font-size: 2.5rem; }
          .content-container { padding: 2rem 1rem; }
        }
      `}</style>
    </div>
  );
}