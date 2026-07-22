import { useEffect, useRef } from "react";

/**
 * Humo volumétrico en canvas 2D para secciones oscuras.
 *
 * Misma idea que el experimento de three.js del que nace el efecto (planos de
 * humo semitransparentes rotando a distintas velocidades), pero sin WebGL ni
 * dependencias: la bocanada se genera por código con gradientes radiales y se
 * dibuja en modo aditivo, así que sobre negro lee como niebla iluminada por la
 * marca en vez de como humo gris.
 *
 * No captura eventos y con prefers-reduced-motion pinta un solo fotograma fijo.
 */

const PALETTE = {
  blue: "#0F76D6",
  cyan: "#26BDF0",
  ice: "#C2FBFF",
} as const;

type SmokeColor = keyof typeof PALETTE;

type Props = {
  className?: string;
  /** Nº de bocanadas. Se reduce solo en pantallas pequeñas. */
  density?: number;
  /** Opacidad global del humo (0–1). */
  opacity?: number;
  /** Deriva vertical en px/s (negativa = sube). */
  speed?: number;
  colors?: SmokeColor[];
};

const TEXTURE_SIZE = 512;

/** Fuera del componente: un literal inline crearía una referencia nueva por
 *  render y el efecto se reinicializaría en bucle. */
const DEFAULT_COLORS: SmokeColor[] = ["blue", "cyan", "ice"];

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

/**
 * Dibuja una bocanada irregular: varios lóbulos radiales descentrados que al
 * solaparse rompen la silueta de círculo. Los radios y offsets están acotados
 * para que ningún lóbulo toque el borde del canvas (si no, se ve el recorte).
 */
const makePuff = (color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEXTURE_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  for (let i = 0; i < 7; i++) {
    const r = TEXTURE_SIZE * (0.14 + Math.random() * 0.16);
    const x = TEXTURE_SIZE / 2 + (Math.random() - 0.5) * TEXTURE_SIZE * 0.34;
    const y = TEXTURE_SIZE / 2 + (Math.random() - 0.5) * TEXTURE_SIZE * 0.34;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, rgba(color, 0.5));
    grad.addColorStop(0.45, rgba(color, 0.16));
    grad.addColorStop(1, rgba(color, 0));

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas;
};

type Puff = {
  x: number;
  y: number;
  scale: number;
  rot: number;
  rotSpeed: number;
  vx: number;
  vy: number;
  alpha: number;
  tex: HTMLCanvasElement;
};

const Smoke = ({
  className = "",
  density = 14,
  opacity = 0.55,
  speed = -14,
  colors = DEFAULT_COLORS,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorKey = colors.join(",");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const textures = colorKey
      .split(",")
      .map((c) => makePuff(PALETTE[c as SmokeColor]));

    let width = 0;
    let height = 0;
    let puffs: Puff[] = [];

    const seed = () => {
      const count = width < 768 ? Math.ceil(density * 0.55) : density;
      puffs = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        scale: 0.55 + Math.random() * 0.85,
        rot: Math.random() * Math.PI * 2,
        // Rotaciones lentas y desparejas: es lo que da la sensación de volumen.
        rotSpeed: (Math.random() - 0.5) * 0.16,
        vx: (Math.random() - 0.5) * 10,
        vy: speed * (0.6 + Math.random() * 0.8),
        alpha: 0.35 + Math.random() * 0.65,
        tex: textures[Math.floor(Math.random() * textures.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!puffs.length) seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const p of puffs) {
        const size = TEXTURE_SIZE * p.scale;
        ctx.save();
        ctx.globalAlpha = p.alpha * opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(p.tex, -size / 2, -size / 2, size, size);
        ctx.restore();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const step = (p: Puff, dt: number) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.rotSpeed * dt;

      // Reciclado: la bocanada reaparece por el lado opuesto con margen de
      // media textura para que nunca se vea entrar o salir de golpe.
      const margin = (TEXTURE_SIZE * p.scale) / 2;
      if (p.y < -margin) p.y = height + margin;
      if (p.y > height + margin) p.y = -margin;
      if (p.x < -margin) p.x = width + margin;
      if (p.x > width + margin) p.x = -margin;
    };

    let raf = 0;
    let last = performance.now();
    let running = false;

    const loop = (now: number) => {
      // dt acotado: al volver de una pestaña en segundo plano, el salto de
      // tiempo teletransportaría todas las bocanadas.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (const p of puffs) step(p, dt);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    ro.observe(canvas);

    // Sin sección a la vista no hay nada que animar: rAF apagado.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
    };
  }, [density, opacity, speed, colorKey]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};

export default Smoke;
