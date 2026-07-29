import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Workflow, LineChart, Bot, ArrowRight, ArrowUpRight, Quote, Slack, FileText } from "lucide-react";
import { siGmail, siWhatsapp, siShopify, siHubspot } from "simple-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import tChatCrm from "@/assets/webs/chatcrm-tile.webp";
import tSoftware from "@/assets/webs/software-tile.webp";
import tCobraflow from "@/assets/webs/cobraflow-tile.webp";
import tVcc from "@/assets/webs/vcc-tile.webp";
import tAcbApp from "@/assets/webs/acbapp-tile.webp";
import tEquilibrioLaser from "@/assets/webs/equilibrio-laser-tile.webp";
import dairoImg from "@/assets/equipo/dairo.png";

const WA = (text: string) => `https://wa.me/573007189383?text=${encodeURIComponent(text)}`;
const WA_MAIN = WA("Hola DT Growth Partners, quiero automatizar mi negocio");

// Marquee de sistemas y webs reales (duplicado en JSX para el bucle)
const MARQUEE_IMAGES = [tChatCrm, tSoftware, tCobraflow, tVcc, tAcbApp, tEquilibrioLaser];

const AUTOMATIONS = [
  {
    icon: Workflow,
    title: "Operaciones & Workflows",
    description: "Automatiza procesos repetitivos y flujos de trabajo entre tus herramientas.",
    examples: ["Onboarding automático", "Procesamiento de pedidos", "Gestión de tickets", "Task routing"],
  },
  {
    icon: LineChart,
    title: "Marketing & Sales",
    description: "Automatización de campañas, lead nurturing y procesos de venta.",
    examples: ["Lead scoring", "Email sequences", "CRM sync", "Campaign triggers"],
  },
  {
    icon: Bot,
    title: "Reportes & Analytics",
    description: "Dashboards automáticos y reportes periódicos sin trabajo manual.",
    examples: ["Daily reports", "KPI tracking", "Multi-platform analytics", "Alertas a Slack/Email"],
  },
];

const BENEFITS = [
  { value: 20, prefix: "+", suffix: "", label: "Horas ahorradas por semana" },
  { value: 60, prefix: "", suffix: "%", label: "Reducción en errores" },
  { value: 3, prefix: "", suffix: "x", label: "Velocidad de operación" },
];

const SYSTEMS = [
  {
    name: "ChatSuite",
    description: "Todos tus canales de mensajería en un solo lugar, con automatizaciones inteligentes y análisis en tiempo real.",
    img: tChatCrm,
  },
  {
    name: "DTOS",
    description: "El sistema operativo empresarial: dashboards, datos en tiempo real y control total de tu operación.",
    img: tSoftware,
  },
];

const PROCESS = [
  { step: "01", title: "Análisis de procesos", description: "Auditamos tus procesos y detectamos oportunidades claras de automatización.", duration: "1 semana" },
  { step: "02", title: "Diseño de sistema", description: "Arquitectura, flujos y estructura de datos alineada a tus objetivos.", duration: "3-5 días" },
  { step: "03", title: "Implementación", description: "Construimos e integramos los flujos, probando cada caso antes de activarlo.", duration: "2-4 semanas" },
  { step: "04", title: "Training & handoff", description: "Entrenamos a tu equipo y entregamos documentación para operar sin nosotros.", duration: "1 semana" },
];

