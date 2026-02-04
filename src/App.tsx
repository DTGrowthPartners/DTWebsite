import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import MetaAds from "./pages/MetaAds";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import SistemasAutomatizaciones from "./pages/SistemasAutomatizaciones";
import CaseStudyRetailLicores from "./pages/CaseStudyRetailLicores";
import CaseStudyEscalamientoTrimestral from "./pages/CaseStudyEscalamientoTrimestral";
import CaseStudyRestaurante from "./pages/CaseStudyRestaurante";
import NotFound from "./pages/NotFound";

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
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about-me" element={<Navigate to="/#servicios" replace />} />
            <Route path="/servicios/meta-ads" element={<MetaAds />} />
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/sistemas-automatizaciones" element={<SistemasAutomatizaciones />} />
            <Route path="/casos-exito/retail-bebidas" element={<CaseStudyRetailLicores />} />
            <Route path="/casos-exito/escalamiento-trimestral" element={<CaseStudyEscalamientoTrimestral />} />
            <Route path="/casos-exito/reconocimiento-local-restaurante" element={<CaseStudyRestaurante />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
