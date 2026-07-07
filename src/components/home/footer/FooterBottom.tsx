import Link from "next/link";

export default function FooterBottom() {
  return (
    /* 
      Changed mobile gap from gap-4 to gap-1 to bring the two lines closer together.
      Desktop layout stays exactly as md:gap-5.
    */
    <div className="relative w-full border-t border-white/10 pt-6 md:pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-5 z-10 font-bahamas-light">
      {/* Copyright */}
      <p className="text-zinc-500 text-[9px] md:text-sm text-center md:text-left">
        ©2026 - {new Date().getFullYear()} SeaBrand. All rights reserved.
      </p>

      {/* Footer Policy Links */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-7 text-[6px] md:text-xs font-bahamas-bold tracking-widest uppercase text-zinc-500">
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