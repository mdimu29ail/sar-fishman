import React from 'react';
import { Section } from './ui/Section';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { title: "psychedelic self photography", count: "80+ Works", image: "https://static.wixstatic.com/media/566eec_5ffbd930f85b45ffb594caccb38d57d8~mv2_d_5312_2988_s_4_2.jpg/v1/fill/w_1044,h_587,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/566eec_5ffbd930f85b45ffb594caccb38d57d8~mv2_d_5312_2988_s_4_2.jpg" },
  { title: "Abstract Painting", count: "5 Collections", image: "https://static.wixstatic.com/media/566eec_0ef5a8aeee214c35bba7424f3400649a~mv2.jpg/v1/fill/w_491,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/566eec_0ef5a8aeee214c35bba7424f3400649a~mv2.jpg" },
  { title: "Water Contamination", count: "12 Projects", image: "https://static.wixstatic.com/media/566eec_7e18d621208e41b5bcd9e612864457b7~mv2_d_3906_3074_s_4_2.jpg/v1/fill/w_747,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/566eec_7e18d621208e41b5bcd9e612864457b7~mv2_d_3906_3074_s_4_2.jpg" },
  { title: "Jerusalem of Gold", count: "12 Projects", image: "https://static.wixstatic.com/media/566eec_d1f2c71508d84e2db66b6c4dde903998~mv2.jpg/v1/fill/w_464,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/566eec_d1f2c71508d84e2db66b6c4dde903998~mv2.jpg" },
  { title: "Violence against women # 9", count: "12 Projects", image: "https://static.wixstatic.com/media/566eec_401be870f1b145cbb8261edafcf02541~mv2.jpg/v1/fill/w_411,h_588,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/566eec_401be870f1b145cbb8261edafcf02541~mv2.jpg" },
  { title: "Classic Graffiti", count: "12 Projects", image: "https://static.wixstatic.com/media/566eec_56ace8c625854e91be61faa7419bbbd9~mv2_d_1851_1348_s_2.jpg/v1/fill/w_806,h_587,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/566eec_56ace8c625854e91be61faa7419bbbd9~mv2_d_1851_1348_s_2.jpg" }
];

export const Disciplines: React.FC = () => {
  return (
    <Section id="disciplines" className="bg-surface">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
        <a href="#gallery" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
          View All <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-light">
        {categories.map((cat, idx) => (
          <motion.a 
            href="#gallery"
            key={idx}
            className="group block relative  overflow-hidden cursor-pointer border-r border-b border-border-light"
            whileHover="hover"
          >
            <motion.div 
                className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" 
            />
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-xs uppercase tracking-widest mb-3 opacity-90 border-l-2 border-accent pl-3">{cat.count}</span>
                <h3 className="text-3xl font-serif italic">{cat.title}</h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};