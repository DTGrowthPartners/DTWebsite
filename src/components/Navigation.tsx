import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/DT-GROWTH-LOGO.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, TrendingUp, Code, Zap, Megaphone, Target, Facebook, Instagram, Share2, BarChart3, MessageCircle, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pubDigitalSubItems = [
    { name: "Meta Ads Cartagena", path: "/servicios/meta-ads-cartagena", icon: Target },
    { name: "Facebook Ads", path: "/servicios/facebook-ads-cartagena", icon: Facebook },
    { name: "Instagram Ads", path: "/servicios/instagram-ads-cartagena", icon: Instagram },
    { name: "Pauta Digital", path: "/servicios/pauta-digital-cartagena", icon: BarChart3 },
    { name: "WhatsApp Marketing", path: "/servicios/whatsapp-marketing-cartagena", icon: MessageCircle },
    { name: "Redes Sociales", path: "/servicios/publicidad-redes-sociales-cartagena", icon: Share2 },
    { name: "Agencia de Publicidad", path: "/servicios/agencia-publicidad-cartagena", icon: Users },
    { name: "Marketing Digital", path: "/servicios/agencia-marketing-digital-cartagena", icon: Megaphone },
    { name: "Campañas Publicitarias", path: "/servicios/campanas-publicitarias-cartagena", icon: TrendingUp },
  ];

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.dt-os"), path: "/#dt-os" },
    { name: t("nav.cases"), path: "/#casos" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setSubMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setSubMenuOpen(false);
    }, 250);
  };

  const handleSubMouseEnter = () => {
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubMenuOpen(true);
  };

  const handleSubMouseLeave = () => {
    subTimeoutRef.current = setTimeout(() => setSubMenuOpen(false), 200);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    if (path.includes("#")) {
      const [, hash] = path.split("#");

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }

    setIsOpen(false);
    setServicesOpen(false);
    setSubMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSubMenuOpen(false);
  };

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setSubMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSubMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl transition-all duration-300 py-2">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 py-5">
            <img src={logo} alt="DT Growth" width={120} />
          </Link>

          {/* DT-OS Mobile Icon */}
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
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.home")}
            </a>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {t("nav.services")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* First Level Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-2 min-w-[280px]">
                  {/* Meta Ads */}
                  <Link
                    to="/servicios/meta-ads"
                    onClick={closeAll}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span>{t("nav.services.metaAds")}</span>
                  </Link>

                  {/* Desarrollo Web */}
                  <Link
                    to="/servicios/desarrollo-web"
                    onClick={closeAll}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <span>{t("nav.services.webDev")}</span>
                  </Link>

                  {/* Automatizaciones */}
                  <Link
                    to="/servicios/sistemas-automatizaciones"
                    onClick={closeAll}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span>{t("nav.services.automation")}</span>
                  </Link>

                  {/* Divider */}
                  <div className="my-1.5 mx-3 border-t border-border/30" />

                  {/* Publicidad Digital - WITH SUB-DROPDOWN */}
                  <div
                    className="relative"
                    onMouseEnter={handleSubMouseEnter}
                    onMouseLeave={handleSubMouseLeave}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group cursor-pointer">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Megaphone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="flex-1">{t("nav.services.digitalAds")}</span>
                      <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${subMenuOpen ? "translate-x-0.5" : ""}`} />
                    </div>

                    {/* Second Level Sub-Dropdown */}
                    <div
                      className={`absolute left-full top-0 pl-2 transition-all duration-200 ${
                        subMenuOpen
                          ? "opacity-100 translate-x-0 pointer-events-auto"
                          : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-2 min-w-[250px] max-h-[70vh] overflow-y-auto">
                        {/* Link to main pillar page */}
                        <Link
                          to="/servicios/publicidad-digital-cartagena"
                          onClick={closeAll}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="w-7 h-7 bg-primary/15 rounded-md flex items-center justify-center">
                            <Megaphone className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>Ver todo</span>
                        </Link>

                        <div className="my-1 mx-3 border-t border-border/20" />

                        {/* Sub-items */}
                        {pubDigitalSubItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={closeAll}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group"
                            >
                              <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-3.5 h-3.5 text-primary" />
                              </div>
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of nav links (DT-OS, Cases) */}
            {navLinks.slice(1).map((link) => (
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
              {/* Home */}
              <a
                href="/"
                onClick={(e) => handleNavClick(e, "/")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.home")}
              </a>

              {/* Services Accordion (Mobile) */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {t("nav.services")}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-3 animate-fade-in">
                    {/* Direct services */}
                    <Link to="/servicios/meta-ads" onClick={closeAll} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.metaAds")}</span>
                    </Link>
                    <Link to="/servicios/desarrollo-web" onClick={closeAll} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Code className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.webDev")}</span>
                    </Link>
                    <Link to="/servicios/sistemas-automatizaciones" onClick={closeAll} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.automation")}</span>
                    </Link>

                    {/* Publicidad Digital sub-accordion */}
                    <div className="border-t border-border/20 pt-2">
                      <button
                        className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Megaphone className="w-3.5 h-3.5 text-primary" /></div>
                          <span>{t("nav.services.digitalAds")}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubMenuOpen ? "rotate-180" : ""}`} />
                      </button>

                      {mobileSubMenuOpen && (
                        <div className="mt-2 ml-10 flex flex-col space-y-2.5 animate-fade-in">
                          <Link
                            to="/servicios/publicidad-digital-cartagena"
                            onClick={closeAll}
                            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            → Ver todo
                          </Link>
                          {pubDigitalSubItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeAll}
                                className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Icon className="w-3 h-3 text-primary/70" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* DT-OS and Cases */}
              {navLinks.slice(1).map((link) => (
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
