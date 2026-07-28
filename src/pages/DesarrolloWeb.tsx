import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Package, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Aurora from "@/components/effects/Aurora";
import Tilt from "@/components/effects/Tilt";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import tVcc from "@/assets/webs/vcc-tile.webp";
import tBhk from "@/assets/webs/bhk-tile.webp";
import tAcbfit from "@/assets/webs/acbfit-tile.webp";
import tHotel from "@/assets/webs/hotel-tile.webp";
import tNeuro from "@/assets/webs/neurocarolina-tile.webp";
import tTennis from "@/assets/webs/tennis-tile.webp";
import tAya from "@/assets/webs/aya-tile.webp";
import tMotostop from "@/assets/webs/motostop-tile.webp";
import tPsico from "@/assets/webs/psico-tile.webp";
import tCasanova from "@/assets/webs/casanova2-tile.webp";
import tEquilibrio from "@/assets/webs/equilibrio-tile.webp";
import tCobraflow from "@/assets/webs/cobraflow-tile.webp";
import tSoftware from "@/assets/webs/software-tile.webp";

// Muro diagonal de webs reales: 3 columnas en bucle a distintas velocidades
const WALL_COLUMNS = [
  { tiles: [tVcc, tHotel, tAcbfit, tEquilibrio], duration: "58s", reverse: false },
  { tiles: [tBhk, tNeuro, tCasanova, tCobraflow], duration: "74s", reverse: true },
  { tiles: [tTennis, tAya, tMotostop, tPsico], duration: "66s", reverse: false },
];

// Metodología: pasos del proceso (los usa el dial giratorio estilo Orionix)
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico y levantamiento estratégico",
    description: "Analizamos objetivos, contexto y restricciones. Validamos que la solución tenga sentido técnico y de negocio.",
  },
  {
    step: "02",
    title: "Objetivos, requerimientos y roadmap",
    description: "Traducimos necesidades en objetivos medibles, priorizamos el alcance y definimos tiempos, hitos y responsables.",
  },
  {
    step: "03",
    title: "Diseño y prototipado funcional",
    description: "Validamos estructura y flujos con prototipos. Ajustamos con feedback temprano.",
  },
  {
    step: "04",
    title: "Desarrollo e iteración controlada",
    description: "Construimos por fases con ajustes progresivos. Cada iteración mejora rendimiento y usabilidad.",
  },
  {
    step: "05",
    title: "Validación final y optimización",
    description: "Perfeccionamos hasta cumplir criterios de calidad. Entregamos lista para operar y escalar.",
  },
  {
    step: "06",
    title: "Entrega y acompañamiento",
    description: "Realizamos puesta en producción y acompañamiento inicial. Preparada para futuras mejoras.",
  },
];

/**
 * Dial de metodología (adaptación del carrusel de orionix.framer.website):
 * la sección se fija y, al hacer scroll, la rueda de números gira hasta que
 * el paso activo aterriza en el punto marcador mientras el contenido rota.
 */
const DIAL_STEP_ANGLE = 32;

