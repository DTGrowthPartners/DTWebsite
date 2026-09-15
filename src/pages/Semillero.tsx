import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import Aurora from "@/components/effects/Aurora";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Palette,
  Bot,
  Search,
  Code2,
  Share2,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Building2,
  Flame,
  Check,
  Upload,
} from "lucide-react";
import { scrollToTarget } from "@/lib/smooth-scroll";
import logo from "@/assets/DT-GROWTH-LOGO.png";

interface SemilleroFormData {
  fullName: string;
  age: string;
  whatsapp: string;
  email: string;
  livesInCartagena: string;
  area: string;
  shift: string;
  otherCommitments: string;
  motivation: string;
  portfolioOrProject: string;
  socialLink: string;
  confirmedTerms: boolean;
  cvFileName: string;
  cvBase64: string;
}

const INITIAL_FORM: SemilleroFormData = {
  fullName: "",
  age: "",
  whatsapp: "",
  email: "",
  livesInCartagena: "si",
  area: "",
  shift: "",
  otherCommitments: "",
  motivation: "",
  portfolioOrProject: "",
  socialLink: "",
  confirmedTerms: false,
  cvFileName: "",
  cvBase64: "",
};

const AREAS = [
  {
    id: "growth",
    title: "Growth",
    badge: "Performance",
    icon: Search,
    description:
      "Estrategia y ejecución de campañas de pauta digital en Meta Ads y Google Ads. Análisis de datos, funnels de conversión, reporting y optimización de rendimiento para marcas reales.",
    items: [
      "Campañas de Meta Ads y Google Ads con presupuesto real",
      "Análisis de métricas, funnels de conversión y reporting de resultados",
      "Optimización de ROAS, segmentación de audiencias y escalamiento",
    ],
  },
  {
    id: "contenido",
    title: "Contenido",
    badge: "Creatividad",
    icon: Palette,
    description:
      "Diseño gráfico, edición de video, creativos publicitarios para Ads, producción ágil de contenido con IA: avatars, videos generativos y piezas para redes sociales.",
    items: [
      "Creativos estáticos y dinámicos de alta conversión para pauta",
      "Edición de video, Reels y contenido visual para redes sociales",
      "Producción ágil con IA: avatars, videos generativos e imágenes comerciales",
    ],
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    badge: "Tecnología",
    icon: Code2,
    description:
      "Construcción de sitios web, landing pages y aplicaciones con React, Next.js y Node.js. APIs, infraestructura en VPS y despliegue de proyectos en producción.",
    items: [
      "Desarrollo de landing pages y sitios web con React, Next.js y Tailwind",
      "Construcción de APIs, integraciones y servicios backend con Node.js",
      "Infraestructura, despliegue en VPS y mantenimiento de proyectos en producción",
    ],
  },
  {
    id: "ia-automatizacion",
    title: "IA & Automatización",
    badge: "Automatización",
    icon: Bot,
    description:
      "Agentes inteligentes, scripts de automatización, integración de APIs, cron jobs en VPS y flujos con modelos de IA aplicados a operaciones reales.",
    items: [
      "Desarrollo de agentes de IA con Claude y OpenAI aplicados al negocio",
      "Scripts de automatización en Python, Node.js y React desplegados en VPS",
      "Integración de APIs, webhooks y Google Apps Script para flujos operativos",
    ],
  },
  {
    id: "operaciones",
    title: "Operaciones",
    badge: "Gestión",
    icon: Share2,
    description:
      "Gestión de clientes, seguimiento de proyectos, CRM, procesos internos, ventas y coordinación operativa del equipo y las cuentas de la consultora.",
    items: [
      "Gestión de CRM, seguimiento de clientes y pipeline de ventas",
      "Coordinación de proyectos, procesos internos y entregables",
      "Atención a cuentas, reporting operativo y mejora continua de procesos",
    ],
  },
];

