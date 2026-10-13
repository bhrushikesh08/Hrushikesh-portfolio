import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Magnet } from '../motion/Magnet';

export interface LiveProjectButtonProps {
  href: string;
  label?: string;
  variant?: 'live' | 'repo';
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label,
  variant = 'live',
  className = '',
}) => {
  const isLive = variant === 'live';
  const defaultLabel = isLive ? 'Live Project' : 'View Code';
  const text = label || defaultLabel;

  return (
    <Magnet strength={0.2}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-kanit font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 ${
          isLive
            ? 'bg-white text-black hover:bg-zinc-200 shadow-md shadow-white/5 active:scale-95'
            : 'bg-zinc-900/80 text-zinc-300 border border-white/10 hover:border-white/30 hover:text-white active:scale-95'
        } ${className}`}
      >
        <span>{text}</span>
        {isLive ? (
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <Github className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
        )}
      </a>
    </Magnet>
  );
};
