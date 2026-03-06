"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Education",    href: "#education" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

const socials = [
  { icon: <Github size={17} />,   href: "https://github.com/MandaTanmay",   label: "GitHub" },
  { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/tanmay-manda", label: "LinkedIn" },
  { icon: <Mail size={17} />,     href: "mandatanmay27@gmail.com", label: "Email" },
];


export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10 overflow-hidden border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Subtle fade */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.35), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_16px_rgba(99,102,241,0.35)]">
                TM
              </span>
              <span className="text-white font-semibold text-sm tracking-wide">Tanmay Manda</span>
            </a>
            <p className="text-xs max-w-xs text-center md:text-left leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
              CS Student ·Data Analyst· Web Developer.
              Building intelligent solutions, one commit at a time.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium hover:text-white transition-colors duration-200"
                style={{ color: "var(--text-tertiary)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "rgba(255,255,255,0.05)" }} />

      </div>
    </footer>
  );
}
