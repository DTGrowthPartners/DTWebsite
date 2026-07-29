import { useRef, useLayoutEffect, useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/lib/smooth-scroll";
import { ArrowUpRight, ArrowRight, TrendingUp, Code, Zap, MessageCircle, Heart, Send, MoreHorizontal, Bot, FileText, Slack, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siGmail, siWhatsapp, siShopify, siHubspot } from "simple-icons";
import adLocal from "@/assets/ads/ad-local.webp";
import adInsta from "@/assets/ads/ad-insta.webp";
import adCartagena from "@/assets/ads/ad-cartagena.webp";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import RotatingWord from "@/components/effects/RotatingWord";
import fondoHorizontal from "@/assets/fondo-horizontal.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0";

const PANELS = 5; // intro + 4 servicios

/* ─── Motivos decorativos por servicio ─────────────────────────── */

// 01 · Meta Ads — preview real de campaña: anuncio en Instagram → lead en WhatsApp
export const PhoneFrame = ({ children, compact = false }: { children: ReactNode; compact?: boolean }) => (
  <div
    className={`relative bg-[#101014] border border-white/25 shadow-[0_30px_80px_rgba(0,0,0,0.65)] ${
      compact ? "rounded-[0.8rem] p-[4px]" : "rounded-[1.35rem] p-[7px]"
    }`}
  >
    {/* Botones laterales */}
    <div className="absolute -right-[2px] top-[24%] h-12 w-[2.5px] rounded-r bg-white/20" />
    <div className="absolute -left-[2px] top-[20%] h-7 w-[2.5px] rounded-l bg-white/20" />
    <div className="absolute -left-[2px] top-[30%] h-7 w-[2.5px] rounded-l bg-white/20" />
    <div className={`relative overflow-hidden bg-black aspect-[9/18.5] ${compact ? "rounded-[0.5rem]" : "rounded-[1rem]"}`}>
      {children}
      {/* Isla de cámara */}
      <div
        className={`absolute top-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black ring-1 ring-white/20 ${
          compact ? "h-[6px] w-[26px]" : "h-[9px] w-[38px]"
        }`}
      />
    </div>
  </div>
);

export const InstagramAdPreview = () => (
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
      <img src={adInsta} alt="" className="absolute inset-0 h-full w-full object-cover scale-[1.5]" />
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

export const FacebookAdPreview = () => (
  <div className="absolute inset-0 bg-white flex flex-col font-body">
    <div className="px-2.5 pt-2.5 pb-1 text-[11px] font-bold tracking-tight text-[#1877F2]">facebook</div>
    <div className="flex items-center gap-1.5 px-2 pb-1">
      <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#0F76D6] text-white text-[6.5px] font-semibold" style={{ width: 18, height: 18 }}>
        DT
      </span>
      <div className="leading-tight">
        <div className="text-[7.5px] font-semibold text-neutral-900">DT Growth Partners</div>
        <div className="text-[6px] text-neutral-500">Publicidad · 🌎</div>
      </div>
      <MoreHorizontal className="ml-auto h-2.5 w-2.5 text-neutral-400" />
    </div>
    <p className="px-2 pb-1 text-[6.5px] text-neutral-700 leading-snug">
      Escala tu negocio con datos, no suposiciones.
    </p>
    <div className="relative flex-1 min-h-0 overflow-hidden">
      <img src={adLocal} alt="" className="absolute inset-0 h-full w-full object-cover" />
    </div>
    <div className="flex items-center justify-between gap-1 bg-neutral-100 px-2 py-1.5">
      <div className="leading-tight min-w-0">
        <div className="text-[5.5px] text-neutral-400">api.whatsapp.com</div>
        <div className="text-[6.5px] font-semibold text-neutral-800 truncate">Agenda tu consulta</div>
      </div>
      <span className="shrink-0 rounded bg-[#25D366] text-white text-[6px] font-medium px-1.5 py-0.5">WhatsApp</span>
    </div>
  </div>
);

export const StoryPreview = () => (
  <div className="absolute inset-0 bg-black flex flex-col">
    <img src={adCartagena} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95" />
    <div className="relative flex gap-0.5 px-1.5 pt-2">
      <span className="h-[2px] flex-1 rounded-full bg-white" />
      <span className="h-[2px] flex-1 rounded-full bg-white/30" />
      <span className="h-[2px] flex-1 rounded-full bg-white/30" />
    </div>
    <div className="relative flex items-center gap-1 px-1.5 pt-1.5">
      <span className="grid place-items-center rounded-full bg-[#0F76D6] text-white text-[6px] font-semibold" style={{ width: 15, height: 15 }}>
        DT
      </span>
      <span className="text-[6.5px] text-white font-body">dtgrowthpartners · <span className="text-white/70">Publicidad</span></span>
    </div>
    <div className="flex-1" />
    <div className="relative px-2 pb-1 text-center">
      <div className="text-[8px] text-white font-body font-medium leading-tight">Crecimiento medible para tu negocio</div>
    </div>
    <div className="relative mx-auto mb-2.5 rounded-full bg-white px-2.5 py-1 text-[6.5px] font-semibold text-black font-body">
      Más información
    </div>
  </div>
);

export const WhatsAppLeadPreview = () => (
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

const AD_PHONES = [
  { label: "Feed de Facebook", C: FacebookAdPreview, cls: "-rotate-3 translate-y-3", dur: "6s", delay: "0s" },
  { label: "Feed de Instagram", C: InstagramAdPreview, cls: "z-10 -translate-y-1", dur: "5.2s", delay: "0.3s" },
  { label: "Historias", C: StoryPreview, cls: "rotate-2 translate-y-2", dur: "6.6s", delay: "0.6s" },
  { label: "Tu WhatsApp", C: WhatsAppLeadPreview, cls: "rotate-[5deg] translate-y-4", dur: "5.8s", delay: "0.9s" },
];

export const MotifAds = () => (
  <div className="flex items-start gap-3 md:gap-4">
    {AD_PHONES.map((phone) => {
      const Preview = phone.C;
      return (
        <div key={phone.label} className={"flex flex-col items-center gap-2 " + phone.cls}>
          <div className="w-[150px] md:w-[170px] animate-float" style={{ animationDuration: phone.dur, animationDelay: phone.delay }}>
            <PhoneFrame>
              <Preview />
            </PhoneFrame>
          </div>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/60 whitespace-nowrap">
            {phone.label}
          </span>
        </div>
      );
    })}
  </div>
);

// 02 · Desarrollo Web — el código se escribe solo en el editor + terminal
const CODE_TOKENS: Array<{ t: string; c?: string }> = [
  { t: "const ", c: "text-[#26BDF0]" },
  { t: "web", c: "text-white" },
  { t: " = " },
  { t: "await ", c: "text-[#26BDF0]" },
  { t: "dt", c: "text-[#C2FBFF]" },
  { t: "." },
  { t: "construir", c: "text-[#C2FBFF]" },
  { t: "({\n  objetivo: " },
  { t: '"convertir"', c: "text-[#7dd3fc]" },
  { t: ",\n  stack: [" },
  { t: '"react"', c: "text-[#7dd3fc]" },
  { t: ", " },
  { t: '"node"', c: "text-[#7dd3fc]" },
  { t: "],\n  seo: " },
  { t: "true", c: "text-[#26BDF0]" },
  { t: ",\n});" },
];
const CODE_LEN = CODE_TOKENS.reduce((n, x) => n + x.t.length, 0);

const MotifBrowser = () => {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? CODE_LEN : 0);

  // Tipeo en bucle: escribe carácter a carácter, pausa con el código completo
  // y vuelve a empezar. Con reduced-motion el código queda fijo.
  useEffect(() => {
    if (reduced) return;
    let i = 0;
    let id = 0;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i >= CODE_LEN) {
        id = window.setTimeout(() => {
          i = 0;
          setCount(0);
          id = window.setTimeout(tick, 400);
        }, 4500);
      } else {
        id = window.setTimeout(tick, 34);
      }
    };
    id = window.setTimeout(tick, 600);
    return () => window.clearTimeout(id);
  }, [reduced]);

  let used = 0;
  const typed: ReactNode[] = [];
  for (const tok of CODE_TOKENS) {
    if (used >= count) break;
    const take = Math.min(tok.t.length, count - used);
    typed.push(
      <span key={used} className={tok.c}>
        {tok.t.slice(0, take)}
      </span>
    );
    used += tok.t.length;
  }

  return (
  <div className="w-[250px] md:w-[300px] animate-float" style={{ animationDuration: "6s" }}>
    {/* Editor */}
    <div className="liquid-glass rounded-xl overflow-hidden bg-black/40">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/25" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[8px] tracking-[0.1em] text-white/50">tu-negocio.tsx</span>
      </div>
      {/* min-h fija: la caja no crece mientras el código se escribe */}
      <pre className="p-3 text-[9px] md:text-[10px] leading-[1.7] font-mono text-white/80 whitespace-pre min-h-[8.2em]">
        {typed}
        <span className="motif-caret inline-block w-[6px] h-[11px] bg-[#26BDF0] align-middle ml-0.5" />
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
        </div>
      </div>
    </div>
  </div>
  );
};

