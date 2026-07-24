import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import tAcbfit from "@/assets/webs/acbfit-tile.webp";
import tAya from "@/assets/webs/aya-tile.webp";
import tBhk from "@/assets/webs/bhk-tile.webp";
import tCasanova from "@/assets/webs/casanova-tile.webp";
import tHotel from "@/assets/webs/hotel-tile.webp";
import tMotostop from "@/assets/webs/motostop-tile.webp";
import tNeuro from "@/assets/webs/neurocarolina-tile.webp";
import tPsico from "@/assets/webs/psico-tile.webp";
import tTennis from "@/assets/webs/tennis-tile.webp";
import tVcc from "@/assets/webs/vcc-tile.webp";
import tEquilibrio from "@/assets/webs/equilibrio-tile.webp";
import tCasanova2 from "@/assets/webs/casanova2-tile.webp";
import tCobraflow from "@/assets/webs/cobraflow-tile.webp";
import tAcbApp from "@/assets/webs/acbapp-tile.webp";
import tEquilibrioLaser from "@/assets/webs/equilibrio-laser-tile.webp";
import tChatCrm from "@/assets/webs/chatcrm-tile.webp";

/**
 * Marquee de sitios reales impulsado por el scroll (no autoplay):
 * la fila 1 se desliza hacia la derecha y la fila 2 hacia la izquierda a
 * medida que la sección atraviesa el viewport. Cada fila se triplica para
 * que nunca se vea el final. Con prefers-reduced-motion queda estática.
 */
const ROW_1 = [
  { img: tVcc, name: "VCC" },
  { img: tBhk, name: "BHK" },
  { img: tAcbfit, name: "ACB Fit" },
  { img: tEquilibrio, name: "Equilibrio Clinic" },
  { img: tHotel, name: "Hotel" },
  { img: tCobraflow, name: "CobraFlow" },
  { img: tNeuro, name: "Neuro Carolina" },
  { img: tCasanova2, name: "Roberto Casanova" },
];
const ROW_2 = [
  { img: tTennis, name: "Tennis Cartagena" },
  { img: tAya, name: "Arismendy" },
  { img: tAcbApp, name: "ACB Planes" },
  { img: tMotostop, name: "Motos Top" },
  { img: tEquilibrioLaser, name: "Depilación Láser" },
  { img: tPsico, name: "Psico" },
  { img: tChatCrm, name: "Chat CRM" },
  { img: tCasanova, name: "Roberto Casanova" },
];

const Row = ({
  items,
  x,
}: {
  items: typeof ROW_1;
  x: ReturnType<typeof useTransform<number, string>>;
}) => (
  <motion.div style={{ x, willChange: "transform" }} className="flex gap-3 w-max">
    {[...items, ...items, ...items].map((site, i) => (
      <div
        key={`${site.name}-${i}`}
        className="relative h-[190px] md:h-[264px] rounded-2xl overflow-hidden border border-white/10 shrink-0 group"
      >
        <img
          src={site.img}
          alt={`Sitio web ${site.name} desarrollado por DT Growth Partners`}
          className="h-full w-auto max-w-none object-cover object-top"
          loading="lazy"
        />
        <span className="absolute bottom-2 left-2 liquid-glass rounded-full px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/85 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {site.name}
        </span>
      </div>
    ))}
  </motion.div>
);

const WebsMarquee = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-2%", "-10%"]);
  const xStatic = useTransform(scrollYProgress, [0, 1], ["-15%", "-15%"]);

  return (
    <section ref={ref} className="relative bg-[#07060F] py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-sm font-body text-white/80">{`// ${t("websMarquee.kicker")}`}</span>
      </div>
      <div className="flex flex-col gap-3">
        <Row items={ROW_1} x={reduced ? xStatic : x1} />
        <Row items={ROW_2} x={reduced ? xStatic : x2} />
      </div>
    </section>
  );
};

export default WebsMarquee;
