import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Users, Zap, CheckCircle, DollarSign } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Cuánto debo invertir en Meta Ads para ver resultados en Cartagena?",
    answer: "Para negocios de servicios en Cartagena, recomendamos un presupuesto mínimo de $500.000 COP mensuales en pauta para obtener datos suficientes y comenzar a optimizar. Sin embargo, los mejores resultados los vemos con inversiones desde $1.500.000 COP mensuales, donde podemos hacer pruebas A/B reales, segmentar múltiples audiencias y escalar las campañas ganadoras. El presupuesto ideal depende de tu industria, tu ticket promedio y tus objetivos de crecimiento."
  },
  {
    question: "¿En cuánto tiempo puedo ver resultados con Meta Ads?",
    answer: "Los primeros leads y mensajes por WhatsApp pueden llegar desde el primer día de campaña. Sin embargo, resultados consistentes y optimizados tardan entre 2 y 4 semanas, que es el tiempo que necesita el algoritmo de Meta para aprender y el equipo para ajustar segmentaciones, creatividades y copys. En nuestra experiencia gestionando más de $500M COP en pauta, los clientes que mantienen campañas activas por 3 meses o más obtienen un costo por lead hasta 60% menor que en el primer mes."
  },
  {
    question: "¿Meta Ads funciona para negocios locales en Cartagena?",
    answer: "Meta Ads es una de las mejores herramientas para negocios locales en Cartagena. Puedes segmentar por ubicación geográfica específica (barrios como Bocagrande, Manga, Pie de la Popa, Crespo), por intereses, por comportamiento y por datos demográficos. Esto significa que un restaurante, una clínica estética, un gimnasio o un taller mecánico puede mostrar sus anuncios exclusivamente a personas que viven o trabajan cerca de su negocio. Además, los formatos de anuncios con botón de WhatsApp generan contacto directo e inmediato."
  },
  {
    question: "¿Cuál es la diferencia entre Facebook Ads e Instagram Ads?",
    answer: "Ambas plataformas se gestionan desde el mismo Administrador de Anuncios de Meta (Meta Ads Manager). La diferencia está en la audiencia y el formato. Facebook tiene mayor alcance en personas mayores de 30 años y funciona muy bien para servicios profesionales, salud y educación. Instagram domina en el público de 18 a 40 años y es ideal para negocios visuales como moda, gastronomía y estética. En DT Growth Partners gestionamos ambas plataformas de forma integrada para maximizar resultados."
  },
  {
    question: "¿Necesito tener muchos seguidores para hacer publicidad en Meta?",
    answer: "No. Los seguidores orgánicos y la publicidad pagada son dos cosas diferentes. Puedes tener 200 seguidores y generar cientos de leads al mes con campañas bien estructuradas. Meta Ads te permite llegar a personas que nunca han interactuado con tu perfil. Lo que sí necesitas es una página de Facebook activa y, idealmente, un perfil de Instagram vinculado. El contenido de tus anuncios importa mucho más que el número de seguidores."
  },
  {
    question: "¿Por qué contratar una agencia en lugar de hacer Meta Ads por mi cuenta?",
    answer: "Puedes hacerlo por tu cuenta, pero la curva de aprendizaje es costosa. Hemos visto negocios en Cartagena que gastan entre $2M y $5M COP sin resultados porque no configuran correctamente el Pixel de Meta, eligen objetivos de campaña incorrectos o no segmentan bien su audiencia. Una agencia especializada como DT Growth Partners te ahorra ese costo de aprendizaje. Hemos gestionado más de $500M COP en pauta digital y conocemos los patrones que funcionan para cada tipo de negocio en la región Caribe."
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
    icon: Target,
    title: "Segmentación hiperlocalizada",
    description: "Llega a personas en barrios específicos de Cartagena: Bocagrande, Manga, Crespo, Pie de la Popa o zonas industriales como Mamonal. Meta permite segmentar por código postal, radio de kilómetros y hasta personas que visitan zonas específicas."
  },
  {
    icon: MessageCircle,
    title: "Integración directa con WhatsApp",
    description: "Los anuncios de Meta con botón de WhatsApp generan conversaciones inmediatas. En promedio, nuestros clientes en Cartagena reciben entre 15 y 40 mensajes diarios de prospectos calificados con campañas optimizadas."
  },
  {
    icon: Users,
    title: "Audiencias Lookalike y Retargeting",
    description: "Creamos audiencias similares a tus mejores clientes y hacemos retargeting a quienes visitaron tu web o interactuaron con tu perfil. Esto reduce el costo por lead hasta en un 45% comparado con audiencias frías."
  },
  {
    icon: BarChart3,
    title: "Medición completa con Meta Pixel",
    description: "Instalamos y configuramos el Pixel de Meta y la API de Conversiones para rastrear cada acción: visitas, formularios, compras, llamadas. Sabrás exactamente cuánto genera cada peso invertido en publicidad."
  },
  {
    icon: DollarSign,
    title: "Costo por lead competitivo",
    description: "En Cartagena, el costo promedio por lead en Meta Ads oscila entre $2.000 y $8.000 COP para negocios de servicios. Con nuestra optimización, hemos logrado costos de $1.200 COP por lead para clientes en sectores como salud y educación."
  },
  {
    icon: Zap,
    title: "Velocidad de implementación",
    description: "A diferencia del SEO que toma meses, Meta Ads genera resultados desde el día uno. Podemos tener tu primera campaña activa en 48 horas con creatividades optimizadas, segmentación definida y tracking configurado."
  }
];