const MethodDial = () => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(wrapRef);
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const n = PROCESS_STEPS.length;
      gsap.to(wheelRef.current, {
        rotate: -DIAL_STEP_ANGLE * (n - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => "+=" + (n - 1) * window.innerHeight * 0.65,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (n - 1));
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActive(idx);
            }
          },
        },
      });
    });
    return () => mm.revert();
  }, []);

  const step = PROCESS_STEPS[active];
  return (
    <div ref={wrapRef} className="relative hidden md:flex h-screen items-center overflow-hidden">
      {/* Rueda: aro gigante que asoma por la izquierda */}
      <div className="pointer-events-none absolute left-[-780px] xl:left-[-720px] top-1/2 -translate-y-1/2 w-[1040px] h-[1040px]">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        {/* Punto marcador (las 3 en punto) */}
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#26BDF0] shadow-[0_0_14px_rgba(38,189,240,0.9)]" />
        {/* Números girando con la rueda */}
        <div ref={wheelRef} className="absolute inset-0 will-change-transform">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.step} className="absolute inset-0" style={{ transform: `rotate(${i * DIAL_STEP_ANGLE}deg)` }}>
              <span
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-[38%] font-heading text-5xl tracking-[-0.02em] transition-colors duration-500 ${
                  i === active ? "text-white" : "text-white/20"
                }`}
              >
                {s.step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido del paso activo */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="md:pl-[340px] xl:pl-[400px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 44, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -34, filter: "blur(5px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0]">
                Paso {step.step} — 0{PROCESS_STEPS.length}
              </span>
              <h3 className="mt-4 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.0] tracking-[-0.024em]">
                {step.title}
              </h3>
              <p className="mt-6 text-base md:text-lg text-white/75 font-body font-light max-w-xl">
                {step.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progreso del dial */}
          <div className="mt-10 flex items-center gap-3">
            {PROCESS_STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-gradient-to-r from-[#0F76D6] to-[#26BDF0]" : "w-4 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Titular del hero: palabra a palabra; g = degradado, br = salto de línea
const HERO_WORDS: Array<{ t?: string; g?: boolean; br?: boolean }> = [
  { t: "Desarrollo", g: true },
  { t: "web", g: true },
  { t: "en", g: true },
  { t: "Cartagena", g: true },
  { br: true },
  { t: "que" },
  { t: "convierte" },
  { t: "visitantes" },
  { t: "en" },
  { t: "clientes" },
];

const WebsWall = () => (
  <div
    aria-hidden
    className="absolute -inset-x-[16%] -inset-y-[28%] [transform:perspective(1400px)_rotateX(12deg)_rotate(-8deg)_scale(1.22)] opacity-45"
  >
    <div className="grid grid-cols-3 gap-4 h-full">
      {WALL_COLUMNS.map((col, ci) => (
        <div key={ci} className="overflow-hidden">
          <div
            className="animate-webs-drift flex flex-col gap-4"
            style={{ "--drift-duration": col.duration, animationDirection: col.reverse ? "reverse" : "normal" } as React.CSSProperties}
          >
            {[...col.tiles, ...col.tiles].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                loading={i < 4 ? "eager" : "lazy"}
                className="w-full rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import vanilla-tilt
import VanillaTilt from "vanilla-tilt";
import SEO from "@/components/SEO";

const webDevServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Desarrollo Web Profesional",
  "provider": {
    "@type": "Organization",
    "name": "DT Growth Partners",
    "url": "https://dtgrowthpartners.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cartagena"
  },
  "description": "Desarrollo web profesional en Cartagena. Landing pages, tiendas online y sitios web optimizados para SEO y conversión."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con qué tipo de empresas trabajan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con negocios que buscan crecer con estrategia, tecnología y datos. Idealmente empresas que ya venden y quieren escalar sus procesos digitales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan con cualquier tipo de proyecto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Evaluamos cada caso para asegurarnos de que el proyecto tenga sentido a nivel técnico y de negocio antes de avanzar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma un proyecto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del alcance. Un proyecto estándar suele tomar entre 3 y 8 semanas, según complejidad y validaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo solicitar cambios durante el desarrollo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro proceso es iterativo. Los ajustes se realizan dentro del alcance definido y se validan en cada etapa del proyecto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué necesito tener listo antes de empezar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una idea clara del objetivo del proyecto y disponibilidad para validaciones clave. Nosotros guiamos el resto del proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Entregan el proyecto listo para operar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Entregamos la solución funcional, optimizada y lista para usarse, con métricas y configuraciones básicas incluidas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen soporte después de la entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Podemos acompañarte con soporte, mejoras continuas o escalamiento según tus necesidades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan solo desarrollo web o también estrategia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ambos. No desarrollamos sin entender primero el contexto y los objetivos del negocio."
      }
    },
    {
      "@type": "Question",
      "name": "¿El proyecto es de pago único o mensual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El desarrollo es un proyecto puntual. El acompañamiento, optimización o crecimiento se maneja de forma recurrente si el cliente lo requiere."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé si este servicio es para mí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la consulta inicial revisamos tu caso y te decimos con total claridad si podemos ayudarte o no."
      }
    }
  ]
};

const DesarrolloWeb = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isWebCorporativaDialogOpen, setIsWebCorporativaDialogOpen] = useState(false);
  const [isEcommerceDialogOpen, setIsEcommerceDialogOpen] = useState(false);
  const [isWebAppDialogOpen, setIsWebAppDialogOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Initialize Vanilla Tilt
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 12,
        speed: 300,
        glare: false,
        scale: 1.0,
        gyroscopeMinAngleX: 1,
      });
    }

    // Cleanup function
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  /* Hero — parallax sutil del muro siguiendo el mouse */
  const heroRef = useRef<HTMLElement | null>(null);
  const heroWallRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const hero = heroRef.current;
    const wall = heroWallRef.current;
    if (!hero || !wall || !matchMedia("(hover: hover)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const xTo = gsap.quickTo(wall, "x", { duration: 0.9, ease: "power3.out" });
    const yTo = gsap.quickTo(wall, "y", { duration: 0.9, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - 0.5) * -26);
      yTo(((e.clientY - r.top) / r.height - 0.5) * -18);
    };
    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  /* Tipos de servicio — imagen que persigue el cursor (CodePen PwqrzeG):
     al entrar a una fila, su captura aparece y sigue el mouse con quickTo. */
  const reasonsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = reasonsRef.current;
    if (!root || !matchMedia("(hover: hover)").matches) return;

    const cleanups: Array<() => void> = [];
    root.querySelectorAll<HTMLElement>(".dw-row").forEach((el) => {
      const image = el.querySelector<HTMLElement>(".dw-swipeimage");
      if (!image) return;
      gsap.set(image, { xPercent: -50, yPercent: -50 });
      const setX = gsap.quickTo(image, "x", { duration: 0.4, ease: "power3" });
      const setY = gsap.quickTo(image, "y", { duration: 0.4, ease: "power3" });
      let first = true;
      const align = (e: MouseEvent) => {
        if (first) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          first = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };
      const stop = () => document.removeEventListener("mousemove", align);
      const fade = gsap.to(image, { autoAlpha: 1, ease: "none", paused: true, duration: 0.12, onReverseComplete: stop });
      const enter = (e: MouseEvent) => {
        first = true;
        fade.play();
        document.addEventListener("mousemove", align);
        align(e);
      };
      const leave = () => fade.reverse();
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        stop();
        fade.kill();
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Cubo que "encaja" en cada molde (CodePen GgpMeZp adaptado sin three.js):
     Flip.fit lo lleva de un slot punteado al siguiente, scrubbed con el
     scroll, mientras el cubo CSS 3D rota media vuelta por salto. */
  const flipAreaRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger, Flip);
    const area = flipAreaRef.current;
    if (!area) return;

    let ctx: gsap.Context | null = null;
    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const cube = area.querySelector<HTMLElement>(".dw-cube");
        const core = area.querySelector<HTMLElement>(".dw-cube-core");
        const mB = area.querySelector<HTMLElement>(".dw-marker-b");
        const mC = area.querySelector<HTMLElement>(".dw-marker-c");
        if (!cube || !core || !mB || !mC) return;

        gsap.set(core, { rotateX: -16, rotateY: 28 });
        const sB = Flip.getState(mB);
        const sC = Flip.getState(mC);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: area,
            start: "top 55%",
            end: "bottom 90%",
            scrub: 1.5,
          },
        });

        tl.add(Flip.fit(cube, sB, { duration: 1, ease: "none", scale: true }) as gsap.core.Tween, 0)
          .to(core, { rotateX: "+=180", rotateY: "+=180", duration: 1, ease: "none" }, "<")
          .addLabel("mid", "+=0.35")
          .add(Flip.fit(cube, sC, { duration: 1, ease: "none", scale: true }) as gsap.core.Tween, "mid")
          .to(core, { rotateX: "+=180", rotateY: "+=180", duration: 1, ease: "none" }, "<");
      }, area);
    };

    build();
    let resizeId = 0;
    const onResize = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(build, 300);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeId);
      ctx?.revert();
    };
  }, []);

  const projects = [
    {
      id: 0,
      title: "Equilibrio Clinic",
      category: "Clínica Estética",
      description: "Proyecto de estrategia digital y rediseño web para Equilibrio Clinic, clínica líder en estética y dermatología en Cartagena. El objetivo fue comunicar su experiencia y tecnología avanzada, creando una plataforma que proyecta confianza y optimiza la agenda de valoraciones.",
      logo: "/images/2.logo-equilibrio-clinic.png",
      previewImage: "/images/desarrolloweb/web3.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EEquilibrio Clinic%3C/text%3E%3C/svg%3E",
      url: "https://equilibrioclinic.com.co",
      technologies: ["WordPress", "Elementor", "Integración software Agenda"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2025"
      }
    },
    {
      id: 1,
      title: "Arismendy Andrade",
      category: "Constructora",
      description: "Sitio web corporativo para un proveedor de soluciones industriales. Diseño intuitivo con una presentación clara de su portafolio de equipos y servicios, y una estructura optimizada para facilitar la generación de cotizaciones y el contacto comercial.",
      logo: "https://dairotraslavina.com/wp-content/uploads/2025/06/LOGO_LOGO-7aa39e.svg",
      previewImage: "/images/desarrolloweb/web2.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EArismendy Andrade%3C/text%3E%3C/svg%3E",
      url: "https://arismendyandrade.com",
      technologies: ["WordPress", "GSAP", "Tailwind CSS", "SEO"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2024"
      }
    },
    {
      id: 2,
      title: "ACBFIT",
      category: "Gimnasio/Fitness",
      description: "Sitio web corporativo para gimnasio y centro de fitness. Diseño moderno con presentación clara de servicios, horarios, planes de membresía y sistema de reservas online para clases y entrenamientos personalizados.",
      logo: "/images/5.logo-acbfit-4.png",
      previewImage: "/images/desarrolloweb/web1.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EACBFIT%3C/text%3E%3C/svg%3E",
      url: "https://acbfit.com",
      technologies: ["WordPress", "Elementor", "Integración software Evo"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2024"
      }
    }
  ];

  // stat: dato duro con contador animado que ancla cada promesa
  const services = [
    {
      icon: Code,
      title: "Desarrollo orientado a conversión (CRO)",
      description: "Cada web parte de un objetivo claro: ventas, leads o activación.",
      features: ["Arquitectura pensada para guiar decisiones.", "Copy y UI alineados a intención del usuario.", "CTAs estratégicos, no decorativos.", "Integración con Meta Ads, WhatsApp, CRM, formularios y automatizaciones."],
      stat: { value: 10, suffix: "x", label: "ROI promedio" },
    },
    {
      icon: Package,
      title: "Diseño + performance + datos",
      description: "No separamos diseño de resultados.",
      features: ["UI/UX moderno con foco en claridad.", "Métricas instaladas desde el día uno (GA4, eventos, conversiones).", "Optimización continua basada en datos reales."],
      stat: { value: 95, prefix: "+", label: "PageSpeed score" },
    },
    {
      icon: Smartphone,
      title: "Tecnología moderna, escalable y rápida",
      description: "Construimos con stacks actuales y probados.",
      features: ["Landing pages rápidas (Core Web Vitals).", "Webs escalables (Next.js, Shopify, CMS optimizados).", "Integraciones con herramientas de marketing y automatización."],
      stat: { value: 8, prefix: "3–", label: "Semanas al aire" },
    },
  ];

  // img: captura real que persigue el cursor al pasar por la fila
  const reasons = [
    {
      title: "Landing Page de Conversión",
      description: "Cada landing está pensada para guiar al usuario a una única acción, sin distracciones, con velocidad y claridad.",
      img: tBhk,
    },
    {
      title: "Web Corporativa",
      description: "Un sitio web profesional multipágina que genera confianza, presenta tus servicios con claridad y posiciona tu marca como referente en tu industria.",
      img: tAya,
    },
    {
      title: "E-commerce / Web de Venta",
      description: "Tienda online optimizada para ventas, con pasarela de pago, gestión de productos y automatización de procesos.",
      img: tMotostop,
    },
    {
      title: "Aplicaciones Web / Desarrollo Web Personalizado",
      description: "Soluciones web a medida que automatizan procesos, integran sistemas y resuelven problemas específicos de tu negocio.",
      img: tSoftware,
    },
  ];


  const faqs = [
    {
      question: "¿Con qué tipo de empresas trabajan?",
      answer: "Trabajamos con negocios que buscan crecer con estrategia, tecnología y datos. Idealmente empresas que ya venden y quieren escalar sus procesos digitales.",
    },
    {
      question: "¿Trabajan con cualquier tipo de proyecto?",
      answer: "No. Evaluamos cada caso para asegurarnos de que el proyecto tenga sentido a nivel técnico y de negocio antes de avanzar.",
    },
    {
      question: "¿Cuánto tiempo toma un proyecto?",
      answer: "Depende del alcance. Un proyecto estándar suele tomar entre 3 y 8 semanas, según complejidad y validaciones.",
    },
    {
      question: "¿Puedo solicitar cambios durante el desarrollo?",
      answer: "Sí. Nuestro proceso es iterativo. Los ajustes se realizan dentro del alcance definido y se validan en cada etapa del proyecto.",
    },
    {
      question: "¿Qué necesito tener listo antes de empezar?",
      answer: "Una idea clara del objetivo del proyecto y disponibilidad para validaciones clave. Nosotros guiamos el resto del proceso.",
    },
    {
      question: "¿Entregan el proyecto listo para operar?",
      answer: "Sí. Entregamos la solución funcional, optimizada y lista para usarse, con métricas y configuraciones básicas incluidas.",
    },
    {
      question: "¿Ofrecen soporte después de la entrega?",
      answer: "Sí. Podemos acompañarte con soporte, mejoras continuas o escalamiento según tus necesidades.",
    },
    {
      question: "¿Trabajan solo desarrollo web o también estrategia?",
      answer: "Ambos. No desarrollamos sin entender primero el contexto y los objetivos del negocio.",
    },
    {
      question: "¿El proyecto es de pago único o mensual?",
      answer: "El desarrollo es un proyecto puntual. El acompañamiento, optimización o crecimiento se maneja de forma recurrente si el cliente lo requiere.",
    },
    {
      question: "¿Cómo sé si este servicio es para mí?",
      answer: "En la consulta inicial revisamos tu caso y te decimos con total claridad si podemos ayudarte o no.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Desarrollo Web en Cartagena | Sitios que Convierten | DT Growth Partners"
        description="Desarrollo web profesional en Cartagena. Landing pages, tiendas online y sitios web optimizados para SEO y conversión. Cotiza hoy."
        canonical="https://dtgrowthpartners.com/servicios/desarrollo-web"
        jsonLd={[webDevServiceSchema, faqSchema]}
      />
      <Navigation />

      <main>
        {/* Hero — muro diagonal de webs reales con parallax al mouse,
            titular palabra a palabra y prueba social */}
        <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden bg-[#07060F] -mt-16">
          {/* Entrada cinematográfica del muro + capa de parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 1.09 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div ref={heroWallRef} className="absolute inset-0 will-change-transform">
              <WebsWall />
            </div>
          </motion.div>

          {/* Velo para legibilidad + fundido con la siguiente sección */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07060F]/90 via-[#07060F]/45 to-[#07060F]/25 z-[1]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-[1]" />

          {/* Pista de scroll */}
          <div className="pointer-events-none absolute bottom-8 right-8 md:right-12 z-10 hidden md:flex flex-col items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
              scroll
            </span>
            <span className="w-px h-12 bg-gradient-to-b from-[#26BDF0] to-transparent animate-pulse" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 pb-14 md:pb-16 pt-36">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#26BDF0] mb-4"
            >
              {"// Desarrollo Web"}
            </motion.span>

            {/* Titular palabra a palabra (blur-up), degradado en la primera línea */}
            <h1 className="font-heading font-normal text-white text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em] max-w-4xl flex flex-wrap gap-x-[0.26em]">
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
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-base md:text-xl text-white/85 font-body font-light max-w-xl"
            >
              Landing pages, webs corporativas, e-commerce y software a medida, optimizados para crecer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => document.getElementById("webs-portafolio")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-black font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                Ver portafolio
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20interesa%20desarrollar%20una%20web%20que%20convierta%20visitantes%20en%20clientes.%20¿Podr%C3%ADamos%20agendar%20una%20consulta%20estrat%C3%A9gica%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm md:text-base font-medium text-white font-body transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] bg-black/30"
              >
                Agendar consulta estratégica
              </a>
            </motion.div>

            {/* Prueba social en chips de vidrio */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-2.5"
            >
              {["+25 proyectos entregados", "16 webs en producción", "Next.js · Shopify · SEO"].map((c) => (
                <span key={c} className="liquid-glass rounded-full px-4 py-1.5 text-[11px] md:text-xs text-white/90 font-body whitespace-nowrap bg-black/30">
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Por qué con nosotros + Tipos de servicio — una sola sección */}
        <section id="webs-portafolio" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[6%] left-[-120px] w-[520px] h-[520px] opacity-25" },
              { color: "cyan", className: "top-[42%] right-[6%] w-[480px] h-[480px] opacity-20", delay: "-7s" },
              { color: "purple", className: "bottom-[8%] left-[10%] w-[520px] h-[520px] opacity-20", delay: "-5s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Por qué con nosotros"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              No construimos páginas, construimos <span className="gradient-text font-semibold">activos digitales</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Webs que convierten, escalan y se integran a tu sistema de ventas.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Tilt 3D + glare (transitions.dev #19) y spotlight que sigue el cursor */}
                    <Tilt cardClassName="!rounded-[1.25rem]">
                      <div
                        className="group liquid-glass rounded-[1.25rem] p-7 bg-[#0a0918]/60 h-full"
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

                        <div className="flex items-start justify-between gap-4">
                          <span className="liquid-glass rounded-xl w-12 h-12 flex items-center justify-center bg-black/40 shrink-0">
                            <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                          </span>
                          <div className="text-right">
                            <div className="font-heading font-medium text-white text-3xl md:text-4xl tracking-[-0.02em] leading-none">
                              <AnimatedCounter
                                value={service.stat.value}
                                prefix={service.stat.prefix ?? ""}
                                suffix={service.stat.suffix ?? ""}
                                duration={1.6}
                              />
                            </div>
                            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/45 mt-1.5">
                              {service.stat.label}
                            </div>
                          </div>
                        </div>

                        <h3 className="mt-5 font-heading font-medium text-white text-xl md:text-2xl tracking-[-0.01em] leading-tight">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 font-body font-light">{service.description}</p>
                        <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/75 font-body font-light">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#26BDF0]" strokeWidth={1.7} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Tilt>
                  </motion.div>
                );
              })}
            </div>

            {/* Tipos de servicio, fusionado: la solución correcta para tu objetivo */}
            <div className="mt-24 md:mt-28">
              <h3 className="font-heading font-normal text-white text-3xl md:text-5xl leading-[1.0] tracking-[-0.024em] max-w-3xl">
                La solución correcta para <span className="gradient-text font-semibold">tu objetivo</span>
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/75 font-body font-light max-w-xl">
                Validar, posicionar o escalar: no todos necesitan lo mismo. Toca una opción para ver el detalle.
              </p>

            <div ref={reasonsRef} className="mt-10 border-t border-white/10">
              {reasons.map((reason, index) => (
                <motion.button
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    if (index === 0) setIsDialogOpen(true);
                    if (index === 1) setIsWebCorporativaDialogOpen(true);
                    if (index === 2) setIsEcommerceDialogOpen(true);
                    if (index === 3) setIsWebAppDialogOpen(true);
                  }}
                  className="dw-row group w-full text-left py-8 md:py-10 grid grid-cols-[auto_1fr_auto] gap-5 md:gap-10 items-center border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03] md:px-6 md:-mx-6 rounded-2xl"
                >
                  {/* Captura que persigue el cursor (fixed, sobre todo) */}
                  <img
                    aria-hidden
                    src={reason.img}
                    alt=""
                    className="dw-swipeimage fixed top-0 left-0 w-[300px] md:w-[360px] rounded-xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.65)] opacity-0 invisible pointer-events-none z-[60]"
                  />
                  <span className="font-mono text-xs text-white/40">0{index + 1}</span>
                  <div className="min-w-0">
                    <h3 className="font-heading font-medium text-white text-xl md:text-3xl tracking-[-0.02em] leading-tight transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F76D6] group-hover:via-[#26BDF0] group-hover:to-[#C2FBFF]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 font-body font-light max-w-2xl">{reason.description}</p>
                  </div>
                  <span className="liquid-glass rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </span>
                </motion.button>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Dialog for Landing Page details */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md bg-[#0a0918]/95 backdrop-blur-2xl border-white/10 w-[calc(100%-2rem)] sm:w-full rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading font-semibold text-2xl gradient-text">
                Landing Page de Conversión
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                Cada landing está pensada para guiar al usuario a una única acción, sin distracciones, con velocidad y claridad.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Ideal para:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Validar una oferta</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Captar leads</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Tráfico desde Meta Ads o Google Ads</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button
                  className="w-full btn-primary group"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Entendido
                  <CheckCircle2 className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  className="w-full btn-outline group"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20una%20landing%20que%20convierta%20visitantes%20en%20clientes.%20¿Podemos%20hablar%20sobre%20mi%20proyecto%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quiero una landing que convierta
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog for Web Corporativa details */}
        <Dialog open={isWebCorporativaDialogOpen} onOpenChange={setIsWebCorporativaDialogOpen}>
          <DialogContent className="sm:max-w-md bg-[#0a0918]/95 backdrop-blur-2xl border-white/10 w-[calc(100%-2rem)] sm:w-full rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading font-semibold text-2xl gradient-text">
                Web Corporativa
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                Un sitio web profesional multipágina que genera confianza, presenta tus servicios con claridad y posiciona tu marca como referente en tu industria.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Ideal para:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Empresas que necesitan credibilidad</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Servicios de ticket medio–alto</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Marca personal o empresa establecida</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button
                  className="w-full btn-primary group"
                  onClick={() => setIsWebCorporativaDialogOpen(false)}
                >
                  Entendido
                  <CheckCircle2 className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  className="w-full btn-outline group"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20desarrollar%20una%20web%20corporativa%20profesional.%20¿Podemos%20hablar%20sobre%20mi%20proyecto%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desarrollar mi web corporativa
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog for E-commerce details */}
        <Dialog open={isEcommerceDialogOpen} onOpenChange={setIsEcommerceDialogOpen}>
          <DialogContent className="sm:max-w-md bg-[#0a0918]/95 backdrop-blur-2xl border-white/10 w-[calc(100%-2rem)] sm:w-full rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading font-semibold text-2xl gradient-text">
                E-commerce / Web de Venta
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                Tienda online optimizada para ventas, con pasarela de pago, gestión de productos y automatización de procesos.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Ideal para:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Negocios que venden productos o servicios online</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Marcas que quieren escalar ventas</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Tráfico pago + orgánico</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button
                  className="w-full btn-primary group"
                  onClick={() => setIsEcommerceDialogOpen(false)}
                >
                  Entendido
                  <CheckCircle2 className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  className="w-full btn-outline group"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20crear%20mi%20tienda%20online.%20¿Podemos%20hablar%20sobre%20mi%20proyecto%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Crear mi tienda online
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog for Web App / Custom Development details */}
        <Dialog open={isWebAppDialogOpen} onOpenChange={setIsWebAppDialogOpen}>
          <DialogContent className="sm:max-w-md bg-[#0a0918]/95 backdrop-blur-2xl border-white/10 w-[calc(100%-2rem)] sm:w-full rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading font-semibold text-2xl gradient-text">
                Aplicaciones Web / Desarrollo Web Personalizado
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                Soluciones web a medida que automatizan procesos, integran sistemas y resuelven problemas específicos de tu negocio.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Ideal para:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Negocios que necesitan una solución a medida</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Empresas con procesos manuales que quieren automatizar</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Productos digitales, plataformas internas o sistemas propios</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button
                  className="w-full btn-primary group"
                  onClick={() => setIsWebAppDialogOpen(false)}
                >
                  Entendido
                  <CheckCircle2 className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  className="w-full btn-outline group"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20desarrollar%20una%20aplicaci%C3%B3n%20web%20personalizada.%20¿Podemos%20hablar%20sobre%20mi%20proyecto%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desarrollar mi aplicación web
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Encaja en tu negocio — cubo Flip que salta entre moldes al scroll,
            acompañado de contenido editorial por etapa */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          {/* Retícula de fondo (como el pen: grilla fina + gruesa) */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
              maskImage: "linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)",
              WebkitMaskImage: "linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)",
            }}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// A tu medida"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              Un proyecto que <span className="gradient-text font-semibold">encaja</span> donde lo necesites
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Empieza simple y evoluciona sin rehacer nada: el mismo sistema toma la forma que tu negocio pide en cada etapa.
            </p>

            <div ref={flipAreaRef} className="relative mt-6">
              {/* Etapa 1 — Landing (aquí nace el cubo) */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20 min-h-[52vh]">
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Etapa 01</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-2xl md:text-4xl tracking-[-0.02em] leading-tight">
                    Arranca enfocado: una landing que convierte
                  </h3>
                  <p className="mt-3.5 text-sm md:text-base text-white/70 font-body font-light max-w-md">
                    Una sola página, un solo objetivo: convertir el tráfico de pauta en leads y ventas desde la primera semana.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Core Web Vitals", "Copy orientado a acción", "Integrada con Meta Ads"].map((c) => (
                      <span key={c} className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap">
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Preview real de la etapa */}
                  <Tilt cardClassName="!rounded-xl">
                    <div className="mt-6 w-[230px] -rotate-2 liquid-glass rounded-xl p-2 bg-[#0a0918]/60">
                      <img src={tBhk} alt="" loading="lazy" className="rounded-lg w-full" />
                      <span className="block mt-1.5 px-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">bhk · landing</span>
                    </div>
                  </Tilt>
                </motion.div>
                <div className="flex justify-center md:justify-end md:pr-[8%]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-[200px] h-[200px] rounded-xl border-2 border-dashed border-white/25 grid place-items-center">
                      {/* Cubo CSS 3D con el degradado de marca */}
                      <div className="dw-cube absolute inset-0 [perspective:900px]">
                        <div className="dw-cube-core relative w-full h-full [transform-style:preserve-3d]">
                          {[
                            "[transform:translateZ(100px)]",
                            "[transform:rotateY(180deg)_translateZ(100px)]",
                            "[transform:rotateY(90deg)_translateZ(100px)]",
                            "[transform:rotateY(-90deg)_translateZ(100px)]",
                            "[transform:rotateX(90deg)_translateZ(100px)]",
                            "[transform:rotateX(-90deg)_translateZ(100px)]",
                          ].map((t, i) => (
                            <div
                              key={i}
                              className={`absolute inset-0 rounded-lg border border-white/25 bg-gradient-to-br from-[#0F76D6] via-[#26BDF0] to-[#C2FBFF] ${t} ${
                                i % 2 ? "opacity-90" : ""
                              } grid place-items-center [backface-visibility:hidden]`}
                            >
                              <span className="font-heading font-semibold text-black/55 text-3xl select-none">DT</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">Landing</span>
                  </div>
                </div>
              </div>

              {/* Etapa 2 — E-commerce (slot a la izquierda, texto a la derecha) */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20 min-h-[52vh]">
                <div className="order-2 md:order-1 flex justify-center md:justify-start md:pl-[10%]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[110px] h-[110px] rounded-xl border-2 border-dashed border-white/25 grid place-items-center">
                      <div className="dw-marker-b w-full h-full" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">E-commerce</span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="order-1 md:order-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Etapa 02</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-2xl md:text-4xl tracking-[-0.02em] leading-tight">
                    Escala a tienda: catálogo, pagos y pedidos
                  </h3>
                  <p className="mt-3.5 text-sm md:text-base text-white/70 font-body font-light max-w-md">
                    El mismo sistema crece a e-commerce completo con pasarela de pago local y automatización de pedidos.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Shopify / WooCommerce", "Pasarelas locales", "Email + WhatsApp"].map((c) => (
                      <span key={c} className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap">
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Preview real de la etapa */}
                  <Tilt cardClassName="!rounded-xl">
                    <div className="mt-6 w-[230px] rotate-2 liquid-glass rounded-xl p-2 bg-[#0a0918]/60">
                      <img src={tMotostop} alt="" loading="lazy" className="rounded-lg w-full" />
                      <span className="block mt-1.5 px-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">motos top · e-commerce</span>
                    </div>
                  </Tilt>
                </motion.div>
              </div>

              {/* Etapa 3 — Software a medida */}
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20 min-h-[52vh]">
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Etapa 03</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-2xl md:text-4xl tracking-[-0.02em] leading-tight">
                    Conviértelo en tu software
                  </h3>
                  <p className="mt-3.5 text-sm md:text-base text-white/70 font-body font-light max-w-md">
                    Cuando el negocio lo pide, evoluciona a plataforma: dashboards, roles, integraciones y flujos a la medida de tu operación.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Dashboards", "Integraciones API", "Automatizaciones"].map((c) => (
                      <span key={c} className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-white/90 font-body whitespace-nowrap">
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Preview real de la etapa */}
                  <Tilt cardClassName="!rounded-xl">
                    <div className="mt-6 w-[230px] -rotate-1 liquid-glass rounded-xl p-2 bg-[#0a0918]/60">
                      <img src={tSoftware} alt="" loading="lazy" className="rounded-lg w-full" />
                      <span className="block mt-1.5 px-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">software a medida</span>
                    </div>
                  </Tilt>
                </motion.div>
                <div className="flex justify-center md:justify-end md:pr-[12%]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-[160px] h-[160px] rounded-xl border-2 border-dashed border-white/25 grid place-items-center">
                      <div className="dw-marker-c w-full h-full" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">Software a medida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología — cards de vidrio con número fantasma */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-[10%] left-[10%] w-[460px] h-[460px] opacity-20" },
              { color: "blue", className: "bottom-[10%] right-[-100px] w-[520px] h-[520px] opacity-25", delay: "-8s" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Metodología"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
              De la idea al <span className="gradient-text font-semibold">despliegue</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
              Proceso estructurado que asegura resultados medibles en cada etapa.
            </p>

            {/* Móvil: cards apiladas. Desktop: dial giratorio pineado */}
            <div className="mt-12 md:hidden grid gap-4">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative liquid-glass rounded-[1.25rem] p-6 bg-[#0a0918]/50 overflow-hidden">
                  <span aria-hidden className="pointer-events-none select-none absolute -top-4 right-1 font-heading font-semibold text-white/[0.06] text-[5.5rem] leading-none">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">Paso {step.step}</span>
                  <h3 className="mt-3 font-heading font-medium text-white text-lg leading-tight">{step.title}</h3>
                  <p className="mt-2.5 text-sm text-white/70 font-body font-light leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dial estilo Orionix (md+) */}
          <MethodDial />
        </section>

        {/* FAQs — encabezado sticky a la izquierda, acordeones numerados a la derecha */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[{ color: "blue", className: "bottom-[12%] left-[-120px] w-[520px] h-[520px] opacity-20", delay: "-6s" }]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 grid lg:grid-cols-[minmax(300px,420px)_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-body text-white/80">{"// FAQ"}</span>
              <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl leading-[0.98] tracking-[-0.024em]">
                Lo que todos preguntan <span className="gradient-text font-semibold">antes de empezar</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-white/75 font-body font-light">
                ¿Tu duda no está aquí? Escríbenos directo y te respondemos con claridad.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Tengo%20una%20pregunta%20sobre%20el%20servicio%20de%20desarrollo%20web.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white font-body group"
              >
                Pregúntanos por WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#26BDF0]" />
              </a>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.04 * (index % 4), ease: [0.16, 1, 0.3, 1] }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`item-${index}`}
                      className="liquid-glass rounded-xl px-6 bg-[#0a0918]/50 border-none"
                    >
                      <AccordionTrigger className="text-left py-4 hover:no-underline gap-4">
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] text-[#26BDF0] shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span>
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

        {/* CTA — gran final full-bleed con video, al estilo del CTA del home */}
        <section className="relative min-h-[75vh] bg-[#07060F] overflow-hidden flex items-center">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          {/* Costuras con las secciones vecinas */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#07060F] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07060F] to-transparent" />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-24 text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-normal text-white text-5xl md:text-7xl tracking-[-0.024em] leading-[1.02]"
            >
              ¿Listo para <span className="gradient-text font-semibold">construir?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm md:text-base text-white/90 font-body font-light max-w-xl"
            >
              Conversemos sobre tu proyecto y te decimos con claridad si podemos ayudarte, cuánto toma y cuánto cuesta.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20interesa%20desarrollar%20una%20web%20que%20convierta%20visitantes%20en%20clientes.%20¿Podr%C3%ADamos%20agendar%20una%20consulta%20estrat%C3%A9gica%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
            >
              Agendar consulta estratégica
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {["Sin compromiso", "Respuesta en 24 horas", "Cotización clara"].map((b) => (
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

export default DesarrolloWeb;
