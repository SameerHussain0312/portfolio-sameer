"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-foreground mb-4"
        >
          Sameer Hussain.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-foreground/60 mb-6"
        >
          I build systems and software.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-foreground/70 max-w-2xl mb-10 leading-relaxed"
        >
          I'm a 6th-semester Computer Engineering student passionate about learning new technologies 
          and building innovative solutions, from software automation tools to hardware integration systems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Check out my work
          </a>
          <div className="flex items-center gap-4 ml-4">
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
