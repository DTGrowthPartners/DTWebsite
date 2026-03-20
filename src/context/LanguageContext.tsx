import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.dt-os": "DT-OS",
    "nav.cases": "Success Cases",
    "nav.consultation": "Schedule a Consultation",
    "nav.services.metaAds": "Meta Ads",
    "nav.services.webDev": "Web Development",
    "nav.services.automation": "Automations & AI",
    "nav.services.digitalAds": "Digital Advertising",

    // Pagination
    "pagination.previous": "Previous",
    "pagination.next": "Next",
    "pagination.more": "More pages",

    // Language switch
    "language.en": "EN",
    "language.es": "ES",

    // Common
    "common.consultation": "Schedule a Consultation",
    "common.growthEngine": "Your growth engine",
    "common.scaleWithScience": "We scale businesses with science, not guesswork",
    "common.scaleDescription": "Strategies, technology and AI applied to companies seeking sustainable and measurable growth.",
    "common.seeCases": "See Success Cases",
    "common.managedAds": "Managed in Ads",
    "common.completedProjects": "Completed Projects",
    "common.averageROI": "Average ROI",
    "common.salesGenerated": "Sales generated",

    // Hero Section
    "hero.growthEngine": "Your growth engine",
    "hero.scaleWithScience.before": "We scale businesses with ",
    "hero.scaleWithScience.highlight": "science",
    "hero.scaleWithScience.after": ", not guesswork",
    "hero.scaleDescription": "Strategies, technology and AI applied to companies seeking sustainable and measurable growth.",
    "hero.consultation": "Schedule a Consultation",
    "hero.seeCases": "See Success Cases",

    // Services Section
    "services.title": "Growth in all",
    "services.titleHighlight": "dimensions",
    "services.subtitle": "Performance, development and systems working together to scale your business",
    "services.metaAds": "Meta Ads",
    "services.metaAdsDesc": "Facebook and Instagram advertising campaigns that generate leads and real sales, with continuous optimization and clear reports.",
    "services.metaAdsHighlights": "Measurable ROI,Structured testing,Smart scaling",
    "services.webDev": "Web Development",
    "services.webDevDesc": "Websites, landing pages and online stores designed to convert visitors into customers.",
    "services.webDevHighlights": "Next.js & React,Shopify stores,Conversion optimized",
    "services.automation": "Automations & AI",
    "services.automationDesc": "Automated workflows and AI agents working 24/7 so your team focuses on what matters.",
    "services.automationHighlights": "Zapier & Make,Custom AI agents,Automated email marketing",
    "services.chatbots": "Smart Chatbots",
    "services.chatbotsDesc": "Virtual assistants that respond, qualify leads and close sales on WhatsApp and your website.",
    "services.chatbotsHighlights": "WhatsApp Business API,24/7 support,CRM integration",
    "services.seeMore": "See full service",

    // DT-OS Section
    "dtos.title": "All your growth",
    "dtos.titleHighlight": "in one place",
    "dtos.subtitle": "Access your personal dashboard with real-time metrics, request work from the team and consult your AI advisor — all from a single platform.",
    "dtos.campaigns": "Campaign Dashboard",
    "dtos.campaignsDesc": "Visualize your campaign performance, invested budget and results in real-time.",
    "dtos.aiAdvisor": "AI Advisor",
    "dtos.aiAdvisorDesc": "An intelligent agent that answers questions about your business and gives you growth recommendations 24/7.",
    "dtos.jobRequest": "Job Request",
    "dtos.jobRequestDesc": "Create briefs and request creativities, campaigns or adjustments directly from the team.",
    "dtos.calendar": "Marketing Calendar",
    "dtos.calendarDesc": "See what is being worked on, delivery dates and upcoming planned actions.",
    "dtos.resources": "Resource Center",
    "dtos.resourcesDesc": "Access reports, approved creativities and all your brand assets.",

    // Method Section
    "method.label": "The DT Method",
    "method.title": "How we take your business to the",
    "method.titleHighlight": "next level",
    "method.subtitle": "A 3-phase system for generating real and sustainable growth.",
    "method.step1": "We understand your business",
    "method.step1Desc": "We analyze your current situation, competition and opportunities to find the most profitable quick wins.",
    "method.step1Details": "Current marketing audit,Competitive analysis,Opportunity identification",
    "method.step2": "We design the strategy",
    "method.step2Desc": "We define clear objectives, priority channels and a roadmap with dates and success metrics.",
    "method.step2Details": "Clear metrics objectives,Impact prioritization,Implementation timeline",
    "method.step3": "We execute and optimize",
    "method.step3Desc": "We launch campaigns, measure results and automate what works to scale.",
    "method.step3Details": "2-week sprints,Continuous optimization,Progressive automation",

    // Cases Section
    "cases.title": "Companies that scaled with",
    "cases.titleHighlight": "data",
    "cases.subtitle": "Real growth cases with our performance, development and automation approach.",
    "cases.ecommerce": "E-commerce Fashion",
    "cases.fashionIndustry": "Physical Store",
    "cases.ecommerceDesc": "Meta Ads campaign optimization with structured creative testing",
    "cases.clinic": "Beauty Clinic",
    "cases.healthIndustry": "Health",
    "cases.clinicDesc": "Lead campaigns for WhatsApp with audience temperature segmentation",
    "cases.localRetail": "Custom Web Development",
    "cases.webIndustry": "B2B Industry",
    "cases.localRetailDesc": "Website created for a portable container and bathroom rental company. Design focused on SEO, quote automation, and B2B lead capture ready for contact.",
    "cases.webMetric1": "+320% more quotes",
    "cases.webMetric2": "3.1x conversion",
    "cases.webMetric3": "-45% response time",

    // Brands Section
    "brands.trustedBy": "Brands that trust us",

    // Testimonials Section
    "testimonials.label": "Testimonials",
    "testimonials.title": "What our",
    "testimonials.titleHighlight": "clients say",

    // CTA Section
    "cta.title": "Ready to",
    "cta.titleHighlight": "scale?",
    "cta.subtitle": "Schedule a free 25-minute strategic session. No commitment. Just actionable insights for your business.",
    "cta.buttonText": "Schedule your Session",
    "cta.noCommitment": "No commitment",
    "cta.duration": "25 minutes",
    "cta.free": "100% free",

    // Contact Form Section
    "contact.title": "Let's talk about your",
    "contact.titleHighlight": "growth",
    "contact.subtitle": "Fill out the form and we'll contact you shortly to discuss how we can help scale your business.",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.phone": "Phone (optional)",
    "contact.company": "Company (optional)",
    "contact.message": "How can we help you?",
    "contact.messagePlaceholder": "Tell us about your business and goals...",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.successTitle": "Message sent!",
    "contact.successMessage": "Thank you for contacting us. We'll get back to you shortly.",
    "contact.errorTitle": "Error",
    "contact.errorMessage": "There was a problem sending your message. Please try again.",
    "contact.recaptchaError": "Please complete the reCAPTCHA to continue.",

    // Footer
    "footer.description": "We are a consulting company focused on helping businesses grow and scale through smart marketing, digital optimization and powerful sales channels.",
    "footer.address": "Cartagena de Indias Convention Center, third floor.",
    "footer.hours": "Monday - Friday: 8:00 am - 6:00 pm",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.copyright": "🚀  Latin roots, global reach.",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.dt-os": "DT-OS",
    "nav.cases": "Casos de Éxito",
    "nav.consultation": "Agenda una Consultoría",
    "nav.services.metaAds": "Meta Ads",
    "nav.services.webDev": "Desarrollo Web",
    "nav.services.automation": "Automatizaciones & IA",
    "nav.services.digitalAds": "Publicidad Digital",

    // Pagination
    "pagination.previous": "Anterior",
    "pagination.next": "Siguiente",
    "pagination.more": "Más páginas",

    // Language switch
    "language.en": "EN",
    "language.es": "ES",

    // Common
    "common.consultation": "Agenda una Consultoría",
    "common.growthEngine": "Tu motor de crecimiento",
    "common.scaleWithScience": "Escalamos negocios con ciencia, no suposiciones",
    "common.scaleDescription": "Estrategias, tecnología e IA aplicadas para empresas que buscan crecimiento sostenible y medible.",
    "common.seeCases": "Ver Casos de Éxito",
    "common.managedAds": "Gestionados en Ads",
    "common.completedProjects": "Proyectos Completados",
    "common.averageROI": "ROI Promedio",
    "common.salesGenerated": "Ventas generadas",

    // Hero Section
    "hero.growthEngine": "Tu motor de crecimiento",
    "hero.scaleWithScience.before": "Escalamos negocios con ",
    "hero.scaleWithScience.highlight": "ciencia",
    "hero.scaleWithScience.after": ", no suposiciones",
    "hero.scaleDescription": "Estrategias, tecnología e IA aplicadas a empresas que buscan crecimiento sostenible y medible.",
    "hero.consultation": "Agendar Consulta",
    "hero.seeCases": "Ver Casos de Éxito",

    // Services Section
    "services.title": "Crecimiento en todas las",
    "services.titleHighlight": "dimensiones",
    "services.subtitle": "Performance, desarrollo y sistemas trabajando en conjunto para escalar tu negocio",
    "services.metaAds": "Meta Ads",
    "services.metaAdsDesc": "Campañas de publicidad en Facebook e Instagram que generan leads y ventas reales, con optimización continua y reportes claros.",
    "services.metaAdsHighlights": "ROI medible,Testing estructurado,Escalamiento inteligente",
    "services.webDev": "Desarrollo Web",
    "services.webDevDesc": "Sitios web, landing pages y tiendas online diseñadas para convertir visitante en clientes.",
    "services.webDevHighlights": "Next.js & React,Shopify stores,Optimizados para conversión",
    "services.automation": "Automatizaciones & IA",
    "services.automationDesc": "Flujos automatizados y agentes de IA que trabajan 24/7 para que tu equipo se enfoque en lo importante.",
    "services.automationHighlights": "Zapier & Make,Agentes de IA personalizados,Email marketing automatizado",
    "services.chatbots": "Chatbots Inteligentes",
    "services.chatbotsDesc": "Asistentes virtuales que responden, califican leads y cierran ventas en WhatsApp y tu sitio web.",
    "services.chatbotsHighlights": "WhatsApp Business API,Atención 24/7,Integración con CRM",
    "services.seeMore": "Ver servicio completo",

    // DT-OS Section
    "dtos.title": "Todo tu crecimiento",
    "dtos.titleHighlight": "en un solo lugar",
    "dtos.subtitle": "Accede a tu dashboard personal con métricas en tiempo real, solicita trabajos al equipo y consulta a tu asesor de IA — todo desde una sola plataforma.",
    "dtos.campaigns": "Tablero de Campañas",
    "dtos.campaignsDesc": "Visualiza el rendimiento de tus campañas, presupuesto invertido y resultados en tiempo real.",
    "dtos.aiAdvisor": "Asesor de IA",
    "dtos.aiAdvisorDesc": "Un agente inteligente que responde preguntas sobre tu negocio y te da recomendaciones de crecimiento 24/7.",
    "dtos.jobRequest": "Solicitud de Trabajos",
    "dtos.jobRequestDesc": "Crea briefs y solicita creatividades, campañas o ajustes directamente al equipo.",
    "dtos.calendar": "Calendario de Marketing",
    "dtos.calendarDesc": "Ve qué se está trabajando, fechas de entrega y próximas acciones planificadas.",
    "dtos.resources": "Centro de Recursos",
    "dtos.resourcesDesc": "Accede a reportes, creatividades aprobadas y todos los assets de tu marca.",

    // Method Section
    "method.label": "El Método DT",
    "method.title": "Cómo llevamos tu negocio al",
    "method.titleHighlight": "siguiente nivel",
    "method.subtitle": "Un sistema de 3 fases para generar crecimiento real y sostenible.",
    "method.step1": "Entendemos tu negocio",
    "method.step1Desc": "Analizamos tu situación actual, competencia y oportunidades para encontrar los quick wins más rentables.",
    "method.step1Details": "Auditoría de marketing actual,Análisis de competencia,Identificación de oportunidades",
    "method.step2": "Diseñamos la estrategia",
    "method.step2Desc": "Definimos objetivos claros, canales prioritarios y un roadmap con fechas y métricas de éxito.",
    "method.step2Details": "Objetivos con métricas claras,Priorización por impacto,Timeline de implementación",
    "method.step3": "Ejecutamos y optimizamos",
    "method.step3Desc": "Lanzamos campañas, medimos resultados y automatizamos lo que funciona para escalar.",
    "method.step3Details": "Sprints de 2 semanas,Optimización continua,Automatización progresiva",

    // Cases Section
    "cases.title": "Empresas que escalaron con",
    "cases.titleHighlight": "datos",
    "cases.subtitle": "Casos reales de crecimiento con nuestro enfoque de performance, desarrollo y automatización.",
    "cases.ecommerce": "Tienda de moda",
    "cases.fashionIndustry": "Tienda física",
    "cases.ecommerceDesc": "Optimización de campañas Meta Ads con creative testing estructurado",
    "cases.clinic": "Clínica de Estética",
    "cases.healthIndustry": "Salud",
    "cases.clinicDesc": "Campañas de leads para WhatsApp con segmentación por temperatura de audiencia",
    "cases.localRetail": "Desarrollo Web a la Medida",
    "cases.webIndustry": "Industria B2B",
    "cases.localRetailDesc": "Sitio web creado para una empresa de alquiler de contenedores y baños portátiles. Diseño enfocado en SEO, automatización de cotizaciones y captación de leads B2B listos para contacto.",
    "cases.webMetric1": "+320% más cotizaciones",
    "cases.webMetric2": "3.1x conversión",
    "cases.webMetric3": "-45% tiempo de respuesta",

    // Brands Section
    "brands.trustedBy": "Marcas que confían en nosotros",

    // Testimonials Section
    "testimonials.label": "Testimonios",
    "testimonials.title": "Lo que dicen nuestros",
    "testimonials.titleHighlight": "clientes",

    // CTA Section
    "cta.title": "¿Listo para",
    "cta.titleHighlight": "escalar?",
    "cta.subtitle": "Agenda una sesión estratégica gratuita de 25 minutos. Sin compromiso. Solo insights accionables para tu negocio.",
    "cta.buttonText": "Programa tu Sesión",
    "cta.noCommitment": "Sin compromiso",
    "cta.duration": "25 minutos",
    "cta.free": "100% gratis",

    // Contact Form Section
    "contact.title": "Hablemos de tu",
    "contact.titleHighlight": "crecimiento",
    "contact.subtitle": "Completa el formulario y nos pondremos en contacto contigo pronto para hablar sobre cómo podemos ayudarte a escalar tu negocio.",
    "contact.firstName": "Nombre",
    "contact.lastName": "Apellido",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono (opcional)",
    "contact.company": "Empresa (opcional)",
    "contact.message": "¿Cómo podemos ayudarte?",
    "contact.messagePlaceholder": "Cuéntanos sobre tu negocio y objetivos...",
    "contact.submit": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.successTitle": "¡Mensaje enviado!",
    "contact.successMessage": "Gracias por contactarnos. Nos pondremos en contacto contigo en breve.",
    "contact.errorTitle": "Error",
    "contact.errorMessage": "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
    "contact.recaptchaError": "Por favor, completa el reCAPTCHA para continuar.",

    // Footer
    "footer.description": "Somos una empresa de consultoría enfocada en ayudar a las empresas a crecer y escalar a través de marketing inteligente, optimización digital y canales de ventas poderosos.",
    "footer.address": "Cartagena de Indias Convention Center, third floor.",
    "footer.hours": "Lunes - Viernes: 8:00 am - 6:00 pm",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",
    "footer.copyright": "🚀 Latin roots , global reach.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language | null;
      return savedLanguage || "es"; // Default to Spanish
    }
    return "es";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "es" ? "en" : "es");
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};