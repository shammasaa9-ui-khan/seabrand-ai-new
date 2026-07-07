"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/src/data/services.data";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {servicesData.services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative h-auto md:h-[400px] w-full z-0"
        >
          {/* Card Wrapper */}
          <div className="group relative md:absolute top-0 left-0 w-full bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-100 flex flex-col overflow-hidden transition-all duration-500 ease-[0.25,1,0.5,1] h-auto md:h-[400px] hover:md:h-[500px] hover:md:-top-4 hover:shadow-[0_20px_50px_rgba(103,72,254,0.1)] hover:border-[#6748FE]/20 z-10 hover:z-50">
            
            {/* Kept padding balanced but reduced internal gap between items */}
            <div className="p-6 md:p-8 flex flex-col h-full justify-between gap-4 md:gap-0">
              
              {/* Service Number */}
              <div className="text-[4.5rem] lg:text-[5rem] font-light text-zinc-200 leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#6748FE]/20 shrink-0">
                {service.number}
              </div>

              {/* Service Content Container */}
              <div className="flex flex-col mt-auto">
                <div className="w-12 h-12 mb-3 md:mb-4 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 transition-colors duration-500 group-hover:bg-[#6748FE]/10 group-hover:text-[#6748FE]">
                  {service.icon}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-black tracking-tight leading-[1.2] whitespace-pre-line">
                  {service.title}
                </h3>

                {/* CSS Grid-Row Smooth Expand Mechanism */}
                <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:md:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[0.25,1,0.5,1]">
                  <div className="overflow-hidden opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 delay-100 flex flex-col">
                    {/* Tighter margins here to save space and reduce internal empty gaps */}
                    <p className="text-zinc-500 text-sm leading-relaxed mt-2 mb-3">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center gap-2 text-sm font-bold text-black group/link w-fit hover:text-[#6748FE] transition-colors mt-auto"
                    >
                      Explore Service
                      <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}