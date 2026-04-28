"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Education() {
  const currentCourses = [
    "Technical Report Writing",
    "Communication Systems",
    "Digital System Design",
    "Probability and Statistics"
  ];

  const previousCourses = [
    "Digital Logic Design (with hardware projects)",
    "Electronic Devices and Circuits (with hardware projects)"
  ];

  return (
    <section id="education" className="py-24 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
          <div className="h-px bg-foreground/20 flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-foreground/5 border border-foreground/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10"></div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Computer Engineering</h3>
              <p className="text-primary font-medium text-lg mb-4">Currently in 6th Semester</p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Pursuing a comprehensive curriculum that bridges the gap between hardware and software. 
                Developing strong foundations in programming, electronics, and digital systems architecture.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="text-accent" />
              Current Semester Highlights
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {currentCourses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-foreground/5 border border-foreground/10 p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium text-foreground/80">{course}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 pt-4">
              <BookOpen className="text-primary" />
              Key Hardware Subjects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {previousCourses.map((course, idx) => (
                <motion.div
                  key={`prev-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-foreground/5 border border-foreground/10 p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-medium text-foreground/80">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
