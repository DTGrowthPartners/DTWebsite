import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollRocketSeparator from "./ScrollRocketSeparator";

const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const [expandedCase, setExpandedCase] = useState(null);

  const cases = [
    {
      icon: ShoppingCart,
      clientKey: "cases.ecommerce",
      industryKey: "cases.fashionIndustry",
      metric: "$250K",
      metricLabel: "en ventas generadas",
      improvement: "ROI 4.2x",
      descKey: "cases.ecommerceDesc",
      tags: ["Meta Ads", "E-commerce", "Performance"],
      details: {
        industry: t("cases.ecommerce"),
        whatWeDidKey: "cases.ecommerceDesc",
        mainMetric: "$250K USD en ventas",
        secondaryMetric: "ROI 4.2x",
        tags: ["Meta Ads", "E-commerce", "Performance"]
      }
    },
    {
      icon: Users,
      clientKey: "cases.clinic",
      industryKey: "cases.healthIndustry",
      metric: "350M",
      metricLabel: "en ventas generadas",
      improvement: "ROAS 5.2x",
      descKey: "cases.clinicDesc",
      tags: ["Meta Ads", "WhatsApp", "Leads"],
      details: {
        industry: t("cases.clinic"),
        whatWeDidKey: "cases.clinicDesc",
        mainMetric: "350M COP en ventas generadas",
        secondaryMetric: "ROAS 5.2x",
        tags: ["Meta Ads", "WhatsApp", "Leads"]
      }
    },
    {
      icon: TrendingUp,
      clientKey: "cases.localRetail",
      industryKey: "cases.webIndustry",
      metric: "+320%",
      metricLabel: "más cotizaciones",
      improvement: "3.1x conversión",
      descKey: "cases.localRetailDesc",
      tags: ["Web Development", "B2B", "SEO"],
      details: {
        industry: t("cases.localRetail"),
        whatWeDidKey: "cases.localRetailDesc",
        mainMetric: t("cases.webMetric1"),
        secondaryMetric: t("cases.webMetric2"),
        tags: ["Web Development", "B2B", "SEO"]
      }
    },
  ];

  return (
    <section id="casos" className="py-12 md:py-24 relative">
      <ScrollRocketSeparator />
      <div className="section-container relative z-10">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("nav.cases")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("cases.title")} <span className="gradient-text">{t("cases.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("cases.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const isExpanded = expandedCase === index;
            return (
              <Card
                key={t(caseStudy.clientKey)}
                className="card-hover bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{t(caseStudy.industryKey)}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t(caseStudy.clientKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(caseStudy.descKey)}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <div>
                      <div className="text-2xl font-bold text-primary">{caseStudy.metric}</div>
                      <div className="text-xs text-muted-foreground">{caseStudy.metricLabel}</div>
                    </div>
                    <div className="text-xs font-medium text-foreground">
                      {caseStudy.improvement}
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedCase(isExpanded ? null : index)}
                    className="flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>{isExpanded ? "Ocultar detalles" : "Ver detalles completos"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="space-y-3 pt-3 text-sm">
                      <div>
                        <span className="font-medium">Industria: </span>
                        <span>{t(caseStudy.industryKey)}</span>
                      </div>
                      <div>
                        <span className="font-medium">Qué hicimos: </span>
                        <span>{t(caseStudy.details.whatWeDidKey)}</span>
                      </div>
                      <div>
                        <span className="font-medium">Métrica principal: </span>
                        <span>{caseStudy.details.mainMetric}</span>
                      </div>
                      <div>
                        <span className="font-medium">Métrica secundaria: </span>
                        <span>{caseStudy.details.secondaryMetric}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {caseStudy.details.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