const MetaAdsCartagena = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Meta Ads en Cartagena"
        description="Expertos en Meta Ads en Cartagena. Gestionamos campañas en Facebook, Instagram y WhatsApp Ads. Más de $500M COP gestionados en pauta digital."
        slug="/servicios/meta-ads-cartagena"
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
                <FloatingElement amplitude={6} duration={4}>
                  <div className="inline-block">
                    <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider">
                      Meta Ads Cartagena
                    </span>
                  </div>
                </FloatingElement>
              </FadeInView>

              <FadeInView direction="up" delay={0.15}>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <GradientText animate className="block">Meta Ads en Cartagena:</GradientText>
                  <span className="text-2xl lg:text-4xl block mt-2">Expertos en el Ecosistema Meta</span>
                </h1>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-normal">
                  Gestionamos campañas de publicidad en Facebook, Instagram y WhatsApp para negocios en Cartagena. Más de <strong className="text-foreground">$500 millones de pesos</strong> gestionados en pauta digital con resultados medibles. Si tu negocio necesita más clientes, Meta Ads es el canal más efectivo para lograrlo.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button
                    size="lg"
                    className="btn-primary group text-lg px-8 py-4 w-full sm:w-auto"
                    onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20información%20sobre%20Meta%20Ads%20para%20mi%20negocio%20en%20Cartagena', '_blank')}
                  >
                    Solicitar asesoría gratuita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group text-lg px-8 py-4 w-full sm:w-auto border-2 bg-background hover:bg-background hover:text-[#027FFF] hover:border-[#027FFF] hover:shadow-[0_0_15px_rgba(2,127,255,0.4)] transition-all duration-300"
                    style={{ borderColor: '#027FFF', color: '#027FFF' }}
                    onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver beneficios
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.6}>
                <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
                  <FloatingElement amplitude={3} duration={3.5} delay={0}>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      +$500M COP gestionados
                    </span>
                  </FloatingElement>
                  <FloatingElement amplitude={3} duration={3.5} delay={0.5}>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      +1.000 campañas lanzadas
                    </span>
                  </FloatingElement>
                  <FloatingElement amplitude={3} duration={3.5} delay={1}>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Equipo certificado por Meta
                    </span>
                  </FloatingElement>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ¿Qué es Meta Ads? */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                  ¿Qué es <span className="gradient-text">Meta Ads</span>?
                </h2>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.1}>
                  <p>
                    Meta Ads es la plataforma publicitaria de Meta (antes Facebook Inc.) que te permite crear y gestionar anuncios pagados en <strong className="text-foreground">Facebook, Instagram, Messenger y WhatsApp</strong>. Todo se administra desde una sola herramienta: el <strong className="text-foreground">Meta Ads Manager</strong> (Administrador de Anuncios de Meta).
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    A diferencia de publicar contenido orgánico y esperar a que te encuentren, Meta Ads te permite <strong className="text-foreground">elegir exactamente a quién le muestras tu publicidad</strong>. Puedes segmentar por edad, ubicación, intereses, comportamiento de compra, nivel socioeconómico y mucho más. En Cartagena, esto significa que puedes mostrar tu anuncio solo a mujeres de 25 a 45 años que viven en Bocagrande y están interesadas en tratamientos estéticos, o a hombres de 30 a 55 años en la zona industrial de Mamonal que buscan servicios de mantenimiento.
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6 my-8">
                  <StaggerItem>
                    <ScaleOnHover scale={1.02} lift={4} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <h3 className="text-lg font-semibold text-foreground">Tipos de campaña disponibles</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Reconocimiento:</strong> para que más personas conozcan tu marca en Cartagena</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Tráfico:</strong> para llevar personas a tu sitio web o landing page</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Interacción:</strong> para generar likes, comentarios y compartidos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Generación de leads:</strong> para captar datos de contacto directamente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Mensajes:</strong> para recibir mensajes por WhatsApp, Messenger o Instagram Direct</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span><strong className="text-foreground">Ventas:</strong> para e-commerce con catálogo de productos</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.02} lift={4} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3">
                          <h3 className="text-lg font-semibold text-foreground">El Meta Pixel y la API de Conversiones</h3>
                          <p className="text-sm">
                            El <strong className="text-foreground">Meta Pixel</strong> es un fragmento de código que se instala en tu sitio web para rastrear las acciones de los usuarios que llegan desde tus anuncios. Permite saber quién compró, quién llenó un formulario, quién agregó productos al carrito y quién solo visitó.
                          </p>
                          <p className="text-sm">
                            La <strong className="text-foreground">API de Conversiones (CAPI)</strong> complementa al Pixel enviando datos del servidor directamente a Meta, lo que mejora la precisión del tracking en un mundo donde las cookies tienen cada vez más restricciones. En DT Growth Partners configuramos ambas herramientas para que cada peso invertido sea rastreable.
                          </p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                </StaggerContainer>

                <FadeInView direction="up" delay={0.3}>
                  <p>
                    Meta Ads no es solo "pautar en Facebook". Es un sistema de publicidad basado en datos que, bien gestionado, se convierte en la máquina de generación de clientes más predecible que puede tener un negocio en Cartagena. Si quieres profundizar en cada plataforma, consulta nuestras guías sobre{" "}
                    <Link to="/servicios/facebook-ads-cartagena" className="text-primary hover:underline">Facebook Ads en Cartagena</Link> e{" "}
                    <Link to="/servicios/instagram-ads-cartagena" className="text-primary hover:underline">Instagram Ads en Cartagena</Link>.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* ¿Cómo funciona para negocios en Cartagena? */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                  ¿Cómo funciona Meta Ads para <span className="gradient-text">negocios en Cartagena</span>?
                </h2>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.1}>
                  <p>
                    Cartagena de Indias tiene un ecosistema comercial único. Es una ciudad turística con más de 1 millón de habitantes, una zona industrial activa en Mamonal, un sector gastronómico en constante crecimiento y un mercado inmobiliario en expansión. Esto crea oportunidades publicitarias que otras ciudades no tienen.
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    Meta Ads permite aprovechar estas dinámicas de manera precisa. Un hotel boutique en el Centro Histórico puede mostrar anuncios a turistas que llegarán a Cartagena en las próximas semanas (Meta detecta patrones de viaje). Una clínica estética puede segmentar a mujeres de 28 a 50 años con ingresos medios-altos en zonas residenciales. Un restaurante puede usar anuncios con botón de WhatsApp para llenar reservas en temporada baja.
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 my-8">
                  {[
                    {
                      step: "01",
                      title: "Diagnóstico y estrategia",
                      description: "Analizamos tu negocio, tu competencia en Cartagena y definimos los objetivos de campaña, las audiencias y el presupuesto. No lanzamos anuncios sin un plan claro."
                    },
                    {
                      step: "02",
                      title: "Configuración técnica",
                      description: "Instalamos el Meta Pixel, configuramos la API de Conversiones, creamos audiencias personalizadas y Lookalike, y estructuramos las campañas en el Ads Manager."
                    },
                    {
                      step: "03",
                      title: "Lanzamiento y optimización",
                      description: "Lanzamos las campañas con múltiples variaciones de anuncios (A/B testing). Optimizamos diariamente basándonos en datos reales: CPA, CTR, ROAS y calidad de leads."
                    }
                  ].map((item) => (
                    <StaggerItem key={item.step}>
                      <ScaleOnHover scale={1.03} lift={6} glow>
                        <Card
                          className="card-hover bg-card border-border/50"
                        >
                          <CardContent className="p-6 space-y-4">
                            <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <FadeInView direction="up" delay={0.3}>
                  <p>
                    Nuestro enfoque está diseñado para el mercado cartagenero. Sabemos que el comportamiento del consumidor en Cartagena es diferente al de Bogotá o Medellín: los horarios de mayor actividad en redes cambian, el tipo de contenido que genera confianza es distinto y la integración con WhatsApp es fundamental porque es el canal de comunicación preferido en la costa Caribe. Si buscas una estrategia integral,{" "}
                    <Link to="/servicios/publicidad-digital-cartagena" className="text-primary hover:underline">nuestra guía de publicidad digital en Cartagena</Link> cubre todos los canales disponibles.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-black"></div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <FadeInView direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                Beneficios de hacer <span className="gradient-text">Meta Ads en Cartagena</span>
              </h2>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Meta Ads ofrece ventajas concretas para negocios locales. Estos son los beneficios respaldados por datos reales de nuestras campañas.
              </p>
            </FadeInView>

            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <StaggerItem key={benefit.title}>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card
                        className="bg-background/50 border-border/50 backdrop-blur-sm"
                      >
                        <CardContent className="p-8 space-y-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* Resultados reales */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="text-center mb-16">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Resultados reales de nuestras <span className="gradient-text">campañas en Meta Ads</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Estos números reflejan el trabajo acumulado con negocios en Cartagena y la región Caribe. No son proyecciones: son resultados verificables.
                </p>
              </FadeInView>
            </div>

            <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {[
                { value: 500, prefix: "+$", suffix: "M", label: "COP gestionados en pauta digital en Meta Ads" },
                { value: 1000, prefix: "+", suffix: "", label: "Campañas publicitarias lanzadas y optimizadas" },
                { value: 40, prefix: "+", suffix: "K", label: "Leads y conversiones generadas para nuestros clientes" },
                { value: 3.2, prefix: "", suffix: "x", label: "ROAS promedio en campañas de generación de leads", decimals: 1 }
              ].map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center space-y-3">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={2} decimals={stat.decimals || 0} />
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
                <StaggerItem>
                  <ScaleOnHover scale={1.02} lift={4} glow>
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-6 space-y-4">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider">Caso: Clínica estética</div>
                        <h3 className="text-lg font-bold text-foreground">De 5 a 35 citas semanales con Meta Ads</h3>
                        <p className="text-sm text-muted-foreground">
                          Una clínica estética en Cartagena pasó de depender de referidos a generar 35 citas semanales a través de campañas de mensajes a WhatsApp en Facebook e Instagram. El costo por cita agendada se estabilizó en $4.500 COP después de 6 semanas de optimización.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-primary/5 rounded-lg p-3 text-center">
                            <div className="text-xs text-muted-foreground">Costo por lead</div>
                            <div className="text-lg font-bold text-primary">$<AnimatedCounter value={4500} duration={1.5} /> COP</div>
                          </div>
                          <div className="bg-primary/5 rounded-lg p-3 text-center">
                            <div className="text-xs text-muted-foreground">Citas/semana</div>
                            <div className="text-lg font-bold text-primary"><AnimatedCounter value={35} duration={1.5} /></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>

                <StaggerItem>
                  <ScaleOnHover scale={1.02} lift={4} glow>
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-6 space-y-4">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider">Caso: Restaurante local</div>
                        <h3 className="text-lg font-bold text-foreground">440 mil personas alcanzadas con $407 USD</h3>
                        <p className="text-sm text-muted-foreground">
                          Un restaurante de comida típica en Cartagena logró que 440 mil personas de la zona conocieran su ubicación y su menú. La campaña combinó anuncios de reconocimiento en Facebook con promociones en Instagram Stories, generando más de 1.300 nuevos seguidores y un aumento medible en el tráfico presencial.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-primary/5 rounded-lg p-3 text-center">
                            <div className="text-xs text-muted-foreground">Alcance</div>
                            <div className="text-lg font-bold text-primary"><AnimatedCounter value={440} suffix="K" duration={1.5} /></div>
                          </div>
                          <div className="bg-primary/5 rounded-lg p-3 text-center">
                            <div className="text-xs text-muted-foreground">Nuevos seguidores</div>
                            <div className="text-lg font-bold text-primary">+<AnimatedCounter value={1303} duration={1.5} /></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ¿Cuánto cuesta Meta Ads en Cartagena? */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                  ¿Cuánto cuesta <span className="gradient-text">Meta Ads en Cartagena</span>?
                </h2>
              </FadeInView>

              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <FadeInView direction="up" delay={0.1}>
                  <p>
                    El costo de Meta Ads tiene dos componentes: la <strong className="text-foreground">inversión en pauta</strong> (lo que pagas directamente a Meta para mostrar tus anuncios) y la <strong className="text-foreground">gestión profesional</strong> (el servicio de la agencia que crea, optimiza y monitorea tus campañas).
                  </p>
                </FadeInView>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 my-8">
                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3 text-center">
                          <div className="text-xs text-primary font-semibold uppercase tracking-wider">Inversión baja</div>
                          <div className="text-2xl font-bold text-foreground">$500K - $1.5M COP/mes</div>
                          <p className="text-sm text-muted-foreground">
                            Ideal para negocios que están probando Meta Ads por primera vez. Permite validar audiencias y mensajes con campañas de reconocimiento o generación de leads básica.
                          </p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>

                  <StaggerItem>
                    <FloatingElement amplitude={4} duration={5}>
                      <ScaleOnHover scale={1.05} lift={8} glow>
                        <Card className="bg-background/50 border-primary/50 ring-1 ring-primary">
                          <CardContent className="p-6 space-y-3 text-center">
                            <div className="text-xs text-primary font-semibold uppercase tracking-wider">Inversión media</div>
                            <div className="text-2xl font-bold text-foreground">$1.5M - $5M COP/mes</div>
                            <p className="text-sm text-muted-foreground">
                              El punto óptimo para la mayoría de negocios en Cartagena. Permite hacer A/B testing real, activar retargeting, crear audiencias Lookalike y escalar las campañas ganadoras.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </FloatingElement>
                  </StaggerItem>

                  <StaggerItem>
                    <ScaleOnHover scale={1.03} lift={6} glow>
                      <Card className="bg-background/50 border-border/50">
                        <CardContent className="p-6 space-y-3 text-center">
                          <div className="text-xs text-primary font-semibold uppercase tracking-wider">Inversión alta</div>
                          <div className="text-2xl font-bold text-foreground">$5M+ COP/mes</div>
                          <p className="text-sm text-muted-foreground">
                            Para negocios que ya validaron su modelo y necesitan escalar agresivamente. Incluye campañas multiobjetivo, automatización avanzada y estrategias de full-funnel marketing.
                          </p>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                </StaggerContainer>

                <FadeInView direction="up" delay={0.2}>
                  <p>
                    En cuanto a la gestión profesional, en DT Growth Partners ofrecemos planes desde <strong className="text-foreground">$2.000.000 COP mensuales + 10% de la inversión en pauta</strong>. Esto incluye estrategia, configuración, optimización diaria, creatividades y reportes. Si quieres ver nuestros planes en detalle, también trabajamos{" "}
                    <Link to="/servicios/whatsapp-marketing-cartagena" className="text-primary hover:underline">campañas de WhatsApp Marketing</Link> como complemento a Meta Ads.
                  </p>
                </FadeInView>

                <FadeInView direction="up" delay={0.3}>
                  <p>
                    Lo importante es entender que Meta Ads no es un gasto: es una inversión medible. Si inviertes $2M COP y generas $10M COP en ventas, tu ROAS es de 5x. Nuestro trabajo es maximizar ese retorno.
                  </p>
                </FadeInView>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <FadeInView direction="up">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                  Preguntas frecuentes sobre <span className="gradient-text">Meta Ads en Cartagena</span>
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-muted-foreground text-center mb-12">
                  Respondemos las dudas más comunes que tienen los negocios en Cartagena antes de invertir en publicidad en Meta.
                </p>
              </FadeInView>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <FadeInView key={index} direction="up" delay={index * 0.08}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border/50 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors">
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
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="text-center space-y-8">
                    <FadeInView direction="up" delay={0.1}>
                      <h2 className="text-2xl lg:text-5xl font-bold">
                        Lleva tu negocio al <GradientText animate>siguiente nivel</GradientText>
                      </h2>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.2}>
                      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Si estás invirtiendo en Meta Ads sin resultados claros, el problema no es la plataforma. Es la estrategia, la segmentación o la configuración técnica. Agenda una consulta gratuita y en 15 minutos te decimos exactamente qué ajustar para que tus campañas generen clientes reales.
                      </p>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.3}>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="btn-primary group text-white text-lg px-8 py-4"
                          onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20una%20asesoría%20gratuita%20sobre%20Meta%20Ads%20para%20mi%20negocio%20en%20Cartagena', '_blank')}
                        >
                          <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          Hablar con un experto por WhatsApp
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </FadeInView>

                    <FadeInView direction="up" delay={0.4}>
                      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <Link to="/servicios/publicidad-digital-cartagena" className="hover:text-primary transition-colors flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> Publicidad digital en Cartagena
                        </Link>
                        <Link to="/servicios/facebook-ads-cartagena" className="hover:text-primary transition-colors flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> Facebook Ads en Cartagena
                        </Link>
                        <Link to="/servicios/instagram-ads-cartagena" className="hover:text-primary transition-colors flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> Instagram Ads en Cartagena
                        </Link>
                        <Link to="/servicios/whatsapp-marketing-cartagena" className="hover:text-primary transition-colors flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" /> WhatsApp Marketing en Cartagena
                        </Link>
                      </div>
                    </FadeInView>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MetaAdsCartagena;
