import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Inbox, Sparkles, RefreshCcw, Zap, CalendarCheck, ShieldCheck, Users, ArrowRight, ArrowUpRight, Bot, Phone, MoreVertical, Smile, Mic, Camera } from "lucide-react";
import videoHero from "@/assets/chatbots/video-hero.mp4";

const WA = (text: string) => `https://wa.me/573007189383?text=${encodeURIComponent(text)}`;
const WA_MAIN = WA("Hola DT Growth Partners, quiero un chatbot con IA para mi negocio");

const chatbotsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Chatbots con Inteligencia Artificial",
  "provider": {
    "@type": "Organization",
    "name": "DT Growth Partners",
    "url": "https://dtgrowthpartners.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cartagena"
  },
  "description": "Chatbots con IA para WhatsApp e Instagram: responden, califican leads y agendan citas 24/7. Implementación y entrenamiento a la medida de tu negocio."
};

// Titular del hero: palabra a palabra; g = degradado, br = salto de línea
const HERO_WORDS: Array<{ t?: string; g?: boolean; br?: boolean }> = [
  { t: "Tu", g: true },
  { t: "mejor", g: true },
  { t: "vendedor", g: true },
  { br: true },
  { t: "trabaja" },
  { t: "24/7" },
];

// Framework Capta → Convierte → Fideliza (patrón respond.io)
const PILLARS = [
  {
    icon: Inbox,
    kicker: "Capta",
    title: "Todos tus canales en una sola bandeja",
    description: "Los leads de WhatsApp, Instagram y Messenger llegan a un mismo lugar. Nada se pierde entre plataformas ni queda en visto.",
  },
  {
    icon: Sparkles,
    kicker: "Convierte",
    title: "La IA responde, califica y agenda",
    description: "El bot atiende en segundos, hace las preguntas correctas y rutea al equipo comercial solo los leads que valen la pena.",
  },
  {
    icon: RefreshCcw,
    kicker: "Fideliza",
    title: "Ingresos recurrentes, no ventas únicas",
    description: "Seguimientos automáticos, recordatorios y campañas a tu base de clientes para que vuelvan a comprar.",
  },
];

// Casos de uso del agente IA (patrón respond.io)
const USE_CASES = [
  {
    icon: Zap,
    title: "Conversiones eficientes",
    description: "Responde las consultas de tus anuncios y las preguntas frecuentes al instante, a cualquier hora.",
  },
  {
    icon: CalendarCheck,
    title: "Ciclos de venta más cortos",
    description: "Recomienda productos, agenda citas y comparte datos de pago sin intervención humana.",
  },
  {
    icon: ShieldCheck,
    title: "Lanzamiento rápido y seguro",
    description: "Entrenado con la información de tu negocio y con límites claros: responde solo lo que debe, con tu tono.",
  },
  {
    icon: Users,
    title: "Escala sin contratar",
    description: "Atiende cientos de conversaciones simultáneas; tu equipo solo entra cuando hay una venta que cerrar.",
  },
];

const METRICS = [
  { value: 24, prefix: "", suffix: "/7", label: "Atención sin pausas, fines de semana incluidos" },
  { value: 100, prefix: "", suffix: "%", label: "De los chats reciben respuesta en segundos" },
  { value: 3, prefix: "", suffix: "x", label: "Más conversaciones atendidas por tu mismo equipo" },
];

/* Simulación de chat: la conversación se escribe sola en bucle —
   el bot responde, agenda la cita y registra el lead en el CRM. */
type ChatStep =
  | { kind: "user" | "bot"; text: string; time: string }
  | { kind: "system"; text: string };

const CHAT_SCRIPT: ChatStep[] = [
  { kind: "user", text: "Hola! ¿Tienen disponibilidad para mañana?", time: "9:41" },
  { kind: "bot", text: "¡Claro! 👋 Tenemos cupo a las 10:00 a.m. o 3:00 p.m. ¿Cuál te sirve?", time: "9:41" },
  { kind: "user", text: "A las 10 perfecto, ¿cuánto cuesta?", time: "9:42" },
  { kind: "bot", text: "La valoración inicial es gratis 😊 ¿A nombre de quién agendo la cita?", time: "9:42" },
  { kind: "user", text: "María González", time: "9:42" },
  { kind: "bot", text: "✅ Listo, María: mañana 10:00 a.m. Te llega la confirmación por aquí.", time: "9:43" },
  { kind: "system", text: "📅 Cita creada · Lead calificado → CRM" },
];

