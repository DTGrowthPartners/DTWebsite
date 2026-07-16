import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import dairoImg from "@/assets/equipo/dairo.png";
import edgardoImg from "@/assets/equipo/edgardo.png";
import stivenImg from "@/assets/equipo/stiven.png";

const TeamSection = () => {
  const { t } = useLanguage();

  // Dairo al centro: en móvil el abanico lo pone al frente; en desktop queda protagonista.
  const team = [
    { name: "Edgardo Meza", role: "Desarrollador Web", image: edgardoImg },
    { name: "Dairo Traslaviña", role: "Fundador & CEO", image: dairoImg },
    { name: "Stiven Antequera", role: "Desarrollo & Tecnología", image: stivenImg },
  ];

  // Contadores animados: cuentan hacia arriba cuando la fila entra en viewport
  const stats = [
    { value: 5, prefix: "+", suffix: "M USD", labelKey: "common.salesGenerated" },
    { value: 25, prefix: "", suffix: "+", labelKey: "common.completedProjects" },
    { value: 10, prefix: "", suffix: "x", labelKey: "common.averageROI" },
  ];

  return (
    <section id="nosotros" className="relative bg-[#07060F] py-24 md:py-32 overflow-hidden">
      <Aurora
        blobs={[
          { color: "cyan", className: "top-[-100px] right-[15%] w-[520px] h-[520px] opacity-25" },
          { color: "blue", className: "bottom-[-140px] left-[-100px] w-[560px] h-[560px] opacity-25", delay: "-9s" },
        ]}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-20">
        <span className="text-sm font-body text-white/80">{`// ${t("team.label")}`}</span>
        <h2 className="mt-6 font-heading font-normal text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.024em] max-w-4xl">
          {t("team.title")} <RotatingWord words={t("team.rotating").split("|")} interval={3200} className="font-semibold" />
        </h2>
        <p className="mt-5 text-sm md:text-base text-white/80 font-body font-light max-w-xl">
          {t("team.subtitle")}
        </p>

        {/* Móvil: abanico de cartas (superpuestas y rotadas). Desktop: grilla de 3. */}
        <div className="mt-16 max-w-4xl flex items-end justify-center sm:grid sm:grid-cols-3 sm:gap-6 sm:items-stretch">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`sm:w-auto sm:max-w-none ${
                i === 0
                  ? "w-[34vw] max-w-[135px] -rotate-[8deg] translate-y-4 -mr-10 z-0"
                  : i === 2
                    ? "w-[34vw] max-w-[135px] rotate-[8deg] translate-y-4 -ml-10 z-0"
                    : "w-[42vw] max-w-[165px] z-10"
              } sm:rotate-0 sm:translate-y-0 sm:mx-0 sm:z-auto`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5, scale: 1.02 }}
                className="group liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-2.5 sm:p-5 flex flex-col items-center text-center cursor-default transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(15,118,214,0.3)] bg-[#0a0918]/80"
              >
                <div className="w-full aspect-square rounded-[0.7rem] sm:rounded-[0.9rem] overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-2.5 sm:mt-5 font-heading text-white text-xs sm:text-2xl md:text-3xl tracking-[-0.02em] leading-tight sm:leading-none">
                  {member.name}
                </h3>
                <p className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-white/70 font-body font-light leading-tight">
                  {member.role}
                </p>
                <span className="hidden sm:block mt-3 h-px w-0 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-[#0F76D6] to-[#26BDF0]" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Lectura de datos — contadores que cuentan al entrar en viewport */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-x-16 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.labelKey}>
              <div className="font-heading font-medium text-white text-4xl md:text-5xl tracking-[-0.02em] leading-none">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1.8} />
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
