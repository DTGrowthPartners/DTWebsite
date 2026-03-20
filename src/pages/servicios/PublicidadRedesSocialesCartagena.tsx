import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Users, Layers, CheckCircle, HelpCircle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Cuál es la mejor red social para hacer publicidad en Cartagena?",
    answer: "Depende de tu negocio y tu audiencia. Facebook funciona muy bien para servicios profesionales y personas mayores de 35 años. Instagram es ideal para negocios visuales como restaurantes, hoteles y moda. TikTok llega a audiencias jóvenes de 16 a 30 años. WhatsApp es el canal con mayor tasa de respuesta en Colombia. En la mayoría de los casos, una combinación de 2 o 3 plataformas genera los mejores resultados."
  },
  {
    question: "¿Cuál es la diferencia entre manejo de redes sociales y publicidad en redes sociales?",
    answer: "El manejo de redes sociales (orgánico) consiste en crear contenido y publicarlo en tus perfiles: fotos, videos, historias. Esto construye comunidad pero tiene alcance limitado. La publicidad en redes sociales (pauta pagada) consiste en pagar para que tus anuncios lleguen a personas específicas que aún no te conocen. Lo ideal es combinar ambas estrategias: contenido orgánico para fidelizar y pauta pagada para atraer clientes nuevos."
  },
  {
    question: "¿Cuánto debo invertir en publicidad en redes sociales en Cartagena?",
    answer: "Para una sola plataforma, recomendamos un mínimo de $500.000 COP mensuales en pauta. Si quieres cubrir 2 plataformas, lo ideal es partir desde $1.000.000 COP. Para estrategias multicanal de 3 o más plataformas, una inversión de $2.000.000 a $5.000.000 COP mensuales permite obtener datos suficientes para optimizar y escalar. A esto se suma la tarifa de gestión de la agencia."
  },
  {
    question: "¿Puedo hacer publicidad en TikTok para un negocio local en Cartagena?",
    answer: "Sí. TikTok Ads ya permite segmentación geográfica en Colombia, incluyendo Cartagena. Es especialmente efectivo para restaurantes, bares, entretenimiento, moda y cualquier negocio que pueda crear contenido visual atractivo. El costo por impresión en TikTok sigue siendo menor que en Meta, lo que lo hace una buena opción para generar reconocimiento de marca."
  },
  {
    question: "¿En cuánto tiempo veo resultados con publicidad en redes sociales?",
    answer: "Los primeros resultados (alcance, clics, mensajes) se ven en las primeras 48 a 72 horas. La optimización real ocurre entre la semana 2 y la semana 4, cuando los algoritmos tienen datos suficientes para encontrar a las personas con mayor probabilidad de comprar. A partir del segundo mes las campañas están en su punto óptimo de rendimiento."
  },
  {
    question: "¿Necesito tener presencia en todas las redes sociales?",
    answer: "No. Es mejor tener presencia fuerte en 2 o 3 plataformas que presencia débil en todas. Nosotros evaluamos tu negocio, tu audiencia y tus objetivos para recomendarte las plataformas donde tu inversión generará mayor retorno. Un restaurante no necesita LinkedIn, y un despacho de abogados no necesita TikTok. La estrategia correcta parte de elegir bien dónde estar."
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

const PublicidadRedesSocialesCartagena = () => {
  const whatsappLink = "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20publicidad%20en%20redes%20sociales%20en%20Cartagena";

  const plataformas = [
    {
      nombre: "Facebook",
      audiencia: "35-65+ años",
      ideal: "Servicios profesionales, salud, inmobiliarias, comercio local",
      fortaleza: "Mayor penetración en Cartagena en adultos. Segmentación por barrios, intereses y comportamiento. Ideal para generar leads por WhatsApp.",
      icon: Users,
      color: "blue"
    },
    {
      nombre: "Instagram",
      audiencia: "18-45 años",
      ideal: "Restaurantes, hoteles, moda, belleza, fitness, arquitectura",
      fortaleza: "Plataforma visual por excelencia. Stories, Reels y Shopping permiten mostrar productos y servicios de forma atractiva. Funciona para branding y ventas directas.",
      icon: Target,
      color: "purple"
    },
    {
      nombre: "TikTok",
      audiencia: "16-35 años",
      ideal: "Entretenimiento, gastronomía, moda, turismo, educación informal",
      fortaleza: "Alcance orgánico alto y costo por impresión bajo en pauta. Contenido viral que puede posicionar tu marca rápidamente. Crecimiento acelerado en Cartagena.",
      icon: TrendingUp,
      color: "pink"
    },
    {
      nombre: "WhatsApp",
      audiencia: "Todas las edades",
      ideal: "Cualquier negocio que cierre ventas por chat: comercio, servicios, consultas",
      fortaleza: "La app #1 en Colombia. Tasa de apertura del 98%. Campañas de clic a WhatsApp desde Facebook e Instagram generan contacto directo sin fricción.",
      icon: MessageCircle,
      color: "green"
    },
    {
      nombre: "YouTube",
      audiencia: "25-55 años",
      ideal: "Educación, turismo, bienes raíces, automotriz, marcas con contenido largo",
      fortaleza: "Segundo buscador del mundo. Los anuncios en YouTube generan reconocimiento de marca y funcionan para productos o servicios que requieren explicación.",
      icon: BarChart3,
      color: "red"
    }
  ];

  const beneficios = [
    {
      icon: Layers,
      title: "Estrategia Multicanal Integrada",
      description: "No gestionamos plataformas por separado. Diseñamos una estrategia donde cada red social cumple un rol específico en el recorrido del cliente: desde el descubrimiento hasta la conversión."
    },
    {
      icon: Target,
      title: "Segmentación Precisa en Cartagena",
      description: "Llegamos a las personas correctas en los barrios correctos. Segmentamos por ubicación, edad, intereses y comportamiento de compra para que cada peso de tu inversión impacte a clientes potenciales reales."
    },
    {
      icon: BarChart3,
      title: "Presupuesto Distribuido con Datos",
      description: "No adivinamos dónde invertir. Analizamos el rendimiento de cada plataforma en tiempo real y redistribuimos el presupuesto hacia donde genera mayor retorno para tu negocio."
    },
    {
      icon: MessageCircle,
      title: "Conversiones Directas por WhatsApp",
      description: "Todas las campañas están diseñadas para generar acciones concretas: mensajes de WhatsApp, llamadas, visitas al local o compras. No vendemos likes ni seguidores."
    },
    {
      icon: TrendingUp,
      title: "Reportes Claros y Accionables",
      description: "Cada semana sabes exactamente cuántos leads generó cada plataforma, cuánto costó cada uno y qué ajustes estamos haciendo para mejorar los resultados."
    }
  ];

  const paquetes = [
    {
      nombre: "Starter",
      plataformas: "1 plataforma",
      descripcion: "Para negocios que están empezando con publicidad digital o que tienen un presupuesto limitado y quieren concentrar esfuerzos en una sola red social.",
      incluye: [
        "Auditoría y selección de plataforma ideal",
        "Configuración de cuenta publicitaria",
        "Creación de 4 campañas mensuales",
        "Segmentación por ubicación en Cartagena",
        "Optimización semanal de campañas",
        "Reporte mensual de resultados"
      ],
      color: "blue"
    },
    {
      nombre: "Growth",
      plataformas: "2 plataformas",
      descripcion: "Para negocios que necesitan cubrir más de un canal para llegar a diferentes segmentos de su audiencia. La combinación más común es Facebook + Instagram o Instagram + WhatsApp.",
      incluye: [
        "Todo lo del plan Starter",
        "Estrategia cruzada entre plataformas",
        "Creación de 8 campañas mensuales",
        "Retargeting entre plataformas",
        "A/B testing de creativos y audiencias",
        "Reportes quincenales con análisis comparativo"
      ],
      color: "purple",
      destacado: true
    },
    {
      nombre: "Scale",
      plataformas: "3+ plataformas",
      descripcion: "Para negocios con operación consolidada que necesitan presencia publicitaria en múltiples canales con una estrategia unificada y presupuesto distribuido según rendimiento.",
      incluye: [
        "Todo lo del plan Growth",
        "Gestión de 3 o más plataformas",
        "Estrategia de embudo completo multicanal",
        "Redistribución dinámica de presupuesto",
        "Creativos personalizados por plataforma",
        "Reportes semanales y reunión mensual de estrategia"
      ],
      color: "cyan"
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", gradient: "from-blue-400 to-blue-600" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", gradient: "from-purple-400 to-purple-600" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20", gradient: "from-pink-400 to-pink-600" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", gradient: "from-green-400 to-green-600" },
    red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", gradient: "from-red-400 to-red-600" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", gradient: "from-cyan-400 to-cyan-600" }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <SEOHead
        title="Publicidad en Redes Sociales en Cartagena"
        description="Publicidad en redes sociales en Cartagena. Te ayudamos a elegir la plataforma correcta: Facebook, Instagram, TikTok o WhatsApp. Paquetes combinados."
        slug="/servicios/publicidad-redes-sociales-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView direction="down" delay={0}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                Publicidad Multicanal en Cartagena
              </span>
            </FadeInView>
            <FadeInView direction="up" delay={0.15}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Publicidad en Redes Sociales en Cartagena:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  La Plataforma Correcta para Tu Negocio
                </span>
              </h1>
            </FadeInView>
            <FadeInView direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Facebook, Instagram, TikTok, WhatsApp, YouTube... no necesitas estar en todas. Te ayudamos a identificar
                dónde están tus clientes en Cartagena y a invertir donde genera resultados reales. Paquetes combinados con
                estrategia unificada.
              </p>
            </FadeInView>
            <FadeInView direction="up" delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Asesoría Gratuita por WhatsApp
                  </Button>
                </a>
                <Link to="/servicios/publicidad-digital-cartagena">
                  <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg w-full sm:w-auto">
                    Ver Todos los Servicios de Publicidad
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Qué plataforma elegir */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué Plataforma Elegir para Tu Negocio en Cartagena?
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-lg text-gray-300">
                Cada red social tiene una audiencia diferente y funciona mejor para ciertos tipos de negocio.
                No se trata de estar en todas, sino de estar donde están tus clientes. Esta es la guía que usamos
                con nuestros clientes en Cartagena para tomar la decisión correcta.
              </p>
            </FadeInView>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plataformas.map((plataforma) => {
              const colors = colorMap[plataforma.color];
              const Icon = plataforma.icon;
              return (
                <StaggerItem key={plataforma.nombre}>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className={`bg-gray-900/50 border ${colors.border} hover:border-opacity-50 transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                          <Icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>{plataforma.nombre}</h3>
                        <div className="mb-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.bg} ${colors.text}`}>
                            Audiencia: {plataforma.audiencia}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          <span className="font-semibold text-gray-300">Ideal para:</span> {plataforma.ideal}
                        </p>
                        <p className="text-sm text-gray-400">{plataforma.fortaleza}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeInView direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-gray-400">
                ¿No sabes cuál elegir? No te preocupes.{" "}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Escríbenos por WhatsApp
                </a>{" "}
                y te hacemos una evaluación gratuita de tu negocio para recomendarte la combinación ideal de plataformas.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Orgánico vs Pauta Pagada */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeInView direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Orgánico vs Pauta Pagada: ¿Cuál Necesitas?
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-lg text-gray-300">
                  Esta es una de las preguntas más frecuentes que recibimos. La respuesta corta: necesitas ambos,
                  pero cumplen funciones distintas. Entender la diferencia te evita perder tiempo y dinero.
                </p>
              </FadeInView>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FadeInView direction="left" delay={0.1}>
                <Card className="bg-gray-900/50 border border-blue-500/20">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Contenido Orgánico</h3>
                    <p className="text-gray-300 mb-4">
                      Publicar contenido en tus perfiles sin pagar por distribución. Posts, historias, reels, videos.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        Construye confianza y comunidad a largo plazo
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        Fideliza a clientes existentes
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        Genera credibilidad cuando un prospecto revisa tu perfil
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        Alcance limitado: solo llega al 5-10% de tus seguidores
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInView>

              <FadeInView direction="right" delay={0.1}>
                <Card className="bg-gray-900/50 border border-purple-500/20">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Pauta Pagada (Publicidad)</h3>
                    <p className="text-gray-300 mb-4">
                      Pagar para que tus anuncios lleguen a personas específicas que aún no te conocen.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        Llega a miles de personas nuevas cada día
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        Segmentación por ubicación, edad e intereses
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        Resultados medibles: costo por lead, retorno sobre inversión
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        Genera clientes nuevos de forma predecible y escalable
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInView>
            </div>

            <FadeInView direction="up" delay={0.2}>
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-3">¿Por qué necesitas ambos?</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  La pauta pagada atrae clientes nuevos a tu negocio. El contenido orgánico los convence de que eres
                  la opción correcta cuando visitan tu perfil. Sin pauta, nadie nuevo te encuentra. Sin contenido orgánico,
                  los prospectos ven un perfil vacío y pierden confianza. La combinación es lo que genera resultados
                  consistentes. Nuestros{" "}
                  <Link to="/servicios/publicidad-digital-cartagena" className="text-purple-400 hover:text-purple-300 underline">
                    servicios de publicidad digital
                  </Link>{" "}
                  integran ambas estrategias.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Paquetes combinados */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Paquetes Combinados de Publicidad en Redes Sociales
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-lg text-gray-300">
                Gestionamos tu publicidad en múltiples plataformas con una estrategia unificada. Cada paquete incluye
                la gestión completa de campañas, creativos, segmentación y optimización. El presupuesto de pauta
                se define según tu negocio y objetivos.
              </p>
            </FadeInView>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paquetes.map((paquete) => {
              const colors = colorMap[paquete.color];
              const cardContent = (
                <Card
                  key={paquete.nombre}
                  className={`bg-gray-900/50 border ${paquete.destacado ? "border-purple-500/50 ring-1 ring-purple-500/20" : colors.border} relative transition-all duration-300 hover:border-opacity-50`}
                >
                  {paquete.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-1 ${colors.text}`}>{paquete.nombre}</h3>
                    <p className="text-sm text-gray-400 mb-4">{paquete.plataformas}</p>
                    <p className="text-gray-300 mb-6 text-sm">{paquete.descripcion}</p>
                    <ul className="space-y-3 mb-8">
                      {paquete.incluye.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className={`h-4 w-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className={`w-full ${paquete.destacado ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 hover:bg-gray-700"} text-white`}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Solicitar Cotización
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );

              return (
                <StaggerItem key={paquete.nombre}>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    {paquete.destacado ? (
                      <FloatingElement amplitude={4} duration={3}>
                        {cardContent}
                      </FloatingElement>
                    ) : (
                      cardContent
                    )}
                  </ScaleOnHover>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeInView direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto mt-10 text-center">
              <p className="text-gray-400 text-sm">
                Todos los paquetes incluyen gestión de campañas, creativos y reportes. El presupuesto de pauta se paga
                directamente a las plataformas (Meta, TikTok, Google) y es adicional a la tarifa de gestión. También ofrecemos
                servicios específicos por plataforma:{" "}
                <Link to="/servicios/facebook-ads-cartagena" className="text-blue-400 hover:text-blue-300 underline">Facebook Ads</Link>,{" "}
                <Link to="/servicios/instagram-ads-cartagena" className="text-purple-400 hover:text-purple-300 underline">Instagram Ads</Link>{" "}
                y{" "}
                <Link to="/servicios/whatsapp-marketing-cartagena" className="text-green-400 hover:text-green-300 underline">WhatsApp Marketing</Link>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por Qué Hacer Publicidad en Redes Sociales con Nosotros?
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-lg text-gray-300">
                No somos una agencia genérica. Somos de Cartagena, entendemos el mercado local y diseñamos
                estrategias que funcionan para negocios reales en esta ciudad.
              </p>
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              const direction = index % 2 === 0 ? "left" : "right";
              return (
                <FadeInView key={index} direction={direction} delay={index * 0.1}>
                  <Card className="bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{beneficio.title}</h3>
                      <p className="text-gray-400 text-sm">{beneficio.description}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeInView direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Resultados Reales de Publicidad en Redes Sociales en Cartagena
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-lg text-gray-300">
                Estos son los promedios que obtenemos para negocios locales en Cartagena con estrategias
                multicanal de publicidad en redes sociales.
              </p>
            </FadeInView>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 4.5, suffix: "x", label: "Retorno promedio sobre inversión publicitaria", decimals: 1 },
              { value: 40, prefix: "-", suffix: "%", label: "Reducción en costo por lead vs una sola plataforma", decimals: 0 },
              { value: 3, suffix: "x", label: "Más puntos de contacto con el cliente", decimals: 0 },
              { value: 72, suffix: "h", label: "Para generar los primeros leads", decimals: 0 }
            ].map((metrica, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                    <AnimatedCounter value={metrica.value} prefix={metrica.prefix} suffix={metrica.suffix} duration={2} decimals={metrica.decimals} />
                  </p>
                  <p className="text-sm text-gray-400">{metrica.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView direction="up" delay={0.3}>
            <div className="max-w-3xl mx-auto mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-lg font-bold mb-4 text-center">¿Por qué la estrategia multicanal supera a una sola plataforma?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Cuando un cliente potencial ve tu anuncio en Instagram, luego te encuentra en Facebook y después
                recibe un mensaje por WhatsApp, la probabilidad de conversión aumenta significativamente. Cada plataforma
                refuerza el mensaje de la anterior. Esto se llama efecto de frecuencia multicanal y es la razón por la
                que los paquetes combinados generan un costo por lead hasta 40% menor que campañas en una sola red social.
              </p>
              <p className="text-gray-400 text-sm">
                Además, si una plataforma tiene un día de bajo rendimiento (algo normal), las otras compensan. Tu flujo
                de clientes potenciales se mantiene estable. Así funciona la{" "}
                <Link to="/servicios/publicidad-digital-cartagena" className="text-purple-400 hover:text-purple-300 underline">
                  publicidad digital profesional
                </Link>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeInView direction="up">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas Frecuentes sobre Publicidad en Redes Sociales
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-gray-300">
                  Las dudas más comunes que recibimos de negocios en Cartagena que quieren empezar con publicidad en redes sociales.
                </p>
              </FadeInView>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <FadeInView key={index} direction="up" delay={index * 0.1}>
                  <AccordionItem value={`faq-${index}`} className="bg-gray-900/50 border border-gray-800 rounded-lg px-6">
                    <AccordionTrigger className="text-left text-white hover:text-purple-400 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Listo para Llevar Tu Negocio a las Redes Sociales Correctas?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Te hacemos una evaluación gratuita de tu negocio y te recomendamos las plataformas donde tu inversión
                  generará mayor retorno. Sin compromiso, sin letra pequeña. Escríbenos y conversamos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Hablar con un Asesor por WhatsApp
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Respuesta en menos de 2 horas en horario laboral
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicidadRedesSocialesCartagena;
