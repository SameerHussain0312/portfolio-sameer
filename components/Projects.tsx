"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Automation Tool System",
      description: "A comprehensive software tool designed to automate repetitive workflows. Built to enhance productivity by streamlining routine tasks, reducing human error, and integrating seamlessly with existing systems.",
      techStack: ["Python", "C++", "Qt", "Scripting"],
      github: "#",
      demo: "#"
    },
    {
      title: "Water Detection System",
      description: "An embedded system project utilizing hardware sensors and software logic to detect water levels and leaks. Provides real-time alerts and monitoring capabilities for safety and resource management.",
      techStack: ["C++", "Java", "Microcontrollers", "IoT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hardware Logic & Electronics Design",
      description: "Hands-on hardware projects built during the study of Digital Logic Design and Electronic Devices & Circuits. Involved designing physical circuits, logic gates implementation, and testing electronic components.",
      techStack: ["Digital Logic", "Circuit Design", "Hardware", "Electronics"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="h-px bg-foreground/20 flex-1 max-w-xs"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative grid md:grid-cols-12 gap-4 items-center"
            >
              <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:col-start-1 text-left' : 'md:col-start-6 text-right'} z-10`}>
                <p className="text-primary font-medium mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-6">{project.title}</h3>
                <div className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 p-6 rounded-xl shadow-xl mb-6 text-foreground/80">
                  <p>{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-4 text-sm font-medium text-foreground/60 mb-6 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <a href={project.github} className="text-foreground/70 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-foreground/70 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className={`hidden md:block md:col-span-6 absolute top-0 bottom-0 ${idx % 2 === 0 ? 'right-0' : 'left-0'} opacity-30 md:opacity-100`}>
                <div className="w-full h-full min-h-[300px] bg-foreground/10 rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center text-foreground/40 font-medium border border-foreground/10 rounded-xl">
                    Project Image
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
