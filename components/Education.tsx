"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const entries = [
  {
    icon: <GraduationCap size={18} />,
    degree: "B.Tech – Computer Science and Design",
    institute: "SRKR Engineering College",
    period: "2023 – 2027",
    tags: ["Computer Science & Design"],
    accent: "from-indigo-500 to-purple-500",
    glow: "rgba(99,102,241,0.12)",
  },
  {
    icon: <BookOpen size={18} />,
    degree: "Intermediate",
    institute: "Montessori Junior College",
    period: "2021 – 2023",
    tags: ["Mathematics", "Physics", "Chemistry"],
    accent: "from-blue-500 to-cyan-500",
    glow: "rgba(6,182,212,0.1)",
  },
  {
    icon: <Award size={18} />,
    degree: "Secondary Education (SSC)",
    institute: "S C B M High School",
    period: "2021",
    tags: ["SSC Board"],
    accent: "from-violet-500 to-pink-500",
    glow: "rgba(168,85,247,0.1)",
  },
];

function EducationCard({
  entry,
  index,
}: {
  entry: (typeof entries)[0];
  index: number;
}) {
  const ref = useScrollAnimation("in-view", { threshold: 0.15 });
  return (
    <div
      ref={ref}
      className="anim-fade-left relative pl-12"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-5 w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${entry.accent} text-white shadow-lg z-10`}
      >
        {entry.icon}
      </div>

      {/* Card */}
      <div
        className="glass glass-hover gradient-border rounded-2xl p-6 ml-3"
        style={{
          background: `radial-gradient(ellipse at top left, ${entry.glow}, transparent 60%), var(--bg-card)`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-semibold text-base leading-snug">{entry.degree}</h3>
            <p className="text-indigo-300 text-sm font-medium mt-0.5">{entry.institute}</p>
          </div>
          <span
            className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(99,102,241,0.3)",
              background: "rgba(99,102,241,0.08)",
              color: "#818cf8",
            }}
          >
            {entry.period}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {entry.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "var(--text-secondary)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const headRef = useScrollAnimation("in-view");

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Ambient blob */}
      <div
        className="orb w-[450px] h-[450px] animate-pulse-glow animation-delay-2000"
        style={{
          left: "-150px",
          top: "40%",
          background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">Education</div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Academic Journey
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A continuous pursuit of knowledge — from foundational schooling to cutting-edge computer science.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="timeline-connector" />
          {entries.map((entry, i) => (
            <EducationCard key={entry.degree} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
