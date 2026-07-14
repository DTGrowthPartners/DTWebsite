import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface BackgroundGradientProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function BackgroundGradient({ className, children, ...props }: BackgroundGradientProps) {
  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden rounded-[22px] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 opacity-75 blur-xl"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative h-full w-full rounded-[21px] bg-black/95 dark:bg-black/95 backdrop-blur-sm p-6">
        {children}
      </div>
    </div>
  )
}

export { BackgroundGradient }