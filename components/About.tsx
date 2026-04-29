"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-px bg-foreground/20 flex-1 max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6 text-lg text-foreground/70 leading-relaxed">
            <p>
              Hello! My name is Sameer Hussain and I enjoy creating things that live on the internet and in the physical world. 
              My journey into engineering started when I realized the endless possibilities of combining hardware and software.
            </p>
            <p>
              Fast-forward to today, and I'm currently in my 6th semester studying Computer Engineering. 
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I have hands-on experience developing diverse projects ranging from an Automation Tool System that streamlines workflows, 
              to a Water Detection System integrating sensors with modern software.
            </p>
          </div>
          
          <div className="md:col-span-2 relative group max-w-[250px] mx-auto md:mx-0">
            <div className="relative w-[250px] h-[350px] mx-auto">
   <Image
  src="/profile.jpg"
  alt="Sameer Hussain"
  fill
  className="object-cover rounded-lg"
/>
              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
