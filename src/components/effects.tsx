"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= INTRO LOADER ================= */
export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      onDone();
      return;
    }
    const t0 = performance.now();
    const id = setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / 1400);
      setCount(Math.floor(p * 100));
      if (p >= 1) {
        clearInterval(id);
        setTimeout(() => {
          setGone(true);
          setTimeout(onDone, 650);
        }, 180);
      }
    }, 30);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#070809] p-6 md:p-10"
          exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex items-center justify-between font-mono2 text-[11px] tracking-[0.3em] text-[#6b7280] uppercase">
            <span>Ankit Singh — Portfolio</span>
            <span className="hidden sm:block">Beyond the Interface</span>
            <span className="text-[#d7ff3e]">v2.0 / 2026</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-none tracking-tight">
              {count}
              <span className="text-[#d7ff3e]">%</span>
            </div>
            <div className="mb-3 hidden max-w-[240px] text-right font-mono2 text-[11px] leading-relaxed tracking-[0.18em] text-[#6b7280] uppercase md:block">
              Loading digital mind
              <br />
              React · Node · Mongo
            </div>
          </div>
          <div className="h-[2px] w-full overflow-hidden bg-white/10">
            <div className="h-full bg-[#d7ff3e] transition-all duration-75" style={{ width: `${count}%` }} />
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              className="font-display text-lg uppercase tracking-tight text-[#a7adb5] md:text-xl"
            >
              Initializing experience<span className="animate-blink text-[#d7ff3e]">_</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= CUSTOM CURSOR ================= */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let mx = -100, my = -100, rx = -100, ry = -100;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-hover]"));
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${hovering ? 1.9 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [hovering]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden [@media(pointer:fine)]:block" aria-hidden>
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-[#d7ff3e]/60 transition-[border-color] duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-[6px] w-[6px] rounded-full bg-[#d7ff3e]"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}

/* ================= PARTICLE GRID (hero canvas) ================= */
export function ParticleGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0;
    let mx = -9999, my = -9999;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type P = { bx: number; by: number; x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas!.width = w * DPR; canvas!.height = h * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      const gap = w < 640 ? 34 : 44;
      pts = [];
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          pts.push({ bx: x, by: y, x, y, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.4 + 0.4 });
        }
      }
      if (reduced) draw(0);
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      // connections
      ctx!.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduced) {
          p.x += p.vx + Math.sin(t / 1600 + p.bx / 60) * 0.08;
          p.y += p.vy + Math.cos(t / 1800 + p.by / 60) * 0.08;
          // spring back
          p.x += (p.bx - p.x) * 0.008;
          p.y += (p.by - p.y) * 0.008;
        }
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.hypot(dx, dy);
        const glow = d < 170 ? (1 - d / 170) : 0;
        if (glow > 0.02) {
          ctx!.fillStyle = `rgba(215,255,62,${0.12 + glow * 0.75})`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r + glow * 2.2, 0, Math.PI * 2);
          ctx!.fill();
        } else {
          ctx!.fillStyle = "rgba(244,241,232,0.13)";
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      // sparse links near cursor
      ctx!.strokeStyle = "rgba(215,255,62,0.14)";
      for (let i = 0; i < pts.length; i += 3) {
        const p = pts[i];
        const d = Math.hypot(mx - p.x, my - p.y);
        if (d < 130) {
          for (let j = i + 3; j < Math.min(pts.length, i + 24); j += 3) {
            const q = pts[j];
            const dd = Math.hypot(p.x - q.x, p.y - q.y);
            if (dd < 52) {
              ctx!.beginPath();
              ctx!.moveTo(p.x, p.y);
              ctx!.lineTo(q.x, q.y);
              ctx!.stroke();
            }
          }
        }
      }
    }

    function loop(t: number) {
      draw(t);
      if (!reduced && !document.hidden) raf = requestAnimationFrame(loop);
      else if (!reduced) raf = requestAnimationFrame(loop);
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };

    resize();
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    const vis = () => { if (!document.hidden && !reduced) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); } };
    document.addEventListener("visibilitychange", vis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}

/* ================= CURSOR SPOTLIGHT ================= */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let tx = window.innerWidth / 2, ty = 260, x = tx, y = ty;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.07; y += (ty - y) * 0.07;
      if (ref.current) ref.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[1] hidden md:block">
      <div className="h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,62,0.07)_0%,transparent_65%)]" />
    </div>
  );
}
