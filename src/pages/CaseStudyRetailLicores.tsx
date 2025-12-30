import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, CheckCircle2, ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FireworksBackground } from "@/components/ui/shadcn-io/fireworks-background";

const CaseStudyRetailLicores = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const challenges = [
    "Campañas de alcance y reconocimiento",
    "Clics en enlace sin seguimiento",
    "Sin objetivo de conversión configurado",
    "ROAS de apenas 1.3x"
  ];

  const strategy = [
    {
      icon: Target,
      title: "Implementación de Pixel y eventos de compra",
      description: "Medición completa del funnel (view, add to cart, purchase)."
    },
    {
      icon: TrendingUp,
      title: "Reestructuración total hacia campañas de VENTAS",
      description: "Optimización por conversiones reales, no métricas de vanidad."
    },
    {
      icon: Zap,
      title: "Dirección de contenido enfocada en ventas",
      description: "Creativos orientados a oferta, urgencia y decisión de compra."
    },
    {
      icon: BarChart3,
      title: "Catálogo de productos dinámico",
      description: "Retargeting y discovery automático basado en intención."
    }
  ];

  const additionalStrategies = [
    {
      title: "Segmentación por categorías de producto",
      description: "Alta rotación · Más vendidos · Premium"
    },
    {
      title: "Escalamiento de productos estrella",
      description: "Aumento progresivo de presupuesto en SKUs con mayor ROAS."
    },
    {
      title: "Optimización de audiencias por comportamiento",
      description: "Señales de compra, frecuencia, valor y presencia."
    },
    {
      title: "Iteración y testing continuo",
      description: "Pausa rápida de lo que no convierte y duplicación de ganadores."
    }
  ];

  const results = [
    { metric: "$29.2M", label: "COP en ventas generadas (1 mes)" },
    { metric: "$2,800 - $4,200", label: "COP costo por compra" },
    { metric: "31.17x", label: "ROAS mejor campaña" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <FireworksBackground
            className="absolute inset-0 z-0"
            population={2}
            color="hsl(210, 100%, 50%)"
            fireworkSpeed={{ min: 3, max: 6 }}
            fireworkSize={{ min: 2, max: 4 }}
            particleSpeed={{ min: 2, max: 5 }}
            particleSize={{ min: 1, max: 3 }}
          />
          {/* Gradient overlay for better fireworks visibility */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
          </div>
          <div className="section-container relative z-10">
            <Button
              variant="ghost"
              className="mb-8 group"
              onClick={() => navigate('/servicios/meta-ads')}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Meta Ads
            </Button>

            <div className="max-w-4xl space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold uppercase tracking-wider">
                  Retail de Bebidas Online
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                De <span className="text-red-400">ROAS 1.3x</span> a <span className="gradient-text">24.5x</span> en 60 días
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl">
                Cómo transformamos una cuenta estancada con meses de inversión sin resultados en una máquina de ventas escalable.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Período analizado</div>
                  <div className="text-lg font-bold text-primary">60 días</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Inversión mensual</div>
                  <div className="text-lg font-bold text-primary">$1.2M COP</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 col-span-2 md:col-span-1">
                  <div className="text-xs text-muted-foreground mb-1">Industria</div>
                  <div className="text-lg font-bold">E-commerce</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                El <span className="gradient-text">Desafío</span>
              </h2>

              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    El cliente llevaba meses invirtiendo en Meta Ads con resultados pobres. Su estrategia estaba enfocada en:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-background/50 rounded-lg p-4">
                        <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">ROAS inicial</div>
                        <div className="text-4xl font-bold text-red-400">1.3x</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Sin escalabilidad</div>
                        <div className="text-sm text-red-400 font-semibold">Pérdida de oportunidad</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Nuestra <span className="gradient-text">Estrategia</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Implementamos un enfoque estructurado basado en datos y optimización continua.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {strategy.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="card-hover bg-card border-border/50 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {additionalStrategies.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-card border border-border/50 rounded-lg p-4 animate-fade-in"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-card relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">Resultados</span> que hablan por sí solos
                </h2>
              </div>

              {/* Main Result */}
              <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-background border-primary/30 mb-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                <CardContent className="p-8 lg:p-12 relative z-10">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-6xl lg:text-8xl font-bold gradient-text mb-4">
                        24.5x
                      </div>
                      <div className="text-xl text-muted-foreground mb-2">ROAS final</div>
                      <div className="text-sm text-muted-foreground">
                        vs 1.3x antes de DT Growth Partners
                      </div>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">+1,784%</span>
                      <span className="text-muted-foreground">de mejora</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="text-3xl lg:text-4xl font-bold text-primary">
                        {result.metric}
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {result.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Prueba en <span className="gradient-text">Ads Manager</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Datos verificables directamente desde Meta Business Suite
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <Card className="bg-card border-border/50 group">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setSelectedImage('/images/Licores-Enero.png')}
                    >
                      <img
                        src="/images/Licores-Enero.png"
                        alt="Resultados ANTES - Enero 2025 - ROAS 1.37x"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">ROAS</div>
                      <div className="text-3xl font-bold text-red-400">1.37x</div>
                      <div className="text-xs text-muted-foreground">Enero 2025 - Sin estrategia de conversión</div>
                      <div className="text-xs text-primary/60 mt-2">Click para ampliar</div>
                    </div>
                  </CardContent>
                </Card>

                {/* After */}
                <Card className="bg-card border-primary/30 border-2 group">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setSelectedImage('/images/Licores-Febrero.png')}
                    >
                      <img
                        src="/images/Licores-Febrero.png"
                        alt="Resultados DESPUÉS - Febrero 2025 - ROAS 24.49x"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">ROAS</div>
                      <div className="text-3xl font-bold text-primary">24.49x</div>
                      <div className="text-xs text-primary">Febrero 2025 - Con DT Growth Partners</div>
                      <div className="text-xs text-primary/60 mt-2">Click para ampliar</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  📊 Screenshots reales verificables en Meta Business Suite
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                ¿Quieres resultados <span className="gradient-text">así</span>?
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Si ya inviertes en Meta Ads y no estás escalando, el problema no es la plataforma. Es la estrategia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="btn-primary group text-lg px-8"
                  onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20vi%20el%20caso%20de%20éxito%20de%20Retail%20de%20Bebidas%20y%20quiero%20resultados%20similares', '_blank')}
                >
                  Agendar consultoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  onClick={() => navigate('/servicios/meta-ads')}
                >
                  Ver planes disponibles
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Sin compromiso
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  30 minutos
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  100% gratis
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl w-full max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
            Click fuera de la imagen o presiona ESC para cerrar
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyRetailLicores;
