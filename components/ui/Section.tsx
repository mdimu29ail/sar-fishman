import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, noBorder = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto relative ${!noBorder ? 'border-t border-border-light' : ''} ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};