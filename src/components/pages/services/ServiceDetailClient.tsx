// 

"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import ServicesCTA from "./ServiceCTA";
import ServicesModal from "./ServicesModal";
import { servicesData } from "@/src/data/services.data";
import { Target } from "lucide-react"; 

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 select-none shrink-0">
      <div className="absolute inset-0 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]" />
      <div className="relative z-10 p-3 bg-gradient-to-b from-[#8b5cf6] to-[#4c1d95] text-white rounded-full border border-[#a78bfa]/40 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6">
        {typeof icon === "function" ? React.createElement(icon as React.ComponentType) : icon}
      </div>
    </div>
  );
}

export default function ServiceDetailClient({ serviceId }: { serviceId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = servicesData as unknown as { services: ServiceItem[] };
  const service = data?.services?.find((s) => s.id === String(serviceId));

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
      <div className="min-h-screen text-white flex items-center justify-center bg-[#060112]">
        <p className="text-sm opacity-50">Service not found.</p>
      </div>
    );
  }

  let serviceSubtitle = service.subtitle;
  if (!serviceSubtitle) {
    if (String(serviceId) === "1") {
      serviceSubtitle = "For Existing Businesses Only";
    } else if (String(serviceId) === "3") {
      serviceSubtitle = "For Startups, Innovators & Early-Stage Founders";
    } else {
      serviceSubtitle = "";
    }
  }

  const servicePurpose = service.purpose;

  return (
    <div className="relative text-white bg-[#04010a] selection:bg-[#8b5cf6] selection:text-white min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.img 
          src="/bg-luxury.jpg" 
          alt="Luxury Curved Purple Space" 
          className="absolute w-[110vw] h-[110vh] object-cover max-w-none min-w-full min-h-full opacity-40 mix-blend-screen"
          style={{ top: "-5%", left: "-5%" }}
          animate={{ x: [0, 4, -4, 0], y: [0, -4, 4, 0], scale: [1, 1.01, 0.99, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04010a]/60 via-[#04010a]/90 to-[#04010a]" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl leading-[1.15] bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#CBD5E1] antialiased">
            {service.title || "AI Strategic Branding"}
          </h1> 

          <div className="flex items-center gap-4 mb-8 w-full max-w-2xl justify-center">
            <div className="flex items-center flex-1"><div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shrink-0" /><div className="h-[1.5px] bg-[#8b5cf6]/50 w-full" /></div>
            <span className="text-xs md:text-sm font-semibold text-[#8b5cf6] tracking-widest uppercase px-6 py-2 bg-[#090414] border-2 border-[#8b5cf6]/40 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.2)] whitespace-nowrap">
              {serviceSubtitle}
            </span>
            <div className="flex items-center flex-1"><div className="h-[1.5px] bg-[#8b5cf6]/50 w-full" /><div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shrink-0" /></div>
          </div>

          <div className="border border-[#8b5cf6]/25 bg-[#090414]/90 backdrop-blur-md rounded-2xl p-5 md:p-6 max-w-4xl text-left w-full shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="text-[#8b5cf6] shrink-0 p-3 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full">
                <Target className="w-6 h-6 stroke-[1.5]" />
              </div>
              <p className="text-sm md:text-base text-[#cbd5e1] leading-relaxed font-normal">
                <span className="font-bold text-white tracking-wide mr-2 block sm:inline-block mb-1">{servicePurpose?.title || "Purpose"}:</span>
                {servicePurpose?.text || service.description}
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS GRID - Desktop-ൽ മാത്രം മാറ്റങ്ങൾ വരുത്തി */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {service.process?.map((proc: ProcessStep, index: number) => {
            const stepKey = proc.step ? `${proc.step}-${index}` : `step-${index}`;
            const isLastOdd = service.process && service.process.length % 2 !== 0 && index === service.process.length - 1;

            return (
              <motion.div
                key={stepKey}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                className={`relative p-4 md:p-6 lg:p-8 rounded-2xl text-left border border-[#8b5cf6]/20 bg-[#060212]/95 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-[#8b5cf6]/60 group ${
                  isLastOdd ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
                }`}
              >
                <div className="w-full flex-1 flex flex-col z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <CustomGlowingIcon icon={proc.icon} />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                      {proc.name}
                    </h3>
                  </div>

                  {proc.detail && (
                    <p className="text-xs md:text-sm lg:text-base text-[#94a3b8] leading-relaxed mb-6 font-normal">
                      <span className="font-semibold text-[#8b5cf6]">Objective: </span>
                      {proc.detail}
                    </p>
                  )}

                  {proc.services && (
                    <div className="mt-auto pt-5 border-t border-[#8b5cf6]/10 w-full">
                      <span className="text-[10px] md:text-xs font-bold text-[#8b5cf6] block mb-3 uppercase tracking-widest">Services</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {proc.services.map((item: string, idx: number) => (
                          <li key={idx} className="text-xs md:text-sm lg:text-base text-[#cbd5e1] flex items-start gap-2">
                            <span className="text-[#8b5cf6] font-bold pt-0.5">•</span>
                            <span className="leading-tight">{item}</span>
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
      </section>

      <div className="pb-16">
        <ServicesCTA onOpenModal={handleModalOpen} />
      </div>

      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}