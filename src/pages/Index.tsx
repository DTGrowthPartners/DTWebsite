import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesSection from "@/components/home/ServicesSection";
import DTOSSection from "@/components/home/DTOSSection";
import WebDevelopmentSection from "@/components/home/WebDevelopmentSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import MethodSection from "@/components/home/MethodSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactFormSection from "@/components/home/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <DTOSSection />
        <CaseStudiesSection />
        <MethodSection />
        <TestimonialsSection />
        <CTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
