import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BarChart3, FileCheck, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MetaAds = () => {
  const benefits = [
    {
      icon: Target,
      title: "Targeting Científico",
      description: "Segmentación basada en datos reales, no en suposiciones",
    },
    {
      icon: BarChart3,
      title: "Optimización Continua",
      description: "Testing estructurado y mejoras incrementales constantes",
    },
    {
      icon: TrendingUp,
      title: "Escalamiento Inteligente",
      description: "Crecimiento sostenible manteniendo ROI positivo",
    },
  ];

  const process = [
    {
      phase: "Research",
      title: "Investigación y Análisis",
      description: "Auditoría completa de tu cuenta, análisis de audiencias, competencia y oportunidades.",
      duration: "1-2 semanas",
    },
    {
      phase: "Testing",
      title: "Testing Estructurado",
      description: "Implementación de framework de testing para creatividades, audiencias y mensajes.",
      duration: "2-4 semanas",
    },
    {
      phase: "Scale",
      title: "Escalamiento",
      description: "Incremento progresivo de presupuesto en las mejores combinaciones ganadoras.",
      duration: "Ongoing",
    },
    {
      phase: "Reporting",
      title: "Reporting y Optimización",
      description: "Dashboards en tiempo real y sesiones semanales de optimización.",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "¿Cuál es el presupuesto mínimo recomendado?",
      answer: "Recomendamos un mínimo de $1,500 USD mensuales en ad spend para poder ejecutar tests significativos y escalar de forma efectiva.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Típicamente comenzamos a ver tendencias claras en 2-3 semanas. Los resultados significativos y escalables usualmente toman 1-2 meses de optimización continua.",
    },
    {
      question: "¿Qué métricas priorizan?",
      answer: "Nos enfocamos en métricas de negocio: ROAS, CAC, LTV y conversiones reales. No solo en métricas de vanidad como alcance o impresiones.",
    },
    {
      question: "¿Incluye creatividades?",
      answer: "Proporcionamos briefs detallados y dirección creativa. Si necesitas producción de creatividades, trabajamos con partners especializados o podemos recomendarte opciones.",
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
                  Meta Ads Performance
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                Escala tus campañas con <span className="gradient-text">ciencia</span>, no con suposiciones
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Framework probado de performance marketing para Facebook e Instagram Ads. Testing estructurado, optimización basada en datos y escalamiento inteligente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="btn-primary group">
                  Solicitar Auditoría Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Por qué nuestro enfoque es <span className="gradient-text">diferente</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
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
                Nuestro <span className="gradient-text">proceso</span> de trabajo
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un framework estructurado en cuatro fases para maximizar resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card
                  key={step.phase}
                  className="card-hover bg-card border-border/50 animate-fade-in relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold text-primary/20">{`0${index + 1}`}</span>
                      <span className="text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-primary font-medium uppercase tracking-wider">
                        {step.phase}
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Resultados <span className="gradient-text">medibles</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Métricas promedio de nuestros clientes después de 3 meses
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "3.8x", label: "ROAS Promedio" },
                { metric: "-45%", label: "Reducción en CAC" },
                { metric: "$500K+", label: "Ad Spend Gestionado" },
                { metric: "92%", label: "Tasa de Retención" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center space-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="section-container max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card"
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
                  Auditoría <span className="gradient-text">gratuita</span> de tus campañas
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Revisión completa de tu cuenta Meta Ads con oportunidades específicas de mejora. Sin compromiso.
                </p>
                
                <Button size="lg" className="btn-primary group">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Solicitar Auditoría
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

export default MetaAds;
