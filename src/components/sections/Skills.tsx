import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

import { skillsData, skillsMeta } from '@/data';
import { Heading } from '@/components/ui';
import { FadeIn, Magnet } from '@/components/motion';
import {
  Code,
  Terminal,
  Server,
  Cpu,
  Smartphone,
  Database,
  Network,
  Wrench,
  Palette,
  Globe,
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'design':
      return <Palette className="w-4 h-4 text-pink-400" />;
    case 'web development':
      return <Globe className="w-4 h-4 text-blue-400" />;
    case 'modern stack':
      return <Code className="w-4 h-4 text-cyan-400" />;
    case 'backend & cloud':
      return <Server className="w-4 h-4 text-emerald-400" />;
    case 'ai & apis':
      return <Cpu className="w-4 h-4 text-amber-400" />;
    case 'mobile & apps':
      return <Smartphone className="w-4 h-4 text-purple-400" />;
    case 'programming':
      return <Terminal className="w-4 h-4 text-yellow-400" />;
    case 'database':
      return <Database className="w-4 h-4 text-teal-400" />;
    case 'networking':
      return <Network className="w-4 h-4 text-sky-400" />;
    case 'tools & deployment':
    default:
      return <Wrench className="w-4 h-4 text-zinc-400" />;
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative z-10 w-full py-24 sm:py-32 px-6 max-w-7xl mx-auto bg-[#0C0C0C]"
      aria-label="Skills & Technologies"
    >
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <Heading
          title={skillsMeta.title}
          subtitle={skillsMeta.eyebrow}
          gradient
          align="center"
        />
        <FadeIn direction="up" delay={0.15}>
          <p className="max-w-xl text-zinc-400 font-kanit text-sm sm:text-base mt-4 leading-relaxed">
            {skillsMeta.subtitle}
          </p>
        </FadeIn>
      </div>

      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((category) => (
          <Magnet key={category.category} strength={0.2} className="h-full">
            <motion.div
              variants={shouldReduceMotion ? undefined : cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.02,
                      boxShadow:
                        '0 12px 30px -10px rgba(0,0,0,0.8), 0 0 24px 0 rgba(255,255,255,0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }
              }
              transition={{ duration: 0.25 }}
              className="h-full rounded-3xl p-6 sm:p-7 bg-zinc-950/60 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-zinc-900/60 flex flex-col justify-between gap-6 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-lg font-kanit font-bold uppercase tracking-wider text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -2,
                              scale: 1.05,
                              boxShadow: '0 0 16px rgba(255, 255, 255, 0.25)',
                              borderColor: 'rgba(255, 255, 255, 0.45)',
                            }
                      }
                      transition={{ duration: 0.15 }}
                      className="text-xs font-kanit font-medium text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl transition-colors hover:bg-white/10 hover:text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Magnet>
        ))}
      </motion.div>
    </section>
  );
};
