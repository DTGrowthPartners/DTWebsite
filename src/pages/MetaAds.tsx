import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import {
  MotifAds,
  PhoneFrame,
  FacebookAdPreview,
  InstagramAdPreview,
  StoryPreview,
  WhatsAppLeadPreview,
} from "@/components/home/ServicesHorizontal";
import adInsta from "@/assets/ads/ad-insta.webp";
import adLocal from "@/assets/ads/ad-local.webp";
import adCartagena from "@/assets/ads/ad-cartagena.webp";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, BarChart3, TrendingUp, CheckCircle2, ArrowRight, ArrowUpRight, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const WA = (text: string) => `https://wa.me/573007189383?text=${encodeURIComponent(text)}`;

const metaAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Meta Ads / Publicidad Digital",
  "provider": {
    "@type": "Organization",
    "name": "DT Growth Partners",
    "url": "https://dtgrowthpartners.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cartagena"
  },
  "description": "Gestión de campañas publicitarias en Meta Ads (Facebook e Instagram) para empresas en Cartagena. Incluye estrategia, creatividades, optimización y reportes."
};

// Titular del hero: palabra a palabra; g = degradado, br = salto de línea
const HERO_WORDS: Array<{ t?: string; g?: boolean; br?: boolean }> = [
  { t: "Anuncios", g: true },
  { br: true },
  { t: "que" },
  { t: "convierten" },
  { t: "pauta" },
  { t: "en" },
  { t: "ventas" },
];

/* Mockups extra para la sección de formatos */
const ReelsPreview = () => (
  <div className="absolute inset-0 bg-black flex flex-col font-body">
    <img src={adLocal} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95" />
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="relative px-2 pt-3 text-[10px] font-semibold text-white">Reels</div>
    <div className="flex-1" />
    {/* Rail de acciones */}
    <div className="absolute right-1.5 bottom-16 flex flex-col items-center gap-1 text-white drop-shadow">
      <Heart className="h-3.5 w-3.5" strokeWidth={1.8} />
      <span className="text-[6px] mb-1">12,4k</span>
      <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
      <span className="text-[6px] mb-1">318</span>
      <Send className="h-3.5 w-3.5" strokeWidth={1.8} />
      <Bookmark className="h-3.5 w-3.5 mt-1" strokeWidth={1.8} />
    </div>
    <div className="relative px-2 pb-2.5">
      <div className="flex items-center gap-1">
        <span className="grid place-items-center rounded-full bg-[#0F76D6] text-white text-[6px] font-semibold" style={{ width: 15, height: 15 }}>
          DT
        </span>
        <span className="text-[6.5px] text-white">dtgrowthpartners · <span className="text-white/70">Publicidad</span></span>
      </div>
      <div className="mt-1.5 mr-8 rounded bg-white/95 py-1 text-center text-[6.5px] font-semibold text-black">
        Más información
      </div>
    </div>
  </div>
);

