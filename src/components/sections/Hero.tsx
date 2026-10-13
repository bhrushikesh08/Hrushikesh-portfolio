import React, { useState } from 'react';
import { MapPin, Sparkles, ChevronDown, Code, Laptop } from 'lucide-react';
import { identityData } from '@/data';
import { FadeIn, Magnet, AnimatedText } from '@/components/motion';
import { ContactButton } from '@/components/ui';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 max-w-7xl mx-auto overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Top Status & Location Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        {/* Availability Badge */}
        <FadeIn direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-kanit uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{identityData.availability}</span>
          </div>
        </FadeIn>

        {/* Location Badge */}
        <FadeIn direction="down" delay={0.2}>
          <div className="inline-flex items-center gap-1.5 text-zinc-400 text-xs font-kanit tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{identityData.location}</span>
          </div>
        </FadeIn>
      </div>

      {/* Main Grid: Giant Heading + Tagline + Magnetic Portrait */}
      <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading + Tagline + CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Eyebrow Roles */}
          <FadeIn direction="up" delay={0.15}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {identityData.roles.map((role) => (
                <span
                  key={role}
                  className="text-xs uppercase tracking-[0.18em] font-medium text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Giant Hero Heading */}
          <FadeIn direction="up" delay={0.25}>
            <h1 className="hero-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
              {identityData.heroHeading}
            </h1>
          </FadeIn>

          {/* Left Tagline */}
          <FadeIn direction="up" delay={0.35}>
            <p className="text-zinc-300 text-lg sm:text-xl md:text-2xl font-light max-w-xl leading-relaxed mb-8 capitalize">
              <AnimatedText text={identityData.heroTagline} />
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.45}>
            <div className="flex flex-wrap items-center gap-4">
              <ContactButton
                href="#contact"
                text={identityData.heroCtaPrimary}
                variant="primary"
              />
              <ContactButton
                href="#projects"
                text={identityData.heroCtaSecondary}
                variant="secondary"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Magnetic Portrait & Visual Element */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-white/10 via-zinc-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

          <FadeIn direction="left" delay={0.3} className="w-full max-w-sm sm:max-w-md">
            <Magnet strength={0.25} className="w-full">
              <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 transition-transform duration-500 hover:border-white/30">
                {/* Floating Tech Badges */}
                <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vibecoder</span>
                </div>
                <div className="absolute -bottom-3 -left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>UI/UX & Code</span>
                </div>

                {/* Portrait Canvas Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-950 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/images/portrait.png"
                      alt={identityData.displayName}
                      width={500}
                      height={625}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                  ) : null}

                  {/* Fallback Display if portrait.png is empty/transparent placeholder */}
                  {imgError && (
                    <div className="flex flex-col items-center justify-center p-8 text-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
                        <Laptop className="w-12 h-12 text-zinc-300" />
                      </div>
                      <div>
                        <div className="font-kanit font-bold text-xl uppercase tracking-wider text-white">
                          {identityData.shortName}
                        </div>
                        <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
                          Personal Portrait
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Glass Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Portrait Name Strip */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-zinc-300 font-kanit">
                    <span className="font-semibold uppercase tracking-wider text-white">
                      {identityData.displayName}
                    </span>
                    <span className="text-zinc-400">Rayadurg, AP</span>
                  </div>
                </div>
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <FadeIn direction="up" delay={0.6}>
        <div className="flex justify-center items-center pt-8">
          <a
            href="#projects"
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 rounded p-1"
            aria-label={identityData.heroScrollText}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium font-kanit">
              {identityData.heroScrollText}
            </span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
