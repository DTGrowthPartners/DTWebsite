import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Users, Zap, CheckCircle, Bot, Phone, Shield, DollarSign } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Qué es WhatsApp Marketing y cómo funciona?",
    answer: "WhatsApp Marketing es una estrategia que utiliza WhatsApp como canal principal de comunicación comercial. En la práctica, combinamos campañas de Meta Ads con objetivo de 'Mensajes' para dirigir tráfico directamente a una conversación de WhatsApp con tu negocio. Cuando una persona hace clic en tu anuncio, se abre WhatsApp con un mensaje predefinido y tu equipo (o un chatbot) responde en tiempo real. Esto elimina fricciones como formularios web, páginas de carga lenta y correos que nadie lee. En Colombia, donde el 97% de los usuarios de smartphone tienen WhatsApp, este canal es 20 a 50 veces más efectivo que dirigir tráfico a un sitio web."
  },
  {
    question: "¿Cuánto cuesta una campaña de WhatsApp Marketing en Cartagena?",
    answer: "El costo se divide en dos partes: inversión en pauta publicitaria (Meta Ads) y gestión de la estrategia. En pauta, recomendamos un mínimo de $500.000 COP mensuales para negocios pequeños y desde $1.500.000 COP para obtener resultados escalables. El costo por conversación iniciada oscila entre $2.000 y $5.000 COP dependiendo del sector y la competencia. La gestión incluye diseño de campañas, configuración de chatbots, seguimiento de leads y optimización continua. Ofrecemos planes desde $800.000 COP mensuales de gestión."
  },
  {
    question: "¿Cuántos mensajes puedo esperar al mes con WhatsApp Ads?",
    answer: "Depende de tu inversión en pauta y tu sector. Como referencia: con una inversión de $1.000.000 COP mensuales en Meta Ads con objetivo de mensajes, nuestros clientes en Cartagena reciben entre 200 y 500 conversaciones iniciadas al mes. Con $3.000.000 COP, ese número sube a 600-1.500 conversaciones. La clave está en la calidad de la segmentación y el copy del anuncio, que es donde aportamos nuestra experiencia de más de $500M COP gestionados en pauta digital."
  },
  {
    question: "¿Necesito WhatsApp Business o WhatsApp Business API?",
    answer: "Para empezar, WhatsApp Business (la app gratuita) es suficiente. Te permite crear un perfil de empresa, catálogo de productos, respuestas rápidas y etiquetas para organizar contactos. Si tu negocio recibe más de 50 mensajes diarios o necesitas múltiples agentes respondiendo, recomendamos migrar a WhatsApp Business API, que permite integración con CRMs, chatbots avanzados, múltiples usuarios simultáneos y automatización completa del embudo de ventas."
  },
  {
    question: "¿Los chatbots de WhatsApp reemplazan a un vendedor?",
    answer: "No reemplazan, sino que complementan. El chatbot se encarga de las tareas repetitivas: saludo inicial, calificación del lead (qué servicio busca, presupuesto, ubicación), respuestas a preguntas frecuentes y agendamiento de citas. Cuando el lead está calificado, el chatbot transfiere la conversación a un vendedor humano con toda la información recopilada. Esto permite que tu equipo de ventas dedique su tiempo a cerrar negocios en lugar de responder '¿Cuánto cuesta?' cien veces al día."
  },
  {
    question: "¿Por qué WhatsApp Ads es mejor que dirigir tráfico a mi sitio web?",
    answer: "En Colombia, el 85% del tráfico web es móvil. Las páginas web cargan lento en redes 4G inestables, los formularios son incómodos en pantallas pequeñas y los correos de seguimiento tienen tasas de apertura del 15-20%. WhatsApp elimina todas estas fricciones: la app ya está instalada, abre en 1 segundo, el usuario escribe con un teclado que conoce y la tasa de lectura es del 98%. Nuestros datos muestran que el costo por resultado (CPR) con objetivo de mensajes es entre 20 y 50 veces menor que con objetivo de conversiones web."
  },
  {
    question: "¿Puedo enviar mensajes masivos por WhatsApp sin que me bloqueen?",
    answer: "Con WhatsApp Business API puedes enviar mensajes masivos de forma legítima usando plantillas aprobadas por Meta. Esto es diferente a usar herramientas no oficiales que violan los términos de servicio y resultan en bloqueo permanente del número. La API permite enviar hasta miles de mensajes por día con plantillas de texto, imágenes, videos y botones interactivos. La clave es mantener una tasa de calidad alta: si muchos usuarios te reportan como spam, Meta limita tu capacidad de envío."
  },
  {
    question: "¿En cuánto tiempo veo resultados con WhatsApp Marketing?",
    answer: "Los primeros mensajes llegan desde el día 1 de campaña. En la primera semana puedes recibir entre 30 y 100 conversaciones dependiendo de tu inversión. Sin embargo, los resultados óptimos se alcanzan entre la semana 2 y 4, cuando el algoritmo de Meta ya tiene datos suficientes para optimizar la entrega y nosotros hemos ajustado segmentaciones, copies y flujos de chatbot. Los clientes que mantienen campañas activas por 3 meses o más ven reducciones del 40-60% en el costo por conversación."
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

const benefits = [
  {
    icon: MessageCircle,
    title: "98% tasa de apertura",
    description: "Los mensajes de WhatsApp tienen una tasa de apertura del 98%, comparado con el 20% del email marketing. Tu mensaje no solo llega, sino que se lee. En Cartagena, donde la cultura de comunicación gira alrededor de WhatsApp, esto significa que tu oferta llega directamente al bolsillo de tu cliente potencial."
  },
  {
    icon: DollarSign,
    title: "CPR 20-50x menor que web",
    description: "El costo por resultado con campañas de mensajes de WhatsApp oscila entre $2.000 y $5.000 COP, mientras que las conversiones web cuestan entre $15.000 y $50.000 COP. Esto significa que con el mismo presupuesto publicitario generas entre 20 y 50 veces más contactos por WhatsApp que por formularios web."
  },
  {
    icon: Zap,
    title: "Respuesta instantánea 24/7",
    description: "Con chatbots integrados, tu negocio responde en menos de 5 segundos, las 24 horas del día, los 7 días de la semana. Esto es crítico: el 78% de los consumidores compran al primero que responde. Si un lead te escribe a las 11 PM un domingo, tu chatbot lo atiende, califica y agenda una cita para el lunes."
  },
  {
    icon: Users,
    title: "Leads precalificados",
    description: "A diferencia de un formulario web donde solo recibes un nombre y un correo, en WhatsApp el chatbot puede hacer preguntas de calificación: qué servicio busca, cuál es su presupuesto, cuándo necesita el servicio. Tu equipo de ventas recibe leads con contexto completo, listos para cerrar."
  },
  {
    icon: Target,
    title: "Segmentación local en Cartagena",
    description: "Combinamos la segmentación hiperlocalizada de Meta Ads (barrios de Cartagena, intereses, comportamiento) con la inmediatez de WhatsApp. Puedes mostrar un anuncio solo a personas en Bocagrande interesadas en estética y recibir su mensaje de WhatsApp 3 segundos después de que hagan clic."
  },
  {
    icon: TrendingUp,
    title: "Trazabilidad completa",
    description: "Cada conversación se rastrea desde el clic en el anuncio hasta la venta. Sabes exactamente qué campaña, qué anuncio y qué segmentación generó cada lead. Esto permite optimizar constantemente y escalar lo que funciona, eliminando la incertidumbre de la publicidad tradicional."
  }
];

const WhatsAppMarketingCartagena = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="WhatsApp Marketing en Cartagena"
        description="WhatsApp Marketing en Cartagena. Campañas de Meta Ads con objetivo WhatsApp: 20-50x mejor CPR vs web. Chatbots, automatización y seguimiento de leads."
        slug="/servicios/whatsapp-marketing-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/15" />
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 7%))' }}
          />

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <FadeInView direction="down" delay={0}>
                <FloatingElement amplitude={6} duration={3}>
                  <div className="inline-block">
                    <span className="px-6 py-2 bg-[#25D366] text-white rounded-full text-sm font-semibold uppercase tracking-wider">
                      Servicio exclusivo en Cartagena
                    </span>
                  </div>
                </FloatingElement>
              </FadeInView>

              <FadeInView direction="up" delay={0.15}>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <GradientText animate className="block">WhatsApp Marketing en Cartagena:</GradientText>
                  <span className="text-2xl lg:text-4xl block mt-2">El Canal #1 en Colombia</span>
                </h1>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-normal">
                  Nadie en Cartagena ofrece una estrategia integral de WhatsApp Marketing como la nuestra. Campañas de Meta Ads con objetivo de mensajes, chatbots de calificación, automatización de seguimiento y cierre por WhatsApp. <strong className="text-foreground">Costo por resultado 20-50x menor que campañas web</strong>. Esto no es enviar mensajes masivos: es un sistema completo de generación y conversión de leads.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button
                    size="lg"
                    className="group text-lg px-8 py-4 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white"
                    onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20información%20sobre%20WhatsApp%20Marketing%20para%20mi%20negocio%20en%20Cartagena', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escríbenos por WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group text-lg px-8 py-4 w-full sm:w-auto border-2 bg-background hover:bg-background hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300"
                    style={{ borderColor: '#25D366', color: '#25D366' }}
                    onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver cómo funciona
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.6}>
                <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    97% penetración en Colombia
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    CPR desde $2.000 COP
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    Chatbots + automatización
                  </span>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ¿Por qué WhatsApp? */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                  ¿Por qué <span className="gradient-text">WhatsApp</span> es el canal más poderoso en Colombia?
                </h2>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.1}>
                  <p>
                    Colombia es uno de los mercados con mayor penetración de WhatsApp en el mundo. El <strong className="text-foreground">97% de los usuarios de smartphone en Colombia tienen WhatsApp instalado</strong>. No es una red social más: es LA herramienta de comunicación del país. Los colombianos abren WhatsApp en promedio <strong className="text-foreground">23 veces al día</strong>. Piden domicilios por WhatsApp, agendan citas por WhatsApp, negocian por WhatsApp y compran por WhatsApp.
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    En Cartagena, esta realidad es todavía más marcada. La cultura comercial de la Costa Caribe es conversacional. Las personas quieren hablar con alguien antes de comprar. Quieren hacer preguntas, pedir fotos, negociar precios. Un formulario web frío no funciona igual que una conversación directa donde el cliente siente que lo atienden de forma personal e inmediata.
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 my-10">
                  <StaggerItem>
                    <ScaleOnHover scale={1.05} lift={8} glow>
                      <Card className="bg-background/50 border-border/50 text-center">
                        <CardContent className="p-6 space-y-3">
                          <div className="text-5xl font-bold text-[#25D366]">
                            <AnimatedCounter value={97} suffix="%" duration={2} />
                          </div>
                          <p className="text-sm text-muted-foreground">de usuarios de smartphone en Colombia tienen WhatsApp</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                  <StaggerItem>
                    <ScaleOnHover scale={1.05} lift={8} glow>
                      <Card className="bg-background/50 border-border/50 text-center">
                        <CardContent className="p-6 space-y-3">
                          <div className="text-5xl font-bold text-[#25D366]">
                            <AnimatedCounter value={98} suffix="%" duration={2} />
                          </div>
                          <p className="text-sm text-muted-foreground">tasa de apertura de mensajes vs 20% del email</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                  <StaggerItem>
                    <ScaleOnHover scale={1.05} lift={8} glow>
                      <Card className="bg-background/50 border-border/50 text-center">
                        <CardContent className="p-6 space-y-3">
                          <div className="text-5xl font-bold text-[#25D366]">
                            <AnimatedCounter value={23} suffix="x" duration={2} />
                          </div>
                          <p className="text-sm text-muted-foreground">veces al día el colombiano promedio abre WhatsApp</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                </StaggerContainer>

                <FadeInView direction="up" delay={0.3}>
                  <p>
                    Mientras tus competidores en Cartagena siguen invirtiendo en campañas que dirigen tráfico a sitios web lentos con formularios que nadie completa, tú puedes estar recibiendo mensajes directos de personas interesadas en tu servicio. La diferencia no es marginal: es de <strong className="text-foreground">20 a 50 veces mejor rendimiento</strong> en costo por resultado.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
        </section>

        {/* Campañas de Meta Ads → WhatsApp */}
        <section id="como-funciona" className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  Campañas de <span className="gradient-text">Meta Ads con Objetivo WhatsApp</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-10 max-w-3xl mx-auto">
                  Esta es la estrategia central y lo que nos diferencia de cualquier otra agencia en Cartagena. No es publicidad convencional: es un sistema de generación de conversaciones comerciales directas.
                </p>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.15}>
                  <p>
                    Meta Ads ofrece un objetivo de campaña llamado <strong className="text-foreground">"Mensajes"</strong>. Cuando seleccionas este objetivo, el algoritmo de Meta optimiza la entrega de tus anuncios para encontrar personas con alta probabilidad de iniciar una conversación por WhatsApp. El anuncio aparece en Facebook, Instagram o Audience Network con un botón que dice "Enviar mensaje por WhatsApp". Cuando la persona hace clic, se abre WhatsApp con un mensaje predefinido y tu negocio recibe la conversación de forma inmediata.
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    La diferencia con campañas convencionales es abismal. Cuando diriges tráfico a un sitio web, necesitas que la persona haga clic en el anuncio, espere a que cargue la página (3-8 segundos en red móvil colombiana), lea el contenido, encuentre el formulario, lo llene y lo envíe. Cada paso del proceso pierde entre el 50% y el 80% de las personas. Con WhatsApp, la persona hace clic y está hablando contigo. Un solo paso.
                  </p>
                </FadeInView>

                {/* CPR Comparison */}
                <div className="my-10">
                  <FadeInView direction="up">
                    <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Comparación de costo por resultado (CPR)</h3>
                  </FadeInView>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FadeInView direction="left" delay={0.1}>
                      <Card className="bg-red-950/20 border-red-500/30">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                              <BarChart3 className="w-5 h-5 text-red-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-red-400">Conversiones Web</h4>
                          </div>
                          <div className="text-4xl font-bold text-red-400">$15.000 - $50.000</div>
                          <p className="text-sm text-red-300/70">COP por conversión (formulario web)</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✕</span>
                              <span>Página debe cargar (3-8 seg en móvil)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✕</span>
                              <span>Usuario llena formulario (50-80% abandono)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✕</span>
                              <span>Email de seguimiento (20% tasa apertura)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">✕</span>
                              <span>Tiempo de respuesta: horas o días</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </FadeInView>

                    <FadeInView direction="right" delay={0.2}>
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(37, 211, 102, 0)",
                            "0 0 25px rgba(37, 211, 102, 0.3)",
                            "0 0 0px rgba(37, 211, 102, 0)",
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-lg"
                      >
                        <Card className="bg-green-950/20 border-[#25D366]/30 ring-2 ring-[#25D366]/20">
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                              </div>
                              <h4 className="text-lg font-semibold text-[#25D366]">Mensajes WhatsApp</h4>
                            </div>
                            <div className="text-4xl font-bold text-[#25D366]">$2.000 - $5.000</div>
                            <p className="text-sm text-green-300/70">COP por conversación iniciada</p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                                <span>WhatsApp abre en 1 segundo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                                <span>Un clic = conversación directa</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                                <span>98% tasa de lectura del mensaje</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                                <span>Respuesta inmediata con chatbot</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </FadeInView>
                  </div>

                  <FadeInView direction="up" delay={0.3}>
                    <div className="mt-6 text-center">
                      <Card className="bg-background/50 border-[#25D366]/30 inline-block">
                        <CardContent className="p-4 px-8">
                          <p className="text-lg font-semibold text-foreground">
                            Resultado: <span className="text-[#25D366]">20-50x mejor CPR</span> con WhatsApp vs web
                          </p>
                          <p className="text-sm text-muted-foreground">Con el mismo presupuesto, generas hasta 50 veces más contactos</p>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeInView>
                </div>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    Estos números no son teóricos. Están basados en más de <strong className="text-foreground">$500 millones de pesos gestionados en pauta digital</strong> para negocios en Cartagena y la región Caribe. Hemos probado ambos enfoques lado a lado con el mismo presupuesto, el mismo público y el mismo negocio. WhatsApp gana de forma consistente en costo por lead, velocidad de respuesta y tasa de cierre.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
        </section>

        {/* Automatización con Chatbots */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  <span className="gradient-text">Chatbots de WhatsApp</span> que Califican y Venden
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-10 max-w-3xl mx-auto">
                  Generar conversaciones es solo el primer paso. El chatbot convierte esas conversaciones en citas, cotizaciones y ventas de forma automática.
                </p>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.15}>
                  <p>
                    El problema de muchos negocios en Cartagena no es la falta de leads, sino la incapacidad de atenderlos todos a tiempo. Un restaurante recibe 100 mensajes preguntando por el menú y la reserva. Una clínica estética recibe 50 mensajes preguntando precios de procedimientos. Un taller mecánico recibe 30 mensajes pidiendo cotizaciones. Si dependes de una persona para responder cada mensaje, pierdes el 60-70% de los leads porque no contestas a tiempo.
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.2} className="grid md:grid-cols-2 gap-6 my-10">
                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Bot className="w-8 h-8 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Chatbot de calificación</h3>
                          </div>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Saludo personalizado con nombre del lead</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Preguntas de calificación: servicio, presupuesto, urgencia</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Envío automático de catálogo, precios o portafolio</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Agendamiento de citas con calendario integrado</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Transferencia a vendedor humano cuando el lead está calificado</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Zap className="w-8 h-8 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Automatización completa</h3>
                          </div>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Respuesta en menos de 5 segundos, 24/7</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Integración con CRM (HubSpot, Zoho, Google Sheets)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Etiquetado automático por tipo de servicio</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Notificaciones al equipo de ventas por lead caliente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Reportes diarios de conversaciones y conversiones</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                </StaggerContainer>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    El chatbot no es un menú robótico frustrante. Diseñamos flujos conversacionales naturales que se sienten como hablar con una persona. El lead recibe respuestas contextuales, puede hacer preguntas abiertas y el chatbot adapta su flujo según las respuestas. Si el chatbot no puede resolver algo, transfiere la conversación a un humano con todo el historial de la conversación.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
        </section>

        {/* Seguimiento de Leads */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  Seguimiento de <span className="gradient-text">Leads por WhatsApp</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-10 max-w-3xl mx-auto">
                  El 80% de las ventas se cierran entre el 5to y 12vo contacto. Si no haces seguimiento, estás dejando dinero sobre la mesa.
                </p>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.15}>
                  <p>
                    Generar el lead es solo el inicio. La mayoría de los negocios en Cartagena pierden ventas porque no hacen seguimiento sistemático. Un prospecto pregunta por precios hoy, pero no compra inmediatamente. Tres días después ya olvidó tu negocio porque nadie le escribió. Tu competencia, que sí hizo seguimiento, se quedó con la venta.
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    Nuestro sistema de WhatsApp Marketing incluye <strong className="text-foreground">secuencias automatizadas de seguimiento</strong> que se activan según el comportamiento del lead. Si la persona preguntó por un servicio pero no agendó cita, recibe un mensaje de seguimiento a las 24 horas. Si agendó pero no asistió, recibe un recordatorio. Si asistió pero no compró, recibe una oferta de cierre. Todo esto se ejecuta de forma automática a través de WhatsApp.
                  </p>
                </FadeInView>

                <div className="my-10 space-y-4">
                  <FadeInView direction="up">
                    <h3 className="text-xl font-bold text-foreground">Pipeline de seguimiento típico</h3>
                  </FadeInView>
                  <div className="grid gap-4">
                    {[
                      { step: "Hora 0", action: "Lead inicia conversación. Chatbot califica y responde.", color: "text-[#25D366]" },
                      { step: "Hora 1", action: "Si no agendó: mensaje con testimonios y casos de éxito.", color: "text-[#25D366]" },
                      { step: "24 horas", action: "Seguimiento con oferta especial por tiempo limitado.", color: "text-yellow-400" },
                      { step: "72 horas", action: "Mensaje de valor: contenido educativo relacionado con su interés.", color: "text-yellow-400" },
                      { step: "7 días", action: "Recordatorio final con incentivo de cierre.", color: "text-orange-400" },
                      { step: "14 días", action: "Re-engagement: nueva oferta o servicio complementario.", color: "text-orange-400" },
                    ].map((item, index) => (
                      <FadeInView key={index} direction="up" delay={0.1 + index * 0.1}>
                        <div className="flex items-start gap-4 bg-background/30 p-4 rounded-lg border border-border/30">
                          <motion.div
                            className={`font-bold text-sm min-w-[80px] ${item.color} flex items-center gap-2`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 + index * 0.1 }}
                          >
                            <motion.span
                              className="inline-block w-2.5 h-2.5 rounded-full bg-current flex-shrink-0"
                              animate={{ scale: [1, 1.4, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            />
                            {item.step}
                          </motion.div>
                          <div className="text-sm text-muted-foreground">{item.action}</div>
                        </div>
                      </FadeInView>
                    ))}
                  </div>
                </div>

                <FadeInView direction="up" delay={0.3}>
                  <p>
                    Cada mensaje de seguimiento se personaliza con el nombre del lead, el servicio por el que preguntó y el contexto de la conversación previa. No son mensajes genéricos: son seguimientos inteligentes que generan confianza y acercan al cierre. Todo se gestiona desde una plataforma centralizada donde puedes ver el estado de cada lead en tiempo real.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Business API */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  <span className="gradient-text">WhatsApp Business API</span>: Nivel Empresarial
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-10 max-w-3xl mx-auto">
                  Para negocios que reciben más de 50 conversaciones diarias o necesitan funcionalidades avanzadas de automatización y escalabilidad.
                </p>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.15}>
                  <p>
                    La app gratuita de WhatsApp Business tiene limitaciones: un solo dispositivo principal, automatización básica, sin CRM integrado y sin posibilidad de enviar mensajes masivos aprobados por Meta. El <strong className="text-foreground">WhatsApp Business API</strong> elimina estas restricciones y abre un mundo de posibilidades para negocios serios en Cartagena.
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 my-10">
                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Múltiples agentes simultáneos</h3>
                          </div>
                          <p className="text-sm">Varios vendedores pueden atender conversaciones desde el mismo número de WhatsApp, cada uno desde su dispositivo. Asignación automática de leads por disponibilidad, zona o especialidad.</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center gap-3">
                            <Shield className="w-6 h-6 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Verificación de cuenta (check verde)</h3>
                          </div>
                          <p className="text-sm">La insignia verde junto al nombre de tu negocio en WhatsApp genera confianza inmediata. Los leads saben que están hablando con una empresa verificada, no con un estafador.</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center gap-3">
                            <MessageCircle className="w-6 h-6 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Mensajes masivos con plantillas</h3>
                          </div>
                          <p className="text-sm">Envía promociones, recordatorios de citas, actualizaciones de pedidos y ofertas a toda tu base de contactos. Plantillas aprobadas por Meta con texto, imágenes, videos y botones interactivos.</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-6 h-6 text-[#25D366]" />
                            <h3 className="text-lg font-semibold text-foreground">Analítica y reportes avanzados</h3>
                          </div>
                          <p className="text-sm">Métricas de tiempo de respuesta, tasa de resolución, satisfacción del cliente, rendimiento por agente y ROI de cada campaña. Dashboard en tiempo real para tomar decisiones basadas en datos.</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                </StaggerContainer>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    Somos partners de las principales plataformas de WhatsApp Business API. Nos encargamos de toda la configuración técnica: registro del número, verificación de la cuenta, creación de plantillas, integración con tu CRM y capacitación de tu equipo. Tú solo te dedicas a vender.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-16 sm:py-20 relative">
          <div className="section-container">
            <FadeInView direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                6 Razones por las que <span className="gradient-text">WhatsApp Marketing</span> Supera a Todo lo Demás
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                No es hype, no es moda. Son datos reales de campañas ejecutadas en Cartagena y la región Caribe colombiana.
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <FadeInView key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 + index * 0.1}>
                  <ScaleOnHover scale={1.04} lift={8} glow>
                    <Card className="bg-gradient-card border-border/50 hover:border-[#25D366]/50 transition-all duration-300 group">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-[#25D366]" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados Reales */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  Resultados Reales de <span className="gradient-text">WhatsApp Marketing</span> en Cartagena
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                  Estos son resultados de campañas gestionadas por DT Growth Partners para negocios reales en Cartagena. Datos verificables.
                </p>
              </FadeInView>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeInView direction="left" delay={0.15}>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className="bg-background/50 border-border/50 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-[#25D366]/10 p-4 border-b border-border/50">
                          <span className="text-xs font-semibold text-[#25D366] uppercase tracking-wider">Caso de éxito</span>
                          <h3 className="text-xl font-bold text-foreground mt-1">Clínica de Estética</h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={45} duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">citas agendadas/semana</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={3200} prefix="$" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">COP por conversación</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={68} suffix="%" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">tasa de asistencia</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={12} suffix="x" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">ROI sobre inversión</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Clínica de estética en Bocagrande. Campañas de Meta Ads con objetivo de mensajes segmentadas a mujeres 25-50 años en Cartagena interesadas en procedimientos estéticos. Chatbot califica el procedimiento de interés, envía precios y agenda cita automáticamente. El equipo de ventas solo atiende a personas que ya confirmaron cita.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FadeInView>

                <FadeInView direction="right" delay={0.25}>
                  <ScaleOnHover scale={1.03} lift={6} glow>
                    <Card className="bg-background/50 border-border/50 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-[#25D366]/10 p-4 border-b border-border/50">
                          <span className="text-xs font-semibold text-[#25D366] uppercase tracking-wider">Caso de éxito</span>
                          <h3 className="text-xl font-bold text-foreground mt-1">Restaurante</h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={200} suffix="+" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">pedidos/mes vía WhatsApp</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={1800} prefix="$" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">COP por conversación</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={42} suffix="%" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">tasa de conversión</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#25D366]">
                                <AnimatedCounter value={8} suffix="x" duration={2} />
                              </div>
                              <p className="text-xs text-muted-foreground">ROI sobre inversión</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Restaurante en el Centro Histórico. Campañas segmentadas a personas dentro de un radio de 5 km, con anuncios de platos destacados y botón de WhatsApp. Chatbot envía menú digital, toma el pedido, confirma dirección de entrega y procesa el pago. El restaurante recibe el pedido listo para preparar sin intermediarios como Rappi o iFood que cobran 25-30% de comisión.
                          </p>
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
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  ¿Cuánto Cuesta el <span className="gradient-text">WhatsApp Marketing</span> en Cartagena?
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                  Precios transparentes. Sin costos ocultos. Inversión que se mide en resultados, no en promesas.
                </p>
              </FadeInView>

              <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
                <StaggerItem>
                  <ScaleOnHover scale={1.04} lift={8} glow>
                    <Card className="bg-background/50 border-border/50">
                      <CardContent className="p-6 space-y-4 text-center">
                        <h3 className="text-lg font-semibold text-muted-foreground">Inicio</h3>
                        <div className="text-3xl font-bold text-foreground">$800.000</div>
                        <p className="text-sm text-muted-foreground">COP/mes gestión</p>
                        <div className="border-t border-border/50 pt-4 space-y-2 text-sm text-left">
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>1 campaña de Meta Ads activa</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Chatbot básico de calificación</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Reporte semanal de resultados</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Ideal para negocios que empiezan</span>
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">+ presupuesto de pauta desde $500.000 COP</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <FloatingElement amplitude={4} duration={4}>
                    <ScaleOnHover scale={1.04} lift={8} glow>
                      <Card className="bg-background/50 border-[#25D366]/50 ring-2 ring-[#25D366]/20 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-[#25D366] text-white text-xs font-semibold px-4 py-1 rounded-full">Más popular</span>
                        </div>
                        <CardContent className="p-6 space-y-4 text-center">
                          <h3 className="text-lg font-semibold text-[#25D366]">Crecimiento</h3>
                          <div className="text-3xl font-bold text-foreground">$1.500.000</div>
                          <p className="text-sm text-muted-foreground">COP/mes gestión</p>
                          <div className="border-t border-border/50 pt-4 space-y-2 text-sm text-left">
                            <p className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Hasta 3 campañas activas</span>
                            </p>
                            <p className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Chatbot avanzado con flujos personalizados</span>
                            </p>
                            <p className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Secuencias de seguimiento automatizadas</span>
                            </p>
                            <p className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Integración CRM</span>
                            </p>
                            <p className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                              <span>Reporte diario + reunión semanal</span>
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">+ presupuesto de pauta desde $1.500.000 COP</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </FloatingElement>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.04} lift={8} glow>
                    <Card className="bg-background/50 border-border/50">
                      <CardContent className="p-6 space-y-4 text-center">
                        <h3 className="text-lg font-semibold text-muted-foreground">Escala</h3>
                        <div className="text-3xl font-bold text-foreground">$3.000.000</div>
                        <p className="text-sm text-muted-foreground">COP/mes gestión</p>
                        <div className="border-t border-border/50 pt-4 space-y-2 text-sm text-left">
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Campañas ilimitadas</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>WhatsApp Business API configurado</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Chatbot con IA conversacional</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Múltiples agentes + asignación automática</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                            <span>Dashboard en tiempo real</span>
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">+ presupuesto de pauta desde $3.000.000 COP</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              </StaggerContainer>

              <FadeInView direction="up" delay={0.4}>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    Todos los planes incluyen diseño de creatividades, copywriting de anuncios, segmentación de audiencias y optimización continua.
                    <br />La inversión en pauta se paga directamente a Meta — nosotros no tocamos ese dinero.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  Preguntas Frecuentes sobre <span className="gradient-text">WhatsApp Marketing</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground text-lg mb-12">
                  Todo lo que necesitas saber antes de invertir en WhatsApp Marketing para tu negocio en Cartagena.
                </p>
              </FadeInView>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <FadeInView key={index} direction="up" delay={0.05 + index * 0.07}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-background/50 border border-border/50 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left text-base font-medium hover:text-[#25D366] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
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
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Servicios <span className="gradient-text">Relacionados</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-center text-muted-foreground mb-10">
                  WhatsApp Marketing funciona mejor como parte de una estrategia integral de publicidad digital. Conoce nuestros otros servicios.
                </p>
              </FadeInView>

              <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StaggerItem>
                  <ScaleOnHover scale={1.05} lift={6}>
                    <Link to="/servicios/publicidad-digital-cartagena" className="group">
                      <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                        <CardContent className="p-4 text-center">
                          <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Publicidad Digital en Cartagena</h3>
                          <p className="text-xs text-muted-foreground mt-1">Estrategia integral</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.05} lift={6}>
                    <Link to="/servicios/meta-ads-cartagena" className="group">
                      <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                        <CardContent className="p-4 text-center">
                          <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Meta Ads en Cartagena</h3>
                          <p className="text-xs text-muted-foreground mt-1">Facebook + Instagram + WhatsApp</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.05} lift={6}>
                    <Link to="/servicios/facebook-ads-cartagena" className="group">
                      <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                        <CardContent className="p-4 text-center">
                          <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Facebook Ads en Cartagena</h3>
                          <p className="text-xs text-muted-foreground mt-1">Mayor alcance 30+ años</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.05} lift={6}>
                    <Link to="/servicios/instagram-ads-cartagena" className="group">
                      <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Instagram Ads en Cartagena</h3>
                          <p className="text-xs text-muted-foreground mt-1">Visual + engagement</p>
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
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 via-background to-[#128C7E]/10" />

          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  ¿Listo para Recibir <GradientText animate className="text-[#25D366]">Clientes por WhatsApp</GradientText>?
                </h2>
              </FadeInView>

              <FadeInView direction="up" delay={0.15}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  La ironía es perfecta: el CTA de esta página ES el producto. Haz clic en el botón, escríbenos por WhatsApp y experimenta en primera persona lo que tus clientes van a sentir. Respuesta inmediata, atención personalizada y una propuesta en menos de 24 horas.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(37, 211, 102, 0)",
                        "0 0 30px rgba(37, 211, 102, 0.4)",
                        "0 0 0px rgba(37, 211, 102, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-lg w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="group text-lg px-10 py-6 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/25"
                      onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20implementar%20WhatsApp%20Marketing%20en%20mi%20negocio%20en%20Cartagena', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Escríbenos por WhatsApp ahora
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.45}>
                <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    Asesoría gratuita
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    Respuesta en menos de 5 minutos
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#25D366]" />
                    Sin compromiso
                  </span>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.55}>
                <p className="text-xs text-muted-foreground pt-4">
                  O llámanos directamente: <a href="tel:+573007189383" className="text-[#25D366] hover:underline">+57 300 718 9383</a>
                </p>
              </FadeInView>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsAppMarketingCartagena;
