"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary font-medium tracking-wide mb-4">What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto leading-relaxed">
          I'm currently looking for new opportunities and internships. Whether you have a question, 
          a project proposal, or just want to say hi, my inbox is always open.
        </p>

        <form className="max-w-md mx-auto space-y-4 text-left mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder="Hello..."
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors mt-2"
          >
            Send Message
          </button>
        </form>

        <div className="text-sm text-foreground/50">
          <p>Designed & Built by Sameer Hussain</p>
        </div>
      </motion.div>
    </section>
  );
}
