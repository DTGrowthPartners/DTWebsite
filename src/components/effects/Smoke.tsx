import { useEffect, useRef } from "react";

/**
 * Humo volumétrico en canvas 2D para secciones oscuras.
 *
 * La bocanada no es un círculo difuso sino ruido fractal (fBm) recortado con
 * una caída radial: eso es lo que da filamentos y densidad irregular en vez de
 * una mancha pareja. Cada bocanada además nace pequeña, crece y se disuelve,
 * que es la parte que de verdad lee como humo.
 *
 * Sin WebGL, sin assets y sin dependencias. No captura eventos y con
 * prefers-reduced-motion pinta un solo fotograma fijo.
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
  /** Despeja el centro para que el humo no compita con el titular. */
  clearCenter?: boolean;
};

/** El humo vive en los bordes: en el centro se enmascara a cero para que el
 *  texto se lea sin bajarle la densidad al efecto. */
const CENTER_MASK =
  "radial-gradient(68% 56% at 50% 44%, transparent 0%, rgba(0,0,0,0.4) 52%, #000 82%)";

/** Resolución de la textura. Tiene que quedar por encima del tamaño al que se
 *  dibuja la bocanada: si se estira, las octavas finas se interpolan y el humo
 *  se convierte en niebla. */
const TEXTURE_SIZE = 512;

/** Fuera del componente: un literal inline crearía una referencia nueva por
 *  render y el efecto se reinicializaría en bucle. */
const DEFAULT_COLORS: SmokeColor[] = ["blue", "cyan", "ice"];

const hexToRgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
};

/** Cuadrito de ruido blanco. Al dibujarlo escalado, el navegador lo interpola
 *  bilinealmente y sale una octava de ruido suave prácticamente gratis. */
const noiseTile = (cells: number) => {
  const c = document.createElement("canvas");
  c.width = c.height = cells;
  const ctx = c.getContext("2d");
  if (!ctx) return c;

  const img = ctx.createImageData(cells, cells);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return c;
};

/**
 * Bocanada = suma de octavas de ruido (fBm) → curva de contraste que abre los
 * filamentos → máscara radial para que no se vea el cuadrado → tinte de marca.
 */
const makePuff = (hex: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEXTURE_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  // Octavas: pocas celdas = manchones grandes; muchas = grano fino.
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
  ctx.globalCompositeOperation = "lighter";
  // Arranca en 4 y llega a 128: son las frecuencias altas las que dan jirones.
  // Con la amplitud cayendo despacio (1.55) el detalle fino sobrevive.
  const octaves = [4, 8, 16, 32, 64, 128];
  octaves.forEach((cells, i) => {
    ctx.globalAlpha = 0.6 / Math.pow(1.55, i);
    ctx.drawImage(noiseTile(cells), 0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
  });
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";

  const img = ctx.getImageData(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
  const data = img.data;
  const [r, g, b] = hexToRgb(hex);
  const half = TEXTURE_SIZE / 2;

  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const i = (y * TEXTURE_SIZE + x) * 4;

      // Umbral + potencia: por debajo de 0.30 el ruido se va a cero (huecos
      // reales entre jirones) y lo que queda se estira en filamentos.
      const lum = data[i] / 255;
      let a = (lum - 0.34) / 0.66;
      a = a > 0 ? Math.pow(a, 1.35) : 0;

      // Caída radial suave: opaco al centro, nada en el borde.
      const dx = (x - half) / half;
      const dy = (y - half) / half;
      const d = Math.sqrt(dx * dx + dy * dy);
      a *= d >= 1 ? 0 : Math.pow(1 - d, 1.3);

      // Ganancia: umbral y caída son multiplicativos y se comen el alfa: sin
      // esto el humo queda por debajo del umbral de visibilidad sobre negro.
      a = Math.min(1, a * 2.8);

      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = Math.min(255, a * 255);
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas;
};

type Puff = {
  x: number;
  y: number;
  size: number;
  /** Achatamiento horizontal: el humo casi nunca es circular. */
  stretch: number;
  rot: number;
  rotSpeed: number;
  vx: number;
  vy: number;
  /** 0→1. Al pasar de 1 la bocanada renace abajo. */
  life: number;
  lifeSpeed: number;
  alpha: number;
  sway: number;
  swayPhase: number;
  tex: HTMLCanvasElement;
};

const Smoke = ({
  className = "",
  density = 10,
  opacity = 0.55,
  speed = -18,
  colors = DEFAULT_COLORS,
  clearCenter = true,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorKey = colors.join(",");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Varias texturas por color: si todas las bocanadas comparten silueta, el
    // ojo pilla la repetición enseguida.
    const textures = colorKey
      .split(",")
      .flatMap((c) => [makePuff(PALETTE[c as SmokeColor]), makePuff(PALETTE[c as SmokeColor])]);

    let width = 0;
    let height = 0;
    let puffs: Puff[] = [];

    const spawn = (p: Puff, initial: boolean) => {
      p.x = Math.random() * width;
      p.y = initial ? Math.random() * height : height + p.size * 0.3;
      p.life = initial ? Math.random() : 0;
    };

    const makePuffState = (): Puff => {
      const size = Math.min(width, 760) * (0.35 + Math.random() * 0.42);
      return {
        x: 0,
        y: 0,
        size,
        stretch: 1.15 + Math.random() * 0.45,
        rot: Math.random() * Math.PI * 2,
        // Rotaciones lentas y desparejas: es lo que da sensación de volumen.
        rotSpeed: (Math.random() - 0.5) * 0.1,
        vx: (Math.random() - 0.5) * 6,
        vy: speed * (0.55 + Math.random() * 0.9),
        life: 0,
        // Vidas largas y distintas para que no pulsen todas a la vez.
        lifeSpeed: 1 / (14 + Math.random() * 16),
        alpha: 0.4 + Math.random() * 0.6,
        sway: 6 + Math.random() * 14,
        swayPhase: Math.random() * Math.PI * 2,
        tex: textures[Math.floor(Math.random() * textures.length)],
      };
    };

    const seed = () => {
      const count = width < 768 ? Math.ceil(density * 0.5) : density;
      puffs = Array.from({ length: count }, () => {
        const p = makePuffState();
        spawn(p, true);
        return p;
      });
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

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      // "screen" en vez de "lighter": al superponerse muchas bocanadas satura
      // suave en vez de quemarse a blanco.
      ctx.globalCompositeOperation = "screen";

      for (const p of puffs) {
        // Nace pequeña, crece y se disuelve: sin esto parecen manchas que pasan.
        const grow = 0.55 + p.life * 0.85;
        const fade = Math.sin(Math.PI * Math.min(1, Math.max(0, p.life)));
        const w = p.size * grow * p.stretch;
        const h = p.size * grow;

        ctx.save();
        ctx.globalAlpha = p.alpha * fade * opacity;
        ctx.translate(p.x + Math.sin(t * 0.00016 + p.swayPhase) * p.sway, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(p.tex, -w / 2, -h / 2, w, h);
        ctx.restore();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const step = (p: Puff, dt: number) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.rotSpeed * dt;
      p.life += p.lifeSpeed * dt;
      if (p.life >= 1) spawn(p, false);
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
      draw(now);
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
    draw(0);

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(0);
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
      style={
        clearCenter
          ? { maskImage: CENTER_MASK, WebkitMaskImage: CENTER_MASK }
          : undefined
      }
    />
  );
};

export default Smoke;
