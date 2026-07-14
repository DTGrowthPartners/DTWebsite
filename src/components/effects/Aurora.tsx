/**
 * Manchas de color desenfocadas ("auroras") para dar atmósfera a secciones
 * oscuras. Derivan lentamente con `animate-drift` y no capturan eventos.
 */
const PALETTE = {
  blue: "#0F76D6",
  cyan: "#26BDF0",
  purple: "#7C3AED",
  magenta: "#A855F7",
} as const;

export type AuroraBlob = {
  color: keyof typeof PALETTE;
  /** posición/tamaño/opacidad vía clases, p. ej. "-top-40 left-1/4 w-[560px] h-[560px] opacity-25" */
  className: string;
  delay?: string;
};

const Aurora = ({ blobs }: { blobs: AuroraBlob[] }) => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    {blobs.map((b, i) => (
      <div
        key={i}
        className={`absolute rounded-full blur-[130px] animate-drift ${b.className}`}
        style={{
          background: `radial-gradient(circle, ${PALETTE[b.color]}, transparent 70%)`,
          animationDelay: b.delay,
        }}
      />
    ))}
  </div>
);

export default Aurora;
