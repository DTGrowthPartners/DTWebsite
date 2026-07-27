import logoArismendy from "@/assets/marcas/1-arismendy.png";
import logoEquilibrio from "@/assets/marcas/2.logo-equilibrio-clinic.png";
import logoBolivarense from "@/assets/marcas/3-El-Bolivarense-logotipo-02.png";
import logoTradicion from "@/assets/marcas/3.logo-tradicion.png";
import logoTennis from "@/assets/marcas/4-tennis-cartagena.png";
import logoAcb from "@/assets/marcas/logo-acb.png";
import logoMedidas from "@/assets/marcas/6-logo-en-medidas-especificas.png";
import logoNeuro from "@/assets/marcas/7-logo-neuro-carolina.png";
import logoMotosTop from "@/assets/marcas/8-MOTOS-TOP-VERT.png";
import logo1A from "@/assets/marcas/13-logo1A.png";
import logoVerzatille from "@/assets/marcas/10-verzatille.png";
import logoAutoexpress from "@/assets/marcas/12-autoexpress.png";
import logoExperiencia from "@/assets/marcas/experiencia-cartagena.png";
import logoCasanova from "@/assets/marcas/logo-roberto-casanova-english-01.png";
import logoBhk from "@/assets/marcas/bhk.png";
import logoChancletas from "@/assets/marcas/chancletas.png";
import logoCompuXtreme from "@/assets/marcas/compu-xtreme.png";
import logoImportaciones from "@/assets/marcas/importaciones-cartagena.png";
import logoInnovacion from "@/assets/marcas/innovacion-logo.png";
import logoLaCantina from "@/assets/marcas/la-cantina-logo.png";
import logoCeenford from "@/assets/marcas/logo-ceenford.png";
import logoOnExpress from "@/assets/marcas/logo-onexpress.png";
import logoSantaAlejandria from "@/assets/marcas/logo-santa-alejandria-tb6Rekx9.png";
import logoNanoPlush from "@/assets/marcas/nano-plush.webp";
import logoVitrina from "@/assets/marcas/vitrina-comercial-cartagena.png";

/**
 * Marquee infinito de logos reales en 3 filas que se desplazan solas
 * (la central en sentido contrario, cada una a su ritmo). Los assets van en
 * su color original; el contenido de cada fila se duplica para bucle continuo.
 */
type Brand = { name: string; logo: string };

const ROWS: Brand[][] = [
  [
    { name: "Arismendy", logo: logoArismendy },
    { name: "Equilibrio Clinic", logo: logoEquilibrio },
    { name: "El Bolivarense", logo: logoBolivarense },
    { name: "Tradición", logo: logoTradicion },
    { name: "Tennis Cartagena", logo: logoTennis },
    { name: "ACB Fit", logo: logoAcb },
    { name: "En Medidas Específicas", logo: logoMedidas },
    { name: "Neuro Carolina", logo: logoNeuro },
    { name: "Motos Top", logo: logoMotosTop },
    { name: "1A", logo: logo1A },
  ],
  [
    { name: "Verzatille", logo: logoVerzatille },
    { name: "Autoexpress", logo: logoAutoexpress },
    { name: "Experiencia Cartagena", logo: logoExperiencia },
    { name: "Roberto Casanova", logo: logoCasanova },
    { name: "BHK", logo: logoBhk },
    { name: "Chancletas", logo: logoChancletas },
    { name: "Compu Xtreme", logo: logoCompuXtreme },
    { name: "Importaciones Cartagena", logo: logoImportaciones },
  ],
  [
    { name: "Innovación", logo: logoInnovacion },
    { name: "La Cantina", logo: logoLaCantina },
    { name: "Ceenford", logo: logoCeenford },
    { name: "OnExpress", logo: logoOnExpress },
    { name: "Santa Alejandría", logo: logoSantaAlejandria },
    { name: "Nano Plush", logo: logoNanoPlush },
    { name: "Vitrina Comercial", logo: logoVitrina },
  ],
];

const ROW_DURATIONS = ["58s", "66s", "62s"];

const PartnersMarquee = () => (
  <div className="w-full max-w-6xl flex flex-col gap-6 md:gap-7">
    {ROWS.map((brands, r) => (
      <div key={r} className="marquee-mask overflow-hidden">
        <div
          className="flex w-max items-center gap-12 md:gap-16 animate-marquee"
          style={
            {
              "--marquee-duration": ROW_DURATIONS[r],
              animationDirection: r === 1 ? "reverse" : "normal",
            } as React.CSSProperties
          }
        >
          {[...brands, ...brands].map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={brand.logo}
              alt={`${brand.name} logo`}
              loading="lazy"
              className="h-8 md:h-9 w-auto max-w-[130px] object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PartnersMarquee;
