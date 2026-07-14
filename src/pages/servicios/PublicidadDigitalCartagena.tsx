import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Users, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  ScaleOnHover,
  FloatingElement,
  GradientText,
} from "@/components/animations";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta hacer publicidad digital en Cartagena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La inversión varía según el tipo de negocio. Un restaurante puede empezar con $500.000 a $2.000.000 COP mensuales, servicios profesionales entre $1.000.000 y $5.000.000, y e-commerce entre $2.000.000 y $10.000.000. A esto se suma la tarifa de gestión de la agencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué plataforma funciona mejor para negocios en Cartagena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meta Ads (Facebook e Instagram) es la plataforma con mayor penetración en Cartagena. WhatsApp Marketing también es muy efectivo porque la mayoría de los cartageneros usan WhatsApp como canal principal de comunicación. La elección depende de tu audiencia y objetivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿En cuánto tiempo se ven resultados con publicidad digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los primeros leads pueden llegar en las primeras 48-72 horas de activar campañas. Resultados consistentes y optimizados toman entre 2 y 4 semanas. El escalamiento real se logra a partir del segundo mes cuando ya tenemos datos suficientes para optimizar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito tener redes sociales activas para hacer publicidad digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Necesitas al menos una página de Facebook y un perfil de Instagram para correr campañas en Meta. No necesitas publicar contenido diario, pero sí tener un perfil profesional. Nosotros te ayudamos con la configuración inicial si es necesario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre pauta digital y publicidad en redes sociales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pauta digital es el término general que incluye cualquier inversión publicitaria en internet: Google Ads, Meta Ads, TikTok Ads, etc. Publicidad en redes sociales se refiere específicamente a anuncios dentro de plataformas como Facebook, Instagram y TikTok. Ambas son formas de publicidad digital."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo hacer publicidad digital solo con WhatsApp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las campañas de clic a WhatsApp son una de las estrategias más efectivas para negocios locales en Cartagena. El cliente ve tu anuncio en Facebook o Instagram y al hacer clic llega directamente a tu WhatsApp. Esto reduce la fricción y aumenta las conversiones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé si mi inversión en publicidad está funcionando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medimos métricas reales de negocio: costo por lead (CPL), retorno sobre la inversión publicitaria (ROAS), número de conversiones y costo por adquisición de cliente (CAC). Entregamos reportes periódicos con estos datos para que sepas exactamente qué retorno genera cada peso invertido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan solo con negocios en Cartagena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Somos de Cartagena y la mayoría de nuestros clientes son locales, pero también trabajamos con negocios en otras ciudades de Colombia. Conocer el mercado cartagenero nos da una ventaja porque entendemos el comportamiento del consumidor local, la estacionalidad turística y las zonas comerciales clave."
      }
    }
  ]
};

