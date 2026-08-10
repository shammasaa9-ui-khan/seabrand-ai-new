import IndustriesWeServe from "../components/home/BUILD-BRAND/industriesWeServe";
import ExpertiseSection from "../components/home/expertise/ExpertiseSection";
import FAQ from "../components/home/FAQ/FAQ";
// import FAQ from "../components/home/FAQ/FAQ";
// import FAQPage from "../components/home/FAQ/FAQ";
import FocusSection from "../components/home/focus/FocusSection";
import Hero from "../components/home/hero/Hero";
import PortfolioSection from "../components/home/portfolio-preview/PortfolioSection";
import StrategicRevolution from "../components/home/revolution/StrategicRevolution";
import ServicesSection from "../components/home/services-preview/ServicesSection";
import TestimonialsSection from "../components/home/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <FocusSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <StrategicRevolution />
      <FAQ/>
      <IndustriesWeServe/>
      
      
    
    </div>
  );
}
