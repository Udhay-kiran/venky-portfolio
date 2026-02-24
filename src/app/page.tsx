import AboutSection from "../components/sections/AboutSection";
import ScrollRevealInit from "../components/ScrollRevealInit";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100">
      <ScrollRevealInit />
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Hero />
        <AboutSection />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
