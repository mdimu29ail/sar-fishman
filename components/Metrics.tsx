import React, { useEffect, useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const stats = [
  { label: "Solo Exhibitions", value: "12" },
  { label: "Group Exhibitions", value: "40+" },
  { label: "Intl Awards", value: "05" },
  { label: "Books Published", value: "04" }
];

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/\d/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { 
        duration: 2.5, 
        ease: [0.22, 1, 0.36, 1] 
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const Metrics: React.FC = () => {
  return (
    <Section noBorder className="py-12 lg:py-16 bg-surface/50">
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border-light">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center border-r border-b border-border-light py-12 px-4 hover:bg-white transition-colors duration-300">
            <span className="text-4xl lg:text-5xl font-serif mb-3 text-text-primary hover:text-accent transition-colors duration-300 cursor-default font-medium">
              <Counter value={stat.value} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};