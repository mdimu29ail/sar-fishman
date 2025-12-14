import React, { useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xBanner = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div id="home" ref={containerRef} className="relative min-h-screen pt-24 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-1/2 z-10 pt-10 lg:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="h-[1px] w-8 bg-accent"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">Contemporary Artist & Poet</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-serif font-medium mb-8 text-text-primary">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mr-4 lg:mr-6"
            >
              Sari 
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45, duration: 0.6 }}
              className="inline-block italic text-text-secondary"
            >
              Fishman
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light text-text-secondary mb-6 max-w-lg leading-relaxed border-l-2 border-accent pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           Artist and Poet Exploring Meaning Through Visual Form and Written Language
          </motion.p>
          
          <motion.p 
            className="text-sm md:text-base text-text-muted mb-10 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
           I am an artist and poet working across visual art and language. My practice explores the space between image and text, where ideas, emotions, and lived experience take form through careful composition and poetic structure.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a 
              href="#gallery" 
              className="px-8 py-3 bg-text-primary text-white font-medium hover:bg-accent transition-colors duration-300 flex items-center gap-2 rounded-sm group"
            >
              View Works <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-border-light text-text-primary font-medium hover:border-text-primary transition-colors duration-300 rounded-sm"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content / Portrait */}
        <motion.div 
          className="w-full lg:w-1/2 h-[50vh] lg:h-[85vh] relative mt-12 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y, opacity }}
        >
          {/* Full Portrait Shape - Rectangular Full Image */}
          <div className="relative w-full h-full">
             {/* Back Layer (Accent Shadow) */}
             <motion.div 
                className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
             />

            {/* Horizontal Banner Image */}
            <motion.div 
              className="absolute top-[60%] -left-8 lg:-left-24 w-48 h-28 lg:w-80 lg:h-48 z-20 hidden md:block overflow-hidden border-4 border-surface shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{ x: xBanner }}
            >
               <img 
                src="https://static.wixstatic.com/media/566eec_ae8266ac81ba4c56b17dc2f56250a4c3~mv2.jpg/v1/fill/w_434,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/566eec_ae8266ac81ba4c56b17dc2f56250a4c3~mv2.jpg" 
                alt="Artist Studio" 
                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

             {/* Main Image Container - Full Rectangular */}
             <motion.div
               className="relative w-full h-full overflow-hidden z-10 bg-gray-200"
               initial={{ clipPath: "inset(10% 10% 10% 10%)" }}
               animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
             >
                <motion.img 
                  src="./DMeir-943.jpg" 
                  alt="Artist Portrait" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ scale }}
                  initial={{ scale: 1.2, filter: "grayscale(100%) blur(10px)" }}
                  animate={{ scale: 1, filter: "grayscale(100%) blur(0px)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
             </motion.div>
             
            {/* Secondary Image (Top Right) */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-40 lg:w-48 lg:h-60 z-20 border-4 border-surface shadow-2xl hidden md:block overflow-hidden"
              initial={{ opacity: 0, y: 40, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ delay: 1.5, duration: 1, ease: "backOut" }}
              style={{ y: y2 }}
            >
               <img 
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop" 
                alt="Handwritten Poetry" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>
            
            {/* Floating Chips */}
            <motion.div 
              className="absolute top-[35%] -left-4 bg-surface shadow-xl px-5 py-3 border border-border-light flex items-center gap-3 z-30"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-xs font-semibold uppercase tracking-wider">Poetry</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] -right-4 bg-surface shadow-xl px-5 py-3 border border-border-light flex items-center gap-3 z-30"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-xs font-semibold uppercase tracking-wider">Painting</span>
            </motion.div>
            
             <motion.div 
              className="absolute bottom-[5%] left-[8%] bg-surface/90 backdrop-blur-md shadow-2xl p-6 border border-border-light max-w-[260px] z-30 hidden md:block"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <p className="font-serif italic text-sm text-text-secondary leading-relaxed">"Art is the only way to run away without leaving home."</p>
              <p className="text-xs text-text-muted mt-2 uppercase tracking-wider">— Twyla Tharp</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};