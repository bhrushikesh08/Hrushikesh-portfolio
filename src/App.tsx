import React from 'react';
import { identityData } from '@/data';
import { FadeIn, AnimatedText } from '@/components/motion';
import { Heading, ContactButton, LiveProjectButton } from '@/components/ui';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center p-6 text-center gap-6">
      <Heading title={identityData.heroHeading} subtitle={identityData.roles.join(' • ')} gradient align="center" />
      <FadeIn delay={0.2}>
        <p className="text-zinc-400 max-w-lg text-lg capitalize">
          <AnimatedText text={identityData.heroTagline} />
        </p>
      </FadeIn>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <ContactButton text="Contact Me" href="#contact" />
        <LiveProjectButton href="https://github.com/bhrushikesh08" label="GitHub Profile" variant="repo" />
      </div>
    </div>
  );
};
