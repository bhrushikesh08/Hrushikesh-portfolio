import React from 'react';
import { projectsData, projectsMeta } from '@/data';
import { Heading } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-20 w-full min-h-screen py-24 sm:py-32 px-6 max-w-7xl mx-auto bg-[#0C0C0C]"
      aria-label="Projects Showcase"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <Heading
          title={projectsMeta.title}
          subtitle={projectsMeta.eyebrow}
          gradient
          align="center"
        />
        <FadeIn direction="up" delay={0.15}>
          <p className="max-w-xl text-zinc-400 font-kanit text-sm sm:text-base mt-4 leading-relaxed">
            {projectsMeta.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Responsive Projects Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
        {projectsData.map((project, index) => (
          <FadeIn
            key={project.slug}
            direction="up"
            delay={0.1 * index}
            className="h-full"
          >
            <ProjectCard
              project={project}
              index={index}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
