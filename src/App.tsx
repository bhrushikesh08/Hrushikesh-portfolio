import React from 'react';
import { identityData } from '@/data';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="hero-heading text-5xl md:text-8xl mb-4">
        {identityData.heroHeading}
      </h1>
      <p className="text-zinc-400 max-w-lg text-lg capitalize">
        {identityData.heroTagline}
      </p>
    </div>
  );
};
