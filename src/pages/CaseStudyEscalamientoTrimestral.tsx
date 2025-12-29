import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, CheckCircle2, ArrowLeft, X, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FireworksBackground } from "@/components/ui/shadcn-io/fireworks-background";

const CaseStudyEscalamientoTrimestral = () => {
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

  const context = [
    "Identificar los días de mayor conversión",
    "Optimizar la distribución del presupuesto",
    "Aprovechar fechas especiales",
    "Mantener o mejorar el ROAS mientras escalábamos"
  ];

  const strategy = [
    {
      icon: BarChart3,
      title: "Análisis de patrones de compra",
      description: "Identificamos los días de mayor conversión mediante análisis de datos históricos."
    },
    {
      icon: Target,
      title: "Redistribución de presupuesto",
      description: "Mayor inversión en días clave y reducción en días de bajo rendimiento."
    },
    {
      icon: Zap,
      title: "Campañas de temporada",
      description: "Promoción especial por aniversario con ROAS de 45x en campaña limitada."
    },
    {
      icon: TrendingUp,
      title: "Escalamiento por categoría",
      description: "Segmentación por líneas de producto. Mejor categoría: ROAS 59x."
    }
  ];

  const results = {
    q1: {
      ventas: "$65.2M",
      roas: "22x"
    },
    q2: {
      ventas: "$125.6M",
      roas: "41x"
    }
  };

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
                  Escalamiento Trimestral | E-commerce
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">+92% en ventas</span> en 6 meses de gestión estratégica
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl">
                Cómo escalamos un e-commerce de retail duplicando las ventas y mejorando el ROAS en un 87% con solo 3% más de inversión.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Período</div>
                  <div className="text-lg font-bold text-primary">6 meses</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Crecimiento ventas</div>
                  <div className="text-lg font-bold text-primary">+92%</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 col-span-2 md:col-span-1">
                  <div className="text-xs text-muted-foreground mb-1">Industria</div>
                  <div className="text-lg font-bold">E-commerce</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                El <span className="gradient-text">Contexto</span>
              </h2>

              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Después de estabilizar las campañas en Q1, el objetivo era escalar sin desperdiciar presupuesto. Necesitábamos:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {context.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-background/50 rounded-lg p-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
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
                  Un enfoque basado en datos para maximizar resultados durante el escalamiento.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-card relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">Resultados</span> trimestre a trimestre
                </h2>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Q1 */}
                <Card className="bg-card border-border/50">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                          Q1 2025
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Enero - Marzo
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Ventas totales</div>
                        <div className="text-4xl font-bold text-muted-foreground">{results.q1.ventas}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">ROAS</div>
                        <div className="text-3xl font-bold text-muted-foreground">{results.q1.roas}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Q2 */}
                <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-background border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div className="text-sm text-primary font-semibold uppercase tracking-wider">
                          Q2 2025
                        </div>
                      </div>
                      <div className="text-xs text-primary/80">
                        Abril - Junio
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Ventas totales</div>
                        <div className="text-4xl font-bold gradient-text">{results.q2.ventas}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">ROAS</div>
                        <div className="text-3xl font-bold text-primary">{results.q2.roas}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Crecimiento en ventas", value: "+92%", color: "text-primary" },
                  { label: "Mejora en ROAS", value: "+87%", color: "text-primary" },
                  { label: "Aumento inversión", value: "+3%", color: "text-green-500" }
                ].map((metric, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className={`text-4xl lg:text-5xl font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {metric.label}
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
                  Comparativa trimestral verificable en Meta Business Suite
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Q1 Screenshot */}
                <Card className="bg-card border-border/50 group">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="aspect-video bg-muted rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setSelectedImage('/images/Q1.png')}
                    >
                      <img
                        src="/images/Q1.png"
                        alt="Resultados Q1 2025 - ROAS 22.17x"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">ROAS Promedio</div>
                      <div className="text-3xl font-bold text-muted-foreground">22.17x</div>
                      <div className="text-xs text-muted-foreground">Q1 2025 - Baseline estabilizado</div>
                      <div className="text-xs text-primary/60 mt-2">Click para ampliar</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Q2 Screenshot */}
                <Card className="bg-card border-primary/30 border-2 group">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setSelectedImage('/images/Q2.png')}
                    >
                      <img
                        src="/images/Q2.png"
                        alt="Resultados Q2 2025 - ROAS 41.50x"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">ROAS Promedio</div>
                      <div className="text-3xl font-bold text-primary">41.50x</div>
                      <div className="text-xs text-primary">Q2 2025 - Post-escalamiento (+87%)</div>
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
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                ¿Listo para <span className="gradient-text">escalar</span>?
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escalamiento no significa gastar más. Significa invertir mejor en lo que realmente funciona.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="btn-primary group text-lg px-8"
                  onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20vi%20el%20caso%20de%20escalamiento%20trimestral%20y%20quiero%20escalar%20mi%20negocio', '_blank')}
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

export default CaseStudyEscalamientoTrimestral;
