// 
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/src/data/services.data";

export default function ServicesShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-32">
      <div className="space-y-4 md:space-y-12">
        {servicesData.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-16 border-t border-zinc-200 items-center group"
          >
            {/* Service Number */}
            <div className="md:col-span-2">
              <span className="text-5xl md:text-6xl font-thin text-zinc-300 group-hover:text-[#6748FE] transition-colors duration-300">
                {service.number}
              </span>
            </div>

            {/* Service Content */}
            <div className="md:col-span-6">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>

            {/* Button */}
            <div className="md:col-span-4 flex md:justify-end pt-2 md:pt-0">
              <Link
                href={`/services/${service.id}`}
                // {/* 
                //   - Changed px-8 py-3 to px-5 py-2 for a smaller, compact size.
                //   - Removed w-full so it fits the content tightly on mobile screens.
                //   - Added text-sm for clean typography matching the reduced size.
                // */}
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg border text-sm font-medium transition-all duration-300 text-center bg-black text-white border-black md:bg-transparent md:text-zinc-900 md:border-zinc-300 md:hover:bg-black md:hover:text-white md:hover:border-black"
              >
                Explore Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}