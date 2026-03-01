import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const SectionProgressDivider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Simple subscription with throttled updates
  useEffect(() => {
    let frameId: number | null = null;
    let lastUpdate = 0;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const now = performance.now();
      // Throttle to ~60fps max
      if (now - lastUpdate < 16) return;
      lastUpdate = now;

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setProgress(value);
      });
    });

    return () => {
      unsubscribe();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [scrollYProgress]);

  const width = Math.max(0, Math.min(100, progress * 100));
  const opacity = progress > 0.1 && progress < 0.9 ? 1 : progress <= 0.1 ? progress * 10 : (1 - progress) * 10;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60px] md:h-[80px] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle divider line */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-opacity duration-200"
        style={{ opacity: Math.min(1, opacity * 2) }}
      />

      {/* Progress bar container */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-4 right-4 md:left-8 md:right-8 h-1 rounded-full bg-muted/50 overflow-hidden transition-opacity duration-200"
        style={{ opacity }}
      >
        {/* Animated progress fill - using transform for GPU acceleration */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 will-change-transform"
          style={{
            transform: `scaleX(${width / 100})`,
            transformOrigin: "left",
            transition: "transform 0.15s ease-out",
          }}
        />
      </div>

      {/* Progress indicator dot */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 will-change-transform transition-transform duration-150 ease-out"
        style={{
          left: `calc(1rem + ${width}% * (1 - 2rem / 100%))`,
          transform: `translateX(-50%) translateY(-50%)`,
        }}
      />
    </div>
  );
};

export default SectionProgressDivider;