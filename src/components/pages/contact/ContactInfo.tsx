// import { items } from "@/src/data/contact.data";

// export default function ContactInfo() {
//   return (
//     /* Motion div-nu pakaram plain HTML div with a styled box */
//     <div className="flex flex-col gap-8 lg:pt-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
//       {items.map((item, i) => (
//         <div key={i} className="flex flex-col gap-2">
//           <h3 className="text-xl font-bold">{item.title}</h3>
//           <a 
//             href={item.href} 
//             className="flex items-center gap-3 text-zinc-500 hover:text-[#6748FE] transition-colors"
//           >
//             <item.icon className="w-5 h-5" />
//             <span className="font-semibold underline underline-offset-4">
//               {item.content}
//             </span>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
import { items } from "@/src/data/contact.data";

export default function ContactInfo() {
  return (
    /* Pure White Background & Shadow */
    <div className="relative overflow-hidden rounded-3xl bg-white border border-zinc-100 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      
      <div className="flex flex-col gap-6 sm:gap-8">
        {items.map((item, i) => (
          <div key={i} className="group flex flex-col gap-2">
            
            {/* Category / Label - Fixed Color */}
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase select-none">
              {item.title}
            </span>

            {/* Clickable Row */}
            <a 
              href={item.href} 
              className="flex items-center gap-3 sm:gap-4 transition-colors duration-200"
            >
              {/* Premium Off-White Icon Badge */}
              <div className="flex shrink-0 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-700 group-hover:bg-[#6748FE]/10 group-hover:text-[#6748FE] group-hover:border-[#6748FE]/20 transition-all duration-300 shadow-sm group-hover:scale-105">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
              </div>

              {/* Text Detail - Explicitly Set Black Color */}
              <span className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-zinc-900 !text-zinc-900 group-hover:!text-[#6748FE] transition-colors duration-200 break-all sm:break-normal">
                {item.content}
              </span>
            </a>

            {/* Divider */}
            {i < items.length - 1 && (
              <div className="mt-2 sm:mt-4 h-[1px] w-full bg-zinc-100/80" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}