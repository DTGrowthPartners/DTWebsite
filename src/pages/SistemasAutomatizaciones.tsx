import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Zap, Bot, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SistemasAutomatizaciones = () => {
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

  const systems = [
    {
      title: "Zapier & Make (Integromat)",
      description: "Conecta +5,000 apps sin código. Ideal para workflows complejos.",
      icon: Zap,
    },
    {
      title: "Custom APIs",
      description: "Desarrollo de APIs personalizadas para integraciones específicas.",
      icon: Bot,
    },
    {
      title: "CRM Automation",
      description: "HubSpot, Salesforce, Pipedrive. Automatización de procesos de venta.",
      icon: Workflow,
    },
    {
      title: "Data Pipelines",
      description: "ETL automatizado para análisis de datos y reporting.",
      icon: LineChart,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Análisis de Procesos",
      description: "Mapeamos tus procesos actuales e identificamos oportunidades de automatización.",
      duration: "1 semana",
    },
    {
      step: "02",
      title: "Diseño de Sistema",
      description: "Diseñamos la arquitectura de automatización y flujos de datos.",
      duration: "3-5 días",
    },
    {
      step: "03",
      title: "Implementación",
      description: "Configuración de herramientas, desarrollo de integraciones y testing.",
      duration: "2-4 semanas",
    },
    {
      step: "04",
      title: "Training & Handoff",
      description: "Capacitación de tu equipo y documentación completa del sistema.",
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
        <section className="py-24 lg:py-32">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Sistemas y Automatizaciones
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                Automatiza tu operación y escala con{" "}
                <span className="gradient-text">menos esfuerzo</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Workflows inteligentes, integraciones entre herramientas y automatización de procesos para que tu equipo se enfoque en lo que realmente importa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="btn-primary group">
                  Analizar mis Procesos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Automations */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Qué <span className="gradient-text">automatizamos</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {automations.map((automation, index) => {
                const Icon = automation.icon;
                return (
                  <Card
                    key={automation.title}
                    className="card-hover bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
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

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.metric}
                  className="bg-card border-border/50 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="text-5xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-lg font-semibold">{benefit.label}</div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
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

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {systems.map((system, index) => {
                const Icon = system.icon;
                return (
                  <Card
                    key={system.title}
                    className="card-hover bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{system.title}</h3>
                        <p className="text-sm text-muted-foreground">{system.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                  Auditoría <span className="gradient-text">gratuita</span> de procesos
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Analizamos tus procesos actuales e identificamos oportunidades de automatización. Sin compromiso.
                </p>
                
                <Button size="lg" className="btn-primary group">
                  <Workflow className="mr-2 h-5 w-5" />
                  Analizar mis Procesos
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

export default SistemasAutomatizaciones;
