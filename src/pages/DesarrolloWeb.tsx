import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Package, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { RetroGrid } from "@/components/ui/shadcn-io/retro-grid";
import { useState, useEffect, useRef } from "react";
import ImageSlider from "@/components/home/ImageSlider";
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

  const services = [
    {
      icon: Code,
      title: "Desarrollo orientado a conversión (CRO)",
      description: "Cada web parte de un objetivo claro: ventas, leads o activación.",
      features: ["Arquitectura pensada para guiar decisiones.", "Copy y UI alineados a intención del usuario.", "CTAs estratégicos, no decorativos.", "Integración con Meta Ads, WhatsApp, CRM, formularios y automatizaciones."],
    },
    {
      icon: Package,
      title: "Diseño + performance + datos",
      description: "No separamos diseño de resultados.",
      features: ["UI/UX moderno con foco en claridad.", "Métricas instaladas desde el día uno (GA4, eventos, conversiones).", "Optimización continua basada en datos reales."],
    },
    {
      icon: Smartphone,
      title: "Tecnología moderna, escalable y rápida",
      description: "Construimos con stacks actuales y probados.",
      features: ["Landing pages rápidas (Core Web Vitals).", "Webs escalables (Next.js, Shopify, CMS optimizados).", "Integraciones con herramientas de marketing y automatización."],
    },
  ];

  const reasons = [
    {
      title: "Landing Page de Conversión",
      description: "Cada landing está pensada para guiar al usuario a una única acción, sin distracciones, con velocidad y claridad.",
    },
    {
      title: "Web Corporativa",
      description: "Un sitio web profesional multipágina que genera confianza, presenta tus servicios con claridad y posiciona tu marca como referente en tu industria.",
    },
    {
      title: "E-commerce / Web de Venta",
      description: "Tienda online optimizada para ventas, con pasarela de pago, gestión de productos y automatización de procesos.",
    },
    {
      title: "Aplicaciones Web / Desarrollo Web Personalizado",
      description: "Soluciones web a medida que automatizan procesos, integran sistemas y resuelven problemas específicos de tu negocio.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico y levantamiento estratégico",
      description: "Analizamos objetivos, contexto y restricciones. Validamos que la solución tenga sentido técnico y de negocio.",
    },
    {
      step: "02",
      title: "Definición de objetivos y requerimientos",
      description: "Traducimos necesidades en objetivos medibles. Priorizamos funcionalidades y definimos el alcance.",
    },
    {
      step: "03",
      title: "Planificación y roadmap de entrega",
      description: "Establecemos tiempos, hitos y responsables con claridad sobre entregables y dependencias.",
    },
    {
      step: "04",
      title: "Diseño y prototipado funcional",
      description: "Validamos estructura y flujos con prototipos. Ajustamos con feedback temprano.",
    },
    {
      step: "05",
      title: "Desarrollo e iteración controlada",
      description: "Construimos por fases con ajustes progresivos. Cada iteración mejora rendimiento y usabilidad.",
    },
    {
      step: "06",
      title: "Validación final y optimización",
      description: "Perfeccionamos hasta cumplir criterios de calidad. Entregamos lista para operar y escalar.",
    },
    {
      step: "07",
      title: "Entrega y acompañamiento",
      description: "Realizamos puesta en producción y acompañamiento inicial. Preparada para futuras mejoras.",
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
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black -mt-16 pt-16">
          {/* Retro Grid Background */}
          <RetroGrid
            angle={65}
            cellSize={60}
            opacity={0.6}
            lightLineColor="#0ea5e9"
            darkLineColor="#0ea5e9"
          />

          <div className="w-full relative z-10 flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Desarrollo Web
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                <span className="gradient-text">Desarrollo web</span> que convierte visitantes en clientes
              </h1>

              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Landing pages, webs corporativas y e-commerce optimizados para crecer
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="btn-primary group"
                  onClick={() => {
                    document.getElementById('webs-portafolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver Portafolios
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="default" variant="outline" className="btn-outline sm:h-11 sm:px-8 sm:text-base" asChild>
                  <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20interesa%20desarrollar%20una%20web%20que%20convierta%20visitantes%20en%20clientes.%20¿Podr%C3%ADamos%20agendar%20una%20consulta%20estrat%C3%A9gica%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <span className="hidden sm:inline">Agendar consulta estratégica</span>
                    <span className="sm:hidden">Agendar consulta</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-black">
          <div className="section-container">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                ¿Por qué desarrollar tu web con <span className="gradient-text whitespace-nowrap">DT Growth Partners</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                No construimos páginas. Construimos activos digitales que convierten, escalan y se integran a tu sistema de ventas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="card-hover bg-card border-border/50 backdrop-blur-sm animate-fade-in"
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
        <section className="relative bg-black">
          <BackgroundBeamsWithCollision className="py-20">
            <div className="section-container relative z-10 w-full">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Tipos de <span className="gradient-text">servicios</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  No todos necesitan lo mismo. Creamos la solución correcta según tu objetivo actual: validar, posicionar o escalar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                {reasons.map((reason, index) => (
                  <Card
                    key={reason.title}
                    className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in cursor-pointer hover:border-primary/50 hover:shadow-[0_0_20px_hsl(210_100%_50%/0.15)] transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => {
                      if (index === 0) setIsDialogOpen(true);
                      if (index === 1) setIsWebCorporativaDialogOpen(true);
                      if (index === 2) setIsEcommerceDialogOpen(true);
                      if (index === 3) setIsWebAppDialogOpen(true);
                    }}
                  >
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {reason.title}
                        <ArrowRight className="ml-auto h-4 w-4 text-primary opacity-70" />
                      </h3>
                      <p className="text-muted-foreground text-sm pl-5">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </BackgroundBeamsWithCollision>
        </section>

        {/* Dialog for Landing Page details */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md bg-card border-primary/20 w-[calc(100%-2rem)] sm:w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
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
          <DialogContent className="sm:max-w-md bg-card border-primary/20 w-[calc(100%-2rem)] sm:w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
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
          <DialogContent className="sm:max-w-md bg-card border-primary/20 w-[calc(100%-2rem)] sm:w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
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
          <DialogContent className="sm:max-w-md bg-card border-primary/20 w-[calc(100%-2rem)] sm:w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
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

        {/* Image Slider */}
        <ImageSlider />

        {/* Process */}
        <section className="py-20 bg-black relative">
          {/* Gradient transition from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Metodología de <span className="gradient-text">implementación</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proceso estructurado que asegura resultados medibles en cada etapa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {process.map((step, index) => (
                <Card
                  key={step.step}
                  className={`group card-hover bg-card border-border/50 animate-fade-in ${
                    index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300">{step.step}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold leading-tight">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-black relative">
          <BackgroundBeams className="absolute inset-0 opacity-50" />
          <div className="section-container max-w-6xl relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card backdrop-blur-sm"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                      <span className="text-base font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-3xl bg-black border border-border/50 p-12 lg:p-16">
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-50"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
              </video>

              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold whitespace-nowrap">
                  ¿Listo para <span className="gradient-text">construir</span>?
                </h2>

                <p className="text-lg text-muted-foreground">
                  Conversemos sobre tu proyecto. Primera consulta sin compromiso.
                </p>

                <Button size="default" className="btn-primary group sm:h-11 sm:px-8 sm:text-base" asChild>
                  <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20interesa%20desarrollar%20una%20web%20que%20convierta%20visitantes%20en%20clientes.%20¿Podr%C3%ADamos%20agendar%20una%20consulta%20estrat%C3%A9gica%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Agendar consulta estratégica</span>
                    <span className="sm:hidden">Agendar consulta</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
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
