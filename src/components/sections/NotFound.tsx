import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { notFoundData, identityData } from '@/data';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export interface NotFoundProps {
  onBackHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      aria-label="404 Page Not Found"
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-rose-500/10 via-zinc-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Brand logo in top left */}
      <div className="absolute top-8 left-8 sm:top-10 sm:left-12">
        <button
          type="button"
          onClick={onBackHome}
          className="font-kanit font-extrabold text-xl sm:text-2xl tracking-tight uppercase text-white hover:text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1"
        >
          {identityData.shortName}
          <span className="text-zinc-500">.</span>
        </button>
      </div>

      <div className="max-w-xl mx-auto flex flex-col items-center text-center z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-kanit uppercase tracking-wider mb-8">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Invalid Address</span>
        </div>

        {/* Large 404 Heading with Subtle Float Effect */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative select-none"
        >
          <h1 className="hero-heading text-8xl sm:text-9xl md:text-[11rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-2xl">
            {notFoundData.code}
          </h1>
          <div className="absolute inset-0 bg-white/5 blur-3xl -z-10 pointer-events-none" />
        </motion.div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-kanit font-bold text-white mt-4 mb-3 tracking-tight">
          {notFoundData.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-kanit font-light max-w-md leading-relaxed mb-8">
          {notFoundData.description}
        </p>

        {/* Back to Home CTA */}
        <button
          type="button"
          onClick={onBackHome}
          className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-kanit font-medium text-sm sm:text-base tracking-wide hover:bg-zinc-200 active:scale-95 transition-all duration-300 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={notFoundData.backHomeCta}
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>{notFoundData.backHomeCta}</span>
        </button>
      </div>

      {/* Footer copyright note */}
      <div className="absolute bottom-6 text-center text-xs text-zinc-600 font-kanit">
        &copy; {new Date().getFullYear()} {identityData.displayName}
      </div>
    </section>
  );
};
