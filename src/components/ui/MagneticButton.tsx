import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useCanHover } from '@/hooks/useCanHover';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  href?: string;
  className?: string;
  strength?: number;
}

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
  const canHover = useCanHover();

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || !canHover) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseClass =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-medium text-base transition-colors duration-300 select-none';

  const variantClass =
    variant === 'primary'
      ? 'bg-text-heading text-white shadow-lifted hover:bg-brand-primary'
      : 'border border-border-strong bg-white text-text-heading shadow-soft hover:border-text-heading/30';

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
