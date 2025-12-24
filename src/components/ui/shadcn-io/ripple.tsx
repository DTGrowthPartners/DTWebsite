import { useEffect, useRef } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = divRef.current;
    if (!current) return;

    // Remove existing ripples
    const ripples = current.querySelectorAll(".ripple");
    ripples.forEach((ripple) => ripple.remove());

    // Create new ripples with colors matching the page aesthetic
    for (let i = 0; i < numCircles; i++) {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${mainCircleSize}px`;
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.animationDelay = `${i * 0.3}s`;
      ripple.style.opacity = `${mainCircleOpacity * (1 - i * 0.1)}`; // Decreasing opacity for depth
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      
      // Use much darker blue colors that match the page aesthetic
      const hue = 210; // Blue hue from the design system
      const saturation = 85 - (i * 5); // Slight variation in saturation
      const lightness = 10 + (i * 3); // Much darker tones for subtlety
      ripple.style.background = `hsl(${hue} ${saturation}% ${lightness}%)`;
      
      ripple.style.transform = "translate(-50%, -50%) scale(0)";
      ripple.style.animation = `ripple 6s ease-out infinite`;
      ripple.style.animationDelay = `${i * 0.3}s`;
      current.appendChild(ripple);
    }
  }, [mainCircleSize, mainCircleOpacity, numCircles]);

  return <div ref={divRef} className="absolute inset-0 pointer-events-none" />;
}