import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle, XCircle } from "lucide-react";

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
        openWhatsApp(formDataCopy);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <section id="contacto" className="py-12 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-card border border-border/50 rounded-3xl p-12 space-y-6">
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold">{t("contact.successTitle")}</h3>
              <p className="text-lg text-muted-foreground">
                {t("contact.successMessage")}
              </p>
              <Button onClick={resetForm} variant="outline" className="mt-4">
                {t("contact.submit")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section id="contacto" className="py-12 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-card border border-border/50 rounded-3xl p-12 space-y-6">
              <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                <XCircle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold">{t("contact.errorTitle")}</h3>
              <p className="text-lg text-muted-foreground">
                {t("contact.errorMessage")}
              </p>
              <Button onClick={resetForm} variant="outline" className="mt-4">
                {t("contact.submit")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-12 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t("contact.title")}{" "}
              <span className="gradient-text">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-3xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    {t("contact.firstName")} *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    {t("contact.lastName")} *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("contact.email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("contact.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  {t("contact.company")}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className="bg-background/50 border-border/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="btn-primary w-full group"
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
