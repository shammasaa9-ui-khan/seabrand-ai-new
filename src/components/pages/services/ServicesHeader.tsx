"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  onOpenModal: () => void;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicesHeader({ onOpenModal }: HeaderProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16" 
      // 👆 Ivide ninnu mb-20, md:mb-32, pt-10 full aayi eduthu maatti.
    >
      {/* Empty or hidden content */}
    </motion.section>
  );
}