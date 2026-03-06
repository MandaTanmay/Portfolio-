"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Brain, Lock, Globe } from "lucide-react";

const interests = [
  { icon: <Brain size={16} />, label: "Web Development", color: "from-indigo-500 to-purple-500" },
  { icon: <Code2 size={16} />, label: "Data Analyst",    color: "from-blue-500 to-cyan-500" }
];

const stats = [
  { value: "4+",  label: "Projects Built" },
  { value: "2+",  label: "Years Coding" },
  { value: "5+",  label: "Technologies" },
  { value: "2+",   label: "Hackathons" },
];

export default function About() {
  const headRef  = useScrollAnimation("in-view");
  const textRef  = useScrollAnimation("in-view");
  const statsRef = useScrollAnimation("in-view");

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="orb w-[500px] h-[500px] animate-pulse-glow"
        style={{
          right: "-150px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">
            About Me
          </div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Who I Am
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left – text */}
          <div ref={textRef} className="anim-fade-left space-y-5">
            <p
              className="leading-[1.8]"
              style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
            >
              I&apos;m <span className="text-white font-semibold">Tanmay Venkata Sai Lala Gupta Manda</span>, a Computer Science 
              student at SRKR Engineering College pursuing my B.Tech in Computer Science
              and Design (2023–2027). I&apos;m driven by an endless curiosity for how technology
              can address real-world challenges.
            </p>
            <p
              className="leading-[1.8]"
              style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
            >
              My areas of passion span{" "}
              <span className="text-indigo-300 font-medium">Data Analyst</span>,{" "}
              <span className="text-cyan-300 font-medium">full-stack Web Development</span>.
              I love translating complex ideas into meaningful, well-crafted applications.
            </p>
            <p
              className="leading-[1.8]"
              style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
            >
              Beyond academics, I actively participate in hackathons, explore machine learning
              research, and build projects that push my skills forward. I believe great software
              is born at the intersection of curiosity and relentless problem-solving.
            </p>

            {/* Interest chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/[0.08] bg-white/[0.04] text-white/80 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200 cursor-default"
                >
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right – stats grid */}
          <div ref={statsRef} className="anim-fade-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass glass-hover gradient-border rounded-2xl p-6 text-center"
                >
                  <div
                    className="text-gradient font-extrabold mb-1"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
