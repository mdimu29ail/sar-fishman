import React from 'react';
import { Section } from './ui/Section';

const memberships = [
  "Member of 'SHIRA' Poetry Society",
  "International Association of Art (IAA/AIAP)",
  "Plastic Artists Union of Israel",
  "Painters & Sculptors Association",
  "WAG International"
];

const education = [
  "Ph.D. – Bar-Ilan University",
  "MA in Art Therapy – Haifa University",
  "Curatorship – Shorashim Art School"
];

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            About the<br/>Artist
          </h2>
          <div className="h-[2px] w-16 bg-accent mb-6"></div>
          <p className="text-sm text-text-muted font-mono uppercase">Based in Tel-Aviv, Israel</p>
        </div>
        
        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl font-light text-text-secondary leading-relaxed mb-10">
            A multidisciplinary artist weaving the gap between the visual and the verbal. 
            With a Ph.D. from Bar-Ilan University and an MA in Art Therapy, my work explores the therapeutic potential of abstraction and the narrative power of color.
            My practice spans oil painting, digital photography, and poetry, seeking to capture the "inner self portrait" that resides within us all.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-text-muted">Education</h3>
              <ul className="space-y-2">
                {education.map((item, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-text-muted">Affiliations</h3>
              <ul className="space-y-2">
                {memberships.map((item, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-center">
                     <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};