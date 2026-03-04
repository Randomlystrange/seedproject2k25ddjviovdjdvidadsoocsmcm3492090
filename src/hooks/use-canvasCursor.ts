// @ts-nocheck

import { useEffect } from 'react';

const useCanvasCursor = () => {
  function n(e) {
    this.init(e || {});
  }
  n.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      return (
        (this.phase += this.frequency),
        (e = this.offset + Math.sin(this.phase) * this.amplitude)
      );
    },
    value: function () {
      return e;
    },
  };

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++)
        (t = this.nodes[i]),
          0 < i &&
            ((n = this.nodes[i - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * E.dampening),
            (t.vy += n.vy * E.dampening)),
          (t.vx *= this.friction),
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= E.tension);
    },
    draw: function () {
      var e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  function onMousemove(e) {
    function o() {
      lines = [];
      for (var e = 0; e < E.trails; e++)
        lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
    }
    function c(e) {
      e.touches
        ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : ((pos.x = e.clientX), (pos.y = e.clientY)),
        e.preventDefault();
    }
    function l(e) {
      1 == e.touches.length &&
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
    }
    document.removeEventListener('mousemove', onMousemove),
      document.removeEventListener('touchstart', onMousemove),
      document.addEventListener('mousemove', c),
      document.addEventListener('touchmove', c),
      document.addEventListener('touchstart', l),
      c(e),
      o(),
      render();
  }

  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
      ctx.lineWidth = 1;
      for (var e, t = 0; t < E.trails; t++) {
        (e = lines[t]).update();
        e.draw();
      }
      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  var ctx,
    f,
    e = 0,
    pos = {},
    lines = [],
    E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  const renderCanvas = function () {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.running = true;
    ctx.frame = 1;
    f = new n({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchstart', onMousemove);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener('blur', () => {
      ctx.running = true;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener('blur', () => {
        ctx.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor;

const SPACING = 5;
const HISTORY_MAX = 800;

// White head → sky blue → royal blue → near-black tail
const TRAIL_COLORS = [
  '#ffffff',
  '#e0f2fe',
  '#bae6fd',
  '#7dd3fc',
  '#38bdf8',
  '#0ea5e9',
  '#0284c7',
  '#0369a1',
  '#1d4ed8',
  '#1e40af',
  '#1e3a8a',
  '#172554',
  '#0f172a',
  '#0a1128',
  '#060d1a',
  '#03070f',
  '#01030a',
  '#000510',
  '#00020a',
  '#000105',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
];

const useCanvasCursor = () => {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const history: { x: number; y: number }[] = [];
    let visible = false;
    let isPointer = false;
    let lastMoveTime = performance.now();

    // Tail fade config
    const TAIL_FADE_DELAY = 100;
    const TAIL_FADE_STAGGER = 40;
    const TAIL_FADE_DURATION = 250;

    const onMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      lastMoveTime = performance.now();
      const target = e.target as HTMLElement;
      isPointer = !!target.closest('a, button, [role="button"], input, textarea, select, label, [onclick], .cursor-pointer');
      if (!visible) {
        for (let k = 0; k < HISTORY_MAX; k++) history.push({ ...pos });
        visible = true;
      } else {
        history.unshift(pos);
        if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
      }
    };
    const onMouseLeave = () => { visible = false; };
    const onMouseEnter = () => { visible = true; };

    document.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    let raf: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible && history.length > 0) {
        // Sample positions spaced SPACING px apart along the path
        const sampled: { x: number; y: number }[] = [];
        let accumulated = 0;
        let prev = history[0];
        sampled.push(prev);

        for (let j = 1; j < history.length && sampled.length < TRAIL_LENGTH; j++) {
          const dx = history[j].x - prev.x;
          const dy = history[j].y - prev.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          accumulated += dist;
          if (accumulated >= SPACING) {
            sampled.push(history[j]);
            accumulated = 0;
            prev = history[j];
          }
        }

        const idle = performance.now() - lastMoveTime;

        for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
          const pos = sampled[i] ?? sampled[sampled.length - 1] ?? history[history.length - 1];
          const radius = i === 0
            ? (isPointer ? 8 : 5.5)
            : Math.max(1, 7.5 - i * 0.42);

          // Base opacity from position in trail
          const baseOpacity = Math.max(0, 1 - i * 0.052);

          // Idle fade per dot (head never fades, tail fades from end inward)
          let idleFade = 1;
          if (i > 0) {
            const dotDelay = TAIL_FADE_DELAY + (TRAIL_LENGTH - 1 - i) * TAIL_FADE_STAGGER;
            idleFade = idle < dotDelay ? 1 : Math.max(0, 1 - (idle - dotDelay) / TAIL_FADE_DURATION);
          }

          const opacity = baseOpacity * idleFade;
          if (opacity <= 0) continue;

          // Parse hex color → rgba
          const hex = TRAIL_COLORS[i] ?? '#000000';
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);

          // Glow for head and near-head dots
          if (i < 5) {
            ctx.save();
            ctx.shadowColor = i === 0 ? `rgba(255,255,255,${opacity * 0.7})` : `rgba(14,165,233,${opacity * 0.5})`;
            ctx.shadowBlur = i === 0 ? 10 : 6;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.fill();
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('resize', resize);
    };
  }, []);
};

export default useCanvasCursor;
