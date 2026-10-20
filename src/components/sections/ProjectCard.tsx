import React, { useState } from 'react';
import { ProjectItem } from '@/types';
import { LiveProjectButton } from '@/components/ui';
import { Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="w-full h-full rounded-3xl p-5 sm:p-6 bg-zinc-950/70 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 hover:border-white/30 hover:bg-zinc-900/80 hover:-translate-y-1.5 flex flex-col justify-between group"
    >
      <div>
        {/* Top Info Bar */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="font-kanit font-extrabold text-xl text-zinc-400">
              {project.number}
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.isConcept && (
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Concept</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-kanit uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        {/* Featured Screenshot Container */}
        <div className="my-4 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[16/10] relative group/img">
          {!imgError ? (
            <img
              src={project.images[0]}
              alt={`${project.title} preview screenshot`}
              width={600}
              height={375}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-500 p-4">
              <ImageIcon className="w-8 h-8 text-zinc-600" />
              <span className="text-xs font-kanit uppercase tracking-wider">Preview image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-kanit font-extrabold uppercase tracking-tight text-white group-hover:text-zinc-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-zinc-400 font-kanit font-medium mt-1">
          {project.subtitle}
        </p>

        {/* Project Description */}
        <p className="text-xs sm:text-sm text-zinc-300 font-kanit font-light leading-relaxed mt-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Chips & Action Buttons */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-4">
        {/* Tech Stack */}
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 uppercase tracking-widest font-semibold mb-2">
            <Layers className="w-3 h-3" />
            <span>Technologies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-kanit text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.liveUrl && (
            <LiveProjectButton href={project.liveUrl} variant="live" />
          )}
          {project.repoUrl && (
            <LiveProjectButton href={project.repoUrl} variant="repo" />
          )}
        </div>
      </div>
    </article>
  );
};