const FAQS = [
  {
    question: "¿Qué tipo de procesos se pueden automatizar?",
    answer:
      "Prácticamente cualquier proceso repetitivo: gestión de leads, procesamiento de datos, reportes, sincronización entre herramientas, onboarding, facturación, y mucho más. Si lo haces más de una vez por semana, probablemente se puede automatizar.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Nos encargamos de todo el setup y te entrenamos en el manejo del sistema. La mayoría de automatizaciones que creamos no requieren conocimientos técnicos para operar.",
  },
  {
    question: "¿Qué herramientas utilizan?",
    answer:
      "Principalmente Zapier, Make (Integromat), n8n, y desarrollo custom cuando es necesario. Nos adaptamos a las herramientas que ya usas: HubSpot, Salesforce, Slack, Google Suite, Notion, Airtable, etc.",
  },
  {
    question: "¿Cuál es el ROI típico?",
    answer:
      "La mayoría de nuestros clientes recuperan su inversión en 2-4 meses a través de ahorro de tiempo. Un empleado que ahorra 10 horas semanales representa +$20K USD anuales en valor recuperado.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* CTA con estela: miniaturas de las apps que automatizamos nacen bajo el
   cursor con rotación pseudo-aleatoria y se desvanecen (patrón Viktor Oddy). */
const TRAIL_ICONS: Array<{ glyph?: { path: string; hex: string }; Icon?: typeof Slack; color?: string }> = [
  { glyph: siGmail },
  { glyph: siWhatsapp },
  { glyph: siShopify },
  { Icon: Slack, color: "#E01E5A" },
  { glyph: siHubspot },
  { Icon: FileText, color: "#ff6b6b" },
];

const TrailCTA = () => {
  const [chips, setChips] = useState<Array<{ id: number; x: number; y: number; rot: number; i: number }>>([]);
  const lastSpawn = useRef(0);
  const counter = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 90) return;
    lastSpawn.current = now;
    const r = e.currentTarget.getBoundingClientRect();
    const id = ++counter.current;
    const rot = (id % 2 ? 1 : -1) * (4 + ((id * 7) % 9));
    setChips((c) => [...c.slice(-14), { id, x: e.clientX - r.left, y: e.clientY - r.top, rot, i: id % TRAIL_ICONS.length }]);
    window.setTimeout(() => setChips((c) => c.filter((x) => x.id !== id)), 1000);
  };

  return (
    <div
      onMouseMove={onMove}
      className="relative overflow-hidden liquid-glass rounded-[2.5rem] bg-[#0a0918]/60 px-8 py-32 md:py-48 text-center"
    >
      {chips.map((c) => {
        const spec = TRAIL_ICONS[c.i];
        return (
          <span key={c.id} className="pointer-events-none absolute z-[1] -translate-x-1/2 -translate-y-1/2" style={{ left: c.x, top: c.y }}>
            <span className="animate-trail-pop liquid-glass flex h-12 w-12 items-center justify-center rounded-xl bg-black/50" style={{ rotate: `${c.rot}deg` }}>
              {spec.glyph ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill={`#${spec.glyph.hex}`} aria-hidden>
                  <path d={spec.glyph.path} />
                </svg>
              ) : spec.Icon ? (
                <spec.Icon className="h-5 w-5" style={{ color: spec.color }} strokeWidth={1.6} />
              ) : null}
            </span>
          </span>
        );
      })}

      <div className="relative z-10 flex flex-col items-center">
        <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-5xl md:text-7xl lg:text-8xl tracking-[-0.024em] leading-[1.02]">
          Automatiza <span className="serif-accent text-[#C2FBFF]">con nosotros</span>
        </motion.h2>
        {/* Píldora con avatar, como la referencia */}
        <motion.a
          {...fadeUp(0.2)}
          href={WA_MAIN}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-white pl-2 pr-7 py-2 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04] shadow-[0_10px_40px_rgba(38,189,240,0.25)]"
        >
          <img src={dairoImg} alt="Dairo Traslaviña" className="w-10 h-10 rounded-full object-cover" />
          Agenda un diagnóstico con Dairo
        </motion.a>
      </div>
    </div>
  );
};

/* Píldora flotante inferior (referencia): aparece tras el hero */
const BottomPill = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="liquid-glass rounded-full bg-[#07060F]/70 pl-5 pr-2 py-2 flex items-center gap-4">
        <span className="serif-accent text-white text-xl leading-none">DT</span>
        <a
          href={WA_MAIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
        >
          Agendar diagnóstico
        </a>
      </div>
    </div>
  );
};

