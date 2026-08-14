
// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { ArrowUpRight } from "lucide-react";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1]as const } },
// // };

// // interface TeamMemberProps {
// //   member: {
// //     name: string;
// //     role: string;
// //     image: string;
// //   };
// // }

// // export default function TeamMemberCard({ member }: TeamMemberProps) {
// //   return (
// //     <motion.div variants={fadeUp} className="group flex flex-col cursor-default">
// //       {/* Sleek, unboxed image */}
// //       <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 rounded-xl mb-6">
// //         <Image
// //           src={member.image}
// //           alt={member.name}
// //           fill
// //           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
// //           className="object-cover transition-all duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
// //         />
// //         {/* Subtle overlay for premium feel */}
// //         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
// //       </div>

// //       {/* Editorial Text Block with border */}
// //       <div className="flex flex-col border-t border-zinc-200 pt-4 px-1">
// //         <div className="flex justify-between items-center mb-1">
// //           <h4 className="
// //   text-xl 
// //   font-bold 
// //   text-black 
// //   /* Mobile-il space kootan tracking-wide */
// //   tracking-wide 
// //   /* Desktop-il mathram original 'tracking-tight' aakkunnu */
// //   md:tracking-tight 
// //   group-hover:text-[#6748FE] 
// //   transition-colors 
// //   duration-300
// // ">
// //   {member.name}
// // </h4>
// //           <ArrowUpRight className="w-5 h-5 text-[#6748FE] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
// //         </div>
// //         <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
// //           {member.role}
// //         </p>
// //       </div>
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
// };

// interface TeamMemberProps {
//   member: {
//     name: string;
//     role: string;
//     image: string;
//   };
// }

// export default function TeamMemberCard({ member }: TeamMemberProps) {
//   return (
//     <motion.div variants={fadeUp} className="group flex flex-col cursor-default">
//       {/* Sleek, unboxed image */}
//       <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 rounded-xl mb-6">
//         <Image
//           src={member.image}
//           alt={member.name}
//           fill
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//           className="object-cover transition-all duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
//         />
//         {/* Subtle overlay for premium feel */}
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
//       </div>

//       {/* Editorial Text Block with border */}
//       <div className="flex flex-col border-t border-zinc-200 pt-4 px-1 pb-6 md:pb-0">
//         <div className="flex justify-between items-center mb-1">
//           <h4 className="
//   text-xl 
//   font-bold 
//   text-black 
//   /* Mobile-il space kootan tracking-wide */
//   tracking-wide 
//   /* Desktop-il mathram original 'tracking-tight' aakkunnu */
//   md:tracking-tight 
//   group-hover:text-[#6748FE] 
//   transition-colors 
//   duration-300
// ">
//   {member.name}
// </h4>
//           <ArrowUpRight className="w-5 h-5 text-[#6748FE] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
//         </div>
//         <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
//           {member.role}
//         </p>
//       </div>

//       {/* Mobile view-il mathram bottathil oru separator line */}
//       <div className="block md:hidden w-full border-b border-zinc-200 mt-6" />
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
  };
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col cursor-default">
      {/* Sleek, unboxed image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 rounded-xl mb-6">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
        />
        {/* Subtle overlay for premium feel */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      {/* Editorial Text Block with border */}
      <div className="flex flex-col border-t border-zinc-200 pt-4 px-1 pb-6 md:pb-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="
  text-xl 
  font-bold 
  text-black 
  /* Mobile-il space kootan tracking-wide */
  tracking-wide 
  /* Desktop-il mathram original 'tracking-tight' aakkunnu */
  md:tracking-tight 
  group-hover:text-[#6748FE] 
  transition-colors 
  duration-300
">
  {member.name}
</h4>
          <ArrowUpRight className="w-5 h-5 text-[#6748FE] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
        </div>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
          {member.role}
        </p>
      </div>

      {/* Both Mobile & Desktop view-il bottathil oru separator line */}
      <div className="w-full border-b border-zinc-200 mt-6" />
    </motion.div>
  );
}