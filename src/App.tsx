import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
