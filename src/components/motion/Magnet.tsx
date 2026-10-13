import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

export interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  active?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 0.3,
  className = '',
  active = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Detect touch-only / coarse pointer devices
    if (typeof window !== 'undefined') {
      const matchTouch = window.matchMedia('(pointer: coarse)');
      setIsTouch(matchTouch.matches || 'ontouchstart' in window);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsTouch(e.matches);
      };

      if (matchTouch.addEventListener) {
        matchTouch.addEventListener('change', handleChange);
        return () => matchTouch.removeEventListener('change', handleChange);
      }
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || isTouch || shouldReduceMotion || !ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isTouch || shouldReduceMotion || !active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
