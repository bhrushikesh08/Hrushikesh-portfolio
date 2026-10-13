import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
      </main>
    </div>
  );
};
