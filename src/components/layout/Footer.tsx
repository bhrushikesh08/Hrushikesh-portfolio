import React from 'react';
import { identityData, navLinks, contactMeta } from '@/data';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
} from 'lucide-react';

/**
 * SOCIAL MEDIA ACCOUNTS CONFIGURATION
 * ------------------------------------
 * Replace the placeholder URLs below with your official social account links.
 */
export const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/bhrushikesh08',
    icon: Github,
    ariaLabel: 'Visit Hrushikesh on GitHub (opens in new tab)',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bheemanapalli-hrushikesh-525a77312/',
    icon: Linkedin,
    ariaLabel: 'Connect with Hrushikesh on LinkedIn (opens in new tab)',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/hrushikesh_bh', // <-- EDIT: Replace with your Instagram URL
    icon: Instagram,
    ariaLabel: 'Follow Hrushikesh on Instagram (opens in new tab)',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/PLACEHOLDER_TWITTER', // <-- EDIT: Replace with your X/Twitter URL
    icon: Twitter,
    ariaLabel: 'Follow Hrushikesh on X / Twitter (opens in new tab)',
  },
  {
    name: 'Email',
    href: 'mailto:bheemanapallih@gmail.com',
    icon: Mail,
    ariaLabel: 'Send an email to Hrushikesh (opens mail app)',
  },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-[#0C0C0C] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <a
              href="#"
              className="font-kanit font-extrabold text-2xl tracking-tight uppercase text-white hover:text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
            >
              {identityData.shortName}
              <span className="text-zinc-500">.</span>
            </a>
            <p className="text-xs text-zinc-500 font-kanit">
              {contactMeta.footerTagline}
            </p>
          </div>

          {/* Social Media Links (Centered on mobile) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Navigation Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-kanit uppercase tracking-wider text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Bottom Row */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <span className="text-xs text-zinc-500 font-kanit">
            {contactMeta.footerCopyright}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-kanit text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
