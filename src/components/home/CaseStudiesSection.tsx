import { useState } from "react";
import { TrendingUp, ShoppingCart, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";

const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const cases = [
    {
      icon: ShoppingCart,
      num: "01",
      clientKey: "cases.ecommerce",
      industryKey: "cases.fashionIndustry",
      metric: "$250K",
      metricLabel: "USD en ventas generadas",
      improvement: "ROI 4.2x",
      descKey: "cases.ecommerceDesc",
      tags: ["Meta Ads", "E-commerce", "Performance"],
      mainMetric: "$250K USD en ventas",
      secondaryMetric: "ROI 4.2x",
    },
    {
      icon: Users,
      num: "02",
      clientKey: "cases.clinic",
      industryKey: "cases.healthIndustry",
      metric: "$350M",
      metricLabel: "COP en ventas generadas",
      improvement: "ROAS 5.2x",
      descKey: "cases.clinicDesc",
      tags: ["Meta Ads", "WhatsApp", "Leads"],
      mainMetric: "350M COP en ventas generadas",
      secondaryMetric: "ROAS 5.2x",
    },
    {
      icon: TrendingUp,
      num: "03",
      clientKey: "cases.localRetail",
      industryKey: "cases.webIndustry",
      metric: "+320%",
      metricLabel: "más cotizaciones",
      improvement: "3.1x conversión",
      descKey: "cases.localRetailDesc",
      tags: ["Web Development", "B2B", "SEO"],
      mainMetric: "+320% cotizaciones",
      secondaryMetric: "3.1x conversión",
    },
  ];

  return (
    <section id="casos" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "blue", className: "-top-32 left-[15%] w-[560px] h-[560px] opacity-30" },
          { color: "purple", className: "bottom-[-160px] right-[-80px] w-[520px] h-[520px] opacity-25", delay: "-8s" },
        ]}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <span className="text-sm font-body text-white/80">{`// ${t("nav.cases")}`}</span>
        <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em] max-w-4xl">
          {t("cases.title")} <RotatingWord words={t("cases.rotating").split("|")} interval={3000} className="font-semibold" />
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("cases.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const isExpanded = expandedCase === index;
            return (
              <div
                key={caseStudy.num}
                className="liquid-glass rounded-[1.25rem] p-6 md:p-7 flex flex-col min-h-[380px]"
              >
                {/* Cabecera: icono + industria */}
                <div className="flex items-start justify-between gap-4">
                  <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {t(caseStudy.industryKey)}
                  </span>
                </div>

                {/* Métrica protagonista */}
                <div className="mt-8">
                  <span className="font-mono text-xs text-white/50">{caseStudy.num}</span>
                  <div className="mt-1 font-heading text-white text-5xl md:text-6xl tracking-[-0.02em] leading-none">
                    {caseStudy.metric}
                  </div>
                  <div className="text-xs text-white font-body font-light mt-2">{caseStudy.metricLabel}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                    {caseStudy.improvement}
                  </div>
                </div>

                <div className="flex-1" />

                {/* Cliente + descripción */}
                <div className="mt-6">
                  <h3 className="text-white font-body font-medium">{t(caseStudy.clientKey)}</h3>
                  <p className="mt-2 text-sm text-white/80 font-body font-light leading-snug">
                    {t(caseStudy.descKey)}
                  </p>
                </div>

                {/* Detalle expandible (útil en presentaciones) */}
                <button
                  onClick={() => setExpandedCase(isExpanded ? null : index)}
                  className="mt-5 flex items-center justify-between w-full text-sm font-medium text-white font-body hover:opacity-80 transition-opacity"
                >
                  <span>{isExpanded ? "Ocultar detalles" : "Ver detalles completos"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-2 text-sm text-white/80 font-body font-light border-t border-white/10 pt-4">
                    <div>
                      <span className="text-white font-medium">Industria: </span>
                      {t(caseStudy.industryKey)}
                    </div>
                    <div>
                      <span className="text-white font-medium">Qué hicimos: </span>
                      {t(caseStudy.descKey)}
                    </div>
                    <div>
                      <span className="text-white font-medium">Métrica principal: </span>
                      {caseStudy.mainMetric}
                    </div>
                    <div>
                      <span className="text-white font-medium">Métrica secundaria: </span>
                      {caseStudy.secondaryMetric}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
