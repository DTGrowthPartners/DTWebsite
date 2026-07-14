"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    // Distribuidos uniformemente a lo largo del ancho (0% - 100%)
    {
      initialX: "5%",
      translateX: "5%",
      duration: 5,
      repeatDelay: 1,
      delay: 0,
      className: "h-10",
    },
    {
      initialX: "10%",
      translateX: "10%",
      duration: 6,
      repeatDelay: 1.5,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: "15%",
      translateX: "15%",
      duration: 4,
      repeatDelay: 1,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: "20%",
      translateX: "20%",
      duration: 7,
      repeatDelay: 2,
      delay: 0.5,
      className: "h-14",
    },
    {
      initialX: "25%",
      translateX: "25%",
      duration: 5,
      repeatDelay: 1,
      delay: 1.5,
      className: "h-10",
    },
    {
      initialX: "30%",
      translateX: "30%",
      duration: 6,
      repeatDelay: 1.5,
      delay: 0,
      className: "h-12",
    },
    {
      initialX: "35%",
      translateX: "35%",
      duration: 4,
      repeatDelay: 1,
      delay: 2.5,
      className: "h-8",
    },
    {
      initialX: "40%",
      translateX: "40%",
      duration: 7,
      repeatDelay: 2,
      delay: 1,
      className: "h-16",
    },
    {
      initialX: "45%",
      translateX: "45%",
      duration: 5,
      repeatDelay: 1,
      delay: 0.5,
      className: "h-10",
    },
    {
      initialX: "50%",
      translateX: "50%",
      duration: 6,
      repeatDelay: 1.5,
      delay: 2,
      className: "h-14",
    },
    {
      initialX: "55%",
      translateX: "55%",
      duration: 4,
      repeatDelay: 1,
      delay: 1.5,
      className: "h-12",
    },
    {
      initialX: "60%",
      translateX: "60%",
      duration: 7,
      repeatDelay: 2,
      delay: 0,
      className: "h-8",
    },
    {
      initialX: "65%",
      translateX: "65%",
      duration: 5,
      repeatDelay: 1,
      delay: 2.5,
      className: "h-16",
    },
    {
      initialX: "70%",
      translateX: "70%",
      duration: 6,
      repeatDelay: 1.5,
      delay: 0.5,
      className: "h-10",
    },
    {
      initialX: "75%",
      translateX: "75%",
      duration: 4,
      repeatDelay: 1,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: "80%",
      translateX: "80%",
      duration: 7,
      repeatDelay: 2,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: "85%",
      translateX: "85%",
      duration: 5,
      repeatDelay: 1,
      delay: 1.5,
      className: "h-14",
    },
    {
      initialX: "90%",
      translateX: "90%",
      duration: 6,
      repeatDelay: 1.5,
      delay: 0,
      className: "h-10",
    },
    {
      initialX: "95%",
      translateX: "95%",
      duration: 4,
      repeatDelay: 1,
      delay: 2,
      className: "h-12",
    },
    // Beams intermedios para mayor densidad
    {
      initialX: "8%",
      translateX: "8%",
      duration: 5,
      repeatDelay: 1.5,
      delay: 1.8,
      className: "h-6",
    },
    {
      initialX: "18%",
      translateX: "18%",
      duration: 6,
      repeatDelay: 1,
      delay: 3,
      className: "h-10",
    },
    {
      initialX: "28%",
      translateX: "28%",
      duration: 5,
      repeatDelay: 1.5,
      delay: 0.8,
      className: "h-12",
    },
    {
      initialX: "38%",
      translateX: "38%",
      duration: 6,
      repeatDelay: 1,
      delay: 2.2,
      className: "h-8",
    },
    {
      initialX: "48%",
      translateX: "48%",
      duration: 5,
      repeatDelay: 1.5,
      delay: 1.2,
      className: "h-14",
    },
    {
      initialX: "58%",
      translateX: "58%",
      duration: 6,
      repeatDelay: 1,
      delay: 0.3,
      className: "h-10",
    },
    {
      initialX: "68%",
      translateX: "68%",
      duration: 5,
      repeatDelay: 1.5,
      delay: 2.8,
      className: "h-12",
    },
    {
      initialX: "78%",
      translateX: "78%",
      duration: 6,
      repeatDelay: 1,
      delay: 1.3,
      className: "h-8",
    },
    {
      initialX: "88%",
      translateX: "88%",
      duration: 5,
      repeatDelay: 1.5,
      delay: 0.6,
      className: "h-14",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
      }}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex w-full justify-center bg-transparent"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number | string;
      translateX?: number | string;
      initialY?: number | string;
      translateY?: number | string;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        // This will force the beam to reset to its initial position
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  const isPercentage = typeof beamOptions.initialX === 'string';

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: isPercentage ? 0 : (beamOptions.initialX || "0px"),
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: isPercentage ? 0 : (beamOptions.translateX || "0px"),
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        style={{
          left: isPercentage ? beamOptions.initialX : undefined,
        }}
        className={cn(
          "absolute top-20 z-[1] m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#0f76d6] via-[#26bdf0] to-transparent",
          !isPercentage ? "left-0" : "",
          beamOptions.className
        )}
      />
      {collision.detected && collision.coordinates && (
        <Explosion
          key={`${beamKey}-explosion`}
          className=""
          style={{
            left: `${collision.coordinates.x}px`,
            top: `${collision.coordinates.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-[#26bdf0] to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-[#26bdf0] to-[#c2fbff]"
        />
      ))}
    </div>
  );
};
