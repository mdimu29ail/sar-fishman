import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-0" noBorder>
      <div className="bg-text-primary text-white p-8 md:p-20 lg:p-24 relative overflow-hidden rounded-2xl"> 
        {/* Abstract Background Element */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[0.9]">Let's create<br/>something timeless.</h2>
            <p className="text-text-muted text-lg mb-12 max-w-md font-light">
              Available for commissions, collaborations, and speaking engagements.
            </p>
            
            <div className="space-y-4 font-mono text-sm text-text-muted">
              <div className="border-t border-white/10 pt-4">
                 <p className="text-xs uppercase tracking-widest mb-1 text-white">Base</p>
                 <p>BERLIN / ART STUDIO</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                 <p className="text-xs uppercase tracking-widest mb-1 text-white">Email</p>
                 <p className="text-white hover:text-accent cursor-pointer transition-colors">STUDIO@JULIANVOSS.ART</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                 <p className="text-xs uppercase tracking-widest mb-2 text-white">Socials</p>
                 <div className="flex gap-6">
                    <a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-accent transition-colors">TWITTER</a>
                    <a href="#" className="hover:text-accent transition-colors">LINKEDIN</a>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            // 1. Added 'relative' and increased 'pb-24' so content doesn't overlap the absolute button
            className="space-y-6 bg-white/5 p-8 pb-24 border border-white/10 backdrop-blur-md shadow-2xl relative" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text-muted">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text-muted">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-text-muted">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-accent text-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* 2. Changed to absolute positioning at bottom-4 */}
            <button className="absolute bottom-8 left-8 right-8 bg-white text-text-primary font-bold py-4 hover:bg-accent hover:text-white transition-colors duration-300 uppercase tracking-widest">
              Send Message
            </button>
          </motion.form>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
          <p>&copy; 2024 Julian Voss. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </Section>
  );
};