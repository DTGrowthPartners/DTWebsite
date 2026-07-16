import { useRef, type ReactNode, type PointerEvent, type MouseEvent } from "react";

/**
 * transitions.dev #19 — Card tilt. El puntero se trackea en el wrapper plano
 * (.t-tilt, nunca se transforma) y escribe rotación + posición del glare como
 * CSS vars en la tarjeta interior (.t-tilt-card). Funciona con mouse y touch
 * (tap-hold-drag); con prefers-reduced-motion queda plano (guard en CSS).
 */
const MAX = 14; // inclinación máxima en grados en los bordes

type Props = {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

const Tilt = ({ children, className = "", cardClassName = "", onClick }: Props) => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const reset = () => {
    outerRef.current?.classList.remove("is-hover");
    cardRef.current?.classList.remove("is-tilting");
    cardRef.current?.style.setProperty("--tilt-rx", "0deg");
    cardRef.current?.style.setProperty("--tilt-ry", "0deg");
  };

  const track = (e: PointerEvent<HTMLDivElement>) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const outer = outerRef.current;
    const card = cardRef.current;
    if (!outer || !card) return;
    const r = outer.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    outer.classList.add("is-hover");
    card.classList.add("is-tilting");
    card.style.setProperty("--tilt-ry", ((px - 0.5) * MAX).toFixed(2) + "deg");
    card.style.setProperty("--tilt-rx", ((0.5 - py) * MAX).toFixed(2) + "deg");
    card.style.setProperty("--tilt-gx", (px * 100).toFixed(1) + "%");
    card.style.setProperty("--tilt-gy", (py * 100).toFixed(1) + "%");
  };

  return (
    <div
      ref={outerRef}
      className={`t-tilt ${className}`}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") {
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* noop */
          }
        }
      }}
      onPointerMove={track}
      onPointerUp={reset}
      onPointerCancel={reset}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") reset();
      }}
      onClick={onClick}
    >
      <div ref={cardRef} className={`t-tilt-card ${cardClassName}`}>
        {children}
        <div className="t-tilt-glare" />
      </div>
    </div>
  );
};

export default Tilt;
