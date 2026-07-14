import { motion, useReducedMotion } from "framer-motion";

/**
 * Titular con reveal palabra por palabra: blur(10px)→blur(5px)→nítido,
 * subiendo desde y:50. Stagger de 100ms por palabra.
 * El padre es flex-wrap para que el corte de línea sea natural.
 */
type Props = {
  text: string;
  className?: string;
  delay?: number; // segundos antes de empezar
  justify?: "center" | "start";
};

const BlurText = ({ text, className = "", delay = 0, justify = "center" }: Props) => {
  const reduced = useReducedMotion();
  const words = text.split(" ").filter(Boolean);

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify === "center" ? "center" : "flex-start",
        rowGap: "0.1em",
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          whileInView={{
            filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
            opacity: [0, 0.5, 1],
            y: [50, -5, 0],
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: "easeOut",
            delay: delay + (i * 100) / 1000,
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
