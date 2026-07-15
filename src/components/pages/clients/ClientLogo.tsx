


"use client";

import { fadeUp } from "@/src/data/contact.data";
import { motion } from "framer-motion";
import Image from "next/image";

interface ClientProps {
  client: {
    id: string | number;
    name?: string; 
    image?: string;
    svg?: React.ReactNode;
  };
}


export default function ClientLogo({ client }: ClientProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col items-center justify-center p-8 md:p-12 bg-white hover:bg-zinc-50 transition-colors duration-500 w-full h-full aspect-square md:aspect-[4/3] cursor-default"
    >
      <div className="flex flex-col items-center gap-5">

        {/* Show Image Logo */}
        {client.image ? (
          <Image
            src={client.image}
            alt={client.name || "Client Logo"} 
            width={160}
            height={160}
            className="w-28 h-28 md:w-40 md:h-40 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          /* Show SVG Logo */
          <svg
            className="w-20 h-20 md:w-24 md:h-24 text-zinc-300 group-hover:text-black transition-all duration-500 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {client.svg}
          </svg>
        )}

   
        {client.name && (
          <span
            className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
          >
            {client.name}
          </span>
        )}

      </div>
    </motion.div>
  );
}