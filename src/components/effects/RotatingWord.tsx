import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Palabra que se reemplaza sola cada `interval` ms: la saliente sube con blur,
 * la entrante llega desde abajo. Con prefers-reduced-motion queda fija.
 */
type Props = {
  words: string[];
  interval?: number;
  className?: string;
  /** Clases para el span interior (el del texto). Pon aquí `gradient-text`:
   *  bg-clip-text se rompe si el elemento con clip tiene descendientes transformados. */
  innerClassName?: string;
};

const RotatingWord = ({ words, interval = 2600, className = "", innerClassName = "" }: Props) => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  if (reduced || words.length === 0) {
    return <span className={`${className} ${innerClassName}`}>{words[0] ?? ""}</span>;
  }

  return (
    <span
      className={`inline-block align-bottom ${className}`}
      style={{ perspective: "500px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${index}-${words[index]}`}
          style={{ transformOrigin: "center 55%", backfaceVisibility: "hidden", willChange: "transform, opacity" }}
          initial={{ rotateX: 88, y: "0.28em", opacity: 0 }}
          animate={{ rotateX: 0, y: "0em", opacity: 1 }}
          exit={{ rotateX: -88, y: "-0.28em", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.3, 0.9, 0.4, 1] }}
          className={`inline-block whitespace-nowrap ${innerClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWord;
