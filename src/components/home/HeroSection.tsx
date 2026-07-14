import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0";

const HeroSection = () => {
  const { t } = useLanguage();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDrawn(true), 450);
    return () => clearTimeout(id);
  }, []);

  const stats = [
    { value: "$250K", label: t("common.managedAds") },
    { value: "25+", label: t("common.completedProjects") },
    { value: "10x", label: t("common.averageROI") },
    { value: "+5M USD", label: t("common.salesGenerated") },
  ];

  // Reveal escalonado de las líneas del titular (firma QClay)
  const line = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 0.9, delay: 0.15 + i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden grain bg-background">
      {/* Atmósfera: glow radial de marca + rejilla sutil */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />

      {/* Firma: curva de crecimiento que se dibuja sola */}
      <svg
        className="pointer-events-none absolute -right-10 bottom-[12%] w-[75vw] max-w-[1100px] opacity-70"
        viewBox="0 0 600 300"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="growth" x1="0" y1="300" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(var(--electric))" />
            <stop offset="0.55" stopColor="hsl(var(--cyan))" />
            <stop offset="1" stopColor="hsl(var(--ice))" />
          </linearGradient>
        </defs>
        <path
          d="M0 280 C 140 270, 210 250, 300 190 S 470 60, 600 20"
          stroke="url(#growth)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          className={`draw-line ${drawn ? "is-drawn" : ""}`}
        />
        <circle
          cx="600"
          cy="20"
          r="5"
          fill="hsl(var(--ice))"
          className={`transition-opacity duration-500 ${drawn ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.5s" }}
        />
      </svg>

      <div className="shell relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-14 md:pt-32">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="h-px w-8 bg-primary/70" />
          {t("hero.growthEngine")}
        </motion.div>

        {/* Titular gigante con reveal por línea */}
        <h1 className="display mt-6 text-[2rem] sm:text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] text-foreground">
          {[
            <>{t("hero.scaleWithScience.before").trim()}</>,
            <>
              <span className="gradient-text">{t("hero.scaleWithScience.highlight")}</span>
              {t("hero.scaleWithScience.after")}
            </>,
          ].map((content, i) => (
            <span key={i} className="block overflow-hidden py-[0.05em]">
              <motion.span className="block" variants={line} custom={i} initial="hidden" animate="show">
                {content}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Descripción */}
        <motion.p
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
        >
          {t("hero.scaleDescription")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
          >
            {t("hero.consultation")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/#casos"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {t("hero.seeCases")}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Lectura de datos (mono) */}
        <motion.div className="mt-16 md:mt-20" variants={fade} custom={2} initial="hidden" animate="show">
          <div className="rule-brand mb-6" />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-foreground md:text-4xl">{s.value}</dt>
                <dd className="eyebrow mt-2 normal-case tracking-[0.15em] text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
