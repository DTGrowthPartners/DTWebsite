import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import { useState, useEffect } from "react";

/**
 * Una sola cita protagonista en escena (nada de tarjetas): rota sola cada 7s
 * y se puede saltar con el selector de avatares-iniciales.
 */
const TESTIMONIALS = [
  {
    name: "Johana Zapateiro",
    role: "Cliente · Hace 5 meses",
    content:
      "Estoy muy feliz con los resultados. Desde que implementamos las estrategias de marketing y pauta, las ventas han crecido notablemente. Invertir en esta área ha valido totalmente la pena.",
    rating: 5,
  },
  {
    name: "ACB Fit",
    role: "3 opiniones · Hace 5 meses",
    content:
      "La calidad de su trabajo es excepcional, cuidando cada detalle como si el proyecto fuera suyo. Siempre va más allá de lo que se le pide, aporta ideas valiosas y guía con criterio. Una pieza clave para cualquier empresa que valore el crecimiento.",
    rating: 5,
  },
  {
    name: "Tennis Cartagena",
    role: "1 opinión · Hace 5 meses",
    content:
      "Excelente trabajo, siempre dispuesto a ayudar y encontrar soluciones innovadoras. Recomendado 100% — me ha ayudado a mejorar mi presencia en línea y a alcanzar mis objetivos de marketing digital.",
    rating: 5,
  },
  {
    name: "Tradición Caribe",
    role: "Cliente",
    content:
      "DT nos ayudó a estructurar nuestra estrategia publicitaria en Meta. Gracias a su experiencia, hemos podido atraer a más clientes interesados en nuestros productos y aumentar nuestras ventas de manera efectiva.",
    rating: 5,
  },
  {
    name: "Carlos Tatis",
    role: "Cartagena, Colombia",
    content:
      "Realmente brindan mucho conocimiento y facilitan todas las herramientas para que mi empresa obtuviera los buenos resultados.",
    rating: 5,
  },
  {
    name: "Jonathan Indalecio",
    role: "7 opiniones · 2 fotos",
    content: "Lo mejor para pautar en las redes sociales.",
    rating: 5,
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  // Auto-avance; se reinicia cuando el usuario elige manualmente (dep: index)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "blue", className: "top-[-120px] left-[-120px] w-[540px] h-[540px] opacity-25" },
          { color: "magenta", className: "bottom-[-160px] right-[-100px] w-[560px] h-[560px] opacity-20", delay: "-7s" },
        ]}
      />
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center">
          <span className="text-sm font-body text-white/80">{`// ${t("testimonials.label")}`}</span>
          <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em]">
            {t("testimonials.title")}{" "}
            <RotatingWord words={t("testimonials.rotating").split("|")} interval={3600} className="font-semibold" />
          </h2>
        </div>

        {/* Escenario de la cita */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto text-center min-h-[280px] md:min-h-[260px] flex flex-col items-center justify-start">
          {/* Comilla gigante */}
          <span aria-hidden className="block font-heading font-semibold text-6xl md:text-7xl leading-none gradient-text select-none">
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2"
            >
              <blockquote
                className={`font-heading font-normal text-white leading-snug tracking-[-0.01em] ${
                  active.content.length > 180 ? "text-lg md:text-2xl" : "text-xl md:text-3xl"
                }`}
              >
                {active.content}
              </blockquote>
              <figcaption className="mt-7 flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#26BDF0] text-[#26BDF0]" />
                  ))}
                </div>
                <div className="font-heading font-medium text-white text-lg">{active.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{active.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Selector de avatares-iniciales */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setIndex(i)}
              aria-label={`Ver testimonio de ${item.name}`}
              className={`relative liquid-glass rounded-full w-12 h-12 flex items-center justify-center font-body text-xs font-semibold transition-all duration-300 ${
                i === index
                  ? "text-white scale-110 shadow-[0_0_25px_rgba(38,189,240,0.4)]"
                  : "text-white/50 hover:text-white hover:scale-105"
              }`}
            >
              {initials(item.name)}
              {i === index && (
                <motion.span
                  layoutId="testimonial-ring"
                  className="absolute -inset-[3px] rounded-full border border-[#26BDF0]"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Barra de progreso del auto-avance */}
        <div className="mt-6 mx-auto w-40 h-px bg-white/10 overflow-hidden rounded-full">
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="h-full origin-left bg-gradient-to-r from-[#0F76D6] to-[#26BDF0]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
