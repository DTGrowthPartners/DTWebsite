import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, MessageCircle, Globe, Cpu, CheckCircle, Code, Bot, Megaphone } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover } from "@/components/animations";

const faqs = [
  {
    question: "¿Qué servicios ofrece una agencia de marketing digital en Cartagena?",
    answer: "Una agencia integral como DT Growth Partners ofrece publicidad digital (Meta Ads, Google Ads), desarrollo web profesional, chatbots con inteligencia artificial, automatización de procesos comerciales, WhatsApp Marketing y campañas publicitarias multicanal. La clave es que todos estos servicios trabajen de forma coordinada para maximizar los resultados de tu negocio.",
  },
  {
    question: "¿Cuánto cuesta contratar una agencia de marketing digital en Cartagena?",
    answer: "Depende del alcance de los servicios. Una gestión de campañas publicitarias va desde $1.500.000 COP/mes. Un proyecto de desarrollo web profesional puede ir desde $3.000.000 COP. Las automatizaciones y chatbots se cotizan según complejidad. En DT Growth Partners hacemos un diagnóstico gratuito para darte una cotización ajustada a lo que realmente necesitás.",
  },
  {
    question: "¿En cuánto tiempo se ven resultados con marketing digital?",
    answer: "Con campañas de pauta digital, los primeros leads pueden llegar en 48 a 72 horas. La optimización estable toma entre 4 y 8 semanas. Los proyectos de desarrollo web y automatización tardan entre 2 y 6 semanas en implementarse. El SEO es el canal más lento: los resultados orgánicos empiezan a notarse después de 3 a 6 meses.",
  },
  {
    question: "¿Por qué elegir una agencia local en Cartagena y no una de Bogotá o internacional?",
    answer: "El consumidor cartagenero tiene comportamientos específicos: temporadas turísticas, eventos locales, hábitos de compra influenciados por el clima y la cultura costeña. Una agencia local entiende estas dinámicas, puede reunirse presencialmente cuando es necesario y conoce el ecosistema empresarial de la ciudad. Eso se traduce en campañas más efectivas y menos presupuesto desperdiciado.",
  },
  {
    question: "¿DT Growth Partners solo trabaja con empresas grandes?",
    answer: "No. Trabajamos con negocios de todos los tamaños: desde emprendedores que están lanzando su primer producto digital hasta empresas consolidadas que necesitan escalar sus operaciones con tecnología. Lo importante es que tengás disposición a invertir estratégicamente y a trabajar de la mano con nuestro equipo.",
  },
  {
    question: "¿Qué diferencia a DT Growth Partners de otras agencias en Cartagena?",
    answer: "Tres cosas concretas: primero, no solo hacemos ads — desarrollamos sitios web, chatbots e integraciones tecnológicas. Segundo, usamos inteligencia artificial en análisis de datos, automatización de respuestas y optimización de campañas. Tercero, todo lo medimos con métricas de negocio reales (costo por lead, ROAS, tasa de conversión), no con métricas de vanidad como likes o alcance.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AgenciaMarketingDigitalCartagena = () => {
  const whatsappLink =
    "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20marketing%20digital";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Agencia de Marketing Digital en Cartagena"
        description="Agencia de marketing digital en Cartagena. No solo ads: desarrollo web, chatbots, automatización e IA. Enfoque integral para escalar tu negocio."
        slug="/servicios/agencia-marketing-digital-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeInView direction="up" delay={0}>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Agencia de marketing digital en Cartagena
            </span>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Agencia de Marketing Digital en Cartagena:{" "}
              <span className="text-primary">Tecnología, IA y Resultados</span>
            </h1>
          </FadeInView>
          <FadeInView direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4">
              La mayoría de agencias en Cartagena te ofrecen lo mismo: gestión de redes sociales y pauta
              digital. Nosotros vamos más allá. Combinamos publicidad digital con desarrollo web, chatbots
              inteligentes, automatizaciones y análisis de datos con IA para que tu negocio no solo
              consiga leads, sino que los convierta en clientes de forma sistemática.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground mb-8">
              Somos DT Growth Partners, una agencia de marketing digital en Cartagena que integra{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital
              </Link>
              ,{" "}
              <Link to="/servicios/desarrollo-web" className="text-primary underline hover:text-primary/80">
                desarrollo web
              </Link>{" "}
              y{" "}
              <Link to="/servicios/sistemas-automatizaciones" className="text-primary underline hover:text-primary/80">
                sistemas de automatización
              </Link>{" "}
              en una sola operación.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Hablemos por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Más que una agencia de ads */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Más que una agencia de ads
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              El problema con la mayoría de agencias en Cartagena es que solo saben hacer una cosa:
              crear campañas en Meta o Google y esperar que el presupuesto haga el trabajo. Eso no es
              marketing digital integral. Eso es gestión de pauta.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.15}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              En DT Growth Partners entendemos que un lead que llega por un anuncio necesita aterrizar
              en un sitio web que convierta, ser atendido por un chatbot que responda al instante,
              entrar a un flujo de seguimiento automatizado y ser medido en cada etapa del embudo.
              Si falla una sola de esas piezas, estás desperdiciando presupuesto.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Megaphone,
                title: "Performance Marketing",
                desc: "Campañas en Meta Ads y Google Ads con segmentación precisa, testing A/B constante y optimización basada en datos reales. No en corazonadas.",
              },
              {
                icon: Code,
                title: "Desarrollo Web y Landing Pages",
                desc: "Sitios web y landing pages diseñados para convertir visitantes en leads. Rápidos, optimizados para móviles y con seguimiento de conversiones integrado.",
              },
              {
                icon: Bot,
                title: "IA y Automatización",
                desc: "Chatbots inteligentes, flujos de WhatsApp automatizados y sistemas que trabajan 24/7 atendiendo, calificando y nutriendo leads mientras vos dormís.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInView direction="up" delay={0.2}>
            <p className="text-muted-foreground text-center text-sm mt-8">
              Esta combinación de tecnología y marketing es lo que nos diferencia de cualquier otra
              agencia de marketing digital en Cartagena. No vendemos servicios aislados: construimos
              sistemas de crecimiento.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Todos nuestros servicios */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Todos nuestros servicios
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Cada servicio está diseñado para funcionar de forma independiente o como parte de una
              estrategia integral. La magia está en combinarlos.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Publicidad Digital",
                desc: "Gestión profesional de campañas en Meta Ads y Google Ads. Segmentación avanzada, creativos optimizados y reportes transparentes con métricas de negocio.",
                link: "/servicios/publicidad-digital-cartagena",
                linkText: "Ver publicidad digital",
              },
              {
                icon: BarChart3,
                title: "Meta Ads",
                desc: "Especialistas en Facebook Ads e Instagram Ads. Embudos de conversión, remarketing dinámico y escalamiento progresivo de campañas rentables.",
                link: "/servicios/meta-ads-cartagena",
                linkText: "Ver Meta Ads",
              },
              {
                icon: Globe,
                title: "Desarrollo Web",
                desc: "Sitios web profesionales, landing pages de alta conversión y aplicaciones web. Diseño responsive, velocidad de carga optimizada y SEO técnico incluido.",
                link: "/servicios/desarrollo-web",
                linkText: "Ver desarrollo web",
              },
              {
                icon: Cpu,
                title: "Sistemas y Automatizaciones",
                desc: "Integraciones entre plataformas, CRMs automatizados, flujos de seguimiento y sistemas que eliminan tareas repetitivas de tu operación diaria.",
                link: "/servicios/sistemas-automatizaciones",
                linkText: "Ver automatizaciones",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Marketing",
                desc: "Chatbots inteligentes, campañas masivas segmentadas, flujos de atención automatizada y seguimiento de leads directamente en WhatsApp.",
                link: "/servicios/whatsapp-marketing-cartagena",
                linkText: "Ver WhatsApp Marketing",
              },
              {
                icon: Megaphone,
                title: "Campañas Publicitarias",
                desc: "Estrategias publicitarias multicanal para lanzamientos, temporadas altas y eventos. Planificación, ejecución y medición de resultados en tiempo real.",
                link: "/servicios/campanas-publicitarias-cartagena",
                linkText: "Ver campañas publicitarias",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <item.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.desc}</p>
                      <Link
                        to={item.link}
                        className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                      >
                        {item.linkText} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Nuestro enfoque: Tecnología e IA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Nuestro enfoque: Tecnología e IA
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              La inteligencia artificial no es un buzzword para nosotros. Es una herramienta que usamos
              todos los días para darles a nuestros clientes una ventaja competitiva real.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Chatbots con IA para atención inmediata",
                  desc: "Configuramos chatbots inteligentes que entienden las preguntas de tus clientes, responden con información precisa de tu negocio y califican leads automáticamente. Funcionan en WhatsApp, en tu sitio web y en redes sociales. No son bots genéricos: los entrenamos con tu información específica para que la experiencia del cliente sea natural.",
                },
                {
                  title: "Automatización de procesos comerciales",
                  desc: "Conectamos tus herramientas de marketing con tu CRM, tu WhatsApp y tus sistemas internos. Un lead que llena un formulario recibe un mensaje automático en WhatsApp, queda registrado en tu base de datos y se le asigna un vendedor. Todo sin intervención manual. Esto reduce el tiempo de respuesta de horas a segundos.",
                },
              ].map((item, i) => (
                <FadeInView key={i} direction="left" delay={i * 0.15}>
                  <div className="flex items-start gap-4">
                    <Cpu className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Análisis de datos con inteligencia artificial",
                  desc: "Usamos herramientas de IA para analizar el comportamiento de tus campañas, identificar patrones de conversión y tomar decisiones basadas en datos. Esto nos permite optimizar presupuestos más rápido, detectar audiencias de alto valor y predecir qué creativos van a funcionar antes de gastar el presupuesto completo.",
                },
                {
                  title: "Contenido y creativos asistidos por IA",
                  desc: "Generamos variaciones de copy, análisis de competencia y propuestas de segmentación con herramientas de IA. Esto nos permite iterar más rápido, probar más hipótesis y encontrar las combinaciones ganadoras en menos tiempo. La IA no reemplaza a nuestro equipo: lo potencia para que tu inversión rinda más.",
                },
              ].map((item, i) => (
                <FadeInView key={i} direction="right" delay={i * 0.15}>
                  <div className="flex items-start gap-4">
                    <Bot className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground text-center text-sm mt-10">
              La tecnología no reemplaza la estrategia humana. Pero una agencia que no usa tecnología avanzada
              en 2026 le está haciendo perder plata a sus clientes. Así de simple.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Nuestro proceso de trabajo
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              No improvisamos. Cada proyecto sigue un proceso claro de cinco etapas que nos permite
              entregar resultados predecibles y medibles.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Analizamos tu situación actual: canales digitales, competencia, métricas existentes, público objetivo y objetivos de negocio. Identificamos oportunidades y cuellos de botella.",
              },
              {
                step: "02",
                title: "Estrategia",
                desc: "Diseñamos un plan de acción con canales, presupuestos, timelines y KPIs claros. Definimos qué servicios necesitás y cómo se integran entre sí.",
              },
              {
                step: "03",
                title: "Implementación",
                desc: "Ejecutamos la estrategia: configuramos campañas, desarrollamos sitios web, activamos chatbots y conectamos automatizaciones. Todo con plazos definidos.",
              },
              {
                step: "04",
                title: "Medición",
                desc: "Monitoreamos métricas en tiempo real: costo por lead, tasa de conversión, ROAS, volumen de leads calificados. Reportes semanales con datos reales, no capturas editadas.",
              },
              {
                step: "05",
                title: "Escalamiento",
                desc: "Una vez identificamos las campañas y canales rentables, escalamos la inversión de forma progresiva. Duplicamos lo que funciona y cortamos lo que no.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <p className="text-3xl font-bold text-primary mb-3">{item.step}</p>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground text-center text-sm mt-8">
              Este proceso se aplica tanto a proyectos puntuales (un sitio web, un chatbot) como a
              estrategias de marketing digital integrales a largo plazo.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ¿Por qué elegir DTGP? */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              ¿Por qué elegir DT Growth Partners?
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              En Cartagena hay agencias de marketing digital en cada esquina. Esto es lo que nos
              hace diferentes y por qué nuestros clientes se quedan trabajando con nosotros.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Desarrollo propio, no tercerizado",
                desc: "Tenemos equipo de desarrollo web interno. No tercerizamos a freelancers desconocidos. Eso significa control de calidad, cumplimiento de plazos y soporte directo cuando lo necesitás.",
              },
              {
                icon: Bot,
                title: "IA integrada en todo lo que hacemos",
                desc: "Usamos inteligencia artificial para chatbots, análisis de datos, optimización de campañas y generación de insights. No es un servicio extra: es parte de nuestra operación diaria.",
              },
              {
                icon: BarChart3,
                title: "Métricas de negocio, no de vanidad",
                desc: "Reportamos costo por lead, costo por venta, ROAS y tasa de conversión. Si no podemos medir el impacto en tu facturación, no lo vendemos como resultado.",
              },
              {
                icon: Target,
                title: "Conocemos el mercado cartagenero",
                desc: "Vivimos en Cartagena. Entendemos las temporadas turísticas, el comportamiento del consumidor costeño, la competencia local y las oportunidades que otros no ven.",
              },
              {
                icon: TrendingUp,
                title: "Enfoque integral, no servicios sueltos",
                desc: "No vendemos campañas de ads desconectadas de tu sitio web o tu WhatsApp. Diseñamos sistemas completos donde cada pieza potencia a la otra. El resultado: más conversiones con la misma inversión.",
              },
              {
                icon: MessageCircle,
                title: "Comunicación directa y constante",
                desc: "Hablamos por WhatsApp, hacemos llamadas semanales y estamos disponibles cuando necesitás una respuesta rápida. Sin tickets de soporte ni esperas de 48 horas. Tu negocio no puede esperar.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInView direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-2">
                Conocé más sobre nuestros servicios de{" "}
                <Link to="/servicios/meta-ads-cartagena" className="text-primary underline hover:text-primary/80">
                  Meta Ads en Cartagena
                </Link>{" "}
                o de{" "}
                <Link to="/servicios/whatsapp-marketing-cartagena" className="text-primary underline hover:text-primary/80">
                  WhatsApp Marketing
                </Link>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Resultados que hablan por nosotros
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Estos son números reales de proyectos ejecutados para negocios en Cartagena y la Costa
              Caribe. No promesas ni proyecciones: resultados medidos y verificables.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 2000, prefix: "+$", suffix: "M", label: "COP generados para clientes", sub: "en ventas atribuidas a campañas" },
              { value: 4.5, prefix: "", suffix: "x", label: "ROAS promedio", sub: "retorno sobre inversión en pauta", decimals: 1 },
              { value: 60, prefix: "-", suffix: "%", label: "Reducción en CAC", sub: "costo de adquisición de clientes" },
              { value: 150, prefix: "+", suffix: "%", label: "Aumento en leads", sub: "en los primeros 90 días promedio" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={item.value} prefix={item.prefix} suffix={item.suffix} decimals={item.decimals || 0} />
                  </p>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground text-center text-sm mt-8">
              Estos resultados se logran combinando{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital
              </Link>
              , desarrollo web optimizado y automatizaciones inteligentes. No es magia: es metodología y tecnología.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Preguntas frecuentes sobre marketing digital en Cartagena
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Respondemos las dudas más comunes que tienen los empresarios de Cartagena antes de
              contratar una agencia de marketing digital.
            </p>
          </FadeInView>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <FadeInView key={i} direction="up" delay={i * 0.1}>
                <AccordionItem value={`faq-${i}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para escalar tu negocio con tecnología y marketing digital?
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
              Hablemos directo por WhatsApp. Te hacemos un diagnóstico gratuito de tu situación
              actual y te decimos con honestidad qué servicios necesitás y cuáles no. Sin
              compromiso, sin presión de venta.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.2}>
            <p className="text-muted-foreground text-sm mb-8">
              Explorá nuestros servicios de{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital en Cartagena
              </Link>
              ,{" "}
              <Link to="/servicios/meta-ads-cartagena" className="text-primary underline hover:text-primary/80">
                Meta Ads
              </Link>
              ,{" "}
              <Link to="/servicios/desarrollo-web" className="text-primary underline hover:text-primary/80">
                desarrollo web
              </Link>{" "}
              o{" "}
              <Link to="/servicios/sistemas-automatizaciones" className="text-primary underline hover:text-primary/80">
                automatizaciones
              </Link>.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.3}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-10 py-7">
                Escribinos por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Respondemos en menos de 2 horas en horario laboral.
            </p>
          </FadeInView>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgenciaMarketingDigitalCartagena;
