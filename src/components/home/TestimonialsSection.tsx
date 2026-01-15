import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState, useEffect } from "react";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const CHARACTER_LIMIT = 200;

  const testimonials = [
    {
      name: "johana zapateiro",
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
    // Tradición Caribe should appear fourth (index 3)
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

    const gap = 32; // Tailwind gap-8 = 2rem = 32px
    const step = Math.round(firstChild.getBoundingClientRect().width + gap);
    const delta = direction === "next" ? step : -step;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-24">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {t("testimonials.label")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("testimonials.title")} <span className="gradient-text">{t("testimonials.titleHighlight")}</span>
          </h2>
        </div>

        <div className="relative">
          {/* Nav buttons */}
          <button
            aria-label="Previous testimonials"
            onClick={() => scrollByCard("prev")}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-card transition-opacity"
            style={{ display: canScrollPrev ? "flex" : "none" }}
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <button
            aria-label="Next testimonials"
            onClick={() => scrollByCard("next")}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-card transition-opacity"
            style={{ display: canScrollNext ? "flex" : "none" }}
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Slider container */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-4 px-2 slider-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="min-w-[80vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[22vw] snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card
                  className="card-hover bg-card border-border/50 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-muted-foreground italic flex-grow">
                      "{expandedIndex === index ? testimonial.content : testimonial.content.substring(0, CHARACTER_LIMIT) + (testimonial.content.length > CHARACTER_LIMIT ? "..." : "")}"
                    </p>

                    <div className="pt-4 border-t border-border/50 mt-auto">
                      {testimonial.content.length > CHARACTER_LIMIT && (
                        <button
                          onClick={() =>
                            setExpandedIndex(expandedIndex === index ? null : index)
                          }
                          className="text-primary text-sm font-medium hover:text-primary/80 transition-colors mb-3"
                        >
                          {expandedIndex === index ? "Ver menos" : "Ver más"}
                        </button>
                      )}
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
