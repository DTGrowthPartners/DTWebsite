import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, BookOpen, Zap, CheckCircle, DollarSign, AlertCircle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Cuánto cuesta pautar en redes sociales en Cartagena?",
    answer: "El costo depende de tu objetivo y tipo de negocio. Para un negocio local como un restaurante o tienda, puedes empezar desde $300.000 COP mensuales en inversión publicitaria. Para e-commerce o servicios profesionales, lo recomendable es un mínimo de $500.000 a $1.000.000 COP para obtener datos suficientes y optimizar las campañas."
  },
  {
    question: "¿Cuál es la diferencia entre pautar y publicar normalmente?",
    answer: "Publicar orgánicamente solo muestra tu contenido a una fracción de tus seguidores (entre el 3% y el 8%). Pautar significa invertir dinero para que Meta, Google o TikTok muestren tu contenido a personas específicas que probablemente estén interesadas en tu producto o servicio. La pauta te permite segmentar por ubicación, edad, intereses y comportamiento de compra."
  },
  {
    question: "¿En cuánto tiempo veo resultados con la pauta digital?",
    answer: "Las primeras métricas (alcance, clics, mensajes) se ven desde la primera semana. Sin embargo, resultados consistentes en ventas o leads de calidad toman entre 3 y 6 semanas, ya que las plataformas necesitan datos para optimizar la entrega de tus anuncios. El primer mes es principalmente de aprendizaje y ajustes."
  },
  {
    question: "¿Es mejor pautar en Facebook o en Instagram?",
    answer: "Depende de tu audiencia. En Cartagena, Facebook sigue siendo fuerte para negocios locales, servicios y personas mayores de 35 años. Instagram funciona mejor para marcas visuales, moda, gastronomía y audiencias entre 18 y 40 años. Lo ideal es usar Meta Ads, que permite mostrar anuncios en ambas plataformas simultáneamente y dejar que el algoritmo decida dónde rendir mejor."
  },
  {
    question: "¿Necesito un profesional para pautar o puedo hacerlo yo mismo?",
    answer: "Puedes hacerlo tú mismo con el botón 'Promocionar' de Instagram, pero eso limita la segmentación y las opciones de optimización. Un profesional usa el Administrador de Anuncios con estrategias avanzadas: públicos personalizados, lookalike audiences, pruebas A/B y embudos de conversión. La diferencia en resultados suele ser significativa, especialmente cuando la inversión supera los $500.000 COP mensuales."
  },
  {
    question: "¿Qué información necesitan para empezar a pautar mi negocio?",
    answer: "Necesitamos acceso a tu página de Facebook e Instagram (o crearlas), definir tu público objetivo, tener claro tu producto o servicio estrella, un presupuesto mensual definido y material visual (fotos o videos). En DT Growth Partners te guiamos en cada paso, incluso si no tienes nada de esto listo."
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

const PautaDigitalCartagena = () => {
  const investmentData = [
    {
      icon: MessageCircle,
      type: "Restaurantes y comidas",
      range: "$300.000 - $800.000 COP/mes",
      goal: "Atraer clientes locales, domicilios y reservas",
      tip: "Funciona muy bien con videos cortos del plato estrella y segmentación por zona geográfica."
    },
    {
      icon: Target,
      type: "Servicios profesionales",
      range: "$500.000 - $1.500.000 COP/mes",
      goal: "Generar leads calificados y citas",
      tip: "Ideal para médicos, abogados, consultores. Campañas de generación de leads con formularios."
    },
    {
      icon: TrendingUp,
      type: "E-commerce y tiendas online",
      range: "$1.000.000 - $3.000.000 COP/mes",
      goal: "Ventas directas y recuperación de carritos",
      tip: "Requiere píxel configurado, catálogo de productos y estrategia de remarketing."
    },
    {
      icon: Zap,
      type: "Emprendimientos nuevos",
      range: "$200.000 - $500.000 COP/mes",
      goal: "Validar producto y generar primeras ventas",
      tip: "Empieza con una campaña de mensajes a WhatsApp para validar interés antes de escalar."
    },
    {
      icon: BarChart3,
      type: "Academias y cursos",
      range: "$500.000 - $1.200.000 COP/mes",
      goal: "Inscripciones y registros a eventos",
      tip: "Campañas de conversión con landing page optimizada y seguimiento por WhatsApp."
    },
    {
      icon: DollarSign,
      type: "Retail y tiendas físicas",
      range: "$400.000 - $1.000.000 COP/mes",
      goal: "Tráfico al local y promociones",
      tip: "Segmentación hiperlocal (radio de 5-10 km) con ofertas de tiempo limitado."
    }
  ];

  const erroresComunes = [
    {
      titulo: "Promocionar desde el botón de Instagram",
      descripcion: "El botón 'Promocionar' tiene opciones limitadas de segmentación y optimización. Es como pescar con las manos en vez de usar una red. El Administrador de Anuncios de Meta te da el control real sobre quién ve tu anuncio y qué acción quieres que tome."
    },
    {
      titulo: "No definir un objetivo claro antes de pautar",
      descripcion: "Muchos negocios en Cartagena invierten en pauta sin saber si quieren más seguidores, más mensajes, más ventas o más visitas al local. Cada objetivo requiere una configuración de campaña diferente. Sin objetivo claro, estás tirando dinero al aire."
    },
    {
      titulo: "Apagar las campañas demasiado rápido",
      descripcion: "Las plataformas necesitan entre 3 y 7 días para salir de la fase de aprendizaje. Si apagas una campaña en 2 días porque 'no funcionó', nunca le diste oportunidad al algoritmo de optimizarse. La paciencia estratégica es clave."
    },
    {
      titulo: "Usar la misma creatividad por meses",
      descripcion: "El público se satura. Si ves los mismos anuncios una y otra vez, los ignoras. Lo mismo le pasa a tu audiencia. Rota las creatividades cada 2 a 3 semanas para mantener el rendimiento. No necesitas producción costosa; un buen video con celular puede funcionar."
    },
    {
      titulo: "No instalar el píxel de Meta",
      descripcion: "El píxel es un código que rastrea las acciones de las personas en tu sitio web. Sin él, no puedes medir conversiones reales, crear públicos de remarketing ni optimizar campañas para ventas. Es como manejar con los ojos cerrados."
    },
    {
      titulo: "Segmentar demasiado amplio o demasiado estrecho",
      descripcion: "Si segmentas a 'toda Cartagena' sin filtros, tu presupuesto se diluye. Si segmentas a 500 personas ultraespecíficas, el costo por resultado se dispara. El equilibrio está en audiencias de 50.000 a 500.000 personas para presupuestos medianos en Cartagena."
    }
  ];

  const timelineItems = [
    {
      semana: "Semana 1",
      titulo: "Configuración y lanzamiento",
      descripcion: "Se configura el Business Manager, el píxel, los públicos y se lanzan las primeras campañas de prueba. No esperes ventas esta semana. El objetivo es que el algoritmo empiece a recopilar datos sobre quién interactúa con tus anuncios."
    },
    {
      semana: "Semana 2",
      titulo: "Fase de aprendizaje",
      descripcion: "Las plataformas están aprendiendo quién es tu cliente ideal. Verás los primeros clics, mensajes o visitas. Los costos pueden ser altos porque el sistema todavía no ha optimizado la entrega. Es normal y esperado."
    },
    {
      semana: "Semana 3",
      titulo: "Primeros ajustes",
      descripcion: "Con datos reales, se hacen los primeros ajustes: se pausan anuncios que no funcionan, se escalan los que sí y se prueban nuevas creatividades. Aquí empiezan a aparecer los primeros leads o ventas reales."
    },
    {
      semana: "Semana 4",
      titulo: "Optimización y decisiones",
      descripcion: "Se analiza el rendimiento del mes completo. Se identifican los anuncios ganadores, los públicos más rentables y se define la estrategia para el mes 2. Ahora tienes datos para tomar decisiones informadas en vez de suponer."
    }
  ];

  const glosario = [
    { termino: "CPM (Costo por Mil Impresiones)", definicion: "Lo que pagas cada vez que tu anuncio se muestra 1.000 veces. En Cartagena, un CPM promedio en Meta está entre $5.000 y $20.000 COP dependiendo de la audiencia y la competencia." },
    { termino: "CPC (Costo por Clic)", definicion: "Lo que pagas cada vez que alguien hace clic en tu anuncio. Un CPC bajo significa que tu anuncio es relevante para tu audiencia. En Colombia, un CPC promedio ronda entre $200 y $1.500 COP." },
    { termino: "CTR (Click-Through Rate)", definicion: "El porcentaje de personas que ven tu anuncio y hacen clic. Un CTR por encima del 1% es aceptable; por encima del 2% es bueno. Si está por debajo de 0.5%, tu creatividad o segmentación necesita ajustes." },
    { termino: "ROAS (Return on Ad Spend)", definicion: "El retorno sobre la inversión publicitaria. Si inviertes $500.000 COP y generas $2.000.000 COP en ventas, tu ROAS es 4x. Un ROAS de 3x o más se considera saludable para la mayoría de negocios." },
    { termino: "CPL (Costo por Lead)", definicion: "Lo que pagas por cada contacto o prospecto generado. Un lead es alguien que dejó sus datos, envió un mensaje o llenó un formulario. Un CPL aceptable depende del valor de tu producto." },
    { termino: "Píxel de Meta", definicion: "Un código que se instala en tu sitio web para rastrear acciones de los visitantes. Permite medir conversiones, crear públicos personalizados y optimizar campañas para acciones específicas como compras." },
    { termino: "Público Lookalike", definicion: "Una audiencia creada por Meta basada en tus mejores clientes. La plataforma busca personas similares a quienes ya te compraron o interactuaron contigo. Es una de las herramientas más poderosas de segmentación." },
    { termino: "Remarketing", definicion: "Mostrar anuncios a personas que ya visitaron tu sitio web, vieron tus productos o interactuaron con tus redes. Estas personas ya te conocen, por lo que la probabilidad de conversión es mucho mayor." },
    { termino: "Fase de Aprendizaje", definicion: "El período inicial (generalmente 3-7 días) donde el algoritmo de Meta está aprendiendo a quién mostrar tu anuncio. Durante esta fase, el rendimiento puede ser inestable. No hagas cambios hasta que termine." },
    { termino: "Conversión", definicion: "La acción que quieres que el usuario realice: una compra, un mensaje de WhatsApp, un registro, una llamada. Todo el sistema de pauta se optimiza para maximizar las conversiones al menor costo posible." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Pauta Digital en Cartagena"
        description="Guía completa de pauta digital en Cartagena. Aprende cuánto invertir, errores comunes y qué esperar en el primer mes. Expertos en pauta en redes sociales."
        slug="/servicios/pauta-digital-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <FadeInView direction="down" delay={0}>
                <div className="inline-block">
                  <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                    Guía Educativa
                  </span>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.15}>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Pauta Digital</span> en Cartagena:
                  <span className="block text-2xl lg:text-4xl mt-3 text-muted-foreground font-medium">
                    Guía para Empezar
                  </span>
                </h1>
              </FadeInView>

              <FadeInView direction="up" delay={0.3}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Si tienes un negocio en Cartagena y quieres empezar a pautar en redes sociales pero no sabes por dónde, esta guía es para ti. Sin tecnicismos innecesarios, con presupuestos reales y errores que debes evitar.
                </p>
              </FadeInView>

              <FadeInView direction="up" delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    size="lg"
                    className="btn-primary group text-lg px-8 py-4 w-full sm:w-auto"
                    onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20empezar%20a%20pautar%20en%20redes%20sociales%20en%20Cartagena', '_blank')}
                  >
                    Quiero empezar a pautar
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group text-lg px-8 py-4 w-full sm:w-auto border-2"
                    onClick={() => document.getElementById('que-es-pauta')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Leer la guía completa
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ¿Qué es la pauta digital? */}
        <section id="que-es-pauta" className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-8">
              <FadeInView direction="up">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    ¿Qué es la <span className="gradient-text">pauta digital</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    La explicación que nadie te dio antes de pedirte que inviertas
                  </p>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    En Colombia decimos <strong className="text-foreground">"pautar"</strong> cuando hablamos de pagar para que un anuncio se muestre en plataformas digitales como Facebook, Instagram, Google, TikTok o YouTube. Es lo mismo que en otros países llaman "paid advertising" o publicidad pagada.
                  </p>

                  <p>
                    Cuando publicas algo en Instagram desde tu cuenta de negocio, solo un porcentaje muy pequeño de tus seguidores lo ve (entre el <AnimatedCounter value={3} suffix="%" duration={1.5} /> y el <AnimatedCounter value={8} suffix="%" duration={1.5} />). La pauta digital resuelve ese problema: tú defines quién ve tu contenido, cuándo y con qué objetivo.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 py-4">
                    <FadeInView direction="left" delay={0.1}>
                      <ScaleOnHover>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-6 space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-red-400" />
                              </div>
                              <h3 className="font-semibold text-foreground">Sin pauta</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Publicas y esperas. Tu contenido llega a pocos seguidores. No controlas quién lo ve. Los resultados son impredecibles.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </FadeInView>

                    <FadeInView direction="right" delay={0.2}>
                      <ScaleOnHover>
                        <Card className="bg-background/50 border-primary/30 ring-1 ring-primary/20">
                          <CardContent className="p-6 space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-primary" />
                              </div>
                              <h3 className="font-semibold text-foreground">Con pauta</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Defines tu público, presupuesto y objetivo. Tu anuncio llega a miles de personas relevantes. Mides cada peso invertido.
                            </p>
                          </CardContent>
                        </Card>
                      </ScaleOnHover>
                    </FadeInView>
                  </div>

                  <p>
                    La pauta digital no es solo para grandes empresas. En Cartagena, negocios de todos los tamaños la usan para atraer clientes: desde la tienda de barrio que quiere más pedidos por WhatsApp, hasta el hotel boutique que busca turistas internacionales. La diferencia está en cómo se invierte, no en cuánto.
                  </p>
                </div>
              </FadeInView>

              <FadeInView direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <Link to="/servicios/publicidad-digital-cartagena">
                    <Button variant="outline" size="sm" className="text-sm">
                      Publicidad digital en Cartagena (guía completa)
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/servicios/meta-ads-cartagena">
                    <Button variant="outline" size="sm" className="text-sm">
                      Meta Ads en Cartagena
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeInView>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* ¿Cuánto invertir? */}
        <section className="py-16 sm:py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  ¿Cuánto invertir según tu <span className="gradient-text">tipo de negocio</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  No todos los negocios necesitan el mismo presupuesto. Estos rangos son referencias basadas en nuestra experiencia gestionando campañas en Cartagena.
                </p>
              </div>
            </FadeInView>

            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {investmentData.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.type}>
                    <ScaleOnHover>
                      <Card
                        className="bg-card border-border/50 card-hover"
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{item.type}</h3>
                              <p className="text-sm text-primary font-medium">{item.range}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Objetivo:</strong> {item.goal}
                            </p>
                            <p className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                              {item.tip}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeInView direction="up" delay={0.3}>
              <div className="text-center mt-10">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
                  Estos presupuestos son solo la inversión en publicidad (ad spend). El costo de gestión profesional es adicional. En DT Growth Partners ofrecemos planes que se ajustan a cada etapa de tu negocio.
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Errores comunes */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Errores comunes al <span className="gradient-text">pautar</span> en Cartagena
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Estos son los errores que vemos repetirse en el <AnimatedCounter value={90} suffix="%" duration={2} /> de los negocios que llegan a nosotros después de haber intentado pautar por su cuenta.
                </p>
              </div>
            </FadeInView>

            <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {erroresComunes.map((error) => (
                <StaggerItem key={error.titulo}>
                  <FadeInView direction="left">
                    <ScaleOnHover>
                      <Card
                        className="bg-background/50 border-border/50"
                      >
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <AlertCircle className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{error.titulo}</h3>
                              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                {error.descripcion}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </FadeInView>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInView direction="up" delay={0.3}>
              <div className="text-center mt-10">
                <Link to="/servicios/facebook-ads-cartagena">
                  <Button variant="outline" size="lg" className="group">
                    Aprende más sobre Facebook Ads en Cartagena
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* Qué esperar en el primer mes */}
        <section className="py-16 sm:py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  ¿Qué esperar en el <span className="gradient-text">primer mes</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  La transparencia es fundamental. Así funciona realmente el primer mes de pauta digital para que no te lleves sorpresas.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <FadeInView
                      key={item.semana}
                      direction="up"
                      delay={index * 0.2}
                    >
                      <div
                        className="relative flex gap-6"
                      >
                        {/* Timeline dot */}
                        <motion.div
                          className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full items-center justify-center z-10 border-2 border-primary/30"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                        >
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </motion.div>

                        <Card className="flex-1 bg-card border-border/50">
                          <CardContent className="p-6 space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="sm:hidden text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {index + 1}
                              </span>
                              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {item.semana}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{item.titulo}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.descripcion}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </FadeInView>
                  ))}
                </div>
              </div>

              <FadeInView direction="up" delay={0.8}>
                <Card className="mt-10 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">La realidad del primer mes</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          El mes 1 no es para romper récords de ventas. Es para construir la base de datos y entender qué funciona con tu audiencia en Cartagena. Los negocios que tienen paciencia en el primer mes y confían en el proceso suelen ver retornos significativos a partir del mes 2 y 3. Los que esperan milagros en 7 días terminan abandonando antes de tiempo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Glosario */}
        <section className="py-16 sm:py-20 bg-gradient-card relative">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="text-center space-y-4 mb-12">
                <div className="inline-block">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <BookOpen className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                    Referencia
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Glosario de <span className="gradient-text">términos</span> de pauta digital
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Los términos que vas a escuchar cuando empieces a pautar, explicados sin rodeos.
                </p>
              </div>
            </FadeInView>

            <StaggerContainer staggerDelay={0.05} className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {glosario.map((item) => (
                <StaggerItem key={item.termino}>
                  <ScaleOnHover>
                    <Card
                      className="bg-background/50 border-border/50"
                    >
                      <CardContent className="p-5 space-y-2">
                        <h3 className="font-semibold text-foreground text-sm">{item.termino}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.definicion}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Preguntas <span className="gradient-text">frecuentes</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Las dudas más comunes de negocios en Cartagena que quieren empezar a pautar
                </p>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <FadeInView key={index} direction="up" delay={index * 0.1}>
                    <AccordionItem
                      value={`faq-${index}`}
                      className="bg-card border border-border/50 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
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

        {/* CTA */}
        <section className="py-20">
          <div className="section-container">
            <FadeInView direction="up">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                  <FadeInView direction="up" delay={0.1}>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      ¿Listo para <span className="gradient-text">empezar a pautar</span>?
                    </h2>
                  </FadeInView>

                  <FadeInView direction="up" delay={0.2}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      En DT Growth Partners ayudamos a negocios en Cartagena a invertir en pauta digital de forma inteligente. Sin contratos largos, sin promesas irreales. Solo estrategia basada en datos y resultados medibles.
                    </p>
                  </FadeInView>

                  <FadeInView direction="up" delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="btn-primary group text-white text-lg px-8"
                        onClick={() => window.open('https://wa.me/573007189383?text=Hola%20DT%20Growth%20Partners,%20quiero%20empezar%20a%20pautar%20en%20redes%20sociales%20en%20Cartagena', '_blank')}
                      >
                        <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Hablar con un especialista
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </FadeInView>

                  <FadeInView direction="up" delay={0.4}>
                    <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground pt-2">
                      <Link to="/servicios/publicidad-digital-cartagena" className="hover:text-primary transition-colors underline underline-offset-4">
                        Publicidad digital en Cartagena
                      </Link>
                      <Link to="/servicios/meta-ads-cartagena" className="hover:text-primary transition-colors underline underline-offset-4">
                        Meta Ads en Cartagena
                      </Link>
                      <Link to="/servicios/facebook-ads-cartagena" className="hover:text-primary transition-colors underline underline-offset-4">
                        Facebook Ads en Cartagena
                      </Link>
                    </div>
                  </FadeInView>
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

export default PautaDigitalCartagena;
