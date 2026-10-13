import React, { useState } from 'react';
import { Sparkles, Code2, Layout, Zap } from 'lucide-react';
import { identityData } from '@/data';
import { FadeIn, Magnet, AnimatedText } from '@/components/motion';
import { Heading, ContactButton } from '@/components/ui';

interface CornerBadgeProps {
  imageSrc: string;
  fallbackIcon: React.ReactNode;
  title: string;
  subtitle: string;
  positionClass: string;
  direction: 'up' | 'down' | 'left' | 'right';
  delay: number;
}

const CornerBadge: React.FC<CornerBadgeProps> = ({
  imageSrc,
  fallbackIcon,
  title,
  subtitle,
  positionClass,
  direction,
  delay,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={positionClass}>
      <FadeIn direction={direction} delay={delay}>
        <Magnet strength={0.3}>
          <div className="group relative flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 hover:border-white/30 hover:bg-zinc-800/80 hover:scale-105">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {!imgError ? (
                <img
                  src={imageSrc}
                  alt={title}
                  width={40}
                  height={40}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : null}
              {imgError && fallbackIcon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-kanit font-bold uppercase tracking-wider text-white">
                {title}
              </span>
              <span className="text-[11px] text-zinc-400 font-kanit">
                {subtitle}
              </span>
            </div>
          </div>
        </Magnet>
      </FadeIn>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 px-6 overflow-hidden flex flex-col justify-center items-center bg-[#0C0C0C]"
      aria-label="About Hrushikesh"
    >
      {/* Background radial glow */}
      <div className="absolute w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-white/5 via-zinc-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Section Heading */}
        <Heading
          title={identityData.aboutTitle}
          subtitle={identityData.aboutEyebrow}
          gradient
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Central Card with Corner Floating Badges (Desktop) */}
        <div className="relative w-full max-w-4xl py-12 px-6 sm:px-16 rounded-3xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
          {/* Top Left Floating Badge */}
          <CornerBadge
            imageSrc="/images/about/1.png"
            fallbackIcon={<Code2 className="w-5 h-5 text-indigo-400" />}
            title="Clean Architecture"
            subtitle="Modern Web & React"
            positionClass="hidden lg:block absolute -top-8 -left-8 z-20"
            direction="down"
            delay={0.2}
          />

          {/* Top Right Floating Badge */}
          <CornerBadge
            imageSrc="/images/about/2.png"
            fallbackIcon={<Sparkles className="w-5 h-5 text-amber-400" />}
            title="Vibecoding"
            subtitle="AI Tool Direction"
            positionClass="hidden lg:block absolute -top-8 -right-8 z-20"
            direction="down"
            delay={0.3}
          />

          {/* Central Scroll Reveal Paragraph */}
          <FadeIn direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-light leading-relaxed sm:leading-relaxed md:leading-relaxed text-zinc-200 tracking-wide font-kanit">
              <AnimatedText
                text={identityData.aboutCopy}
                type="words"
                stagger={0.015}
              />
            </p>
          </FadeIn>

          {/* Bottom Left Floating Badge */}
          <CornerBadge
            imageSrc="/images/about/3.png"
            fallbackIcon={<Layout className="w-5 h-5 text-cyan-400" />}
            title="UI/UX Craft"
            subtitle="Intuitive Interfaces"
            positionClass="hidden lg:block absolute -bottom-8 -left-8 z-20"
            direction="up"
            delay={0.35}
          />

          {/* Bottom Right Floating Badge */}
          <CornerBadge
            imageSrc="/images/about/4.png"
            fallbackIcon={<Zap className="w-5 h-5 text-emerald-400" />}
            title="Performance"
            subtitle="Fluid Motion & Speed"
            positionClass="hidden lg:block absolute -bottom-8 -right-8 z-20"
            direction="up"
            delay={0.45}
          />
        </div>

        {/* Mobile / Tablet 2x2 Corner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 w-full max-w-xl lg:hidden">
          <CornerBadge
            imageSrc="/images/about/1.png"
            fallbackIcon={<Code2 className="w-5 h-5 text-indigo-400" />}
            title="Clean Architecture"
            subtitle="Modern Web & React"
            positionClass="w-full"
            direction="up"
            delay={0.2}
          />
          <CornerBadge
            imageSrc="/images/about/2.png"
            fallbackIcon={<Sparkles className="w-5 h-5 text-amber-400" />}
            title="Vibecoding"
            subtitle="AI Tool Direction"
            positionClass="w-full"
            direction="up"
            delay={0.25}
          />
          <CornerBadge
            imageSrc="/images/about/3.png"
            fallbackIcon={<Layout className="w-5 h-5 text-cyan-400" />}
            title="UI/UX Craft"
            subtitle="Intuitive Interfaces"
            positionClass="w-full"
            direction="up"
            delay={0.3}
          />
          <CornerBadge
            imageSrc="/images/about/4.png"
            fallbackIcon={<Zap className="w-5 h-5 text-emerald-400" />}
            title="Performance"
            subtitle="Fluid Motion & Speed"
            positionClass="w-full"
            direction="up"
            delay={0.35}
          />
        </div>

        {/* Bottom CTA to Contact section */}
        <FadeIn direction="up" delay={0.5} className="mt-14 sm:mt-16">
          <ContactButton
            href="#contact"
            text={identityData.aboutCta}
            variant="primary"
          />
        </FadeIn>
      </div>
    </section>
  );
};
