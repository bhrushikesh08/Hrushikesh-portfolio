import React from 'react';
import { FadeIn } from '../motion/FadeIn';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  title,
  subtitle,
  className = '',
  gradient = false,
  align = 'left',
}) => {
  const alignmentClass =
    align === 'center'
      ? 'text-center items-center'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-left items-start';

  const headingClasses = gradient
    ? 'hero-heading font-kanit tracking-tight'
    : 'font-kanit font-bold tracking-tight text-white';

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {subtitle && (
        <FadeIn direction="down" delay={0.05}>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-2 block">
            {subtitle}
          </span>
        </FadeIn>
      )}
      <FadeIn direction="up" delay={0.1}>
        <Component className={`${headingClasses} text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase`}>
          {title}
        </Component>
      </FadeIn>
    </div>
  );
};
