import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Code, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      titleKey: "services.metaAds",
      descKey: "services.metaAdsDesc",
      highlightsKey: "services.metaAdsHighlights",
      path: "/servicios/meta-ads",
    },
    {
      icon: Code,
      titleKey: "services.webDev",
      descKey: "services.webDevDesc",
      highlightsKey: "services.webDevHighlights",
      path: "/servicios/desarrollo-web",
    },
    {
      icon: Zap,
      titleKey: "services.automation",
      descKey: "services.automationDesc",
      highlightsKey: "services.automationHighlights",
      path: "/servicios/sistemas-automatizaciones",
    },
    {
      icon: MessageCircle,
      titleKey: "services.chatbots",
      descKey: "services.chatbotsDesc",
      highlightsKey: "services.chatbotsHighlights",
      path: "/servicios/chatbots",
    },
  ];

  return (
    <section id="servicios" className="py-12 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("nav.services")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("services.title")}{" "}
            <span className="gradient-text">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const highlights = t(service.highlightsKey).split(",");
            return (
              <Card
                key={t(service.titleKey)}
                className="card-hover bg-card border-border/50 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{t(service.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(service.descKey)}</p>
                  </div>

                  <ul className="space-y-1 flex-grow">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {highlight.trim()}
                      </li>
                    ))}
                  </ul>

                  {service.titleKey === "services.chatbots" ? (
                    <a
                      href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button variant="ghost" className="group w-full justify-between mt-3 p-2 text-xs scroll-glow-button">
                        {t("services.seeMore")}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={service.path} className="mt-auto">
                      <Button variant="ghost" className="group w-full justify-between mt-3 p-2 text-xs scroll-glow-button">
                        {t("services.seeMore")}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
