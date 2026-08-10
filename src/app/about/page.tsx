import AboutHero from "@/src/components/pages/about/AboutHero";
import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
import WhyChoose from "@/src/components/pages/about/Why-Choose";
// import AboutImageGrid from "@/src/components/pages/about/AboutImageGrid";
import WhyWeExist from "@/src/components/pages/about/why-we -exist";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 pt-0 pb-24 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
      <AboutHero />
      <MissionVisionValues />
      {/* <AboutImageGrid /> */}
      <WhyWeExist />
      {/* <WhyChoose /> */}
      <WhyChoose />
    </main>
  );
}
