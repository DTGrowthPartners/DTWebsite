import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Smartphone, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DesarrolloWeb = () => {
  const services = [
    {
      icon: Code,
      title: "Landing Pages de Alta Conversión",
      description: "Páginas optimizadas para convertir visitantes en clientes. Rápidas, responsive y con tracking completo.",
      features: ["Next.js 14", "Performance-first", "A/B testing ready", "SEO optimizado"],
    },
    {
      icon: Package,
      title: "E-commerce Shopify",
      description: "Tiendas online completas con integración de pagos, inventario y análisis de conversión.",
      features: ["Shopify Plus", "Custom themes", "Apps integration", "Conversion optimization"],
    },
    {
      icon: Smartphone,
      title: "Web Apps Personalizadas",
      description: "Aplicaciones web a medida con React, Next.js y las mejores prácticas de la industria.",
      features: ["React + Next.js", "TypeScript", "API integration", "Scalable architecture"],
    },
  ];

  const reasons = [
    {
      title: "Velocidad de Desarrollo",
      description: "Entregamos MVPs funcionales en 2-4 semanas. Iteramos rápido basándonos en feedback real.",
    },
    {
      title: "Performance-First",
      description: "Todos nuestros sitios están optimizados para Core Web Vitals y velocidad de carga.",
    },
    {
      title: "Conversion-Focused",
      description: "No solo hacemos sitios bonitos. Diseñamos pensando en métricas de negocio y conversión.",
    },
    {
      title: "Stack Moderno",
      description: "Next.js, TypeScript, Tailwind CSS. Las mejores herramientas para resultados superiores.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Entendemos tus objetivos de negocio, audiencia y KPIs. Definimos scope y timeline.",
      duration: "3-5 días",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Wireframes y diseño visual. Prototipo interactivo para validar antes de desarrollar.",
      duration: "1 semana",
    },
    {
      step: "03",
      title: "Development",
      description: "Desarrollo con metodología ágil. Demos semanales y feedback continuo.",
      duration: "2-3 semanas",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "QA exhaustivo, optimización de performance y lanzamiento con monitoreo.",
      duration: "3-5 días",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "Landing pages: 1-2 semanas. Sitios completos: 3-6 semanas. E-commerce: 4-8 semanas. Todo depende del scope y complejidad.",
    },
    {
      question: "¿Incluyen hosting y mantenimiento?",
      answer: "Sí. Desplegamos en Vercel (Next.js) o Shopify según el proyecto. Ofrecemos paquetes de mantenimiento mensuales opcionales para actualizaciones y soporte.",
    },
    {
      question: "¿Pueden integrar con nuestras herramientas actuales?",
      answer: "Absolutamente. Integramos con CRMs, herramientas de marketing, sistemas de pago, analytics y cualquier API que necesites.",
    },
    {
      question: "¿Qué pasa después del lanzamiento?",
      answer: "Monitoreamos métricas clave por 30 días. Hacemos ajustes de optimización y te entrenamos en el manejo del sitio. Soporte continuo disponible.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 lg:py-32">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Desarrollo Web
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                Sitios web que <span className="gradient-text">convierten</span> y escalan
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Landing pages, e-commerce y web apps construidas con Next.js, Shopify y tecnologías modernas. Rápidas, escalables y optimizadas para conversión.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="btn-primary group">
                  Ver Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="btn-outline">
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Qué <span className="gradient-text">desarrollamos</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="card-hover bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Por qué construir <span className="gradient-text">con nosotros</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No solo desarrollamos sitios web. Construimos activos digitales que generan resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {reasons.map((reason, index) => (
                <Card
                  key={reason.title}
                  className="bg-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-5">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Stack <span className="gradient-text">tecnológico</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify", "Vercel"].map(
                  (tech, index) => (
                    <div
                      key={tech}
                      className="flex items-center justify-center p-6 bg-background/50 rounded-xl border border-border/50 backdrop-blur-sm animate-fade-in hover:border-primary/50 transition-colors"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="font-semibold text-sm">{tech}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Proceso de <span className="gradient-text">creación</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Metodología ágil con entregas incrementales y feedback continuo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card
                  key={step.step}
                  className="card-hover bg-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                      <span className="text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-background/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-hero opacity-30" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  ¿Listo para <span className="gradient-text">construir</span>?
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Conversemos sobre tu proyecto. Primera consulta sin compromiso.
                </p>
                
                <Button size="lg" className="btn-primary group">
                  <Code className="mr-2 h-5 w-5" />
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DesarrolloWeb;
