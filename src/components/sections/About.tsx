
import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Layout,
  Zap,
  Building2,
  Briefcase,
  MapPin,
  Mail,
  GraduationCap,
} from 'lucide-react';
import { identityData, aboutDetails } from '@/data';
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

const getDetailIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase className="w-4 h-4 text-indigo-400" />;
    case 'MapPin':
      return <MapPin className="w-4 h-4 text-rose-400" />;
    case 'Mail':
      return <Mail className="w-4 h-4 text-emerald-400" />;
    case 'Sparkles':
      return <Sparkles className="w-4 h-4 text-amber-400" />;
    case 'GraduationCap':
      return <GraduationCap className="w-4 h-4 text-cyan-400" />;
    case 'Building2':
      return <Building2 className="w-4 h-4 text-amber-400" />;
    default:
      return <Briefcase className="w-4 h-4 text-zinc-400" />;
  }
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
          className="mb-6"
        />

        {/* Prominent Role Badge: Co-Founder of HM Technologies */}
        <FadeIn direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/15 via-white/5 to-amber-500/15 border border-amber-500/30 text-amber-300 shadow-lg shadow-amber-500/5 mb-10 sm:mb-12">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-kanit font-semibold uppercase tracking-wider">
              {identityData.prominentRole}
            </span>
          </div>
        </FadeIn>

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

        {/* About Details Grid with Icons (Role, Location, Email, Experience, Education) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-10 w-full max-w-4xl text-left">
          {aboutDetails.map((detail, idx) => (
            <FadeIn
              key={detail.label}
              direction="up"
              delay={0.2 + idx * 0.05}
              className="h-full"
            >
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl flex items-center gap-3.5 hover:border-white/25 hover:bg-zinc-900/60 transition-all duration-300 h-full group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                  {getDetailIcon(detail.iconName)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-kanit uppercase tracking-wider text-zinc-400 font-medium">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-xs sm:text-sm font-kanit font-semibold text-white hover:text-indigo-300 transition-colors truncate focus:outline-none focus:ring-1 focus:ring-white/40 rounded"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-kanit font-semibold text-white truncate">
                      {detail.value}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA to Contact section */}
        <FadeIn direction="up" delay={0.5} className="mt-12 sm:mt-14">
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
