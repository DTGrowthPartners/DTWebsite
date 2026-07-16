import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { ArrowUpRight, ArrowRight, TrendingUp, Code, Zap, MessageCircle, Heart, Send, MoreHorizontal } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import RotatingWord from "@/components/effects/RotatingWord";
import fondoHorizontal from "@/assets/fondo-horizontal.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0";

const PANELS = 5; // intro + 4 servicios

/* ─── Motivos decorativos por servicio ─────────────────────────── */

// 01 · Meta Ads — preview real de campaña: anuncio en Instagram → lead en WhatsApp
const PhoneFrame = ({ children }: { children: ReactNode }) => (
  <div className="relative rounded-[1.3rem] bg-black/85 border border-white/20 p-[6px] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
    <div className="relative rounded-[0.95rem] overflow-hidden bg-black aspect-[9/16]">
      {children}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 h-1.5 w-1.5 rounded-full bg-black ring-1 ring-white/25" />
    </div>
  </div>
);

const InstagramAdPreview = () => (
  <div className="absolute inset-0 bg-white flex flex-col font-body">
    <div className="flex items-center justify-between px-2.5 pt-3 pb-1.5">
      <span className="text-[11px] font-semibold tracking-tight text-neutral-900">Instagram</span>
      <div className="flex items-center gap-2 text-neutral-900">
        <Heart className="h-3 w-3" strokeWidth={1.7} />
        <Send className="h-3 w-3" strokeWidth={1.7} />
      </div>
    </div>
    <div className="flex items-center gap-1.5 px-2 pb-1.5">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0F76D6] text-white text-[7px] font-semibold">
        DT
      </span>
      <div className="leading-tight">
        <div className="text-[8px] font-semibold text-neutral-900">dtgrowthpartners</div>
        <div className="text-[6.5px] text-neutral-500">Publicidad</div>
      </div>
      <MoreHorizontal className="ml-auto h-3 w-3 text-neutral-500" />
    </div>
    <div className="relative flex-1 min-h-0 overflow-hidden">
      <img src={heroVisual} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 p-1.5">
        <span className="text-[7.5px] font-medium text-white leading-tight block">
          Escala tu negocio con datos
        </span>
      </div>
    </div>
    <div className="flex items-center justify-between bg-[#0F76D6] px-2.5 py-1.5">
      <span className="text-[8px] font-medium text-white">Enviar mensaje</span>
      <span className="text-[8px] text-white">›</span>
    </div>
    <div className="px-2 py-1.5 leading-tight">
      <div className="flex items-center gap-1.5 text-neutral-900 pb-0.5">
        <Heart className="h-2.5 w-2.5" strokeWidth={1.7} />
        <MessageCircle className="h-2.5 w-2.5" strokeWidth={1.7} />
        <Send className="h-2.5 w-2.5" strokeWidth={1.7} />
      </div>
      <span className="text-[7px] font-semibold text-neutral-900">1.284 Me gusta</span>
    </div>
  </div>
);

