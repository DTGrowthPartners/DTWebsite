import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Palabra que se reemplaza sola cada `interval` ms con un flip 3D.
 *
 * El ancho del contenedor se mide con un span invisible y se anima con un
 * tween: así las palabras vecinas se deslizan suavemente cuando la palabra
 * entrante es más corta o más larga (sin saltos de layout).
 * Con prefers-reduced-motion queda fija.
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
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  // Mide el ancho de la palabra actual (el contenedor animará hacia él)
  useLayoutEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [index, words]);

  // Remedir si cambia el tamaño de fuente responsivo
  useEffect(() => {
    const onResize = () => {
      if (measureRef.current) setWidth(measureRef.current.offsetWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (reduced || words.length === 0) {
    return <span className={`${className} ${innerClassName}`}>{words[0] ?? ""}</span>;
  }

  return (
    <motion.span
      className={`relative inline-flex justify-center align-bottom ${className}`}
      style={{ perspective: "500px" }}
      animate={width !== null ? { width } : undefined}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Medidor invisible: hereda la tipografía y define el ancho objetivo */}
      <span ref={measureRef} aria-hidden className="invisible absolute left-0 top-0 whitespace-nowrap">
        {words[index]}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${index}-${words[index]}`}
          style={{ transformOrigin: "center 55%", backfaceVisibility: "hidden", willChange: "transform, opacity" }}
          initial={{ rotateX: 88, y: "0.28em", opacity: 0 }}
          animate={{ rotateX: 0, y: "0em", opacity: 1 }}
          exit={{ rotateX: -88, y: "-0.28em", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.3, 0.9, 0.4, 1] }}
          className={`inline-block whitespace-nowrap pb-[0.14em] -mb-[0.14em] ${innerClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingWord;
