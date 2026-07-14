import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState, useEffect } from "react";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const testimonials = [
    {
      name: "Johana Zapateiro",
      role: "Cliente · Hace 5 meses",
      content:
        "Estoy muy feliz con los resultados. Desde que implementamos las estrategias de marketing y pauta, las ventas han crecido notablemente. Invertir en esta área ha valido totalmente la pena. Gracias ser productivos, por su estructura, dirección y enfoque claro, hoy veo mi empresa más organizada y en crecimiento.",
      rating: 5,
    },
    {
      name: "ACB Fit",
      role: "3 opiniones · Hace 5 meses",
      content:
        "Recomendado con total confianza, profesional, líder, creativo, realmente trasciende su rol 👌🏼 La calidad de su trabajo es excepcional, cuidando cada detalle como si el proyecto fuera suyo. Siempre va más allá de lo que se le pide, aporta ideas valiosas, guía con criterio y está constantemente dispuesto a apoyar en cada paso dado. Tiene un ojo estratégico, y siempre va un paso adelante ✅ Pero lo que más destaco es su inteligencia y visión, que lo convierten en una pieza clave para cualquier empresa que valore el crecimiento, la innovación y el compromiso real.",
      rating: 5,
    },
    {
      name: "Tennis Cartagena",
      role: "1 opinión · Editado · Hace 5 meses",
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
      role: "Cartagena, Colombia · Hace 5 meses",
      content:
        "Realmente brindan mucho conocimiento y facilitan todas las herramientas para que mi empresa obtuviera los buenos resultados.",
      rating: 5,
    },
    {
      name: "Jonathan Indalecio Alvarez",
      role: "7 opiniones · 2 fotos · Hace 5 meses",
      content: "Lo mejor para pautar en las redes sociales.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollPrev(el.scrollLeft > 0);
      setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: "next" | "prev") => {
    const el = containerRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const gap = 24; // gap-6
    const step = Math.round(firstChild.getBoundingClientRect().width + gap);
    el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-body text-white/80">{`// ${t("testimonials.label")}`}</span>
            <h2 className="mt-6 font-heading text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em] max-w-3xl">
              {t("testimonials.title")} {t("testimonials.titleHighlight")}
            </h2>
          </div>

          {/* Controles */}
          <div className="flex gap-3">
            <button
              aria-label="Testimonios anteriores"
              onClick={() => scrollByCard("prev")}
              disabled={!canScrollPrev}
              className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Testimonios siguientes"
              onClick={() => scrollByCard("next")}
              disabled={!canScrollNext}
              className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider — testimonios completos, sin recortes (modo presentación) */}
        <div
          ref={containerRef}
          className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 slider-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[85vw] sm:min-w-[420px] max-w-[420px] snap-start"
            >
              <div className="liquid-glass rounded-[1.25rem] p-6 md:p-7 h-full flex flex-col">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>

                <p className="mt-5 text-sm text-white/85 font-body font-light leading-relaxed flex-grow">
                  “{testimonial.content}”
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-heading text-white text-xl tracking-[-0.01em]">
                    {testimonial.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