const PublicidadDigitalCartagena = () => {
  const services = [
    {
      title: "Meta Ads",
      description: "Campañas en Facebook e Instagram con segmentación avanzada y optimización de conversiones para negocios en Cartagena.",
      link: "/servicios/meta-ads-cartagena",
      icon: Target,
    },
    {
      title: "Facebook Ads",
      description: "Anuncios en Facebook orientados a generar leads, ventas y reconocimiento de marca en el mercado cartagenero.",
      link: "/servicios/facebook-ads-cartagena",
      icon: Users,
    },
    {
      title: "Instagram Ads",
      description: "Publicidad visual en Instagram para conectar con tu audiencia a través de Stories, Reels y el feed principal.",
      link: "/servicios/instagram-ads-cartagena",
      icon: Zap,
    },
    {
      title: "Pauta Digital",
      description: "Gestión integral de inversión publicitaria en plataformas digitales con enfoque en retorno medible.",
      link: "/servicios/pauta-digital-cartagena",
      icon: BarChart3,
    },
    {
      title: "WhatsApp Marketing",
      description: "Campañas de clic a WhatsApp y automatizaciones para convertir prospectos en clientes directamente desde el chat.",
      link: "/servicios/whatsapp-marketing-cartagena",
      icon: MessageCircle,
    },
    {
      title: "Publicidad en Redes Sociales",
      description: "Estrategias publicitarias multicanal en todas las redes sociales relevantes para tu negocio.",
      link: "/servicios/publicidad-redes-sociales-cartagena",
      icon: TrendingUp,
    },
    {
      title: "Agencia de Publicidad",
      description: "Servicio completo de agencia: estrategia, creatividad, ejecución y medición de resultados publicitarios.",
      link: "/servicios/agencia-publicidad-cartagena",
      icon: Target,
    },
    {
      title: "Agencia de Marketing Digital",
      description: "Estrategias integrales de marketing digital que combinan publicidad pagada, contenido y automatización.",
      link: "/servicios/agencia-marketing-digital-cartagena",
      icon: TrendingUp,
    },
    {
      title: "Campañas Publicitarias",
      description: "Diseño, lanzamiento y optimización de campañas publicitarias completas adaptadas a tus objetivos comerciales.",
      link: "/servicios/campanas-publicitarias-cartagena",
      icon: Zap,
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Segmentación geográfica precisa",
      description: "Llegamos a clientes en zonas específicas de Cartagena: Bocagrande, Manga, Centro, Castellana, Pie de la Popa o cualquier barrio donde esté tu público.",
      stat: "Hasta 3km de radio",
    },
    {
      icon: TrendingUp,
      title: "Retorno medible desde el día 1",
      description: "Cada peso invertido se rastrea. Sabes cuántos leads, llamadas y ventas genera tu publicidad. Nada de métricas de vanidad.",
      stat: "ROAS promedio 5-10x",
    },
    {
      icon: BarChart3,
      title: "Optimización basada en datos",
      description: "Analizamos el comportamiento de tu audiencia cartagenera y ajustamos campañas en tiempo real para maximizar conversiones.",
      stat: "Ajustes cada 48-72h",
    },
    {
      icon: MessageCircle,
      title: "Leads directo a tu WhatsApp",
      description: "Los prospectos llegan a tu WhatsApp listos para comprar. Sin formularios largos, sin fricción. El canal que todos usan en Cartagena.",
      stat: "+60% tasa de respuesta",
    },
    {
      icon: Users,
      title: "Conocimiento del mercado local",
      description: "Entendemos la estacionalidad turística, las temporadas altas y el comportamiento del consumidor cartagenero.",
      stat: "5+ años en Cartagena",
    },
    {
      icon: Zap,
      title: "Velocidad de implementación",
      description: "Tu primera campaña puede estar activa en menos de 72 horas. No esperamos semanas para empezar a generar resultados.",
      stat: "Campaña activa en 72h",
    },
  ];

  const processSteps = [
    {
      phase: "Diagnóstico",
      title: "Analizamos tu negocio y competencia",
      description: "Revisamos tu situación actual: qué has hecho antes, cómo están tus redes, quién es tu cliente ideal en Cartagena y qué hace tu competencia. Evaluamos tu presencia digital completa para identificar oportunidades rápidas y brechas importantes. Este análisis incluye una auditoría de tus activos digitales existentes y una revisión del mercado cartagenero en tu nicho.",
    },
    {
      phase: "Estrategia",
      title: "Diseñamos el plan de acción",
      description: "Definimos plataformas, presupuesto, audiencias y mensajes. No es lo mismo venderle a un turista en Bocagrande que a un residente de Castellana. Creamos una estrategia personalizada que considera la geografía, la estacionalidad y los hábitos de consumo de tu audiencia cartagenera. Seleccionamos los formatos publicitarios más efectivos para tu tipo de negocio.",
    },
    {
      phase: "Ejecución",
      title: "Lanzamos las campañas",
      description: "Configuramos las campañas con tracking completo: píxeles, eventos de conversión, audiencias personalizadas y catálogos si aplica. Creamos múltiples variaciones de anuncios para probar qué mensajes y creativos resuenan más con tu audiencia. Cada campaña se lanza con pruebas A/B desde el primer día.",
    },
    {
      phase: "Optimización",
      title: "Mejoramos continuamente",
      description: "Cada 48-72 horas revisamos el rendimiento. Pausamos lo que no funciona, escalamos lo que sí y probamos nuevas variaciones. Ajustamos segmentación, pujas, horarios y creativos basándonos en datos reales, no en suposiciones. Este ciclo constante de optimización es lo que diferencia una campaña mediocre de una rentable.",
    },
    {
      phase: "Escalamiento",
      title: "Crecemos tu inversión de forma rentable",
      description: "Cuando encontramos la combinación ganadora, aumentamos el presupuesto de forma controlada manteniendo el costo por resultado. Expandimos a nuevas audiencias, nuevos formatos y nuevas plataformas. El objetivo es que cada mes vendas más que el anterior sin que el costo de adquisición se dispare.",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto cuesta hacer publicidad digital en Cartagena?",
      answer: "La inversión varía según el tipo de negocio. Un restaurante puede empezar con $500.000 a $2.000.000 COP mensuales, servicios profesionales entre $1.000.000 y $5.000.000, y e-commerce entre $2.000.000 y $10.000.000. A esto se suma la tarifa de gestión de la agencia. En la consulta inicial te damos un rango recomendado basado en tus objetivos.",
    },
    {
      question: "¿Qué plataforma funciona mejor para negocios en Cartagena?",
      answer: "Meta Ads (Facebook e Instagram) es la plataforma con mayor penetración en Cartagena. WhatsApp Marketing también es muy efectivo porque la mayoría de los cartageneros usan WhatsApp como canal principal de comunicación. Google Ads funciona bien para negocios que la gente busca activamente (dentistas, abogados, talleres). La elección depende de tu audiencia y objetivos.",
    },
    {
      question: "¿En cuánto tiempo se ven resultados con publicidad digital?",
      answer: "Los primeros leads pueden llegar en las primeras 48-72 horas de activar campañas. Resultados consistentes y optimizados toman entre 2 y 4 semanas. El escalamiento real se logra a partir del segundo mes cuando ya tenemos datos suficientes para optimizar. No prometemos resultados mágicos de la noche a la mañana, pero sí un proceso medible desde el primer día.",
    },
    {
      question: "¿Necesito tener redes sociales activas para hacer publicidad digital?",
      answer: "Necesitas al menos una página de Facebook y un perfil de Instagram para correr campañas en Meta. No necesitas publicar contenido diario, pero sí tener un perfil profesional con información actualizada. Nosotros te ayudamos con la configuración inicial si es necesario y te orientamos sobre qué contenido orgánico complementa las campañas pagadas.",
    },
    {
      question: "¿Qué diferencia hay entre pauta digital y publicidad en redes sociales?",
      answer: "Pauta digital es el término general que incluye cualquier inversión publicitaria en internet: Google Ads, Meta Ads, TikTok Ads, YouTube Ads, etc. Publicidad en redes sociales se refiere específicamente a anuncios dentro de plataformas sociales como Facebook, Instagram y TikTok. Ambas son formas de publicidad digital y nosotros gestionamos ambas.",
    },
    {
      question: "¿Puedo hacer publicidad digital solo con WhatsApp?",
      answer: "Sí. Las campañas de clic a WhatsApp son una de las estrategias más efectivas para negocios locales en Cartagena. El cliente ve tu anuncio en Facebook o Instagram y al hacer clic llega directamente a tu WhatsApp. Esto reduce la fricción y aumenta las conversiones porque el cliente puede preguntar, resolver dudas y comprar en el mismo canal.",
    },
    {
      question: "¿Cómo sé si mi inversión en publicidad está funcionando?",
      answer: "Medimos métricas reales de negocio: costo por lead (CPL), retorno sobre la inversión publicitaria (ROAS), número de conversiones y costo por adquisición de cliente (CAC). Entregamos reportes periódicos con estos datos para que sepas exactamente qué retorno genera cada peso invertido. Si no está funcionando, lo vas a saber y nosotros también.",
    },
    {
      question: "¿Trabajan solo con negocios en Cartagena?",
      answer: "Somos de Cartagena y la mayoría de nuestros clientes son locales, pero también trabajamos con negocios en otras ciudades de Colombia. Conocer el mercado cartagenero nos da una ventaja porque entendemos el comportamiento del consumidor local, la estacionalidad turística y las zonas comerciales clave de la ciudad.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Publicidad Digital en Cartagena"
        description="Servicio de publicidad digital en Cartagena. Expertos en Meta Ads, Facebook, Instagram y WhatsApp Marketing. Generamos clientes reales para tu negocio."
        slug="/servicios/publicidad-digital-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.15), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 7%))' }}
          />

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <FadeInView direction="up" delay={0}>
                <FloatingElement amplitude={6} duration={4}>
                  <div className="inline-block">
                    <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider">
                      Publicidad Digital
                    </span>
                  </div>
                </FloatingElement>
              </FadeInView>

              <FadeInView direction="up" delay={0.15}>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <GradientText animate className="block">Publicidad Digital en Cartagena:</GradientText>
                  <span className="text-2xl lg:text-4xl block mt-2">Más Clientes para Tu Negocio</span>
                </h1>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Cartagena tiene más de 1 millón de habitantes y una economía que mezcla turismo, comercio local y servicios profesionales. Desde restaurantes en Bocagrande hasta consultorios médicos en Manga, tiendas en el Centro Histórico y negocios en Castellana o Pie de la Popa, todos compiten por la atención del mismo público. La diferencia entre los negocios que crecen y los que se estancan está en cómo llegan a sus clientes. La publicidad digital te permite aparecer frente a las personas correctas, en el momento correcto, con un mensaje que los motive a contactarte. En DT Growth Partners nos especializamos en convertir inversión publicitaria en clientes reales para negocios cartageneros. No vendemos "likes" ni "alcance". Vendemos resultados que se reflejan en tu facturación.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button
                    size="lg"
                    className="btn-primary group text-lg px-8 py-4 w-full sm:w-auto"
                    onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20información%20sobre%20publicidad%20digital%20en%20Cartagena', '_blank')}
                  >
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ¿Qué es la publicidad digital? */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-6">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                  ¿Qué es la <span className="gradient-text">publicidad digital</span>?
                </h2>
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  La publicidad digital es cualquier forma de promoción pagada que se ejecuta en plataformas de internet. A diferencia de un aviso en el periódico o una cuña radial, la publicidad digital te permite elegir exactamente quién ve tu anuncio, medir cuántas personas interactuaron con él y saber cuánto te costó cada cliente nuevo.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Para un negocio en Cartagena, esto cambia las reglas del juego. Ya no necesitas un presupuesto enorme para competir. Con la estrategia correcta, una inversión de $500.000 COP mensuales puede generar docenas de contactos calificados para tu negocio.
                </p>
              </FadeInView>

              <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 pt-8">
                <StaggerItem>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-3">
                        <h3 className="text-xl font-semibold text-primary">Meta Ads (Facebook + Instagram)</h3>
                        <p className="text-muted-foreground text-sm">
                          La plataforma más usada en Colombia. Permite segmentar por ubicación, intereses, edad y comportamiento. Ideal para negocios locales, restaurantes, servicios y e-commerce. Incluye formatos como Stories, Reels, carrusel y anuncios de clic a WhatsApp.
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-3">
                        <h3 className="text-xl font-semibold text-primary">Google Ads</h3>
                        <p className="text-muted-foreground text-sm">
                          Apareces cuando alguien busca tu servicio en Google. Perfecto para captar demanda existente: "dentista en Cartagena", "abogado laboral Cartagena", "taller mecánico cerca". Funciona muy bien para servicios profesionales y negocios que la gente busca activamente.
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-3">
                        <h3 className="text-xl font-semibold text-primary">TikTok Ads</h3>
                        <p className="text-muted-foreground text-sm">
                          Crecimiento acelerado en Colombia, especialmente en audiencias de 18 a 40 años. Los costos por impresión son más bajos que en Meta. Ideal para negocios con productos visuales, moda, gastronomía y entretenimiento. El formato de video corto genera alta conexión.
                        </p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* ¿Cómo funciona? - Proceso */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  ¿Cómo funciona la publicidad digital para <span className="gradient-text">negocios en Cartagena</span>?
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nuestro proceso está diseñado para que cada peso invertido trabaje a favor de tu negocio. Estas son las cinco etapas que seguimos con cada cliente.
                </p>
              </FadeInView>
            </div>

            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <StaggerItem key={step.phase}>
                  <ScaleOnHover scale={1.03} lift={4} glow>
                    <Card
                      className="card-hover bg-card border-border/50 relative group h-full"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300">
                            {`0${index + 1}`}
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
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-black"></div>
        </section>

        {/* Nuestros servicios de publicidad digital */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Nuestros servicios de <span className="gradient-text">publicidad digital</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Cada servicio está especializado en una plataforma o estrategia específica. Haz clic en el que más se ajuste a tu negocio para conocer los detalles.
                </p>
              </FadeInView>
            </div>

            <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.title}>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Link to={service.link} className="block group">
                        <Card
                          className="card-hover bg-background/50 border-border/50 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/50"
                        >
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <div className="flex items-center text-primary text-sm font-medium">
                              Conocer más
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </ScaleOnHover>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* Beneficios */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Beneficios de hacer publicidad digital <span className="gradient-text">con nosotros</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  No somos la única agencia en Cartagena, pero sí una que se mide por resultados de negocio, no por métricas de vanidad.
                </p>
              </FadeInView>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const direction = index % 2 === 0 ? "left" as const : "right" as const;
                return (
                  <FadeInView key={benefit.title} direction={direction} delay={index * 0.1}>
                    <ScaleOnHover scale={1.03} lift={5} glow>
                      <Card
                        className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
                      >
                        <CardContent className="p-8 space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {benefit.stat}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resultados reales */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Resultados <span className="gradient-text">reales</span> de nuestros clientes
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Estos son datos de campañas reales que hemos gestionado para negocios en Cartagena. Los nombres se mantienen en reserva por acuerdo de confidencialidad.
                </p>
              </FadeInView>
            </div>

            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerItem>
                <ScaleOnHover scale={1.03} lift={5} glow>
                  <Card className="bg-background/50 border-border/50 backdrop-blur-sm h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        Restaurante en Bocagrande
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Inversión mensual</span>
                          <span className="font-semibold text-primary">$1.200.000 COP</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Reducción CPL</span>
                          <span className="font-semibold text-primary">-<AnimatedCounter value={65} suffix="%" /></span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Leads mensuales</span>
                          <span className="font-semibold text-primary">+<AnimatedCounter value={180} /></span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">Incremento en ventas</span>
                          <span className="font-semibold text-primary">+<AnimatedCounter value={42} suffix="%" /></span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Campañas de clic a WhatsApp + remarketing. El restaurante pasó de depender de temporada turística a tener flujo constante de clientes locales.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.03} lift={5} glow>
                  <Card className="bg-background/50 border-border/50 backdrop-blur-sm h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        Clínica de estética
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Inversión mensual</span>
                          <span className="font-semibold text-primary">$3.500.000 COP</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">ROAS</span>
                          <span className="font-semibold text-primary"><AnimatedCounter value={8.5} suffix="x" decimals={1} /></span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Citas agendadas/mes</span>
                          <span className="font-semibold text-primary">+<AnimatedCounter value={95} /></span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">Costo por cita</span>
                          <span className="font-semibold text-primary">$36.800 COP</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Combinación de Instagram Ads con landing page optimizada. Cada $36.800 invertidos generaban una cita con valor promedio de $312.000.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.03} lift={5} glow>
                  <Card className="bg-background/50 border-border/50 backdrop-blur-sm h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        Tienda de ropa online
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Inversión mensual</span>
                          <span className="font-semibold text-primary">$5.000.000 COP</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">ROAS</span>
                          <span className="font-semibold text-primary"><AnimatedCounter value={6.2} suffix="x" decimals={1} /></span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">Ventas mensuales</span>
                          <span className="font-semibold text-primary">$31M COP</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">Crecimiento vs mes anterior</span>
                          <span className="font-semibold text-primary">+<AnimatedCounter value={92} suffix="%" /></span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Escalamiento progresivo con Meta Ads: catálogo dinámico + remarketing + lookalike audiences de compradores. El negocio pasó de vender $16M a $31M en tres meses.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            </StaggerContainer>

            <FadeInView direction="up" delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                {[
                  { value: 65, suffix: "%", label: "Reducción promedio en costo por lead" },
                  { value: 8.5, suffix: "x", decimals: 1, label: "Mejor ROAS alcanzado" },
                  { value: 1000, prefix: "+", label: "Campañas gestionadas" },
                  { value: 72, suffix: "h", label: "Tiempo para primera campaña activa" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center space-y-2"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* ¿Cuánto cuesta? */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  ¿Cuánto cuesta la publicidad digital <span className="gradient-text">en Cartagena</span>?
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  La inversión depende de tu tipo de negocio, objetivos y competencia en tu sector. Estos son rangos referenciales basados en nuestra experiencia con negocios cartageneros.
                </p>
              </FadeInView>
            </div>

            <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <ScaleOnHover scale={1.03} lift={5} glow>
                  <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Restaurantes y comercio local</h3>
                      <div className="text-3xl font-bold text-primary">$500K - $2M</div>
                      <div className="text-sm text-muted-foreground">COP / mes en inversión publicitaria</div>
                      <ul className="space-y-2 pt-4">
                        {[
                          "Campañas de clic a WhatsApp",
                          "Alcance geográfico por barrio",
                          "Promoción de ofertas y menú",
                          "Remarketing a visitantes",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <FloatingElement amplitude={4} duration={5}>
                  <ScaleOnHover scale={1.04} lift={8} glow>
                    <Card className="bg-card border-border/50 ring-2 ring-primary shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                          Más común
                        </span>
                      </div>
                      <CardContent className="p-8 space-y-4 pt-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Servicios profesionales</h3>
                        <div className="text-3xl font-bold text-primary">$1M - $5M</div>
                        <div className="text-sm text-muted-foreground">COP / mes en inversión publicitaria</div>
                        <ul className="space-y-2 pt-4">
                          {[
                            "Generación de leads calificados",
                            "Campañas en Meta + Google Ads",
                            "Embudos de conversión optimizados",
                            "Seguimiento y nurturing de leads",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FloatingElement>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.03} lift={5} glow>
                  <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">E-commerce</h3>
                      <div className="text-3xl font-bold text-primary">$2M - $10M</div>
                      <div className="text-sm text-muted-foreground">COP / mes en inversión publicitaria</div>
                      <ul className="space-y-2 pt-4">
                        {[
                          "Catálogos dinámicos de productos",
                          "Remarketing avanzado",
                          "Campañas de conversión y ROAS",
                          "Escalamiento controlado mensual",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            </StaggerContainer>

            <FadeInView direction="up" delay={0.3}>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-sm">
                Estos montos corresponden a la inversión publicitaria (lo que pagas a Meta, Google, etc.). La tarifa de gestión de DT Growth Partners se cotiza aparte y varía según el volumen de inversión y la complejidad de las campañas. Contáctanos para una cotización personalizada.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Preguntas <span className="gradient-text">frecuentes</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Las dudas más comunes que recibimos de dueños de negocio en Cartagena sobre publicidad digital.
                </p>
              </FadeInView>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeInView key={index} direction="up" delay={index * 0.08}>
                    <AccordionItem
                      value={`faq-${index}`}
                      className="bg-background/50 border border-border/50 rounded-lg px-6 backdrop-blur-sm"
                    >
                      <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </FadeInView>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-12 lg:p-16"
                whileInView={{ scale: [0.97, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="text-center space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                      Empieza a generar clientes <GradientText animate>hoy</GradientText>
                    </h2>

                    <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                      Tu competencia ya está invirtiendo en publicidad digital. Cada día que pasa sin una estrategia efectiva es un día en el que tus clientes potenciales están eligiendo a otro negocio. Hablemos y definamos juntos el plan que mejor se ajuste a tu presupuesto y objetivos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="btn-primary group text-white text-lg px-8 py-4"
                        onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20empezar%20con%20publicidad%20digital%20para%20mi%20negocio%20en%20Cartagena', '_blank')}
                      >
                        <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Hablemos por WhatsApp
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Respuesta en menos de 2 horas en horario laboral. Sin compromiso.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PublicidadDigitalCartagena;
