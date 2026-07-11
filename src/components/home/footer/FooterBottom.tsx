// 


import Link from "next/link";

export default function FooterBottom() {
  return (
    // Sử dụng gap-0 cho mobile và md:gap-5 cho desktop
    <div className="relative w-full border-t border-white/10 pt-3 pb-9 flex flex-row items-center justify-between gap-0 md:gap-5 z-10 font-bahamas-light">
      
      {/* Copyright */}
      <p className="text-zinc-500 text-[8px] md:text-sm whitespace-nowrap">
        ©2026 - 2026 SeaBrand. All rights reserved.
      </p>

   
<div className="flex justify-end items-center gap-2 md:gap-7 text-[6px] md:text-[10px] font-bahamas-bold tracking-widest uppercase text-zinc-500 whitespace-nowrap">
  <Link href="#" className="hover:text-white transition-colors duration-300">
    Terms
  </Link>
  <Link href="#" className="hover:text-white transition-colors duration-300">
    Privacy
  </Link>
  <Link href="#" className="hover:text-white transition-colors duration-300">
    Cookies
  </Link>
</div>
    </div>
  );
}