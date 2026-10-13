import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData, servicesMeta } from '@/data';
import { FadeIn, Magnet } from '@/components/motion';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#F5F5F7] text-zinc-900 py-24 sm:py-32 px-6 rounded-t-[2.5rem] sm:rounded-t-[4rem] rounded-b-[2.5rem] sm:rounded-b-[4rem] shadow-2xl transition-colors duration-500 overflow-hidden"
      aria-label="Services and Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 sm:pb-20 border-b border-zinc-300/80">
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

        {/* Services List / Grid */}
        <div className="divide-y divide-zinc-200/90" role="list">
          {servicesData.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <FadeIn
                key={service.number}
                direction="up"
                delay={index * 0.08}
                className="w-full"
              >
                <div
                  role="listitem"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative py-8 sm:py-12 px-4 sm:px-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    isHovered ? 'bg-white shadow-xl shadow-zinc-200/50 -translate-y-1' : 'bg-transparent'
                  }`}
                >
                  {/* Left Column: Number + Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10 md:w-1/2">
                    <span className="font-kanit font-extrabold text-xl sm:text-2xl text-zinc-400 group-hover:text-black transition-colors shrink-0">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-kanit font-bold tracking-tight text-black transition-transform duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle Column: Description */}
                  <div className="md:w-5/12">
                    <p className="text-sm sm:text-base text-zinc-600 font-kanit leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow Indicator */}
                  <div className="hidden md:flex items-center justify-end md:w-1/12">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-black text-white scale-110'
                          : 'bg-zinc-200 text-zinc-600 group-hover:bg-zinc-300'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA within Sheet */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-300/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm font-kanit text-zinc-600 text-center sm:text-left">
            Have a custom requirement or startup idea? Let's discuss scope and architecture.
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
