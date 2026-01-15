import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MethodSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Search,
      number: "01",
      titleKey: "method.step1",
      descKey: "method.step1Desc",
      detailsKey: "method.step1Details",
    },
    {
      icon: Target,
      number: "02",
      titleKey: "method.step2",
      descKey: "method.step2Desc",
      detailsKey: "method.step2Details",
    },
    {
      icon: Rocket,
      number: "03",
      titleKey: "method.step3",
      descKey: "method.step3Desc",
      detailsKey: "method.step3Details",
    },
  ];

  return (
    <section id="metodo" className="py-12 md:py-24 bg-gradient-card">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="relative inline-block text-sm font-medium uppercase tracking-wider">
            <span className="gradient-text">{t("method.label")}</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-100 transition-transform duration-300 ease-in-out" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("method.title")} <span className="gradient-text">{t("method.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("method.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const details = t(step.detailsKey).split(",");
            return (
              <Card
                key={t(step.titleKey)}
                className="bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 text-[15vw] md:text-[10vw] lg:text-[8vw] font-bold text-primary/5 leading-none">
                  {step.number}
                </div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-primary font-medium">Paso {step.number}</div>
                    <h3 className="text-2xl font-semibold">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(step.descKey)}</p>
                  </div>

                  <ul className="space-y-2 pt-4">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {detail.trim()}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
