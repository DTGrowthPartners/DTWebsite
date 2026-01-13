import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/DT-GROWTH-LOGO.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/#servicios" },
    { name: t("nav.dt-os"), path: "/#dt-os" },
    { name: t("nav.cases"), path: "/#casos" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    // Si el path tiene un hash
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");

      // Si no estamos en la página home, primero navegar al home
      if (location.pathname !== "/") {
        navigate("/");
        // Esperar un poco para que la página cargue y luego hacer scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Si ya estamos en home, solo hacer scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Si no hay hash, solo navegar
      navigate(path);
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl transition-all duration-300 py-2">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 py-5">
            <img src={logo} alt="DT Growth" width={120} />
          </Link>

          {/* DT-OS Mobile Icon - only visible on mobile when menu is closed */}
          <div className="md:hidden">
            {!isOpen && (
              <a
                href="/#dt-os"
                onClick={(e) => handleNavClick(e, "/#dt-os")}
                className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                DT-OS
              </a>
            )}
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-muted-foreground hover:text-foreground transition-colors ${link.name === "DT-OS" ? "relative group text-primary" : ""}`}
              >
                {link.name}
                {link.name === "DT-OS" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-100 transition-transform duration-300 ease-in-out" />
                )}
              </a>
            ))}
            <Button asChild className="btn-primary">
              <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                {t("common.consultation")}
              </a>
            </Button>
            <div className="ml-4 flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{t("language.es")}</span>
              <div
                className="relative inline-block w-10 h-5 bg-primary/20 rounded-full cursor-pointer"
                onClick={toggleLanguage}
              >
                <div
                  className={`absolute w-4 h-4 bg-primary rounded-full top-0.5 transition-transform duration-300 ${language === "es" ? "left-0.5" : "right-0.5"}`}
                />
              </div>
              <span className="text-sm text-muted-foreground">{t("language.en")}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`relative text-muted-foreground hover:text-foreground transition-colors ${link.name === "DT-OS" ? "animate-pulse gradient-text font-bold" : ""}`}
                >
                  {link.name}
                  {link.name === "DT-OS" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-100 transition-transform duration-300 ease-in-out" />
                  )}
                </a>
              ))}
              <Button asChild className="btn-primary w-full">
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  {t("common.consultation")}
                </a>
              </Button>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <span className="text-sm text-muted-foreground">{t("language.es")}</span>
                <div
                  className="relative inline-block w-10 h-5 bg-primary/20 rounded-full cursor-pointer"
                  onClick={toggleLanguage}
                >
                  <div
                    className={`absolute w-4 h-4 bg-primary rounded-full top-0.5 transition-transform duration-300 ${language === "es" ? "left-0.5" : "right-0.5"}`}
                  />
                </div>
                <span className="text-sm text-muted-foreground">{t("language.en")}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
