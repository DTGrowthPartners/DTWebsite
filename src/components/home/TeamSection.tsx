import { useLanguage } from "@/context/LanguageContext";
import dairoImg from "@/assets/equipo/dairo.png";
import edgardoImg from "@/assets/equipo/edgardo.png";
import stivenImg from "@/assets/equipo/stiven.png";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    { name: "Dairo Traslaviña", role: "Fundador & CEO", image: dairoImg },
    { name: "Edgardo Meza", role: "Desarrollador Web", image: edgardoImg },
    { name: "Stiven Antequera", role: "Desarrollo & Tecnología", image: stivenImg },
  ];

  const stats = [
    { value: "+5M USD", labelKey: "common.salesGenerated" },
    { value: "25+", labelKey: "common.completedProjects" },
    { value: "10x", labelKey: "common.averageROI" },
  ];

  return (
    <section id="nosotros" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Glow azul sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(50% 40% at 80% 20%, rgba(38,189,240,0.10), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <span className="text-sm font-body text-white/80">{`// ${t("team.label")}`}</span>
        <h2 className="mt-6 font-heading text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em] max-w-4xl">
          {t("team.title")} <span className="font-semibold">{t("team.titleHighlight")}</span>
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("team.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl">
          {team.map((member) => (
            <div key={member.name} className="liquid-glass rounded-[1.25rem] p-5 flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-[0.9rem] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-heading text-white text-2xl md:text-3xl tracking-[-0.02em] leading-none">
                {member.name}
              </h3>
              <p className="mt-2 text-xs text-white/70 font-body font-light">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Lectura de datos */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-x-16 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.value}>
              <div className="font-heading text-white text-4xl md:text-5xl tracking-[-0.02em] leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-white/70 font-body font-light mt-2">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
