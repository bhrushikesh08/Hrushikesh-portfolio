import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { NotFound } from '@/components/sections/NotFound';
import { isRouteValid, VALID_SECTION_IDS, ValidSectionId } from '@/utils/routeValidator';

export const App: React.FC = () => {
  const [isNotFound, setIsNotFound] = useState<boolean>(() => !isRouteValid());

  const scrollToValidSection = useCallback((id: ValidSectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const evaluateRoute = useCallback(() => {
    if (!isRouteValid()) {
      setIsNotFound(true);
      return;
    }

    setIsNotFound(false);

    // If valid hash, scroll to target section
    const rawHash = window.location.hash;
    if (rawHash && rawHash !== '#') {
      try {
        const decoded = decodeURIComponent(rawHash);
        const sectionId = decoded.replace(/^#/, '');
        if (VALID_SECTION_IDS.includes(sectionId as ValidSectionId)) {
          // Slight timeout to ensure layout render
          setTimeout(() => scrollToValidSection(sectionId as ValidSectionId), 50);
        }
      } catch {
        setIsNotFound(true);
      }
    }
  }, [scrollToValidSection]);

  useEffect(() => {
    evaluateRoute();

    window.addEventListener('hashchange', evaluateRoute);
    window.addEventListener('popstate', evaluateRoute);

    return () => {
      window.removeEventListener('hashchange', evaluateRoute);
      window.removeEventListener('popstate', evaluateRoute);
    };
  }, [evaluateRoute]);

  const handleBackHome = () => {
    window.history.replaceState(null, '', '/');
    setIsNotFound(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isNotFound) {
    return <NotFound onBackHome={handleBackHome} />;
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

