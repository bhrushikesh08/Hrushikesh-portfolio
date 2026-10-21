import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { projectsData } from '@/data';
import { ExternalLink } from 'lucide-react';

interface MarqueeTileItem {
  id: string;
  projectTitle: string;
  category: string;
  status: string;
  imageSrc: string;
  altText: string;
  liveUrl?: string;
  repoUrl?: string;
  isDuplicate?: boolean;
}

export const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Extract all project screenshots
  const allTiles: MarqueeTileItem[] = projectsData.flatMap((project) =>
    project.images.map((img, idx) => ({
      id: `${project.slug}-${idx}`,
      projectTitle: project.title,
      category: project.category,
      status: project.status,
      imageSrc: img,
      altText: `${project.title} preview screenshot ${idx + 1}`,
      liveUrl: project.liveUrl,
      repoUrl: project.repoUrl,
    }))
  );

  // Triple items to guarantee seamless scrolling (> 21 items)
  // Set 1 is the primary accessible set; sets 2 & 3 are marked as duplicate for accessibility
  const tripledTiles: MarqueeTileItem[] = [
    ...allTiles.map((t) => ({ ...t, isDuplicate: false })),
    ...allTiles.map((t) => ({ ...t, isDuplicate: true })),
    ...allTiles.map((t) => ({ ...t, isDuplicate: true })),
  ];

  // Distribute into Row 1 and Row 2
  const row1Tiles = tripledTiles.filter((_, i) => i % 2 === 0);
  const row2Tiles = tripledTiles.filter((_, i) => i % 2 !== 0);

  // Scroll-linked parallax transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const row2X = useTransform(scrollYProgress, [0, 1], ['-25%', '0%']);

  return (
    <section
      ref={containerRef}
      id="marquee"
      className="relative w-full py-16 sm:py-24 overflow-hidden bg-[#0C0C0C]"
      aria-label="Interactive Project Marquee"
    >
      {/* Side Vignettes for cinematic fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-56 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-56 bg-gradient-to-l from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <motion.div
            style={shouldReduceMotion ? undefined : { x: row1X }}
            className={`flex gap-5 sm:gap-6 shrink-0 ${
              shouldReduceMotion ? 'overflow-x-auto pb-4 max-w-full' : ''
            }`}
          >
            {row1Tiles.map((tile, index) => (
              <MarqueeCard key={`row1-${tile.id}-${index}`} tile={tile} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            style={shouldReduceMotion ? undefined : { x: row2X }}
            className={`flex gap-5 sm:gap-6 shrink-0 ${
              shouldReduceMotion ? 'overflow-x-auto pb-4 max-w-full' : ''
            }`}
          >
            {row2Tiles.map((tile, index) => (
              <MarqueeCard key={`row2-${tile.id}-${index}`} tile={tile} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface MarqueeCardProps {
  tile: MarqueeTileItem;
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ tile }) => {
  const [currentSrc, setCurrentSrc] = React.useState<string>(tile.imageSrc);
  const isSmartCollegeNetwork = tile.projectTitle === 'Smart College Network';
  const targetUrl = isSmartCollegeNetwork ? undefined : (tile.liveUrl || tile.repoUrl || '#projects');

  const handleError = () => {
    if (currentSrc.endsWith('.webp')) {
      setCurrentSrc(currentSrc.replace('.webp', '.png'));
    } else if (currentSrc.endsWith('.png')) {
      setCurrentSrc(currentSrc.replace('.png', '.jpg'));
    }
  };

  const cardContent = (
    <>
      {/* Background Graphic / Screenshot */}
      <img
        src={currentSrc}
        alt={tile.altText}
        width={420}
        height={270}
        loading="lazy"
        onError={handleError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Styled Mock Device Canvas (Fallback / Polish for placeholders) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Top Meta Tag */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-[10px] sm:text-xs font-kanit uppercase tracking-wider font-medium text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          {tile.category}
        </span>
        {targetUrl && (
          <span className="p-1.5 rounded-full bg-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
        <h3 className="font-kanit font-bold text-base sm:text-lg text-white tracking-wide truncate">
          {tile.projectTitle}
        </h3>
        <span className="text-[11px] sm:text-xs text-zinc-400 font-kanit">
          {tile.status}
        </span>
      </div>
    </>
  );

  const cardClasses =
    "group relative w-[300px] h-[195px] sm:w-[380px] sm:h-[245px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 focus:outline-none focus:ring-2 focus:ring-white/40 block";

  if (!targetUrl) {
    return (
      <div
        className={cardClasses}
        tabIndex={tile.isDuplicate ? -1 : undefined}
        aria-hidden={tile.isDuplicate ? 'true' : undefined}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={targetUrl}
      target={targetUrl.startsWith('http') ? '_blank' : undefined}
      rel={targetUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
      tabIndex={tile.isDuplicate ? -1 : undefined}
      aria-hidden={tile.isDuplicate ? 'true' : undefined}
      className={cardClasses}
    >
      {cardContent}
    </a>
  );
};
