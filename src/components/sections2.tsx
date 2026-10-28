"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Globe, Lock, Server, Workflow, Boxes } from "lucide-react";
import { useState } from "react";
import { projects, skillGroups, additionalProjects } from "@/data/portfolio";
import { Reveal, SectionHeading, Mono, Magnetic } from "./ui";
import { cn } from "@/lib/cn";

/* ================= EXPERTISE ================= */
export function Expertise() {
  const [tab, setTab] = useState(skillGroups[0].id);
  const [sel, setSel] = useState(0);
  const group = skillGroups.find((g) => g.id === tab)!;

  return (
    <section id="expertise" className="relative scroll-mt-20 border-t border-white/10 bg-[#0b0c0e] py-24 md:py-36">
      <div className="bg-blueprint-fine pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          index="02"
          eyebrow="Technical Expertise // Verified stack only"
          title={<>Full-stack, <span className="text-[#d7ff3e]">front to back.</span></>}
          blurb="Every technology below is taken directly from shipped production work. Select a layer, then hover or tap a node to see how I actually use it."
        />

        {/* tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Skill categories">
            {skillGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={tab === g.id}
                onClick={() => { setTab(g.id); setSel(0); }}
                className={cn(
                  "group flex items-center gap-3 rounded-full border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all",
                  tab === g.id ? "border-[#d7ff3e] bg-[#d7ff3e] text-black" : "border-white/15 text-[#a7adb5] hover:border-white/40 hover:text-white"
                )}
              >
                <span className={cn("font-mono2 text-[10px]", tab === g.id ? "text-black/60" : "text-[#6b7280]")}>{g.index}</span>
                {g.title}
                <span className={cn("hidden font-mono2 text-[10px] font-normal normal-case tracking-normal sm:inline", tab === g.id ? "text-black/60" : "text-[#6b7280]")}>{g.caption}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* constellation panel */}
          <Reveal>
            <div className="noise relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f11] p-6 md:p-8">
              <div className="flex items-center justify-between font-mono2 text-[10px] tracking-[0.24em] text-[#6b7280] uppercase">
                <span>◉ {group.title} constellation</span>
                <span>{group.stack.length} nodes</span>
              </div>
              {/* orbit visual */}
              <div className="relative mx-auto mt-6 aspect-square max-w-[420px]">
                <div className="absolute inset-0 rounded-full border border-dashed border-white/12" aria-hidden />
                <div className="absolute inset-[14%] rounded-full border border-white/8" aria-hidden />
                <div className="absolute inset-[30%] rounded-full border border-[#d7ff3e]/15" aria-hidden />
                <div className="animate-spin-slow absolute inset-0" aria-hidden>
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d7ff3e]" />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    className="grid h-24 w-24 place-items-center rounded-full bg-[#d7ff3e] text-center font-display text-sm font-bold leading-tight text-black glow-lime md:h-28 md:w-28"
                    aria-label={`${group.title} core`}
                  >
                    {group.title.toUpperCase()}
                  </button>
                </div>
                {group.stack.map((s, i) => {
                  const angle = (i / group.stack.length) * Math.PI * 2 - Math.PI / 2;
                  const rad = i % 2 === 0 ? 42 : 33;
                  const x = 50 + rad * Math.cos(angle);
                  const y = 50 + rad * Math.sin(angle);
                  const isSel = group.details[Math.min(sel, group.details.length - 1)]?.name.toLowerCase().includes(s.split(" ")[0].toLowerCase().replace(".", "").replace("+", ""));
                  return (
                    <button
                      key={s}
                      onMouseEnter={() => setSel(i % group.details.length)}
                      onFocus={() => setSel(i % group.details.length)}
                      onClick={() => setSel(i % group.details.length)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono2 text-[10px] tracking-[0.1em] uppercase backdrop-blur transition-all",
                        isSel ? "border-[#d7ff3e] bg-[#d7ff3e]/15 text-[#d7ff3e]" : "border-white/15 bg-[#0b0c0e]/90 text-[#c9cdd3] hover:border-[#d7ff3e]/60"
                      )}
                    >
                      {s}
                    </button>
                  );
                })}
                {/* svg spokes */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
                  {group.stack.map((_, i) => {
                    const angle = (i / group.stack.length) * Math.PI * 2 - Math.PI / 2;
                    const rad = i % 2 === 0 ? 42 : 33;
                    return (
                      <line
                        key={i}
                        x1="50%" y1="50%"
                        x2={`${50 + rad * Math.cos(angle)}%`} y2={`${50 + rad * Math.sin(angle)}%`}
                        stroke="rgba(244,241,232,0.08)"
                      />
                    );
                  })}
                </svg>
              </div>
              <p className="mt-4 text-center font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Hover / tap nodes to inspect →</p>
            </div>
          </Reveal>

          {/* detail list */}
          <div className="flex flex-col gap-3">
            {group.details.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.06}>
                <button
                  onMouseEnter={() => setSel(i)}
                  onFocus={() => setSel(i)}
                  onClick={() => setSel(i)}
                  className={cn(
                    "group w-full rounded-2xl border p-5 text-left transition-all duration-300",
                    sel === i ? "border-[#d7ff3e]/60 bg-[#d7ff3e]/[0.06]" : "border-white/10 bg-[#0e0f11] hover:border-white/25"
                  )}
                  aria-expanded={sel === i}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={cn("font-display text-lg font-bold tracking-tight", sel === i ? "text-[#d7ff3e]" : "text-white")}>
                      <span className="mr-3 font-mono2 text-[11px] font-normal text-[#6b7280]">0{i + 1}</span>{d.name}
                    </h3>
                    <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all", sel === i ? "border-[#d7ff3e] bg-[#d7ff3e] text-black" : "border-white/15 text-[#6b7280]")}>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                  <div className={cn("grid transition-all duration-300", sel === i ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-60")}>
                    <p className="overflow-hidden text-sm leading-relaxed text-[#a7adb5]">{d.desc}</p>
                  </div>
                </button>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <p className="rounded-2xl border border-dashed border-white/15 p-4 font-mono2 text-[11px] leading-relaxed tracking-[0.08em] text-[#6b7280]">
                // No fabricated proficiency bars. If it's listed here, it's shipped in production — ask me for the war stories.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PROJECT VISUALS (abstract, honest) ================= */
function ProjectVisual({ pattern, accent }: { pattern: string; accent: string }) {
  if (pattern === "pulse") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0a1418]">
        <div className="bg-blueprint-fine absolute inset-0 opacity-60" />
        <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <path d="M0 250 L90 250 L120 180 L155 320 L190 210 L220 250 L600 250" fill="none" stroke={accent} strokeWidth="3" />
          <path d="M0 250 L90 250 L120 180 L155 320 L190 210 L220 250 L600 250" fill="none" stroke={accent} strokeWidth="10" opacity="0.12" />
          {[90, 220, 340, 470].map((x) => (
            <g key={x}>
              <circle cx={x} cy={130 + (x % 90)} r="26" fill="none" stroke="rgba(255,255,255,0.18)" />
              <circle cx={x} cy={130 + (x % 90)} r="4" fill={accent} className="pulse-dot" />
              <line x1={x} y1={130 + (x % 90)} x2={x} y2="250" stroke="rgba(255,255,255,0.14)" strokeDasharray="4 4" />
            </g>
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={300 + i * 44} y={90 + (i % 3) * 30} width="34" height="52" rx="6" fill="none" stroke="rgba(255,255,255,0.22)" />
          ))}
        </svg>
        <div className="absolute left-5 top-5 rounded-md bg-black/60 px-2.5 py-1.5 font-mono2 text-[10px] tracking-[0.2em] text-white/80 backdrop-blur">● WEBRTC // LIVE SESSION</div>
        <div className="absolute bottom-5 right-5 flex gap-2">
          {["CHAT", "AUDIO", "VIDEO"].map((t) => (
            <span key={t} className="rounded-full px-3 py-1 font-mono2 text-[10px] tracking-[0.16em]" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}>{t}</span>
          ))}
        </div>
      </div>
    );
  }
  if (pattern === "ledger") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0c0f14]">
        <div className="absolute inset-0 p-6">
          <div className="flex gap-2">
            {["ZUNO  ₹4,210", "SBI  ₹4,890", "ICICI  ₹4,455", "GODIGIT  ₹3,980"].map((q, i) => (
              <div key={q} className="flex-1 rounded-xl border p-3 backdrop-blur" style={{ borderColor: i === 3 ? `${accent}88` : "rgba(255,255,255,0.12)", background: i === 3 ? `${accent}14` : "rgba(255,255,255,0.03)" }}>
                <div className="font-mono2 text-[9px] tracking-[0.14em] text-white/50">QUOTE 0{i + 1}</div>
                <div className="mt-1 font-display text-[13px] font-bold" style={i === 3 ? { color: accent } : {}}>{q}</div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${55 + i * 12}%`, background: i === 3 ? accent : "rgba(255,255,255,0.35)" }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/12 bg-white/[0.03] p-4">
            {["Quote generated", "Proposal submitted", "KYC verified", "Policy issued"].map((s, i) => (
              <div key={s} className="flex items-center gap-3 py-1.5">
                <span className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold" style={{ background: i < 3 ? accent : "rgba(255,255,255,0.12)", color: i < 3 ? "#000" : "#888" }}>{i < 3 ? "✓" : "○"}</span>
                <span className="font-mono2 text-[11px] tracking-[0.12em] uppercase" style={{ color: i < 3 ? "#fff" : "#666" }}>{s}</span>
                {i === 2 && <span className="ml-auto rounded bg-white/10 px-2 py-0.5 font-mono2 text-[9px] text-white/60">→ PAYMENT</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-5 top-5 hidden">ledger</div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#100d08]">
      <div className="bg-blueprint absolute inset-0 opacity-50" />
      <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect x="60" y="60" width="480" height="200" rx="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <rect x="60" y="60" width="480" height="44" rx="14" fill="rgba(255,255,255,0.05)" />
        <circle cx="88" cy="82" r="5" fill="#ff5f57" /><circle cx="106" cy="82" r="5" fill="#febc2e" /><circle cx="124" cy="82" r="5" fill="#28c840" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={90 + i * 150} y={130} width="120" height="100" rx="10" fill="none" stroke={i === 1 ? accent : "rgba(255,255,255,0.2)"} strokeWidth={i === 1 ? 2 : 1} />
            <rect x={100 + i * 150} y={145} width="60" height="8" rx="4" fill={i === 1 ? accent : "rgba(255,255,255,0.25)"} />
            <rect x={100 + i * 150} y={160} width="100" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
            <rect x={100 + i * 150} y={200} width="70" height="18" rx="9" fill={i === 1 ? accent : "rgba(255,255,255,0.12)"} />
          </g>
        ))}
        <rect x="220" y="290" width="160" height="34" rx="17" fill="none" stroke={accent} strokeDasharray="5 5" className="flow-line" />
        <text x="300" y="312" textAnchor="middle" fill={accent} fontSize="13" fontFamily="monospace">◉ CHECK AVAILABILITY</text>
      </svg>
    </div>
  );
}

/* ================= PROJECTS ================= */
export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute left-[-160px] top-40 select-none font-display text-[20vw] font-bold leading-none text-white/[0.025]" aria-hidden>02</div>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          index="03"
          eyebrow="Selected Work // Real platforms, real users"
          title={<>Work that <span className="text-stroke">shipped.</span></>}
          blurb="Three production platforms plus client work across e-commerce and travel. Abstract visuals below represent each product category — not fake screenshots."
        />

        <div className="mt-14 space-y-6">
          {projects.map((p, idx) => (
            <Reveal key={p.id}>
              <article
                className={cn(
                  "group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d0f] transition-colors hover:border-white/25 lg:grid-cols-2",
                  idx % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
                aria-labelledby={`proj-${p.id}`}
              >
                {/* visual */}
                <div className="relative min-h-[300px] overflow-hidden md:min-h-[400px]" data-hover>
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <ProjectVisual pattern={p.pattern} accent={p.accent} />
                  </div>
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="rounded-full bg-black/70 px-3.5 py-1.5 font-display text-sm font-bold backdrop-blur" style={{ color: p.accent }}>{p.index}</span>
                    <span className="rounded-full bg-black/70 px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-white/80 uppercase backdrop-blur">{p.year}</span>
                  </div>
                  <span className="absolute bottom-5 left-5 rounded-md bg-black/70 px-2.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-white/60 uppercase backdrop-blur">
                    ◆ Abstract representation — not a product screenshot
                  </span>
                </div>

                {/* copy */}
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <Mono className="text-[#6b7280]">{p.category}</Mono>
                    <h3 id={`proj-${p.id}`} className="mt-3 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold uppercase leading-[0.95] tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#a7adb5]">{p.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {p.contributions.slice(0, 5).map((c) => (
                        <li key={c} className="flex gap-3 text-[13.5px] leading-relaxed text-[#c9cdd3]">
                          <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45" style={{ background: p.accent }} aria-hidden />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-mono2 text-[10px] tracking-[0.12em] text-[#c9cdd3] uppercase">{s}</span>
                      ))}
                    </div>
                    <p className="mt-4 font-mono2 text-[11px] leading-relaxed tracking-[0.06em] text-[#6b7280]">◈ {p.role}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    {p.url ? (
                      <Magnetic>
                        <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#f4f1e8] px-6 py-3 font-display text-[13px] font-bold text-black transition-colors hover:bg-[#d7ff3e]">
                          <Globe size={15} /> VISIT LIVE <ArrowUpRight size={15} />
                        </a>
                      </Magnetic>
                    ) : (
                      <span className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono2 text-[11px] tracking-[0.14em] text-[#6b7280] uppercase">
                        <Lock size={13} /> URL on request — client property
                      </span>
                    )}
                    <span className="flex items-center gap-2 font-mono2 text-[11px] tracking-[0.14em] text-[#6b7280] uppercase">
                      <GitBranch size={14} /> Repos private — available in interview
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* additional */}
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {additionalProjects.map((a, i) => (
              <div key={a.name} className="group rounded-2xl border border-white/10 bg-[#0c0d0f] p-6 transition-colors hover:border-[#d7ff3e]/50">
                <div className="flex items-center justify-between">
                  <span className="font-mono2 text-[11px] text-[#d7ff3e]">+0{i + 1}</span>
                  <span className="text-[#4b5057] transition-colors group-hover:text-[#d7ff3e]"><Boxes size={18} /></span>
                </div>
                <h4 className="mt-4 font-display text-lg font-bold leading-tight">{a.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#a7adb5]">{a.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-white/15 p-6 sm:flex-row sm:items-center">
            <p className="flex items-center gap-3 font-mono2 text-[12px] tracking-[0.1em] text-[#6b7280]"><Server size={16} className="text-[#d7ff3e]" /> Full project breakdowns, architecture diagrams & code walkthroughs — live on request.</p>
            <Magnetic>
              <a href="#contact" className="u-link flex items-center gap-2 font-display text-sm font-bold uppercase text-[#d7ff3e]">Request walkthrough <Workflow size={16} /></a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
