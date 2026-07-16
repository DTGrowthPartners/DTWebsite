import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, BarChart3, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import RotatingWord from "@/components/effects/RotatingWord";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import fondoVideo from "@/assets/fondo-video.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0";

// Entrada estándar: blur + subida, easeOut
const enter = (delay: number) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  // Titular compuesto: palabras estáticas + slot rotativo (ciencia|datos|IA|estrategia)
  const beforeWords = t("hero.scaleWithScience.before").trim().split(" ");
  const afterWords = t("hero.scaleWithScience.after").replace(/^[,\s]+/, "").split(" ");
  const rotatingWords = t("hero.rotatingWords").split("|");

  const wordEnter = (i: number) => ({
    initial: reduced ? undefined : { filter: "blur(10px)", opacity: 0, y: 40 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.5 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  });

  const stats = [
    { icon: BarChart3, value: "$250K", label: t("common.managedAds") },
    { icon: TrendingUp, value: "+5M USD", label: t("common.salesGenerated") },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Video de fondo 120%, anclado arriba, sin overlay: el contraste lo da el glass */}
      <FadingVideo
        src={fondoVideo}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Franja de fundido a negro: elimina el corte con la sección siguiente */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-black z-[5]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-10 text-center">
        {/* Titular — entrada palabra por palabra + palabra rotativa en bold/degradado */}
        <h1
          className="max-w-5xl font-heading font-normal text-white text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.02] tracking-[-0.024em]"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.08em" }}
        >
          {beforeWords.map((word, i) => (
            <motion.span key={`b-${i}`} {...wordEnter(i)} className="inline-block mr-[0.26em]">
              {word}
            </motion.span>
          ))}
          <motion.span {...wordEnter(beforeWords.length)} className="inline-block mr-[0.26em]">
            <RotatingWord words={rotatingWords} className="font-semibold" innerClassName="gradient-text" />,
          </motion.span>
          {afterWords.map((word, i) => (
            <motion.span
              key={`a-${i}`}
              {...wordEnter(beforeWords.length + 1 + i)}
              className="inline-block mr-[0.26em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtítulo */}
        <motion.p
          {...enter(0.9)}
          className="mt-6 text-sm md:text-base text-white max-w-4xl font-body font-light leading-tight lg:whitespace-nowrap"
        >
          {t("hero.scaleDescription")}
        </motion.p>

        {/* CTAs */}
        <motion.div {...enter(1.1)} className="mt-8 flex items-center gap-6">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body inline-flex items-center gap-2 transition-transform duration-300 hover:scale-[1.04]"
          >
            {t("hero.consultation")}
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href="/#casos"
            className="inline-flex items-center gap-2 text-sm font-medium text-white font-body hover:opacity-80 transition-opacity"
          >
            {t("hero.seeCases")}
            <Play className="h-4 w-4 fill-current" />
          </a>
        </motion.div>

        {/* Stats — tarjetas glass */}
        <motion.div {...enter(1.3)} className="mt-10 flex items-stretch gap-3 md:gap-4 w-full max-w-md md:max-w-none md:w-auto px-2 md:px-0 justify-center">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="liquid-glass rounded-[1.25rem] p-4 md:p-5 flex-1 md:flex-none md:w-[220px] min-w-0 flex flex-col items-start text-left"
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                <div className="mt-4 font-heading text-white text-3xl md:text-4xl tracking-[-0.02em] leading-none">
                  {s.value}
                </div>
                <div className="text-xs text-white font-body font-light mt-2">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Partners — logos reales de clientes en marquee */}
      <motion.div {...enter(1.4)} className="relative z-10 flex flex-col items-center gap-5 pb-8 px-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          {t("brands.trustedBy")}
        </div>
        <PartnersMarquee />
      </motion.div>
    </section>
  );
};

export default HeroSection;
