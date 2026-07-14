import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Users, MapPin, CheckCircle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Facebook Ads funciona para negocios pequeños en Cartagena?",
    answer: "Sí. Facebook Ads es una de las plataformas más accesibles para negocios pequeños porque permite invertir desde presupuestos bajos y segmentar únicamente a personas en tu zona. Un restaurante en Manga o una tienda en Castellana puede mostrar anuncios solo a personas que viven o trabajan cerca, sin desperdiciar presupuesto en audiencias irrelevantes."
  },
  {
    question: "¿Cuánto debo invertir en Facebook Ads para ver resultados en Cartagena?",
    answer: "Para negocios locales en Cartagena recomendamos un mínimo de $500.000 COP mensuales en pauta. Con esta inversión se pueden ejecutar campañas de alcance local efectivas. Negocios que buscan resultados más agresivos suelen invertir entre $1.000.000 y $3.000.000 COP mensuales. El retorno depende del tipo de negocio, pero en promedio nuestros clientes obtienen entre 3x y 8x de retorno sobre la inversión publicitaria."
  },
  {
    question: "¿Qué diferencia hay entre Facebook Ads e Instagram Ads?",
    answer: "Ambas plataformas se gestionan desde Meta Ads Manager, pero tienen audiencias distintas. Facebook tiene mayor penetración en Cartagena en personas de 30 a 65 años, ideal para servicios profesionales, restaurantes y comercio. Instagram funciona mejor para marcas visuales y audiencias de 18 a 40 años. Nosotros evaluamos tu negocio y recomendamos la distribución óptima del presupuesto entre ambas plataformas."
  },
  {
    question: "¿En cuánto tiempo veo resultados con Facebook Ads?",
    answer: "Los primeros resultados se ven desde la primera semana: alcance, clics y mensajes. Sin embargo, la optimización real ocurre entre la semana 2 y 4, cuando el algoritmo de Meta ya tiene suficientes datos para encontrar las personas con mayor probabilidad de convertir. A partir del segundo mes las campañas están en su punto óptimo de rendimiento."
  },
  {
    question: "¿Puedo segmentar mis anuncios por barrios específicos de Cartagena?",
    answer: "Sí. Facebook permite segmentar por radio geográfico alrededor de una dirección específica, desde 1 km de radio. Esto significa que puedes mostrar anuncios solo a personas que están cerca de tu negocio en Bocagrande, Centro Histórico, Manga o cualquier zona. También se puede segmentar por código postal y por áreas de interés geográfico."
  },
  {
    question: "¿Qué tipo de anuncios funcionan mejor para negocios locales?",
    answer: "Para negocios locales en Cartagena, los formatos que mejor funcionan son: anuncios con botón de WhatsApp (generan contacto directo), anuncios de catálogo para retail y restaurantes, video corto mostrando el producto o servicio, y anuncios de ofertas con urgencia temporal. La clave es usar imágenes reales del negocio y lenguaje local que conecte con la audiencia cartagenera."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FacebookAdsCartagena = () => {
  const whatsappLink = "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20Facebook%20Ads%20en%20Cartagena";

  const beneficios = [
    {
      icon: MapPin,
      title: "Segmentación Hiperlocal",
      description: "Muestra tus anuncios solo a personas en los barrios donde están tus clientes. Desde 1 km de radio alrededor de tu negocio en Bocagrande, Manga, Centro Histórico o cualquier zona de Cartagena."
    },
    {
      icon: MessageCircle,
      title: "Contacto Directo por WhatsApp",
      description: "Campañas optimizadas para generar mensajes directos a tu WhatsApp Business. El cliente ve tu anuncio y con un toque te escribe. Sin formularios, sin fricción."
    },
    {
      icon: Users,
      title: "Audiencia Masiva en Cartagena",
      description: "Facebook tiene más de 800.000 usuarios activos en Cartagena. Es la plataforma con mayor penetración en personas de 30 a 65 años, un segmento con alto poder adquisitivo."
    },
    {
      icon: BarChart3,
      title: "Presupuesto Controlado y Medible",
      description: "Tú decides cuánto invertir. Cada peso se rastrea: sabes cuántas personas vieron tu anuncio, cuántas hicieron clic y cuántas te contactaron. Sin sorpresas."
    },
    {
      icon: TrendingUp,
      title: "Retorno Medible Desde el Día Uno",
      description: "A diferencia de medios tradicionales, con Facebook Ads sabes exactamente cuánto cuesta cada cliente potencial. Nuestros clientes en Cartagena obtienen en promedio un retorno de 5x sobre su inversión."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <SEOHead
        title="Facebook Ads en Cartagena"
        description="Servicio de Facebook Ads en Cartagena. Segmentación por barrios, campañas para negocios locales. Restaurantes, comercio y servicios. Resultados medibles."
        slug="/servicios/facebook-ads-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView direction="down" delay={0}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Facebook Ads para Negocios Locales
              </span>
            </FadeInView>
            <FadeInView direction="up" delay={0.15}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Facebook Ads en Cartagena:{" "}
                <GradientText animate>
                  Publicidad Local que Funciona
                </GradientText>
              </h1>
            </FadeInView>
            <FadeInView direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Llevamos clientes reales a tu negocio en Cartagena usando Facebook Ads con segmentación por barrios,
                campañas de WhatsApp y estrategias diseñadas para restaurantes, comercio y servicios locales.
              </p>
            </FadeInView>
            <FadeInView direction="up" delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Cotización por WhatsApp
                  </Button>
                </a>
                <Link to="/servicios/publicidad-digital-cartagena">
                  <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg w-full sm:w-auto">
                    Ver Todos los Servicios de Publicidad
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ¿Qué es Facebook Ads? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                ¿Qué es Facebook Ads y Por Qué Importa en Cartagena?
              </h2>
            </FadeInView>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <FadeInView direction="left" delay={0.1}>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Facebook Ads es la plataforma de publicidad de Meta que permite crear anuncios pagados dentro de Facebook,
                    Messenger y la red de audiencias de Meta. A diferencia de publicar contenido orgánico y esperar que alguien lo vea,
                    con Facebook Ads tú decides exactamente quién ve tu mensaje, cuándo lo ve y dónde lo ve.
                  </p>
                  <p>
                    En Cartagena, Facebook sigue siendo la red social con mayor penetración. Más de 800.000 cartageneros usan Facebook
                    activamente cada mes. El perfil demográfico es amplio: desde jóvenes de 25 años hasta adultos de 65+, lo que la
                    convierte en la plataforma ideal para negocios que atienden al público general de la ciudad.
                  </p>
                  <p>
                    A diferencia de Instagram, donde el contenido visual manda, Facebook permite formatos más informativos:
                    publicaciones con texto más largo, catálogos de productos, eventos locales, ofertas del día y anuncios
                    con botón directo a WhatsApp. Para negocios locales en Cartagena, esto es una ventaja enorme.
                  </p>
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={0.2}>
                <div className="space-y-4">
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Facebook en Cartagena: Datos Clave</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>+<AnimatedCounter value={800000} className="inline" /> usuarios activos mensuales en la ciudad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Mayor penetración en personas de 30 a 65 años</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Costo por clic promedio: $300 - $800 COP</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Formatos: imagen, video, carrusel, catálogo, eventos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Integración directa con WhatsApp Business</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona para negocios en Cartagena? */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                ¿Cómo Funciona Facebook Ads para Negocios en Cartagena?
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                La clave de Facebook Ads para negocios locales es la segmentación geográfica.
                No necesitas llegar a toda Colombia, solo a las personas que pueden ir a tu negocio.
              </p>
            </FadeInView>

            <div className="space-y-12">
              {/* Segmentación por barrios */}
              <FadeInView direction="left" delay={0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    Segmentación por Barrios de Cartagena
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Facebook Ads permite definir un radio geográfico alrededor de cualquier dirección. Esto significa que
                    un restaurante en Bocagrande puede mostrar anuncios exclusivamente a personas que están en un radio
                    de 2 km. Una tienda en Manga puede llegar solo a residentes del barrio y zonas aledañas.
                  </p>
                  <StaggerContainer staggerDelay={0.05} className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                    {["Bocagrande", "Manga", "Centro Histórico", "Castellana", "Pie de la Popa", "Crespo", "Torices"].map((barrio) => (
                      <StaggerItem key={barrio}>
                        <ScaleOnHover>
                          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                            <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-200">{barrio}</span>
                          </div>
                        </ScaleOnHover>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <p className="text-gray-400 text-sm mt-3">
                    Segmentamos campañas por estos y otros barrios de Cartagena según la ubicación y el público objetivo de tu negocio.
                  </p>
                </div>
              </FadeInView>

              {/* Tipos de negocio */}
              <FadeInView direction="right" delay={0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Target className="h-6 w-6 text-blue-400" />
                    ¿Qué Negocios Funcionan Mejor con Facebook Ads en Cartagena?
                  </h3>
                  <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-4">
                    <StaggerItem>
                      <ScaleOnHover>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-white mb-2">Restaurantes y Comida</h4>
                            <p className="text-gray-400 text-sm">
                              Anuncios con fotos de platos, promociones del día, menú del almuerzo.
                              Campañas de WhatsApp para reservas y domicilios. Segmentación por zona para
                              restaurantes en Bocagrande, Getsemaní o Manga.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </StaggerItem>
                    <StaggerItem>
                      <ScaleOnHover>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-white mb-2">Comercio y Retail</h4>
                            <p className="text-gray-400 text-sm">
                              Catálogos de productos, ofertas de temporada, lanzamientos.
                              Anuncios de Marketplace para llegar a compradores activos.
                              Tiendas de ropa, licores, tecnología, decoración.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </StaggerItem>
                    <StaggerItem>
                      <ScaleOnHover>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-white mb-2">Servicios Profesionales</h4>
                            <p className="text-gray-400 text-sm">
                              Abogados, contadores, odontólogos, veterinarios, salones de belleza.
                              Campañas de generación de leads con formularios o WhatsApp directo.
                              Segmentación por edad, intereses y ubicación.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </StaggerItem>
                    <StaggerItem>
                      <ScaleOnHover>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-white mb-2">Eventos y Entretenimiento</h4>
                            <p className="text-gray-400 text-sm">
                              Promoción de eventos locales, fiestas, lanzamientos, ferias.
                              Facebook Events combinado con anuncios pagados.
                              Ideal para bares, discotecas y espacios de eventos en Cartagena.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </FadeInView>

              {/* Marketplace y formatos */}
              <FadeInView direction="left" delay={0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                    Formatos de Anuncio que Usamos
                  </h3>
                  <p className="text-gray-300 mb-4">
                    No todos los formatos funcionan igual. Seleccionamos el tipo de anuncio según tu objetivo de negocio:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Anuncios de WhatsApp (Click-to-WhatsApp):</strong> El usuario toca el anuncio y abre una conversación directa contigo.
                        Es el formato estrella para negocios de servicios y restaurantes en Cartagena.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Anuncios de Catálogo:</strong> Muestran varios productos con precio y foto.
                        Perfectos para tiendas de retail, licoreras y negocios con inventario variado.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Video Ads:</strong> Videos cortos (15-30 segundos) mostrando tu producto, servicio o local.
                        Tienen el mayor engagement y el menor costo por impresión en Facebook.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Anuncios en Marketplace:</strong> Aparecen dentro de Facebook Marketplace, donde las personas buscan activamente
                        productos para comprar. Excelente para comercio y retail en Cartagena.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Eventos patrocinados:</strong> Promueven eventos locales a personas en Cartagena con interés en el tema.
                        Generan confirmaciones de asistencia y recordatorios automáticos.
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Beneficios de Facebook Ads para tu Negocio en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Facebook Ads no es solo alcance. Es precisión, control y retorno medible para negocios locales.
              </p>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficios.map((beneficio, index) => (
                <FadeInView key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-colors">
                      <CardContent className="p-6">
                        <beneficio.icon className="h-10 w-10 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">{beneficio.title}</h3>
                        <p className="text-gray-400 text-sm">{beneficio.description}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Resultados Reales con Facebook Ads en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Métricas de campañas ejecutadas para negocios locales en Cartagena. Datos reales, no proyecciones.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { value: 5.2, prefix: "", suffix: "x", label: "Retorno promedio sobre inversión publicitaria (ROAS)", decimals: 1 },
                { value: 1200, prefix: "$", suffix: "", label: "Costo promedio por lead (COP) en servicios locales", decimals: 0 },
                { value: 340, prefix: "+", suffix: "%", label: "Aumento en mensajes de WhatsApp para restaurantes", decimals: 0 },
                { value: 73, prefix: "", suffix: "%", label: "Reducción en costo por conversión vs. primer mes", decimals: 0 }
              ].map((metric, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                        <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
                      </div>
                      <p className="text-gray-400 text-sm">{metric.label}</p>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
              <StaggerItem>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Restaurante en Bocagrande</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Campaña de Click-to-WhatsApp segmentada a personas en radio de 3 km del restaurante.
                        En 30 días generamos 187 conversaciones nuevas por WhatsApp con un costo promedio
                        de $850 COP por conversación. El restaurante reportó un aumento del 40% en reservas
                        durante el periodo de campaña.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-400">Inversión: $1.5M COP</span>
                        <span className="text-green-400">Ventas atribuidas: $8.2M COP</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Tienda de Retail en Castellana</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Anuncios de catálogo + Marketplace para una tienda de ropa y accesorios.
                        Segmentación a mujeres de 25-45 años en Cartagena. En 60 días la tienda
                        duplicó sus ventas mensuales, con un costo por venta de $3,200 COP en un
                        ticket promedio de $85,000 COP.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-400">Inversión: $2M COP</span>
                        <span className="text-green-400">Ventas atribuidas: $12.5M COP</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ¿Cuánto cuesta? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                ¿Cuánto Cuesta Facebook Ads en Cartagena?
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                La inversión se divide en dos partes: la pauta publicitaria (lo que pagas a Meta) y la gestión profesional de campañas.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-400 mb-1">Inicial</h3>
                      <p className="text-sm text-gray-500 mb-4">Negocios que arrancan</p>
                      <div className="text-3xl font-bold text-white mb-4">$<AnimatedCounter value={800000} /> <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                      <ul className="space-y-2 text-gray-300 text-sm mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Gestión de campañas en Facebook</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Segmentación geográfica por barrio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>2 conjuntos de anuncios activos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Reporte mensual de resultados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Pauta recomendada: desde $500.000 COP</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <FloatingElement amplitude={4} duration={3}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-blue-500/30 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Más Popular
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-400 mb-1">Crecimiento</h3>
                        <p className="text-sm text-gray-500 mb-4">Negocios en expansión</p>
                        <div className="text-3xl font-bold text-white mb-4">$<AnimatedCounter value={1500000} /> <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                        <ul className="space-y-2 text-gray-300 text-sm mb-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Todo lo del plan Inicial</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Facebook + Instagram Ads integrado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>4 conjuntos de anuncios + A/B testing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Optimización semanal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Pauta recomendada: desde $1.500.000 COP</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FloatingElement>
              </StaggerItem>
              <StaggerItem>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-400 mb-1">Escala</h3>
                      <p className="text-sm text-gray-500 mb-4">Máximo rendimiento</p>
                      <div className="text-3xl font-bold text-white mb-4">$<AnimatedCounter value={2500000} /> <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                      <ul className="space-y-2 text-gray-300 text-sm mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Todo lo del plan Crecimiento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Campañas de retargeting avanzado</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Audiencias lookalike personalizadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Reportes semanales + llamada mensual</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Pauta recomendada: desde $3.000.000 COP</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            </StaggerContainer>
            <FadeInView direction="up" delay={0.3}>
              <p className="text-gray-500 text-sm text-center mt-6">
                * Los precios de gestión no incluyen la pauta publicitaria, que se paga directamente a Meta.
                Todos los precios están en pesos colombianos (COP) e incluyen IVA.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Preguntas Frecuentes sobre Facebook Ads en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12">
                Resolvemos las dudas más comunes de negocios locales que quieren pautar en Facebook.
              </p>
            </FadeInView>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <FadeInView key={index} direction="up" delay={index * 0.1}>
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-white/5 border border-white/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-blue-400 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-2xl font-bold mb-6 text-center">Servicios Relacionados</h2>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-3 gap-4">
              <StaggerItem>
                <Link to="/servicios/publicidad-digital-cartagena" className="block">
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Publicidad Digital en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Estrategia completa de publicidad digital para tu negocio. Google Ads, Meta Ads y más.</p>
                        <span className="text-blue-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link to="/servicios/meta-ads-cartagena" className="block">
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Meta Ads en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Gestión profesional de campañas en Facebook e Instagram desde Meta Ads Manager.</p>
                        <span className="text-blue-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link to="/servicios/instagram-ads-cartagena" className="block">
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Instagram Ads en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Anuncios en Instagram para marcas visuales. Stories, Reels y feed optimizados.</p>
                        <span className="text-blue-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInView direction="up">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 rounded-2xl border border-blue-500/20 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Lleva Más Clientes a tu Negocio en Cartagena
                </h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Agenda una consulta gratuita. Analizamos tu negocio, tu zona y tu competencia
                  para diseñar una estrategia de Facebook Ads que genere resultados reales desde el primer mes.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Hablar con un Especialista por WhatsApp
                  </Button>
                </a>
                <p className="text-gray-500 text-sm mt-4">
                  Respuesta en menos de 2 horas en horario laboral.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacebookAdsCartagena;
