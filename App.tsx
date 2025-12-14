import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Disciplines } from './components/Disciplines';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Gallery } from './components/Gallery';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent selection:text-white font-sans">
      <Navigation />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Disciplines />
        <Services />
        <Achievements />
        <Gallery />
        <Insights />
        <Contact />
      </main>
    </div>
  );
};

export default App;