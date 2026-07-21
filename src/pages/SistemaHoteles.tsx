import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactFormSection from "@/components/home/ContactFormSection";
import Aurora from "@/components/effects/Aurora";
import BlurText from "@/components/effects/BlurText";
import RotatingWord from "@/components/effects/RotatingWord";
import Tilt from "@/components/effects/Tilt";
import { motion } from "framer-motion";
import {
  FadeInView,
  AnimatedCounter,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/animations";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BrowserFrame,
  ForecastMockup,
  DashboardMockup,
  LedgerMockup,
  BookingFlowMockup,
  ChannelsTicker,
  ForecastBackdrop,
} from "@/components/hoteles/PmsMockups";
import {
  ArrowRight,
  CalendarRange,
  LayoutDashboard,
  BedDouble,
  Receipt,
  FileSpreadsheet,
  BarChart3,
  Upload,
  Settings,
  Bell,
  ShieldCheck,
  Mail,
  CreditCard,
  Globe,
  MessageCircle,
  History,
  AlertTriangle,
  Check,
} from "lucide-react";

const WA = (text: string) =>
  `https://api.whatsapp.com/send/?phone=573007189383&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;

const DEMO_MSG =
  "Hola! Vi DT Hotels en su web y me gustaría ver una demo del sistema para mi hotel.";

/* ------------------------------------------------------------------ */

const painPoints = [
  {
    title: "El Excel se rompe cuando crece el hotel",
    body: "Una hoja compartida que solo entiende quien la creó, que se descuadra al copiar un mes y donde un arrastre mal hecho borra una reserva sin dejar rastro.",
  },
  {
    title: "Sobreventas que se pagan con reputación",
    body: "Dos canales venden la misma habitación la misma noche y alguien tiene que llamar al huésped a decirle que no hay cupo.",
  },
  {
    title: "Nadie sabe si el mes cerró en positivo",
    body: "Los ingresos están en un archivo, los gastos en otro y la utilidad real aparece semanas después, cuando ya no se puede corregir nada.",
  },
  {
    title: "Los pagos viven sueltos",
    body: "Links de pasarela por WhatsApp, abonos anotados a mano y saldos que solo existen en la cabeza de recepción.",
  },
];

const screens = [
  {
    key: "forecast",
    label: "Forecast",
    url: "tuhotel.com/dashboard/forecast",
    title: "La grilla que tu equipo ya sabe leer",
    body: "Habitaciones en las filas, días en las columnas y cada reserva pintada del color de su canal — igual que el Excel del hotel, pero viva. Arrastra una reserva para cambiarla de habitación, arrastra una sola noche y la estadía se divide sola, marca una avería o un bloqueo de mantenimiento y el inventario se ajusta al instante.",
    render: <ForecastMockup />,
  },
  {
    key: "inicio",
    label: "Resumen del día",
    url: "tuhotel.com/dashboard/inicio",
    title: "Lo que pasa hoy, en una pantalla",
    body: "Quién entra, quién sale, quién está en casa, cuántas habitaciones quedan libres y cuánto hay por cobrar antes de que termine el día. Cada huésped con su botón de WhatsApp para escribirle sin buscar el número en ningún lado.",
    render: <DashboardMockup />,
  },
  {
    key: "ledger",
    label: "Ingresos y Gastos",
    url: "tuhotel.com/dashboard/ledger",
    title: "La contabilidad diaria del hotel, editable como una hoja de cálculo",
    body: "Ingresos y gastos día por día, con las mismas categorías que ya usa tu contadora. Los totales y la utilidad se calculan en vivo, así que la hoja no se descuadra nunca. Clonas la estructura al mes siguiente con un clic y exportas a Excel cuando lo pidan.",
    render: <LedgerMockup />,
  },
];

const modules = [
  { icon: LayoutDashboard, name: "Resumen del día", desc: "Entradas, salidas, en casa, disponibles y cobros del día." },
  { icon: CalendarRange, name: "Forecast", desc: "Grilla mensual con arrastre, división de estadías y bloqueos." },
  { icon: BedDouble, name: "Reservas", desc: "Ficha completa: huésped, canal, plan, PAX, saldos y estados." },
  { icon: CreditCard, name: "Pagos", desc: "Abonos, links de pasarela, conciliación y estado de cada cobro." },
  { icon: Receipt, name: "Habitaciones", desc: "Tipos, capacidad, orden y vínculo con los tipos que vende tu web." },
  { icon: FileSpreadsheet, name: "Ingresos y Gastos", desc: "Hoja mensual editable con utilidad en vivo y export a Excel." },
  { icon: BarChart3, name: "Reportes", desc: "Ocupación, ingresos proyectados, saldos y mezcla por canal." },
  { icon: Upload, name: "Importación", desc: "Sube el Excel que ya usas y el histórico entra solo." },
  { icon: Settings, name: "Ajustes", desc: "Política de prepago por temporada, IVA y gestión de usuarios." },
];

const integrations = [
  {
    icon: CreditCard,
    title: "Pasarela de pagos",
    body: "Links con IVA desglosado y vencimiento, webhook firmado y conciliación automática de respaldo. Un pago nunca se registra dos veces.",
  },
  {
    icon: Globe,
    title: "Tu página web",
    body: "El motor de reservas se conecta al sitio del hotel. Los precios por temporada viven en un solo lugar: los cambias una vez y la web y el sistema cotizan igual.",
  },
  {
    icon: Mail,
    title: "Correo automático",
    body: "Aviso interno por cada reserva nueva y confirmación al huésped con la marca del hotel, el desglose y su botón de pago.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: "Escríbele al huésped desde la ficha de la reserva, con el indicativo ya normalizado.",
  },
  {
    icon: Bell,
    title: "Avisos en vivo",
    body: "Reserva nueva, reserva movida o pago recibido aparecen en pantalla sin recargar. La grilla se actualiza sola.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel, en los dos sentidos",
    body: "Importa el forecast que ya tienes — lee hasta el color de las celdas para deducir el canal — y exporta la contabilidad del mes con el formato de siempre.",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Anti-sobreventa real",
    body: "Bloqueo transaccional al reservar y reservas en espera que expiran solas. Dos personas no pueden comprar la misma habitación.",
  },
  {
    icon: History,
    title: "Todo queda registrado",
    body: "Quién creó, movió, cobró o canceló cada reserva, con el antes y el después. Se acabó el «yo no fui».",
  },
  {
    icon: AlertTriangle,
    title: "Permisos por rol",
    body: "Administración, gerencia, recepción, contabilidad y consulta. Cada quien ve y toca lo que le corresponde.",
  },
];

const process = [
  {
    step: "01",
    title: "Levantamiento",
    body: "Revisamos tu Excel, tus tipos de habitación, tus canales y tu forma de cobrar. El sistema se adapta a tu operación, no al revés.",
    duration: "1 semana",
  },
  {
    step: "02",
    title: "Marca y montaje",
    body: "Tu logo, tus colores y tu dominio. Cargamos habitaciones, tarifas por temporada, usuarios y el histórico desde tu Excel.",
    duration: "1-2 semanas",
  },
  {
    step: "03",
    title: "Conexiones",
    body: "Motor de reservas en tu web, pasarela de pagos, correos de confirmación y avisos internos.",
    duration: "1-2 semanas",
  },
  {
    step: "04",
    title: "Entrenamiento y acompañamiento",
    body: "Capacitamos a recepción, administración y contabilidad, y acompañamos las primeras semanas de operación real.",
    duration: "Continuo",
  },
];

const faqs = [
  {
    q: "¿Esto ya funciona o es un prototipo?",
    a: "Funciona. El sistema opera hoy dos propiedades hoteleras reales, con reservas, cobros y contabilidad diaria corriendo sobre él. No es una demo montada para vender.",
  },
  {
    q: "Tengo años de información en Excel. ¿La pierdo?",
    a: "No. El importador lee el archivo de forecast que ya usas: toma los comentarios de cada celda para sacar huésped, fechas y monto, y deduce el canal por el color de relleno. Te entrega un reporte de qué entró, qué se omitió y por qué.",
  },
  {
    q: "¿Se puede poner la marca de mi hotel?",
    a: "Sí. Logo, colores, nombre, dominio propio y los correos que recibe el huésped salen con tu identidad. El sistema ya corre con dos marcas distintas sobre la misma base.",
  },
  {
    q: "¿Sirve si tengo más de una propiedad?",
    a: "Sí. Cada propiedad opera con su propio dominio, su base de datos y sus usuarios, sin que la información se mezcle.",
  },
  {
    q: "¿Mi equipo necesita saber de tecnología?",
    a: "No. La pantalla principal es deliberadamente parecida al Excel que ya usan, para que recepción la reconozca el primer día. Nosotros hacemos el montaje y la capacitación.",
  },
  {
    q: "¿Cuánto se demora la implementación?",
    a: "Entre tres y seis semanas según el tamaño del hotel, la cantidad de histórico a importar y las conexiones que necesites. En el diagnóstico te damos una fecha concreta.",
  },
];

/* ------------------------------------------------------------------ */

const SistemaHoteles = () => {
  const [tab, setTab] = React.useState(0);
  const active = screens[tab];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DT Hotels",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Sistema de gestión hotelera (PMS) con forecast de ocupación, reservas, pagos, contabilidad diaria y motor de reservas para el sitio web del hotel.",
      url: "https://dtgrowthpartners.com/servicios/sistema-hoteles",
      provider: {
        "@type": "Organization",
        name: "DT Growth Partners",
        url: "https://dtgrowthpartners.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="DT Hotels — Software de Gestión Hotelera (PMS) | DT Growth Partners"
        description="PMS para hoteles independientes: forecast de ocupación, reservas, pagos, contabilidad diaria y motor de reservas para tu web. Ya operando en hoteles reales."
        canonical="https://dtgrowthpartners.com/servicios/sistema-hoteles"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-16">
        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-black overflow-hidden min-h-[92vh] flex items-center">
          {/* La grilla del forecast es el ambiente del hero, no una captura */}
          <div className="absolute inset-0 opacity-[0.55]">
            <ForecastBackdrop />
          </div>

          {/* Velos: el texto manda, la grilla acompaña */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_10%_40%,rgba(0,0,0,0.92),transparent_60%)]" />

          <Aurora
            blobs={[
              { color: "blue", className: "-top-40 left-[5%] w-[620px] h-[620px] opacity-25" },
              {
                color: "cyan",
                className: "top-[20%] right-[-120px] w-[540px] h-[540px] opacity-15",
                delay: "-6s",
              },
            ]}
          />

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 pt-24 pb-28 md:pt-28 md:pb-36">
            <div className="max-w-3xl">
                <span className="text-sm font-body text-white/80">{"// Software para hoteles"}</span>

                {/* La palabra rotativa va sola en su renglón y al final del
                    titular: así su ancho no reacomoda ningún texto y el alto
                    del h1 —y por tanto el largo del scroll— nunca cambia.
                    El span envolvente evita pisar el justify-center y el
                    width animado que el propio componente maneja. */}
                <h1 className="mt-6 flex flex-wrap items-baseline gap-x-[0.24em] font-heading font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.04] tracking-[-0.024em]">
                  El sistema que reemplaza el
                  <span className="basis-full flex">
                    <RotatingWord
                      words={["Excel", "cuaderno", "Drive"]}
                      interval={3000}
                      className="font-semibold"
                      innerClassName="gradient-text"
                    />
                  </span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/75 font-body font-light max-w-xl leading-relaxed">
                  DT Hotels es el PMS de tu hotel: ocupación, reservas, cobros, contabilidad diaria y
                  motor de reservas para tu propia web. Construido dentro de un hotel real, no en una
                  sala de reuniones.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="btn-primary group" asChild>
                    <a href={WA(DEMO_MSG)} target="_blank" rel="noopener noreferrer">
                      Ver una demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline" asChild>
                    <a href="#modulos">Ver qué hace</a>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {["Ya opera hoteles reales", "Con tu marca", "Sin sobreventas"].map((chip) => (
                    <span key={chip} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#26BDF0]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                        {chip}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Fundido hacia la sección siguiente */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#07060F] pointer-events-none" />
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Ticker de canales                                           */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-[#07060F] py-8 border-y border-white/[0.06]">
          <ChannelsTicker />
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Problema                                                    */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-[#07060F] grain py-24 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// El punto de quiebre"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-3xl">
              Todo hotel llega al día en que la hoja de cálculo{" "}
              <span className="font-semibold gradient-text">deja de alcanzar</span>
            </h2>

            <div className="mt-16 border-t border-white/10">
              {painPoints.map((p, i) => (
                <FadeInView key={p.title} direction="up" delay={i * 0.06}>
                  <div className="group border-b border-white/10 py-8 md:py-10 grid md:grid-cols-[minmax(0,320px)_1fr] gap-4 md:gap-12 transition-colors duration-300 hover:bg-white/[0.02] md:px-6 md:-mx-6 rounded-2xl">
                    <h3 className="font-heading font-medium text-white text-xl md:text-2xl tracking-[-0.01em] transition-transform duration-500 ease-smooth md:group-hover:translate-x-2">
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/65 font-body font-light max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* El producto — pestañas con mockups                          */}
        {/* ---------------------------------------------------------- */}
        <section id="producto" className="relative bg-black py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "purple", className: "top-[10%] left-[-140px] w-[520px] h-[520px] opacity-20" },
              {
                color: "cyan",
                className: "bottom-[-120px] right-[10%] w-[480px] h-[480px] opacity-20",
                delay: "-9s",
              },
            ]}
          />

          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// El sistema por dentro"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-3xl">
              Tres pantallas que sostienen{" "}
              <span className="font-semibold gradient-text">toda la operación</span>
            </h2>

            {/* Pestañas */}
            <div className="mt-10 flex flex-wrap gap-2">
              {screens.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setTab(i)}
                  className={`relative px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 border ${
                    i === tab
                      ? "border-primary/40 text-white"
                      : "liquid-glass border-white/10 text-white/50 hover:text-white/80"
                  }`}
                >
                  {i === tab && (
                    <motion.span
                      layoutId="hoteles-tab-pill"
                      className="absolute inset-0 rounded-full bg-primary/15"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 lg:gap-14 items-center">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-0"
              >
                <BrowserFrame url={active.url}>{active.render}</BrowserFrame>
              </motion.div>

              <motion.div
                key={`copy-${active.key}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-0"
              >
                <h3 className="font-heading font-medium text-white text-2xl md:text-3xl tracking-[-0.015em]">
                  {active.title}
                </h3>
                <p className="mt-5 text-sm md:text-base text-white/70 font-body font-light leading-relaxed">
                  {active.body}
                </p>

                <div className="mt-8 flex gap-2">
                  {screens.map((s, i) => (
                    <button
                      key={s.key}
                      onClick={() => setTab(i)}
                      aria-label={`Ver ${s.label}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === tab ? "w-10 bg-primary" : "w-4 bg-white/15 hover:bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Módulos                                                     */}
        {/* ---------------------------------------------------------- */}
        <section id="modulos" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Módulos"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-3xl">
              Nueve módulos, <span className="font-semibold gradient-text">un solo lugar</span>
            </h2>

            {/* Tilt 3D + glare, el mismo de las tarjetas del equipo en la home */}
            <StaggerContainer
              className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              staggerDelay={0.07}
            >
              {modules.map((m) => {
                const Icon = m.icon;
                return (
                  <StaggerItem key={m.name} className="h-full">
                    <Tilt className="h-full" cardClassName="!rounded-2xl h-full">
                      <div className="liquid-glass rounded-2xl border border-white/10 p-6 h-full transition-colors duration-300 hover:border-primary/30">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="mt-5 font-heading font-medium text-white text-lg tracking-[-0.01em]">
                          {m.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/60 font-body font-light">{m.desc}</p>
                      </div>
                    </Tilt>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Motor de reservas                                           */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-black py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "blue", className: "top-[5%] right-[-100px] w-[560px] h-[560px] opacity-25" },
            ]}
          />

          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="min-w-0">
                <span className="text-sm font-body text-white/80">{"// Reservas directas"}</span>
                <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[3.6rem] leading-[0.95] tracking-[-0.024em]">
                  Vende directo y{" "}
                  <span className="font-semibold gradient-text">deja de pagar comisión</span>
                </h2>
                <p className="mt-6 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-lg">
                  El motor de reservas se instala en tu propia página. El huésped reserva y paga sin
                  intermediarios, y la reserva entra al sistema sola — con la habitación asignada y
                  recepción notificada en vivo.
                </p>

                <div className="mt-10 grid gap-3">
                  {guarantees.map((g) => {
                    const Icon = g.icon;
                    return (
                      <div
                        key={g.title}
                        className="liquid-glass rounded-xl border border-white/10 p-4 flex gap-4"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-medium text-white text-base">{g.title}</h3>
                          <p className="mt-1 text-sm text-white/60 font-body font-light">{g.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <FadeInView direction="up" delay={0.1}>
                <div className="liquid-glass-strong rounded-2xl border border-white/10 p-6 md:p-8 h-full">
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35 mb-6">
                    Del clic del huésped a la grilla
                  </div>
                  <BookingFlowMockup />
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Integraciones                                               */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Conexiones"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-3xl">
              Conectado con lo que{" "}
              <span className="font-semibold gradient-text">ya usa tu hotel</span>
            </h2>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {integrations.map((it, i) => {
                const Icon = it.icon;
                return (
                  <FadeInView key={it.title} direction="up" delay={(i % 3) * 0.06} className="h-full">
                    <ScaleOnHover className="h-full" scale={1.02} lift={-4}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full">
                      <Icon className="w-5 h-5 text-[#26BDF0]" />
                      <h3 className="mt-5 font-heading font-medium text-white text-lg tracking-[-0.01em]">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 font-body font-light">{it.body}</p>
                    </div>
                    </ScaleOnHover>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Prueba real                                                 */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-black py-24 md:py-32 overflow-hidden">
          <Aurora
            blobs={[
              { color: "cyan", className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-15" },
            ]}
          />
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 text-center">
            <span className="text-sm font-body text-white/80">{"// Sin humo"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-4xl mx-auto">
              No lo estamos inventando para venderlo:{" "}
              <span className="font-semibold gradient-text">ya está operando</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-white/65 font-body font-light max-w-2xl mx-auto">
              DT Hotels nació dentro de un hotel de Cartagena que necesitaba salir del Excel. Hoy
              corre en dos propiedades, cada una con su marca, su dominio y su información
              completamente separada.
            </p>

            <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { n: 2, l: "Propiedades en operación" },
                { n: 9, l: "Módulos en producción" },
                { n: 0, l: "Reservas de la web digitadas a mano" },
              ].map((m, i) => (
                <FadeInView key={m.l} direction="up" delay={i * 0.08}>
                  <div className="liquid-glass-strong rounded-2xl border border-white/10 p-8">
                    <div className="font-heading font-medium text-5xl md:text-6xl gradient-text leading-none">
                      <AnimatedCounter value={m.n} duration={1.6} />
                    </div>
                    <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                      {m.l}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Implementación                                              */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <span className="text-sm font-body text-white/80">{"// Implementación"}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.024em] max-w-3xl">
              Del Excel al sistema{" "}
              <span className="font-semibold gradient-text">sin parar el hotel</span>
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {process.map((s, i) => (
                <FadeInView key={s.step} direction="up" delay={i * 0.07}>
                  <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full transition-colors duration-300 hover:border-primary/30">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-medium text-4xl text-white/15 group-hover:text-primary transition-colors duration-300">
                        {s.step}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/40 px-2.5 py-1 rounded-full border border-white/10">
                        {s.duration}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading font-medium text-white text-lg tracking-[-0.01em]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60 font-body font-light">{s.body}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* FAQ                                                         */}
        {/* ---------------------------------------------------------- */}
        <section className="relative bg-black py-24 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-8">
            <span className="text-sm font-body text-white/80">{"// Preguntas"}</span>
            <h2 className="mt-6 mb-12 font-heading font-normal text-white text-4xl md:text-5xl leading-[0.95] tracking-[-0.024em]">
              Lo que <span className="font-semibold gradient-text">siempre preguntan</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="liquid-glass border border-white/10 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-body text-white/90 hover:text-white hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 font-body font-light">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CTA final                                                   */}
        {/* ---------------------------------------------------------- */}
        <section className="py-20 bg-black">
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16">
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="flex flex-wrap items-baseline justify-center gap-x-[0.26em] font-heading font-normal text-white text-3xl md:text-5xl leading-[1.05] tracking-[-0.024em]">
                  <BlurText text="Te lo mostramos" />
                  <span className="basis-full flex justify-center">
                    <RotatingWord
                      words={["funcionando", "con datos reales", "sin discurso"]}
                      interval={2900}
                      className="font-semibold"
                      innerClassName="gradient-text"
                    />
                  </span>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/70 font-body font-light">
                  Agenda una demo y recorremos el sistema con datos de un hotel real. Si tiene
                  sentido para el tuyo, armamos el plan de implementación. Si no, te lo decimos.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button size="lg" className="btn-primary group" asChild>
                    <a href={WA(DEMO_MSG)} target="_blank" rel="noopener noreferrer">
                      Agendar demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default SistemaHoteles;
