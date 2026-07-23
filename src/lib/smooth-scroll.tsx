import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

/**
 * Scroll suave global (estilo QClay) con Lenis.
 *
 * - No es scroll-jacking: la posición real del documento sí se mueve, así que el
 *   SEO, el teclado, la rueda del mouse y el scroll táctil siguen funcionando.
 * - Respeta `prefers-reduced-motion`: si el usuario lo pide, no se inicializa y
 *   el sitio queda con scroll nativo.
 * - Expone un singleton (`getLenis`) para que la navegación por anclas y el
 *   scroll-to-top usen el mismo motor.
 */

let lenisInstance: Lenis | null = null;

/** Devuelve la instancia activa de Lenis, o null si no está activo (reduced-motion). */
export const getLenis = (): Lenis | null => lenisInstance;

/** Hace scroll suave hasta un elemento/selector/offset usando Lenis si está activo. */
export const scrollToTarget = (
  target: string | HTMLElement | number,
  options?: { offset?: number; immediate?: boolean }
) => {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, {
      offset: options?.offset ?? 0,
      immediate: options?.immediate ?? false,
    });
    return;
  }

  // Fallback sin Lenis (reduced-motion o aún no montado)
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: options?.immediate ? "auto" : "smooth" });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: options?.immediate ? "auto" : "smooth" });
  }
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // scroll nativo, sin inercia

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.1,
    });
    lenisInstance = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
