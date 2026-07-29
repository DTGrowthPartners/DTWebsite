import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import { MotifFlow } from "@/components/home/ServicesHorizontal";
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

const WA = (text: string) => `https://wa.me/573007189383?text=${encodeURIComponent(text)}`;

// Titular del hero: palabra a palabra; g = degradado, br = salto de línea
const HERO_WORDS: Array<{ t?: string; g?: boolean; br?: boolean }> = [
  { t: "Automatiza", g: true },
  { br: true },
  { t: "tu" },
  { t: "negocio" },
  { t: "con" },
  { t: "IA" },
];

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
  { value: 20, prefix: "+", suffix: "", label: "Horas ahorradas por semana", detail: "Tiempo que tu equipo invierte en lo estratégico" },
  { value: 60, prefix: "", suffix: "%", label: "Reducción en errores", detail: "Menos errores humanos en procesos repetitivos" },
  { value: 3, prefix: "", suffix: "x", label: "Velocidad de operación", detail: "Procesos de horas que ahora toman minutos" },
];

const SYSTEMS = [
  {
    name: "ChatSuite",
    tag: "Comunicación centralizada",
    description:
      "Todos tus canales de mensajería en un solo lugar: WhatsApp, Instagram y Messenger desde una interfaz unificada, con automatizaciones inteligentes, análisis en tiempo real y flujos que potencian tu atención al cliente.",
    img: tChatCrm,
    chips: ["WhatsApp + Instagram + Messenger", "Automatizaciones", "Análisis en tiempo real"],
  },
  {
    name: "DTOS",
    tag: "Sistema operativo empresarial",
    description:
      "Automatizaciones avanzadas, gestión de datos en tiempo real, dashboards personalizados y control total de tus operaciones desde una plataforma unificada. Escala con infraestructura robusta y métricas que importan.",
    img: tSoftware,
    chips: ["Dashboards a medida", "Datos en tiempo real", "Control de operaciones"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Análisis de procesos",
    description: "Auditamos tus procesos, identificamos fricciones y detectamos oportunidades claras de automatización.",
    duration: "1 semana",
  },
  {
    step: "02",
    title: "Diseño de sistema",
    description: "Arquitectura del sistema, flujos de automatización y estructura de datos alineada a tus objetivos.",
    duration: "3-5 días",
  },
  {
    step: "03",
    title: "Implementación",
    description: "Construimos e integramos los flujos con tus herramientas, probando cada caso antes de activarlo.",
    duration: "2-4 semanas",
  },
  {
    step: "04",
    title: "Training & handoff",
    description: "Entrenamos a tu equipo en el manejo del sistema y entregamos documentación para operar sin nosotros.",
    duration: "1 semana",
  },
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
  initial: { opacity: 0, y: 26, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
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
      className="relative overflow-hidden liquid-glass rounded-[2.5rem] bg-[#0a0918]/60 px-8 py-28 md:py-40 text-center"
    >
      {/* Miniaturas que nacen bajo el cursor */}
      {chips.map((c) => {
        const spec = TRAIL_ICONS[c.i];
        return (
          <span
            key={c.id}
            className="pointer-events-none absolute z-[1] -translate-x-1/2 -translate-y-1/2"
            style={{ left: c.x, top: c.y }}
          >
            <span
              className="animate-trail-pop liquid-glass flex h-12 w-12 items-center justify-center rounded-xl bg-black/50"
              style={{ rotate: `${c.rot}deg` }}
            >
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
        <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-4xl md:text-6xl lg:text-7xl tracking-[-0.024em] leading-[1.02]">
          Automatiza <span className="gradient-text font-semibold">con nosotros</span>
        </motion.h2>
        <motion.p {...fadeUp(0.12)} className="mt-6 text-sm md:text-base text-white/80 font-body font-light max-w-md">
          Cuéntanos qué haces a mano cada semana y te decimos qué se puede automatizar y cuánto ahorrarías.
        </motion.p>
        <motion.a
          {...fadeUp(0.24)}
          href={WA("Hola DT Growth Partners, quiero automatizar mi negocio")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
        >
          Agendar diagnóstico gratis
          <ArrowUpRight className="h-5 w-5" />
        </motion.a>
        <motion.p {...fadeUp(0.36)} className="mt-8 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/40">
          Zapier · Make · n8n · Desarrollo custom
        </motion.p>
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

      <main>
        {/* Hero — malla de servicios interconectados como visual */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[#07060F] -mt-16">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-[10%] left-[-140px] w-[560px] h-[560px] opacity-30" },
              { color: "blue", className: "top-[35%] right-[8%] w-[540px] h-[540px] opacity-25", delay: "-6s" },
              { color: "purple", className: "bottom-[6%] left-[30%] w-[520px] h-[520px] opacity-20", delay: "-9s" },
            ]}
          />

          {/* Malla n8n con logos reales (desktop, derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute right-[4vw] xl:right-[7vw] top-[40%] -translate-y-1/2 hidden lg:block scale-110 xl:scale-125 z-[1]"
          >
            <MotifFlow />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07060F] to-transparent z-[2]" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 pb-24 md:pb-16 pt-28 md:pt-36">
            {/* Móvil: la malla dentro del flujo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-4 mb-10 flex justify-center scale-90"
            >
              <MotifFlow />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0] mb-4"
            >
              {"// Automatizaciones & IA"}
            </motion.span>

            <h1 className="font-heading font-normal text-white text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em] max-w-4xl lg:max-w-[48vw] flex flex-wrap gap-x-[0.26em]">
              {HERO_WORDS.map((w, i) =>
                w.br ? (
                  <span key={i} className="basis-full h-0" aria-hidden />
                ) : (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, filter: "blur(7px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, delay: 0.3 + i * 0.075, ease: [0.16, 1, 0.3, 1] }}
                    className={w.g ? "gradient-text font-semibold pb-[0.12em] -mb-[0.12em]" : ""}
                  >
                    {w.t}
                  </motion.span>
                )
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-base md:text-xl text-white/85 font-body font-light max-w-xl"
            >
              Flujos, chatbots y agentes inteligentes que conectan tus herramientas. Trabaja menos, crece más.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={WA("Hola DT Growth Partners, quiero automatizar mi negocio")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-black font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                Agendar diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => document.getElementById("sistemas")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm md:text-base font-medium text-white font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] bg-black/30"
              >
                Ver sistemas
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 hidden md:flex flex-wrap items-center gap-2.5"
            >
              {["+20 horas ahorradas/semana", "ROI en 2-4 meses", "Zapier · Make · n8n"].map((c) => (
                <span key={c} className="liquid-glass rounded-full px-4 py-1.5 text-[11px] md:text-xs text-white/90 font-body whitespace-nowrap bg-black/30">
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cita statement (patrón de la referencia, en clave DT) */}
        <section className="relative bg-[#07060F] py-24 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-8 text-center flex flex-col items-center">
            <motion.span {...fadeUp(0)} className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center bg-black/40">
              <Quote className="h-5 w-5 text-[#26BDF0]" strokeWidth={1.6} />
            </motion.span>
            <motion.blockquote
              {...fadeUp(0.12)}
              className="mt-8 font-heading font-normal text-white text-3xl md:text-5xl leading-[1.1] tracking-[-0.024em]"
            >
              Si lo haces más de una vez por semana, <span className="gradient-text font-semibold">se puede automatizar</span>.
            </motion.blockquote>
            <motion.p {...fadeUp(0.24)} className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
              La regla DT de la automatización
            </motion.p>
          </div>
        </section>

        {/* Beneficios — contadores */}
        <section className="relative bg-[#07060F] py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <div className="border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-x-12 gap-y-8">
              {BENEFITS.map((b, i) => (
                <motion.div key={b.label} {...fadeUp(i * 0.1)}>
                  <div className="font-heading font-medium text-white text-4xl md:text-6xl tracking-[-0.02em] leading-none">
                    <AnimatedCounter value={b.value} prefix={b.prefix} suffix={b.suffix} duration={1.8} />
                  </div>
                  <div className="text-sm text-white font-body mt-2.5">{b.label}</div>
                  <div className="text-xs text-white/60 font-body font-light mt-1">{b.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué automatizamos — cards con spotlight y ejemplos */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[12%] left-[-120px] w-[540px] h-[540px] opacity-25" },
              { color: "cyan", className: "bottom-[10%] right-[6%] w-[480px] h-[480px] opacity-20", delay: "-7s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Qué automatizamos"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Tu operación en <span className="gradient-text font-semibold">piloto automático</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Tres frentes donde la automatización devuelve más horas de las que cuesta.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-4">
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
                        background:
                          "radial-gradient(320px circle at var(--sx,50%) var(--sy,50%), rgba(38,189,240,0.14), transparent 65%)",
                      }}
                    />
                    <span className="liquid-glass rounded-xl w-12 h-12 flex items-center justify-center bg-black/40">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-heading font-medium text-white text-xl md:text-2xl tracking-[-0.01em] leading-tight">
                      {a.title}
                    </h3>
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

        {/* Sistemas propios — showcase alternado (ChatSuite / DTOS) */}
        <section id="sistemas" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "purple", className: "top-[20%] right-[-120px] w-[540px] h-[540px] opacity-20", delay: "-5s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Sistemas propios"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Software que ya opera <span className="gradient-text font-semibold">negocios reales</span>
            </h2>

            <div className="mt-16 space-y-20 md:space-y-28">
              {SYSTEMS.map((s, index) => (
                <div key={s.name} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <motion.div {...fadeUp(0)} className={index % 2 ? "lg:order-2" : ""}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">{s.tag}</span>
                    <h3 className="mt-3 font-heading font-medium text-white text-3xl md:text-5xl tracking-[-0.02em] leading-tight">
                      {s.name}
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-white/75 font-body font-light max-w-lg leading-relaxed">
                      {s.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <span key={c} className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap">
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div {...fadeUp(0.15)} className={index % 2 ? "lg:order-1" : ""}>
                    {/* Marco de navegador de vidrio */}
                    <div className="liquid-glass rounded-2xl overflow-hidden bg-black/40">
                      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        <span className="ml-3 rounded-md bg-black/40 px-3 py-1 font-mono text-[10px] text-white/60">
                          {s.name.toLowerCase()}.dtgrowthpartners.com
                        </span>
                      </div>
                      <img src={s.img} alt={`${s.name} — sistema desarrollado por DT Growth Partners`} className="w-full object-cover object-top" loading="lazy" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso — 4 pasos con número fantasma */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "cyan", className: "bottom-[14%] left-[6%] w-[480px] h-[480px] opacity-20", delay: "-6s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Proceso"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              De lo manual a lo <span className="gradient-text font-semibold">automático</span>
            </h2>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROCESS.map((p, index) => (
                <motion.div
                  key={p.step}
                  {...fadeUp((index % 4) * 0.1)}
                  className="relative liquid-glass rounded-[1.25rem] p-6 md:p-7 bg-[#0a0918]/50 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none select-none absolute -top-4 right-1 font-heading font-semibold text-white/[0.06] text-[5.5rem] leading-none"
                  >
                    {p.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Paso {p.step}</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-lg md:text-xl leading-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{p.description}</p>
                  <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{p.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — encabezado sticky */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "blue", className: "bottom-[12%] left-[-120px] w-[520px] h-[520px] opacity-20", delay: "-6s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 grid lg:grid-cols-[minmax(300px,420px)_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-body text-white/80">{"// FAQ"}</span>
              <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl leading-[0.98] tracking-[-0.024em]">
                Lo que todos preguntan <span className="gradient-text font-semibold">antes de automatizar</span>
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
                      <AccordionContent className="text-white/70 font-body font-light text-sm pb-5 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA con estela de apps bajo el cursor */}
        <section className="relative bg-[#07060F] py-24 md:py-28 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <TrailCTA />
          </div>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default SistemasAutomatizaciones;
