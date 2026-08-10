// 

"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import ServicesCTA from "./ServiceCTA";
import ServicesModal from "./ServicesModal";
import { servicesData } from "@/src/data/services.data";
import { Target } from "lucide-react";
import LuxuryMarbleBackground, {
  GLASS_CARD_STYLE,
} from "@/src/components/shared/LuxuryMarbleBackground";

interface ProcessStep {
  step: string;
  name: string;
  detail?: string;
  services?: string[];
  icon?: React.ComponentType<unknown> | React.ReactNode;
}

interface ServicePurpose {
  title?: string;
  text?: string;
}

interface ServiceItem {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  purpose?: ServicePurpose;
  process?: ProcessStep[];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function CustomGlowingIcon({ icon }: { icon?: React.ComponentType<unknown> | React.ReactNode }) {
  if (!icon) return null;
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 border border-white/20 blur-[1px] shadow-[0_0_30px_rgba(96,165,250,0.5)]" />
      <div className="relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white [&>svg]:w-5 [&>svg]:h-5">
        {typeof icon === "function" ? React.createElement(icon as React.ComponentType) : icon}
      </div>
    </div>
  );
}

export default function ServiceDetailClient({ serviceId }: { serviceId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { services = [] } = (servicesData as { services?: ServiceItem[] }) || {};
  const service = services.find((item) => String(item.id) === String(serviceId));

  const handleModalOpen = () => {
    setIsModalOpen(true);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") document.body.style.overflow = "unset";
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050e20] text-white">
        <p>Service not found</p>
      </div>
    );
  }

  let serviceSubtitle = service.subtitle;
  if (!serviceSubtitle) {
    if (serviceId === "1") serviceSubtitle = "For Existing Businesses Only";
    if (serviceId === "3") serviceSubtitle = "For Startups, Innovators & Early-Stage Founders";
  }

  const fullTitle = service.title || "AI Strategic Branding";
  const hasAiStrategic = fullTitle.toLowerCase().includes("ai strategic");
  const subTitleText = hasAiStrategic
    ? fullTitle.substring(fullTitle.toLowerCase().indexOf("ai strategic") + "ai strategic".length).trim()
    : fullTitle;

  return (
    <div className="relative min-h-screen bg-[#050e20]">
      {/* BACKGROUND: Fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <LuxuryMarbleBackground />
      </div>

      {/* CONTENT: Relative and on top */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-20">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-14">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider md:tracking-normal mb-6 max-w-4xl leading-tight">
            {hasAiStrategic && <span className="block text-[#6748FE] mb-2">AI Strategic</span>}
            <span className="block text-white">{subTitleText}</span>
          </h1>

          <div className="flex items-center justify-center gap-4 w-full max-w-3xl mb-4 md:mb-10">
            <div className="hidden sm:block flex-1 h-[1px] bg-white/20" />
            <span
              className="px-6 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest font-semibold text-center text-white"
              style={{ ...GLASS_CARD_STYLE, boxShadow: "0 0 25px rgba(103,72,254,0.4)" }}
            >
              {serviceSubtitle}
            </span>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/20" />
          </div>

          {/* PURPOSE SECTION: Mobile (Text only, reduced gap) & Desktop (Original Glass Card) */}
          <div className="w-full max-w-4xl mx-auto mb-4 md:mb-16">
            {/* Mobile View: Text only, minimized bottom margin */}
            <div className="text-left px-2 md:hidden">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-bold text-[#6748FE] mr-1">{service.purpose?.title || "Purpose"}:</span>
                {service.purpose?.text || service.description}
              </p>
            </div>

            {/* Desktop View: Retains the original Glass Card layout */}
            <div className="hidden md:block relative overflow-hidden w-full p-7 rounded-[2rem] group" style={GLASS_CARD_STYLE}>
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }} />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="shrink-0 p-3 rounded-full bg-[#6748FE] backdrop-blur-xl border border-white/20 text-white shadow-[0_0_25px_rgba(103,72,254,0.5)]">
                  <Target className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="text-base text-slate-300 leading-relaxed text-left w-full">
                  <span className="font-bold text-[#6748FE] mr-2">{service.purpose?.title || "Purpose"}:</span>
                  {service.purpose?.text || service.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {service.process?.map((proc: ProcessStep, index: number) => {
            const stepKey = proc.step ? `${proc.step}-${index}` : `step-${index}`;
            const isLastOdd = service.process && service.process.length % 2 !== 0 && index === service.process.length - 1;

            return (
              <motion.div
                key={stepKey}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`relative overflow-hidden flex flex-col rounded-[2rem] transition-all duration-500 group ${isLastOdd ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""}`}
                style={GLASS_CARD_STYLE}
              >
                <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }} />
                
                <div className="relative z-10 flex flex-col flex-1 p-6 md:p-7 pt-9">
                  <div className="flex flex-col items-center text-center mb-4">
                    <CustomGlowingIcon icon={proc.icon} />
                    <h3 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: "#6748FE" }}>{proc.name}</h3>
                    {proc.detail && (
                      <p className="mt-2 text-base leading-relaxed w-full text-left text-white">
                        <span style={{ color: "#6748FE" }} className="font-bold mr-1">Objective:</span>
                        {proc.detail}
                      </p>
                    )}
                  </div>
                  <div className="w-full h-px bg-white/10 mb-4" />
                  {proc.services && (
                    <div className="flex-1">
                      <span className="block mb-2.5 text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "#6748FE" }}>Services</span>
                      <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                        {proc.services.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-white">
                            <span className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-0.5">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 1.5 L8 5 L2 8.5 Z" fill="#6748FE" /></svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ServicesCTA onOpenModal={handleModalOpen} />
      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}