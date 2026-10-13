import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
