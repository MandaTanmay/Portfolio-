"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, ExternalLink, Cpu, ParkingCircle, Users, BarChart2 } from "lucide-react";

const projects = [
  {
    icon: <Cpu size={22} />,
    title: "Delivery Time Prediction",
    description:
      "Developed a machine learning system that predicts delivery time based on multiple real-world factors such as distance, traffic conditions, weather, order priority, delivery method, and transport mode.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib","Streamlit"],
    github: "https://github.com/Bhanubandaru05/Delivery_Time_Prediction",
    accent: "from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    icon: <ParkingCircle size={22} />,
    title: "Parking Slot Booking System",
    description:
      "The Parking Slot Booking System is a web-based application that allows users to easily view and reserve available parking slots. The system also provides an admin panel where administrators can manage and add parking slots dynamically.",
    tech: ["React", "Tailwind CSS", "PostgreSQL", "Node.js", "Express.js"],
    github: "https://github.com/MandaTanmay/Car-Parking-Slot-Booking-System",
    demo: null,
    accent: "from-green-500 to-emerald-600",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: <Users size={22} />,
    title: "CollabGrow – Student Collaboration Platform",
    description:
      "CollabGrow is a student collaboration platform that helps developers, designers, and innovators find projects and teammates. It solves the problem of discovering meaningful opportunities and reliable collaborators by providing a centralized platform for students to connect, collaborate, and build impactful projects together.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS","WebSocket", "JWT Authentication"],
    github: "https://github.com/MandaTanmay/CollabGrow",
    demo: null,
    accent: "from-blue-500 to-cyan-600",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "E-commerce Sales Analysis",
    description:
      "This project focuses on SQL-based data analysis of an e-commerce sales dataset to extract meaningful business insights. The goal was to clean raw sales data, build a structured database, and perform analytical queries to understand sales trends, customer behavior, and country-wise performance.",
    tech: ["MySQL"],
    github: "https://github.com/MandaTanmay/E-Commerce-Sales-Data-Analysis",
    demo: null,
    accent: "from-violet-500 to-pink-600",
    glow: "rgba(168,85,247,0.15)",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useScrollAnimation("in-view", { threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="anim-fade-up h-full"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className="project-card h-full flex flex-col"
        style={{
          background: `radial-gradient(ellipse at top, ${project.glow}, transparent 55%), rgba(10,10,28,0.85)`,
        }}
      >
        {/* Top accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

        <div className="p-6 flex flex-col flex-1 gap-4">
          {/* Icon + title */}
          <div className="flex items-start gap-3">
            <span
              className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.accent} text-white shadow-lg shrink-0`}
            >
              {project.icon}
            </span>
            <h3 className="text-white font-bold text-base leading-snug mt-1">{project.title}</h3>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-secondary)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2.5 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border border-white/[0.08] text-white/60 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <Github size={13} />
              GitHub
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r ${project.accent} text-white hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            ) : (
              <span
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium border border-white/[0.05] cursor-not-allowed"
                style={{ color: "var(--text-tertiary)" }}
              >
                <ExternalLink size={13} />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useScrollAnimation("in-view");

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div
        className="orb w-[550px] h-[550px] animate-blob"
        style={{
          left: "-150px",
          top: "10%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[400px] h-[400px] animate-blob animation-delay-4000"
        style={{
          right: "-100px",
          bottom: "10%",
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headRef} className="anim-fade-up text-center mb-16">
          <div className="section-badge">Projects</div>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A selection of projects that showcase my skills across AI, full-stack web development, and systems design.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
