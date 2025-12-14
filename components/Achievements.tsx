import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const history = [
  { 
    year: "2024", 
    title: "Artists at the Jubilee", 
    category: "Intl Prize", 
    details: "Award Recipient",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2018", 
    title: "Venice Biennale", 
    category: "Exhibition", 
    details: "Biennale of the Nations",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2018", 
    title: "Globalart Competition", 
    category: "Award", 
    details: "Second Place – Narcissist Abstractionism",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Leonardo da Vinci", 
    category: "Intl Prize", 
    details: "Second International Prize",
    imageUrl: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Andrea Mantegna", 
    category: "Intl Prize", 
    details: "International Art Prize",
    imageUrl: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Milan International Artist Award", 
    category: "Award", 
    details: "International Recognition",
    imageUrl: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Women 2017 – ArtisTTable", 
    category: "Award", 
    details: "Bronze Frame Award",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop"
  },
  { 
    year: "2017", 
    title: "Mantova Biennial", 
    category: "Biennial", 
    details: "Diocesan Museum",
    imageUrl: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1600&auto=format&fit=crop"
  }
];

export const Achievements: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <Section className="bg-surface relative z-30" noBorder>
       
       {/* Floating Image Container (Desktop Only) */}
       <motion.div
        style={{ x, y, left: 0, top: 0 }}
        className="fixed pointer-events-none z-50 hidden md:block overflow-hidden rounded-sm shadow-2xl border-2 border-white bg-gray-200"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.5,
          width: 300,  
          height: 200, 
          x: 20, 
          y: 20 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
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
        
        {/* Responsive List Container */}
        <div className="lg:w-2/3 md:border-t md:border-l border-border-light w-full" onMouseMove={handleMouseMove}>
            
            {/* Table Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-12 bg-gray-50 text-xs font-bold uppercase tracking-widest text-text-muted border-r border-b border-border-light">
                <div className="col-span-2 p-4 border-r border-border-light">Year</div>
                <div className="col-span-5 p-4 border-r border-border-light">Title</div>
                <div className="col-span-3 p-4 border-r border-border-light">Category</div>
                <div className="col-span-2 p-4">Location</div>
            </div>

            {/* List Items */}
            {history.map((item, index) => (
            <div 
                key={index} 
                className="
                  /* Base Styles */
                  group relative cursor-default transition-colors
                  
                  /* Desktop Styles (Grid) */
                  md:grid md:grid-cols-12 md:border-r md:border-b border-border-light md:hover:bg-gray-50
                  
                  /* Mobile Styles (Card) */
                  flex flex-col border border-border-light mb-6 p-6 rounded-lg shadow-sm hover:shadow-md md:mb-0 md:p-0 md:rounded-none md:shadow-none bg-white md:bg-transparent
                "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Year */}
                <div className="md:col-span-2 md:p-4 md:border-r border-border-light font-mono text-sm text-text-muted flex items-center mb-2 md:mb-0">
                  <span className="md:hidden text-xs font-bold uppercase tracking-wider text-accent mr-2">Year:</span>
                  {item.year}
                </div>

                {/* Title */}
                <div className="md:col-span-5 md:p-4 md:border-r border-border-light flex items-center mb-2 md:mb-0">
                  <h3 className="text-xl md:text-lg font-serif text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Category */}
                <div className="md:col-span-3 md:p-4 md:border-r border-border-light flex items-center mb-2 md:mb-0">
                  <span className="md:hidden text-xs font-bold uppercase text-text-muted mr-2">Category:</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary bg-gray-100 md:bg-transparent px-2 py-1 md:p-0 rounded md:rounded-none">
                    {item.category}
                  </span>
                </div>

                {/* Location/Details */}
                <div className="md:col-span-2 md:p-4 text-sm text-text-muted italic flex items-center border-t md:border-t-0 border-border-light pt-2 mt-2 md:pt-0 md:mt-0">
                  {item.details}
                </div>
            </div>
            ))}
        </div>
      </div>
    </Section>
  );
};