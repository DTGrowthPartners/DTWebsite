import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FadingVideo from "@/components/effects/FadingVideo";
import BlurText from "@/components/effects/BlurText";
import fondoVideo from "@/assets/fondo-video.mp4";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0";

const CTASection = () => {
  const { t } = useLanguage();

  const bullets = [t("cta.noCommitment"), t("cta.duration"), t("cta.free")];

  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden flex items-center">
      {/* Mismo video del hero: cierra el círculo visual de la página */}
      <FadingVideo src={fondoVideo} className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20 py-24 text-center flex flex-col items-center">
        <BlurText
          text={`${t("cta.title")} ${t("cta.titleHighlight")}`}
          className="font-heading text-white text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-[-0.024em] max-w-5xl"
        />

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
