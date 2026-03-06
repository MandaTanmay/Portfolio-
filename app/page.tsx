import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Education    from "@/components/Education";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
