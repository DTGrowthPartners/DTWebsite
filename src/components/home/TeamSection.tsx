import { motion } from "framer-motion";
import { Target, MessageCircle, BarChart3, Sparkles, Search, Workflow } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import RotatingWord from "@/components/effects/RotatingWord";
import Aurora from "@/components/effects/Aurora";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Tilt from "@/components/effects/Tilt";
import dairoImg from "@/assets/equipo/dairo.png";
import edgardoImg from "@/assets/equipo/edgardo.png";
import stivenImg from "@/assets/equipo/stiven.png";

/**
 * Órbita de agentes IA: dos anillos girando en sentidos opuestos con 6 nodos
 * (contra-rotados para mantenerse derechos) alrededor de un contador central.
 */
const AGENT_ICONS = [Target, MessageCircle, BarChart3, Sparkles, Search, Workflow];
// [órbita (0=interna, 1=externa), ángulo inicial en grados]
// Ambos anillos giran en la MISMA dirección y velocidad (rotación rígida):
// la geometría relativa es constante y los nodos nunca se cruzan ni tapan.
// Separación angular mínima entre órbitas: 45° → distancia mínima ~170px.
const AGENT_SLOTS: Array<[number, number]> = [
  [0, 90],
  [0, 270],
  [1, 45],
  [1, 135],
  [1, 225],
  [1, 315],
];
const ORBIT_RADII = [145, 240];
const ORBIT_DURATIONS = ["70s", "70s"];

const AgentsOrbit = ({ names, humans }: { names: string[]; humans: { img: string; name: string }[] }) => {
  const { t } = useLanguage();
  return (
    <div className="relative flex items-center justify-center h-[400px] sm:h-[560px] overflow-visible">
      <div className="relative w-[560px] h-[560px] shrink-0 scale-[0.62] sm:scale-100">
        {/* Anillos por órbita, girando en sentidos opuestos */}
        {ORBIT_RADII.map((r, orbit) => (
          <div
            key={`ring-${orbit}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#26BDF0]/20 animate-spin z-20"
            style={{
              width: r * 2,
              height: r * 2,
              marginLeft: -r,
              marginTop: -r,
              animationDuration: ORBIT_DURATIONS[orbit],
            }}
          >
            {/* Destello del anillo */}
            <div className="absolute -top-[2px] left-1/2 w-16 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#26BDF0]/80 to-transparent blur-[1px]" />

            {/* Nodos de esta órbita */}
            {AGENT_SLOTS.map(([o, angle], i) => {
              if (o !== orbit) return null;
              const Icon = AGENT_ICONS[i];
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${angle}deg) translateX(${r}px)` }}
                >
                  {/* Contra-rotación: primero deshace el ángulo fijo, luego el giro del anillo */}
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div
                      className="animate-spin"
                      style={{
                        animationDuration: ORBIT_DURATIONS[orbit],
                        animationDirection: "reverse",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 w-32 -ml-16 -mt-8"
                      >
                        <span className="liquid-glass rounded-2xl w-14 h-14 flex items-center justify-center shadow-[0_0_30px_rgba(15,118,214,0.35)]">
                          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </span>
                        <span className="liquid-glass rounded-full px-2.5 py-1 text-[10px] leading-tight text-white/90 font-body text-center whitespace-nowrap bg-black/40">
                          {names[i]}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Centro: contador de agentes. El wrapper centra (framer pisa los
            translate del hijo con su transform inline, por eso van separados). */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass-strong rounded-full w-36 h-36 flex flex-col items-center justify-center text-center"
        >
          {/* Núcleo humano: los agentes orbitan alrededor del equipo */}
          <div className="flex -space-x-2.5">
            {humans.map((h) => (
              <img
                key={h.name}
                src={h.img}
                alt={h.name}
                className="w-9 h-9 rounded-full object-cover border-2 border-[#0a0918]"
                loading="lazy"
              />
            ))}
          </div>
          <div className="mt-1.5 font-heading font-medium text-white text-2xl leading-none flex items-baseline justify-center gap-0.5">
            +<AnimatedCounter value={6} duration={1.4} />
          </div>
          <div className="text-[10px] text-white font-body mt-0.5">{t("team.agentsCenter")}</div>
          <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/50 mt-0.5">
            {t("team.agentsCenterSub")}
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

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

        {/* Un solo bloque: humanos (izquierda) + agentes IA orbitando (derecha).
            El núcleo de la órbita son las caras del equipo: un solo equipo. */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:items-center">
        <div>
        {/* Móvil: abanico de cartas (superpuestas y rotadas). Desktop: grilla de 3. */}
        <div className="mt-2 flex items-end justify-center sm:grid sm:grid-cols-3 sm:gap-5 sm:items-stretch">
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
              >
                {/* Tilt 3D + glare (transitions.dev #19) en lugar del hover de framer */}
                <Tilt cardClassName="!rounded-[1rem] sm:!rounded-[1.25rem]">
                  <div className="group liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-2.5 sm:p-5 flex flex-col items-center text-center cursor-default bg-[#0a0918]/80">
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
                  </div>
                </Tilt>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Lectura de datos — contadores que cuentan al entrar en viewport */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-8">
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

        {/* Órbita: los agentes IA giran alrededor del núcleo humano */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 text-center">
            {t("team.agentsTitle")} <span className="text-[#26BDF0]">{t("team.agentsHighlight")}</span>
          </span>
          <AgentsOrbit
            names={t("team.agents").split("|")}
            humans={team.map((m) => ({ img: m.image, name: m.name }))}
          />
          <p className="mt-6 text-xs md:text-sm text-white/60 font-body font-light max-w-sm text-center">
            {t("team.agentsSubtitle")}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
