import { useEffect, useRef } from "react";

/**
 * Video de fondo con crossfade por requestAnimationFrame (sin transiciones CSS).
 * - FADE_MS 500: duración del fade in/out.
 * - FADE_OUT_LEAD 0.55s: empieza a fundir a negro justo antes de terminar.
 * - `loop` nativo apagado: el bucle se hace a mano en `ended` para poder fundir.
 */
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

type Props = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

const FadingVideo = ({ src, className = "", style }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeTo = (target: number, duration = FADE_MS) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      const from = parseFloat(video.style.opacity || "0");
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from + (target - from) * p);
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoaded = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1);
    };

    const onTime = () => {
      if (
        !fadingOutRef.current &&
        video.duration &&
        video.duration - video.currentTime <= FADE_OUT_LEAD &&
        video.duration - video.currentTime > 0
      ) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const onEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    // Por si el video ya está listo cuando monta el efecto
    if (video.readyState >= 2) onLoaded();

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
};

export default FadingVideo;
