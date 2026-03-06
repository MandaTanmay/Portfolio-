"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Star, Zap } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: "Web Tech Hackathon — Winner",
    subtitle: "SRKR Engineering College",
    description:
      "Won the Web Tech Hackathon conducted by SDC by designing and developing a creative and functional college website with my team. This experience strengthened my skills in web development, teamwork, and problem solving while building real-world solutions.",
    accent: "from-amber-400 to-orange-500",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    iconBg: "rgba(245,158,11,0.15)",
    iconColor: "#f59e0b",
    badge: "🏆 1st Place",
  },
  {
    icon: <Star size={24} />,
    title: "Smart India Hackathon — Participant",
    subtitle: "Government of India",
    description:
      "Participated in the Internal Smart India Hackathon 2024 at SRKR Engineering College, collaborating with a team to develop innovative solutions for real-world problems. This experience enhanced my ability to think critically, work in teams, and build rapid prototypes.",
    accent: "from-indigo-400 to-purple-500",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
    iconBg: "rgba(99,102,241,0.15)",
    iconColor: "#818cf8",
    badge: "🌟 National Level",
  },
];

function AchievementCard({
  item,
  index,
}: {
  item: (typeof achievements)[0];
  index: number;
}) {
  const ref = useScrollAnimation("in-view", { threshold: 0.12 });
  return (
    <div
      ref={ref}
      className="anim-fade-up"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="glass glass-hover gradient-border rounded-2xl p-6 h-full flex flex-col gap-4 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at top right, ${item.bg}, transparent 60%), var(--bg-card)`,
          borderColor: item.border,
        }}
      >
        {/* Top-right shimmer accent */}
        <div
          className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${item.accent}`}
        />

        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <span
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: item.iconBg, color: item.iconColor }}
          >
            {item.icon}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
              <h3 className="text-white font-bold text-base leading-snug">{item.title}</h3>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                {item.badge}
              </span>
            </div>
            <p className="text-xs font-medium" style={{ color: item.iconColor + "cc" }}>
              {item.subtitle}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const headRef = useScrollAnimation("in-view");

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Blob */}
      <div
        className="orb w-[500px] h-[500px] animate-pulse-glow animation-delay-2000"
        style={{
          right: "-120px",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">Achievements</div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Milestones &amp; Recognition
          </h2>
          <p
            className="mt-3 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Highlights from competitions, events, and hands-on work that mark my growth as a developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
