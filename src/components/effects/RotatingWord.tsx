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
};

const RotatingWord = ({ words, interval = 2600, className = "" }: Props) => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  if (reduced || words.length === 0) {
    return <span className={className}>{words[0] ?? ""}</span>;
  }

  return (
    <span className={`inline-grid overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          style={{ gridArea: "1 / 1" }}
          initial={{ y: "85%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-85%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWord;
