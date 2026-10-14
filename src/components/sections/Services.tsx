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
  LucideIcon
} from 'lucide-react';
import { servicesData, servicesMeta } from '@/data';
import { FadeIn, Magnet } from '@/components/motion';
import { ServiceIconType } from '@/types';

const iconMap: Record<ServiceIconType, LucideIcon> = {
  Palette,
  Code2,
  Flame,
  Smartphone,
  Sparkles,
  Rocket
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
      className="relative z-10 w-full bg-[#F5F5F7] text-zinc-900 py-24 sm:py-32 px-6 rounded-t-[2.5rem] sm:rounded-t-[4rem] rounded-b-[2.5rem] sm:rounded-b-[4rem] shadow-2xl transition-colors duration-500 overflow-hidden"
      aria-label="Services and Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-zinc-300/80">
          <div>
            <FadeIn direction="down" delay={0.05}>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 mb-2 block font-kanit">
                {servicesMeta.eyebrow}
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kanit font-black tracking-tight uppercase text-black">
                {servicesMeta.title}
              </h2>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.15}>
            <p className="max-w-md text-sm sm:text-base text-zinc-600 font-kanit leading-relaxed">
              {servicesMeta.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Interactive Services Accordion */}
        <div className="divide-y divide-zinc-200/90" role="list">
          {servicesData.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const IconComponent = iconMap[service.iconName];

            return (
              <FadeIn
                key={service.number}
                direction="up"
                delay={index * 0.06}
                className="w-full"
              >
                <div
                  role="listitem"
                  className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-300 my-2 ${
                    isExpanded
                      ? 'bg-white shadow-xl shadow-zinc-200/60 ring-1 ring-zinc-900/5'
                      : 'hover:bg-white/60'
                  }`}
                >
                  {/* Collapsed Header / Trigger Button */}
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isExpanded}
                    aria-controls={`service-panel-${service.number}`}
                    id={`service-header-${service.number}`}
                    className="w-full text-left py-6 sm:py-8 px-4 sm:px-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-2xl sm:rounded-3xl transition-colors"
                  >
                    <div className="flex items-center gap-4 sm:gap-8 min-w-0">
                      {/* Service Number */}
                      <span
                        className={`font-kanit font-black text-xl sm:text-2xl transition-colors shrink-0 ${
                          isExpanded ? 'text-black' : 'text-zinc-400 group-hover:text-zinc-600'
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Icon Pill */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isExpanded
                            ? 'bg-black text-white shadow-md'
                            : 'bg-zinc-200/70 text-zinc-700 group-hover:bg-zinc-200'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Title & Preview */}
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-kanit font-bold tracking-tight text-black truncate sm:whitespace-normal">
                          {service.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs sm:text-sm text-zinc-500 font-kanit line-clamp-1 mt-1 hidden sm:block">
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
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isExpanded
                            ? 'bg-black text-white rotate-180'
                            : 'bg-zinc-200/80 text-zinc-600 group-hover:bg-zinc-300 group-hover:text-black'
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
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-8 pb-8 pt-2 sm:pt-4 border-t border-zinc-100 flex flex-col md:flex-row md:items-start justify-between gap-8">
                          {/* Left: Description & Key Highlights */}
                          <div className="md:w-7/12 space-y-4">
                            <p className="text-base sm:text-lg text-zinc-700 font-kanit leading-relaxed font-normal">
                              {service.description}
                            </p>

                            <div className="space-y-2.5 pt-2">
                              {service.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </div>
                                  <span className="text-sm sm:text-base text-zinc-700 font-kanit">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right: Tech Tags & Discuss CTA */}
                          <div className="md:w-4/12 flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l border-zinc-200/80 pt-6 md:pt-0 md:pl-8">
                            <div>
                              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 mb-3 block font-kanit">
                                {servicesMeta.eyebrow}
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-kanit font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/80 shadow-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-2">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-kanit font-medium hover:bg-zinc-800 transition-colors shadow-md group/btn"
                              >
                                <span>{service.discussText}</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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

        {/* Bottom CTA within Sheet */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-300/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm font-kanit text-zinc-600 text-center sm:text-left">
            {servicesMeta.footerText}
          </span>
          <Magnet strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black text-white font-kanit font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <span>{servicesMeta.ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
};
