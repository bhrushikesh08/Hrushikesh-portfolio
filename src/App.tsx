import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};
