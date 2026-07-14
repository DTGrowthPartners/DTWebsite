import { useLanguage } from "@/context/LanguageContext";
import dairoImg from "@/assets/equipo/dairo.png";
import edgardoImg from "@/assets/equipo/edgardo.png";
import stivenImg from "@/assets/equipo/stiven.png";

const TeamSection = () => {
  const { t } = useLanguage();

  // NOTA: los cargos son editables. Ajusta `role` con el título real de cada persona.
  const team = [
    {
      name: "Dairo Traslaviña",
      role: "Fundador & CEO",
      image: dairoImg,
    },
    {
      name: "Edgardo Meza",
      role: "Desarrollador Web",
      image: edgardoImg,
    },
    {
      name: "Stiven Antequera",
      role: "Desarrollo & Tecnología",
      image: stivenImg,
    },
  ];

  const stats = [
    { value: "+5M USD", labelKey: "common.salesGenerated" },
    { value: "25+", labelKey: "common.completedProjects" },
    { value: "10x", labelKey: "common.averageROI" },
  ];

  return (
    <section id="nosotros" className="py-12 md:py-16 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <span className="relative inline-block text-sm font-medium uppercase tracking-wider">
            <span className="gradient-text">{t("team.label")}</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("team.title")} <span className="gradient-text">{t("team.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12 md:mt-16 pt-10 border-t border-border/40">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