const WhatsAppLeadPreview = () => (
  <div className="absolute inset-0 bg-[#EFE7DC] flex flex-col font-body">
    <div className="flex items-center gap-1.5 bg-[#075E54] px-2 pt-3 pb-1.5 text-white">
      <span aria-hidden className="text-[11px] leading-none">‹</span>
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/90 text-[#075E54] text-[7px] font-semibold">
        L
      </span>
      <div className="flex-1 leading-tight min-w-0">
        <div className="text-[8px] font-medium truncate">Laura G.</div>
        <div className="text-[6.5px] text-white/70">en línea</div>
      </div>
      <MoreHorizontal className="h-3 w-3" />
    </div>
    <div className="mx-auto mt-2 rounded-[5px] bg-white/90 px-1.5 py-0.5 text-[6px] text-neutral-500">
      Lead desde tu anuncio en Meta
    </div>
    <div className="flex-1 flex flex-col px-2 pt-2 gap-1 overflow-hidden">
      <div className="max-w-[88%] self-start rounded-[7px] rounded-tl-[2px] bg-white p-1.5 text-[7.5px] text-neutral-800 leading-snug">
        Hola, vi su anuncio en Instagram 👋 ¿Aún está la promo?
        <span className="block text-right text-[5.5px] text-neutral-400 mt-0.5">10:24</span>
      </div>
      <div className="max-w-[88%] self-start rounded-[7px] bg-white p-1.5 text-[7.5px] text-neutral-800 leading-snug">
        ¿Cómo puedo agendar?
        <span className="block text-right text-[5.5px] text-neutral-400 mt-0.5">10:25</span>
      </div>
      <div className="max-w-[88%] self-end rounded-[7px] rounded-tr-[2px] bg-[#DCF8C6] p-1.5 text-[7.5px] text-neutral-800 leading-snug">
        ¡Claro! ¿Te sirve mañana a las 3 p.m.?
        <span className="block text-right text-[5.5px] text-neutral-400 mt-0.5">10:26 ✓✓</span>
      </div>
    </div>
    <div className="flex items-center gap-1 p-1.5">
      <div className="flex-1 rounded-full bg-white px-2 py-1 text-[7px] text-neutral-400">Mensaje</div>
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
        <Send className="h-2.5 w-2.5" strokeWidth={1.8} />
      </span>
    </div>
  </div>
);

const MotifAds = () => (
  <div className="relative w-[290px] h-[330px]">
    {/* Anuncio en Instagram */}
    <div className="absolute left-0 top-0 w-[150px] -rotate-6 animate-float" style={{ animationDuration: "6s" }}>
      <PhoneFrame>
        <InstagramAdPreview />
      </PhoneFrame>
    </div>
    {/* Conversación del lead en WhatsApp */}
    <div className="absolute right-0 top-10 w-[150px] rotate-6 animate-float" style={{ animationDuration: "5s", animationDelay: "0.9s" }}>
      <PhoneFrame>
        <WhatsAppLeadPreview />
      </PhoneFrame>
    </div>
    {/* Conector: del anuncio al lead */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 liquid-glass rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/90 z-10">
      Lead →
    </div>
  </div>
);

// 02 · Desarrollo Web — editor de código + terminal con deploy en vivo
const MotifBrowser = () => (
  <div className="w-[250px] md:w-[300px] animate-float" style={{ animationDuration: "6s" }}>
    {/* Editor */}
    <div className="liquid-glass rounded-xl overflow-hidden bg-black/40">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/25" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[8px] tracking-[0.1em] text-white/50">tu-negocio.tsx</span>
      </div>
      <pre className="p-3 text-[9px] md:text-[10px] leading-[1.7] font-mono text-white/80 whitespace-pre">
        <span className="text-[#26BDF0]">const</span> <span className="text-white">web</span> ={" "}
        <span className="text-[#26BDF0]">await</span> <span className="text-[#C2FBFF]">dt</span>.
        <span className="text-[#C2FBFF]">construir</span>({"{"}
        {"\n"}  objetivo: <span className="text-[#7dd3fc]">"convertir"</span>,
        {"\n"}  stack: [<span className="text-[#7dd3fc]">"react"</span>, <span className="text-[#7dd3fc]">"node"</span>],
        {"\n"}  seo: <span className="text-[#26BDF0]">true</span>,
        {"\n"}{"}"});
      </pre>
    </div>

    {/* Terminal */}
    <div className="liquid-glass rounded-xl overflow-hidden bg-black/50 mt-2.5 -ml-4 md:-ml-6 mr-4 md:mr-6">
      <div className="px-3 py-2 font-mono text-[9px] md:text-[10px] leading-[1.8] text-white/75">
        <div>
          <span className="text-[#26BDF0]">$</span> npm run deploy
        </div>
        <div className="animate-pulse" style={{ animationDuration: "2.6s" }}>
          <span className="text-[#26BDF0]">✓</span> build <span className="text-white/45">8.2s</span>
        </div>
        <div>
          <span className="text-[#26BDF0]">✓</span> live → <span className="text-[#C2FBFF]">tunegocio.com</span>
          <span className="motif-caret inline-block w-[6px] h-[11px] bg-[#26BDF0] align-middle ml-1.5" />
        </div>
      </div>
    </div>
  </div>
);

// 03 · Automatizaciones & IA — circuito de nodos conectados
const MotifFlow = () => (
  <svg
    width="250"
    height="170"
    viewBox="0 0 250 170"
    fill="none"
    className="animate-float"
    style={{ animationDuration: "7s" }}
    aria-hidden
  >
    <path className="motif-dash" d="M52 46 H125 V124 H198" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeDasharray="4 6" />
    <path className="motif-dash" style={{ animationDuration: "2s" }} d="M52 124 H90 V46 H198" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="4 6" />
    {[
      { x: 28, y: 24, active: false },
      { x: 28, y: 102, active: false },
      { x: 174, y: 24, active: false },
      { x: 174, y: 102, active: true },
    ].map((n, i) => (
      <g key={i}>
        <rect
          x={n.x}
          y={n.y}
          width="46"
          height="44"
          rx="12"
          fill={n.active ? "rgba(15,118,214,0.35)" : "rgba(255,255,255,0.05)"}
          stroke={n.active ? "rgba(38,189,240,0.9)" : "rgba(255,255,255,0.25)"}
          strokeWidth="1.4"
        />
        <circle
          className={n.active ? "motif-node" : undefined}
          cx={n.x + 23}
          cy={n.y + 22}
          r="4.5"
          fill={n.active ? "#26BDF0" : "rgba(255,255,255,0.45)"}
        />
      </g>
    ))}
  </svg>
);

// 04 · Chatbots — cabeza de robot con antena y burbuja escribiendo
const MotifBot = () => (
  <div className="relative animate-float" style={{ animationDuration: "5.5s" }}>
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-px h-5 bg-white/30" />
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#26BDF0]" />
    <div className="liquid-glass rounded-2xl w-28 h-24 md:w-32 md:h-28 flex items-center justify-center gap-5">
      <span className="motif-eye w-3 h-6 rounded-full bg-white/85" />
      <span className="motif-eye w-3 h-6 rounded-full bg-white/85" />
    </div>
    <div className="absolute -right-14 -top-8 liquid-glass rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
    </div>
    <div className="absolute -left-12 -bottom-5 liquid-glass rounded-2xl rounded-br-sm px-3 py-2 text-[10px] text-white/80 font-body">
      24/7
    </div>
  </div>
);

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
      Motif: MotifAds,
    },
    {
      icon: Code,
      num: "02",
      titleKey: "services.webDev",
      descKey: "services.webDevDesc",
      highlightsKey: "services.webDevHighlights",
      path: "/servicios/desarrollo-web",
      external: false,
      Motif: MotifBrowser,
    },
    {
      icon: Zap,
      num: "03",
      titleKey: "services.automation",
      descKey: "services.automationDesc",
      highlightsKey: "services.automationHighlights",
      path: "/servicios/sistemas-automatizaciones",
      external: false,
      Motif: MotifFlow,
    },
    {
      icon: MessageCircle,
      num: "04",
      titleKey: "services.chatbots",
      descKey: "services.chatbotsDesc",
      highlightsKey: "services.chatbotsHighlights",
      path: WHATSAPP,
      external: true,
      Motif: MotifBot,
    },
  ];

  // Tarjeta de servicio — grande, con blur fuerte (liquid-glass-strong)
  const ServiceCard = ({ s }: { s: (typeof services)[number] }) => {
    const Icon = s.icon;
    const tags = t(s.highlightsKey).split(",").map((x) => x.trim()).filter(Boolean).slice(0, 4);
    const Motif = s.Motif;
    const inner = (
      <div className="liquid-glass-strong rounded-[2rem] p-7 md:p-14 w-full max-w-4xl flex flex-col min-h-[440px] md:min-h-[560px] text-left">
        {/* Motivo decorativo del servicio */}
        <div className="pointer-events-none absolute right-8 md:right-16 top-[46%] -translate-y-1/2 hidden sm:block opacity-90">
          <Motif />
        </div>

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
      <h2 className="font-heading font-normal text-white text-6xl md:text-7xl lg:text-[7rem] leading-[1.02] tracking-[-0.024em]">
        {t("services.title")}
        <br />
        <RotatingWord words={t("services.rotating").split("|")} interval={3100} className="font-semibold" />
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
      {/* Franjas de fundido: entra desde negro (hero) y sale hacia la sección de casos */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black to-transparent z-[2]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07060F] to-transparent z-[2]" />
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
