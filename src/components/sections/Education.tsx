import React from 'react';
import { educationData, educationMeta } from '@/data';
import { Heading } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative z-10 w-full py-20 sm:py-28 px-6 max-w-5xl mx-auto bg-[#0C0C0C]"
      aria-label="Education History"
    >
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <Heading
          title={educationMeta.title}
          subtitle={educationMeta.eyebrow}
          gradient
          align="center"
        />
        <FadeIn direction="up" delay={0.15}>
          <p className="max-w-xl text-zinc-400 font-kanit text-sm sm:text-base mt-4 leading-relaxed">
            {educationMeta.subtitle}
          </p>
        </FadeIn>
      </div>

      <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {educationData.map((item, index) => (
          <FadeIn
            key={item.degree}
            direction="left"
            delay={index * 0.1}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/50">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-kanit text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{item.period}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-kanit font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Score: {item.score}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-kanit font-bold text-white mb-2">
                {item.degree}
              </h3>

              <div className="flex items-center gap-2 text-sm sm:text-base text-zinc-400 font-kanit">
                <GraduationCap className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>{item.institution}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
