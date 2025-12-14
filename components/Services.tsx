import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Commissioned Art",
    description: "Bespoke artistic creations tailored to specific spaces and narratives, transforming environments through visual depth.",
    features: [
      "Large Scale Canvas", 
      "Private Portraiture", 
      "Site-specific Installations"
    ]
  },
  {
    id: "02",
    title: "Art Therapy",
    description: "Therapeutic sessions utilizing visual art to explore emotional landscapes, grounded in MA-level academic training.",
    features: [
      "Individual Sessions", 
      "Group Workshops", 
      "Creative Processing"
    ]
  },
  {
    id: "03",
    title: "Literary Works",
    description: "Poetry and creative writing services for publications, collaborative artist books, and editorial features.",
    features: [
      "Poetry Composition", 
      "Editorial Essays", 
      "Spoken Word Performance"
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-background">
      {/* Header Section - Adjusted spacing and font sizes for mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 md:mb-6 leading-tight">
            Curated Services
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-light max-w-lg">
            Tailored creative solutions bridging the gap between artistic expression and therapeutic growth.
          </p>
        </div>
        <div className="hidden md:block">
           <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Art & Poetry Services</span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-light bg-surface">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-r border-b border-border-light 
              p-6 md:p-12 
              flex flex-col justify-between 
              min-h-[380px] md:min-h-[450px] 
              hover:bg-gray-50 transition-colors duration-500 overflow-hidden"
          >
             
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <span className="text-lg md:text-xl font-mono text-text-muted/40 group-hover:text-accent transition-colors duration-500">
                    {service.id}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-8 md:mb-10 opacity-80">
                  {service.description}
                </p>
             </div>

             <div className="relative z-10 mt-auto">
                <ul className="space-y-3 md:space-y-4 border-t border-border-light pt-6 group-hover:border-accent/20 transition-colors">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="text-text-primary text-xs font-bold uppercase tracking-wider flex items-center">
                      {/* Bullet point: Visible on mobile (opacity-100), hidden on desktop until hover (md:opacity-0) */}
                      <span className="w-1 h-1 rounded-full bg-accent mr-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};