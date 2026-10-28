"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Briefcase, Check, Copy, GraduationCap, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { education, experience, labLayers, principles, profile } from "@/data/portfolio";
import { Reveal, SectionHeading, Mono, Magnetic, MaskedLines } from "./ui";
import { LayerIcon } from "./sections1";
import { cn } from "@/lib/cn";

/* ================= EXPERIENCE ================= */
export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 border-t border-white/10 bg-[#0b0c0e] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          index="04"
          eyebrow="Journey // Where I've shipped"
          title={<>Two years, <span className="text-[#d7ff3e]">two teams,</span> one trajectory.</>}
          blurb="Accurate titles, dates and contributions — straight from the resume. Nothing inflated."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* timeline */}
          <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-[#d7ff3e]/60 before:via-white/15 before:to-transparent" aria-label="Work history">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.08}>
                <li className="relative grid gap-4 rounded-3xl border border-white/10 bg-[#0e0f11] p-7 pl-16 md:p-8 md:pl-20">
                  <span className="absolute left-[11px] top-8 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-[#d7ff3e] bg-[#070809]" aria-hidden>
                    <span className={cn("h-[6px] w-[6px] rounded-full bg-[#d7ff3e]", e.current && "pulse-dot")} />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("rounded-full px-3 py-1 font-mono2 text-[10px] tracking-[0.18em] uppercase", e.current ? "bg-[#d7ff3e] text-black" : "border border-white/15 text-[#a7adb5]")}>
                      {e.current ? "● Present" : e.period}
                    </span>
                    {e.current && <span className="font-mono2 text-[10px] tracking-[0.18em] text-[#6b7280] uppercase">{e.period}</span>}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">{e.role}</h3>
                    <p className="mt-1 flex items-center gap-2 font-mono2 text-[12px] tracking-[0.12em] text-[#d7ff3e] uppercase"><Briefcase size={13} /> {e.company}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-[#a7adb5]">
                        <span className="mt-[8px] h-px w-4 shrink-0 bg-[#d7ff3e]/70" aria-hidden />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono2 text-[10px] tracking-[0.1em] text-[#c9cdd3] uppercase">{t}</span>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* education */}
          <div>
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-[#070809] p-7 md:p-8">
                <Mono className="flex items-center gap-2 text-[#d7ff3e]"><GraduationCap size={14} /> Education & Certifications</Mono>
                <div className="mt-6 space-y-5">
                  {education.map((ed, i) => (
                    <div key={ed.degree} className="group flex gap-4 border-b border-white/8 pb-5 last:border-0 last:pb-0">
                      <span className="font-display text-sm font-bold text-[#4b5057] transition-colors group-hover:text-[#d7ff3e]">0{i + 1}</span>
                      <div>
                        <h4 className="font-display text-[15px] font-bold leading-snug">{ed.degree}</h4>
                        <p className="mt-1 font-mono2 text-[11px] tracking-[0.1em] text-[#6b7280] uppercase">{ed.school} — {ed.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl bg-[#d7ff3e] p-5 text-black">
                  <p className="font-mono2 text-[10px] tracking-[0.22em] uppercase opacity-70">Open to</p>
                  <p className="mt-1 font-display text-lg font-bold leading-tight">Full-time roles · freelance builds · technical collaborations</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-blueprint-fine mt-5 rounded-3xl border border-[#d7ff3e]/25 bg-[#d7ff3e]/[0.04] p-7">
                <p className="font-display text-xl font-bold leading-snug">“Strong in REST design, JWT auth, role-based panels & Mongo schema design.”</p>
                <p className="mt-3 font-mono2 text-[11px] tracking-[0.16em] text-[#6b7280] uppercase">— Straight from the resume summary</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= LAB ================= */
export function Lab() {
  const [active, setActive] = useState(labLayers[2].id);
  const current = labLayers.find((l) => l.id === active)!;
  const idx = labLayers.findIndex((l) => l.id === active);

  return (
    <section id="lab" className="noise relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_30%,rgba(215,255,62,0.07),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          index="05"
          eyebrow="Inside my digital workshop // Interactive"
          title={<>How a request <span className="text-[#d7ff3e]">travels.</span></>}
          blurb="Follow a click from the interface to the database. Tap any layer to inspect what lives there and why it matters."
          align="center"
        />

        {/* flow */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto pb-2" role="tablist" aria-label="Architecture layers">
            <div className="flex min-w-[760px] items-stretch gap-0">
              {labLayers.map((l, i) => (
                <div key={l.id} className="flex flex-1 items-stretch">
                  <button
                    role="tab"
                    aria-selected={active === l.id}
                    onClick={() => setActive(l.id)}
                    className={cn(
                      "group relative flex-1 rounded-2xl border p-5 text-left transition-all duration-300",
                      active === l.id ? "border-[#d7ff3e] bg-[#d7ff3e]/[0.07] glow-lime" : "border-white/12 bg-[#0d0e10] hover:border-white/30"
                    )}
                  >
                    <span className={cn("font-mono2 text-[10px] tracking-[0.22em]", active === l.id ? "text-[#d7ff3e]" : "text-[#6b7280]")}>{l.step}</span>
                    <span className={cn("mt-2 flex items-center gap-2 font-display text-base font-bold leading-tight", active === l.id ? "text-white" : "text-[#c9cdd3]")}>
                      <span className={active === l.id ? "text-[#d7ff3e]" : "text-[#6b7280]"}><LayerIcon id={l.id} /></span>
                      {l.title}
                    </span>
                    <span className="mt-1 block font-mono2 text-[10px] tracking-[0.08em] text-[#6b7280]">{l.tech}</span>
                    {active === l.id && <span className="absolute -bottom-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#d7ff3e] bg-[#0d0e10]" aria-hidden />}
                  </button>
                  {i < labLayers.length - 1 && (
                    <div className="relative flex w-10 items-center justify-center sm:w-14" aria-hidden>
                      <svg width="100%" height="24" viewBox="0 0 56 24" fill="none" preserveAspectRatio="none">
                        <path d="M2 12 H50 M42 5 L51 12 L42 19" stroke={idx >= i ? "#d7ff3e" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" className="flow-line" />
                      </svg>
                      <span className={cn("absolute top-1 h-1.5 w-1.5 rounded-full", idx > i ? "bg-[#d7ff3e] pulse-dot" : "bg-white/20")} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* detail */}
        <div className="mx-auto mt-8 max-w-4xl">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-3xl border border-white/10 bg-[#0c0d0f] p-7 md:grid-cols-[auto_1fr] md:p-9"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#d7ff3e] text-black"><LayerIcon id={current.id} /></div>
            <div>
              <Mono className="text-[#d7ff3e]">{current.step} — {current.tech}</Mono>
              <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{current.title}</h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#a7adb5]">{current.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.meta.map((m) => (
                  <span key={m} className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.14em] text-[#f4f1e8] uppercase">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>
          <p className="mt-4 text-center font-mono2 text-[11px] tracking-[0.2em] text-[#6b7280] uppercase">
            Example round-trip — <span className="text-[#c9cdd3]">“Book a consultation”:</span> React form → POST /api/consultations (JWT) → Express validates → Socket emits “ringing” → Mongo persists → UI confirms in ~300ms
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= APPROACH ================= */
export function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-20 border-t border-white/10 bg-[#f4f1e8] py-24 text-[#0b0c0e] md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Mono className="text-[#4b5563]">[06] — How I work // Principles, not posters</Mono>
        </Reveal>
        <MaskedLines
          className="mt-5 max-w-4xl"
          lines={[
            <span key="1" className="font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-tight">Calm code.</span>,
            <span key="2" className="font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-tight">Fast interfaces<span className="text-[#5a7a00]">.</span></span>,
          ]}
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col justify-between bg-[#f4f1e8] p-7 transition-colors duration-300 hover:bg-[#0b0c0e] hover:text-[#f4f1e8] md:p-8">
                <span className="font-mono2 text-[12px] tracking-[0.2em] text-[#6b7280] group-hover:text-[#d7ff3e]">{p.n}</span>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="flex flex-col justify-between bg-[#0b0c0e] p-7 text-[#f4f1e8] md:p-8">
            <span className="font-mono2 text-[12px] tracking-[0.2em] text-[#d7ff3e]">06 — DEBUG MODE</span>
            <p className="mt-10 font-display text-xl font-bold leading-snug">“Reproduce it, isolate it, fix the cause — then write the test I wish existed.”</p>
            <p className="mt-3 font-mono2 text-[11px] tracking-[0.12em] text-[#6b7280] uppercase">Postman · DevTools · Logs · Explain plans</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
type Status = "idle" | "sending" | "ok" | "err";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "Project inquiry", message: "" });

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); } catch { /* noop */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (form.name.trim().length < 2) return setError("Please tell me your name (2+ characters)."), setStatus("err");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("That email doesn't look valid — double-check it?"), setStatus("err");
    if (form.message.trim().length < 10) return setError("Give me a little more detail (10+ characters)."), setStatus("err");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong saving your message.");
      setStatus("ok");
      setForm({ name: "", email: "", subject: "Project inquiry", message: "" });
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Couldn't send. Email me directly instead.");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-white/12 bg-[#0e0f11] px-4 py-3.5 text-sm text-white placeholder:text-[#4b5057] transition-colors focus:border-[#d7ff3e] focus:outline-none";

  return (
    <section id="contact" className="noise relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_100%,rgba(215,255,62,0.1),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Mono className="text-[#d7ff3e]">[07] — Contact // The finale</Mono>
        </Reveal>
        <h2 className="mt-5 font-display font-bold uppercase leading-[0.9] tracking-tight text-[clamp(2.8rem,9vw,8rem)]">
          Let&apos;s build<br /><span className="text-[#d7ff3e]">what&apos;s next.</span>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#a7adb5]">
            Have a role, a product idea, or a broken booking flow that needs saving? My inbox is open — I reply within 24 hours on working days.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* left — direct channels */}
          <div className="flex flex-col gap-4">
            <button
              onClick={copyEmail}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#d7ff3e]/40 bg-[#d7ff3e]/[0.06] p-6 text-left transition-colors hover:bg-[#d7ff3e]/[0.1]"
              aria-label="Copy email address"
            >
              <div>
                <p className="font-mono2 text-[10px] tracking-[0.24em] text-[#d7ff3e] uppercase">✉ Email — click to copy</p>
                <p className="mt-2 break-all font-display text-lg font-bold md:text-xl">{profile.email}</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d7ff3e] text-black transition-transform group-hover:scale-110">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </span>
            </button>
            {copied && <p className="font-mono2 text-[11px] tracking-[0.14em] text-[#d7ff3e] uppercase" role="status">✓ Copied to clipboard — talk soon.</p>}

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={profile.phoneHref} className="rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50">
                <Phone size={18} className="text-[#d7ff3e]" />
                <p className="mt-3 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Phone</p>
                <p className="mt-1 font-display font-bold">{profile.phone}</p>
              </a>
              <div className="rounded-2xl border border-white/10 bg-[#0c0d0f] p-5">
                <MapPin size={18} className="text-[#d7ff3e]" />
                <p className="mt-3 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Base</p>
                <p className="mt-1 font-display text-[15px] font-bold leading-snug">{profile.location}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50">
                <div><p className="font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">LinkedIn</p><p className="mt-1 font-display text-[15px] font-bold">Connect <ArrowUpRight size={14} className="inline" /></p></div>
              </a>
              <a href="https://drdermat.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50">
                <div><p className="font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Live work</p><p className="mt-1 font-display text-[15px] font-bold">drdermat.com <ArrowUpRight size={14} className="inline" /></p></div>
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 font-mono2 text-[11px] leading-relaxed tracking-[0.06em] text-[#6b7280]">
              <span className="text-[#d7ff3e]">$</span> Prefer email apps? <a className="u-link text-white" href={`mailto:${profile.email}?subject=${encodeURIComponent("Project inquiry — via portfolio")}`}>Open a pre-addressed email →</a>
            </div>
          </div>

          {/* right — form */}
          <div className="rounded-3xl border border-white/10 bg-[#0c0d0f] p-7 md:p-9">
            <div className="flex items-center justify-between">
              <Mono className="text-white">◉ New transmission</Mono>
              <Mono className="text-[#6b7280]">avg. reply &lt; 24h</Mono>
            </div>
            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Your name *</span>
                  <input required minLength={2} maxLength={120} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Lovelace" className={inputCls} autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Email *</span>
                  <input required type="email" maxLength={200} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={inputCls} autoComplete="email" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Subject</span>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls}>
                  <option>Project inquiry</option>
                  <option>Full-time role</option>
                  <option>Freelance build</option>
                  <option>Code walkthrough request</option>
                  <option>Just saying hi</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase">Message *</span>
                <textarea required minLength={10} maxLength={5000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are we building? Timeline, stack, links — anything helps." className={cn(inputCls, "resize-y")} />
              </label>

              {status === "err" && <p className="rounded-xl border border-red-400/40 bg-red-500/10 p-3.5 text-sm text-red-200" role="alert">⚠ {error}</p>}
              {status === "ok" && (
                <p className="rounded-xl border border-[#d7ff3e]/50 bg-[#d7ff3e]/10 p-3.5 text-sm text-[#eaffb0]" role="status">
                  ✓ Transmission received — saved securely. I&apos;ll reply within 24 working hours. For anything urgent: {profile.phone}
                </p>
              )}

              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#d7ff3e] px-7 py-4 font-display text-sm font-bold tracking-wide text-black transition-all hover:glow-lime disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> TRANSMITTING…</> : <><Send size={16} /> SEND MESSAGE</>}
                </button>
              </Magnetic>
              <p className="font-mono2 text-[10px] tracking-[0.12em] text-[#4b5057] uppercase">Stored securely · never shared · no spam, ever</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
export function Footer() {
  const [top, setTop] = useState(false);
  return (
    <footer className="border-t border-white/10 bg-[#050607]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight">
              Ankit<span className="text-[#d7ff3e]">—</span>Singh<span className="text-[#4b5057]">®</span>
            </p>
            <p className="mt-3 font-mono2 text-[11px] tracking-[0.18em] text-[#6b7280] uppercase">Beyond the interface · Designed & engineered by hand · {new Date().getFullYear()}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]"><Mail size={14} /> Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]">LinkedIn <ArrowUpRight size={13} /></a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onMouseEnter={() => setTop(true)}
              onMouseLeave={() => setTop(false)}
              className="flex items-center gap-2 rounded-full bg-[#f4f1e8] px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] text-black uppercase transition-colors hover:bg-[#d7ff3e]"
              aria-label="Back to top"
            >
              <motion.span animate={{ y: top ? -2 : 0 }}><ArrowUp size={14} /></motion.span> Top
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/8 pt-6 font-mono2 text-[10px] tracking-[0.16em] text-[#4b5057] uppercase sm:flex-row">
          <span>React · Next.js · Node · Express · MongoDB</span>
          <span>Noida, IN — {profile.phone} — All facts per resume</span>
        </div>
      </div>
    </footer>
  );
}
