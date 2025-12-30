import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, MapPin, Video, Users, CheckCircle2, ArrowLeft, X, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FireworksBackground } from "@/components/ui/shadcn-io/fireworks-background";

const CaseStudyRestaurante = () => {
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
    "La gente no sabía dónde estaba ubicado",
    "Bajo reconocimiento en el barrio",
    "Sin contenido que mostrara el lugar y productos",
    "Clientes potenciales pasaban de largo sin conocerlo"
  ];

  const strategy = [
    {
      icon: Video,
      title: "Video enfocado en ubicación",
      description: "Planeamos y dirigimos la grabación. Mostramos claramente cómo llegar al local."
    },
    {
      icon: Target,
      title: "Campañas de reconocimiento local",
      description: "Segmentación hiperlocal (radio cercano) con objetivo ThruPlay."
    },
    {
      icon: Users,
      title: "Tráfico al perfil + interacción",
      description: "Crecimiento de seguidores en Instagram y presencia constante en el feed local."
    },
    {
      icon: MapPin,
      title: "Distribución en todos los placements",
      description: "Máxima exposición en Facebook, Instagram y WhatsApp para alcance total."
    }
  ];

  const campaignResults = [
    {
      campaign: "Reconocimiento",
      results: "263,732",
      cost: "$0.19 / 1000 personas",
      type: "alcance"
    },
    {
      campaign: "Video ubicación",
      results: "7,769",
      cost: "$0.03 por visita",
      type: "visitas"
    },
    {
      campaign: "Tráfico perfil",
      results: "3,561",
      cost: "$0.02 por visita",
      type: "visitas"
    },
    {
      campaign: "Interacción",
      results: "118",
      cost: "$0.09 por seguidor",
      type: "seguidores"
    }
  ];

  const results = [
    { metric: "440,911", label: "personas de la zona ahora conocen el restaurante" },
    { metric: "+1,303", label: "nuevos seguidores en Instagram" },
    { metric: "784,570", label: "impresiones totales generadas" }
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
                <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap">
                  RECONOCIMIENTO LOCAL | RESTAURANTE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block sm:inline">
                  <span className="gradient-text">440 mil personas</span>
                  <span className="block sm:inline sm:ml-2">de la zona</span>
                </span>
                <span className="block sm:inline sm:ml-2">conocen el restaurante</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
                <span className="block sm:inline">Dimos a conocer un restaurante de comida típica caribeña</span>
                <span className="block sm:inline sm:ml-1">a toda su zona con video y Meta Ads.</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Inversión en Ads</div>
                  <div className="text-lg font-bold text-primary">$406.78 USD</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Alcance total</div>
                  <div className="text-lg font-bold text-primary">440,911</div>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 col-span-2 md:col-span-1">
                  <div className="text-xs text-muted-foreground mb-1">Industria</div>
                  <div className="text-lg font-bold">Gastronomía</div>
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
                    Restaurante de comida típica caribeña con un problema común:
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

                  <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Meta</div>
                        <div className="text-lg font-bold text-primary">Reconocimiento local total</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Solución</div>
                        <div className="text-sm text-primary font-semibold">Video + Meta Ads</div>
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
                  Combinamos producción de contenido de calidad con segmentación hiperlocal para máximo impacto.
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

              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">🎬 El Video que Creamos</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          20 segundos de duración
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Ubicación clara y fácil de recordar
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Producto estrella en acción
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Llamado a visitar el local
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">📊 Adicional</h3>
                      <p className="text-sm text-muted-foreground">
                        También desarrollamos su tienda online con menú y pedidos por WhatsApp para domicilios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campaign Results Section */}
        <section className="py-20 bg-gradient-card">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Resultados por <span className="gradient-text">Campaña</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Desglose detallado del rendimiento de cada campaña
                </p>
              </div>

              <div className="space-y-4">
                {campaignResults.map((campaign, index) => (
                  <Card key={index} className="bg-card border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Campaña</div>
                          <div className="font-medium">{campaign.campaign}</div>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Resultados</div>
                          <div className="text-lg font-bold text-primary">{campaign.results}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Costo/Resultado</div>
                        <div className="text-sm text-muted-foreground">{campaign.cost}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">Impacto</span> Total Achieved
                </h2>
              </div>

              {/* Main Result */}
              <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-background border-primary/30 mb-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                <CardContent className="p-8 lg:p-12 relative z-10">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-6xl lg:text-8xl font-bold gradient-text mb-4">
                        440 mil
                      </div>
                      <div className="text-xl text-muted-foreground mb-2">personas de la zona</div>
                      <div className="text-sm text-muted-foreground">
                        ahora conocen exactamente dónde queda el restaurante
                      </div>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">+1,303</span>
                      <span className="text-muted-foreground">nuevos seguidores</span>
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

              <div className="space-y-8">
                {/* Videos del restaurante - Grid horizontal */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Video del restaurante - Video 1 */}
                  <Card className="bg-card border-border/50 group">
                    <CardContent className="p-5 space-y-3">
                      <div className="relative w-full max-w-sm mx-auto">
                        {/* Marco del teléfono */}
                        <img
                          src="/images/fono.png"
                          alt="Phone frame"
                          className="w-full h-auto relative z-10 pointer-events-none"
                          style={{ transform: 'scale(1.0)' }}
                        />
                        {/* Video posicionado dentro del marco */}
                        <div className="absolute" style={{
                          top: '10%',
                          left: '14%',
                          width: '72%',
                          height: '80%'
                        }}>
                          <iframe
                            className="w-full h-full rounded-3xl"
                            src="https://player.vimeo.com/video/1150209750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Descubre tradición caribe la mejor arepa de huevo de Cartagena"
                          />
                        </div>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="text-sm text-muted-foreground">Video de ubicación</div>
                        <div className="text-2xl font-bold text-primary">20 seg</div>
                        <div className="text-xs text-muted-foreground">Producción DT Growth Partners</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Video del restaurante - Video 2 */}
                  <Card className="bg-card border-border/50 group">
                    <CardContent className="p-5 space-y-3">
                      <div className="relative w-full max-w-sm mx-auto">
                        {/* Marco del teléfono */}
                        <img
                          src="/images/fono.png"
                          alt="Phone frame"
                          className="w-full h-auto relative z-10 pointer-events-none"
                          style={{ transform: 'scale(1.0)' }}
                        />
                        {/* Video posicionado dentro del marco */}
                        <div className="absolute" style={{
                          top: '10%',
                          left: '14%',
                          width: '72%',
                          height: '80%'
                        }}>
                          <iframe
                            className="w-full h-full rounded-3xl"
                            src="https://player.vimeo.com/video/1150217209?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Arepas de huevo carne pollo camaron desde 4.000 pesos"
                          />
                        </div>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="text-sm text-muted-foreground">Video de productos</div>
                        <div className="text-2xl font-bold text-primary">20 seg</div>
                        <div className="text-xs text-muted-foreground">Producción DT Growth Partners</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Resultados finales TC - Centrado */}
                <div className="flex justify-center">
                  <Card className="bg-card border-primary/30 border-2 group max-w-md w-full">
                    <CardContent className="p-6 space-y-4">
                      <div
                        className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedImage('/images/TC.png')}
                      >
                        <img
                          src="/images/TC.png"
                          alt="Resultados finales restaurante - TC Campaign"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-sm text-muted-foreground">Resultados TC</div>
                        <div className="text-3xl font-bold text-primary">440,911</div>
                        <div className="text-xs text-primary">alcance total</div>
                        <div className="text-xs text-primary/60 mt-2">Click para ampliar</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                ¿Quieres que tu negocio local sea <span className="gradient-text">conocido</span>?
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Video de calidad + segmentación local = resultados que tu competencia no puede ignorar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="btn-primary group text-lg px-8"
                  onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20vi%20el%20caso%20del%20restaurante%20y%20quiero%20dar%20a%20conocer%20mi%20negocio%20local', '_blank')}
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

export default CaseStudyRestaurante;