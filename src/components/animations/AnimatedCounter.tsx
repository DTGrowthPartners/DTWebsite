import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString("es-CO")
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
