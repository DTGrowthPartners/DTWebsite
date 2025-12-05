import logo1 from "@/assets/marcas/1-arismendy.png";
import logo2 from "@/assets/marcas/2.logo-equilibrio-clinic.png";
import logo3 from "@/assets/marcas/3-El-Bolivarense-logotipo-02.webp";
import logo4 from "@/assets/marcas/3.logo-tradicion.png";
import logo5 from "@/assets/marcas/4-tennis-cartagena.png";
import logo6 from "@/assets/marcas/5.logo-acbfit-4.png";
import logo7 from "@/assets/marcas/6-logo-en-medidas-especificas.png";
import logo8 from "@/assets/marcas/7-logo-neuro-carolina.png";
import logo9 from "@/assets/marcas/8-MOTOS-TOP-VERT.png";
import logo10 from "@/assets/marcas/13-logo1A.png";
import logo11 from "@/assets/marcas/10-verzatille.png";
import logo12 from "@/assets/marcas/12-autoexpress.png";
import logo13 from "@/assets/marcas/experiencia-cartagena.png";
import logo14 from "@/assets/marcas/logo-roberto-casanova-english-01.svg";
import logo15 from "@/assets/marcas/bhk.png";
import { useLanguage } from "@/context/LanguageContext";

const BrandsSection = () => {
  const { t } = useLanguage();
  const brands = [
    { name: "Arismendy", logo: logo1 },
    { name: "Equilibrio Clinic", logo: logo2 },
    { name: "El Bolivarense", logo: logo3 },
    { name: "Tradición", logo: logo4 },
    { name: "Motos Top", logo: logo9 },
     { name: "Autoexpress", logo: logo12 },
    
    { name: "ACB Fit", logo: logo6 },
    { name: "En Medidas Específicas", logo: logo7 },
    { name: "Experiencia Cartagena", logo: logo13 },

    { name: "1A", logo: logo10 },
    { name: "verzatille", logo: logo11 },
 { name: "Tennis Cartagena", logo: logo5 },
    { name: "Neuro Carolina", logo: logo8 },
    { name: "Roberto Casanova", logo: logo14 },
    { name: "BHK", logo: logo15 },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="section-container">
        <p className="text-center text-sm text-muted-foreground mb-6 md:mb-12 uppercase tracking-wider">
          {t("brands.trustedBy")}
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center px-4 md:px-0">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className={`
                  object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto
                  ${brand.name === "verzatille" ? "max-h-6 md:max-h-8" : ""}
                  ${brand.name === "Autoexpress" ? "max-h-16 md:max-h-20" : ""}
                  ${brand.name === "En Medidas Específicas" ? "max-h-12 md:max-h-16" : ""}
                  ${brand.name === "Neuro Carolina" ? "max-h-12 md:max-h-16" : ""}
                  ${brand.name === "Equilibrio Clinic" ? "max-h-6 md:max-h-8" : ""}
                  ${brand.name === "Tennis Cartagena" ? "max-h-10 md:max-h-14" : ""}
                  ${brand.name === "Roberto Casanova" ? "max-h-8 md:max-h-12 mt-2" : ""}
                  ${brand.name === "BHK" ? "max-h-6 md:max-h-10" : ""}
                  ${!["verzatille", "Autoexpress", "En Medidas Específicas", "Neuro Carolina", "Equilibrio Clinic", "Tennis Cartagena", "Roberto Casanova", "BHK"].includes(brand.name) ? "max-h-8 md:max-h-12" : ""}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
