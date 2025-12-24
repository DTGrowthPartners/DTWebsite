import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-start justify-center relative overflow-hidden pt-16 md:pt-20">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 object-center">
        <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#040615]/60 via-[#040615]/40 to-[#040615]/20 z-10" />
      
      <div className="section-container relative z-10 mt-12 md:mt-0 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start md:items-center">
          <div className="space-y-6 animate-fade-in-up pt-4 md:pt-10">
            <div className="inline-block animate-fade-in-up pt-12 md:pt-0 -mt-10 md:mt-0" style={{animationDelay: "0.2s"}}>
              <span className="px-2 py- bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                {t("hero.growthEngine")}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up pt-4 md:pt-0" style={{animationDelay: "0.4s"}}>
              {t("hero.scaleWithScience.before")}<span className="gradient-text">{t("hero.scaleWithScience.highlight")}</span>{t("hero.scaleWithScience.after")}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up" style={{animationDelay: "0.6s"}}>
              {t("hero.scaleDescription")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
              <Button asChild size="lg" className="btn-primary group">
                <a href="https://api.whatsapp.com/send/?phone=14158702322&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  {t("hero.consultation")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <a href="/#casos">{t("hero.seeCases")}</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up" style={{animationDelay: "1s"}}>
              <div className="animate-scale-in" style={{animationDelay: "1.2s"}}>
                <div className="text-lg md:text-xl font-bold text-primary">$250k</div>
                <div className="text-xs text-muted-foreground">{t("common.managedAds")}</div>
              </div>
              <div className="animate-scale-in" style={{animationDelay: "1.4s"}}>
                <div className="text-lg md:text-xl font-bold text-primary">25+</div>
                <div className="text-xs text-muted-foreground">{t("common.completedProjects")}</div>
              </div>
              <div className="animate-scale-in" style={{animationDelay: "1.5s"}}>
                <div className="text-lg md:text-xl font-bold text-primary">10x</div>
                <div className="text-xs text-muted-foreground">{t("common.averageROI")}</div>
              </div>
               <div className="animate-scale-in" style={{animationDelay: "1.6s"}}>
                 <div className="text-lg md:text-xl font-bold text-primary">+5M<small className="text-xs"> USD</small>  </div>
                 <div className="text-xs text-muted-foreground">{t("common.salesGenerated")}</div>
               </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
