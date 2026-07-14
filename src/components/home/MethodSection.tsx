import { Search, Target, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Aurora from "@/components/effects/Aurora";

const MethodSection = () => {
  const { t } = useLanguage();

  // Es una secuencia real de 3 fases: la numeración 01→03 comunica el orden.
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
          {t("method.title")} <span className="font-semibold">{t("method.titleHighlight")}</span>
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("method.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((step) => {
            const Icon = step.icon;
            const details = t(step.detailsKey).split(",");
            return (
              <div
                key={step.number}
                className="liquid-glass rounded-[1.25rem] p-6 md:p-8 flex flex-col min-h-[340px] relative overflow-hidden"
              >
                {/* Número gigante de fondo */}
                <span
                  aria-hidden
                  className="absolute -top-6 right-2 font-heading text-white/[0.06] text-[9rem] leading-none select-none"
                >
                  {step.number}
                </span>

                <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex-1" />

                <div className="mt-8 relative z-10">
                  <span className="font-mono text-xs text-white/50">{`Paso ${step.number}`}</span>
                  <h3 className="mt-2 font-heading text-white text-3xl md:text-4xl tracking-[-0.02em] leading-none">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug">
                    {t(step.descKey)}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-center text-xs text-white/70 font-body">
                        <span className="w-1 h-1 bg-white/60 rounded-full mr-3 shrink-0" />
                        {detail.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
