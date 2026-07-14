import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, TrendingUp, Code, Zap, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import fondoTech from "@/assets/fondo-seccion-DT-OS2.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0";

/**
 * Sección "pineada": ocupa 500vh de scroll vertical; un viewport sticky
 * traduce ese progreso a desplazamiento horizontal de 5 paneles (intro + 4 servicios).
 * Con prefers-reduced-motion cae a un stack vertical normal.
 */
const ServicesHorizontal = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  // 5 paneles de 100vw → recorrido de -400vw
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-400vw"]);
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

  // Tarjeta glass de un servicio (compartida entre ambos layouts)
  const ServiceCard = ({ s }: { s: (typeof services)[number] }) => {
    const Icon = s.icon;
    const tags = t(s.highlightsKey).split(",").map((x) => x.trim()).filter(Boolean).slice(0, 4);
    const inner = (
      <div className="liquid-glass rounded-[1.25rem] p-6 md:p-8 w-full max-w-xl flex flex-col min-h-[340px] md:min-h-[380px] text-left">
        <div className="flex items-start justify-between gap-4">
          <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="mt-6">
          <span className="font-mono text-xs text-white/50">{s.num}</span>
          <h3 className="mt-1 font-heading italic text-white text-3xl md:text-5xl tracking-[-1px] leading-none">
            {t(s.titleKey)}
          </h3>
          <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[38ch]">
            {t(s.descKey)}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white font-body group-hover:gap-3 transition-all">
            {t("services.seeMore")}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    );

    return s.external ? (
      <a href={s.path} target="_blank" rel="noopener noreferrer" className="group">
        {inner}
      </a>
    ) : (
      <Link to={s.path} className="group">
        {inner}
      </Link>
    );
  };

  // Panel intro (título de la sección)
  const IntroPanel = (
    <div className="flex flex-col items-start justify-center h-full px-8 md:px-20 max-w-4xl">
      <span className="text-sm font-body text-white/80 mb-6">{t("services.kicker")}</span>
      <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-[-3px]">
        {t("services.title")}
        <br />
        {t("services.titleHighlight")}
      </h2>
      <p className="mt-6 text-sm md:text-base text-white/90 font-body font-light max-w-md">
        {t("services.subtitle")}
      </p>
      <div className="mt-10 inline-flex items-center gap-3 text-sm text-white/70 font-body">
        {t("services.scrollHint")}
        <ArrowRight className="h-4 w-4 animate-pulse" />
      </div>
    </div>
  );

  // Fallback accesible: stack vertical sin pin
  if (reduced) {
    return (
      <section id="servicios" className="relative bg-black py-24">
        <FadingVideo src={fondoTech} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-10 px-8 md:px-16">
          <div className="mb-16">{IntroPanel}</div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.num} s={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicios" ref={targetRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video de fondo del viewport pineado */}
        <FadingVideo src={fondoTech} className="absolute inset-0 w-full h-full object-cover z-0" />

        {/* Pista horizontal */}
        <motion.div style={{ x }} className="relative z-10 flex h-full w-[500vw]">
          <div className="w-screen h-full shrink-0">{IntroPanel}</div>
          {services.map((s) => (
            <div key={s.num} className="w-screen h-full shrink-0 flex items-center justify-center px-6 md:px-20">
              <ServiceCard s={s} />
            </div>
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
