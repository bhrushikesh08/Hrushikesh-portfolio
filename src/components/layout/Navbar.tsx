import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, identityData } from '@/data';
import { ContactButton } from '@/components/ui';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo / Brand */}
        <a
          href="#"
          className="group font-kanit font-extrabold text-xl sm:text-2xl tracking-tight uppercase text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
        >
          {identityData.shortName}
          <span className="text-zinc-500 group-hover:text-white transition-colors">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-kanit text-zinc-400 hover:text-white transition-colors uppercase tracking-wider relative py-1 focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ContactButton
            href="#contact"
            text={identityData.navCta}
            variant="secondary"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-kanit uppercase tracking-wider text-zinc-300 hover:text-white py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <ContactButton
              href="#contact"
              text={identityData.navCta}
              variant="primary"
              onClick={closeMenu}
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};
