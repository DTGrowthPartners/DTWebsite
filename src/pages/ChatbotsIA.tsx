import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Inbox, Sparkles, RefreshCcw, Zap, CalendarCheck, ShieldCheck, Users, ArrowRight, ArrowUpRight } from "lucide-react";
import flujoBot from "@/assets/chatbots/flujo-bot.webp";
import chatGlass from "@/assets/chatbots/chat-glass.webp";

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
            className="pointer-events-none absolute right-[2vw] xl:right-[5vw] top-[46%] -translate-y-1/2 hidden lg:block w-[420px] xl:w-[500px] z-[1]"
          >
            <img src={flujoBot} alt="" className="w-full [mask-image:radial-gradient(72%_72%_at_50%_50%,#000_45%,transparent_92%)]" />
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
              <img src={flujoBot} alt="" className="w-[300px] [mask-image:radial-gradient(72%_72%_at_50%_50%,#000_45%,transparent_92%)]" />
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
              <img
                src={chatGlass}
                alt="Conversación de WhatsApp atendida por el chatbot con IA de DT Growth Partners"
                loading="lazy"
                className="w-full max-w-[520px] mx-auto rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(15,118,214,0.25)]"
              />
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
