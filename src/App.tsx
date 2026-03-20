import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";
import MetaAds from "./pages/MetaAds";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import SistemasAutomatizaciones from "./pages/SistemasAutomatizaciones";
import CaseStudyRetailLicores from "./pages/CaseStudyRetailLicores";
import CaseStudyEscalamientoTrimestral from "./pages/CaseStudyEscalamientoTrimestral";
import CaseStudyRestaurante from "./pages/CaseStudyRestaurante";
import NotFound from "./pages/NotFound";

// SEO Service Pages (lazy loaded)
const PublicidadDigitalCartagena = lazy(() => import("./pages/servicios/PublicidadDigitalCartagena"));
const MetaAdsCartagena = lazy(() => import("./pages/servicios/MetaAdsCartagena"));
const FacebookAdsCartagena = lazy(() => import("./pages/servicios/FacebookAdsCartagena"));
const AgenciaPublicidadCartagena = lazy(() => import("./pages/servicios/AgenciaPublicidadCartagena"));
const PautaDigitalCartagena = lazy(() => import("./pages/servicios/PautaDigitalCartagena"));
const InstagramAdsCartagena = lazy(() => import("./pages/servicios/InstagramAdsCartagena"));
const PublicidadRedesSocialesCartagena = lazy(() => import("./pages/servicios/PublicidadRedesSocialesCartagena"));
const AgenciaMarketingDigitalCartagena = lazy(() => import("./pages/servicios/AgenciaMarketingDigitalCartagena"));
const CampanasPublicitariasCartagena = lazy(() => import("./pages/servicios/CampanasPublicitariasCartagena"));
const WhatsAppMarketingCartagena = lazy(() => import("./pages/servicios/WhatsAppMarketingCartagena"));

const queryClient = new QueryClient();

declare global {
  interface Window {
    fbq: (action: string, event: string) => void;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Dispara el evento PageView del Meta Pixel
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }
    };

    // Pequeño delay para asegurar que el pixel esté cargado
    const timer = setTimeout(trackPageView, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/about-me" element={<Navigate to="/#servicios" replace />} />
                <Route path="/gestion-de-anuncios" element={<Navigate to="/servicios/meta-ads" replace />} />
                <Route path="/servicios/meta-ads" element={<MetaAds />} />
                <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
                <Route path="/servicios/sistemas-automatizaciones" element={<SistemasAutomatizaciones />} />
                <Route path="/casos-exito/retail-bebidas" element={<CaseStudyRetailLicores />} />
                <Route path="/casos-exito/escalamiento-trimestral" element={<CaseStudyEscalamientoTrimestral />} />
                <Route path="/casos-exito/reconocimiento-local-restaurante" element={<CaseStudyRestaurante />} />
                {/* SEO Service Pages */}
                <Route path="/servicios/publicidad-digital-cartagena" element={<PublicidadDigitalCartagena />} />
                <Route path="/servicios/meta-ads-cartagena" element={<MetaAdsCartagena />} />
                <Route path="/servicios/facebook-ads-cartagena" element={<FacebookAdsCartagena />} />
                <Route path="/servicios/agencia-publicidad-cartagena" element={<AgenciaPublicidadCartagena />} />
                <Route path="/servicios/pauta-digital-cartagena" element={<PautaDigitalCartagena />} />
                <Route path="/servicios/instagram-ads-cartagena" element={<InstagramAdsCartagena />} />
                <Route path="/servicios/publicidad-redes-sociales-cartagena" element={<PublicidadRedesSocialesCartagena />} />
                <Route path="/servicios/agencia-marketing-digital-cartagena" element={<AgenciaMarketingDigitalCartagena />} />
                <Route path="/servicios/campanas-publicitarias-cartagena" element={<CampanasPublicitariasCartagena />} />
                <Route path="/servicios/whatsapp-marketing-cartagena" element={<WhatsAppMarketingCartagena />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
