import { type ReactNode, type ElementType } from 'react';
import { motion, type Variants } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  once?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className = '',
  once = true,
}: RevealProps) {
  const MotionTag = motion(as as ElementType);

  return (
    <MotionTag
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
