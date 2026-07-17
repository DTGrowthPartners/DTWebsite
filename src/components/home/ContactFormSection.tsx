import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import { Send, CheckCircle, XCircle, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

// Declarar grecaptcha en el scope global
declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        theme?: 'light' | 'dark';
        size?: 'compact' | 'normal';
        callback?: (response: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
      ready: (callback: () => void) => void;
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [recaptchaError, setRecaptchaError] = useState<string>("");
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Site key de reCAPTCHA desde variables de entorno
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Lfcok8sAAAAAIEAjC1Q56__W7ao4VYxyGOQ6iLD";

  useEffect(() => {
    // Cargar el widget de reCAPTCHA cuando el componente se monta
    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            theme: 'dark',
            size: 'normal',
            callback: (token: string) => {
              setRecaptchaToken(token);
              setRecaptchaError("");
            },
            'expired-callback': () => {
              setRecaptchaToken("");
              setRecaptchaError("El reCAPTCHA ha expirado. Por favor, inténtalo de nuevo.");
            },
            'error-callback': () => {
              setRecaptchaToken("");
              setRecaptchaError("Error al cargar reCAPTCHA. Verifica tu conexión.");
            }
          });
        } catch (error) {
          console.error('Error al cargar reCAPTCHA:', error);
          setRecaptchaError("Error al inicializar reCAPTCHA. Por favor, recarga la página.");
        }
      }
    };

    // Esperar a que grecaptcha esté listo
    if (window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(loadRecaptcha);
    } else {
      // Si grecaptcha no está disponible, intentar cargar después de un delay
      const timer = setTimeout(loadRecaptcha, 1000);
      return () => clearTimeout(timer);
    }
  }, [RECAPTCHA_SITE_KEY]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = (data: FormData) => {
    const whatsappMessage = `Hola! Soy ${data.firstName} ${data.lastName}.${data.company ? ` De la empresa ${data.company}.` : ""}${data.message ? ` ${data.message}` : ""} Mi correo es ${data.email}${data.phone ? ` y mi teléfono es ${data.phone}` : ""}.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573007189383&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que el usuario haya completado el reCAPTCHA
    if (!recaptchaToken) {
      alert(t("contact.recaptchaError") || "Por favor, completa el reCAPTCHA para continuar.");
      return;
    }

    setStatus("sending");

    const formDataCopy = { ...formData };

    try {
      const response = await fetch(
        "https://os.dtgrowthpartners.com/api/crm/leads/public",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone || undefined,
            company: formData.company || undefined,
            message: formData.message || undefined,
            source: "website",
            sourceDetail: "contact-form",
            recaptchaToken: recaptchaToken, // Enviar el token al backend
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setRecaptchaToken("");
        // Resetear el widget de reCAPTCHA
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
        openWhatsApp(formDataCopy);
      } else {
        setStatus("error");
        // Resetear el widget de reCAPTCHA en caso de error
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
        setRecaptchaToken("");
      }
    } catch {
      setStatus("error");
      // Resetear el widget de reCAPTCHA en caso de error
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      setRecaptchaToken("");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setRecaptchaToken("");
    setRecaptchaError("");
    // Resetear el widget de reCAPTCHA
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
    }
  };

  if (status === "success") {
    return (
      <section id="contacto" className="relative bg-black py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="liquid-glass rounded-[1.25rem] p-12 space-y-6">
              <div className="liquid-glass w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-white text-4xl tracking-[-0.02em]">{t("contact.successTitle")}</h3>
              <p className="text-sm md:text-base text-white/80 font-body font-light">
                {t("contact.successMessage")}
              </p>
              <button
                onClick={resetForm}
                className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white font-body"
              >
                {t("contact.submit")}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section id="contacto" className="relative bg-black py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="liquid-glass rounded-[1.25rem] p-12 space-y-6">
              <div className="liquid-glass w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                <XCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-white text-4xl tracking-[-0.02em]">{t("contact.errorTitle")}</h3>
              <p className="text-sm md:text-base text-white/80 font-body font-light">
                {t("contact.errorMessage")}
              </p>
              <button
                onClick={resetForm}
                className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white font-body"
              >
                {t("contact.submit")}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const fieldCls =
    "w-full h-12 bg-white/[0.06] border border-white/15 rounded-xl px-4 text-base text-white font-body font-light placeholder:text-white/30 hover:border-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#26BDF0]/70 focus-visible:border-[#26BDF0]/70 transition-colors duration-300";
  const labelCls = "font-body text-[13px] font-medium text-white/75";

  return (
    <section id="contacto" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "blue", className: "bottom-[-140px] left-[20%] w-[600px] h-[600px] opacity-25" },
          { color: "purple", className: "top-[-120px] right-[10%] w-[480px] h-[480px] opacity-20", delay: "-5s" },
        ]}
      />
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <span className="text-sm font-body text-white/80">{`// ${t("footer.contact")}`}</span>
        <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.024em] max-w-4xl">
          {t("contact.title")} <RotatingWord words={t("contact.rotating").split("|")} interval={3300} className="font-semibold" />
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("contact.subtitle")}
        </p>

        {/* Canales directos como chips horizontales */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white font-body transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> +57 300 718 9383
          </a>
          <a
            href="mailto:info@dtgrowthpartners.com"
            className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white font-body transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} /> info@dtgrowthpartners.com
          </a>
          <span className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2.5 text-sm text-white/80 font-body">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26BDF0] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26BDF0]" />
            </span>
            {t("contact.responseTime")}
          </span>
        </div>

        {/* Formulario editorial: campos subrayados, sin cajas */}
        <form onSubmit={handleSubmit} className="mt-14 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className={labelCls}>{t("contact.firstName")} *</label>
              <Input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className={fieldCls} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="lastName" className={labelCls}>{t("contact.lastName")} *</label>
              <Input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className={fieldCls} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className={labelCls}>{t("contact.email")} *</label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldCls} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="phone" className={labelCls}>{t("contact.phone")}</label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={fieldCls} />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor="company" className={labelCls}>{t("contact.company")}</label>
              <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className={fieldCls} />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor="message" className={labelCls}>{t("contact.message")}</label>
              <Textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={t("contact.messagePlaceholder")} className={`${fieldCls} h-auto py-3 resize-none min-h-[110px]`} />
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="mt-9">
            <div ref={recaptchaRef}></div>
            {recaptchaError && <p className="mt-2 text-sm text-red-400">{recaptchaError}</p>}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-white text-black font-body font-medium px-10 h-13 hover:bg-white/90 transition-transform duration-300 hover:scale-[1.02] group"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                t("contact.sending")
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {t("contact.submit")}
                </>
              )}
            </Button>
            <span className="font-body text-xs text-white/40">
              {t("cta.noCommitment")} · {t("cta.free")}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
