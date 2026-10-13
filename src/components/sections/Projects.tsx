import React from 'react';
import { projectsData, inDevelopmentData, projectsMeta } from '@/data';
import { Heading } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { ProjectCard } from './ProjectCard';
import { Hammer, Sparkles, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-20 w-full min-h-screen py-24 sm:py-32 px-6 max-w-7xl mx-auto bg-[#0C0C0C]"
      aria-label="Projects Showcase"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
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

      {/* Sticky Stacking Cards Container */}
      <div className="relative w-full flex flex-col items-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            totalCards={projectsData.length}
          />
        ))}
      </div>

      {/* "Currently Building" Strip */}
      <div className="mt-20 sm:mt-28 w-full max-w-5xl mx-auto">
        <FadeIn direction="up" delay={0.2}>
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
            {/* Strip Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Hammer className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-kanit font-bold text-white uppercase tracking-wider">
                    {projectsMeta.inDevelopmentTitle}
                  </h4>
                  <span className="text-xs text-zinc-400 font-kanit">
                    {projectsMeta.inDevelopmentEyebrow}
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-kanit text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>In Active Development</span>
              </div>
            </div>

            {/* Strip Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inDevelopmentData.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-white/5 text-zinc-300 shrink-0 mt-0.5">
                      {idx === 0 ? (
                        <Cpu className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-amber-400" />
                      )}
                    </span>
                    <h5 className="font-kanit font-semibold text-sm sm:text-base text-zinc-100 leading-snug">
                      {item.name}
                    </h5>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-kanit text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