// 03 · Automatizaciones & IA — malla de servicios interconectados (logos
// reales vía simple-icons) con las conexiones fluyendo entre todos.
type BrandGlyph = { path: string; hex: string };
const BrandIcon = ({ icon }: { icon: BrandGlyph }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill={`#${icon.hex}`} aria-hidden>
    <path d={icon.path} />
  </svg>
);

// Posición (x,y) de la esquina del ícono en un lienzo de 390×290
const FLOW_NODES = [
  { key: "pdf", label: "PDF", x: 4, y: 112, node: <FileText className="h-5 w-5 text-[#ff6b6b]" strokeWidth={1.5} /> },
  { key: "gmail", label: "Gmail", x: 56, y: 8, node: <BrandIcon icon={siGmail} /> },
  { key: "shopify", label: "Shopify", x: 240, y: 0, node: <BrandIcon icon={siShopify} /> },
  { key: "slack", label: "Slack", x: 336, y: 96, node: <Slack className="h-5 w-5 text-[#E01E5A]" strokeWidth={1.5} /> },
  { key: "crm", label: "CRM", x: 276, y: 212, node: <BrandIcon icon={siHubspot} /> },
  { key: "whatsapp", label: "WhatsApp", x: 76, y: 214, node: <BrandIcon icon={siWhatsapp} /> },
];
// Malla: anillo exterior + diagonales que se cruzan (sin nodo central)
const FLOW_LINKS: Array<[string, string, boolean]> = [
  ["pdf", "gmail", false],
  ["gmail", "shopify", true],
  ["shopify", "slack", false],
  ["slack", "crm", true],
  ["crm", "whatsapp", false],
  ["whatsapp", "pdf", true],
  ["gmail", "crm", true],
  ["shopify", "whatsapp", false],
  ["pdf", "slack", false],
];
const flowCenter = (key: string) => {
  const n = FLOW_NODES.find((x) => x.key === key)!;
  return [n.x + 24, n.y + 24] as const;
};

