"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 5) + Math.random() * 3}%`,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute top-0 w-px h-full"
          style={{ left: beam.left }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 0.5, 0.5, 0],
            scaleY: [0, 1, 1, 0],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.4), rgba(99, 102, 241, 0.4), transparent)",
              boxShadow: "0 0 8px rgba(14, 165, 233, 0.3)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
