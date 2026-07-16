import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShoppingCart, Users, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import webVcc from "@/assets/webs/vcc.webp";
import webBhk from "@/assets/webs/bhk.webp";
import webAya from "@/assets/webs/aya.webp";

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
      mainMetric: "+320% cotizaciones",
      secondaryMetric: "3.1x conversión",
      gallery: [
        { img: webBhk, name: "BHK" },
        { img: webVcc, name: "VCC" },
        { img: webAya, name: "Arismendy" },
      ],
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
                  className="w-full text-left py-10 md:py-12 grid grid-cols-1 md:grid-cols-[minmax(240px,320px)_1fr_auto] gap-6 md:gap-10 items-center transition-colors duration-300 hover:bg-white/[0.03] md:px-6 md:-mx-6 rounded-2xl"
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

                    {/* Webs construidas: thumbnails horizontales en marco de cristal */}
                    {"gallery" in c && c.gallery && (
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {c.gallery.map((site) => (
                          <div key={site.name} className="liquid-glass rounded-xl p-1.5 transition-transform duration-300 hover:-translate-y-1">
                            <img
                              src={site.img}
                              alt={`Sitio web ${site.name} desarrollado por DT Growth Partners`}
                              className="w-40 md:w-52 aspect-video object-cover object-top rounded-lg"
                              loading="lazy"
                            />
                            <span className="block px-1 pt-1 pb-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white/60">
                              {site.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
