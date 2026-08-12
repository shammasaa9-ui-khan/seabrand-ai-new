// "use client";

// import { useState } from "react";
// import BlueBackground from "@/src/components/shared/BlueBackground";
// import ServicesShowcase from "@/src/components/pages/services/ServiceShowcase";
// import ServicesCTA from "@/src/components/pages/services/ServiceCTA";
// import ServicesModal from "@/src/components/pages/services/ServicesModal";

// export default function ServicesPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//     if (typeof window !== "undefined") document.body.style.overflow = "hidden";
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     if (typeof window !== "undefined") document.body.style.overflow = "unset";
//   };

//   return (
//     <main className="relative min-h-screen text-white bg-[#02040a] selection:bg-[#6748FE] selection:text-white">
      
//       <BlueBackground />
      
//       <div className="relative z-10 pt-36 md:pt-44">
//         <ServicesShowcase />
//         <ServicesCTA onOpenModal={handleModalOpen} />
//       </div>

//       <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import BlueBackground from "@/src/components/shared/BlueBackground";
import ServicesShowcase from "@/src/components/pages/services/ServiceShowcase";
import ServicesCTA from "@/src/components/pages/services/ServiceCTA";
import ServicesModal from "@/src/components/pages/services/ServicesModal";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") document.body.style.overflow = "unset";
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#02040a] text-slate-100 pt-0 pb-0 selection:bg-[#6748FE] selection:text-white w-full">
      
      <BlueBackground />
      
      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full flex flex-col gap-0 pt-36 md:pt-44">
        <ServicesShowcase />
        <ServicesCTA onOpenModal={handleModalOpen} />
      </div>

      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </main>
  );
}