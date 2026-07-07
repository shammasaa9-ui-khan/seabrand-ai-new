import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="relative w-full border-t border-white/10 pt-2 md:pt-8 pb-10 md:pb-24 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-5 z-10">
      {/* Copyright */}
      <p className="text-zinc-500 text-sm text-center md:text-left">
        ©2026 - {new Date().getFullYear()} SeaBrand. All rights reserved.
      </p>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-5 md:gap-7 text-xs font-semibold tracking-widest uppercase text-zinc-500">
        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Terms
        </Link>

        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Privacy
        </Link>

        <Link
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Cookies
        </Link>
      </div>
    </div>
  );
}