const MarketplacePreview = () => (
  <div className="absolute inset-0 bg-white flex flex-col font-body">
    <div className="px-2.5 pt-3 pb-1 text-[10px] font-bold text-neutral-900">Marketplace</div>
    <div className="px-2 pb-1.5">
      <div className="rounded-full bg-neutral-100 px-2 py-1 text-[6.5px] text-neutral-400">Buscar en Marketplace</div>
    </div>
    <div className="grid grid-cols-2 gap-1 px-2 pb-2 flex-1 min-h-0 overflow-hidden">
      <div className="rounded-md overflow-hidden ring-1 ring-[#0F76D6]/60 flex flex-col bg-white">
        <div className="relative h-[58%] min-h-0 overflow-hidden">
          <img src={adLocal} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="p-1 leading-tight">
          <div className="text-[5.5px] text-[#0F76D6] font-semibold">Patrocinado</div>
          <div className="text-[6.5px] font-semibold text-neutral-900 truncate">DT Growth Partners</div>
          <div className="text-[6px] text-neutral-500">Consulta gratis</div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden bg-neutral-100 flex flex-col">
        <div className="relative h-[58%] min-h-0 overflow-hidden">
          <img src={adCartagena} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="p-1 leading-tight">
          <div className="text-[6.5px] font-semibold text-neutral-800">$1.250.000</div>
          <div className="text-[6px] text-neutral-500 truncate">Cartagena</div>
        </div>
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="rounded-md overflow-hidden bg-neutral-100 flex flex-col">
          <div className="h-[58%] bg-neutral-200" />
          <div className="p-1 space-y-0.5">
            <div className="h-1 w-3/4 rounded bg-neutral-300" />
            <div className="h-1 w-1/2 rounded bg-neutral-200" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Formatos de Meta que dominamos (6 mockups)
const FORMATS = [
  { label: "Feed de Facebook", C: FacebookAdPreview, cls: "-rotate-2 md:translate-y-3" },
  { label: "Feed de Instagram", C: InstagramAdPreview, cls: "md:-translate-y-1" },
  { label: "Historias", C: StoryPreview, cls: "rotate-1 md:translate-y-2" },
  { label: "Reels", C: ReelsPreview, cls: "-rotate-1 md:-translate-y-2" },
  { label: "Marketplace", C: MarketplacePreview, cls: "rotate-2 md:translate-y-3" },
  { label: "Tu WhatsApp", C: WhatsAppLeadPreview, cls: "rotate-[3deg] md:translate-y-1" },
];

const BENEFITS = [
  {
    icon: Target,
    title: "Targeting científico",
    description: "Segmentación basada en datos reales, no en suposiciones. Audiencias construidas desde tu CRM, tu píxel y tu histórico.",
  },
  {
    icon: BarChart3,
    title: "Optimización continua",
    description: "Testing estructurado de creativos, audiencias y ofertas. Mejoras incrementales constantes, semana a semana.",
  },
  {
    icon: TrendingUp,
    title: "Escalamiento inteligente",
    description: "Crecimiento sostenible manteniendo el ROAS positivo. Escalamos lo que funciona, cortamos lo que no.",
  },
];

const SPECIALTIES = [
  {
    step: "01",
    phase: "Consultoría",
    title: "Consultoría y asesoramiento",
    description: "Guiamos a empresas y emprendedores en la implementación de estrategias efectivas para escalar en digital.",
  },
  {
    step: "02",
    phase: "Gestión",
    title: "Gestión de publicidad",
    description: "Campañas en Facebook, Instagram, TikTok, YouTube y WhatsApp para maximizar visibilidad y conversiones.",
  },
  {
    step: "03",
    phase: "Segmentación",
    title: "Segmentación avanzada",
    description: "Analizamos a fondo tu audiencia para dirigir anuncios personalizados que suben la conversión y el retorno.",
  },
  {
    step: "04",
    phase: "Contenido",
    title: "Contenido publicitario",
    description: "Imágenes, videos y textos optimizados, diseñados para captar atención y generar interacción.",
  },
  {
    step: "05",
    phase: "Seguimiento",
    title: "Monitoreo y reportes",
    description: "Análisis detallado y reportes periódicos, ajustando la estrategia en tiempo real para maximizar resultados.",
  },
];

const CASES = [
  {
    tag: "Retail de Bebidas Online",
    title: "De ROAS 1.3x a resultados escalables",
    detail: "Meses de inversión sin resultados: campañas de alcance sin conversiones configuradas. Lo reestructuramos todo.",
    stats: [
      { k: "Período", v: "60 días" },
      { k: "Inversión", v: "$1.2M" },
      { k: "ROAS inicial", v: "1.3x" },
    ],
    to: "/casos-exito/retail-bebidas",
  },
  {
    tag: "E-commerce Retail",
    title: "+92% en ventas escalando trimestralmente",
    detail: "Con campañas estables, el reto era escalar presupuesto sin sacrificar el retorno. ROAS de 41x en Q2.",
    stats: [
      { k: "Período", v: "6 meses" },
      { k: "ROAS Q2", v: "41x" },
      { k: "Crecimiento", v: "+92%" },
    ],
    to: "/casos-exito/escalamiento-trimestral",
  },
  {
    tag: "Restaurante local",
    title: "440 mil personas de la zona lo conocen ahora",
    detail: "Comida típica caribeña con bajo reconocimiento local. Campaña de alcance hipersegmentada por zonas.",
    stats: [
      { k: "Alcance", v: "440 mil" },
      { k: "Inversión", v: "$407" },
      { k: "Seguidores", v: "+1,303" },
    ],
    to: "/casos-exito/reconocimiento-local-restaurante",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$2.000.000",
    period: "COP/mes + 10% de la inversión en Ads",
    description: "Ideal para negocios que están comenzando con publicidad digital.",
    features: [
      "1 reunión mensual 1:1",
      "3 reuniones virtuales",
      "Portafolio comercial y pruebas A/B en anuncios",
      "Análisis y optimización de anuncios",
      "Estrategia de segmentación personalizada",
      "Reporte mensual de resultados",
    ],
    wa: "Hola DT Growth Partners, estoy interesado en el Plan Starter para comenzar con publicidad digital",
    tag: null as string | null,
  },
  {
    name: "Growth",
    price: "$3.500.000",
    period: "COP/mes + 10% de la inversión en Ads",
    description: "Para negocios en crecimiento que buscan resultados consistentes.",
    features: [
      "Todo lo incluido en el plan Starter",
      "1 reunión quincenal",
      "Creación de contenido publicitario optimizado",
      "Optimización de embudos de conversión",
      "Análisis de la competencia",
    ],
    wa: "Hola DT Growth Partners, quiero el Plan Growth para hacer crecer mi negocio de forma consistente",
    tag: "Más popular",
  },
  {
    name: "Scale",
    price: "$5.000.000",
    period: "COP/mes + 10% de la inversión en Ads",
    description: "Para empresas que buscan escalar agresivamente.",
    features: [
      "Todo lo incluido en el Plan Growth",
      "1 reunión semanal",
      "Administración total de campañas",
      "Contenido multimedia profesional",
      "Remarketing avanzado",
      "Consultoría estratégica 1:1",
    ],
    wa: "Hola DT Growth Partners, necesito el Plan Scale para escalar agresivamente mi negocio",
    tag: "Más completo",
  },
];

const METRICS = [
  { value: 7, prefix: "$", suffix: ".000M", label: "COP en ventas generadas para clientes" },
  { value: 40, prefix: "", suffix: "K", label: "Órdenes generadas con nuestras campañas" },
  { value: 1, prefix: "+", suffix: "K", label: "Campañas publicitarias exitosas" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const MetaAds = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Meta Ads en Cartagena | Publicidad en Facebook e Instagram | DT Growth Partners"
        description="Agencia especializada en Meta Ads en Cartagena. Campañas de anuncios en Facebook e Instagram que generan ventas reales. Resultados medibles."
        canonical="https://dtgrowthpartners.com/servicios/meta-ads"
        jsonLd={metaAdsServiceSchema}
      />
      <Navigation />

      <main>
        {/* Hero — celulares con anuncios reales flotando + titular palabra a palabra */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[#07060F] -mt-16">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[8%] left-[-140px] w-[560px] h-[560px] opacity-30" },
              { color: "cyan", className: "top-[30%] right-[10%] w-[520px] h-[520px] opacity-25", delay: "-6s" },
              { color: "purple", className: "bottom-[5%] left-[25%] w-[520px] h-[520px] opacity-20", delay: "-9s" },
            ]}
          />

          {/* Mockups reales de campañas (Feed, Instagram, Historias, WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute right-[1vw] xl:right-[3vw] top-[42%] -translate-y-1/2 hidden lg:block scale-[0.82] xl:scale-100 origin-right z-[1]"
          >
            <MotifAds />
          </motion.div>

          {/* Móvil: abanico de 3 mockups sobre el titular */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute top-[10rem] inset-x-0 flex justify-center items-start lg:hidden z-[1]"
          >
            <div className="w-[104px] -rotate-3 z-10 animate-float" style={{ animationDuration: "5.4s" }}>
              <PhoneFrame compact>
                <InstagramAdPreview />
              </PhoneFrame>
            </div>
            <div className="w-[96px] rotate-6 translate-y-4 -ml-3 animate-float" style={{ animationDuration: "6.4s", animationDelay: "0.4s" }}>
              <PhoneFrame compact>
                <WhatsAppLeadPreview />
              </PhoneFrame>
            </div>
          </motion.div>

          {/* Fundido con la siguiente sección */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07060F] to-transparent z-[2]" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 pb-24 md:pb-16 pt-36">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0] mb-4"
            >
              {"// Meta Ads"}
            </motion.span>

            <h1 className="font-heading font-normal text-white text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em] max-w-4xl lg:max-w-[46vw] flex flex-wrap gap-x-[0.26em]">
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
              Publicidad en Facebook, Instagram y WhatsApp con estrategia, testing y reportes claros.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={WA("Hola DT Growth Partners, quiero tener campañas exitosas")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-black font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                Agendar auditoría gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => document.getElementById("pricing-plans")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm md:text-base font-medium text-white font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] bg-black/30"
              >
                Ver planes
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 hidden md:flex flex-wrap items-center gap-2.5"
            >
              {["ROAS 5.2x promedio", "40K órdenes generadas", "+1K campañas exitosas"].map((c) => (
                <span key={c} className="liquid-glass rounded-full px-4 py-1.5 text-[11px] md:text-xs text-white/90 font-body whitespace-nowrap bg-black/30">
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resultados — contadores grandes */}
        <section className="relative bg-[#07060F] py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <div className="border-t border-white/10 pt-10 flex flex-wrap gap-x-16 gap-y-8">
              {METRICS.map((m, i) => (
                <motion.div key={m.label} {...fadeUp(i * 0.1)}>
                  <div className="font-heading font-medium text-white text-4xl md:text-6xl tracking-[-0.02em] leading-none">
                    <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} duration={1.8} />
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-body font-light mt-2 max-w-[220px]">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué diferente — 3 cards de vidrio con spotlight */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-[12%] right-[8%] w-[480px] h-[480px] opacity-20" },
              { color: "blue", className: "bottom-[10%] left-[-120px] w-[520px] h-[520px] opacity-25", delay: "-7s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Por qué nosotros"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Ciencia de datos, no <span className="gradient-text font-semibold">suposiciones</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Cada peso invertido con una hipótesis, un test y una métrica de negocio detrás.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-4">
              {BENEFITS.map((b, index) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
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
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{b.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formatos — 6 mockups de campañas reales en Meta */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "cyan", className: "top-[20%] left-[-120px] w-[520px] h-[520px] opacity-20", delay: "-5s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Formatos"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Tu marca en <span className="gradient-text font-semibold">todos los formatos</span> de Meta
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Feed, Historias, Reels, Marketplace y el cierre donde ocurre la venta: tu WhatsApp.
            </p>

            {/* Desktop: fila completa · Móvil: carrusel horizontal con snap */}
            <div className="mt-16 flex md:grid md:grid-cols-6 gap-5 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-8 px-8 md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FORMATS.map((f, i) => {
                const Preview = f.C;
                return (
                  <motion.div
                    key={f.label}
                    {...fadeUp((i % 6) * 0.08)}
                    className={`flex flex-col items-center gap-2.5 snap-center shrink-0 w-[170px] md:w-auto ${f.cls}`}
                  >
                    <div className="w-full animate-float" style={{ animationDuration: `${5.4 + i * 0.5}s`, animationDelay: `${i * 0.25}s` }}>
                      <PhoneFrame>
                        <Preview />
                      </PhoneFrame>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/60 whitespace-nowrap">
                      {f.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Especialidades — cards con número fantasma */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "purple", className: "top-[16%] left-[8%] w-[500px] h-[500px] opacity-20", delay: "-4s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Especialidades"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Nos especializamos <span className="gradient-text font-semibold">en esto</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Publicidad digital, optimización de campañas y análisis de datos para potenciar tu crecimiento.
            </p>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SPECIALTIES.map((s, index) => (
                <motion.div
                  key={s.step}
                  {...fadeUp((index % 3) * 0.1)}
                  className="relative liquid-glass rounded-[1.25rem] p-6 md:p-7 bg-[#0a0918]/50 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none select-none absolute -top-4 right-1 font-heading font-semibold text-white/[0.06] text-[5.5rem] leading-none"
                  >
                    {s.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">{s.phase}</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-lg md:text-xl leading-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de éxito — filas editoriales clicables */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "blue", className: "bottom-[12%] right-[-120px] w-[540px] h-[540px] opacity-25", delay: "-8s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Casos de éxito"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Resultados que <span className="gradient-text font-semibold">hablan solos</span>
            </h2>

            <div className="mt-14 border-t border-white/10">
              {CASES.map((c, index) => (
                <motion.div key={c.to} {...fadeUp(index * 0.08)}>
                  <Link
                    to={c.to}
                    className="group w-full text-left py-8 md:py-10 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-10 items-center border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03] md:px-6 md:-mx-6 rounded-2xl"
                  >
                    <span className="font-mono text-xs text-white/40">0{index + 1}</span>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">{c.tag}</span>
                      <h3 className="mt-2 font-heading font-medium text-white text-xl md:text-3xl tracking-[-0.02em] leading-tight transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F76D6] group-hover:via-[#26BDF0] group-hover:to-[#C2FBFF]">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 font-body font-light max-w-2xl">{c.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {c.stats.map((st) => (
                          <span key={st.k} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                            {st.k}: <span className="text-[#26BDF0]">{st.v}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="liquid-glass rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcas — marquee de logos reales */}
        <section className="relative bg-[#07060F] py-20 md:py-24 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-10 px-4">
            <div className="text-center">
              <span className="text-sm font-body text-white/80">{"// Confían en nosotros"}</span>
              <h2 className="mt-4 font-heading font-normal text-white text-3xl md:text-5xl leading-[1.0] tracking-[-0.024em]">
                Marcas que <span className="gradient-text font-semibold">escalan</span> con DT
              </h2>
            </div>
            <PartnersMarquee />
          </div>
        </section>

        {/* Testimonios (componente de la casa) */}
        <TestimonialsSection />

        {/* Planes — cards de vidrio, Growth resaltado */}
        <section id="pricing-plans" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[10%] left-[-120px] w-[540px] h-[540px] opacity-25" },
              { color: "cyan", className: "bottom-[8%] right-[-100px] w-[500px] h-[500px] opacity-20", delay: "-6s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Planes"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              El plan que se ajusta a <span className="gradient-text font-semibold">tu negocio</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Ya sea que estés comenzando o buscando un crecimiento agresivo, hay un plan para tu etapa.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-4 lg:gap-6 items-stretch max-w-6xl">
              {PLANS.map((plan, index) => {
                const highlighted = plan.tag === "Más popular";
                return (
                  <motion.div key={plan.name} {...fadeUp(index * 0.12)} className="relative h-full">
                    {plan.tag && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span
                          className={`rounded-full px-4 py-1 text-[11px] font-medium font-body whitespace-nowrap ${
                            highlighted
                              ? "bg-gradient-to-r from-[#0F76D6] to-[#26BDF0] text-white"
                              : "liquid-glass text-white/90 bg-black/40"
                          }`}
                        >
                          {plan.tag}
                        </span>
                      </div>
                    )}
                    <div
                      className={`liquid-glass rounded-[1.5rem] p-7 md:p-8 h-full flex flex-col bg-[#0a0918]/60 ${
                        highlighted ? "shadow-[0_0_50px_rgba(38,189,240,0.18)]" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Plan {plan.name}</span>
                      <div className="mt-4 font-heading font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] leading-none">
                        {plan.price}
                      </div>
                      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">{plan.period}</div>
                      <p className="mt-4 text-sm text-white/70 font-body font-light">{plan.description}</p>

                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-white/75 font-body font-light">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#26BDF0]" strokeWidth={1.7} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={WA(plan.wa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium font-body transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                          highlighted
                            ? "bg-white text-black"
                            : "liquid-glass text-white bg-black/30"
                        }`}
                      >
                        Comenzar ahora
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — gran final full-bleed con video */}
        <section className="relative min-h-[75vh] bg-[#07060F] overflow-hidden flex items-center">
          <video className="absolute inset-0 w-full h-full object-cover opacity-70" autoPlay loop muted playsInline>
            <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#07060F] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07060F] to-transparent" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-24 text-center flex flex-col items-center">
            <motion.h2 {...fadeUp(0)} className="font-heading font-normal text-white text-5xl md:text-7xl tracking-[-0.024em] leading-[1.02]">
              ¡Hagámoslo <span className="gradient-text font-semibold">realidad!</span>
            </motion.h2>
            <motion.p {...fadeUp(0.15)} className="mt-6 text-sm md:text-base text-white/90 font-body font-light max-w-xl">
              Si ya inviertes en Ads y no estás escalando, el problema no es Meta: es la estrategia. Agenda una auditoría y veamos si tiene sentido escalar juntos.
            </motion.p>
            <motion.a
              {...fadeUp(0.3)}
              href={WA("Hola DT Growth Partners, quiero tener campañas exitosas")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
            >
              Hablemos por WhatsApp
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
            <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {["Auditoría sin costo", "Respuesta en 24 horas", "Sin permanencias"].map((b) => (
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

export default MetaAds;
