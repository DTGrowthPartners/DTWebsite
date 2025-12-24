import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
}

export function FlickeringGrid({
  className = "",
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.4,
  flickerChance = 0.1,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / (squareSize + gridGap));
      const rows = Math.floor(canvas.height / (squareSize + gridGap));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap);
          const y = j * (squareSize + gridGap);

          if (Math.random() < flickerChance) {
            const opacity = Math.random() * maxOpacity;
            ctx.fillStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
            ctx.fillRect(x, y, squareSize, squareSize);
          }
        }
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(interval);
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance]);

  return <canvas ref={canvasRef} className={className} />;
}