import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Transición estilo swipe-slider de GSAP (CodePen XWzRraJ / xxWdeMK),
 * adaptada a scroll libre: al llegar a la costura, la sección anterior se
 * congela (pin sin spacer) y esta entra cubriéndola a pantalla completa.
 * El contenido contrarresta el viaje del wrapper (el outer sube +100vh
 * mientras el inner parte de -100vh), así queda estático llenando el
 * viewport mientras el borde de la "cortina" lo destapa — la firma del pen.
 */
const CurtainReveal = ({ children }: { children: ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const wrap = wrapRef.current!;
    const prev = wrap.previousElementSibling as HTMLElement | null;

    // Solo en md+: en móvil el pin (position:fixed) sobre el scroll táctil
    // nativo produce jitter durante el momentum; ahí se scrollea normal.
    const mm = gsap.matchMedia(wrapRef);
    mm.add("(min-width: 768px)", () => {
      // La sección saliente queda fijada (sin spacer) mientras la cortina
      // la cubre; al soltarse ya está totalmente tapada por esta sección.
      if (prev) {
        ScrollTrigger.create({
          trigger: wrap,
          start: "top bottom",
          end: "top top",
          pin: prev,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }

      // power2.out (no linear): con lineal el contenido está inmóvil durante
      // toda la cortina y al terminar arranca de golpe a velocidad de scroll.
      // Con esta curva deriva al inicio (aún enmascarado), flota a mitad y
      // llega al final ya moviéndose a la velocidad del scroll → sin "asentón".
      gsap.fromTo(
        innerRef.current,
        { y: () => -window.innerHeight },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="overflow-hidden">
        <div ref={innerRef} className="will-change-transform">{children}</div>
      </div>
    </div>
  );
};

export default CurtainReveal;
