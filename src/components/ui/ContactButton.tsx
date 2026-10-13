import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Magnet } from '../motion/Magnet';

export interface ContactButtonProps {
  href?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href = '#contact',
  text = 'Contact Me',
  variant = 'primary',
  onClick,
  className = '',
  external = false,
}) => {
  const baseClasses =
    'group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-kanit font-medium text-sm tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0C0C0C]';

  const variantClasses = {
    primary:
      'bg-white text-black hover:bg-zinc-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    secondary:
      'bg-zinc-900/90 text-white border border-white/15 hover:border-white/40 hover:bg-zinc-800 active:scale-95 backdrop-blur-md',
    outline:
      'bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/5 active:scale-95',
  }[variant];

  const content = (
    <span className="flex items-center gap-2 font-medium">
      <span>{text}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Magnet strength={0.25}>
        <a
          href={href}
          onClick={onClick}
          className={combinedClasses}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      </Magnet>
    );
  }

  return (
    <Magnet strength={0.25}>
      <button type="button" onClick={onClick} className={combinedClasses}>
        {content}
      </button>
    </Magnet>
  );
};
