import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ["All", "Painting", "Poetry", "Sketch"];

const works = [
  {
    "id": 1,
    "title": "Fading Memories",
    "category": "Painting",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 2,
    "title": "The Unspoken Word",
    "category": "Poetry",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2573&auto=format&fit=crop"
  },
  {
    "id": 3,
    "title": "Study in Blue",
    "category": "Sketch",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 4,
    "title": "Urban Solitude",
    "category": "Painting",
    "year": "2022",
    "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 5,
    "title": "Morning Pages",
    "category": "Poetry",
    "year": "2022",
    "url": "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 6,
    "title": "Charcoal Series I",
    "category": "Sketch",
    "year": "2024",
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop"
  },

  {
    "id": 7,
    "title": "Neon Nights",
    "category": "Photography",
    "year": "2024",
    "url": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 8,
    "title": "Golden Hour Serenity",
    "category": "Painting",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2675&auto=format&fit=crop"
  },
  {
    "id": 9,
    "title": "Abstract Thoughts",
    "category": "Digital Art",
    "year": "2024",
    "url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    "id": 10,
    "title": "The Marble Gaze",
    "category": "Sculpture",
    "year": "2022",
    "url": "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 11,
    "title": "Botanical Whimsy",
    "category": "Sketch",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2600&auto=format&fit=crop"
  },
  {
    "id": 12,
    "title": "Oceanic Depth",
    "category": "Painting",
    "year": "2022",
    "url": "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2628&auto=format&fit=crop"
  },
  {
    "id": 13,
    "title": "Concrete Jungle",
    "category": "Photography",
    "year": "2024",
    "url": "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    "id": 14,
    "title": "Crimson Horizon",
    "category": "Digital Art",
    "year": "2023",
    "url": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop"
  }
]

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof works[0] | null>(null);

  const filteredWorks = filter === "All" 
    ? works 
    : works.filter(work => work.category === filter);

  return (
    <Section id="gallery">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        <h2 className="text-4xl md:text-5xl font-serif">Selected Artworks</h2>
        
        <div className="flex flex-wrap gap-8 mt-6 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-medium uppercase tracking-widest pb-2 transition-all ${
                filter === cat 
                  ? "text-text-primary border-b-2 border-accent" 
                  : "text-text-muted border-b-2 border-transparent hover:text-text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedImage(work)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="overflow-hidden bg-gray-100 aspect-[4/5] relative">
                <img 
                  src={work.url} 
                  alt={work.title} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn size={24} className="text-text-primary" />
                    </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-baseline px-1">
                <div>
                  <h3 className="font-serif text-lg group-hover:text-accent transition-colors duration-300">{work.title}</h3>
                  <p className="text-xs text-text-muted uppercase tracking-wide mt-1">{work.category}</p>
                </div>
                <span className="text-xs font-mono text-text-muted">{work.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-text-primary text-white rounded-full hover:bg-accent transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full max-h-full flex flex-col items-center justify-center h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-h-[75vh] w-auto shadow-2xl mb-8 object-contain"
              />
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-serif mb-2">{selectedImage.title}</h3>
                <p className="text-text-muted uppercase tracking-widest text-sm">{selectedImage.category} — {selectedImage.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};