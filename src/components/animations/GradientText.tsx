import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

const GradientText = ({ children, className = "", animate = true }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 ${className}`}
      {...(animate
        ? {
            initial: { backgroundPosition: "0% 50%" },
            animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
            transition: { duration: 5, repeat: Infinity, ease: "linear" },
            style: { backgroundSize: "200% 200%" },
          }
        : {})}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
