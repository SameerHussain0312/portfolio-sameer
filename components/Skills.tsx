"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      skills: ["Python", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Technologies",
      icon: <Layout className="text-accent mb-4" size={32} />,
      skills: ["React", "HTML/CSS", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Core Engineering",
      icon: <Cpu className="text-primary mb-4" size={32} />,
      skills: ["Digital Systems", "Communication Systems", "Hardware Integration", "IoT"]
    },
    {
      title: "Other Skills",
      icon: <Database className="text-accent mb-4" size={32} />,
      skills: ["Technical Report Writing", "Probability & Statistics", "Git", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="h-px bg-foreground/20 flex-1 max-w-xs"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-foreground/5 rounded-xl p-6 hover:bg-foreground/10 transition-colors border border-foreground/10"
            >
              {category.icon}
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-foreground/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
