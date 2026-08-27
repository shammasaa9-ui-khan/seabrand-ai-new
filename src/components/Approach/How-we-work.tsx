/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import { approachData } from "@/src/data/approach";

export default function PremiumHowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side */}
          <div className="lg:col-span-6 flex flex-col sticky top-24 pt-4 lg:pt-8 transition-all duration-300">
            {/* Header */}
            <div className="text-left mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] md:tracking-tight text-slate-900">
                {approachData.workProcessTitle}
              </h2>
            </div>

            {/* Preview Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] flex items-center justify-center group shadow-sm">
              <img
                src="/images/how-work.png"
                alt="How we work process preview"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {approachData.steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  onClick={() => handleToggle(index)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-[#6748FE] shadow-lg shadow-[#6748FE]/10"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Attractive Number */}
                      <span
                        className={`relative w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm tracking-tight shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-[#6748FE] text-white shadow-lg shadow-[#6748FE]/30 scale-105"
                            : "bg-white text-[#6748FE] border border-[#6748FE]/20 shadow-sm"
                        }`}
                      >
                        {/* Inner Ring */}
                        <span
                          className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                            isActive
                              ? "border-white/30"
                              : "border-[#6748FE]/10"
                          }`}
                        />

                        {/* Number */}
                        <span className="relative z-10">
                          {String(step.number).padStart(2, "0")}
                        </span>
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-base md:text-lg font-bold tracking-[-0.015em] md:tracking-tight transition-colors duration-300 truncate ${
                          isActive
                            ? "text-[#6748FE]"
                            : "text-slate-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "rotate-180 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] text-white shadow-md shadow-[#6748FE]/20"
                          : "text-slate-400"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-3.5 pt-3.5 border-t border-[#6748FE]/15"
                        : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-700 text-sm md:text-base tracking-normal leading-relaxed mb-3">
                        {step.description}
                      </p>

                      <ul className="text-xs md:text-sm text-slate-600 tracking-[-0.01em] md:tracking-normal space-y-1.5">
                        <li>
                          • Brief description of how to{" "}
                          {step.title.toLowerCase()}.
                        </li>

                        <li>
                          • Image or video of the{" "}
                          {step.title.toLowerCase()} page.
                        </li>

                        <li>
                          • Tooltips explaining each field in the form.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}