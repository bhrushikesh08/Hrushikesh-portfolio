import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ProjectItem } from '@/types';
import { LiveProjectButton } from '@/components/ui';
import { Sparkles, Layers } from 'lucide-react';

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Spec formula:
  // targetScale = 1 - (totalCards - 1 - index) * 0.03
  // topOffset = index * 28px
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const topOffset = index * 28;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      style={{
        top: `calc(5rem + ${topOffset}px)`,
      }}
      className="sticky w-full max-w-6xl mx-auto mb-16 sm:mb-24"
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { scale }}
        className="w-full rounded-3xl p-6 sm:p-8 md:p-10 bg-zinc-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 transition-colors duration-300 hover:border-white/25 flex flex-col gap-8"
      >
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Number & Category */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-kanit font-extrabold text-2xl sm:text-3xl text-zinc-400">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              {project.category}
            </span>

            {/* Concept Project Badge if applicable */}
            {project.isConcept && (
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Concept Demo</span>
              </span>
            )}
          </div>

          {/* Status & CTA */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-kanit uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{project.status}</span>
            </span>

            {/* Action Button: Live project or Github repo */}
            {project.liveUrl ? (
              <LiveProjectButton href={project.liveUrl} variant="live" />
            ) : project.repoUrl ? (
              <LiveProjectButton href={project.repoUrl} variant="repo" />
            ) : null}
          </div>
        </div>

        {/* Content & 3 Images Grid (40/60 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-kanit font-extrabold uppercase tracking-tight text-white mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-zinc-400 font-kanit font-medium mb-4">
                {project.subtitle}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-kanit font-light leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-kanit text-zinc-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Screenshots Grid (7 cols on desktop; 40/60 internal visual balance) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 h-full">
            {/* Primary / Hero Screenshot (approx 5 cols) */}
            <div className="sm:col-span-6 rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 aspect-[4/3] sm:aspect-auto sm:h-full relative group">
              <img
                src={project.images[0]}
                alt={`${project.title} main screenshot`}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Secondary Two Stacked Screenshots (approx 6 cols) */}
            <div className="sm:col-span-6 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 aspect-[16/10] relative group">
                <img
                  src={project.images[1]}
                  alt={`${project.title} secondary screenshot`}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              <div className="rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 aspect-[16/10] relative group">
                <img
                  src={project.images[2]}
                  alt={`${project.title} detail screenshot`}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
