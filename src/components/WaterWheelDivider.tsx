import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";

const NUM_PADDLES = 8;

const WaterWheelDivider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<SVGSVGElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Motion value that we'll update every frame for continuous rotation
  const rotation = useMotionValue(0);

  // Continuously increment rotation - this makes the wheel spin ALWAYS
  useAnimationFrame((_, delta) => {
    if (delta) {
      // ~60 degrees per second for smooth, visible spinning
      rotation.set(rotation.get() + (delta / 1000) * 60);
    }
  });

  // Scroll-based extra rotation (adds on top of continuous)
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Combine: continuous spin + scroll progress with spring physics
  const wheelRotation = useSpring(
    useTransform(scrollYProgress, (scrollVal) => {
      // Get current rotation value and add scroll contribution
      return rotation.get() + scrollVal * 360;
    }),
    { damping: 30, stiffness: 120, mass: 0.8 }
  );

  // Horizontal movement with scroll
  const wheelX = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);
  
  // Fade effect
  const fadeIn = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);

  // Subtle vertical parallax
  const parallaxOffset = useTransform(scrollYProgress, [0, 0.5, 1], [0, 8, 0]);

  // Subtle scale pulse
  const wheelScale = useSpring(1, { damping: 20, stiffness: 150 });

  useAnimationFrame(() => {
    // Gentle breathing/pulsing effect
    const time = Date.now() / 1000;
    const scale = 1 + Math.sin(time * 2) * 0.015;
    wheelScale.set(scale);
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[120px] md:h-[160px] overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Divider line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ opacity: fadeIn }}
      />

      {/* Water Wheel */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-10"
        style={{ 
          left: wheelX, 
          opacity: fadeIn,
          y: parallaxOffset,
          scale: wheelScale,
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 -m-6 rounded-full blur-xl bg-primary/20" />
        
        <motion.svg
          ref={wheelRef}
          width="160"
          height="160"
          viewBox="-80 -80 160 160"
          className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] will-change-transform"
          style={{ rotate: wheelRotation }}
        >
          {/* Outer rim */}
          <circle cx="0" cy="0" r="70" fill="none" stroke="hsl(240 5% 34%)" strokeWidth="5" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="hsl(240 5% 45%)" strokeWidth="2" strokeDasharray="5 7" />
          <circle cx="0" cy="0" r="65" fill="none" stroke="hsl(240 5% 28%)" strokeWidth="1" />

          {/* Hub */}
          <circle cx="0" cy="0" r="13" fill="hsl(211 100% 20%)" stroke="hsl(211 100% 40%)" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="6" fill="hsl(211 100% 50%)" />
          <circle cx="0" cy="0" r="3" fill="hsl(211 100% 70%)" />

          {/* Paddles */}
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
                <line
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="hsl(240 5% 34%)" strokeWidth="2.5" strokeLinecap="round"
                />
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
