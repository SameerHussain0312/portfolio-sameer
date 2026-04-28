import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed w-full flex justify-between items-center px-6 py-4 md:px-12 backdrop-blur-md bg-background/80 z-50 border-b border-foreground/5">
        <div className="text-xl font-bold text-primary tracking-tighter">SH.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#education" className="hover:text-primary transition-colors">Education</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
          Resume
        </a>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
