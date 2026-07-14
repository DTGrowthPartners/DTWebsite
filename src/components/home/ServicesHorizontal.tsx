import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { ArrowUpRight, ArrowRight, TrendingUp, Code, Zap, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import fondoHorizontal from "@/assets/fondo-horizontal.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0";

const PANELS = 5; // intro + 4 servicios

/**
 * Panel con animación propia ligada al progreso del scroll: la tarjeta
 * escala, aparece y rota levemente cuando su panel pasa por el centro.
 */
const Panel = ({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
}) => {
  const center = index / (PANELS - 1);
  const range = 0.16;
  const scale = useTransform(progress, [center - range, center, center + range], [0.82, 1, 0.82]);
  const opacity = useTransform(progress, [center - range, center, center + range], [0.25, 1, 0.25]);
  const rotate = useTransform(progress, [center - range, center + range], [2, -2]);

  return (
    <div className="w-screen h-full shrink-0 flex items-center justify-center px-5 md:px-16">
      <motion.div style={{ scale, opacity, rotate }} className="w-full flex justify-center will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

const ServicesHorizontal = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(PANELS - 1) * 100}vw`]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const services = [
    {
      icon: TrendingUp,
      num: "01",
      titleKey: "services.metaAds",
      descKey: "services.metaAdsDesc",
      highlightsKey: "services.metaAdsHighlights",
      path: "/servicios/meta-ads",
      external: false,
    },
    {
      icon: Code,
      num: "02",
      titleKey: "services.webDev",
      descKey: "services.webDevDesc",
      highlightsKey: "services.webDevHighlights",
      path: "/servicios/desarrollo-web",
      external: false,
    },
    {
      icon: Zap,
      num: "03",
      titleKey: "services.automation",
      descKey: "services.automationDesc",
      highlightsKey: "services.automationHighlights",
      path: "/servicios/sistemas-automatizaciones",
      external: false,
    },
    {
      icon: MessageCircle,
      num: "04",
      titleKey: "services.chatbots",
      descKey: "services.chatbotsDesc",
      highlightsKey: "services.chatbotsHighlights",
      path: WHATSAPP,
      external: true,
    },
  ];

  // Tarjeta de servicio — grande, con blur fuerte (liquid-glass-strong)
  const ServiceCard = ({ s }: { s: (typeof services)[number] }) => {
    const Icon = s.icon;
    const tags = t(s.highlightsKey).split(",").map((x) => x.trim()).filter(Boolean).slice(0, 4);
    const inner = (
      <div className="liquid-glass-strong rounded-[2rem] p-7 md:p-14 w-full max-w-4xl flex flex-col min-h-[440px] md:min-h-[560px] text-left">
        <div className="flex items-start justify-between gap-4">
          <div className="liquid-glass rounded-[1rem] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex flex-wrap justify-end gap-2 max-w-[70%]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/90 font-body whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="mt-8">
          <span className="font-mono text-sm text-white/50">{s.num}</span>
          <h3 className="mt-2 font-heading font-medium text-white text-4xl md:text-6xl lg:text-7xl tracking-[-0.024em] leading-[1.02]">
            {t(s.titleKey)}
          </h3>
          <p className="mt-5 text-base md:text-lg text-white/90 font-body font-light leading-snug max-w-[46ch]">
            {t(s.descKey)}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-base font-medium text-white font-body group-hover:gap-3 transition-all">
            {t("services.seeMore")}
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    );

    return s.external ? (
      <a href={s.path} target="_blank" rel="noopener noreferrer" className="group w-full flex justify-center">
        {inner}
      </a>
    ) : (
      <Link to={s.path} className="group w-full flex justify-center">
        {inner}
      </Link>
    );
  };

  // Panel intro (título de la sección)
  const IntroPanel = (
    <div className="flex flex-col items-start justify-center max-w-4xl w-full">
      <span className="text-sm font-body text-white/80 mb-6">{t("services.kicker")}</span>
      <h2 className="font-heading font-medium text-white text-6xl md:text-7xl lg:text-[7rem] leading-[1.02] tracking-[-0.024em]">
        {t("services.title")}
        <br />
        {t("services.titleHighlight")}
      </h2>
      <p className="mt-6 text-base md:text-lg text-white/90 font-body font-light max-w-md">
        {t("services.subtitle")}
      </p>
      <div className="mt-10 inline-flex items-center gap-3 text-sm text-white/70 font-body">
        {t("services.scrollHint")}
        <ArrowRight className="h-4 w-4 animate-pulse" />
      </div>
    </div>
  );

  // Capas de fondo compartidas (azul-púrpura profundo + video + mancha blur)
  const Background = (
    <>
      <div className="absolute inset-0 z-0" style={{ background: "hsl(260 87% 3%)" }} />
      <FadingVideo src={fondoHorizontal} className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Mancha desenfocada tras el contenido: asienta las tarjetas sobre el video */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] max-w-none h-[527px] bg-gray-950 opacity-90 blur-[82px] z-[1]" />
    </>
  );

  // Fallback accesible: stack vertical sin pin
  if (reduced) {
    return (
      <section id="servicios" className="relative py-24 overflow-hidden" style={{ background: "hsl(260 87% 3%)" }}>
        {Background}
        <div className="relative z-10 px-8 md:px-16">
          <div className="mb-16">{IntroPanel}</div>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.num} s={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicios" ref={targetRef} className="relative h-[500vh]" style={{ background: "hsl(260 87% 3%)" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {Background}

        {/* Pista horizontal */}
        <motion.div style={{ x }} className="relative z-10 flex h-full w-[500vw]">
          <Panel progress={scrollYProgress} index={0}>
            {IntroPanel}
          </Panel>
          {services.map((s, i) => (
            <Panel key={s.num} progress={scrollYProgress} index={i + 1}>
              <ServiceCard s={s} />
            </Panel>
          ))}
        </motion.div>

        {/* Progreso — el acento azul de marca vive aquí */}
        <div className="absolute bottom-6 left-8 right-8 md:left-20 md:right-20 z-20">
          <div className="h-px bg-white/15 relative overflow-visible">
            <motion.div
              style={{ scaleX: progressScale }}
              className="absolute inset-y-0 left-0 w-full origin-left"
            >
              <div className="h-px w-full bg-gradient-to-r from-[#0F76D6] via-[#26BDF0] to-[#C2FBFF]" />
            </motion.div>
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span>{t("services.kicker").replace("// ", "")}</span>
            <span>01 — 04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHorizontal;
