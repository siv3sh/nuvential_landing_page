import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, type Variants } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  href?: string;
  className?: string;
  strength?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: 0 },
};

export function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  href,
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseClass =
    'relative inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 font-display font-medium text-base transition-colors duration-300 select-none';

  const variantClass =
    variant === 'primary'
      ? 'bg-brand-primary text-white hover:bg-brand-primary/90 glow-blue'
      : 'glass text-text-heading hover:bg-white/5';

  const content = (
    <motion.span
      variants={variants}
      initial="rest"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, ease: EASE }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className={`${baseClass} ${variantClass} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
