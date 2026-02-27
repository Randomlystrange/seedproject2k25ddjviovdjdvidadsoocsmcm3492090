import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NUM_PADDLES = 8;
const NUM_DROPS = 12;

const WaterWheelDivider = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Wheel rotation: full turns as user scrolls through the section
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);
  // Wheel horizontal position: moves from right to left
  const wheelX = useTransform(scrollYProgress, [0, 1], ["60%", "-10%"]);
  // Water stream opacity fades in
  const streamOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  // Drain water opacity
  const drainOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[400px] overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Background water gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Incoming water stream (right side) */}
      <motion.div
        className="absolute top-1/2 right-0 h-[6px] rounded-full origin-right"
        style={{
          opacity: streamOpacity,
          width: "55%",
          background:
            "linear-gradient(90deg, transparent 0%, hsl(211 100% 50% / 0.15) 30%, hsl(211 100% 50% / 0.5) 100%)",
          translateY: "-50%",
        }}
      >
        {/* Animated water shimmer on the stream */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="water-stream-shimmer absolute inset-0 rounded-full" />
        </div>
      </motion.div>

      {/* Secondary thinner stream above */}
      <motion.div
        className="absolute right-0 h-[3px] rounded-full"
        style={{
          top: "calc(50% - 14px)",
          opacity: streamOpacity,
          width: "45%",
          background:
            "linear-gradient(90deg, transparent 0%, hsl(211 100% 60% / 0.1) 40%, hsl(211 100% 60% / 0.35) 100%)",
        }}
      />

      {/* Water Wheel assembly */}
      <motion.div
        className="absolute top-1/2 will-change-transform"
        style={{
          left: wheelX,
          translateY: "-50%",
        }}
      >
        {/* Glow behind the wheel */}
        <div className="absolute inset-0 -m-8 bg-primary/10 rounded-full blur-3xl" />

        {/* The SVG Water Wheel */}
        <motion.svg
          width="160"
          height="160"
          viewBox="-80 -80 160 160"
          className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] will-change-transform"
          style={{ rotate: wheelRotation }}
        >
          {/* Outer ring */}
          <circle
            cx="0"
            cy="0"
            r="70"
            fill="none"
            stroke="hsl(211 80% 45% / 0.6)"
            strokeWidth="4"
          />
          <circle
            cx="0"
            cy="0"
            r="62"
            fill="none"
            stroke="hsl(211 80% 50% / 0.3)"
            strokeWidth="1.5"
          />

          {/* Hub */}
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="hsl(211 80% 40% / 0.5)"
            stroke="hsl(211 80% 55% / 0.7)"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="5" fill="hsl(211 100% 60% / 0.8)" />

          {/* Paddles / Spokes */}
          {Array.from({ length: NUM_PADDLES }).map((_, i) => {
            const angle = (i * 360) / NUM_PADDLES;
            const rad = (angle * Math.PI) / 180;
            const innerR = 14;
            const outerR = 60;
            const paddleW = 18;
            // Spoke line
            const x1 = Math.cos(rad) * innerR;
            const y1 = Math.sin(rad) * innerR;
            const x2 = Math.cos(rad) * outerR;
            const y2 = Math.sin(rad) * outerR;
            // Paddle rectangle at the end (perpendicular to spoke)
            const perpRad = rad + Math.PI / 2;
            const px = Math.cos(rad) * (outerR - 6);
            const py = Math.sin(rad) * (outerR - 6);
            const dx = Math.cos(perpRad) * (paddleW / 2);
            const dy = Math.sin(perpRad) * (paddleW / 2);

            return (
              <g key={i}>
                {/* Spoke */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(211 70% 50% / 0.5)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Paddle */}
                <line
                  x1={px - dx}
                  y1={py - dy}
                  x2={px + dx}
                  y2={py + dy}
                  stroke="hsl(211 80% 55% / 0.7)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </motion.svg>
      </motion.div>

      {/* Water drops falling from the wheel into the drain */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[55%] overflow-hidden"
        style={{ opacity: drainOpacity }}
      >
        {Array.from({ length: NUM_DROPS }).map((_, i) => {
          const leftPos = 15 + Math.random() * 70;
          const delay = Math.random() * 3;
          const duration = 1.5 + Math.random() * 1.5;
          const size = 3 + Math.random() * 5;
          const opacity = 0.3 + Math.random() * 0.5;

          return (
            <div
              key={i}
              className="water-drop absolute rounded-full"
              style={{
                left: `${leftPos}%`,
                width: `${size}px`,
                height: `${size * 1.6}px`,
                background: `hsl(211 100% 60% / ${opacity})`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </motion.div>

      {/* Drain opening at the bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ opacity: drainOpacity }}
      >
        {/* Drain grate */}
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          className="w-[100px] h-[32px] md:w-[120px] md:h-[40px]"
        >
          <defs>
            <linearGradient id="drainGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(211 60% 30% / 0.6)" />
              <stop offset="100%" stopColor="hsl(211 60% 15% / 0.9)" />
            </linearGradient>
          </defs>
          {/* Drain frame */}
          <rect
            x="0"
            y="5"
            width="120"
            height="35"
            rx="6"
            fill="url(#drainGrad)"
            stroke="hsl(211 50% 40% / 0.5)"
            strokeWidth="1.5"
          />
          {/* Grate bars */}
          {[20, 40, 60, 80, 100].map((x) => (
            <line
              key={x}
              x1={x}
              y1="8"
              x2={x}
              y2="37"
              stroke="hsl(211 40% 25% / 0.7)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          ))}
          {/* Water glow inside drain */}
          <ellipse
            cx="60"
            cy="25"
            rx="50"
            ry="12"
            fill="hsl(211 100% 50% / 0.15)"
            className="water-drain-glow"
          />
        </svg>
      </motion.div>

      {/* Splash particles near the wheel */}
      <motion.div
        className="absolute top-[42%] left-0 right-0 h-[20%] overflow-hidden"
        style={{ opacity: streamOpacity }}
      >
        {Array.from({ length: 6 }).map((_, i) => {
          const leftPos = 25 + Math.random() * 50;
          const delay = Math.random() * 2;
          const size = 2 + Math.random() * 3;
          return (
            <div
              key={`splash-${i}`}
              className="water-splash absolute rounded-full"
              style={{
                left: `${leftPos}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `hsl(211 100% 70% / 0.6)`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default WaterWheelDivider;
