"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  id: string | number;
  slug: string;
  image: string;
  title: string;
  categories: string;
  client: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <Link href={`/works/${project.slug}`} className="block shrink-0 py-3">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="
          group relative overflow-hidden rounded-3xl border border-white/20 bg-[#0a0a0a]

          w-[80vw] sm:w-[65vw] md:w-[60vw] lg:w-[45vw] xl:w-[400px]

          /* 🔥 reduced MOBILE CARD HEIGHT */
          h-[35vh] sm:h-[42vh] md:h-[55vh] lg:h-[55vh] xl:h-[500px]

          min-h-[240px] max-h-[500px]

          cursor-pointer block shadow-lg
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="h-[65%] sm:h-full transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-5 md:p-12 flex flex-col justify-end">
          
          {/* Category */}
          <div className="mb-4 flex">
            <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-medium text-white uppercase tracking-widest">
              {project.categories}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            
            {/* Title */}
            <div className="transform transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:-translate-y-1">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm md:text-lg max-w-md opacity-0 -translate-y-3 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:opacity-100 group-hover:translate-y-0 hidden sm:block">
                {project.client}
              </p>
            </div>

            {/* Arrow */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0 opacity-0 scale-50 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:opacity-100 group-hover:scale-100">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[0.25,1,0.5,1] delay-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}