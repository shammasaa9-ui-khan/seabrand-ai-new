// import { ArrowRight } from "lucide-react";

// interface ServiceCTAProps {
//   onOpenModal: () => void;
// }

// export default function ServiceCTA({ onOpenModal }: ServiceCTAProps) {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 relative z-10">
//       <div
//         className="group relative rounded-[1.8rem] md:rounded-[2.5rem] p-6 sm:p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 transition-all duration-500"
//         style={{
//           background: "#000000",
//           backdropFilter: "blur(24px)",
//           WebkitBackdropFilter: "blur(24px)",
//           border: "1px solid rgba(103,72,254,0.30)",
//           boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
//         }}
//       >
//         <div className="relative z-10 max-w-2xl text-center md:text-left">
//           {/* Label Tag */}
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs md:text-sm font-semibold text-[#6748FE] mb-6 md:mb-8 uppercase tracking-widest shadow-sm">
//             Let&apos;s Collaborate
//           </div>

//           {/* Heading Text */}
//           <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-4 md:mb-6">
//             Ready to evolve <br />
//             <span className="text-[#6748FE]">your brand?</span>
//           </h2>
          
//           {/* Paragraph Text */}
//           <p className="text-base md:text-lg text-slate-400">
//             Let’s discuss your vision and see how our AI-powered curation can scale your business.
//           </p>
//         </div>

//         {/* Start Project Button */}
//         <button
//           onClick={onOpenModal}
//           className="relative z-10 group bg-[#6748FE] text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#5234e0] transition-all active:scale-98 w-full md:w-auto text-sm md:text-lg px-5 py-3.5 md:px-10 md:py-6 shadow-[0_10px_30px_rgba(103,72,254,0.35)] border border-white/10"
//         >
//           Start Project
//           <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//         </button>
//       </div>
//     </section>
//   );
// }

import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  onOpenModal: () => void;
}

export default function ServiceCTA({ onOpenModal }: ServiceCTAProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 relative z-10">
      <div
        className="group relative rounded-[1.8rem] md:rounded-[2.5rem] p-6 sm:p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 transition-all duration-500"
        style={{
          background: "#000000",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(103,72,254,0.30)",
          // ഇവിടെ ബോക്സിനും ഹെഡിംഗിനുമുള്ള ഷാഡോ കൂടുതൽ ആകർഷകമായ രീതിയിൽ നൽകിയിരിക്കുന്നു
          boxShadow: "0 20px 50px rgba(103,72,254,0.2), 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          {/* Label Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs md:text-sm font-semibold text-[#6748FE] mb-6 md:mb-8 uppercase tracking-widest shadow-sm">
            Let&apos;s Collaborate
          </div>

          {/* Heading Text - മൊബൈലിൽ ലെറ്റർ സ്പേസിംഗ് കൂട്ടിയിരിക്കുന്നു, ഒപ്പം ഹെഡിംഗിന് പ്രത്യേകമായി drop-shadow നൽകിയിരിക്കുന്നു */}
          <h2 
            className="text-3xl md:text-6xl font-bold text-white tracking-wide md:tracking-tighter leading-[1.1] mb-4 md:mb-6"
            style={{ textShadow: "0 4px 20px rgba(103,72,254,0.3)" }}
          >
            Ready to evolve <br />
            <span className="text-[#6748FE]">your brand?</span>
          </h2>
          
          {/* Paragraph Text */}
          <p className="text-base md:text-lg text-slate-400">
            Let’s discuss your vision and see how our AI-powered curation can scale your business.
          </p>
        </div>

        {/* Start Project Button */}
        <button
          onClick={onOpenModal}
          className="relative z-10 group bg-[#6748FE] text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#5234e0] transition-all active:scale-98 w-full md:w-auto text-sm md:text-lg px-5 py-3.5 md:px-10 md:py-6 shadow-[0_10px_30px_rgba(103,72,254,0.35)] border border-white/10"
        >
          Start Project
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}