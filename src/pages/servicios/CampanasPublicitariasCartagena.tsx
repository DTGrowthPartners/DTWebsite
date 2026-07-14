import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Clock, Zap, CheckCircle, FileText, Settings, LineChart } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover } from "@/components/animations";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "¿Cuánto cuesta una campaña publicitaria en Cartagena?",
    answer: "El costo tiene dos componentes: la gestión profesional y el presupuesto de pauta. La gestión mensual oscila entre $1.200.000 y $4.000.000 COP dependiendo de la cantidad de campañas y plataformas. El presupuesto de pauta lo definimos según tus objetivos, pero recomendamos un mínimo de $800.000 COP mensuales para obtener datos suficientes que permitan optimizar. En DT Growth Partners te mostramos exactamente cómo se distribuye cada peso."
  },
  {
    question: "¿En cuánto tiempo se ven resultados con una campaña publicitaria?",
    answer: "Los primeros leads pueden llegar en las primeras 48 horas. Sin embargo, una campaña necesita entre 2 y 4 semanas de fase de aprendizaje para que los algoritmos identifiquen a tu audiencia ideal. A partir del segundo mes es donde se ven los resultados consistentes: menor costo por lead, mejor calidad de prospectos y un ROAS creciente. Nuestros clientes que mantienen campañas por 3 meses o más logran reducir su CPL hasta en un 55%."
  },
  {
    question: "¿Qué plataformas usan para las campañas publicitarias?",
    answer: "Trabajamos principalmente con Meta Ads (Facebook, Instagram y WhatsApp) y Google Ads. La elección de plataformas depende de tu tipo de negocio y tu audiencia. Para negocios de servicios en Cartagena, Meta Ads suele ser el canal más efectivo por la segmentación geográfica y el botón de WhatsApp. Para negocios que capturan demanda existente (gente buscando activamente), Google Ads complementa la estrategia."
  },
  {
    question: "¿Qué pasa si la campaña no genera resultados?",
    answer: "Antes de escalar cualquier campaña, hacemos pruebas con presupuesto controlado. Si una campaña no genera resultados en las primeras dos semanas, ajustamos creatividades, audiencias y objetivos. Si después de los ajustes no hay mejora, te lo decimos con honestidad y proponemos un enfoque diferente. No vamos a quemar tu presupuesto en algo que no funciona. Nuestra retención de clientes supera el 85% porque trabajamos con transparencia."
  },
  {
    question: "¿Necesito tener página web para hacer campañas publicitarias?",
    answer: "No es obligatorio, pero sí recomendable. Sin página web, podemos crear campañas con objetivo de mensajes a WhatsApp o formularios nativos en Meta. Con página web, podemos instalar el Pixel de seguimiento, hacer retargeting y medir conversiones con mayor precisión. Si no tenés web, te asesoramos sobre landing pages optimizadas que pueden aumentar tu tasa de conversión entre un 20% y un 40%."
  },
  {
    question: "¿Cómo sé que mis campañas están funcionando?",
    answer: "Cada mes recibís un reporte detallado con métricas de negocio: leads generados, costo por lead, ROAS, inversión total y desglose por campaña. Además, tenés acceso 24/7 a tus cuentas publicitarias para verificar los datos en tiempo real. No trabajamos con información oculta. También hacemos una reunión mensual para revisar resultados y planificar el siguiente mes."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const metodologia = [
  {
    step: "01",
    icon: Target,
    title: "Investigación y diagnóstico",
    description: "Analizamos tu negocio, tu competencia en Cartagena, tu audiencia y tus canales actuales. Revisamos campañas anteriores (si las hay) para identificar qué funcionó y qué no. Definimos objetivos concretos: cantidad de leads, costo por adquisición objetivo y ROAS esperado."
  },
  {
    step: "02",
    icon: FileText,
    title: "Brief creativo y estrategia",
    description: "Diseñamos la estructura de campañas: audiencias, presupuestos por conjunto de anuncios, formatos creativos y copys. Definimos el embudo: qué ve la persona en cada etapa (descubrimiento, consideración, conversión). Preparamos entre 3 y 6 variaciones de creatividades para pruebas A/B."
  },
  {
    step: "03",
    icon: Settings,
    title: "Configuración técnica",
    description: "Instalamos y verificamos el Pixel de Meta, la API de Conversiones y los eventos de seguimiento. Configuramos audiencias personalizadas, Lookalike y exclusiones. Estructuramos las campañas en el Business Manager con nomenclatura clara para facilitar el análisis posterior."
  },
  {
    step: "04",
    icon: Zap,
    title: "Lanzamiento controlado",
    description: "Activamos las campañas con presupuesto inicial controlado para validar hipótesis. Monitoreamos las primeras 72 horas de cerca: impresiones, CTR, costo por resultado y calidad de leads. Ajustamos en tiempo real si detectamos problemas de segmentación o creatividad."
  },
  {
    step: "05",
    icon: LineChart,
    title: "Optimización basada en datos",
    description: "Pausamos los anuncios que no convierten y escalamos los ganadores. Ajustamos pujas, audiencias y distribución de presupuesto. Creamos nuevas iteraciones de creatividades basadas en los datos de rendimiento. Este ciclo se repite semanalmente."
  },
  {
    step: "06",
    icon: BarChart3,
    title: "Reporte y planificación",
    description: "Entregamos un reporte mensual con métricas de negocio, no métricas de vanidad. Analizamos tendencias, identificamos oportunidades y planificamos la estrategia del siguiente mes. Reunión de revisión incluida para que entiendas cada número."
  }
];

const metricas = [
  {
    icon: TrendingUp,
    nombre: "ROAS",
    titulo: "Return on Ad Spend",
    descripcion: "Cuántos pesos generás por cada peso invertido en publicidad. Un ROAS de 5x significa que por cada $100.000 COP invertidos, tu negocio genera $500.000 COP en ingresos. Es la métrica principal para medir rentabilidad."
  },
  {
    icon: Target,
    nombre: "CPL",
    titulo: "Costo por Lead",
    descripcion: "Cuánto cuesta conseguir un prospecto interesado. En Cartagena, un CPL saludable para negocios de servicios oscila entre $2.000 y $10.000 COP. Optimizamos continuamente para reducirlo sin sacrificar la calidad del lead."
  },
  {
    icon: BarChart3,
    nombre: "CPA",
    titulo: "Costo por Adquisición",
    descripcion: "Cuánto cuesta convertir un lead en cliente real. A diferencia del CPL, el CPA mide la acción final: una venta, una cita agendada o un contrato firmado. Es la métrica que conecta la publicidad con los ingresos reales de tu negocio."
  },
  {
    icon: MessageCircle,
    nombre: "CTR",
    titulo: "Click-Through Rate",
    descripcion: "Porcentaje de personas que hacen clic en tu anuncio después de verlo. Un CTR alto indica que el mensaje y la creatividad resuenan con la audiencia. En Meta Ads, un CTR superior al 2% se considera bueno para campañas locales."
  },
  {
    icon: Clock,
    nombre: "Frecuencia",
    titulo: "Promedio de veces que una persona ve tu anuncio",
    descripcion: "Controlamos que la frecuencia no supere 3-4 veces por semana para evitar fatiga publicitaria. Cuando la frecuencia sube demasiado, el costo por resultado aumenta y la audiencia empieza a ignorar los anuncios."
  },
  {
    icon: CheckCircle,
    nombre: "Quality Score",
    titulo: "Calificación de calidad del anuncio",
    descripcion: "Meta y Google asignan un puntaje de calidad a cada anuncio basado en relevancia, experiencia post-clic y tasa de interacción. Un Quality Score alto reduce el costo por clic y mejora la posición del anuncio."
  }
];

const CampanasPublicitariasCartagena = () => {
  const whatsappLink =
    "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20campañas%20publicitarias";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Campañas Publicitarias en Cartagena"
        description="Creamos campañas publicitarias en Cartagena enfocadas en resultados. Metodología probada, optimización continua y reportes mensuales detallados."
        slug="/servicios/campanas-publicitarias-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeInView direction="up" delay={0}>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Campañas publicitarias en Cartagena
            </span>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Campañas Publicitarias en Cartagena:{" "}
              <span className="text-primary">Resultados, No Promesas</span>
            </h1>
          </FadeInView>
          <FadeInView direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4">
              Diseñamos, ejecutamos y optimizamos campañas publicitarias para negocios en Cartagena
              con una obsesión: que cada peso invertido genere retorno medible. Sin contratos de
              permanencia, sin métricas de vanidad, sin excusas. Solo datos, estrategia y resultados.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground mb-8">
              Somos especialistas en{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital en Cartagena
              </Link>{" "}
              con experiencia gestionando campañas en{" "}
              <Link to="/servicios/meta-ads-cartagena" className="text-primary underline hover:text-primary/80">
                Meta Ads
              </Link>{" "}
              y Google Ads para negocios locales.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Solicitar diagnóstico gratis <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/servicios/agencia-publicidad-cartagena">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Conocé nuestra agencia
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Nuestra Metodología */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Nuestra metodología: de la estrategia a los resultados
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              No improvisamos. Cada campaña publicitaria que lanzamos en Cartagena sigue un proceso
              de 6 etapas que hemos refinado gestionando más de $500 millones de pesos en pauta digital.
              Esta metodología es lo que separa campañas que queman presupuesto de campañas que generan clientes.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metodologia.map((paso) => (
              <StaggerItem key={paso.step}>
                <ScaleOnHover>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-bold text-primary/30">{paso.step}</span>
                        <paso.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{paso.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{paso.description}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline típico */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Timeline típico de una campaña publicitaria
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Entender los tiempos es clave para tener expectativas realistas. No existe la campaña
              que genera miles de clientes en 3 días. Esto es lo que pasa realmente, semana a semana.
            </p>
          </FadeInView>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                periodo: "Semana 1",
                titulo: "Setup y lanzamiento",
                color: "from-primary/20 to-primary/5",
                items: [
                  "Diagnóstico de negocio y definición de objetivos",
                  "Configuración técnica: Pixel, eventos, audiencias",
                  "Creación de creatividades y copys",
                  "Lanzamiento de campañas con presupuesto de prueba",
                  "Primeros leads llegan entre el día 2 y 4"
                ]
              },
              {
                periodo: "Semana 2-3",
                titulo: "Fase de aprendizaje",
                color: "from-yellow-500/20 to-yellow-500/5",
                items: [
                  "El algoritmo recopila datos sobre quién interactúa con tus anuncios",
                  "Analizamos calidad de leads: ¿están comprando o solo preguntando?",
                  "Pruebas A/B de creatividades y audiencias",
                  "Ajustes de pujas y distribución de presupuesto",
                  "El CPL puede ser más alto de lo esperado — es normal"
                ]
              },
              {
                periodo: "Semana 4",
                titulo: "Primera optimización fuerte",
                color: "from-green-500/20 to-green-500/5",
                items: [
                  "Datos suficientes para tomar decisiones con confianza",
                  "Pausamos lo que no funciona, escalamos lo que sí",
                  "Primer reporte con métricas de negocio reales",
                  "Reunión de revisión: qué funcionó, qué ajustar",
                  "CPL empieza a estabilizarse o reducirse"
                ]
              },
              {
                periodo: "Mes 2 en adelante",
                titulo: "Escalamiento y optimización continua",
                color: "from-primary/20 to-primary/5",
                items: [
                  "Aumento gradual de presupuesto en campañas ganadoras",
                  "Nuevas audiencias Lookalike basadas en los mejores clientes",
                  "Retargeting a personas que interactuaron pero no convirtieron",
                  "Renovación de creatividades para evitar fatiga publicitaria",
                  "Reducción progresiva del CPL (hasta 55% menos vs. mes 1)"
                ]
              }
            ].map((fase, index) => (
              <FadeInView key={fase.periodo} direction="up" delay={index * 0.15}>
                <div className={`rounded-xl p-6 bg-gradient-to-r ${fase.color} border border-border`}>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    >
                      <Clock className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span className="text-primary font-bold text-lg">{fase.periodo}</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="font-semibold">{fase.titulo}</span>
                  </div>
                  <ul className="space-y-2 ml-8">
                    {fase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas que medimos */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Métricas que medimos en cada campaña
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              No medimos likes ni alcance como indicador de éxito. Estas son las métricas reales
              que determinan si tu campaña publicitaria en Cartagena está generando dinero o quemándolo.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricas.map((metrica) => (
              <StaggerItem key={metrica.nombre}>
                <ScaleOnHover>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <metrica.icon className="h-6 w-6 text-primary" />
                        <div>
                          <span className="font-bold text-lg">{metrica.nombre}</span>
                          <p className="text-xs text-muted-foreground">{metrica.titulo}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{metrica.descripcion}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Optimización continua */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Optimización continua: lo que hacemos para mejorar tus campañas
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Lanzar una campaña es solo el inicio. La diferencia entre una campaña mediocre y una
              que genera clientes constantemente está en la optimización. Este es nuestro ciclo de trabajo.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView direction="left" delay={0}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Diariamente</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Revisión de gasto vs. presupuesto asignado",
                    "Monitoreo de CPL y CPA en tiempo real",
                    "Detección de anuncios con rendimiento bajo",
                    "Verificación de que el tracking funcione correctamente",
                    "Respuesta a alertas de la plataforma (rechazos, límites)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.15}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Semanalmente</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Análisis de rendimiento por audiencia y creatividad",
                    "Pruebas A/B: nuevos copys, imágenes y formatos",
                    "Redistribución de presupuesto hacia lo que funciona",
                    "Ajuste de pujas según día y hora de mejor rendimiento",
                    "Actualización de audiencias de retargeting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Mensualmente</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Reporte completo con métricas de negocio",
                    "Análisis de tendencias y estacionalidad local",
                    "Renovación de creatividades para evitar fatiga",
                    "Creación de nuevas audiencias Lookalike",
                    "Planificación estratégica del siguiente mes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Reportes mensuales */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Reportes mensuales: sabés exactamente qué pasa con tu inversión
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Nada de PDFs genéricos con gráficos bonitos y cero información útil. Nuestros reportes
              están diseñados para que tomes decisiones de negocio, no para que los guardes en una carpeta.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                titulo: "Resumen ejecutivo",
                descripcion: "Inversión total, leads generados, costo por lead, ROAS y comparativa con el mes anterior. Todo en una página para que entiendas el panorama en 2 minutos."
              },
              {
                titulo: "Desglose por campaña",
                descripcion: "Rendimiento individual de cada campaña activa: cuánto se invirtió, cuántos leads generó, cuál fue el CPA y qué audiencias respondieron mejor."
              },
              {
                titulo: "Análisis de creatividades",
                descripcion: "Qué anuncios funcionaron, cuáles no y por qué. Incluye datos de CTR, costo por clic e interacción por formato (imagen, video, carrusel)."
              },
              {
                titulo: "Calidad de leads",
                descripcion: "No todos los leads son iguales. Analizamos cuántos se convirtieron en clientes reales, cuántos estaban calificados y cuántos eran curiosos sin intención de compra."
              },
              {
                titulo: "Recomendaciones del mes siguiente",
                descripcion: "Basado en los datos, proponemos ajustes concretos: nuevas audiencias a probar, cambios de presupuesto, nuevos formatos creativos y oportunidades de escalamiento."
              },
              {
                titulo: "Acceso en tiempo real",
                descripcion: "Además del reporte mensual, tenés acceso 24/7 al Business Manager y a las cuentas publicitarias. Podés verificar cualquier dato en cualquier momento sin depender de nosotros."
              }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">{item.titulo}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.descripcion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Resultados reales de campañas en Cartagena
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Estos son promedios reales de campañas publicitarias que gestionamos para negocios
              en Cartagena. No son proyecciones: son datos de cuentas publicitarias verificables.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: 5.2, prefix: "", suffix: "x", label: "ROAS promedio", desc: "después de 3 meses", decimals: 1 },
              { value: 3800, prefix: "$", suffix: "", label: "CPL promedio", desc: "en servicios profesionales", decimals: 0 },
              { value: 55, prefix: "", suffix: "%", label: "Reducción de CPL", desc: "del mes 1 al mes 3", decimals: 0 },
              { value: 85, prefix: "", suffix: "%", label: "Retención de clientes", desc: "después de 6 meses", decimals: 0 }
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 rounded-xl bg-muted/50 border border-border">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="font-semibold text-sm">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {[
              {
                sector: "Clínica estética",
                resultado: "De 8 a 47 consultas mensuales",
                detalle: "CPL reducido de $12.000 a $3.200 COP en 10 semanas. Campañas de WhatsApp Ads con segmentación por barrio y rango de edad."
              },
              {
                sector: "Restaurante en Bocagrande",
                resultado: "ROAS de 7.3x en temporada alta",
                detalle: "Campañas de alcance + conversión para reservas. Creatividades con video corto generaron 3x más interacción que imágenes estáticas."
              },
              {
                sector: "Academia de idiomas",
                resultado: "142 leads calificados en un mes",
                detalle: "Formularios nativos en Meta con preguntas de calificación. Tasa de conversión a matrícula del 18%. CPA final de $45.000 COP."
              }
            ].map((caso, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">{caso.sector}</span>
                      <h3 className="font-bold text-lg mt-2 mb-3">{caso.resultado}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{caso.detalle}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Preguntas frecuentes sobre campañas publicitarias en Cartagena
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center mb-12">
              Las dudas más comunes que nos hacen los negocios en Cartagena antes de iniciar campañas.
            </p>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, i) => (
              <FadeInView key={i} direction="up" delay={i * 0.1}>
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
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
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <FadeInView direction="up">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para lanzar campañas que generen clientes reales?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Escribinos por WhatsApp y te hacemos un diagnóstico gratuito de tu negocio. Sin compromiso,
              sin presión de venta. Si vemos oportunidad, te proponemos una estrategia. Si no, te lo
              decimos con honestidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary hover:underline">
                Publicidad digital en Cartagena
              </Link>
              <span>|</span>
              <Link to="/servicios/meta-ads-cartagena" className="text-primary hover:underline">
                Meta Ads en Cartagena
              </Link>
              <span>|</span>
              <Link to="/servicios/agencia-publicidad-cartagena" className="text-primary hover:underline">
                Agencia de publicidad en Cartagena
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>

      <Footer />
    </div>
  );
};

export default CampanasPublicitariasCartagena;
