import { motion } from 'framer-motion';
import { AccentText } from '@/components/ui/AccentText';

const EASE = [0.22, 1, 0.36, 1] as const;

interface SectionHeadingProps {
  badge?: string;
  heading: string;
  subheading?: string;
  center?: boolean;
}

export function SectionHeading({
  badge,
  heading,
  subheading,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-1.5 font-display text-sm font-medium text-text-heading shadow-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="mt-5 text-2xl-display font-semibold text-text-heading text-balance"
      >
        <AccentText text={heading} accentClassName="gradient-text" />
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-4 text-lg text-text-body text-balance"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