const SistemasAutomatizaciones = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Automatizaciones e IA para Empresas en Cartagena | DT Growth Partners"
        description="Automatiza tu negocio con IA. Flujos, chatbots y agentes inteligentes para empresas en Cartagena. Trabaja menos, crece más."
        canonical="https://dtgrowthpartners.com/servicios/sistemas-automatizaciones"
      />
      <Navigation />

      <main className="bg-[#07060F]">
        {/* Hero — columna estrecha y centrada (referencia Viktor Oddy) */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-4">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-[0%] left-[10%] w-[520px] h-[520px] opacity-25" },
              { color: "blue", className: "top-[20%] right-[8%] w-[540px] h-[540px] opacity-25", delay: "-6s" },
            ]}
          />
          <div className="relative z-10 max-w-[560px] mx-auto px-6 text-center flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0]"
            >
              {"// Automatizaciones & IA de DT Growth Partners"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-heading font-normal text-white text-[2.4rem] md:text-[3.2rem] leading-[1.08] tracking-[-0.025em]"
            >
              Trabaja <span className="serif-accent text-[#C2FBFF]">menos</span>,
              <br />
              crece <span className="serif-accent text-[#C2FBFF]">más</span>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-col gap-5 text-sm md:text-base text-white/80 font-body font-light leading-relaxed"
            >
              <p>
                Construimos flujos, chatbots y agentes de IA que conectan tus herramientas y ejecutan lo repetitivo por ti: leads, pedidos, reportes, seguimientos.
              </p>
              <p>
                El equipo es deliberadamente pequeño. Diseñamos cada sistema a la medida de tu operación, con la misma infraestructura que usamos para operar nuestros propios productos.
              </p>
              <p className="text-white/60">El ROI típico llega en 2 a 4 meses.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-black font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-[0_8px_30px_rgba(38,189,240,0.2)]"
              >
                Agendar diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => document.getElementById("sistemas")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm md:text-base font-medium text-white font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] bg-black/30"
              >
                Ver sistemas
              </button>
            </motion.div>
          </div>
        </section>

        {/* Marquee full-width de sistemas y webs reales (referencia) */}
        <section className="relative mt-14 md:mt-20 mb-6 overflow-hidden">
          <motion.div {...fadeUp(0)} className="marquee-mask overflow-hidden">
            <div className="flex w-max items-center animate-marquee" style={{ "--marquee-duration": "48s" } as React.CSSProperties}>
              {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  loading={i < 6 ? "eager" : "lazy"}
                  className="h-[220px] md:h-[380px] w-auto max-w-none object-cover mx-3 rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Cita con autor y foto (patrón del quote de la referencia) */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
            <motion.span {...fadeUp(0)}>
              <Quote className="h-6 w-6 text-[#26BDF0]" strokeWidth={1.6} />
            </motion.span>
            <motion.blockquote
              {...fadeUp(0.1)}
              className="mt-6 font-heading font-normal text-white text-[2rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.024em]"
            >
              Si lo haces más de una vez por semana, <span className="serif-accent text-[#C2FBFF]">se puede automatizar</span>.
            </motion.blockquote>
            <motion.p {...fadeUp(0.2)} className="mt-5 text-sm text-white/60 font-body italic">
              — Dairo Traslaviña, fundador
            </motion.p>
            <motion.img
              {...fadeUp(0.3)}
              src={dairoImg}
              alt="Dairo Traslaviña"
              className="mt-8 w-full max-w-[220px] rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </section>

        {/* Beneficios — contadores centrados */}
        <section className="relative py-14 md:py-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {BENEFITS.map((b, i) => (
                <motion.div key={b.label} {...fadeUp(i * 0.1)}>
                  <div className="font-heading font-medium text-white text-4xl md:text-5xl tracking-[-0.02em] leading-none">
                    <AnimatedCounter value={b.value} prefix={b.prefix} suffix={b.suffix} duration={1.8} />
                  </div>
                  <div className="text-xs md:text-sm text-white/65 font-body font-light mt-2.5">{b.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué automatizamos — cards con spotlight */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <Aurora
            blobs={[{ color: "blue", className: "top-[15%] left-[-140px] w-[540px] h-[540px] opacity-25", delay: "-4s" }]}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-3xl md:text-5xl leading-[1.05] tracking-[-0.024em] text-center">
              Tu operación en <span className="serif-accent text-[#C2FBFF]">piloto automático</span>
            </motion.h2>

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {AUTOMATIONS.map((a, index) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.title}
                    {...fadeUp(index * 0.12)}
                    className="group liquid-glass rounded-[1.25rem] p-7 bg-[#0a0918]/60"
                    onMouseMove={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
                      e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
                    }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(320px circle at var(--sx,50%) var(--sy,50%), rgba(38,189,240,0.14), transparent 65%)",
                      }}
                    />
                    <span className="liquid-glass rounded-xl w-12 h-12 flex items-center justify-center bg-black/40">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-heading font-medium text-white text-xl tracking-[-0.01em] leading-tight">{a.title}</h3>
                    <p className="mt-2.5 text-sm text-white/70 font-body font-light">{a.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                      {a.examples.map((ex) => (
                        <span key={ex} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sistemas — stack vertical con texto desplazado (patrón projects) */}
        <section id="sistemas" className="relative py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col gap-16 md:gap-24">
            {SYSTEMS.map((s) => (
              <div key={s.name}>
                <motion.div {...fadeUp(0)} className="ml-6 md:ml-28 max-w-xl">
                  <h3 className="font-heading font-medium text-white text-2xl md:text-4xl tracking-[-0.02em]">
                    <span className="serif-accent text-[#C2FBFF]">{s.name}</span>
                  </h3>
                  <p className="mt-2.5 text-sm md:text-base text-white/70 font-body font-light">{s.description}</p>
                </motion.div>
                <motion.img
                  {...fadeUp(0.15)}
                  src={s.img}
                  alt={`${s.name} — sistema desarrollado por DT Growth Partners`}
                  loading="lazy"
                  className="mt-6 w-full rounded-2xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Pricing — par de tarjetas oscura + blanca (patrón de la referencia) */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl md:ml-auto">
              {/* Tarjeta oscura: partnership mensual */}
              <motion.div {...fadeUp(0.1)} className="liquid-glass rounded-[2.5rem] bg-[#0a0918]/70 pl-10 pr-10 md:pr-16 pt-10 pb-10">
                <h3 className="font-heading font-medium text-white text-[22px]">Partnership mensual</h3>
                <p className="mt-2 text-sm text-white/65 font-body font-light">
                  Automatización continua de tu operación.
                  <br />
                  Trabajas directo con el equipo DT.
                </p>
                <div className="mt-8 font-heading font-medium text-white text-3xl tracking-[-0.02em]">
                  +20 h<span className="text-white/50 text-xl">/semana</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45 mt-1.5">Recuperadas típicamente</div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_MAIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
                  >
                    Empezar
                  </a>
                  <a
                    href={WA("Hola! Quiero saber cómo funciona el acompañamiento mensual de automatizaciones")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white font-body bg-black/30 transition-transform duration-300 hover:scale-[1.04]"
                  >
                    Cómo funciona
                  </a>
                </div>
              </motion.div>

              {/* Tarjeta blanca: proyecto puntual */}
              <motion.div {...fadeUp(0.2)} className="rounded-[2.5rem] bg-white shadow-[0_10px_60px_rgba(194,251,255,0.12)] pl-10 pr-10 md:pr-16 pt-10 pb-10">
                <h3 className="font-heading font-medium text-[#07060F] text-[22px]">Proyecto puntual</h3>
                <p className="mt-2 text-sm text-[#07060F]/60 font-body font-light">
                  Alcance fijo, timeline fijo.
                  <br />
                  Mismo equipo, mismos estándares.
                </p>
                <div className="mt-8 font-heading font-medium text-[#07060F] text-3xl tracking-[-0.02em]">
                  2–4 <span className="text-[#07060F]/50 text-xl">meses</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#07060F]/45 mt-1.5">ROI típico del proyecto</div>
                <div className="mt-8">
                  <a
                    href={WA("Hola! Quiero cotizar un proyecto puntual de automatización")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#07060F] px-6 py-3 text-sm font-medium text-white font-body transition-transform duration-300 hover:scale-[1.04]"
                  >
                    Cotizar proyecto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proceso — 4 pasos compactos */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <Aurora
            blobs={[{ color: "cyan", className: "bottom-[10%] right-[-120px] w-[500px] h-[500px] opacity-20", delay: "-6s" }]}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-3xl md:text-5xl leading-[1.05] tracking-[-0.024em] text-center">
              De lo manual a lo <span className="serif-accent text-[#C2FBFF]">automático</span>
            </motion.h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROCESS.map((p, index) => (
                <motion.div
                  key={p.step}
                  {...fadeUp((index % 4) * 0.1)}
                  className="relative liquid-glass rounded-[1.25rem] p-6 bg-[#0a0918]/50 overflow-hidden"
                >
                  <span aria-hidden className="pointer-events-none select-none absolute -top-4 right-1 font-heading font-semibold text-white/[0.06] text-[5rem] leading-none">
                    {p.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Paso {p.step}</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-lg leading-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{p.description}</p>
                  <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{p.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios (componente de la casa) */}
        <TestimonialsSection />

        {/* FAQ — encabezado sticky */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[minmax(280px,380px)_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-body text-white/80">{"// FAQ"}</span>
              <h2 className="mt-5 font-heading font-normal text-white text-3xl md:text-4xl leading-[1.05] tracking-[-0.024em]">
                Antes de <span className="serif-accent text-[#C2FBFF]">automatizar</span>
              </h2>
              <a
                href={WA("Hola! Tengo una pregunta sobre automatizaciones.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white font-body group"
              >
                Pregúntanos por WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#26BDF0]" />
              </a>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, index) => (
                <motion.div key={index} {...fadeUp(0.04 * (index % 4))}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="liquid-glass rounded-xl px-6 bg-[#0a0918]/50 border-none">
                      <AccordionTrigger className="text-left py-4 hover:no-underline gap-4">
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] text-[#26BDF0] shrink-0">{String(index + 1).padStart(2, "0")}</span>
                          <span className="font-heading font-medium text-white text-base">{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 font-body font-light text-sm pb-5 pl-9">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA con estela de apps bajo el cursor */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 max-w-[1300px] mx-auto px-6">
            <TrailCTA />
          </div>
        </section>

        <ContactFormSection />
      </main>

      <BottomPill />
      <Footer />
    </div>
  );
};

export default SistemasAutomatizaciones;
