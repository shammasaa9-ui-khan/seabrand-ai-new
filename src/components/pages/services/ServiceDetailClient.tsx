"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import ServicesCTA from "./ServiceCTA";
import ServicesModal from "./ServicesModal";
import { servicesData } from "@/src/data/services.data";
import { Target } from "lucide-react"; 

// FIX: Explicitly defined transition easing structure to stop Type matching errors
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Safe predefined string transition
    },
  },
};

// Fixed Interfaces to match exactly with data types
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

function CustomGlowingIcon({ icon }: { icon?: React.ComponentType<unknown> | React.ReactNode }) {
  if (!icon) return null;

  return (
    <div className="relative flex items-center justify-center w-9 h-9 md:w-14 md:h-14 select-none shrink-0">
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl scale-125 pointer-events-none" />
      <div className="absolute inset-0 rounded-full bg-[#0A1F44]/60 border border-blue-500/20 scale-105" />
      <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/20 scale-115 opacity-20 animate-[spin_180s_linear_infinite]" />
      
      <div className="relative z-10 p-2 md:p-3.5 bg-gradient-to-b from-[#2563EB]/80 to-[#0A1F44]/90 text-white rounded-full shadow-[0_4px_24px_rgba(37,99,235,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-blue-400/20 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-6 md:[&>svg]:h-6">
        {typeof icon === "function" ? React.createElement(icon as React.ComponentType) : icon}
      </div>
    </div>
  );
}

export default function ServiceDetailClient({ serviceId }: { serviceId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = servicesData as unknown as { services: ServiceItem[] };
  const service = data?.services?.find((s) => s.id === serviceId);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false)
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm opacity-50">Service not found.</p>
      </div>
    );
  }

  const serviceSubtitle = service.subtitle || "For Existing Businesses Only";
  const servicePurpose = service.purpose;

  return (
    <div className="relative bg-[#000000] text-white selection:bg-blue-600 selection:text-white min-h-screen overflow-hidden">
      
      <motion.div 
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: "400% 400%" }}
        className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#051124] to-[#0a1e3d] opacity-90 pointer-events-none z-0" 
      />

      <div className="absolute top-[-30%] left-[-15%] w-[85%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(10,31,68,0.35)_0%,rgba(5,16,31,0.05)_70%,transparent_100%)] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[65%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(7,27,52,0.25)_0%,transparent_70%)] blur-[180px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#000000] via-[#000000]/40 to-transparent pointer-events-none z-0" />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-32 pb-16 md:pt-44 md:pb-32">
        
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 whitespace-pre-line bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#CBD5E1]">
            {service.title || "AI Strategic Business Branding"}
          </h1> 

          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 w-full max-w-xl justify-center">
            <div className="flex items-center flex-1">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563eb] shrink-0" />
              <div className="h-[1px] bg-gradient-to-r from-blue-500/20 to-transparent w-full" />
            </div>
            <span className="text-[10px] md:text-sm font-semibold text-[#60A5FA] tracking-widest uppercase px-3 py-1 md:px-4 md:py-1.5 bg-blue-950/20 border border-blue-500/15 rounded-full backdrop-blur-md whitespace-nowrap">
              {serviceSubtitle}
            </span>
            <div className="flex items-center flex-1">
              <div className="h-[1px] bg-gradient-to-l from-blue-500/20 to-transparent w-full" />
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563eb] shrink-0" />
            </div>
          </div>

          <div className="bg-[#08142D]/30 backdrop-blur-2xl border border-blue-500/18 rounded-xl md:rounded-2xl p-4 md:p-8 max-w-4xl shadow-[0_25px_80px_rgba(0,0,0,0.45),inset_0_1px_0px_rgba(255,255,255,0.05)] text-left w-full transition-all duration-300 hover:border-blue-500/25 hover:bg-[#08142D]/35">
            <div className="flex items-start gap-3 md:gap-6">
              <div className="text-[#60A5FA] shrink-0 p-2 md:p-2.5 bg-[#05101F]/60 border border-blue-500/15 rounded-lg md:rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.08)]">
                <Target className="w-6 h-6 md:w-11 md:h-11 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-0.5 md:pt-1">
                <p className="text-xs md:text-[16px] text-[#CBD5E1] leading-relaxed font-normal">
                  <span className="font-bold text-white tracking-wide text-sm md:text-[17px] mr-1.5 block sm:inline-block mb-0.5 sm:mb-0">
                    {servicePurpose?.title || "Purpose"}:
                  </span>{" "}
                  {servicePurpose?.text || service.description || "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {service.process?.map((proc: ProcessStep, index: number) => {
            const edgeGradients = [
              "from-blue-500/8 via-transparent to-transparent",
              "from-indigo-500/8 via-transparent to-transparent",
              "from-cyan-500/8 via-transparent to-transparent",
              "from-blue-600/8 via-transparent to-transparent",
              "from-slate-500/8 via-transparent to-transparent"
            ];
            const currentGradient = edgeGradients[index % edgeGradients.length];
            const stepKey = proc.step ? `${proc.step}-${index}` : `step-${index}`;

            return (
              <motion.div
                key={stepKey}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative p-3.5 md:p-7 rounded-xl md:rounded-[1.8rem] bg-[#08142D]/30 backdrop-blur-2xl text-white border border-blue-500/18 flex flex-col justify-between shadow-[0_25px_80px_rgba(0,0,0,0.45),inset_0_1px_0px_rgba(255,255,255,0.03)] hover:shadow-[0_35px_90px_rgba(37,99,235,0.12)] hover:border-blue-500/30 hover:bg-[#08142D]/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden min-h-[140px] md:min-h-[300px] group"
              >
                <div className={`absolute top-0 left-0 w-64 h-64 bg-gradient-to-br ${currentGradient} opacity-40 blur-2xl rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-60`} />
                <div className="absolute bottom-0 right-0 w-24 h-24 md:w-28 md:h-28 opacity-[0.01] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px] rounded-br-xl md:rounded-br-[1.8rem] group-hover:opacity-[0.02] transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-20 md:w-12 md:h-24 bg-blue-500/3 rounded-tl-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 md:gap-4 mb-2.5 md:mb-5">
                    <CustomGlowingIcon icon={proc.icon} />
                    <div className="flex-1">
                      <h3 className="text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                        {proc.name}
                      </h3>
                    </div>
                  </div>

                  {proc.detail && (
                    <p className="text-xs md:text-[15px] text-[#CBD5E1] leading-relaxed mb-3 md:mb-5 font-normal pr-1">
                      <span className="font-semibold text-[#60A5FA] text-xs md:text-[15px]">Objective: </span>
                      {proc.detail}
                    </p>
                  )}
                </div>

                {proc.services && proc.services.length > 0 && (
                  <div className="mt-auto relative z-10 pt-2.5 md:pt-4 border-t border-blue-500/10">
                    <span className="text-[9px] md:text-[12px] font-bold text-[#2563EB] block mb-1 md:mb-3 uppercase tracking-widest">
                      Services
                    </span>
                    <ul className="space-y-1 md:space-y-2">
                      {proc.services.map((item: string, idx: number) => (
                        <li
                          key={`${stepKey}-service-${idx}`}
                          className="text-[11px] md:text-[14px] text-[#CBD5E1] hover:text-white transition-colors flex items-start gap-2 font-normal"
                        >
                          <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563eb] shrink-0 mt-1.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <ServicesCTA onOpenModal={handleModalOpen} />
      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}