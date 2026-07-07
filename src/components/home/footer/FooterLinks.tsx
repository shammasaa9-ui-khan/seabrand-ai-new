import Link from "next/link";
import { footerLinks, socialLinks, Headquarters } from "@/src/data/footer.data"; 

export default function FooterLinks() {
  const businessColumns = footerLinks.filter((col) => col.title !== "Contact");
  const contactColumn = footerLinks.find((col) => col.title === "Contact");

  return (
    <div className="w-full flex flex-col gap-y-4 md:gap-y-8">
      {/* 4 Column Layout on Desktop (md:) remains unchanged. 
          Mobile gap-y reduced from 8 to 5 to remove unwanted vertical gaps. */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-8 lg:gap-10 font-bahamas-light">
        
        {/* Navigation & Services */}
        {businessColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-2.5 md:gap-6">
            <h4 className="text-white font-bahamas-bold text-xs tracking-widest uppercase">
              {column.title}
            </h4>

            <ul className="flex flex-col gap-1.5 md:gap-4">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href || "#"}
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

        {/* Headquarters */}
        {Headquarters.map((column) => (
          <div key={column.title} className="flex flex-col gap-2.5 md:gap-6">
            <h4 className="text-white font-bahamas-bold text-xs tracking-widest uppercase">
              {column.title}
            </h4>
            <ul className="flex flex-col gap-1.5 md:gap-4">
              {column.links.map((link) => (
                <li key={link.name} className="text-[14px] md:text-[15px] text-zinc-400">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact & Desktop Socials */}
        <div className="flex flex-col items-start gap-5 md:gap-8 w-full">
          {contactColumn && (
            <div className="flex flex-col items-start gap-2.5 md:gap-6 w-full">
              <h4 className="text-white font-bahamas-bold text-xs tracking-widest uppercase">
                {contactColumn.title}
              </h4>
              <ul className="flex flex-col items-start gap-1.5 md:gap-4 w-full">
                {contactColumn.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href || "#"}
                      className="group relative flex items-center w-fit text-[14px] md:text-[15px] text-zinc-400 hover:text-white transition-colors"
                    >
                      <span className="absolute left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-3" />
                      <span className="transition-transform duration-300 group-hover:translate-x-5">
                        {link.name.startsWith("mailto:") ? link.name.replace("mailto:", "") : link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* DESKTOP ONLY SOCIALS (Unchanged) */}
          <div className="hidden md:flex flex-col items-start gap-3 w-full mt-2">
            <h4 className="text-white font-bahamas-bold text-xs tracking-widest uppercase">
              Socials
            </h4>
            <div className="flex items-center gap-2 md:gap-3 w-full">
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
      </div>

      {/* MOBILE ONLY SOCIALS (Reduced top padding from pt-4 to pt-1 to remove gap) */}
      <div className="flex md:hidden justify-center items-center gap-4 w-full pt-1">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              {link.svg}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}