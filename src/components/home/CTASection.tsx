import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import BlurText from "@/components/effects/BlurText";
import RotatingWord from "@/components/effects/RotatingWord";
import fondoVideo from "@/assets/fondo-video.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0";

const CTASection = () => {
  const { t } = useLanguage();

  const bullets = [t("cta.noCommitment"), t("cta.duration"), t("cta.free")];

  return (
    <section className="relative min-h-[90vh] bg-[#07060F] overflow-hidden flex items-center">
      {/* Mismo video del hero: cierra el círculo visual de la página */}
      <FadingVideo src={fondoVideo} className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* Franjas de fundido con las secciones vecinas (testimonios y contacto) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 md:h-80 bg-gradient-to-b from-[#07060F] to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 md:h-80 bg-gradient-to-t from-[#07060F] to-transparent z-[5]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-24 text-center flex flex-col items-center">
        <h2 className="flex flex-wrap items-baseline justify-center gap-x-[0.28em] font-heading font-normal text-white text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.02] tracking-[-0.024em] max-w-5xl">
          <BlurText text={t("cta.title")} />
          <RotatingWord words={t("cta.rotating").split("|")} interval={2900} className="font-semibold" innerClassName="gradient-text" />
        </h2>

        <p className="mt-8 text-sm md:text-base text-white/90 font-body font-light max-w-xl">
          {t("cta.subtitle")}
        </p>

        {/* CTA más fuerte de la página: píldora blanca */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black font-body transition-transform duration-300 hover:scale-[1.04]"
        >
          {t("cta.buttonText")}
          <ArrowUpRight className="h-5 w-5" />
        </a>

        {/* Bullets de confianza */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {bullets.map((b) => (
            <span
              key={b}
              className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/90 font-body whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
