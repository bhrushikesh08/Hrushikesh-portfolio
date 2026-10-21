import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Palette,
  Code2,
  Flame,
  Smartphone,
  Sparkles,
  Rocket,
  ChevronDown,
  Check,
  ArrowUpRight,
  Building2,
  LucideIcon,
} from 'lucide-react';
import { servicesData, servicesMeta, HM_TECH_CONTACT_URL } from '@/data';
import { FadeIn, Magnet } from '@/components/motion';
import { Heading } from '@/components/ui';
import { ServiceIconType } from '@/types';

const iconMap: Record<ServiceIconType, LucideIcon> = {
  Palette,
  Code2,
  Flame,
  Smartphone,
  Sparkles,
  Rocket,
};

const iconColorMap: Record<ServiceIconType, { bg: string; text: string; border: string }> = {
  Palette: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
  Code2: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  Flame: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
  Smartphone: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  Sparkles: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  Rocket: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
};

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative z-10 w-full py-24 sm:py-32 px-6 max-w-7xl mx-auto bg-[#0C0C0C]"
      aria-label="Services and Capabilities"
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-amber-500/5 via-white/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
        <div>
          <Heading
            title={servicesMeta.title}
            subtitle={servicesMeta.eyebrow}
            gradient
            align="left"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <FadeIn direction="up" delay={0.15}>
            <p className="max-w-md text-sm sm:text-base text-zinc-400 font-kanit leading-relaxed">
              {servicesMeta.subtitle}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Magnet strength={0.2}>
              <a
                href={HM_TECH_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 text-amber-300 font-kanit font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-lg shadow-amber-500/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 shrink-0"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{servicesMeta.hmTechButtonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Interactive Services Accordion */}
      <div className="mt-8 space-y-4" role="list">
        {servicesData.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const IconComponent = iconMap[service.iconName];
          const colorStyles = iconColorMap[service.iconName];

          return (
            <FadeIn
              key={service.number}
              direction="up"
              delay={index * 0.05}
              className="w-full"
            >
              <div
                role="listitem"
                className={`group relative rounded-3xl transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-zinc-900/90 border-white/25 shadow-2xl shadow-black/80 ring-1 ring-white/10'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
                }`}
              >
                {/* Header Trigger Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`service-panel-${service.number}`}
                  id={`service-header-${service.number}`}
                  className="w-full text-left py-6 sm:py-8 px-6 sm:px-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-3xl transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Service Number */}
                    <span
                      className={`font-kanit font-extrabold text-xl sm:text-2xl transition-colors shrink-0 ${
                        isExpanded ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Icon Pill */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        colorStyles.bg
                      } ${colorStyles.text} ${colorStyles.border} ${
                        isExpanded ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Preview */}
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-kanit font-bold tracking-tight text-white truncate sm:whitespace-normal">
                        {service.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-xs sm:text-sm text-zinc-400 font-kanit line-clamp-1 mt-1 hidden sm:block">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-kanit text-zinc-400 uppercase tracking-wider hidden lg:inline-block">
                      {isExpanded ? '' : servicesMeta.expandPrompt}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${
                        isExpanded
                          ? 'bg-white text-black rotate-180'
                          : 'bg-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/30'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>
                </button>

                {/* Expandable Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`service-panel-${service.number}`}
                      role="region"
                      aria-labelledby={`service-header-${service.number}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, height: 'auto' }
                          : { opacity: 0, height: 0 }
                      }
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0, height: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 sm:pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                        {/* Left: Description & Key Highlights */}
                        <div className="md:w-7/12 space-y-4">
                          <p className="text-base sm:text-lg text-zinc-300 font-kanit leading-relaxed font-light">
                            {service.description}
                          </p>

                          <div className="space-y-2.5 pt-2">
                            {service.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                </div>
                                <span className="text-sm sm:text-base text-zinc-300 font-kanit">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Tech Tags & HM Tech Contact CTA */}
                        <div className="md:w-4/12 flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                          <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3 block font-kanit">
                              {servicesMeta.eyebrow}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full text-xs font-kanit font-medium bg-white/5 text-zinc-300 border border-white/10 shadow-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <a
                              href={HM_TECH_CONTACT_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-kanit font-medium hover:bg-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-md group/btn"
                            >
                              <Building2 className="w-4 h-4 text-amber-400" />
                              <span>{service.discussText}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Bottom CTA Block */}
      <div className="mt-14 sm:mt-18 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-sm font-kanit text-zinc-400 text-center sm:text-left">
          {servicesMeta.footerText}
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Magnet strength={0.25}>
            <a
              href={HM_TECH_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-amber-500/25 border border-amber-500/40 text-amber-300 font-kanit font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:bg-amber-500/35 hover:border-amber-500/60 shadow-lg shadow-amber-500/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>{servicesMeta.hmTechButtonText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnet>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-kanit font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-white/10 hover:border-white/25 transition-all duration-200"
          >
            <span>Direct Message</span>
          </a>
        </div>
      </div>
    </section>
  );
};
