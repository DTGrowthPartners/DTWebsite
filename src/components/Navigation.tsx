import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/DT-GROWTH-LOGO.png";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, TrendingUp, Code, Zap, Megaphone, Target, Facebook, Instagram, Share2, BarChart3, MessageCircle, Users, ArrowUpRight, Hotel } from "lucide-react";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { scrollToTarget } from "@/lib/smooth-scroll";

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

  /* Menú móvil "isla" (CodePen JoRMPLg de GreenSock): timeline pausada que
     entra con rebote back.out y sale suave gracias a easeReverse (GSAP 3.14). */
  const navRef = useRef<HTMLElement>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const mobileBackdropRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileTlRef = useRef<gsap.core.Timeline | null>(null);
  const isOpenRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      mobileTlRef.current = gsap
        .timeline({ paused: true })
        .set(mobileOverlayRef.current, { pointerEvents: "auto" })
        .to(mobileBackdropRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0)
        // Hamburguesa → X (la barra central se desvanece, las otras se cruzan)
        .to(".mm-bar-mid", { opacity: 0, duration: 0.15, ease: "power2.in", easeReverse: true }, 0)
        .to(".mm-bar-top", { attr: { x1: 3, y1: 3, x2: 13, y2: 13 }, duration: 0.28, ease: "power3.inOut" }, 0)
        .to(".mm-bar-bot", { attr: { x1: 13, y1: 3, x2: 3, y2: 13 }, duration: 0.28, ease: "power3.inOut" }, 0)
        // El panel cae con rebote, pero se retira con una curva suave
        .from(
          mobilePanelRef.current,
          { autoAlpha: 0, yPercent: -8, scale: 0.6, duration: 0.8, transformOrigin: "top right", ease: "back.out(2)", easeReverse: "power3.out" },
          0.1
        )
        .from(".mm-link", { opacity: 0, y: 8, duration: 0.32, ease: "power2.out", easeReverse: true, stagger: 0.05 }, 0.22);
    }, navRef);
    return () => ctx.revert();
  }, []);

  const prefersReduced = () =>
    typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const openMobile = () => {
    isOpenRef.current = true;
    setIsOpen(true);
    mobileTlRef.current?.timeScale(prefersReduced() ? 100 : 1).play();
  };

  const closeMobile = () => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setIsOpen(false);
    const tl = mobileTlRef.current;
    if (!tl) return;
    tl.eventCallback("onReverseComplete", () => gsap.set(mobileOverlayRef.current, { pointerEvents: "none" }));
    // Salida un poco más rápida que la entrada (como el exit speed del pen)
    tl.timeScale(prefersReduced() ? 100 : 1.6).reverse();
  };

  // Escape cierra el menú móvil
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    { name: t("nav.cases"), path: "/#casos" },
    { name: t("nav.team"), path: "/#nosotros" },
    { name: t("nav.method"), path: "/#metodo" },
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
      const NAV_OFFSET = -80; // compensa el navbar fijo

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) scrollToTarget(element, { offset: NAV_OFFSET });
        }, 300);
      } else {
        const element = document.getElementById(hash);
        if (element) scrollToTarget(element, { offset: NAV_OFFSET });
      }
    } else {
      navigate(path);
    }

    closeMobile();
    setServicesOpen(false);
    setSubMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSubMenuOpen(false);
  };

  const closeAll = () => {
    closeMobile();
    setServicesOpen(false);
    setSubMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSubMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-4 w-full z-50 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative z-10 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="DT Growth" width={110} />
          </Link>

          {/* Desktop Navigation — pill de cristal (overflow visible para que
              el dropdown de Servicios no quede recortado por .liquid-glass) */}
          <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5" style={{ overflow: "visible" }}>
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
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
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
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
                <div className="bg-[#07060F]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.55)] p-2 min-w-[280px]">
                  {/* Meta Ads */}
                  <Link
                    to="/servicios/meta-ads"
                    onClick={closeAll}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group"
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
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group"
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
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span>{t("nav.services.automation")}</span>
                  </Link>

                  {/* Sistema para Hoteles */}
                  <Link
                    to="/servicios/sistema-hoteles"
                    onClick={closeAll}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Hotel className="w-4 h-4 text-primary" />
                    </div>
                    <span>{t("nav.services.hotels")}</span>
                  </Link>

                  {/* Divider */}
                  <div className="my-1.5 mx-3 border-t border-border/30" />

                  {/* Publicidad Digital - WITH SUB-DROPDOWN */}
                  <div
                    className="relative"
                    onMouseEnter={handleSubMouseEnter}
                    onMouseLeave={handleSubMouseLeave}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group cursor-pointer">
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
                      <div className="bg-[#07060F]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.55)] p-2 min-w-[250px] max-h-[70vh] overflow-y-auto">
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
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/95 hover:text-white hover:bg-primary/10 transition-all duration-200 group"
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

            {/* Rest of nav links (Cases, Team, Method) */}
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black font-body whitespace-nowrap transition-transform duration-300 hover:scale-[1.04]"
            >
              {t("common.consultation")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mx-2 flex items-center space-x-1.5">
              <span className="text-xs text-white/70 font-body">{t("language.es")}</span>
              <div
                className="relative inline-block w-8 h-4 bg-white/20 rounded-full cursor-pointer"
                onClick={toggleLanguage}
              >
                <div
                  className={`absolute w-3 h-3 bg-white rounded-full top-0.5 transition-transform duration-300 ${language === "es" ? "left-0.5" : "right-0.5"}`}
                />
              </div>
              <span className="text-xs text-white/70 font-body">{t("language.en")}</span>
            </div>
          </div>

          {/* Mobile Menu Button — hamburguesa que se transforma en X vía GSAP */}
          <button
            className="md:hidden liquid-glass rounded-full w-11 h-11 flex items-center justify-center text-white"
            onClick={() => (isOpenRef.current ? closeMobile() : openMobile())}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ overflow: "visible" }}>
              <line className="mm-bar-top" x1="2" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line className="mm-bar-mid" x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line className="mm-bar-bot" x1="2" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation — overlay siempre montado; GSAP lo abre/cierra */}
        <div ref={mobileOverlayRef} className="md:hidden fixed inset-0 z-0 pointer-events-none">
          <div
            ref={mobileBackdropRef}
            className="absolute inset-0 bg-[#07060F]/80 backdrop-blur-md opacity-0"
            onClick={closeMobile}
          />
          <div
            ref={mobilePanelRef}
            className="absolute left-4 right-4 top-[4.5rem] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.5rem] bg-[#07060F]/85 backdrop-blur-2xl border border-white/10 p-6"
          >
            <div className="flex flex-col space-y-4">
              {/* Home */}
              <a
                href="/"
                onClick={(e) => handleNavClick(e, "/")}
                className="mm-link text-white/95 hover:text-white transition-colors"
              >
                {t("nav.home")}
              </a>

              {/* Services Accordion (Mobile) */}
              <div className="mm-link">
                <button
                  className="flex items-center justify-between w-full text-white/95 hover:text-white transition-colors"
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
                    <Link to="/servicios/meta-ads" onClick={closeAll} className="flex items-center gap-3 text-sm text-white/95 hover:text-white transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.metaAds")}</span>
                    </Link>
                    <Link to="/servicios/desarrollo-web" onClick={closeAll} className="flex items-center gap-3 text-sm text-white/95 hover:text-white transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Code className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.webDev")}</span>
                    </Link>
                    <Link to="/servicios/sistemas-automatizaciones" onClick={closeAll} className="flex items-center gap-3 text-sm text-white/95 hover:text-white transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.automation")}</span>
                    </Link>
                    <Link to="/servicios/sistema-hoteles" onClick={closeAll} className="flex items-center gap-3 text-sm text-white/95 hover:text-white transition-colors">
                      <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center"><Hotel className="w-3.5 h-3.5 text-primary" /></div>
                      <span>{t("nav.services.hotels")}</span>
                    </Link>

                    {/* Publicidad Digital sub-accordion */}
                    <div className="border-t border-border/20 pt-2">
                      <button
                        className="flex items-center justify-between w-full text-sm text-white/95 hover:text-white transition-colors"
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
                                className="flex items-center gap-2.5 text-xs text-white/95 hover:text-white transition-colors"
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
                  className={`mm-link relative text-white/95 hover:text-white transition-colors ${link.name === "DT-OS" ? "animate-pulse gradient-text font-bold" : ""}`}
                >
                  {link.name}
                  {link.name === "DT-OS" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-100 transition-transform duration-300 ease-in-out" />
                  )}
                </a>
              ))}

              <Button asChild className="mm-link btn-primary w-full">
                <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  {t("common.consultation")}
                </a>
              </Button>
              <div className="mm-link mt-4 flex items-center justify-center space-x-2">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
