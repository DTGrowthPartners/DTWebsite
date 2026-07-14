import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/DT-GROWTH-LOGO.png";

const Footer = () => {
  const { t } = useLanguage();

  // Modo presentación: oculta el botón flotante de WhatsApp durante reuniones.
  // Se activa/desactiva con la tecla "P" y se recuerda mientras dure la sesión.
  const [presentationMode, setPresentationMode] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("dt-presentation") === "1"
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "p" || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) return;

      setPresentationMode((prev) => {
        const next = !prev;
        sessionStorage.setItem("dt-presentation", next ? "1" : "0");
        toast(next ? "Modo presentación activado" : "Modo presentación desactivado", {
          description: next
            ? "Botón de WhatsApp oculto. Pulsa \"P\" para mostrarlo."
            : "Botón de WhatsApp visible de nuevo.",
        });
        return next;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-flex py-2" id="logito">
              <img src={logo} alt="DT Growth" width={150} />
            </Link>
            <p className="text-sm text-white/70 font-body font-light leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 space-y-1">
              <p>{t("footer.address")}</p>
              <p>{t("footer.hours")}</p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5">{t("nav.services")}</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body font-light">
              <li>
                <Link to="/servicios/meta-ads" className="hover:text-white transition-colors">
                  Meta Ads Performance
                </Link>
              </li>
              <li>
                <Link to="/servicios/desarrollo-web" className="hover:text-white transition-colors">
                  {t("services.webDev")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-automatizaciones" className="hover:text-white transition-colors">
                  {t("services.automation")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5">{t("footer.company")}</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body font-light">
              <li>
                <a href="/#casos" className="hover:text-white transition-colors">
                  {t("nav.cases")}
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="hover:text-white transition-colors">
                  {t("nav.team")}
                </a>
              </li>
              <li>
                <a href="/#metodo" className="hover:text-white transition-colors">
                  {t("method.label")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5">{t("footer.contact")}</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body font-light">
              <li>
                <a href="https://www.linkedin.com/company/dtgrowth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/dairotraslav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dtgrowthpartners/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:info@dtgrowthpartners.com" className="hover:text-white transition-colors">
                  info@dtgrowthpartners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Firma serif gigante, muy tenue — remate de página */}
        <div
          aria-hidden
          className="mt-16 font-heading text-white/[0.06] text-[16vw] md:text-[10vw] leading-none select-none whitespace-nowrap overflow-hidden"
        >
          DT Growth Partners
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          <p>© {new Date().getFullYear()} DT Growth Partners. {t("footer.copyright")}</p>
        </div>
        {!presentationMode && (
          <a
            href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#012b80] via-[#0D89D6] to-[#40F2FF] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          >
            <img
              src="https://img.icons8.com/ios11/512/FFFFFF/whatsapp.png"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