const ChatSim = () => {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(CHAT_SCRIPT.length);
      return;
    }
    let cancelled = false;
    const timers: number[] = [];
    const t = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(() => { if (!cancelled) fn(); }, ms));
    };

    if (visible >= CHAT_SCRIPT.length) {
      t(() => setVisible(0), 4500);
    } else {
      const next = CHAT_SCRIPT[visible];
      if (next.kind === "bot") {
        t(() => setTyping(true), 550);
        t(() => { setTyping(false); setVisible((v) => v + 1); }, 2000);
      } else {
        t(() => setVisible((v) => v + 1), next.kind === "system" ? 1000 : 1400);
      }
    }
    return () => { cancelled = true; timers.forEach(window.clearTimeout); };
  }, [visible]);

  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      {/* Badge flotante */}
      <div className="absolute -top-4 -right-2 md:-right-6 z-10 rotate-3">
        <span className="liquid-glass rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/85 bg-black/50">
          ⚡ Responde en segundos
        </span>
      </div>

      <div className="liquid-glass rounded-[2rem] overflow-hidden bg-[#0a0918]/70">
        {/* Header del chat */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-black/30">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F76D6] to-[#26BDF0]">
            <Bot className="h-5 w-5 text-white" strokeWidth={1.7} />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#28c840] ring-2 ring-[#0a0918]" />
          </span>
          <div className="flex-1 min-w-0 leading-tight">
            <div className="font-heading font-medium text-white text-sm">Asistente DT</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#28c840]">en línea · IA</div>
          </div>
          <Phone className="h-4 w-4 text-white/40" strokeWidth={1.6} />
          <MoreVertical className="h-4 w-4 text-white/40" strokeWidth={1.6} />
        </div>

        {/* Mensajes */}
        <div className="h-[400px] md:h-[430px] flex flex-col justify-end gap-2.5 px-4 pb-4 pt-6 overflow-hidden">
          {CHAT_SCRIPT.slice(0, visible).map((m, i) =>
            m.kind === "system" ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="self-center liquid-glass rounded-full px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#C2FBFF] bg-black/40"
              >
                {m.text}
              </motion.div>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] font-body leading-snug ${
                  m.kind === "bot"
                    ? "self-end rounded-br-md bg-gradient-to-br from-[#0F76D6] to-[#1191e0] text-white"
                    : "self-start rounded-bl-md bg-white/[0.08] border border-white/10 text-white/90"
                }`}
              >
                {m.text}
                <span className={`ml-2 inline-flex items-baseline gap-1 text-[9px] ${m.kind === "bot" ? "text-white/60" : "text-white/40"}`}>
                  {m.time}
                  {m.kind === "bot" && <span className="text-[#C2FBFF]">✓✓</span>}
                </span>
              </motion.div>
            )
          )}

          {/* Indicador escribiendo... */}
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="self-end rounded-2xl rounded-br-md bg-gradient-to-br from-[#0F76D6]/60 to-[#1191e0]/60 px-4 py-3 flex items-center gap-1"
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-white/90 animate-bounce"
                  style={{ animationDelay: `${d * 0.15}s`, animationDuration: "0.9s" }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Barra de entrada (decorativa) */}
        <div className="flex items-center gap-2.5 px-4 pb-4">
          <div className="flex-1 flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2.5">
            <Smile className="h-4 w-4 text-white/40" strokeWidth={1.6} />
            <span className="flex-1 text-[12px] text-white/35 font-body">Escribe un mensaje</span>
            <Camera className="h-4 w-4 text-white/40" strokeWidth={1.6} />
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F76D6] to-[#26BDF0]">
            <Mic className="h-4 w-4 text-white" strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </div>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ChatbotsIA = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Chatbots con IA para WhatsApp en Cartagena | DT Growth Partners"
        description="Chatbots con IA que responden, califican leads y agendan citas 24/7 en WhatsApp e Instagram. Tu mejor vendedor trabaja sin descanso."
        canonical="https://dtgrowthpartners.com/servicios/chatbots"
        jsonLd={chatbotsServiceSchema}
      />
      <Navigation />

      <main>
        {/* Hero — flujo de leads → bot DT → equipo comercial */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[#07060F] -mt-16">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[8%] left-[-140px] w-[560px] h-[560px] opacity-30" },
              { color: "cyan", className: "top-[32%] right-[10%] w-[520px] h-[520px] opacity-25", delay: "-6s" },
              { color: "purple", className: "bottom-[6%] left-[28%] w-[520px] h-[520px] opacity-20", delay: "-9s" },
            ]}
          />

          {/* Imagen del flujo (desktop, derecha) — se funde con el ink */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute right-[2vw] xl:right-[5vw] top-[30%] -translate-y-1/2 hidden lg:block w-[420px] xl:w-[480px] z-[1]"
          >
            <video
              src={videoHero}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(15,118,214,0.3)]"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07060F] to-transparent z-[2]" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 pb-24 md:pb-16 pt-28 md:pt-36">
            {/* Móvil: imagen del flujo dentro del flujo de contenido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-2 mb-8 flex justify-center"
            >
              <video src={videoHero} autoPlay loop muted playsInline className="w-[320px] rounded-[1.5rem] border border-white/10 shadow-[0_30px_90px_rgba(15,118,214,0.3)]" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0] mb-4"
            >
              {"// Chatbots Inteligentes"}
            </motion.span>

            <h1 className="font-heading font-normal text-white text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em] max-w-4xl lg:max-w-[52vw] flex flex-wrap gap-x-[0.26em]">
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
              Chatbots con IA que responden, califican y agendan por WhatsApp e Instagram — mientras tú duermes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-black font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                Habla con ventas
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm md:text-base font-medium text-white font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] bg-black/30"
              >
                Ver cómo funciona
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 hidden md:flex flex-wrap items-center gap-2.5"
            >
              {["WhatsApp · Instagram · Messenger", "Responde en segundos", "Entrenado con tu negocio"].map((c) => (
                <span key={c} className="liquid-glass rounded-full px-4 py-1.5 text-[11px] md:text-xs text-white/90 font-body whitespace-nowrap bg-black/30">
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Framework Capta → Convierte → Fideliza */}
        <section id="como-funciona" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-[12%] right-[6%] w-[480px] h-[480px] opacity-20" },
              { color: "blue", className: "bottom-[10%] left-[-120px] w-[540px] h-[540px] opacity-25", delay: "-7s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Cómo funciona"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Capta, convierte y <span className="gradient-text font-semibold">fideliza</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Crecimiento conversacional: cada chat es una oportunidad que el bot no deja escapar.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-4">
              {PILLARS.map((p, index) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.kicker}
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
                    <div className="flex items-center justify-between gap-4">
                      <span className="liquid-glass rounded-xl w-12 h-12 flex items-center justify-center bg-black/40">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">{p.kicker}</span>
                    </div>
                    <h3 className="mt-5 font-heading font-medium text-white text-xl md:text-2xl tracking-[-0.01em] leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{p.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Showcase — conversación que se atiende sola (imagen glass) */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "purple", className: "top-[20%] left-[8%] w-[500px] h-[500px] opacity-20", delay: "-5s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="text-sm font-body text-white/80">{"// En acción"}</span>
              <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl leading-[0.98] tracking-[-0.024em]">
                Una conversación que se <span className="gradient-text font-semibold">atiende sola</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-white/75 font-body font-light max-w-lg leading-relaxed">
                Saluda, entiende qué busca el cliente, comparte el catálogo, agenda la cita y confirma el pago. Todo en el chat donde tu cliente ya está — sin apps nuevas ni formularios eternos.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Catálogo en el chat", "Agendamiento automático", "Confirmaciones y recordatorios", "Traspaso a humano cuando toca"].map((c) => (
                  <span key={c} className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white font-body group"
              >
                Pruébalo en nuestro WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#26BDF0]" />
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <ChatSim />
            </motion.div>
          </div>
        </section>

        {/* Casos de uso del agente IA */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "blue", className: "bottom-[14%] right-[-120px] w-[540px] h-[540px] opacity-25", delay: "-8s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Qué hace por ti"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              IA que <span className="gradient-text font-semibold">ejecuta</span>, no solo responde
            </h2>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {USE_CASES.map((u, index) => {
                const Icon = u.icon;
                return (
                  <motion.div
                    key={u.title}
                    {...fadeUp((index % 4) * 0.1)}
                    className="relative liquid-glass rounded-[1.25rem] p-6 md:p-7 bg-[#0a0918]/50 overflow-hidden"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none select-none absolute -top-4 right-1 font-heading font-semibold text-white/[0.06] text-[5.5rem] leading-none"
                    >
                      0{index + 1}
                    </span>
                    <span className="liquid-glass rounded-xl w-11 h-11 flex items-center justify-center bg-black/40">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-4 font-heading font-medium text-white text-lg md:text-xl leading-tight">{u.title}</h3>
                    <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{u.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Métricas */}
        <section className="relative bg-[#07060F] py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <div className="border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-x-12 gap-y-8">
              {METRICS.map((m, i) => (
                <motion.div key={m.label} {...fadeUp(i * 0.1)}>
                  <div className="font-heading font-medium text-white text-4xl md:text-6xl tracking-[-0.02em] leading-none">
                    <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} duration={1.8} />
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-body font-light mt-2.5 max-w-[240px]">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios (componente de la casa) */}
        <TestimonialsSection />

        {/* CTA final — full-bleed con video */}
        <section className="relative min-h-[75vh] bg-[#07060F] overflow-hidden flex items-center">
          <video className="absolute inset-0 w-full h-full object-cover opacity-70" autoPlay loop muted playsInline>
            <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#07060F] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07060F] to-transparent" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-24 text-center flex flex-col items-center">
            <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-5xl md:text-7xl tracking-[-0.024em] leading-[1.02]">
              Ponlo a <span className="gradient-text font-semibold">vender por ti</span>
            </motion.h2>
            <motion.p {...fadeUp(0.15)} className="mt-6 text-sm md:text-base text-white/90 font-body font-light max-w-xl">
              Cuéntanos cómo vendes hoy y te mostramos, con tu propio caso, lo que un chatbot con IA puede atender por ti.
            </motion.p>
            <motion.a
              {...fadeUp(0.3)}
              href={WA_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
            >
              Hablemos por WhatsApp
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
            <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {["Demo con tu caso real", "Implementación en semanas", "Sin permanencias"].map((b) => (
                <span key={b} className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/90 font-body whitespace-nowrap">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default ChatbotsIA;
