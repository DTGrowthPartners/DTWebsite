import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShoppingCart, Users, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

/**
 * Casos como filas editoriales (no tarjetas): métrica gigante con contador,
 * cliente + descripción, tags y detalle expandible por fila.
 */
const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  const cases = [
    {
      icon: ShoppingCart,
      num: "01",
      clientKey: "cases.ecommerce",
      industryKey: "cases.fashionIndustry",
      counter: { value: 250, prefix: "$", suffix: "K" },
      metricLabel: "USD en ventas generadas",
      improvement: "ROI 4.2x",
      descKey: "cases.ecommerceDesc",
      tags: ["Meta Ads", "E-commerce", "Performance"],
      growth: [18, 24, 22, 35, 42, 55, 68, 100],
      mainMetric: "$250K USD en ventas",
      secondaryMetric: "ROI 4.2x",
    },
    {
      icon: Users,
      num: "02",
      clientKey: "cases.clinic",
      industryKey: "cases.healthIndustry",
      counter: { value: 350, prefix: "$", suffix: "M" },
      metricLabel: "COP en ventas generadas",
      improvement: "ROAS 5.2x",
      descKey: "cases.clinicDesc",
      tags: ["Meta Ads", "WhatsApp", "Leads"],
      growth: [12, 20, 30, 28, 45, 60, 78, 100],
      mainMetric: "350M COP en ventas generadas",
      secondaryMetric: "ROAS 5.2x",
    },
    {
      icon: TrendingUp,
      num: "03",
      clientKey: "cases.localRetail",
      industryKey: "cases.webIndustry",
      counter: { value: 320, prefix: "+", suffix: "%" },
      metricLabel: "más cotizaciones",
      improvement: "3.1x conversión",
      descKey: "cases.localRetailDesc",
      tags: ["Web Development", "B2B", "SEO"],
      growth: [15, 18, 30, 45, 40, 62, 85, 100],
      mainMetric: "+320% cotizaciones",
      secondaryMetric: "3.1x conversión",
    },
  ];

  return (
    <section id="casos" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "blue", className: "top-[8%] left-[15%] w-[560px] h-[560px] opacity-30" },
          { color: "purple", className: "bottom-[10%] right-[-80px] w-[520px] h-[520px] opacity-25", delay: "-8s" },
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

        {/* Filas editoriales */}
        <div className="mt-16 border-t border-white/10">
          {cases.map((c, index) => {
            const Icon = c.icon;
            const isOpen = expanded === index;
            return (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-white/10"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="w-full text-left py-10 md:py-12 grid grid-cols-1 md:grid-cols-[minmax(240px,320px)_1fr_auto] lg:grid-cols-[minmax(240px,300px)_1fr_auto_auto] gap-6 md:gap-10 items-center transition-colors duration-300 hover:bg-white/[0.03] md:px-6 md:-mx-6 rounded-2xl"
                >
                  {/* Métrica protagonista */}
                  <div>
                    <span className="font-mono text-xs text-white/40">{c.num}</span>
                    <div className="mt-1 font-heading font-medium text-white text-6xl md:text-7xl tracking-[-0.02em] leading-none transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F76D6] group-hover:via-[#26BDF0] group-hover:to-[#C2FBFF]">
                      <AnimatedCounter value={c.counter.value} prefix={c.counter.prefix} suffix={c.counter.suffix} duration={1.6} />
                    </div>
                    <div className="text-xs text-white/70 font-body mt-2">{c.metricLabel}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#26BDF0] mt-1">
                      {c.improvement}
                    </div>
                  </div>

                  {/* Cliente + descripción */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="liquid-glass rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                      </span>
                      <h3 className="font-heading font-medium text-white text-xl md:text-2xl tracking-[-0.01em]">
                        {t(c.clientKey)}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-white/75 font-body font-light leading-relaxed max-w-2xl">
                      {t(c.descKey)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mini-gráfica: el crecimiento se "escribe" solo (efecto DT Hotels) */}
                  <div className="hidden lg:block w-[200px] shrink-0 self-center">
                    <div className="flex items-end gap-1.5 h-20 border-b border-white/10">
                      {c.growth.map((h, bi) => (
                        <motion.div
                          key={bi}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.5, delay: 0.25 + bi * 0.07, ease: [0.16, 1, 0.3, 1] }}
                          style={{ height: h + "%", transformOrigin: "bottom" }}
                          className={
                            "flex-1 rounded-t-[3px] " +
                            (bi === c.growth.length - 1
                              ? "bg-gradient-to-t from-[#0F76D6] to-[#C2FBFF] shadow-[0_0_18px_rgba(38,189,240,0.45)]"
                              : "bg-gradient-to-t from-[#0F76D6]/45 to-[#26BDF0]/70")
                          }
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                      <span>{"// evolución"}</span>
                      <span className="text-[#26BDF0]">{c.improvement}</span>
                    </div>
                  </div>

                  {/* Expansor */}
                  <div className="hidden md:flex items-center justify-center liquid-glass rounded-full w-12 h-12 shrink-0">
                    <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Detalle expandible (modo presentación) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80 font-body font-light">
                        <div className="liquid-glass rounded-xl p-4">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1.5">Industria</span>
                          {t(c.industryKey)}
                        </div>
                        <div className="liquid-glass rounded-xl p-4">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1.5">Qué hicimos</span>
                          {t(c.descKey)}
                        </div>
                        <div className="liquid-glass rounded-xl p-4">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1.5">Métrica principal</span>
                          {c.mainMetric}
                        </div>
                        <div className="liquid-glass rounded-xl p-4">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1.5">Métrica secundaria</span>
                          {c.secondaryMetric}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
