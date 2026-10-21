import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '@/types';
import { LiveProjectButton } from '@/components/ui';
import { Sparkles, Layers, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const [imgError, setImgError] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const imagesCount = project.images.length;

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % imagesCount);
  };

  const handleSelectImg = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setCurrentImgIndex(idx);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setCurrentImgIndex((prev) => (prev + 1) % imagesCount);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImgIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, imagesCount]);

  return (
    <>
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

          {/* Interactive Multi-Screenshot Gallery */}
          <div className="my-4 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[16/10] relative group/img">
            {!imgError ? (
              <>
                <img
                  key={project.images[currentImgIndex]}
                  src={project.images[currentImgIndex]}
                  alt={`${project.title} preview screenshot ${currentImgIndex + 1} of ${imagesCount}`}
                  width={600}
                  height={375}
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Lightbox Trigger Icon */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-black/80 hover:scale-105 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label="View screenshot in high resolution"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Carousel Navigation Arrows */}
                {imagesCount > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImg}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-all hover:bg-black/90 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-white"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImg}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-all hover:bg-black/90 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-white"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Pagination Dots & Slide Counter */}
                {imagesCount > 1 && (
                  <div className="absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-1.5 pointer-events-auto bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                      {project.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => handleSelectImg(e, dotIdx)}
                          aria-label={`Jump to screenshot ${dotIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            dotIdx === currentImgIndex
                              ? 'w-5 bg-white'
                              : 'w-1.5 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-kanit font-medium text-zinc-300 bg-black/60 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
                      {currentImgIndex + 1} / {imagesCount}
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-500 p-4">
                <ImageIcon className="w-8 h-8 text-zinc-600" />
                <span className="text-xs font-kanit uppercase tracking-wider">Preview image</span>
              </div>
            )}
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

      {/* High-Resolution Screenshot Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-black"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <span className="font-kanit font-extrabold text-white text-lg">
                    {project.title}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-kanit font-medium">
                    Screenshot {currentImgIndex + 1} of {imagesCount}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative flex-1 min-h-[300px] max-h-[75vh] flex items-center justify-center bg-black/50 p-2 sm:p-4 overflow-hidden">
                <img
                  src={project.images[currentImgIndex]}
                  alt={`${project.title} high resolution preview ${currentImgIndex + 1}`}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />

                {/* Prev / Next controls inside modal */}
                {imagesCount > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImg}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-white/20 text-white hover:scale-110 transition-transform"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImg}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-white/20 text-white hover:scale-110 transition-transform"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer Thumbnails */}
              {imagesCount > 1 && (
                <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/40 flex items-center justify-center gap-3">
                  {project.images.map((thumbUrl, idx) => (
                    <button
                      key={thumbUrl}
                      type="button"
                      onClick={(e) => handleSelectImg(e, idx)}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border transition-all ${
                        idx === currentImgIndex
                          ? 'border-white scale-105 shadow-md shadow-white/20'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumbUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

