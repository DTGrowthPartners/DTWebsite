import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Revelado tipo "cortina" — adaptación scroll-driven del swipe-slider de GSAP
 * (CodePen XWzRraJ): un wrapper exterior con overflow-hidden entra desplazado
 * hacia abajo mientras el interior contrabalancea el mismo trayecto, así el
 * contenido queda quieto y una "máscara" lo va destapando al hacer scroll.
 * (El pen usa Observer y secciones fullscreen; aquí el scroll sigue libre.)
 */
const CurtainReveal = ({ children, amountVh = 42 }: { children: ReactNode; amountVh?: number }) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const dist = () => (window.innerHeight * amountVh) / 100;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "top 25%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(outerRef.current, { y: dist }, { y: 0, ease: "none" }, 0)
        .fromTo(innerRef.current, { y: () => -dist() }, { y: 0, ease: "none" }, 0);
    }, wrapRef);

    return () => ctx.revert();
  }, [amountVh]);

  return (
    <div ref={wrapRef}>
      <div ref={outerRef} className="overflow-hidden will-change-transform">
        <div ref={innerRef} className="will-change-transform">{children}</div>
      </div>
    </div>
  );
};

export default CurtainReveal;
