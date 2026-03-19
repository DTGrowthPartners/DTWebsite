import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "DT Growth Partners",
  "url": "https://dtgrowthpartners.com",
  "logo": "https://dtgrowthpartners.com/images/DT-GROWTH-LOGO.png",
  "description": "Agencia de marketing digital en Cartagena especializada en Meta Ads, desarrollo web y automatizaciones.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cartagena",
    "addressRegion": "Bolívar",
    "addressCountry": "CO"
  },
  "areaServed": "Cartagena, Colombia",
  "telephone": "+573007189383",
  "email": "info@dtgrowthpartners.com",
  "sameAs": [
    "https://www.facebook.com/dairotraslav",
    "https://www.instagram.com/dtgrowthpartners/",
    "https://www.linkedin.com/company/dtgrowth"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Agencia de Marketing Digital en Cartagena | DT Growth Partners"
        description="Pauta digital, Meta Ads y desarrollo web en Cartagena. Escalamos tu negocio con estrategias basadas en datos. Agenda una consulta gratis."
        canonical="https://dtgrowthpartners.com/"
        jsonLd={localBusinessSchema}
      />
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
