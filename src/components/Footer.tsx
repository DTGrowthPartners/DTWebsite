import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/DT-GROWTH-LOGO.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className=" bg-card" style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)"}}>
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                   <Link to="/" className="flex items-center space-x-2 py-2" id="logito">
                       <img src={logo} alt="DT Growth" width={170} />

                 </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>{t("footer.address")}</p>
              <p>{t("footer.hours")}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/servicios/meta-ads" className="hover:text-primary transition-colors">
                  Meta Ads Performance
                </Link>
              </li>
              <li>
                <Link to="/servicios/desarrollo-web" className="hover:text-primary transition-colors">
                  {t("services.webDev")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-automatizaciones" className="hover:text-primary transition-colors">
                  {t("services.automation")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#casos" className="hover:text-primary transition-colors">
                  {t("nav.cases")}
                </a>
              </li>
              <li>
                <a href="/#dt-os" className="hover:text-primary transition-colors">
                  DT-OS
                </a>
              </li>
              <li>
                <a href="/#metodo" className="hover:text-primary transition-colors">
                  {t("method.label")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
             <li>
                <a href="https://www.linkedin.com/company/dtgrowth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/dairotraslav" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              
              <li>
                <a href="https://www.instagram.com/dtgrowthpartners/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
               </li>
                <li>
                <a href="mailto:dtgrowthpartners.com" className="hover:text-primary transition-colors">
                 info@dtgrowthpartners.com
                </a>
              </li>
            </ul>
          </div>

         
        </div>

        <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DT Growth Partners. {t("footer.copyright")}</p>
        </div>
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
      </div>
    </footer>
  );
};

export default Footer;
