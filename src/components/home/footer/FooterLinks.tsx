import Link from "next/link";
import { footerLinks, socialLinks } from "@/src/data/footer.data";

export default function FooterLinks() {
  return (
    <div className="lg:col-span-7 mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-8 lg:gap-10 lg:pl-10">
      {/* Text Link Columns */}
      {footerLinks.map((column) => (
        <div key={column.title} className="flex flex-col gap-3 md:gap-6">
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase">
            {column.title}
          </h4>

          <ul className="flex flex-col gap-2 md:gap-4">
            {column.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative flex items-center w-fit text-[14px] md:text-[15px] text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="absolute left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-3" />
                  <span className="transition-transform duration-300 group-hover:translate-x-5">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Social Icons Column */}
      <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-3 md:gap-6">
        <h4 className="text-white font-semibold text-xs tracking-widest uppercase text-center md:text-left w-full">
          {/* Connect */}
        </h4>

        <div className="flex justify-center md:justify-start items-center gap-2 md:gap-4 w-full">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                {link.svg}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}