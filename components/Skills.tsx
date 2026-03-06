"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Monitor, Database, Wrench, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: <Code2 size={17} />,
    accent: "from-indigo-500 to-violet-500",
    glow: "rgba(99,102,241,0.15)",
    dot: "#6366f1",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Web Development",
    icon: <Monitor size={17} />,
    accent: "from-blue-500 to-cyan-500",
    glow: "rgba(6,182,212,0.12)",
    dot: "#06b6d4",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: <Database size={17} />,
    accent: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.12)",
    dot: "#10b981",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={17} />,
    accent: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.12)",
    dot: "#f59e0b",
    skills: ["Git", "GitHub", "VS Code","PowerBI","Postman"],
  },

  {
    title: "Python Libraries",
    icon: <Code2 size={17} />,
    accent: "from-yellow-500 to-amber-500",
    glow: "rgba(234,179,8,0.12)",
    dot: "#eab308",
    skills: ["NumPy", "Pandas"],
  },
  {
    title: "Concepts",
    icon: <Lightbulb size={17} />,
    accent: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.12)",
    dot: "#f43f5e",
    skills: ["Data Structures", "Machine Learning Basics"],
  },
];

function CategoryCard({ cat, index }: { cat: (typeof categories)[0]; index: number }) {
  const ref = useScrollAnimation("in-view", { threshold: 0.15 });
  return (
    <div
      ref={ref}
      className="anim-scale"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="glass glass-hover gradient-border rounded-2xl p-6 h-full flex flex-col gap-4"
        style={{
          background: `radial-gradient(ellipse at top left, ${cat.glow}, transparent 60%), var(--bg-card)`,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <span
            className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.accent} text-white shadow-lg shrink-0`}
          >
            {cat.icon}
          </span>
          <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill) => (
            <span
              key={skill}
              className="skill-pill"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: cat.dot }}
              />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useScrollAnimation("in-view");

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div
        className="orb w-[600px] h-[600px] animate-blob animation-delay-2000"
        style={{
          right: "-200px",
          bottom: "0",
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[400px] h-[400px] animate-blob animation-delay-4000"
        style={{
          left: "-100px",
          top: "20%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">Skills</div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Tech Stack
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A constantly growing toolkit — from systems programming to intelligent web applications.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
