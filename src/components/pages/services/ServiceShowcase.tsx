"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/src/data/services.data";

export default function ServicesShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-32">
      <div className="space-y-12">
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
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-zinc-200 items-center group"
          >
            {/* Service Number */}
            <div className="md:col-span-2">
              <span className="text-5xl md:text-6xl font-thin text-zinc-300 group-hover:text-[#6748FE] transition-colors duration-300">
                {service.number}
              </span>
            </div>

            {/* Service Content */}
            <div className="md:col-span-6">
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Button */}
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-zinc-300 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
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