export const MotifFlow = () => (
  <div className="relative w-[340px] h-[260px] md:w-[390px] md:h-[290px] animate-float" style={{ animationDuration: "7s" }}>
    {/* Conexiones (debajo de los nodos) */}
    <svg viewBox="0 0 390 290" fill="none" className="absolute inset-0 w-full h-full" aria-hidden>
      {FLOW_LINKS.map(([a, b, cyan], i) => {
        const [x1, y1] = flowCenter(a);
        const [x2, y2] = flowCenter(b);
        return (
          <line
            key={`${a}-${b}`}
            className="motif-dash"
            style={{ animationDuration: `${1.8 + (i % 5) * 0.3}s` }}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={cyan ? "rgba(38,189,240,0.5)" : "rgba(255,255,255,0.28)"}
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        );
      })}
    </svg>

    {/* Nodos con logos reales */}
    {FLOW_NODES.map((n) => (
      <div key={n.key} className="absolute flex flex-col items-center gap-1.5" style={{ left: n.x, top: n.y }}>
        <span className="liquid-glass rounded-xl w-12 h-12 flex items-center justify-center bg-black/45">
          {n.node}
        </span>
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/60 whitespace-nowrap">
          {n.label}
        </span>
      </div>
    ))}

    {/* Chip de estado del flujo (wrapper posiciona: .liquid-glass fuerza
        position:relative y pisaría el absolute) */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
      <div className="liquid-glass rounded-full px-3 py-1 font-mono text-[7px] uppercase tracking-[0.2em] text-white/70 bg-black/40 whitespace-nowrap">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#26BDF0] align-middle mr-1.5" />
        flujo activo · 24/7
      </div>
    </div>
  </div>
);

// 04 · Chatbots — simulación de conversación real: el bot responde,
// agenda y califica el lead, en bucle.
type ChatMsg = { from: "user" | "bot"; text: string };
const CHAT_MSGS: ChatMsg[] = [
  { from: "user", text: "Hola! ¿Tienen disponibilidad para mañana?" },
  { from: "bot", text: "¡Claro! 👋 Tenemos a las 10:00 a.m. o 3:00 p.m. ¿Cuál prefieres?" },
  { from: "user", text: "A las 10 está perfecto" },
  { from: "bot", text: "Listo, agendado para mañana a las 10:00 ✅ Te llega la confirmación por WhatsApp." },
];
// Guion del bucle: cuántos mensajes se ven y si el bot está "escribiendo".
// [visibles, escribiendo, duración ms]
const CHAT_SCRIPT: Array<[number, boolean, number]> = [
  [0, false, 700],
  [1, false, 1100],
  [1, true, 1300],
  [2, false, 1900],
  [3, false, 1300],
  [3, true, 1300],
  [4, false, 2200],
  [5, false, 3800], // 5 = todos + chip de lead calificado
];

const TypingDots = () => (
  <div className="self-start liquid-glass rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1.5 bg-black/40">
    <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
  </div>
);

const MotifChat = () => {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? CHAT_SCRIPT.length - 1 : 0);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    let id = 0;
    const advance = () => {
      id = window.setTimeout(() => {
        i = (i + 1) % CHAT_SCRIPT.length;
        setStep(i);
        advance();
      }, CHAT_SCRIPT[i][2]);
    };
    advance();
    return () => window.clearTimeout(id);
  }, [reduced]);

  const [visible, typing] = CHAT_SCRIPT[step];

  return (
    <div className="w-[300px] md:w-[330px] animate-float" style={{ animationDuration: "6.5s" }}>
      <div className="liquid-glass rounded-2xl overflow-hidden bg-black/50">
        {/* Encabezado */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/10">
          <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F76D6] to-[#26BDF0]">
            <Bot className="h-4 w-4 text-white" strokeWidth={1.8} />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#4ade80] border-2 border-[#0a0918]" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-medium text-white font-body">Asistente DT</div>
            <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#4ade80]">en línea · responde en seg.</div>
          </div>
          <span className="ml-auto liquid-glass rounded-full px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/60">
            24/7
          </span>
        </div>

        {/* Conversación */}
        <div className="flex flex-col gap-2 px-3.5 py-3.5 min-h-[240px]">
          <AnimatePresence initial={false}>
            {CHAT_MSGS.slice(0, Math.min(visible, 4)).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-[10.5px] leading-snug font-body ${
                  m.from === "user"
                    ? "self-start rounded-bl-sm liquid-glass bg-black/40 text-white/90"
                    : "self-end rounded-br-sm bg-gradient-to-br from-[#0F76D6] to-[#1a9de0] text-white"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
            {typing && (
              <motion.div key="typing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <TypingDots />
              </motion.div>
            )}
            {visible >= 5 && (
              <motion.div
                key="lead"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="self-center mt-1 liquid-glass rounded-full px-3 py-1.5 flex items-center gap-1.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-[#C2FBFF] bg-black/40"
              >
                <Check className="h-3 w-3 text-[#26BDF0]" strokeWidth={2.5} />
                lead calificado → CRM
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Barra de entrada decorativa */}
        <div className="flex items-center gap-2 px-3.5 pb-3.5">
          <div className="flex-1 liquid-glass rounded-full px-3.5 py-2 text-[9.5px] text-white/40 font-body bg-black/40">
            Escribe un mensaje…
          </div>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F76D6] to-[#26BDF0]">
            <Send className="h-3.5 w-3.5 text-white" strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Panel con animación propia ligada al progreso del scroll: la tarjeta
 * escala, aparece y rota levemente cuando su panel pasa por el centro.
 */

const ServicesHorizontal = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

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
      Motif: MotifChat,
    },
  ];

  /* GSAP: pin de la sección + track horizontal con scrub, y coreografía
     interna por panel vía containerAnimation (triggers sobre el eje X). */
  useLayoutEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = getLenis();
    const onLenisScroll = () => ScrollTrigger.update();
    lenis?.on("scroll", onLenisScroll);

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const panels = gsap.utils.toArray<HTMLElement>(".sh-panel");
      const distance = () => window.innerWidth * (panels.length - 1);

      const tween = gsap.to(track, {
        xPercent: (-100 * (panels.length - 1)) / panels.length,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + distance(),
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Barra de progreso ligada al mismo recorrido
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: true,
          },
        }
      );

      // Coreografía por panel en el eje horizontal
      panels.forEach((panel) => {
        const num = panel.querySelector(".sh-num");
        const title = panel.querySelector(".sh-title");
        const motif = panel.querySelector(".sh-motif");
        const items = panel.querySelectorAll(".sh-stagger");

        if (num) {
          gsap.fromTo(
            num,
            { xPercent: 45 },
            {
              xPercent: -45,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }

        if (title) {
          gsap.from(title, {
            xPercent: 18,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 90%",
              end: "left 35%",
              scrub: true,
            },
          });
        }

        if (motif) {
          gsap.from(motif, {
            xPercent: 30,
            rotate: 4,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 95%",
              end: "left 40%",
              scrub: true,
            },
          });
        }

        if (items.length) {
          gsap.from(items, {
            y: 44,
            opacity: 0,
            stagger: 0.09,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 55%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      setTimeout(() => ScrollTrigger.refresh(), 400);
    }, sectionRef);

    return () => {
      lenis?.off("scroll", onLenisScroll);
      ctx.revert();
    };
  }, [reduced]);

  // Fila de tags + CTA sobre hairline (aprovecha el ancho completo)
  const MetaRow = ({ s }: { s: (typeof services)[number] }) => {
    const tags = t(s.highlightsKey).split(",").map((x) => x.trim()).filter(Boolean);
    const cta = (
      <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-white font-body whitespace-nowrap group-hover:gap-3 transition-all">
        {t("services.seeMore")}
        <ArrowUpRight className="h-5 w-5" />
      </span>
    );
    return (
      <div className="sh-stagger mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/90 font-body whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        {s.external ? (
          <a href={s.path} target="_blank" rel="noopener noreferrer" className="group">
            {cta}
          </a>
        ) : (
          <Link to={s.path} className="group">
            {cta}
          </Link>
        )}
      </div>
    );
  };

  // Capas de fondo compartidas (azul-púrpura profundo + video + mancha blur)
  const Background = (
    <>
      <div className="absolute inset-0 z-0" style={{ background: "hsl(260 87% 3%)" }} />
      <FadingVideo src={fondoHorizontal} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] max-w-none h-[527px] bg-gray-950 opacity-90 blur-[82px] z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent z-[2]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#07060F] to-transparent z-[2]" />
    </>
  );

  const IntroContent = (
    <div>
      <span className="sh-stagger block text-sm font-body text-white/80 mb-6">{t("services.kicker")}</span>
      <h2 className="sh-title font-heading font-normal text-white text-[13vw] md:text-[6.5vw] leading-[0.98] tracking-[-0.03em]">
        {t("services.title")}
        <br />
        <RotatingWord words={t("services.rotating").split("|")} interval={3100} className="font-semibold" />
      </h2>
      <p className="sh-stagger mt-6 text-base md:text-lg text-white/90 font-body font-light max-w-md">
        {t("services.subtitle")}
      </p>
      <div className="sh-stagger mt-10 inline-flex items-center gap-3 text-sm text-white/70 font-body">
        {t("services.scrollHint")}
        <ArrowRight className="h-4 w-4 animate-pulse" />
      </div>
    </div>
  );

  // Fallback accesible: stack vertical sin pin
  if (reduced) {
    return (
      <section id="servicios" className="relative py-24 overflow-hidden" style={{ background: "hsl(260 87% 3%)" }}>
        {Background}
        <div className="relative z-10 px-8 md:px-16">
          <div className="mb-16">{IntroContent}</div>
          <div className="space-y-20">
            {services.map((s) => {
              const M = s.Motif;
              return (
                <div key={s.num}>
                  <span className="font-mono text-xs text-white/50">{"Servicio " + s.num + " — 04"}</span>
                  <h3 className="mt-2 font-heading font-medium text-white text-5xl md:text-7xl tracking-[-0.03em]">{t(s.titleKey)}</h3>
                  <p className="mt-4 text-base text-white/85 font-body font-light max-w-xl">{t(s.descKey)}</p>
                  <MetaRow s={s} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicios" ref={sectionRef} className="relative h-screen overflow-hidden" style={{ background: "hsl(260 87% 3%)" }}>
      {Background}

      {/* Pista horizontal full-bleed */}
      <div ref={trackRef} className="relative z-10 flex h-full w-[500vw] will-change-transform">
        {/* Panel intro */}
        <div className="sh-panel relative w-screen h-full shrink-0 flex items-center px-8 md:px-16 lg:px-20">
          {IntroContent}
        </div>

        {/* Paneles de servicios a todo el ancho */}
        {services.map((s) => {
          const M = s.Motif;
          return (
            <div key={s.num} className="sh-panel relative w-screen h-full shrink-0 overflow-hidden">
              {/* Número fantasma gigante con parallax propio */}
              <span
                aria-hidden
                className="sh-num pointer-events-none select-none absolute top-[7%] md:-top-[2vw] right-[2vw] font-heading font-semibold text-white/[0.07] text-[34vw] md:text-[24vw] leading-none z-0"
              >
                {s.num}
              </span>

              {/* Motivo grande a la derecha */}
              <div className="sh-motif absolute right-[4vw] top-[42%] -translate-y-1/2 hidden md:block z-10 opacity-95">
                <M />
              </div>

              {/* Contenido: centrado vertical en móvil (evita el vacío arriba),
                  anclado abajo en desktop */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 z-20 px-8 md:px-16 lg:px-20 md:pb-28">
                <span className="sh-stagger block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0]">
                  {"Servicio " + s.num + " — 04"}
                </span>
                <h3 className="sh-title mt-3 font-heading font-medium text-white text-[12vw] md:text-[6.5vw] leading-[0.95] tracking-[-0.035em] md:whitespace-nowrap">
                  {t(s.titleKey)}
                </h3>
                <p className="sh-stagger mt-5 text-base md:text-xl text-white/85 font-body font-light leading-snug max-w-2xl">
                  {t(s.descKey)}
                </p>
                <MetaRow s={s} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Progreso */}
      <div className="absolute bottom-6 left-8 right-8 md:left-20 md:right-20 z-30">
        <div className="h-px bg-white/15 relative">
          <div ref={progressRef} className="absolute inset-y-0 left-0 w-full origin-left scale-x-0">
            <div className="h-px w-full bg-gradient-to-r from-[#0F76D6] via-[#26BDF0] to-[#C2FBFF]" />
          </div>
        </div>
        <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>{t("services.kicker").replace("// ", "")}</span>
          <span>01 — 04</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesHorizontal;