const FAQS = [
  {
    q: "¿Necesito años de experiencia previa para postularme?",
    a: "No exigimos años de experiencia laboral formal en agencias, pero sí es ideal que tengas afinidad, curiosidad o conocimientos base en el área que elijas. Evaluamos tu criterio, disciplina, puntualidad y tu compromiso para trabajar en proyectos reales con el equipo.",
  },
  {
    q: "¿Por qué el programa es 100% presencial en el Centro de Convenciones?",
    a: "Porque la velocidad de aprendizaje cuando trabajas codo a codo con el equipo técnico y los fundadores en nuestro cowork es 10 veces mayor que en remoto. La retroalimentación en vivo y el trabajo en proyectos reales aceleran tu curva profesional inmediatamente.",
  },
  {
    q: "¿Son solo 5 cupos en total?",
    a: "No. Tenemos 5 áreas de especialización distintas. En cada área seleccionamos aspirantes según afinidad y mérito, pero mantenemos cupos limitados por turno para garantizar mentoría personalizada y atención 1 a 1.",
  },
  {
    q: "¿Cómo funciona la proyección al terminar los 3 meses?",
    a: "Los 3 meses iniciales corresponden al periodo intensivo de aceleración con remuneración de $500.000 COP/mes. Al culminar, evaluamos el desempeño, la actitud y los resultados de cada participante para ingresar a nuestro plan de contratación formal dentro de DT Growth Partners.",
  },
  {
    q: "¿Cuál es el proceso de selección una vez envíe el formulario?",
    a: "Revisamos cada postulación de manera individual. Si tu formulario demuestra motivación y cumple con los requisitos de horario y ciudad, nos pondremos en contacto contigo por WhatsApp o correo para una breve entrevista de alineación.",
  },
  {
    q: "¿Puedo validar mi experiencia como práctica académica?",
    a: "Si tu institución educativa lo permite, podemos gestionar la vinculación formativa correspondiente.",
  },
  {
    q: "¿Necesito computador propio?",
    a: "Para participar en el Semillero es recomendable contar con computador portátil propio. Los requerimientos técnicos dependerán del área seleccionada.",
  },
  {
    q: "¿Hay restricción de edad?",
    a: "No exigimos una edad específica. Buscamos talento, disciplina y ganas de aprender. Si eres menor de edad, tu participación estará sujeta a las autorizaciones correspondientes.",
  },
];

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwlLgQ9Rf6lSXEMxhk8E6wSyEa2aAxNG3wFVjJlka-IAgbD91PKh0_fMiLl-ciOghef/exec";

