import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  { id: 1, title: "OVERDOSE", date: "Book Release", category: "Publication", image: "https://static.wixstatic.com/media/566eec_0b03d1f13f0b4441862f97c71fe0806b~mv2.jpg/v1/fill/w_1169,h_1559,fp_0.50_0.50,q_90,enc_avif,quality_auto/566eec_0b03d1f13f0b4441862f97c71fe0806b~mv2.jpg" },
  { id: 2, title: "Inner Self Portrait", date: "Poetry & Art", category: "Book", image: "https://static.wixstatic.com/media/566eec_8fce4a0f6aa540c18194d1f4cc994a39~mv2.jpg/v1/fill/w_1167,h_1556,fp_0.50_0.50,q_90,enc_avif,quality_auto/566eec_8fce4a0f6aa540c18194d1f4cc994a39~mv2.jpg" },
  { id: 3, title: "Art International Contemporary", date: "Jan 2018", category: "Magazine", image: "https://static.wixstatic.com/media/566eec_a6d1eaf429ce4de5a789916eba102ade~mv2.jpg/v1/fill/w_1206,h_1608,fp_0.50_0.50,q_90,enc_avif,quality_auto/566eec_a6d1eaf429ce4de5a789916eba102ade~mv2.jpg" },
];

export const Insights: React.FC = () => {
  return (
    <Section id="articles">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif">04 Articles</h2>
        <a href="#" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-accent">
          View All <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-light">
        {posts.map((post) => (
          <a key={post.id} href="#" className="group block border-r border-b border-border-light bg-surface hover:bg-gray-50 transition-colors">
            <div className="overflow-hidden  border-b border-border-light">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">{post.category}</span>
                    <span className="text-xs font-mono text-text-muted">{post.date}</span>
                </div>
                <h3 className="text-xl font-serif leading-snug group-hover:text-accent transition-colors">
                {post.title}
                </h3>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};