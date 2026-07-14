import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, Camera, MessageCircle, Eye, Zap, CheckCircle, ShoppingBag, Play } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Instagram Ads funciona para negocios pequeños en Cartagena?",
    answer: "Absolutamente. Instagram Ads es una de las plataformas más rentables para negocios pequeños con productos o servicios visuales. Un salón de belleza en Manga, un restaurante en Getsemaní o una tienda de ropa en Bocagrande pueden empezar con presupuestos desde $500.000 COP mensuales y llegar exactamente a las personas que les interesan. La clave es tener buen contenido visual y una segmentación precisa, que es exactamente lo que hacemos."
  },
  {
    question: "¿Qué formato de anuncio funciona mejor en Instagram para Cartagena?",
    answer: "Depende del objetivo, pero los Reels Ads son actualmente el formato con mejor rendimiento en Cartagena. Tienen el mayor alcance y el menor costo por impresión. Para negocios de turismo y restaurantes, los Reels que muestran experiencias funcionan muy bien. Para estética y moda, los Stories Ads con botón de WhatsApp generan conversiones directas. Nosotros hacemos pruebas A/B con diferentes formatos para encontrar el que mejor funciona para tu negocio específico."
  },
  {
    question: "¿Cuánto debo invertir en Instagram Ads para ver resultados?",
    answer: "Para negocios locales en Cartagena, recomendamos un mínimo de $500.000 COP mensuales en pauta publicitaria. Con esta inversión puedes alcanzar entre 30.000 y 80.000 personas al mes en tu zona. Negocios que buscan crecimiento acelerado invierten entre $1.500.000 y $4.000.000 COP mensuales. El retorno promedio de nuestros clientes es de 4x a 7x sobre la inversión publicitaria."
  },
  {
    question: "¿Necesito tener muchos seguidores para que Instagram Ads funcione?",
    answer: "No. Los anuncios en Instagram se muestran a personas que no te siguen, por eso funcionan para crecer. Tu cantidad de seguidores no afecta el rendimiento de las campañas pagadas. Lo que sí importa es la calidad del contenido visual y la oferta que presentes. Hemos ejecutado campañas exitosas para cuentas con menos de 500 seguidores que generaron cientos de conversaciones por WhatsApp."
  },
  {
    question: "¿Puedo vender productos directamente desde Instagram Ads?",
    answer: "Sí. Con Instagram Shopping Ads puedes etiquetar productos con precio directamente en los anuncios. El usuario toca el producto y ve el precio, la descripción y puede comprarlo sin salir de la app. Para negocios de moda, accesorios y retail en Cartagena, este formato reduce la fricción de compra significativamente. También se puede direccionar al usuario a tu WhatsApp o sitio web para completar la compra."
  },
  {
    question: "¿Qué diferencia hay entre publicar en Instagram y pautar con Instagram Ads?",
    answer: "Publicar de forma orgánica en Instagram solo llega al 5-10% de tus seguidores. El algoritmo limita el alcance para incentivar la inversión en publicidad. Con Instagram Ads, tú decides exactamente quién ve tu contenido: puedes segmentar por ubicación (barrios de Cartagena), edad, intereses y comportamientos. Además, puedes incluir botones de acción como 'Enviar mensaje por WhatsApp' o 'Comprar ahora', algo que el contenido orgánico no permite."
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

const InstagramAdsCartagena = () => {
  const whatsappLink = "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20Instagram%20Ads%20en%20Cartagena";

  const formatos = [
    {
      icon: Play,
      title: "Reels Ads",
      description: "Videos verticales de hasta 90 segundos que aparecen en el feed de Reels. Es el formato con mayor alcance y menor costo por impresión en Instagram actualmente.",
      cuando: "Ideal para mostrar experiencias: recorridos por restaurantes, transformaciones de estética, tours turísticos, outfits de moda."
    },
    {
      icon: Camera,
      title: "Stories Ads",
      description: "Anuncios en pantalla completa que aparecen entre las historias de otros usuarios. Permiten deslizar hacia arriba o tocar botones de acción directa.",
      cuando: "Perfecto para promociones de tiempo limitado, ofertas del día, reservas inmediatas y contacto directo por WhatsApp."
    },
    {
      icon: Eye,
      title: "Feed Ads",
      description: "Anuncios en imagen o carrusel que aparecen en el feed principal. Permiten mostrar múltiples productos o contar una historia visual en varias imágenes.",
      cuando: "Funciona bien para catálogos de productos, antes y después en estética, menús de restaurante y portafolios de servicios."
    },
    {
      icon: ShoppingBag,
      title: "Shopping Ads",
      description: "Anuncios con etiquetas de productos que muestran nombre y precio. El usuario toca y accede directamente a la ficha del producto para comprar.",
      cuando: "Diseñado para tiendas de moda, accesorios, cosméticos y cualquier negocio de retail con catálogo de productos."
    },
    {
      icon: Target,
      title: "Explore Ads",
      description: "Anuncios que aparecen en la sección Explorar de Instagram, donde los usuarios descubren contenido nuevo según sus intereses.",
      cuando: "Excelente para turismo y hospitalidad en Cartagena: hoteles, restaurantes y experiencias que las personas buscan activamente."
    }
  ];

  const negocios = [
    {
      title: "Restaurantes y Gastronomía",
      description: "Cartagena es una ciudad gastronómica. Los Reels mostrando platos, el ambiente del local y la preparación en cocina generan reservas y visitas directas. Un restaurante en el Centro Histórico puede atraer tanto a locales como a turistas con anuncios geolocalizados.",
      ejemplo: "Cevicherías en Bocagrande, restaurantes en Getsemaní, cafeterías en San Diego."
    },
    {
      title: "Centros de Estética y Belleza",
      description: "El antes y después es el contenido más poderoso en Instagram para salones de belleza, spas y centros de estética. Stories con resultados reales y Reels de procedimientos generan confianza y mensajes directos por WhatsApp.",
      ejemplo: "Salones de uñas, barberías premium, spas en Bocagrande, centros de depilación láser."
    },
    {
      title: "Turismo y Hoteles",
      description: "Cartagena es el destino turístico más fotografiado de Colombia. Los anuncios en Instagram alcanzan viajeros que están planeando su viaje o ya están en la ciudad. Reels de experiencias y Stories con ofertas de temporada son el formato estrella.",
      ejemplo: "Boutique hotels en Centro Histórico, tours en lancha a islas, planes todo incluido."
    },
    {
      title: "Moda y Retail",
      description: "Instagram Shopping permite etiquetar productos con precio directamente en los anuncios. Para tiendas de ropa, accesorios y calzado en Cartagena, esto significa ventas con un solo toque. Los carruseles de colecciones y Reels de outfits generan alto engagement.",
      ejemplo: "Boutiques en Castellana, tiendas de artesanías, marcas locales de trajes de baño."
    },
    {
      title: "Fitness y Bienestar",
      description: "Gimnasios, entrenadores personales y centros de yoga usan Instagram Ads para mostrar transformaciones, rutinas y el ambiente de sus espacios. Los Reels de entrenamientos y Stories con promociones de inscripción convierten seguidores en clientes.",
      ejemplo: "Gimnasios en Manga, estudios de pilates, entrenadores personales en Bocagrande."
    }
  ];

  const beneficios = [
    {
      icon: Camera,
      title: "Plataforma 100% Visual",
      description: "Instagram es la red social donde el contenido visual manda. Si tu negocio tiene productos atractivos, espacios bonitos o resultados visibles, Instagram es tu canal de ventas más poderoso en Cartagena."
    },
    {
      icon: Target,
      title: "Segmentación Precisa en Cartagena",
      description: "Mostramos tus anuncios solo a personas en las zonas de Cartagena que te interesan, segmentadas por edad, intereses y comportamientos. Cero desperdicio de presupuesto."
    },
    {
      icon: Zap,
      title: "Contacto Directo por WhatsApp",
      description: "Cada anuncio incluye un botón de WhatsApp. El usuario ve tu anuncio, le gusta lo que ve y te escribe al instante. Sin formularios, sin pasos intermedios."
    },
    {
      icon: TrendingUp,
      title: "Alcance que el Orgánico No Da",
      description: "Las publicaciones orgánicas en Instagram solo alcanzan al 5-10% de tus seguidores. Con Ads llegas a miles de personas nuevas en Cartagena cada semana, incluyendo gente que aún no te sigue."
    },
    {
      icon: ShoppingBag,
      title: "Ventas Directas con Shopping",
      description: "Con Instagram Shopping Ads tus clientes ven el producto, el precio y pueden comprarlo sin salir de la app. Para moda, retail y cosméticos en Cartagena es un canal de venta directo."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <SEOHead
        title="Instagram Ads en Cartagena"
        description="Publicidad en Instagram para negocios en Cartagena. Reels, Stories y Feed Ads para restaurantes, estética, turismo y moda. Resultados medibles."
        slug="/servicios/instagram-ads-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-purple-600/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView direction="down" delay={0}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20">
                Instagram Ads para Negocios Visuales
              </span>
            </FadeInView>
            <FadeInView direction="up" delay={0.15}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Instagram Ads en Cartagena:{" "}
                <GradientText>
                  Publicidad Visual que Vende
                </GradientText>
              </h1>
            </FadeInView>
            <FadeInView direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Creamos campañas de Instagram Ads que convierten la atención en ventas para restaurantes, centros de estética,
                turismo y moda en Cartagena. Reels, Stories, Feed y Shopping Ads con resultados medibles.
              </p>
            </FadeInView>
            <FadeInView direction="up" delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Cotizar Instagram Ads por WhatsApp
                  </Button>
                </a>
                <Link to="/servicios/publicidad-digital-cartagena">
                  <Button size="lg" variant="outline" className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 px-8 py-6 text-lg w-full sm:w-auto">
                    Ver Todos los Servicios de Publicidad
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ¿Por qué Instagram Ads? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                ¿Por Qué Instagram Ads es Perfecto para Negocios en Cartagena?
              </h2>
            </FadeInView>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <FadeInView direction="left" delay={0.1}>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Cartagena es una ciudad visual por naturaleza. Su arquitectura colonial, sus playas, su gastronomía y
                    su vida nocturna la convierten en una de las ciudades más fotografiadas de Latinoamérica. Eso se traduce
                    directamente en Instagram: los cartageneros y los turistas consumen contenido visual de la ciudad
                    todos los días.
                  </p>
                  <p>
                    Instagram tiene más de 600.000 usuarios activos en Cartagena, con mayor concentración en personas de 18 a 45 años.
                    Es la plataforma preferida para descubrir restaurantes, salones de belleza, tiendas de ropa y planes turísticos.
                    Si tu negocio es visual, Instagram no es opcional: es tu canal de ventas principal.
                  </p>
                  <p>
                    A diferencia de publicar contenido orgánico y esperar que el algoritmo lo muestre, con Instagram Ads
                    tú controlas quién ve tus anuncios, cuándo los ve y qué acción puede tomar. Puedes dirigir a las personas
                    directamente a tu WhatsApp, a tu tienda online o a tu perfil de Instagram Shopping.
                  </p>
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={0.2}>
                <div className="space-y-4">
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Instagram en Cartagena: Datos Clave</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>+600.000 usuarios activos mensuales en la ciudad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Mayor penetración en personas de 18 a 45 años</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Reels: el formato con mayor alcance y menor CPM</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Plataforma #1 para descubrir restaurantes y estética</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Integración directa con Shopping y WhatsApp Business</span>
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

      {/* Formatos de Anuncios */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Formatos de Anuncios en Instagram que Usamos
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Cada formato tiene un propósito distinto. Seleccionamos y combinamos los formatos según tu tipo de negocio
                y objetivo comercial en Cartagena.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formatos.map((formato, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors">
                      <CardContent className="p-6">
                        <formato.icon className="h-10 w-10 text-pink-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">{formato.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{formato.description}</p>
                        <p className="text-pink-300/80 text-sm border-t border-white/10 pt-3">
                          <strong>Cuándo usarlo:</strong> {formato.cuando}
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Negocios que más crecen */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Negocios que Más Crecen con Instagram Ads en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Instagram Ads no funciona igual para todos. Estos son los sectores donde vemos los mejores resultados
                en Cartagena, con ejemplos concretos de cómo se aplica.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {negocios.map((negocio, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">{negocio.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{negocio.description}</p>
                        <p className="text-purple-300/80 text-xs border-t border-white/10 pt-3">
                          {negocio.ejemplo}
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Beneficios de Instagram Ads para tu Negocio en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Instagram no es solo para crecer seguidores. Es un canal de ventas con segmentación precisa,
                contacto directo y resultados medibles.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficios.map((beneficio, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors">
                      <CardContent className="p-6">
                        <beneficio.icon className="h-10 w-10 text-pink-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">{beneficio.title}</h3>
                        <p className="text-gray-400 text-sm">{beneficio.description}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Resultados Reales */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Resultados Reales con Instagram Ads en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Métricas de campañas ejecutadas para negocios locales en Cartagena. Datos de rendimiento real, no proyecciones.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { numValue: 4.8, prefix: "", suffix: "x", decimals: 1, label: "Retorno promedio sobre inversión publicitaria (ROAS)" },
                { numValue: 900, prefix: "$", suffix: "", decimals: 0, label: "Costo promedio por lead (COP) en negocios visuales" },
                { numValue: 280, prefix: "+", suffix: "%", decimals: 0, label: "Aumento en mensajes de WhatsApp para centros de estética" },
                { numValue: 68, prefix: "", suffix: "%", decimals: 0, label: "Reducción en costo por conversión después del primer mes" }
              ].map((metric, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                        <AnimatedCounter value={metric.numValue} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} duration={2} />
                      </div>
                      <p className="text-gray-400 text-sm">{metric.label}</p>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeInView direction="left" delay={0.1}>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Centro de Estética en Bocagrande</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Campaña de Stories Ads + Reels Ads con antes y después de tratamientos faciales y corporales.
                        Segmentación a mujeres de 25-50 años en Cartagena. En 30 días generamos 215 conversaciones
                        por WhatsApp con un costo promedio de $720 COP por lead. El centro reportó un aumento
                        del 55% en citas agendadas durante la campaña.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-pink-400">Inversión: $1.2M COP</span>
                        <span className="text-green-400">Ventas atribuidas: $7.8M COP</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </FadeInView>
              <FadeInView direction="right" delay={0.2}>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Restaurante en Getsemaní</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Campaña de Reels Ads mostrando preparación de platos y ambiente del restaurante.
                        Segmentación a turistas nacionales e internacionales en Cartagena + locales
                        en radio de 5 km. En 45 días el restaurante pasó de 12 reservas semanales a 34,
                        con un costo por reserva de $2,800 COP.
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-pink-400">Inversión: $2M COP</span>
                        <span className="text-green-400">Ventas atribuidas: $14.2M COP</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cuánto cuesta? */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                ¿Cuánto Cuesta Instagram Ads en Cartagena?
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                La inversión se divide en dos: la pauta publicitaria (lo que pagas a Meta) y la gestión profesional
                de campañas. Estos son nuestros planes de gestión.
              </p>
            </FadeInView>
            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <ScaleOnHover>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-pink-400 mb-1">Inicial</h3>
                      <p className="text-sm text-gray-500 mb-4">Negocios que arrancan en Instagram</p>
                      <div className="text-3xl font-bold text-white mb-4">$800.000 <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                      <ul className="space-y-2 text-gray-300 text-sm mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Gestión de campañas en Instagram</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Segmentación geográfica en Cartagena</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>2 formatos de anuncio (Stories + Feed o Reels)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Reporte mensual de resultados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Pauta recomendada: desde $500.000 COP</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <FloatingElement amplitude={4} duration={5}>
                  <ScaleOnHover>
                    <Card className="bg-white/5 border-pink-500/30 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Más Popular
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-pink-400 mb-1">Crecimiento</h3>
                        <p className="text-sm text-gray-500 mb-4">Negocios visuales en expansión</p>
                        <div className="text-3xl font-bold text-white mb-4">$1.500.000 <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                        <ul className="space-y-2 text-gray-300 text-sm mb-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Todo lo del plan Inicial</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Reels + Stories + Feed + Shopping Ads</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>4 conjuntos de anuncios + A/B testing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span>Optimización semanal de creativos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
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
                      <h3 className="text-lg font-semibold text-pink-400 mb-1">Escala</h3>
                      <p className="text-sm text-gray-500 mb-4">Máximo rendimiento visual</p>
                      <div className="text-3xl font-bold text-white mb-4">$2.500.000 <span className="text-base font-normal text-gray-400">COP/mes</span></div>
                      <ul className="space-y-2 text-gray-300 text-sm mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Todo lo del plan Crecimiento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Retargeting de visitantes e interacciones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Audiencias lookalike de tus mejores clientes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span>Reportes semanales + llamada mensual</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-pink-400 mt-0.5 flex-shrink-0" />
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Preguntas Frecuentes sobre Instagram Ads en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-gray-400 text-center mb-12">
                Resolvemos las dudas más comunes de negocios que quieren pautar en Instagram.
              </p>
            </FadeInView>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <FadeInView key={index} direction="up" delay={0.1 * index}>
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-white/5 border border-white/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-pink-400 hover:no-underline py-4">
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
      <section className="py-12 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView direction="up">
              <h2 className="text-2xl font-bold mb-6 text-center">Servicios Relacionados</h2>
            </FadeInView>
            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StaggerItem>
                <ScaleOnHover>
                  <Link to="/servicios/publicidad-digital-cartagena" className="block">
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Publicidad Digital en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Estrategia completa de publicidad digital. Google Ads, Meta Ads y más.</p>
                        <span className="text-pink-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <ScaleOnHover>
                  <Link to="/servicios/meta-ads-cartagena" className="block">
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Meta Ads en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Gestión profesional de campañas en Facebook e Instagram desde Meta Ads Manager.</p>
                        <span className="text-pink-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <ScaleOnHover>
                  <Link to="/servicios/facebook-ads-cartagena" className="block">
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Facebook Ads en Cartagena</h3>
                        <p className="text-gray-400 text-sm flex-1">Campañas de Facebook para negocios locales con segmentación por barrios.</p>
                        <span className="text-pink-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
              <StaggerItem>
                <ScaleOnHover>
                  <Link to="/servicios/publicidad-redes-sociales-cartagena" className="block">
                    <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-colors h-full">
                      <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold text-white mb-2">Publicidad en Redes Sociales</h3>
                        <p className="text-gray-400 text-sm flex-1">Estrategia integral en todas las redes sociales para tu negocio.</p>
                        <span className="text-pink-400 text-sm mt-3 flex items-center gap-1">
                          Ver más <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
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
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/10 rounded-2xl border border-pink-500/20 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Haz que tu Negocio Destaque en Instagram en Cartagena
                </h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Agenda una consulta gratuita. Analizamos tu negocio, tu contenido visual y tu competencia
                  para diseñar una estrategia de Instagram Ads que genere ventas reales desde la primera semana.
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

export default InstagramAdsCartagena;
