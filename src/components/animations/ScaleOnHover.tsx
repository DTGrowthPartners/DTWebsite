import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
  glow?: boolean;
}

const ScaleOnHover = ({
  children,
  className = "",
  scale = 1.03,
  lift = -5,
  glow = true,
}: ScaleOnHoverProps) => {
  return (
    <motion.div
      className={`${className} ${glow ? "transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(210_100%_50%/0.15)]" : ""}`}
      whileHover={{
        scale,
        y: lift,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnHover;
