"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check, Menu, X, MapPin, Phone, Mail, ExternalLink, Terminal, Cpu, Database, Layers } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { CharReveal, Magnetic, MaskedLines, Mono, Reveal } from "./ui";
import { ParticleGrid } from "./effects";
import { cn } from "@/lib/cn";

/* ================= NAVBAR ================= */
export function Navbar({ started }: { started: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={started ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled ? "border-b border-white/10 bg-[#070809]/85 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7ff3e] font-display text-sm font-bold text-black transition-transform duration-300 group-hover:rotate-[20deg]">
              AS
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[13px] font-bold tracking-wide">ANKIT SINGH</span>
              <span className="font-mono2 text-[10px] tracking-[0.24em] text-[#6b7280]">FULL—STACK®26</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "u-link font-mono2 text-[11px] tracking-[0.2em] uppercase transition-colors",
                  active === l.href ? "text-[#d7ff3e]" : "text-[#a7adb5] hover:text-white"
                )}
              >
                <span className="mr-1 text-[9px] text-[#6b7280]">{l.index}</span> {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-[#d7ff3e]/30 bg-[#d7ff3e]/8 px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-[#d7ff3e] uppercase md:flex">
              <span className="h-[6px] w-[6px] rounded-full bg-[#d7ff3e] pulse-dot" />
              {profile.availability}
            </span>
            <Magnetic>
              <a
                href="#contact"
                className="hidden rounded-full bg-[#f4f1e8] px-5 py-2.5 font-display text-[13px] font-bold text-black transition-colors hover:bg-[#d7ff3e] sm:block"
              >
                HIRE ME
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 top-[76px] z-[79] rounded-2xl border border-white/10 bg-[#0d0e10]/97 p-4 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-bold uppercase hover:bg-white/5"
              >
                <span><span className="mr-3 font-mono2 text-[10px] text-[#d7ff3e]">{l.index}</span>{l.label}</span>
                <ArrowUpRight size={18} className="text-[#6b7280]" />
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[#d7ff3e] px-4 py-3.5 text-center font-display font-bold text-black">
              HIRE ME →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= HERO ================= */
export function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const reduce = useReducedMotion();
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    fetch("/profile.jpg", { method: "HEAD" }).then((r) => setHasPhoto(r.ok)).catch(() => {});
  }, []);

  return (
    <section ref={ref} id="top" className="noise relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* backdrop */}
      <motion.div style={reduce ? {} : { y: yBg }} className="absolute inset-0">
        <ParticleGrid className="absolute inset-0 h-full w-full" />
        <div className="bg-blueprint absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_20%,rgba(215,255,62,0.09),transparent_65%)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070809] to-transparent" aria-hidden />
      </motion.div>

      {/* side rails */}
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden flex-col justify-between py-28 font-mono2 text-[10px] tracking-[0.3em] text-[#4b5057] uppercase xl:flex" aria-hidden>
        <span className="[writing-mode:vertical-rl] rotate-180">SYS.PORTFOLIO — 28.7191°N / 77.2547°E</span>
        <span className="[writing-mode:vertical-rl] rotate-180">SCROLL // 001</span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden flex-col justify-between py-28 font-mono2 text-[10px] tracking-[0.3em] text-[#4b5057] uppercase xl:flex" aria-hidden>
        <span className="[writing-mode:vertical-rl]">REACT — NODE — MONGO</span>
        <span className="[writing-mode:vertical-rl] text-[#d7ff3e]/70">● LIVE</span>
      </div>

      <motion.div style={reduce ? {} : { y: yFg }} className="relative z-[2] mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-10 px-5 pb-16 pt-[120px] md:px-10 lg:grid-cols-[1.35fr_0.85fr] lg:pt-[110px]">
        {/* ---- copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 font-mono2 text-[11px] tracking-[0.24em] uppercase"
          >
            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[#f4f1e8]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#d7ff3e] pulse-dot" /> {profile.availability}
            </span>
            <span className="text-[#6b7280]">▲ Noida, IN — {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST</span>
          </motion.div>

          <h1 className="mt-6 font-display font-bold uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.6rem,8.5vw,7.2rem)]">
            {started && (
              <>
                <span className="block overflow-hidden pb-1"><CharReveal text="I BUILD" delay={0.35} /></span>
                <span className="block overflow-hidden pb-1">
                  <CharReveal text="DIGITAL" delay={0.5} className="text-stroke" />
                </span>
                <span className="block overflow-hidden pb-1"><CharReveal text="EXPERIENCES" delay={0.65} /></span>
                <span className="block overflow-hidden pb-1">
                  <CharReveal text="THAT MOVE" delay={0.85} /><CharReveal text=" PEOPLE." delay={1.05} className="text-[#d7ff3e]" />
                </span>
              </>
            )}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-md">
              <p className="border-l-2 border-[#d7ff3e] pl-4 text-[15px] leading-relaxed text-[#c9cdd3] md:text-base">
                {profile.heroSub}
              </p>
              <p className="mt-3 pl-4 font-mono2 text-[11px] tracking-[0.2em] text-[#6b7280] uppercase">
                {profile.name} — {profile.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-[#d7ff3e] px-7 py-4 font-display text-sm font-bold tracking-wide text-black transition-shadow hover:glow-lime"
              >
                EXPLORE MY WORK
                <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-display text-sm font-bold tracking-wide transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]"
              >
                CONTACT ME
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          {/* mini stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
          >
            {[
              ["~2 YRS", "Production experience"],
              ["10+", "Platforms shipped"],
              ["04", "Live insurer APIs"],
            ].map(([v, l]) => (
              <div key={l} className="bg-[#0b0c0e] px-4 py-4">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-xl font-bold text-[#d7ff3e] md:text-2xl">{v}</dd>
                <dd className="mt-1 font-mono2 text-[9px] tracking-[0.18em] text-[#6b7280] uppercase">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---- portrait module ---- */}
        <motion.aside
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={started ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
          aria-label="Portrait of Ankit Singh"
        >
          <div className="absolute -inset-3 rounded-[28px] bg-[conic-gradient(from_120deg,rgba(215,255,62,0.35),transparent_30%,transparent_70%,rgba(215,255,62,0.25))] blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-[#0e0f11]">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </span>
              <span>profile — ankit.exe</span>
              <span className="text-[#d7ff3e]">●</span>
            </div>
            {/* image */}
            <div className="relative aspect-[3/3.6] bg-[#141619]">
              {hasPhoto ? (
                <Image
                  src="/profile.jpg"
                  alt="Portrait photograph of Ankit Singh, Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 380px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(215,255,62,0.16),transparent_60%),linear-gradient(180deg,#16181b,#0b0c0e)] p-8 text-center">
                  <div className="grid h-28 w-28 place-items-center rounded-full border border-[#d7ff3e]/40 bg-[#d7ff3e]/10 font-display text-4xl font-bold text-[#d7ff3e]">
                    AS
                  </div>
                  <p className="mt-5 font-display text-xl font-bold uppercase leading-tight">Ankit<br />Singh</p>
                  <p className="mt-3 max-w-[220px] font-mono2 text-[10px] leading-relaxed tracking-[0.14em] text-[#6b7280] uppercase">
                    Add your photo as <span className="text-[#d7ff3e]">public/profile.jpg</span> — it appears here automatically
                  </p>
                  <div className="bg-blueprint-fine absolute inset-0 opacity-40" aria-hidden />
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070809]/85 via-transparent to-transparent" aria-hidden />
              {/* scanline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#d7ff3e]/15 to-transparent" aria-hidden />
            </div>
            {/* bottom meta */}
            <div className="grid grid-cols-2 gap-px bg-white/10 font-mono2 text-[10px] tracking-[0.16em] uppercase">
              <div className="bg-[#0e0f11] px-4 py-3"><span className="text-[#6b7280]">Role</span><br /><span className="text-white">Full Stack Dev</span></div>
              <div className="bg-[#0e0f11] px-4 py-3 text-right"><span className="text-[#6b7280]">Base</span><br /><span className="text-[#d7ff3e]">Noida / IN</span></div>
            </div>
          </div>
          {/* floating chips */}
          <div className="animate-floaty absolute -left-6 top-16 hidden rounded-xl border border-white/12 bg-[#0d0e10]/95 px-3.5 py-2.5 font-mono2 text-[10px] tracking-[0.14em] uppercase shadow-2xl sm:block">
            <span className="text-[#d7ff3e]">◈</span> React · Next.js
          </div>
          <div className="animate-floaty absolute -right-5 top-1/2 hidden rounded-xl border border-white/12 bg-[#0d0e10]/95 px-3.5 py-2.5 font-mono2 text-[10px] tracking-[0.14em] uppercase shadow-2xl sm:block" style={{ animationDelay: "-3s" }}>
            <span className="text-[#d7ff3e]">◈</span> Node · Express
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#d7ff3e]/40 bg-[#070809] px-4 py-2 font-mono2 text-[10px] tracking-[0.18em] text-[#d7ff3e] uppercase">
            <Terminal size={12} /> {profile.tagline.split("·")[0]} — {profile.tagline.split("·")[3]}
          </div>
        </motion.aside>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#profile"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
        className="relative z-[2] mx-auto mb-7 flex flex-col items-center gap-2 font-mono2 text-[10px] tracking-[0.3em] text-[#6b7280] uppercase hover:text-[#d7ff3e]"
        aria-label="Scroll to profile"
      >
        <span>Scroll</span>
        <span className="flex h-10 w-[22px] justify-center rounded-full border border-white/20 pt-2">
          <motion.span animate={reduce ? {} : { y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-1.5 w-1.5 rounded-full bg-[#d7ff3e]" />
        </span>
      </motion.a>
    </section>
  );
}

/* ================= MARQUEE ================= */
export function Marquee() {
  const items = ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebRTC", "React Native", "REST APIs", "JWT Auth"];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0b0c0e] py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-bold uppercase tracking-tight text-[#f4f1e8]/90 md:text-xl">
            {t} <span className="text-[#d7ff3e]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= PROFILE / ABOUT ================= */
export function About() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="profile" className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute right-[-200px] top-20 select-none font-display text-[22vw] font-bold leading-none text-white/[0.025]" aria-hidden>01</div>
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Mono className="text-[#d7ff3e]">[01] — Profile // The human behind the stack</Mono>
          </Reveal>
          <MaskedLines
            className="mt-5"
            lines={[
              <span key="a" className="font-display text-[clamp(2rem,4.6vw,3.8rem)] font-bold uppercase leading-[0.98] tracking-tight">Engineer by craft,</span>,
              <span key="b" className="font-display text-[clamp(2rem,4.6vw,3.8rem)] font-bold uppercase leading-[0.98] tracking-tight text-[#6b7280]">human by default<span className="text-[#d7ff3e]">.</span></span>,
            ]}
          />
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-3 font-mono2 text-[12px] tracking-[0.14em] uppercase">
              <p className="flex items-center gap-3 text-[#a7adb5]"><MapPin size={14} className="text-[#d7ff3e]" /> {profile.location}</p>
              <a href={profile.phoneHref} className="flex items-center gap-3 text-[#a7adb5] hover:text-white"><Phone size={14} className="text-[#d7ff3e]" /> {profile.phone}</a>
              <button onClick={copyEmail} className="group flex items-center gap-3 text-[#a7adb5] hover:text-white" aria-label="Copy email address">
                <Mail size={14} className="text-[#d7ff3e]" /> {profile.email}
                <span className="rounded-md border border-white/15 px-2 py-1 text-[10px] text-[#6b7280] group-hover:border-[#d7ff3e]/50 group-hover:text-[#d7ff3e]">
                  {copied ? <span className="flex items-center gap-1"><Check size={11} /> Copied</span> : <span className="flex items-center gap-1"><Copy size={11} /> Copy</span>}
                </span>
              </button>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#a7adb5] hover:text-white">
                <ExternalLink size={14} className="text-[#d7ff3e]" /> {profile.linkedinLabel} <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {profile.stats.map((s) => (
                <div key={s.label} className="bg-[#0c0d0f] p-4">
                  <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 font-mono2 text-[9px] leading-relaxed tracking-[0.14em] text-[#6b7280] uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-16">
          <Reveal>
            <p className="font-display text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-snug tracking-tight text-[#f4f1e8]">
              {profile.summary}
            </p>
          </Reveal>
          <div className="mt-8 space-y-6 border-l border-white/10 pl-6">
            {profile.summaryLong.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#a7adb5]"><span className="mr-3 font-mono2 text-[11px] text-[#d7ff3e]">0{i + 1}</span>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Figma-to-Code", "REST Design", "Role-based Access", "Schema Design", "Cloud Deploy", "Agile"].map((t) => (
                <span key={t} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 font-mono2 text-[10px] tracking-[0.16em] text-[#c9cdd3] uppercase transition-colors hover:border-[#d7ff3e]/60 hover:text-[#d7ff3e]">{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0c0d0f] p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#d7ff3e]/12 text-[#d7ff3e]"><Cpu size={22} /></span>
              <p className="text-sm leading-relaxed text-[#a7adb5]">
                <span className="font-semibold text-white">Currently:</span> owning end-to-end features at LYB Technology — WebRTC consultation flows on Dr Dermat, insurer integrations on Zanifest.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- small icons row used in lab reveal ---- */
export function LayerIcon({ id }: { id: string }) {
  if (id === "ui") return <Layers size={20} />;
  if (id === "api") return <Terminal size={20} />;
  if (id === "server") return <Cpu size={20} />;
  return <Database size={20} />;
}
