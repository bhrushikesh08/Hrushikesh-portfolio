import React from 'react';
import { identityData, navLinks, contactMeta } from '@/data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-[#0C0C0C] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a
            href="#"
            className="font-kanit font-extrabold text-2xl tracking-tight uppercase text-white hover:text-zinc-300 transition-colors"
          >
            {identityData.shortName}
            <span className="text-zinc-500">.</span>
          </a>
          <p className="text-xs text-zinc-500 font-kanit">
            {contactMeta.footerTagline}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm font-kanit uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
          <span className="text-xs text-zinc-500 font-kanit">
            {contactMeta.footerCopyright}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
