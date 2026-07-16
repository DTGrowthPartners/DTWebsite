import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Target, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";

/**
 * Timeline vertical: una línea central se "dibuja" con el scroll y los 3 pasos
 * aparecen en zigzag (izquierda/derecha) — sin tarjetas, layout editorial.
 */
const MethodSection = () => {
  const { t } = useLanguage();
  const lineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    <section id="metodo" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "purple", className: "top-[10%] left-[-140px] w-[520px] h-[520px] opacity-25" },
          { color: "cyan", className: "bottom-[-120px] right-[10%] w-[480px] h-[480px] opacity-20", delay: "-6s" },
        ]}
      />
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <span className="text-sm font-body text-white/80">{`// ${t("method.label")}`}</span>
        <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em] max-w-4xl">
          {t("method.title")} <RotatingWord words={t("method.rotating").split("|")} interval={3400} className="font-semibold" />
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("method.subtitle")}
        </p>

        {/* Timeline */}
        <div ref={lineRef} className="relative mt-20 md:mt-28">
          {/* Riel base + línea que se dibuja con el scroll */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#0F76D6] via-[#26BDF0] to-[#C2FBFF] md:-translate-x-1/2"
          />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const details = t(step.detailsKey).split(",");
              const left = i % 2 === 0; // en md+: pasos alternan lado
              return (
                <div key={step.number} className="relative md:grid md:grid-cols-2 md:gap-20">
                  {/* Nodo sobre la línea */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-5 md:left-1/2 top-1 -translate-x-1/2 z-10"
                  >
                    <span className="liquid-glass rounded-xl w-11 h-11 flex items-center justify-center shadow-[0_0_25px_rgba(38,189,240,0.35)] bg-black/50">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </span>
                  </motion.div>

                  {/* Contenido del paso */}
                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative pl-16 md:pl-0 ${
                      left
                        ? "md:col-start-1 md:text-right md:pr-16"
                        : "md:col-start-2 md:text-left md:pl-16"
                    }`}
                  >
                    {/* Número fantasma gigante */}
                    <span
                      aria-hidden
                      className={`pointer-events-none select-none absolute -top-12 font-heading font-semibold text-white/[0.05] text-[7rem] md:text-[10rem] leading-none ${
                        left ? "md:right-16 right-0" : "md:left-16 right-0 md:right-auto"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span className="font-mono text-xs text-[#26BDF0]">{`Paso ${step.number}`}</span>
                    <h3 className="mt-3 font-heading font-medium text-white text-3xl md:text-5xl tracking-[-0.024em] leading-[1.05]">
                      {t(step.titleKey)}
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-white/80 font-body font-light leading-relaxed max-w-md md:max-w-none">
                      {t(step.descKey)}
                    </p>

                    {/* Detalles como chips */}
                    <div className={`mt-6 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                      {details.map((detail) => (
                        <span
                          key={detail}
                          className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap"
                        >
                          {detail.trim()}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
