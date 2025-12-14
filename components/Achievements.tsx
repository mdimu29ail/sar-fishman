import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const history = [
  { 
    year: "2024", 
    title: "Artists at the Jubilee", 
    category: "Intl Prize", 
    details: "Award Recipient",
    // Art exhibition / Gallery atmosphere
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2018", 
    title: "Venice Biennale", 
    category: "Exhibition", 
    details: "Biennale of the Nations",
    // Venice Canal / Architecture
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2018", 
    title: "Globalart Competition", 
    category: "Award", 
    details: "Second Place – Narcissist Abstractionism",
    // Abstract Art Texture
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Leonardo da Vinci", 
    category: "Intl Prize", 
    details: "Second International Prize",
    // Classical / Renaissance style art vibe
    imageUrl: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Andrea Mantegna", 
    category: "Intl Prize", 
    details: "International Art Prize",
    // Classic Museum / Frame detail
    imageUrl: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Milan International Artist Award", 
    category: "Award", 
    details: "International Recognition",
    // Milan Cathedral (Duomo di Milano)
    imageUrl: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Women 2017 – ArtisTTable", 
    category: "Award", 
    details: "Bronze Frame Award",
    // Female Artist / Contemporary Art
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Mantova Biennial", 
    category: "Biennial", 
    details: "Diocesan Museum",
    // Mantova Architecture / Old Italian Building
    imageUrl: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1600&auto=format&fit=crop"
  }
];

export const Achievements: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth movement
  const x = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Adjust offsets (x: 20, y: 20) directly here if needed, or in the motion div style
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <Section className="bg-surface relative z-30" noBorder>
       
       {/* Floating Image Container */}
       <motion.div
        style={{ x, y, left: 0, top: 0 }}
        className="fixed pointer-events-none z-50 hidden md:block overflow-hidden rounded-sm shadow-2xl border-2 border-white bg-gray-200"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.5,
          width: 300,  // Fixed width to prevent layout shifts
          height: 200, // Fixed height
          x: 20, // Offset from cursor
          y: 20 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* 
           SOLUTION: Render ALL images but hide them with opacity. 
           This ensures images are pre-loaded and swap instantly.
        */}
        {history.map((item, index) => (
          <img 
            key={index}
            src={item.imageUrl} 
            alt={item.title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-0"
            style={{ 
              opacity: hoveredIndex === index ? 1 : 0,
              zIndex: hoveredIndex === index ? 10 : 1
            }}
          />
        ))}
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Selected History</h2>
            <div className="h-[2px] w-12 bg-accent mb-6"></div>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              International recognition including the Leonardo da Vinci Prize, Venice Biennale participation, and solo exhibitions across Tel-Aviv and Europe.
            </p>
        </div>
        
        {/* Table List */}
        <div className="lg:w-2/3 border-t border-l border-border-light" onMouseMove={handleMouseMove}>
            <div className="hidden md:grid grid-cols-12 bg-gray-50 text-xs font-bold uppercase tracking-widest text-text-muted border-r border-b border-border-light">
                <div className="col-span-2 p-4 border-r border-border-light">Year</div>
                <div className="col-span-5 p-4 border-r border-border-light">Title</div>
                <div className="col-span-3 p-4 border-r border-border-light">Category</div>
                <div className="col-span-2 p-4">Location</div>
            </div>

            {history.map((item, index) => (
            <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 border-r border-b border-border-light hover:bg-gray-50 transition-colors cursor-default group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className="col-span-2 p-4 md:border-r border-border-light font-mono text-sm text-text-muted flex items-center">
                  <span className="md:hidden w-24 font-bold">Year:</span>
                  {item.year}
                </div>
                <div className="col-span-5 p-4 md:border-r border-border-light flex items-center">
                  <h3 className="text-lg font-serif text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-3 p-4 md:border-r border-border-light flex items-center">
                  <span className="md:hidden w-24 font-bold text-xs uppercase text-text-muted mr-2">Cat:</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">{item.category}</span>
                </div>
                <div className="col-span-2 p-4 text-sm text-text-muted italic flex items-center">
                  {item.details}
                </div>
            </div>
            ))}
        </div>
      </div>
    </Section>
  );
};