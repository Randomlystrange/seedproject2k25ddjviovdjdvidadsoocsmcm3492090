import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 18;
const LERP = 0.16;

// White head → bright blue → deeper blue → near transparent navy
const TRAIL_COLORS = [
  "#ffffff", // white head
  "#e0f2fe",
  "#bae6fd",
  "#7dd3fc",
  "#38bdf8",
  "#0ea5e9",
  "#0284c7",
  "#0369a1",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
  "#172554",
  "#0f172a",
  "#0a1128",
  "#060d1a",
  "#03070f",
  "#01030a",
  "#000510",
];

const CustomCursor = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 }))
  );
  const visible = useRef(false);
  const animFrame = useRef<number>();

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        // Snap all trail dots to cursor on first move to avoid initial sweep
        trail.current = trail.current.map(() => ({ ...mouse.current }));
        visible.current = true;
      }
    };
    const onMouseLeave = () => { visible.current = false; };
    const onMouseEnter = () => { visible.current = true; };

    document.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    const animate = () => {
      // Each segment lerps toward the one before it
      trail.current[0].x += (mouse.current.x - trail.current[0].x) * LERP;
      trail.current[0].y += (mouse.current.y - trail.current[0].y) * LERP;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * LERP;
        trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * LERP;
      }

      // Update DOM directly for max perf
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const dot = dotsRef.current[i];
        if (!dot) continue;
        const size = Math.max(2, 18 - i * 0.9);
        dot.style.opacity = visible.current ? String(Math.max(0, 1 - i * 0.058)) : "0";
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.transform = `translate(${trail.current[i].x - size / 2}px, ${trail.current[i].y - size / 2}px)`;
      }

      animFrame.current = requestAnimationFrame(animate);
    };
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }, (_, i) => (
        <div
          key={i}
          ref={(el) => { dotsRef.current[i] = el; }}
          className="cursor-trail-dot"
          style={{
            backgroundColor: TRAIL_COLORS[i],
            boxShadow: i === 0
              ? `0 0 10px 3px rgba(255,255,255,0.6)`
              : i < 5
              ? `0 0 6px 2px rgba(14,165,233,0.5)`
              : `none`,
            zIndex: 100000 - i,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

