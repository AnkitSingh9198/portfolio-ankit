"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Masked line reveal ---------- */
export function MaskedLines({ lines, className, lineClassName }: { lines: ReactNode[]; className?: string; lineClassName?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: reduce ? 0 : "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  index,
  eyebrow,
  title,
  blurb,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  blurb?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("relative", align === "center" && "text-center")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 font-mono2 text-[11px] tracking-[0.28em] uppercase text-[#d7ff3e]",
            align === "center" && "justify-center"
          )}
        >
          <span className="inline-block h-[6px] w-[6px] bg-[#d7ff3e] pulse-dot" aria-hidden />
          <span>
            [{index}] — {eyebrow}
          </span>
        </div>
      </Reveal>
      <MaskedLines
        className="mt-5"
        lines={[
          <span key="t" className="font-display font-700 font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,5.5vw,4.5rem)]">
            {title}
          </span>,
        ]}
      />
      {blurb && (
        <Reveal delay={0.15}>
          <p className={cn("mt-5 max-w-xl text-[15px] leading-relaxed text-[#a7adb5]", align === "center" && "mx-auto")}>{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Magnetic button ---------- */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0,0)";
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}

/* ---------- Mono label ---------- */
export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono2 text-[11px] tracking-[0.22em] uppercase", className)}>{children}</span>
  );
}

/* ---------- Char stagger for hero ---------- */
export function CharReveal({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  const chars = text.split("");
  return (
    <span className={cn("inline-block", className)} aria-label={text} role="text">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-transform"
          initial={{ y: reduce ? 0 : "115%", opacity: reduce ? 1 : 0, rotateX: reduce ? 0 : 55 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.022, ease: [0.22, 1, 0.36, 1] }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}
