import logoArismendy from "@/assets/marcas/1-arismendy.png";
import logoEquilibrio from "@/assets/marcas/2.logo-equilibrio-clinic.png";
import logoBolivarense from "@/assets/marcas/3-El-Bolivarense-logotipo-02.webp";
import logoTradicion from "@/assets/marcas/3.logo-tradicion.png";
import logoTennis from "@/assets/marcas/4-tennis-cartagena.png";
import logoAcbfit from "@/assets/marcas/5.logo-acbfit-4.png";
import logoMedidas from "@/assets/marcas/6-logo-en-medidas-especificas.png";
import logoNeuro from "@/assets/marcas/7-logo-neuro-carolina.png";
import logoMotosTop from "@/assets/marcas/8-MOTOS-TOP-VERT.png";
import logo1A from "@/assets/marcas/13-logo1A.png";
import logoVerzatille from "@/assets/marcas/10-verzatille.png";
import logoAutoexpress from "@/assets/marcas/12-autoexpress.png";
import logoExperiencia from "@/assets/marcas/experiencia-cartagena.png";
import logoCasanova from "@/assets/marcas/logo-roberto-casanova-english-01.svg";
import logoBhk from "@/assets/marcas/bhk.png";
import logoBuzos from "@/assets/buzos-removebg-preview.png";
import logoAventuras from "@/assets/aventuras-removebg-preview.png";

/**
 * Marquee infinito con los logos reales de clientes en su color original
 * (los assets ya están curados para fondo oscuro; filtros de silueta
 * aplastan los logos con detalle interno). El contenido se duplica para
 * que el bucle sea continuo.
 */
const BRANDS = [
  { name: "Arismendy", logo: logoArismendy },
  { name: "Equilibrio Clinic", logo: logoEquilibrio },
  { name: "El Bolivarense", logo: logoBolivarense },
  { name: "Tradición", logo: logoTradicion },
  { name: "Tennis Cartagena", logo: logoTennis },
  { name: "ACB Fit", logo: logoAcbfit },
  { name: "En Medidas Específicas", logo: logoMedidas },
  { name: "Neuro Carolina", logo: logoNeuro },
  { name: "Motos Top", logo: logoMotosTop },
  { name: "1A", logo: logo1A },
  { name: "Verzatille", logo: logoVerzatille },
  { name: "Autoexpress", logo: logoAutoexpress },
  { name: "Experiencia Cartagena", logo: logoExperiencia },
  { name: "Roberto Casanova", logo: logoCasanova },
  { name: "BHK", logo: logoBhk },
  { name: "Buzos", logo: logoBuzos },
  { name: "Aventuras", logo: logoAventuras },
];

const PartnersMarquee = () => (
  <div className="marquee-mask w-full max-w-6xl overflow-hidden">
    <div
      className="flex w-max items-center gap-12 md:gap-16 animate-marquee"
      style={{ "--marquee-duration": "55s" } as React.CSSProperties}
    >
      {[...BRANDS, ...BRANDS].map((brand, i) => (
        <img
          key={`${brand.name}-${i}`}
          src={brand.logo}
          alt={`${brand.name} logo`}
          loading="lazy"
          className="h-8 md:h-10 w-auto max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  </div>
);

export default PartnersMarquee;
