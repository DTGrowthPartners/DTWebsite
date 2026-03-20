import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, TrendingUp, BarChart3, Shield, Users, Award, CheckCircle, AlertTriangle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, AnimatedCounter, ScaleOnHover, FloatingElement } from "@/components/animations";

const faqs = [
  {
    question: "¿Cuánto cobra una agencia de publicidad en Cartagena?",
    answer: "Los precios varían según el alcance del servicio. Una agencia profesional en Cartagena cobra entre $1.500.000 y $5.000.000 COP mensuales por gestión de campañas, sin incluir el presupuesto de pauta. Desconfiá de precios demasiado bajos: suelen significar trabajo automatizado sin estrategia real.",
  },
  {
    question: "¿Qué diferencia hay entre una agencia de publicidad y una de marketing digital?",
    answer: "Una agencia de publicidad tradicional se enfoca en creatividad y medios masivos (vallas, radio, TV). Una agencia de marketing digital trabaja canales online: Meta Ads, Google Ads, SEO, email marketing. En DT Growth Partners combinamos estrategia publicitaria con ejecución digital medible.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados con una agencia?",
    answer: "Con campañas de pauta digital, los primeros leads pueden llegar en 48 horas. Sin embargo, para optimizar campañas y alcanzar un ROAS estable necesitás entre 4 y 8 semanas. Cualquier agencia que prometa resultados inmediatos sin fase de pruebas no está siendo honesta.",
  },
  {
    question: "¿Necesito una agencia o puedo hacer publicidad yo mismo?",
    answer: "Podés hacerlo vos mismo si tenés tiempo para aprender, probar y optimizar. El problema es que los errores cuestan plata: segmentaciones mal hechas, creativos que no convierten, presupuesto mal distribuido. Una agencia con experiencia te ahorra esos costos de aprendizaje y acelera resultados.",
  },
  {
    question: "¿Cómo sé si mi agencia actual está haciendo buen trabajo?",
    answer: "Pedí acceso completo a las plataformas publicitarias, exigí reportes con métricas de negocio (costo por lead, ROAS, costo por venta) y no solo métricas de vanidad (alcance, impresiones). Si tu agencia se niega a dar acceso o solo muestra likes, es una señal de alerta seria.",
  },
  {
    question: "¿DT Growth Partners trabaja solo con empresas grandes?",
    answer: "No. Trabajamos con negocios de todos los tamaños en Cartagena: desde emprendedores que están lanzando su primer producto hasta empresas consolidadas que quieren escalar. Lo importante es tener disposición a invertir en pauta y trabajar de la mano con nosotros en la estrategia.",
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

const AgenciaPublicidadCartagena = () => {
  const whatsappLink =
    "https://wa.me/573007189383?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20publicidad";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Agencia de Publicidad en Cartagena"
        description="Agencia de publicidad en Cartagena con enfoque en resultados. Comparamos: agencia vs freelancer vs in-house. Conocemos el mercado cartagenero."
        slug="/servicios/agencia-publicidad-cartagena"
        schemaMarkup={faqSchema}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeInView direction="up" delay={0}>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Agencia de publicidad en Cartagena
            </span>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Agencia de Publicidad en Cartagena:{" "}
              <span className="text-primary">Tu Aliado para Crecer</span>
            </h1>
          </FadeInView>
          <FadeInView direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4">
              Elegir una agencia de publicidad en Cartagena no debería ser un salto de fe.
              Necesitás un equipo que conozca el mercado local, que te muestre números reales
              y que no te amarre con contratos eternos. Acá te contamos qué buscar, qué evitar
              y por qué trabajar con nosotros es diferente.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-muted-foreground mb-8">
              Somos{" "}
              <Link to="/servicios/agencia-marketing-digital-cartagena" className="text-primary underline hover:text-primary/80">
                agencia de marketing digital en Cartagena
              </Link>{" "}
              especializados en{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital
              </Link>{" "}
              con resultados medibles.
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

      {/* Qué buscar en una agencia */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              ¿Qué buscar en una agencia de publicidad?
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Antes de contratar, evaluá estos criterios. No todas las agencias en Cartagena
              trabajan igual, y la diferencia entre una buena y una mala puede costarte millones.
            </p>
          </FadeInView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Transparencia en métricas",
                desc: "Acceso completo a tus cuentas publicitarias. Reportes con datos reales, no capturas editadas. Si no te dan acceso, algo están ocultando.",
              },
              {
                icon: Target,
                title: "Conocimiento del mercado local",
                desc: "No es lo mismo vender en Bogotá que en Cartagena. El comportamiento del consumidor cartagenero tiene particularidades que una agencia local entiende.",
              },
              {
                icon: Shield,
                title: "Sin contratos de permanencia abusivos",
                desc: "Los contratos a 12 meses sin cláusula de salida son una trampa. Una agencia que confía en su trabajo no necesita amarrarte.",
              },
              {
                icon: Users,
                title: "Equipo dedicado, no bots",
                desc: "Preguntá quién va a gestionar tu cuenta. Necesitás un estratega real que conozca tu negocio, no un software automatizado.",
              },
              {
                icon: TrendingUp,
                title: "Casos de éxito verificables",
                desc: "Pedí resultados concretos: números, contexto, periodo. Los testimonios genéricos sin datos no prueban nada.",
              },
              {
                icon: Award,
                title: "Enfoque en retorno de inversión",
                desc: "La métrica que importa es cuánto ganás por cada peso invertido. Si la agencia solo habla de likes y alcance, no entiende tu negocio.",
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
        </div>
      </section>

      {/* Agencia vs Freelancer vs In-house */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Agencia vs Freelancer vs In-house
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Cada opción tiene ventajas y desventajas reales. Acá te lo explicamos sin sesgo
              para que tomés la mejor decisión para tu negocio en Cartagena.
            </p>
          </FadeInView>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {/* Agencia */}
            <StaggerItem>
              <ScaleOnHover>
                <Card className="bg-card/50 border-primary/40 relative">
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Recomendado
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">Agencia</h3>
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-green-400">Ventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Equipo multidisciplinario (estrategia, diseño, pauta, copy)",
                          "Experiencia con múltiples industrias y presupuestos",
                          "Herramientas profesionales incluidas en el servicio",
                          "Continuidad operativa si alguien del equipo sale",
                          "Metodologías probadas y procesos establecidos",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-red-400 pt-2">Desventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Mayor inversión mensual que un freelancer",
                          "Puede haber menos flexibilidad en horarios",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">
                      <span className="font-semibold text-foreground">Costo típico:</span>{" "}
                      $1.500.000 - $5.000.000 COP/mes
                    </p>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>

            {/* Freelancer */}
            <StaggerItem>
              <ScaleOnHover>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold mb-4">Freelancer</h3>
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-green-400">Ventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Costo más bajo",
                          "Comunicación directa y personalizada",
                          "Flexibilidad en alcance del trabajo",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-red-400 pt-2">Desventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Una sola persona = un solo punto de falla",
                          "Capacidad limitada si tu negocio escala",
                          "No tiene equipo de respaldo si se enferma o se va",
                          "Puede manejar demasiados clientes a la vez",
                          "Sin procesos estandarizados ni metodología",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">
                      <span className="font-semibold text-foreground">Costo típico:</span>{" "}
                      $500.000 - $1.500.000 COP/mes
                    </p>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>

            {/* In-house */}
            <StaggerItem>
              <ScaleOnHover>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold mb-4">In-house</h3>
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-green-400">Ventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Control total sobre la operación",
                          "Dedicación exclusiva a tu marca",
                          "Conocimiento profundo del negocio",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-red-400 pt-2">Desventajas:</p>
                      <ul className="space-y-2">
                        {[
                          "Costo más alto (salario + prestaciones + herramientas)",
                          "Necesitás contratar mínimo 2-3 personas para cubrir todo",
                          "Curva de aprendizaje costosa si no tienen experiencia",
                          "Visión limitada a una sola industria",
                          "Riesgo alto si el empleado renuncia",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">
                      <span className="font-semibold text-foreground">Costo típico:</span>{" "}
                      $4.000.000 - $12.000.000 COP/mes (por persona)
                    </p>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Señales de una mala agencia */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Señales de una mala agencia de publicidad
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              En Cartagena hay agencias serias y otras que solo quieren cobrarte. Estas son
              las red flags que debés identificar antes de firmar cualquier contrato.
            </p>
          </FadeInView>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
            {[
              {
                flag: "No te dan acceso a las cuentas publicitarias",
                detail:
                  "Tu cuenta de Meta Ads, Google Ads o cualquier plataforma debe estar a tu nombre. Si la agencia crea las cuentas a nombre de ellos, te están secuestrando los datos y el historial de optimización.",
              },
              {
                flag: "Prometen resultados garantizados",
                detail:
                  "Nadie puede garantizar un número exacto de ventas o leads. El marketing digital depende de variables como el producto, el precio, la temporada y la competencia. Una agencia honesta te da proyecciones basadas en datos, no promesas mágicas.",
              },
              {
                flag: "Solo reportan métricas de vanidad",
                detail:
                  "Si el reporte mensual solo dice \"alcanzamos 50.000 personas\" pero no menciona costo por lead, tasa de conversión ni retorno de inversión, están ocultando la falta de resultados reales.",
              },
              {
                flag: "Contratos de permanencia a 12 meses sin salida",
                detail:
                  "Un contrato largo sin cláusula de salida solo beneficia a la agencia. Si confían en su trabajo, no necesitan amarrarte. En DT Growth Partners trabajamos con contratos flexibles porque nuestros resultados hablan solos.",
              },
              {
                flag: "No tienen especialización clara",
                detail:
                  "Una agencia que hace \"de todo\" (branding, eventos, redes, web, SEO, publicidad, diseño de interiores) probablemente no hace nada bien. Buscá especialistas en lo que necesitás.",
              },
              {
                flag: "No conocen el mercado de Cartagena",
                detail:
                  "El comportamiento del consumidor en Cartagena es diferente al de Bogotá o Medellín. Las temporadas turísticas, los eventos locales, el poder adquisitivo y las costumbres de compra afectan directamente las campañas. Una agencia que no entiende esto va a desperdiciar tu plata.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <FadeInView direction="left" delay={i * 0.05}>
                  <ScaleOnHover>
                    <Card className="bg-card/50 border-red-500/20 hover:border-red-500/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-6 w-6 text-red-400 mt-1 shrink-0" />
                          <div>
                            <h3 className="text-lg font-bold mb-2">{item.flag}</h3>
                            <p className="text-muted-foreground text-sm">{item.detail}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </FadeInView>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Por qué elegir DT Growth Partners */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              ¿Por qué elegir DT Growth Partners?
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              No somos la única agencia en Cartagena, pero sí somos diferentes. Esto es lo que
              nos distingue y por qué nuestros clientes se quedan.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-8">
            <StaggerContainer className="space-y-6">
              {[
                {
                  title: "Conocemos Cartagena de verdad",
                  desc: "Vivimos acá. Entendemos las temporadas altas y bajas, el perfil del consumidor local, la competencia en cada sector y cómo se mueve el mercado en la ciudad amurallada, Bocagrande, Manga y los barrios del suroccidente.",
                },
                {
                  title: "100% transparentes con tus datos",
                  desc: "Las cuentas publicitarias siempre están a tu nombre. Te damos acceso total a métricas en tiempo real. No ocultamos nada porque no necesitamos hacerlo.",
                },
                {
                  title: "Especializados en publicidad digital que vende",
                  desc: "No hacemos branding abstracto ni campañas \"de awareness\" que no se pueden medir. Nos enfocamos en Meta Ads, Google Ads y WhatsApp Marketing con un solo objetivo: que tu inversión genere retorno.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer className="space-y-6">
              {[
                {
                  title: "Sin contratos de permanencia",
                  desc: "Trabajamos mes a mes. Si los resultados no te convencen, podés irte sin penalidad. Esa es nuestra forma de demostrarte que confiamos en lo que hacemos.",
                },
                {
                  title: "Comunicación directa y constante",
                  desc: "Nada de tickets de soporte ni respuestas en 48 horas. Hablamos por WhatsApp, hacemos llamadas semanales y estamos disponibles cuando necesitás una respuesta rápida.",
                },
                {
                  title: "Enfoque en negocios locales y regionales",
                  desc: "No somos una agencia genérica que atiende clientes en 15 países. Nos concentramos en negocios de Cartagena y la Costa Caribe porque conocemos este mercado mejor que nadie.",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <FadeInView direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-2">
                Conocé más sobre nuestros servicios de{" "}
                <Link to="/servicios/meta-ads-cartagena" className="text-primary underline hover:text-primary/80">
                  Meta Ads en Cartagena
                </Link>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Resultados que hablan por nosotros
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Estos son números reales de campañas gestionadas para negocios en Cartagena.
              No promesas, no proyecciones: resultados medidos.
            </p>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 2000, prefix: "+$", suffix: "M", label: "COP generados para clientes", sub: "en ventas atribuidas a campañas" },
              { value: 4.5, prefix: "", suffix: "x", label: "ROAS promedio", sub: "retorno sobre inversión en pauta", decimals: 1 },
              { value: 60, prefix: "-", suffix: "%", label: "Reducción en CAC", sub: "costo de adquisición de clientes" },
              { value: 150, prefix: "+", suffix: "%", label: "Aumento en leads", sub: "en los primeros 90 días promedio" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <ScaleOnHover>
                  <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={item.value} prefix={item.prefix} suffix={item.suffix} decimals={item.decimals || 0} />
                    </p>
                    <p className="font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cuánto cuesta */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              ¿Cuánto cuesta trabajar con una agencia de publicidad en Cartagena?
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Ser transparentes con precios es parte de nuestra filosofía. Estos son los rangos
              reales del mercado en Cartagena para que tengas expectativas claras.
            </p>
          </FadeInView>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <ScaleOnHover>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Emprendimiento</p>
                    <p className="text-3xl font-bold text-primary mb-1">$1.5M - $2.5M</p>
                    <p className="text-xs text-muted-foreground mb-4">COP / mes (sin incluir pauta)</p>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Gestión de 1-2 plataformas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Creativos básicos incluidos
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Reportes quincenales
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Ideal para validar producto/servicio
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>

            <StaggerItem>
              <FloatingElement amplitude={4} duration={3}>
                <ScaleOnHover>
                  <Card className="bg-card/50 border-primary/40 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Más popular
                    </div>
                    <CardContent className="p-6 pt-8 text-center">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Negocio en crecimiento</p>
                      <p className="text-3xl font-bold text-primary mb-1">$2.5M - $4M</p>
                      <p className="text-xs text-muted-foreground mb-4">COP / mes (sin incluir pauta)</p>
                      <ul className="text-sm text-muted-foreground space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Gestión multi-plataforma
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Creativos profesionales + testing A/B
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Reportes semanales + llamada estratégica
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Embudos de WhatsApp Marketing
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Optimización continua de campañas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </FloatingElement>
            </StaggerItem>

            <StaggerItem>
              <ScaleOnHover>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Empresa consolidada</p>
                    <p className="text-3xl font-bold text-primary mb-1">$4M - $8M+</p>
                    <p className="text-xs text-muted-foreground mb-4">COP / mes (sin incluir pauta)</p>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Estrategia omnicanal completa
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Producción de contenido avanzada
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Automatizaciones y CRM
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Equipo dedicado a tu cuenta
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        Escalamiento agresivo de presupuesto
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          </StaggerContainer>
          <FadeInView direction="up" delay={0.3}>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Todos los planes incluyen acceso completo a cuentas publicitarias y sin contrato de permanencia.
              El presupuesto de pauta se paga directamente a las plataformas (Meta, Google), no a nosotros.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <FadeInView direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Preguntas frecuentes sobre agencias de publicidad en Cartagena
            </h2>
          </FadeInView>
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Respondemos las dudas más comunes que tienen los empresarios de Cartagena
              antes de contratar una agencia.
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
        <FadeInView direction="up">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para trabajar con una agencia que sí da resultados?
            </h2>
            <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
              Hablemos directo por WhatsApp. Te hacemos un diagnóstico gratuito de tu
              situación actual y te decimos con honestidad si podemos ayudarte o no.
              Sin compromiso, sin presión de venta.
            </p>
            <p className="text-muted-foreground text-sm mb-8">
              También podés explorar nuestros servicios de{" "}
              <Link to="/servicios/publicidad-digital-cartagena" className="text-primary underline hover:text-primary/80">
                publicidad digital en Cartagena
              </Link>{" "}
              o conocer cómo trabajamos{" "}
              <Link to="/servicios/meta-ads-cartagena" className="text-primary underline hover:text-primary/80">
                Meta Ads en Cartagena
              </Link>.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-10 py-7">
                Escribinos por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Respondemos en menos de 2 horas en horario laboral.
            </p>
          </div>
        </FadeInView>
      </section>

      <Footer />
    </div>
  );
};

export default AgenciaPublicidadCartagena;