export default function Semillero() {
  const [formData, setFormData] = useState<SemilleroFormData>(INITIAL_FORM);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      const top = formRef.current.getBoundingClientRect().top + window.scrollY - 90;
      scrollToTarget(top, { immediate: false });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("El archivo de CV no debe superar los 5 MB.");
      return;
    }
    setErrorMessage("");
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setFormData((prev) => ({ ...prev, cvFileName: file.name, cvBase64: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const selectArea = (areaTitle: string) => {
    setFormData((prev) => ({ ...prev, area: areaTitle }));
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) return "Por favor ingresa tu nombre completo.";
    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum < 1) return "Por favor ingresa tu edad.";
    if (!formData.whatsapp.trim()) return "Por favor ingresa tu número de WhatsApp.";
    if (!formData.email.trim() || !formData.email.includes("@")) return "Por favor ingresa un correo válido.";
    return null;
  };

  const validateStep2 = () => {
    if (formData.livesInCartagena !== "si") {
      return "El programa es 100% presencial en Cartagena (Centro de Convenciones). Debes residir en la ciudad.";
    }
    if (!formData.shift) {
      return "Por favor selecciona un turno disponible de lunes a viernes.";
    }
    return null;
  };

  const handleNextStep = () => {
    setErrorMessage("");
    if (currentStep === 1) {
      const err = validateStep1();
      if (err) {
        setErrorMessage(err);
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const err = validateStep2();
      if (err) {
        setErrorMessage(err);
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.area) {
      setErrorMessage("Por favor selecciona una de las 5 áreas de especialización.");
      return;
    }
    if (!formData.motivation.trim()) {
      setErrorMessage("Por favor cuéntanos brevemente tu motivación para ingresar al Semillero.");
      return;
    }
    if (!formData.confirmedTerms) {
      setErrorMessage("Debes confirmar los requisitos de presencialidad y horario.");
      return;
    }

    setStatus("sending");

    const payload: Record<string, string> = {
      fullName: formData.fullName,
      age: formData.age,
      whatsapp: formData.whatsapp,
      email: formData.email,
      livesInCartagena: formData.livesInCartagena,
      area: formData.area,
      shift: formData.shift,
      otherCommitments: formData.otherCommitments || "Ninguno",
      motivation: formData.motivation,
      portfolioOrProject: formData.portfolioOrProject || "No especificado",
      socialLink: formData.socialLink || "No especificado",
    };

    // Incluir CV si fue adjuntado
    if (formData.cvBase64) {
      payload.cvFileName = formData.cvFileName;
      payload.cvBase64 = formData.cvBase64;
    }

    // 1. Enviar a Google Sheets Webhook
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Envío a Google Sheets en modo no-cors:", err);
    }

    // 2. Disparar Meta Pixel (Lead Event)
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Semillero DTGP",
        content_category: formData.area,
        value: 0,
        currency: "COP",
      });
    }

    setStatus("success");
  };

  return (
    <>
      <Helmet>
        <title>Semillero DTGP | Programa Remunerado de Talento en Cartagena — DT Growth Partners</title>
        <meta
          name="description"
          content="Únete al Semillero DTGP. Programa presencial remunerado de medio tiempo en el Centro de Convenciones de Cartagena. Trabaja en proyectos reales de pauta digital, diseño, IA y desarrollo con remuneración mensual."
        />
        <link rel="canonical" href="https://dtgrowthpartners.com/semillero" />
        <meta property="og:title" content="Semillero DTGP | Programa Remunerado de Talento — DT Growth Partners" />
        <meta
          property="og:description"
          content="Aprende haciendo. Trabaja en proyectos reales desde el primer día en nuestro cowork en el Centro de Convenciones de Cartagena."
        />
        <meta property="og:url" content="https://dtgrowthpartners.com/semillero" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#07060F] text-[#F5F8FF] selection:bg-[#0F76D6]/40 selection:text-white relative overflow-hidden font-body">
        {/* Header Dedicado Semillero DTGP */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#07060F]/85 border-b border-white/10 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
              <img src={logo} alt="DT Growth Partners" className="h-8 sm:h-9 w-auto object-contain" />
            </a>

            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="#areas"
                className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors"
              >
                5 Áreas
              </a>
              <a
                href="#requisitos"
                className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors"
              >
                Requisitos
              </a>
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full font-medium text-xs sm:text-sm px-4 sm:px-6 py-2.5 bg-white text-black hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>Postularme</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Aurora atmosférica */}
        <Aurora
          blobs={[
            { color: "cyan", className: "top-[4%] right-[10%] w-[550px] h-[550px] opacity-25" },
            { color: "blue", className: "top-[35%] left-[-80px] w-[600px] h-[600px] opacity-20", delay: "-8s" },
            { color: "purple", className: "bottom-[5%] right-[5%] w-[500px] h-[500px] opacity-20", delay: "-14s" },
          ]}
        />

        {/* ======================= HERO ======================= */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-4xl mx-auto space-y-7">
            
            {/* Badges de Convocatoria */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#26BDF0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.25em] text-[#26BDF0] uppercase font-semibold">
                  Semillero DTGP · 2026
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F76D6]/20 border border-[#0F76D6]/40 text-[#26BDF0] font-mono text-xs tracking-wider uppercase backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-[#26BDF0] animate-pulse" />
                  Convocatoria Abierta · Cartagena
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 text-white/70 font-mono text-xs tracking-wider uppercase backdrop-blur-md">
                  <Building2 className="w-3.5 h-3.5 text-white/50" />
                  Centro de Convenciones
                </span>
              </div>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F5F8FF] leading-[1.05]">
              Aprende haciendo.{" "}
              <span className="block mt-2 font-bold bg-gradient-to-r from-[#0F76D6] via-[#26BDF0] to-[#C2FBFF] bg-clip-text text-transparent">
                Trabaja en proyectos reales desde el primer día.
              </span>
            </h1>

            {/* Subtítulo Descriptivo */}
            <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto font-light leading-relaxed">
              El programa de aceleración de talento de{" "}
              <strong className="text-white font-medium">DT Growth Partners</strong>, consultora de
              crecimiento con base tecnológica en Cartagena. 3 meses de formación intensiva de medio tiempo,
              mentoría directa y trabajo práctico sobre marcas y empresas reales.
            </p>

            {/* Frase prominente: Programa presencial remunerado */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium text-sm tracking-wide">
                <DollarSign className="w-4 h-4" />
                Programa presencial remunerado de medio tiempo en Cartagena
              </span>
            </div>

            {/* Tarjetas de condiciones clave */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 pb-2 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl liquid-glass border border-white/10 hover:border-[#26BDF0]/60 hover:bg-[#0F76D6]/[0.08] hover:shadow-[0_0_20px_rgba(15,118,214,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-mono tracking-widest uppercase mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#26BDF0]" />
                  <span>Días</span>
                </div>
                <div className="text-sm font-semibold text-white">Lunes a Viernes</div>
                <div className="text-[11px] text-white/50 font-light">Medio tiempo · Cupos limitados</div>
              </div>

              <div className="p-4 rounded-2xl liquid-glass border border-white/10 hover:border-[#26BDF0]/60 hover:bg-[#0F76D6]/[0.08] hover:shadow-[0_0_20px_rgba(15,118,214,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-mono tracking-widest uppercase mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#26BDF0]" />
                  <span>Turnos</span>
                </div>
                <div className="text-sm font-semibold text-white">Mañana o Tarde</div>
                <div className="text-[11px] text-white/50 font-light">8:30-12:30 / 1:30-5:30pm</div>
              </div>

              <div className="p-4 rounded-2xl liquid-glass border border-white/10 hover:border-[#26BDF0]/60 hover:bg-[#0F76D6]/[0.08] hover:shadow-[0_0_20px_rgba(15,118,214,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-mono tracking-widest uppercase mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#26BDF0]" />
                  <span>Remuneración</span>
                </div>
                <div className="text-sm font-semibold text-emerald-400">$500.000 COP</div>
                <div className="text-[11px] text-white/50 font-light">Mensual (3 meses)</div>
              </div>

              <div className="p-4 rounded-2xl liquid-glass border border-white/10 hover:border-[#26BDF0]/60 hover:bg-[#0F76D6]/[0.08] hover:shadow-[0_0_20px_rgba(15,118,214,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-mono tracking-widest uppercase mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#26BDF0]" />
                  <span>Sede</span>
                </div>
                <div className="text-sm font-semibold text-[#26BDF0]">Cowork Cartagena</div>
                <div className="text-[11px] text-white/50 font-light">C. de Convenciones</div>
              </div>
            </div>

            {/* CTAs estilo Guía de Diseño */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-8 py-4 bg-white text-black hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                Postularme al Semillero
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#areas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-mono text-xs uppercase tracking-wider px-6 py-4 border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
              >
                Ver las 5 áreas de especialización ↓
              </a>
            </div>

            {/* Urgencia */}
            <p className="text-xs text-white/50 font-mono tracking-wide pt-1">
              ⚡ Cupos limitados por turno para garantizar mentoría individualizada. Cierre de postulaciones próximo.
            </p>
          </div>
        </section>

        {/* Hairline oficial de marca */}
        <div className="max-w-5xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[rgba(15,118,214,0.6)] to-transparent" />

        {/* ======================= LOS 3 PILARES ======================= */}
        <section id="requisitos" className="scroll-mt-24 relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">
              // MODELO DE TRABAJO & PRÁCTICA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Cero teoría abstracta. Trabajo y ejecución en proyectos reales.
            </h2>
            <p className="text-sm text-white/65 font-light max-w-xl mx-auto pt-2 leading-relaxed">
              Produces, creas y resuelves sobre cuentas, marcas y clientes reales desde el primer día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl liquid-glass-strong border border-white/10 hover:border-[#26BDF0] hover:shadow-[0_0_40px_rgba(15,118,214,0.35)] hover:bg-[#0F76D6]/[0.08] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F76D6]/20 border border-[#0F76D6]/40 flex items-center justify-center text-[#26BDF0] group-hover:scale-110 group-hover:bg-[#0F76D6]/35 group-hover:shadow-[0_0_20px_rgba(38,189,240,0.5)] transition-all duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#26BDF0] transition-colors duration-200">
                Mentoría Directa
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Trabajas hombro a hombro con el fundador y los especialistas técnicos en nuestro
                espacio de cowork en el Centro de Convenciones. Recibes retroalimentación diaria y aprendes
                los estándares reales del mercado.
              </p>
            </div>

            <div className="group p-8 rounded-2xl liquid-glass-strong border border-white/10 hover:border-[#26BDF0] hover:shadow-[0_0_40px_rgba(15,118,214,0.35)] hover:bg-[#0F76D6]/[0.08] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#26BDF0]/20 border border-[#26BDF0]/40 flex items-center justify-center text-[#26BDF0] group-hover:scale-110 group-hover:bg-[#26BDF0]/35 group-hover:shadow-[0_0_20px_rgba(38,189,240,0.5)] transition-all duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#26BDF0] transition-colors duration-200">
                Cuentas y Proyectos Reales
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Cero ejercicios ficticios. Cada pieza gráfica, automatización, anuncio o flujo que
                desarrolles se pondrá a prueba en marcas y empresas que confían en DT Growth Partners.
              </p>
            </div>

            <div className="group p-8 rounded-2xl liquid-glass-strong border border-white/10 hover:border-[#26BDF0] hover:shadow-[0_0_40px_rgba(15,118,214,0.35)] hover:bg-[#0F76D6]/[0.08] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/35 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#26BDF0] transition-colors duration-200">
                Plan de Contratación
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                El Semillero es nuestra principal cantera de talento. Al culminar los 3 meses,
                evaluamos tu rendimiento y compromiso con posibilidad real de ingresar a nuestro
                plan de contratación como parte del equipo permanente de DTGP.
              </p>
            </div>
          </div>
        </section>

        {/* ======================= LAS 5 ÁREAS ======================= */}
        <section id="areas" className="scroll-mt-24 relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">
              // PERFILES Y ESPECIALIZACIONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              5 áreas de especialización
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light">
              <strong className="text-white">Aclaración:</strong> Son 5 áreas de especialización, no
              significa que sea un único cupo por área. Seleccionamos candidatos según su perfil y
              compromiso, con cupos limitados por turno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className="group relative p-7 rounded-2xl liquid-glass-strong border border-white/10 hover:border-[#26BDF0] hover:shadow-[0_0_40px_rgba(15,118,214,0.35)] hover:bg-[#0F76D6]/[0.08] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0F76D6]/25 group-hover:border-[#26BDF0]/60 group-hover:shadow-[0_0_20px_rgba(38,189,240,0.45)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#26BDF0]" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:border-[#26BDF0]/40 group-hover:text-[#26BDF0] transition-colors duration-200">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#26BDF0] transition-colors duration-200">
                      {area.title}
                    </h3>

                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/50 mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#26BDF0]" />
                      <span>Lo que desarrollarás:</span>
                    </div>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/80 font-light leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#26BDF0] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Tarjeta de resumen de condiciones */}
            <div className="group p-7 rounded-2xl liquid-glass-strong border border-[#0F76D6]/50 hover:border-[#26BDF0] hover:shadow-[0_0_40px_rgba(15,118,214,0.35)] hover:bg-[#0F76D6]/[0.08] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F76D6]/20 border border-[#0F76D6]/50 flex items-center justify-center text-[#26BDF0] group-hover:scale-110 group-hover:bg-[#0F76D6]/35 group-hover:shadow-[0_0_20px_rgba(38,189,240,0.5)] transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#26BDF0] transition-colors duration-200">
                  Requisitos del Programa
                </h3>
                <ul className="space-y-3 text-sm text-white/80 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26BDF0]" />
                    <span><strong>Ubicación:</strong> 100% presencial en Cartagena (Cowork Centro de Convenciones).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26BDF0]" />
                    <span><strong>Horario:</strong> Lunes a viernes. Mañana 8:30 am – 12:30 pm / Tarde 1:30 – 5:30 pm.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26BDF0]" />
                    <span><strong>Remuneración:</strong> $500.000 COP/mes (3 meses).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26BDF0]" />
                    <span><strong>Cupos:</strong> Limitados por turno. Selección por desempeño.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleScrollToForm}
                className="w-full mt-6 py-3.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                Postularme ahora ↑
              </button>
            </div>
          </div>
        </section>

        {/* ======================= FORMULARIO PASO A PASO (STEPPER) ======================= */}
        <section ref={formRef} id="postulacion" className="scroll-mt-24 relative py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto z-10">
          <div className="relative p-6 sm:p-12 rounded-3xl liquid-glass-strong border border-white/15 shadow-[0_0_60px_rgba(15,118,214,0.2)]">
            
            {status === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#26BDF0]">
                    // POSTULACIÓN REGISTRADA
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    ¡Hemos recibido tu postulación!
                  </h2>
                </div>
                <p className="text-white/75 max-w-xl mx-auto font-light leading-relaxed">
                  Tus datos han sido registrados exitosamente en nuestro sistema de selección.
                  Evaluamos cada postulación por cohortes. Si tu perfil cumple con los criterios y pasa el
                  primer filtro, nuestro equipo te contactará directamente por <strong className="text-white">WhatsApp</strong> o correo
                  para coordinar los siguientes pasos y agendar tu entrevista.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs font-mono space-y-1 text-white/70">
                  <p>👤 Aspirante: <span className="text-white">{formData.fullName}</span></p>
                  <p>🎯 Área: <span className="text-white">{formData.area}</span></p>
                  <p>⏰ Turno: <span className="text-white">{formData.shift}</span></p>
                  <p>📍 Sede: <span className="text-white">Cowork Centro de Convenciones Cartagena</span></p>
                  {formData.cvFileName && (
                    <p>📄 CV: <span className="text-white">{formData.cvFileName}</span></p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setCurrentStep(1);
                      setFormData(INITIAL_FORM);
                    }}
                    className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    Enviar otra postulación
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header del Formulario */}
                <div className="text-center space-y-2 pb-6 border-b border-white/10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F76D6]/15 border border-[#0F76D6]/30 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#26BDF0]" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#26BDF0] font-semibold">
                      POSTULACIÓN AL SEMILLERO
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Formulario de Selección
                  </h2>
                  <p className="text-xs text-white/60 font-light max-w-lg mx-auto">
                    Proceso guiado en 3 pasos. Completa la información con atención y honestidad.
                  </p>
                </div>

                {/* Barra de Progreso del Stepper */}
                <div className="py-6">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#26BDF0] font-semibold">
                      Paso {currentStep} de 3
                    </span>
                    <span className="text-white/40">
                      {currentStep === 1 && "Datos personales"}
                      {currentStep === 2 && "Presencialidad y turno"}
                      {currentStep === 3 && "Especialización y motivación"}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#0F76D6] to-[#26BDF0] h-full transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* PASO 1: Datos de Contacto */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Nombre completo *
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ej. Andrés Martínez"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-12 rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Edad *
                        </label>
                        <Input
                          type="number"
                          min="1"
                          max="99"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Ej. 21"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          WhatsApp (con indicativo) *
                        </label>
                        <Input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="Ej. +57 300 123 4567"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-12 rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Correo electrónico *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tucorreo@ejemplo.com"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 rounded-full font-medium text-sm px-7 py-3.5 bg-white text-black hover:scale-[1.03] transition-transform duration-300"
                      >
                        Siguiente paso
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 2: Disponibilidad y Cartagena */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          ¿Vives en Cartagena y puedes asistir presencial? *
                        </label>
                        <select
                          name="livesInCartagena"
                          value={formData.livesInCartagena}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white focus:border-[#26BDF0] focus:outline-none h-12"
                        >
                          <option value="si" className="bg-[#07060F]">Sí, resido en Cartagena</option>
                          <option value="no" className="bg-[#07060F]">No vivo en Cartagena</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Turno disponible de Lunes a Viernes *
                        </label>
                        <select
                          name="shift"
                          value={formData.shift}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white focus:border-[#26BDF0] focus:outline-none h-12"
                        >
                          <option value="" className="bg-[#07060F]">Selecciona un turno...</option>
                          <option value="Turno Mañana (8:30 am - 12:30 pm)" className="bg-[#07060F]">
                            Turno Mañana: 8:30 am – 12:30 pm
                          </option>
                          <option value="Turno Tarde (1:30 pm - 5:30 pm)" className="bg-[#07060F]">
                            Turno Tarde: 1:30 pm – 5:30 pm
                          </option>
                          <option value="Ambos turnos me sirven (flexible)" className="bg-[#07060F]">
                            Ambos turnos me sirven (flexible)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        ¿Estudias actualmente o tienes otros compromisos en esos horarios?
                      </label>
                      <Input
                        name="otherCommitments"
                        value={formData.otherCommitments}
                        onChange={handleChange}
                        placeholder="Ej. Estudio en la noche de 6 a 10pm / Tengo disponibilidad total"
                        className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-12 rounded-xl"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 rounded-full font-medium text-sm px-7 py-3.5 bg-white text-black hover:scale-[1.03] transition-transform duration-300"
                      >
                        Siguiente paso
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* PASO 3: Área, Motivación y Envío */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-2">
                        Selecciona el área principal a la que aplicas *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {AREAS.map((a) => {
                          const isSelected = formData.area === a.title;
                          return (
                            <button
                              type="button"
                              key={a.id}
                              onClick={() => selectArea(a.title)}
                              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                                isSelected
                                  ? "bg-[#0F76D6]/25 border-[#26BDF0] shadow-[0_0_20px_rgba(38,189,240,0.35)]"
                                  : "bg-white/[0.02] border-white/10 hover:border-white/25"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-lg">
                                  {a.id === "growth" && "📈"}
                                  {a.id === "contenido" && "🎨"}
                                  {a.id === "desarrollo" && "💻"}
                                  {a.id === "ia-automatizacion" && "🤖"}
                                  {a.id === "operaciones" && "📋"}
                                </span>
                                <span className="text-xs font-medium text-white">
                                  {a.title}
                                </span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-[#26BDF0]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        ¿Por qué quieres entrar al Semillero DTGP y qué te gustaría desarrollar en estos 3 meses? *
                      </label>
                      <Textarea
                        required
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Cuéntanos qué área te apasiona, qué proyectos o habilidades quieres desarrollar y qué esperas aportar al equipo..."
                        className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] rounded-xl text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Proyecto o iniciativa previa (Opcional)
                        </label>
                        <Input
                          name="portfolioOrProject"
                          value={formData.portfolioOrProject}
                          onChange={handleChange}
                          placeholder="Ej. He editado videos en CapCut / tengo una tienda"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-11 rounded-xl text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1.5">
                          Enlace a redes / portafolio (Opcional)
                        </label>
                        <Input
                          name="socialLink"
                          value={formData.socialLink}
                          onChange={handleChange}
                          placeholder="https://instagram.com/tu-usuario o LinkedIn"
                          className="bg-black/60 border-white/15 text-white focus:border-[#26BDF0] h-11 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Adjuntar CV / Hoja de vida (Opcional, máx. 5 MB)
                      </label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full p-4 rounded-xl border border-dashed text-left transition-all flex items-center gap-3 ${
                          formData.cvFileName
                            ? "bg-[#0F76D6]/10 border-[#26BDF0]/50 text-[#26BDF0]"
                            : "bg-white/[0.02] border-white/20 text-white/50 hover:border-white/40 hover:text-white/70"
                        }`}
                      >
                        <Upload className="w-5 h-5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          {formData.cvFileName ? (
                            <div>
                              <span className="text-xs font-medium text-white block truncate">{formData.cvFileName}</span>
                              <span className="text-[10px] text-[#26BDF0]">Archivo adjunto ✓ — Click para cambiar</span>
                            </div>
                          ) : (
                            <div>
                              <span className="text-xs font-medium block">Seleccionar archivo PDF, DOC o DOCX</span>
                              <span className="text-[10px]">Sube tu hoja de vida si la tienes disponible</span>
                            </div>
                          )}
                        </div>
                      </button>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          required
                          type="checkbox"
                          name="confirmedTerms"
                          checked={formData.confirmedTerms}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40 text-[#0F76D6] focus:ring-[#26BDF0]"
                        />
                        <span className="text-[11px] text-white/70 leading-relaxed font-light">
                          Confirmo que resido en Cartagena y puedo asistir de{" "}
                          <strong className="text-white">lunes a viernes</strong> en el turno
                          elegido al espacio de cowork en el{" "}
                          <strong className="text-white">Centro de Convenciones</strong>.
                        </span>
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between items-center gap-3">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center gap-2 rounded-full font-medium text-sm px-8 py-4 bg-white text-black hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                      >
                        {status === "sending" ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Guardando en el sistema...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Enviar Postulación al Semillero DTGP
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ======================= PREGUNTAS FRECUENTES ======================= */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto z-10">
          <div className="text-center mb-10 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#26BDF0]">
              // RESOLVEMOS TUS DUDAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl liquid-glass-strong border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#26BDF0] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#26BDF0]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
