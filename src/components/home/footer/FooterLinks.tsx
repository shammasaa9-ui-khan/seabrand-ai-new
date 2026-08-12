// // // 

// // import Link from "next/link";
// // import { footerLinks, Headquarters, socialLinks } from "@/src/data/footer.data";

// // export default function FooterLinks() {
// //   const businessColumns = footerLinks.filter((col) => col.title !== "Contact");
// //   const contactColumn = footerLinks.find((col) => col.title === "Contact");

// //   return (
// //     <div className="w-full flex flex-col gap-y-6">
// //       {/* Main Grid */}
// //       <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 lg:gap-8">
        
// //         {/* Navigation & Services */}
// //         {businessColumns.map((column) => (
// //           <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
// //             <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
// //               {column.title}
// //             </h4>
// //             <ul className="flex flex-col gap-1 md:gap-2">
// //               {column.links.map((link) => (
// //                 <li key={link.name}>
// //                   <Link
// //                     href={link.href || "#"}
// //                     className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 ease-out font-bahamas-light"
// //                   >
// //                     <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
// //                     <span className="transform group-hover:translate-x-1 transition-transform duration-200">
// //                       {link.name}
// //                     </span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}

// //         {/* Headquarters Column */}
// //         {Headquarters.map((column) => (
// //           <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
// //             <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
// //               {column.title}
// //             </h4>
// //             <ul className="flex flex-col gap-1">
// //               {column.links.map((link) => (
// //                 <li key={link.name} className="text-[11px] md:text-[14px] text-zinc-400 font-bahamas-light">
// //                   {link.name}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}

// //         {/* Contact Column & Socials Container */}
// //         <div className="flex flex-col gap-1">
// //           {contactColumn && (
// //             <div className="flex flex-col gap-1.5 md:gap-3">
// //               <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
// //                 {contactColumn.title}
// //               </h4>
// //               <ul className="flex flex-col gap-1">
// //                 {contactColumn.links.map((link) => (
// //                   <li key={link.name}>
// //                     <Link
// //                       href={link.href || "#"}
// //                       className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 font-bahamas-light"
// //                     >
// //                       <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
// //                       <span className="transform group-hover:translate-x-1 transition-transform duration-200">
// //                         {link.name.startsWith("mailto:") ? link.name.replace("mailto:", "") : link.name}
// //                       </span>
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           {/* Social Icons - Responsive Size */}
// //           <div className="flex justify-start gap-3 mt-1">
// //             {socialLinks.map((social) => (
// //               <Link
// //                 key={social.name}
// //                 href={social.href}
// //                 className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#6748FE] hover:bg-[#6748FE] transition-all duration-300 [&>svg]:w-3 md:[&>svg]:w-4"
// //               >
// //                 {social.svg}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }// 

// import Link from "next/link";
// import { footerLinks, Headquarters, socialLinks } from "@/src/data/footer.data";

// export default function FooterLinks() {
//   const businessColumns = footerLinks.filter((col) => col.title !== "Contact");
//   const contactColumn = footerLinks.find((col) => col.title === "Contact");

//   return (
//     <div className="w-full flex flex-col gap-y-6">
//       {/* Main Grid */}
//       <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 lg:gap-8">
        
//         {/* Navigation & Services */}
//         {businessColumns.map((column) => (
//           <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
//             <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
//               {column.title}
//             </h4>
//             <ul className="flex flex-col gap-1 md:gap-2">
//               {column.links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href || "#"}
//                     className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 ease-out font-bahamas-light"
//                   >
//                     <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
//                     <span className="transform group-hover:translate-x-1 transition-transform duration-200">
//                       {link.name}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         {/* Headquarters Column */}
//         {Headquarters.map((column) => (
//           <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
//             <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
//               {column.title}
//             </h4>
//             <ul className="flex flex-col gap-1">
//               {column.links.map((link) => (
//                 <li key={link.name} className="text-[11px] md:text-[14px] text-zinc-400 font-bahamas-light">
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         {/* Contact Column & Socials Container */}
//         <div className="flex flex-col gap-1">
//           {contactColumn && (
//             <div className="flex flex-col gap-1.5 md:gap-3">
//               <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
//                 {contactColumn.title}
//               </h4>
//               <ul className="flex flex-col gap-1">
//                 {contactColumn.links.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href || "#"}
//                       className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 font-bahamas-light"
//                     >
//                       <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
//                       <span className="transform group-hover:translate-x-1 transition-transform duration-200">
//                         {link.name.startsWith("mailto:") ? link.name.replace("mailto:", "") : link.name}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Social Icons - Premium Luxury Style */}
//           <div className="flex justify-start gap-3 mt-1">
//             {socialLinks.map((social) => (
//               <Link
//                 key={social.name}
//                 href={social.href}
//                 className="relative w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#6748FE] hover:bg-gradient-to-br hover:from-[#6748FE] hover:to-[#5032d8] hover:shadow-[0_0_15px_rgba(103,72,254,0.4)] transition-all duration-300 ease-out overflow-hidden group [&>svg]:w-3.5 md:[&>svg]:w-4 [&>svg]:h-3.5 md:[&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:scale-110"
//               >
//                 {/* Subtle Inner Glow Layer */}
//                 <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                 {social.svg}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 

import Link from "next/link";
import { footerLinks, Headquarters, socialLinks } from "@/src/data/footer.data";

export default function FooterLinks() {
  const businessColumns = footerLinks.filter((col) => col.title !== "Contact");
  const contactColumn = footerLinks.find((col) => col.title === "Contact");

  return (
    <div className="w-full flex flex-col gap-y-6">
      {/* Main Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 lg:gap-8">
        
        {/* Navigation & Services */}
        {businessColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
            <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
              {column.title}
            </h4>
            <ul className="flex flex-col gap-1 md:gap-2">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href || "#"}
                    className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 ease-out font-bahamas-light"
                  >
                    <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Headquarters Column */}
        {Headquarters.map((column) => (
          <div key={column.title} className="flex flex-col gap-1.5 md:gap-3">
            <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
              {column.title}
            </h4>
            <ul className="flex flex-col gap-1">
              {column.links.map((link) => (
                <li key={link.name} className="text-[11px] md:text-[14px] text-zinc-400 font-bahamas-light">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column & Socials Container */}
        <div className="flex flex-col gap-1">
          {contactColumn && (
            <div className="flex flex-col gap-1.5 md:gap-3">
              <h4 className="text-white font-bahamas font-semibold text-[11px] md:text-xs tracking-[0.15em] uppercase opacity-90">
                {contactColumn.title}
              </h4>
              <ul className="flex flex-col gap-1">
                {contactColumn.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href || "#"}
                      className="group relative flex items-center w-fit text-[11px] md:text-[14px] text-zinc-400 hover:text-white transition-all duration-200 font-bahamas-light"
                    >
                      <span className="absolute -left-3 w-1 h-1 bg-[#6748FE] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        {link.name.startsWith("mailto:") ? link.name.replace("mailto:", "") : link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Icons - White Background & Black Icons */}
          <div className="flex justify-start gap-3 mt-1">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="relative w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-white flex items-center justify-center text-black hover:bg-[#6748FE] hover:text-white hover:border-[#6748FE] hover:shadow-[0_0_15px_rgba(103,72,254,0.4)] transition-all duration-300 ease-out overflow-hidden group [&>svg]:w-3.5 md:[&>svg]:w-4 [&>svg]:h-3.5 md:[&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:scale-110"
              >
                {social.svg}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}