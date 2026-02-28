import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const NUM_PADDLES = 8;

const WaterWheelDivider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll progress with spring physics
  // This makes mouse wheel scrolling feel smooth even without smoothscroll enabled
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Wheel rotation: full turns as user scrolls through the section
  const wheelRotation = useTransform(smoothProgress, [0, 1], [0, 720]);
  
  // Wheel horizontal position: moves from left to right
  // Using 0% to 100% for absolute positioning
  const wheelX = useTransform(smoothProgress, [0, 1], ["5%", "95%"]);
  
  // Fade in/out
  const fadeIn = useTransform(smoothProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);

  // Reset position on page navigation
  useEffect(() => {
    const handleLoad = () => {
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        return;
      }
      // Small delay to ensure page has rendered
      setTimeout(() => {
        // Force recalculation of scroll progress
        window.scrollBy(0, 1);
        setTimeout(() => window.scrollBy(0, -1), 10);
      }, 100);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[120px] md:h-[160px] overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle divider line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ opacity: fadeIn }}
      />

      {/* ── Water Wheel (moves left-to-right while rotating) ── */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-10"
        style={{ left: wheelX, opacity: fadeIn }}
      >
        {/* Glow behind wheel — uses primary blue */}
        <div className="absolute inset-0 -m-8 rounded-full blur-2xl bg-primary/10" />
        <motion.svg
          width="160"
          height="160"
          viewBox="-80 -80 160 160"
          className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] will-change-transform"
          style={{ rotate: wheelRotation }}
        >
          {/* Outer rim — muted foreground tones */}
          <circle cx="0" cy="0" r="70" fill="none" stroke="hsl(240 5% 34%)" strokeWidth="5" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="hsl(240 5% 45%)" strokeWidth="2" strokeDasharray="5 7" />
          <circle cx="0" cy="0" r="65" fill="none" stroke="hsl(240 5% 28%)" strokeWidth="1" />

          {/* Hub — primary accent */}
          <circle cx="0" cy="0" r="13" fill="hsl(211 100% 20%)" stroke="hsl(211 100% 40%)" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="6" fill="hsl(211 100% 50%)" />
          <circle cx="0" cy="0" r="3" fill="hsl(211 100% 70%)" />

          {/* Spokes & paddles */}
          {Array.from({ length: NUM_PADDLES }).map((_, i) => {
            const angle = (i * 360) / NUM_PADDLES;
            const rad = (angle * Math.PI) / 180;
            const innerR = 15;
            const outerR = 63;
            const paddleW = 18;
            const x1 = Math.cos(rad) * innerR;
            const y1 = Math.sin(rad) * innerR;
            const x2 = Math.cos(rad) * outerR;
            const y2 = Math.sin(rad) * outerR;
            const perpRad = rad + Math.PI / 2;
            const px = Math.cos(rad) * (outerR - 5);
            const py = Math.sin(rad) * (outerR - 5);
            const dx = Math.cos(perpRad) * (paddleW / 2);
            const dy = Math.sin(perpRad) * (paddleW / 2);

            return (
              <g key={i}>
                {/* Spoke */}
                <line
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="hsl(240 5% 34%)" strokeWidth="2.5" strokeLinecap="round"
                />
                {/* Paddle */}
                <line
                  x1={px - dx} y1={py - dy}
                  x2={px + dx} y2={py + dy}
                  stroke="hsl(211 100% 30%)" strokeWidth="5" strokeLinecap="round"
                />
                <line
                  x1={px - dx * 0.8} y1={py - dy * 0.8}
                  x2={px + dx * 0.8} y2={py + dy * 0.8}
                  stroke="hsl(211 100% 45%)" strokeWidth="2" strokeLinecap="round"
                />
              </g>
            );
          })}
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default WaterWheelDivider;
