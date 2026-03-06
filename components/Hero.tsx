"use client";

import { ArrowDown, Download, Mail, Github } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0" style={{ background: "var(--bg-primary)" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />

        {/* Gradient fade from bottom so sections blend in */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--bg-primary))",
          }}
        />
      </div>

      {/* ── Floating gradient blobs ── */}
      <div
        className="orb animate-blob w-[700px] h-[700px]"
        style={{
          top: "-180px",
          left: "-200px",
          background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb animate-blob animation-delay-2000 w-[600px] h-[600px]"
        style={{
          top: "-100px",
          right: "-180px",
          background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb animate-blob animation-delay-4000 w-[500px] h-[500px]"
        style={{
          bottom: "100px",
          left: "30%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      {/* ── Main content ── */}
      <div
        className="hero-content relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-24"
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1
          className="font-bold tracking-tight leading-none mb-0 whitespace-nowrap"
          style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 1.05 }}
        >
          <span className="text-white">Tanmay </span>
          <span className="text-gradient">Manda</span>
        </h1>

        {/* Title */}
        <p
          className="mt-6 font-medium tracking-wide"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            color: "rgba(168,85,247,0.85)",
          }}
        >
          Computer Science Student &nbsp;·&nbsp; Data Analyst &nbsp;·&nbsp; Web Developer
        </p>

        {/* Tagline */}
        <p
          className="mt-4 leading-relaxed max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(0.9rem, 1.6vw, 1.0625rem)",
            color: "var(--text-secondary)",
          }}
        >
          Passionate about building intelligent systems and solving real-world problems
          using AI and modern web technologies.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
          </a>
          <a href="#contact" className="btn-glass">
            <Mail size={15} />
            Contact Me
          </a>
          <a href="/resume.pdf" download className="btn-glass">
            <Download size={15} />
            Download Resume
          </a>
        </div>

        {/* Social quick-links */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://github.com/MandaTanmay"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] text-white/40 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:mandatanmay27@gmail.com"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] text-white/40 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-float">
        <span
          className="text-[10px] font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--text-tertiary)" }}
        >
          Scroll
        </span>
        <ArrowDown size={14} style={{ color: "var(--text-tertiary)" }} />
      </div>
    </section>
  );
}
