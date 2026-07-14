"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundFill?: string
  children?: React.ReactNode
  colors?: string[]
  waveWidth?: number
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  containerClassName?: string
}

export const WavyBackground = ({
  backgroundFill = "transparent",
  children,
  colors = ["#38bdf8", "#818cf8", "#c084fc"],
  waveWidth = 30,
  blur = 0,
  speed = "fast",
  waveOpacity = 0.5,
   className,
 containerClassName,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>()

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background
      if (backgroundFill !== "transparent") {
        ctx.fillStyle = backgroundFill
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Simple sine wave animation
      const primaryColor = colors[0] || "#38bdf8"
      const secondaryColor = colors[1] || "#818cf8"
      const tertiaryColor = colors[2] || "#c084fc"
      
      const waveHeight = waveWidth * 2
      const speedMultiplier = speed === "fast" ? 0.05 : 0.02
      
      time += speedMultiplier

      // Draw multiple waves
      const waves = [
        { amplitude: waveHeight, color: primaryColor, offset: 0 },
        { amplitude: waveHeight * 0.6, color: secondaryColor, offset: Math.PI * 0.5 },
        { amplitude: waveHeight * 0.4, color: tertiaryColor, offset: Math.PI }
      ]

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.01 + time + wave.offset) * wave.amplitude
          ctx.lineTo(x, y)
        }
        
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        
        ctx.fillStyle = wave.color
        ctx.globalAlpha = waveOpacity * 0.3
        ctx.fill()
      })

      ctx.globalAlpha = 1
    }

    const animate = () => {
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    const handleResize = () => {
      resize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [backgroundFill, colors, waveOpacity, speed, waveWidth])

  return (
    <div
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 w-full h-full", className)}
        style={{ filter: blur ? `blur(${blur}px)` : undefined }}
      />
      {children && (
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  )
}
