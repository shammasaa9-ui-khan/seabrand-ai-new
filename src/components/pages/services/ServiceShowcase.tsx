// 

"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/src/data/services.data";
import { GLASS_CARD_STYLE } from "@/src/components/shared/LuxuryMarbleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
      <div className="grid grid-cols-1 gap-6">
        {servicesData.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-[2rem] group transition-all duration-500"
            style={GLASS_CARD_STYLE}
          >
            <div
              className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(103,72,254,0.55)" }}
            />


            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8 items-center">
              <div className="md:col-span-2 flex md:justify-center">
                <span className="text-5xl md:text-6xl font-thin text-[#6748FE]/60 group-hover:text-[#6748FE] transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end pt-2 md:pt-0">
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-white border border-white/20 hover:border-[#6748FE]/50 hover:shadow-[0_0_30px_rgba(103,72,254,0.4)] w-full md:w-auto"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(103,72,254,0.25) 0%, rgba(8,22,49,0.8) 100%)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}