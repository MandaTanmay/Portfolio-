"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

// ─────────────────────────────────────────────────────────────────────
// Web3Forms  →  set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local
// ─────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const socials = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "mandatanmay27@gmail.com",
    href: "mailto:mandatanmay27@gmail.com",
    accent: "from-indigo-500 to-purple-600",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/MandaTanmay",
    href: "https://github.com/MandaTanmay",
    accent: "from-neutral-400 to-neutral-200",
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/tanmaymanda",
    href: "https://linkedin.com/in/tanmaymanda",
    accent: "from-blue-500 to-cyan-500",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const headRef  = useScrollAnimation("in-view");
  const formRef  = useScrollAnimation("in-view");
  const leftRef  = useScrollAnimation("in-view");

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div
        className="orb w-[600px] h-[600px] animate-blob animation-delay-2000"
        style={{
          left: "-200px",
          bottom: "0",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[400px] h-[400px] animate-blob animation-delay-4000"
        style={{
          right: "-120px",
          top: "0",
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">Contact</div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="mt-3 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project, an opportunity, or just want to say hi?
            I&apos;m always open to meaningful conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left – contact info */}
          <div ref={leftRef} className="anim-fade-left flex flex-col gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass glass-hover gradient-border rounded-2xl p-5 flex items-center gap-4 group"
                style={{ borderColor: s.border }}
              >
                <span
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.accent} text-white shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  {s.icon}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--text-tertiary)" }}>
                    {s.label}
                  </div>
                  <div className="text-sm text-white/80 group-hover:text-white transition-colors">{s.value}</div>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 mt-2 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-white text-sm font-semibold">Available for Opportunities</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    Open to internships, collaborations, and freelance projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div ref={formRef} className="anim-fade-right">
            <form
              onSubmit={handleSubmit}
              className="glass gradient-border rounded-2xl p-7 flex flex-col gap-4"
            >
              <h3 className="text-white font-semibold text-base mb-1">Send a Message</h3>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-tertiary)" }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-tertiary)" }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-tertiary)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-3">
                  <CheckCircle size={15} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-rose-400 bg-rose-500/10 border border-rose-500/25 rounded-xl px-4 py-3">
                  <AlertCircle size={15} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={15} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
