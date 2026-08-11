import AboutHero from "@/src/components/pages/about/AboutHero";
import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
import WhyChoose from "@/src/components/pages/about/Why-Choose";
// import AboutImageGrid from "@/src/components/pages/about/AboutImageGrid";
import WhyWeExist from "@/src/components/pages/about/why-we -exist";
import BlueBackground from "@/src/components/shared/BlueBackground";

export default function AboutPage() {
  return (
    <main 
      className="relative min-h-screen text-slate-100 pt-0 pb-24 selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 45% at 50% 20%, rgba(14, 116, 244, 0.45) 0%, rgba(8, 50, 160, 0.2) 45%, rgba(1, 3, 10, 0.98) 80%, #01030a 100%),
          linear-gradient(160deg, #070e18 0%, #041028 50%, #01030a 100%)
        `
      }}
    >
      <BlueBackground />
      <div className="relative z-10">
        <AboutHero />
        <MissionVisionValues />
        {/* <AboutImageGrid /> */}
        <WhyWeExist />
        {/* <WhyChoose /> */}
        <WhyChoose />
      </div>
    </main>
  );
}