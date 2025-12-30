import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Zap, Bot, LineChart, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import coheteImage from "@/assets/2cohete.png";

const SistemasAutomatizaciones = () => {
  const [currentSystemIndex, setCurrentSystemIndex] = React.useState(0);

  const featuredSystems = [
    {
      title: "ChatSuite",
      image: "/images/desarrolloweb/web4.png",
      description: "Nuestra plataforma integral de comunicación que centraliza todos tus canales de mensajería en un solo lugar. Gestiona WhatsApp, Instagram, Facebook Messenger y más desde una interfaz unificada, con automatizaciones inteligentes, análisis en tiempo real y flujos de trabajo que potencian tu atención al cliente."
    },
    {
      title: "DTOS",
      image: coheteImage,
      description: "Sistema operativo empresarial diseñado para potenciar tu negocio. Integra automatizaciones avanzadas, gestión de datos en tiempo real, dashboards personalizados y control total de tus operaciones desde una plataforma unificada. Escala tu operación con infraestructura robusta y métricas que importan."
    }
  ];

  const nextSystem = () => {
    setCurrentSystemIndex((prev) => (prev + 1) % featuredSystems.length);
  };

  const prevSystem = () => {
    setCurrentSystemIndex((prev) => (prev - 1 + featuredSystems.length) % featuredSystems.length);
  };

  const automations = [
    {
      icon: Workflow,
      title: "Operaciones & Workflows",
      description: "Automatiza procesos repetitivos y flujos de trabajo entre tus herramientas.",
      examples: ["Onboarding automático", "Procesamiento de pedidos", "Gestión de tickets", "Task routing"],
    },
    {
      icon: LineChart,
      title: "Marketing & Sales",
      description: "Automatización de campañas, lead nurturing y procesos de venta.",
      examples: ["Lead scoring", "Email sequences", "CRM sync", "Campaign triggers"],
    },
    {
      icon: Bot,
      title: "Reportes & Analytics",
      description: "Dashboards automáticos y reportes periódicos sin trabajo manual.",
      examples: ["Daily reports", "KPI tracking", "Multi-platform analytics", "Slack/Email alerts"],
    },
  ];

  const benefits = [
    {
      metric: "20+",
      label: "Horas ahorradas por semana",
      description: "Tiempo que tu equipo puede invertir en tareas estratégicas",
    },
    {
      metric: "60%",
      label: "Reducción en errores",
      description: "Menos errores humanos en procesos repetitivos",
    },
    {
      metric: "3x",
      label: "Velocidad de operación",
      description: "Procesos que toman horas ahora toman minutos",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Análisis de Procesos",
      description: "Auditamos tus procesos actuales, identificamos fricciones operativas y detectamos oportunidades claras de automatización con impacto en eficiencia y escalabilidad.",
      duration: "1 semana",
    },
    {
      step: "02",
      title: "Diseño de Sistema",
      description: "Diseñamos la arquitectura del sistema, flujos de automatización y estructura de datos alineada a tus objetivos de negocio.",
      duration: "3-5 días",
    },
    {
      step: "03",
      title: "Implementación",
      description: "Diseñamos la arquitectura del sistema, flujos de automatización y estructura de datos alineada a tus objetivos de negocio.",
      duration: "2-4 semanas",
    },
    {
      step: "04",
      title: "Training & Handoff",
      description: "Diseñamos la arquitectura del sistema, flujos de automatización y estructura de datos alineada a tus objetivos de negocio.",
      duration: "1 semana",
    },
  ];

  const faqs = [
    {
      question: "¿Qué tipo de procesos se pueden automatizar?",
      answer: "Prácticamente cualquier proceso repetitivo: gestión de leads, procesamiento de datos, reportes, sincronización entre herramientas, onboarding, facturación, y mucho más. Si lo haces más de una vez por semana, probablemente se puede automatizar.",
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "No. Nos encargamos de todo el setup y te entrenamos en el manejo del sistema. La mayoría de automatizaciones que creamos no requieren conocimientos técnicos para operar.",
    },
    {
      question: "¿Qué herramientas utilizan?",
      answer: "Principalmente Zapier, Make (Integromat), n8n, y desarrollo custom cuando es necesario. Nos adaptamos a las herramientas que ya usas: HubSpot, Salesforce, Slack, Google Suite, Notion, Airtable, etc.",
    },
    {
      question: "¿Cuál es el ROI típico?",
      answer: "La mayoría de nuestros clientes recuperan su inversión en 2-4 meses a través de ahorro de tiempo. Un empleado que ahorra 10 horas semanales representa +$20K USD anuales en valor recuperado.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="section-container relative z-10 py-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Contenido Izquierda */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                    Sistemas y Automatizaciones
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold">
                  Automatiza tu operación y escala con{" "}
                  <span className="gradient-text">menos esfuerzo</span>
                </h1>

                <p className="text-xl text-muted-foreground">
                  Workflows inteligentes, integraciones entre herramientas y automatización de procesos para que tu equipo se enfoque en lo que realmente importa.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="btn-primary group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 max-w-48 sm:max-w-none"
                    asChild
                  >
                    <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20gustaría%20solicitar%20un%20diagnóstico%20de%20automatización.%20¿Podemos%20hablar%20sobre%20mis%20procesos%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <span className="sm:hidden">Solicita diagnostico</span>
                      <span className="hidden sm:inline">Solicita diagnóstico de automatización</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Video Derecha */}
              <div className="relative h-[700px] lg:h-[800px] -mr-8 lg:-mr-16 hidden md:block">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  style={{
                    filter: 'brightness(1.1) contrast(1.2) blur(1px)'
                  }}
                >
                  <source src="/images/20251222_1208_New Video_simple_compose_01kd3ghd6kfaj91j6kec85mn00.mp4" type="video/mp4" />
                </video>
                {/* Overlay solo en el video */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Automations */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Qué <span className="gradient-text">automatizamos</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Las automatizaciones convierten tareas manuales en flujos automáticos: captura de leads, sincronización de datos, notificaciones, inventarios y reportes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {automations.map((automation, index) => {
                const Icon = automation.icon;
                return (
                  <Card
                    key={automation.title}
                    className="card-hover bg-background/80 border-border/50 backdrop-blur-sm animate-fade-in shadow-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{automation.title}</h3>
                        <p className="text-muted-foreground">{automation.description}</p>
                      </div>

                      <ul className="space-y-2">
                        {automation.examples.map((example) => (
                          <li key={example} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="btn-primary group"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20las%20automatizaciones%20que%20ofrecen.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Automatizar mis procesos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                El <span className="gradient-text">impacto</span> real
              </h2>
              <p className="text-xl text-muted-foreground">
                Beneficios medibles que ven nuestros clientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <BackgroundGradient
                  key={benefit.metric}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4 text-center h-full flex flex-col justify-center">
                    <div className="text-5xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-lg font-semibold">{benefit.label}</div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="btn-primary group"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20medir%20el%20impacto%20de%20las%20automatizaciones%20en%20mi%20negocio.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Medir mi impacto
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Herramientas y <span className="gradient-text">sistemas</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trabajamos con las mejores plataformas de automatización
              </p>
            </div>

            {/* Sistema destacado con carrusel */}
            <div className="mb-16 relative">
              <div className="grid gap-0 lg:gap-8 lg:grid-cols-2 lg:items-center">
                {/* Imagen arriba en mobile, izquierda en desktop */}
                <div className={`relative h-[500px] order-1 lg:order-1 ${currentSystemIndex === 0 ? '-mt-32 lg:mt-0' : 'mt-6 lg:mt-0'}`}>
                  <div className="rounded-2xl relative overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-background/10 to-background/5">
                    <img
                      key={currentSystemIndex}
                      src={featuredSystems[currentSystemIndex].image}
                      alt={featuredSystems[currentSystemIndex].title}
                      className="shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] opacity-0 rounded-2xl max-w-full max-h-full object-contain"
                      style={{
                        animation: 'float 3s ease-in-out infinite, fadeIn 0.7s ease-in-out forwards'
                      }}
                    />
                  </div>

                  {/* Botones de navegación */}
                  <button
                    onClick={prevSystem}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group z-10"
                    aria-label="Sistema anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={nextSystem}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group z-10"
                    aria-label="Sistema siguiente"
                  >
                    <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Texto abajo en mobile, derecha en desktop */}
                <Card
                  key={`text-${currentSystemIndex}`}
                  className={`bg-background/50 border-border/50 backdrop-blur-sm opacity-0 order-2 lg:order-2 ${currentSystemIndex === 0 ? '-mt-16 lg:mt-0' : 'mt-12 lg:mt-0'}`}
                  style={{
                    animation: 'fadeInText 0.7s ease-in-out 0.2s forwards'
                  }}
                >
                  <CardContent className="p-2 lg:p-8 space-y-2 lg:space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      <span className="gradient-text">{featuredSystems[currentSystemIndex].title}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredSystems[currentSystemIndex].description}
                    </p>

                    {/* Indicadores de navegación */}
                    <div className="flex gap-2 pt-4">
                      {featuredSystems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSystemIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSystemIndex
                              ? 'w-8 bg-primary'
                              : 'w-2 bg-primary/30 hover:bg-primary/50'
                          }`}
                          aria-label={`Ir al sistema ${index + 1}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <style>{`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px) scale(1);
                  }
                  50% {
                    transform: translateY(-20px) scale(1);
                  }
                }

                @keyframes fadeIn {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }

                @keyframes fadeInText {
                  0% {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="btn-primary group"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20gustaría%20conocer%20más%20sobre%20sus%20herramientas%20y%20sistemas.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Conocer nuestros sistemas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Proceso de <span className="gradient-text">implementación</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                De la auditoría inicial al sistema funcionando en semanas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card
                  key={step.step}
                  className="card-hover bg-card border-border/50 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300">
                        {step.step}
                      </span>
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

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="btn-primary group"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Me%20gustaría%20iniciar%20la%20implementación%20de%20un%20sistema%20de%20automatización.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Iniciar mi implementación
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
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

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="btn-primary group"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Tengo%20algunas%20dudas%20sobre%20los%20sistemas%20y%20automatizaciones.%20¿Podemos%20hablar%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Resolver mis dudas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
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
                  Auditoría <span className="gradient-text">gratuita</span>
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Analizamos tus procesos actuales e identificamos oportunidades de automatización. Sin compromiso.
                </p>
                
                <div className="flex justify-center">
                  <Button size="lg" className="btn-primary group text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 max-w-44 sm:max-w-none">
                    <Workflow className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sm:hidden">Analizar</span>
                    <span className="hidden sm:inline">Analizar mis Procesos</span>
                    <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SistemasAutomatizaciones;
