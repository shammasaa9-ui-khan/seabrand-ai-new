import Link from "next/link";
import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 text-zinc-400 text-[15px] leading-relaxed w-full">
      {/* Logo Wrapper */}
      <Link href="/" className="inline-block w-fit">
        <Image
          src="/images/Footerlogo.png"
          alt="SeaBrand Logo"
          width={200}
          height={100}
          priority
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain brightness-0 invert"
        />
      </Link>
    </div>
  );
}