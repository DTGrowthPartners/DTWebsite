import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import fondoVideo from "@/assets/fondo-video.mp4";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-12 lg:p-20">
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-50"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={fondoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-hero opacity-30" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              {t("cta.title")} <span className="gradient-text">{t("cta.titleHighlight")}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              {t("cta.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-primary group text-base sm:text-lg px-6 sm:px-8">
                <a href="https://api.whatsapp.com/send/?phone=14158702322&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t("cta.buttonText")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 pt-8 text-sm text-muted-foreground overflow-x-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {t("cta.noCommitment")}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {t("cta.duration")}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {t("cta.free")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
