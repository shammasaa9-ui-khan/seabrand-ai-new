"use client";

import { useState } from "react";
import LuxuryMarbleBackground from "@/src/components/shared/LuxuryMarbleBackground";
import ServicesShowcase from "@/src/components/pages/services/ServiceShowcase";
import ServicesCTA from "@/src/components/pages/services/ServiceCTA";
import ServicesModal from "@/src/components/pages/services/ServicesModal";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-gradient-to-br from-[#020617] via-[#071A3D] to-[#020617] selection:bg-[#6748FE] selection:text-white">
      <LuxuryMarbleBackground />

      <div className="relative z-10 pt-36 md:pt-44">
        <ServicesShowcase />
        <ServicesCTA onOpenModal={handleModalOpen} />
      </div>

      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </main>
  );
}
