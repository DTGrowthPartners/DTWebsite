import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import Aurora from "@/components/effects/Aurora";
import { Send, CheckCircle, XCircle } from "lucide-react";

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
            theme: 'light',
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

  return (
    <section id="contacto" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "blue", className: "bottom-[-140px] left-[20%] w-[600px] h-[600px] opacity-25" },
          { color: "purple", className: "top-[-120px] right-[10%] w-[480px] h-[480px] opacity-20", delay: "-5s" },
        ]}
      />
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-body text-white/80">{`// ${t("footer.contact")}`}</span>
            <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl leading-[0.95] tracking-[-0.024em]">
              {t("contact.title")} <span className="font-semibold">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="liquid-glass rounded-[1.25rem] p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-body font-medium text-white/85">
                    {t("contact.firstName")} *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white font-body rounded-xl focus-visible:ring-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-body font-medium text-white/85">
                    {t("contact.lastName")} *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white font-body rounded-xl focus-visible:ring-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-body font-medium text-white/85">
                    {t("contact.email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white font-body rounded-xl focus-visible:ring-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-body font-medium text-white/85">
                    {t("contact.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white font-body rounded-xl focus-visible:ring-white/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-body font-medium text-white/85">
                  {t("contact.company")}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white font-body rounded-xl focus-visible:ring-white/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-body font-medium text-white/85">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className="bg-white/5 border-white/10 text-white font-body rounded-xl resize-none focus-visible:ring-white/30"
                />
              </div>

              {/* reCAPTCHA Widget */}
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div ref={recaptchaRef}></div>
                </div>
                {recaptchaError && (
                  <p className="text-sm text-red-500 text-center">{recaptchaError}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-white text-black font-body font-medium hover:bg-white/90 transition-transform duration-300 hover:scale-[1.01]"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  t("contact.sending")
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t("contact.submit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
